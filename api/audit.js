// Vercel Serverless Function — GEO Audit Scanner
// Ported from netlify/functions/scan-url.ts
import * as cheerio from 'cheerio';

function normalizeUrl(raw) {
  let url = raw.trim();
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }
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
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'QlavoGEOAuditBot/2.0 (GEO Audit Tool; +https://qlavo.in)',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
      redirect: 'follow',
    });
    return res;
  } finally {
    clearTimeout(id);
  }
}

async function fetchOptional(url) {
  try {
    const res = await fetchWithTimeout(url, 5000);
    if (res.ok && res.status === 200) {
      const text = await res.text();
      return text.length > 0 ? text : null;
    }
    return null;
  } catch {
    return null;
  }
}

function detectPlatform(href) {
  const h = href.toLowerCase();
  const map = [
    [/linkedin\.com/, 'linkedin.com'],
    [/twitter\.com/, 'twitter.com'],
    [/x\.com/, 'x.com'],
    [/youtube\.com/, 'youtube.com'],
    [/github\.com/, 'github.com'],
    [/crunchbase\.com/, 'crunchbase.com'],
    [/instagram\.com/, 'instagram.com'],
    [/facebook\.com/, 'facebook.com'],
    [/wikipedia\.org/, 'wikipedia.org'],
    [/angellist\.com|wellfound\.com/, 'angellist.com'],
    [/producthunt\.com/, 'producthunt.com'],
    [/reddit\.com/, 'reddit.com'],
  ];
  for (const [re, label] of map) {
    if (re.test(h)) return label;
  }
  return null;
}

export default async function handler(req, res) {
  const startTime = Date.now();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { url: rawUrl } = req.body || {};

    if (!rawUrl || typeof rawUrl !== 'string') {
      return res.status(400).json({ error: 'URL is required' });
    }

    const url = normalizeUrl(rawUrl);
    const urlObj = new URL(url);
    const origin = urlObj.origin;

    // Fetch main HTML page
    const response = await fetchWithTimeout(url);
    const contentType = response.headers.get('content-type') || '';

    if (!contentType.includes('text/html') && !contentType.includes('application/xhtml')) {
      return res.status(200).json({
        score: 0,
        band: 'critical',
        url,
        duration_ms: Date.now() - startTime,
        categories: {},
        recommendations: ['URL does not return HTML content'],
        error: null,
      });
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    const pageSize = html.length;
    const contentEncoding = response.headers.get('content-encoding') || '';
    const isGzipped = contentEncoding.includes('gzip') || contentEncoding.includes('br');

    const categories = {};
    const recommendations = [];

    // ── SSL ──
    {
      const score = url.startsWith('https://') ? 100 : 0;
      categories.ssl = {
        score,
        max: 100,
        details: score === 100 ? ['SSL/HTTPS enabled'] : ['Site is not served over HTTPS'],
      };
    }

    // ── Meta ──
    {
      let score = 0;
      const d = [];
      const checks = [
        { name: 'Title tag', found: !!$('title').text().trim(), pts: 20 },
        { name: 'Meta description', found: !!$('meta[name="description"]').attr('content'), pts: 20 },
        { name: 'Viewport meta', found: !!$('meta[name="viewport"]').attr('content'), pts: 15 },
        { name: 'Canonical URL', found: !!$('link[rel="canonical"]').attr('href'), pts: 20 },
        { name: 'Lang attribute', found: !!$('html').attr('lang'), pts: 15 },
        { name: 'Meta keywords', found: !!$('meta[name="keywords"]').attr('content'), pts: 10 },
      ];
      for (const c of checks) {
        if (c.found) { score += c.pts; d.push(`${c.name}: present`); }
        else d.push(`${c.name}: missing`);
      }
      if (score < 100) recommendations.push('Improve meta tags: add missing title, description, viewport, canonical, or lang attribute');
      categories.meta = { score, max: 100, details: d };
    }

    // ── Open Graph ──
    {
      let score = 0;
      const d = [];
      const ogChecks = [
        { prop: 'og:title', pts: 20 },
        { prop: 'og:description', pts: 15 },
        { prop: 'og:image', pts: 20 },
        { prop: 'og:url', pts: 15 },
        { prop: 'og:type', pts: 10 },
        { prop: 'twitter:card', pts: 10 },
        { prop: 'twitter:site', pts: 5 },
        { prop: 'og:site_name', pts: 5 },
      ];
      for (const c of ogChecks) {
        const found = !!$(`meta[property="${c.prop}"], meta[name="${c.prop}"]`).attr('content');
        if (found) { score += c.pts; d.push(`${c.prop}: present`); }
        else d.push(`${c.prop}: missing`);
      }
      if (score < 100) recommendations.push('Add Open Graph and Twitter Card meta tags for better social/AI preview');
      categories.og = { score, max: 100, details: d };
    }

    // ── Schema ──
    {
      let score = 0;
      const d = [];
      const schemaTypes = [];
      let hasOrg = false, hasPerson = false, hasFAQ = false, hasWebSite = false;

      $('script[type="application/ld+json"]').each((_, el) => {
        try {
          const raw = $(el).html() || '';
          const data = JSON.parse(raw);
          const items = Array.isArray(data) ? data : data['@graph'] || [data];
          for (const item of items) {
            if (item['@type']) {
              const types = Array.isArray(item['@type']) ? item['@type'] : [item['@type']];
              for (const t of types) {
                schemaTypes.push(t);
                if (/Organization|Corporation/i.test(t)) hasOrg = true;
                if (/Person/i.test(t)) hasPerson = true;
                if (/FAQPage/i.test(t)) hasFAQ = true;
                if (/WebSite|WebPage|Place|LocalBusiness/i.test(t)) hasWebSite = true;
              }
            }
          }
        } catch { /* skip invalid JSON-LD */ }
      });

      const uniqueTypes = [...new Set(schemaTypes)];
      if (uniqueTypes.length > 0) {
        score += 30;
        d.push(`Found ${uniqueTypes.length} schema type(s): ${uniqueTypes.join(', ')}`);
      } else {
        d.push('No JSON-LD schema found');
      }

      if ($('[itemprop]').length > 0) { score += 10; d.push('Found inline microdata (itemprop)'); }
      if (hasOrg) { score += 25; d.push('Organization schema present'); }
      else d.push('Organization schema missing');
      if (hasPerson) { score += 10; d.push('Person schema present'); }
      if (hasFAQ) { score += 10; d.push('FAQ schema present'); }
      else d.push('FAQ schema missing — consider adding FAQ structured data');
      if (hasWebSite) { score += 15; d.push('WebSite/LocalBusiness schema present'); }

      score = Math.min(score, 100);
      if (score < 70) recommendations.push('Add JSON-LD structured data with Organization schema');
      if (!hasOrg) recommendations.push('Add Organization schema to improve entity recognition');
      categories.schema = { score, max: 100, details: d };
    }

    // ── Robots ──
    {
      const robotsContent = await fetchOptional(`${origin}/robots.txt`);
      let score = 0;
      const d = [];

      if (robotsContent) {
        score += 30;
        d.push('robots.txt exists');
        const lines = robotsContent.split('\n');
        const sitemapRefs = lines.filter(l => l.toLowerCase().startsWith('sitemap:'));
        if (sitemapRefs.length > 0) {
          score += 15;
          d.push(`References ${sitemapRefs.length} sitemap(s) in robots.txt`);
        }
        const aiBots = ['GPTBot', 'CCBot', 'Claude-Web', 'Google-Extended', 'PerplexityBot', 'anthropic-ai', 'FacebookBot'];
        const foundAiBots = aiBots.filter(bot => lines.some(l => l.toLowerCase().includes(bot.toLowerCase())));
        if (foundAiBots.length > 0) {
          score += Math.min(foundAiBots.length * 5, 25);
          d.push(`AI bot rules found for: ${foundAiBots.join(', ')}`);
        } else {
          d.push('No AI-specific bot rules found (GPTBot, CCBot, etc.)');
        }
        const disallowAll = lines.some(l => /^disallow:\s*\/\s*$/i.test(l));
        if (disallowAll) {
          d.push('WARNING: robots.txt disallows all crawlers (Disallow: /)');
          score -= 20;
        } else {
          score += 20;
          d.push('No blanket disallow of all crawlers');
        }
        if (lines.some(l => l.toLowerCase().startsWith('crawl-delay'))) {
          score += 10;
          d.push('Crawl-Delay directive present');
        }
      } else {
        d.push('robots.txt not found — create one to guide crawlers');
        recommendations.push('Create a robots.txt file to guide AI crawlers');
      }
      score = Math.max(0, Math.min(score, 100));
      categories.robots = { score, max: 100, details: d };
    }

    // ── Sitemap ──
    {
      const sitemapContent = await fetchOptional(`${origin}/sitemap.xml`);
      let score = 0;
      const d = [];

      if (sitemapContent) {
        score += 50;
        d.push('sitemap.xml exists');
        const trimmed = sitemapContent.trim();
        if (trimmed.startsWith('<?xml') || trimmed.startsWith('<urlset') || trimmed.startsWith('<sitemapindex')) {
          score += 30;
          d.push('sitemap.xml appears to be valid XML');
          const urlCount = (sitemapContent.match(/<url>/g) || []).length;
          const sitemapRefCount = (sitemapContent.match(/<sitemap>/g) || []).length;
          if (urlCount > 0) { score += 10; d.push(`Contains ${urlCount} URL(s)`); }
          if (sitemapRefCount > 0) { score += 10; d.push(`Contains ${sitemapRefCount} sitemap reference(s)`); }
        } else {
          d.push('sitemap.xml may not be valid XML');
        }
      } else {
        d.push('sitemap.xml not found');
        recommendations.push('Create a sitemap.xml to help crawlers discover your pages');
      }
      score = Math.min(score, 100);
      categories.sitemap = { score, max: 100, details: d };
    }

    // ── LLMS.txt ──
    {
      const llmsContent = await fetchOptional(`${origin}/llms.txt`);
      let score = 0;
      const d = [];

      if (llmsContent) {
        score += 50;
        d.push('llms.txt exists');
        const sections = llmsContent.match(/^##\s+/gm);
        if (sections && sections.length > 0) {
          score += 25;
          d.push(`Has ${sections.length} section(s) (proper format)`);
        } else {
          d.push('No sections found — consider adding ## sections');
        }
        const links = llmsContent.match(/\[.*?\]\(https?:\/\/.+?\)/g);
        if (links && links.length > 0) {
          score += 25;
          d.push(`Contains ${links.length} link(s)`);
        } else {
          d.push('No links found in llms.txt');
        }
      } else {
        d.push('llms.txt not found');
        recommendations.push('Create an llms.txt file to give LLMs direct context about your site');
      }
      categories.llms = { score, max: 100, details: d };
    }

    // ── Content ──
    {
      let score = 0;
      const d = [];

      const h1Count = $('h1').length;
      if (h1Count === 1) { score += 20; d.push('Exactly one H1 tag found'); }
      else if (h1Count === 0) d.push('No H1 tag found — each page should have exactly one H1');
      else { score += 5; d.push(`${h1Count} H1 tags found — should have exactly one`); }

      const h2Count = $('h2').length;
      const h3Count = $('h3').length;
      if (h2Count > 0) { score += 10; d.push(`${h2Count} H2 heading(s) found`); }
      else d.push('No H2 headings found');
      if (h3Count > 0) { score += 5; d.push(`${h3Count} H3 heading(s) found`); }

      const text = $('body').text().trim();
      const wordCount = text.split(/\s+/).filter(w => w.length > 0).length;
      if (wordCount >= 300) { score += 25; d.push(`Word count: ${wordCount} (good)`); }
      else if (wordCount >= 150) { score += 10; d.push(`Word count: ${wordCount} (adequate, aim for 300+)`); }
      else d.push(`Word count: ${wordCount} (low, should be 300+)`);

      const listItems = $('li').length;
      if (listItems > 0) { score += 10; d.push(`${listItems} list item(s) found`); }
      else d.push('No list items found');

      const paraCount = $('p').length;
      if (paraCount >= 3) { score += 10; d.push(`${paraCount} paragraphs found`); }
      else if (paraCount > 0) { score += 5; d.push(`Only ${paraCount} paragraph(s) found`); }
      else d.push('No paragraphs found');

      const imgs = $('img');
      const imgsWithAlt = imgs.filter((_, el) => !!$(el).attr('alt')).length;
      if (imgs.length > 0) {
        const altRatio = Math.round((imgsWithAlt / imgs.length) * 100);
        if (altRatio >= 80) { score += 10; d.push(`${imgsWithAlt}/${imgs.length} images have alt text (${altRatio}%)`); }
        else d.push(`Only ${imgsWithAlt}/${imgs.length} images have alt text (${altRatio}%)`);
      }

      const tableCount = $('table').length;
      if (tableCount > 0) { score += 5; d.push(`${tableCount} table(s) found`); }
      const codeBlocks = $('pre, code').length;
      if (codeBlocks > 0) { score += 5; d.push(`${codeBlocks} code block(s) found`); }

      score = Math.min(score, 100);
      if (score < 60) recommendations.push('Improve content: add more text (300+ words), proper headings, and structured content');
      categories.content = { score, max: 100, details: d };
    }

    // ── Headings ──
    {
      let score = 0;
      const d = [];
      const headings = [];

      $('h1, h2, h3, h4, h5, h6').each((_, el) => {
        const tag = ($(el).prop('tagName') || '').toLowerCase();
        headings.push({ tag, level: parseInt(tag.replace('h', '')) });
      });

      if (headings.length === 0) {
        d.push('No headings found on page');
      } else {
        if (headings[0].level === 1) { score += 20; d.push('Headings start at H1 (correct)'); }
        else d.push(`Headings start at H${headings[0].level} — should start at H1`);

        let skipFound = false;
        for (let i = 1; i < headings.length; i++) {
          const prev = headings[i - 1].level;
          const curr = headings[i].level;
          if (curr > prev + 1) {
            if (!skipFound) { d.push(`Heading level skip: H${prev} → H${curr}`); skipFound = true; }
            score -= 5;
          }
        }
        if (!skipFound) { score += 30; d.push('No heading level skips (proper hierarchy)'); }

        const levels = new Set(headings.map(h => h.level));
        if (levels.size >= 2) { score += 20; d.push(`Good heading variety (${levels.size} different levels)`); }
        else d.push('Only one heading level used — consider adding sub-sections');

        if (headings.length >= 3) { score += 20; d.push(`${headings.length} total headings`); }
        else if (headings.length > 0) { score += 10; d.push(`Only ${headings.length} heading(s)`); }
      }
      score = Math.max(0, Math.min(score, 100));
      if (score < 60) recommendations.push('Fix heading hierarchy: start with H1, use sequential H2→H3 without skipping levels');
      categories.headings = { score, max: 100, details: d };
    }

    // ── Links ──
    {
      let score = 0;
      const d = [];

      const internalLinks = $(`a[href^="/"], a[href^="${origin}"], a[href^="${url}"]`).length;
      const allLinks = $('a[href]').length;
      const externalLinks = allLinks - internalLinks;

      if (internalLinks > 0) { score += 25; d.push(`${internalLinks} internal link(s) found`); }
      else d.push('No internal links found');

      if (externalLinks > 0) {
        score += 15;
        d.push(`${externalLinks} external link(s) found`);
        const externalWithRel = $(`a[href^="http"]:not([href^="${origin}"], [href^="${url}"]):not([rel=""])`).length;
        if (externalWithRel > 0) { score += 20; d.push(`${externalWithRel} external link(s) have rel attributes`); }
        else d.push('External links missing rel attributes (nofollow, noopener)');
      } else {
        d.push('No external links found');
      }

      const navLinks = $('nav a, header a').length;
      if (navLinks > 0) { score += 15; d.push('Navigation links present'); }

      const anchorsWithoutText = $('a').filter((_, el) => !$(el).text().trim()).length;
      if (anchorsWithoutText > 0) { d.push(`${anchorsWithoutText} link(s) missing anchor text`); score -= 10; }

      if ($('a[href^="mailto:"]').length > 0) { score += 5; d.push('Contact/email link found'); }

      score = Math.max(0, Math.min(score, 100));
      if (score < 50) recommendations.push('Improve link structure: add internal links, ensure external links have rel attributes');
      categories.links = { score, max: 100, details: d };
    }

    // ── Brand / sameAs ──
    {
      let score = 0;
      const d = [];
      const foundPlatforms = [];

      $('script[type="application/ld+json"]').each((_, el) => {
        try {
          const data = JSON.parse($(el).html() || '{}');
          const items = Array.isArray(data) ? data : data['@graph'] || [data];
          for (const item of items) {
            if (item.sameAs && Array.isArray(item.sameAs)) {
              for (const link of item.sameAs) {
                const p = detectPlatform(link);
                if (p) foundPlatforms.push(p);
              }
            }
          }
        } catch { /* skip */ }
      });

      $('a[href]').each((_, el) => {
        const href = $(el).attr('href') || '';
        const p = detectPlatform(href);
        if (p) foundPlatforms.push(p);
      });

      const uniquePlatforms = [...new Set(foundPlatforms)];
      const platformChecks = [
        { name: 'LinkedIn', patterns: ['linkedin.com'], pts: 20 },
        { name: 'Twitter/X', patterns: ['twitter.com', 'x.com'], pts: 15 },
        { name: 'YouTube', patterns: ['youtube.com'], pts: 10 },
        { name: 'GitHub', patterns: ['github.com'], pts: 10 },
        { name: 'Crunchbase', patterns: ['crunchbase.com'], pts: 10 },
        { name: 'Instagram', patterns: ['instagram.com'], pts: 5 },
        { name: 'Facebook', patterns: ['facebook.com'], pts: 5 },
        { name: 'Wikipedia', patterns: ['wikipedia.org'], pts: 10 },
        { name: 'AngelList/Wellfound', patterns: ['angellist.com', 'wellfound.com'], pts: 5 },
        { name: 'Product Hunt', patterns: ['producthunt.com'], pts: 5 },
        { name: 'Reddit', patterns: ['reddit.com'], pts: 5 },
      ];

      for (const plat of platformChecks) {
        const found = uniquePlatforms.some(p => plat.patterns.some(pat => p.includes(pat)));
        if (found) { score += plat.pts; d.push(`${plat.name}: present`); }
        else d.push(`${plat.name}: not found`);
      }

      score = Math.min(score, 100);
      if (score < 40) recommendations.push('Add social/business profiles (LinkedIn, Twitter, Crunchbase) and reference them via sameAs in schema');
      categories.brand = { score, max: 100, details: d };
    }

    // ── Performance ──
    {
      let score = 0;
      const d = [];

      const sizeKB = pageSize / 1024;
      if (sizeKB < 500) { score += 40; d.push(`Page size: ${sizeKB.toFixed(0)}KB (under 500KB)`); }
      else if (sizeKB < 1024) { score += 20; d.push(`Page size: ${sizeKB.toFixed(0)}KB (moderate, aim for under 500KB)`); }
      else d.push(`Page size: ${sizeKB.toFixed(0)}KB (large, should be under 500KB)`);

      if (isGzipped) { score += 30; d.push('Content-Encoding: gzip or brotli detected'); }
      else d.push('No gzip/brotli compression detected');
      if (response.headers.get('server-timing')) { score += 15; d.push('Server-Timing header present'); }
      const lazyImages = $('img[loading="lazy"]').length;
      if (lazyImages > 0) { score += 15; d.push(`${lazyImages} image(s) use lazy loading`); }

      score = Math.min(score, 100);
      if (score < 50) recommendations.push('Optimize page performance: enable compression, reduce page size, add lazy loading');
      categories.performance = { score, max: 100, details: d };
    }

    // ── Weighted final score ──
    const weights = {
      schema: 15, meta: 10, og: 10, robots: 10, sitemap: 5,
      llms: 10, content: 15, headings: 5, ssl: 5, links: 5, brand: 5, performance: 5,
    };

    let weightedScore = 0;
    for (const [key, cat] of Object.entries(categories)) {
      const w = weights[key] || 0;
      weightedScore += (cat.score / 100) * w;
    }

    const finalScore = Math.round(weightedScore);
    const band = getBand(finalScore);
    const uniqueRecs = recommendations.filter((r, i) => recommendations.indexOf(r) === i);

    return res.status(200).json({
      score: finalScore,
      band,
      url,
      duration_ms: Date.now() - startTime,
      categories,
      recommendations: uniqueRecs,
      error: null,
    });

  } catch (error) {
    return res.status(200).json({
      score: 0,
      band: 'critical',
      url: '',
      duration_ms: Date.now() - startTime,
      categories: {},
      recommendations: ['An error occurred during scanning: ' + error.message],
      error: error.message,
    });
  }
}
