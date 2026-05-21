// Vercel Serverless Function — GEO Audit Scanner
import * as cheerio from 'cheerio';

function normalizeUrl(raw) {
  let url = raw.trim();
  if (!url.startsWith('http://') && !url.startsWith('https://')) url = 'https://' + url;
  return url.replace(/\/+$/, '');
}

function getBand(score) {
  if (score <= 30) return 'critical';
  if (score <= 50) return 'poor';
  if (score <= 70) return 'needs-work';
  if (score <= 85) return 'good';
  return 'excellent';
}

async function fetchWithTimeout(url, ms = 10000) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, { signal: ctrl.signal, headers: { 'User-Agent': 'QlavoGEOAuditBot/2.0', Accept: 'text/html,*/*' }, redirect: 'follow' });
  } finally { clearTimeout(id); }
}

async function fetchOptional(url) {
  try {
    const res = await fetchWithTimeout(url, 5000);
    return (res.ok && res.status === 200) ? await res.text() : null;
  } catch { return null; }
}

function detectPlatform(href) {
  const h = href.toLowerCase();
  const map = [[/linkedin\.com/, 'linkedin'], [/twitter\.com|twitter|\.com/, 'twitter'], [/youtube\.com/, 'youtube'], [/github\.com/, 'github'], [/crunchbase\.com/, 'crunchbase'], [/instagram\.com/, 'instagram'], [/facebook\.com/, 'facebook'], [/wikipedia\.org/, 'wikipedia'], [/producthunt\.com/, 'producthunt']];
  for (const [re, label] of map) if (re.test(h)) return label;
  return null;
}

export default async function handler(req, res) {
  const start = Date.now();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  try {
    const rawUrl = req.body?.url;
    if (!rawUrl || typeof rawUrl !== 'string') return res.status(400).json({ error: 'URL is required' });

    const url = normalizeUrl(rawUrl);
    const origin = new URL(url).origin;
    const response = await fetchWithTimeout(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const gzipped = (response.headers.get('content-encoding') || '').includes('gzip');
    const cats = {};
    const recs = [];

    // SSL
    cats.ssl = { score: url.startsWith('https://') ? 100 : 0, max: 100, details: [url.startsWith('https://') ? 'HTTPS enabled' : 'No HTTPS'] };

    // Meta
    let ms = 0; const md = [];
    [
      ['Title', !!$('title').text().trim(), 20],
      ['Description', !!$('meta[name="description"]').attr('content'), 20],
      ['Viewport', !!$('meta[name="viewport"]').attr('content'), 15],
      ['Canonical', !!$('link[rel="canonical"]').attr('href'), 20],
      ['Lang', !!$('html').attr('lang'), 15],
      ['Keywords', !!$('meta[name="keywords"]').attr('content'), 10],
    ].forEach(([n, f, p]) => { if (f) { ms += p; md.push(n + ': present'); } else md.push(n + ': missing'); });
    cats.meta = { score: ms, max: 100, details: md };

    // OG
    let os = 0; const od = [];
    ['og:title','og:description','og:image','og:url','og:type','twitter:card','twitter:site','og:site_name'].forEach((p, i) => {
      const pts = [20,15,20,15,10,10,5,5][i];
      if ($(`meta[property="${p}"], meta[name="${p}"]`).attr('content')) { os += pts; od.push(p + ': present'); }
    });
    cats.og = { score: os, max: 100, details: od };

    // Schema
    let sc = 0; const sd = []; let hasOrg = false;
    $('script[type="application/ld+json"]').each((_, el) => {
      try {
        const data = JSON.parse($(el).html() || '{}');
        (Array.isArray(data) ? data : data['@graph'] || [data]).forEach(item => {
          const types = Array.isArray(item['@type']) ? item['@type'] : [item['@type']];
          types.forEach(t => { if (/Organization/i.test(t)) hasOrg = true; });
        });
      } catch {}
    });
    if (hasOrg) { sc += 65; sd.push('Organization schema present'); }
    else sd.push('Organization schema missing');
    if ($('[itemprop]').length > 0) { sc += 20; sd.push('Microdata found'); }
    if ($('script[type="application/ld+json"]').length > 0) { sc += 15; sd.push('JSON-LD found'); }
    cats.schema = { score: Math.min(sc, 100), max: 100, details: sd };

    // Robots
    const robots = await fetchOptional(origin + '/robots.txt');
    let rs = 0; const rd = [];
    if (robots) {
      rs += 50; rd.push('robots.txt exists');
      const lines = robots.split('\n');
      if (lines.some(l => /^disallow:\s*\/\s*$/i.test(l))) rd.push('WARNING: Disallow: /');
      else { rs += 30; rd.push('No blanket disallow'); }
      if (lines.some(l => l.toLowerCase().startsWith('sitemap:'))) { rs += 20; rd.push('Sitemap referenced'); }
    } else { rd.push('robots.txt not found'); recs.push('Create robots.txt'); }
    cats.robots = { score: Math.min(rs, 100), max: 100, details: rd };

    // Sitemap
    const sitemap = await fetchOptional(origin + '/sitemap.xml');
    cats.sitemap = { score: sitemap ? 100 : 0, max: 100, details: [sitemap ? 'sitemap.xml exists' : 'Not found'] };

    // LLMs.txt
    const llms = await fetchOptional(origin + '/llms.txt');
    cats.llms = { score: llms ? 100 : 0, max: 100, details: [llms ? 'llms.txt exists' : 'Not found'] };

    // Content
    let cs = 0; const cd = [];
    const wc = $('body').text().trim().split(/\s+/).filter(Boolean).length;
    if (wc >= 300) { cs += 40; cd.push(wc + ' words'); }
    if ($('h1').length === 1) cs += 20;
    if ($('h2').length > 0) cs += 15;
    if ($('li').length > 0) cs += 15;
    if ($('p').length >= 3) cs += 10;
    cats.content = { score: Math.min(cs, 100), max: 100, details: cd.length ? cd : ['Content analyzed'] };

    // Links
    let ls = 50;
    if ($('a[href]').length > 0) ls += 25;
    if ($('nav a').length > 0) ls += 25;
    cats.links = { score: Math.min(ls, 100), max: 100, details: ['Links checked'] };

    // Brand
    let bs = 0; const bd = [];
    $('a[href]').each((_, el) => { const p = detectPlatform($(el).attr('href') || ''); if (p) bd.push(p); });
    const unique = [...new Set(bd)];
    bs = Math.min(unique.length * 12, 100);
    cats.brand = { score: bs, max: 100, details: [unique.length + ' platform(s): ' + unique.join(', ')] };

    // Headings
    const hCount = $('h1, h2, h3, h4, h5, h6').length;
    cats.headings = { score: hCount >= 3 ? 100 : hCount > 0 ? 50 : 0, max: 100, details: [hCount + ' heading(s)'] };

    // Performance
    const sz = html.length / 1024;
    let ps = 0;
    if (sz < 500) ps += 50;
    if (gzipped) ps += 30;
    if ($('img[loading="lazy"]').length > 0) ps += 20;
    cats.performance = { score: ps, max: 100, details: [sz.toFixed(0) + 'KB' + (gzipped ? ' (gzipped)' : '')] };

    // Weighted score
    const weights = { schema: 15, meta: 10, og: 10, robots: 10, sitemap: 5, llms: 10, content: 15, headings: 5, ssl: 5, links: 5, brand: 5, performance: 5 };
    let total = 0;
    Object.entries(cats).forEach(([k, v]) => total += (v.score / 100) * (weights[k] || 0));

    res.status(200).json({
      score: Math.round(total), band: getBand(total), url,
      duration_ms: Date.now() - start, categories: cats,
      recommendations: [...new Set(recs)].slice(0, 10), error: null,
    });
  } catch (err) {
    res.status(200).json({ score: 0, band: 'critical', url: '', duration_ms: Date.now() - start, categories: {}, recommendations: ['Error: ' + err.message], error: err.message });
  }
}
