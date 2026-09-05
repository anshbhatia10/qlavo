/**
 * Build-time prerender: StaticRouter + renderToString + react-helmet-async.
 * Writes dist/<route>/index.html so no-JS crawlers (GPTBot) see unique titles/H1s.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');

export const PRERENDER_ROUTES = [
  '/',
  '/about',
  '/contact',
  '/pricing',
  '/partners',
  '/sample-deliverable',
  '/ai-visibility',
  '/geo-resources',
  '/ai-search-report-2026',
  '/ai-glossary',
  '/geo-calculator',
  '/blog',
  '/top-7-geo-signals-2026',
  '/blog/7-signals-ai-engines-brand-exists',
  '/blog/top-geo-agencies-b2b-2026',
  '/blog/hubspot-geo-audit-2026',
  '/blog/state-of-ai-search-april-2026',
  '/geo-agency-delhi-india',
  '/hire-geo-agency',
  '/what-is-generative-engine-optimization',
  '/geo-pricing-cost-guide-2026',
  '/geo-vs-seo-vs-aeo-differences',
  '/geo-statistics-2026',
  '/reddit/best-geo-tools',
  '/reddit/geo-vs-seo',
  '/reddit/get-cited-chatgpt',
  '/reddit/geo-pricing',
  '/reddit/best-geo-agencies',
  '/reddit/is-geo-worth-it',
  '/reddit/ai-visibility-audit',
];

function stripTag(html, pattern) {
  return html.replace(pattern, '');
}

function inject(template, appHtml, helmet) {
  const rootOpen = template.indexOf('<div id="root">');
  const bodyClose = template.lastIndexOf('</body>');
  if (rootOpen === -1 || bodyClose === -1) {
    throw new Error('Could not find #root or </body> in dist/index.html');
  }
  const rootClose = template.lastIndexOf('</div>', bodyClose);
  if (rootClose === -1 || rootClose < rootOpen) {
    throw new Error('Could not find closing </div> for #root in dist/index.html');
  }
  let html =
    template.slice(0, rootOpen) +
    `<div id="root">${appHtml}</div>` +
    template.slice(rootClose + '</div>'.length);

  // Drop homepage-only tags Helmet will replace so crawlers don't see duplicates.
  html = stripTag(html, /<title>[\s\S]*?<\/title>/i);
  html = stripTag(html, /<meta\s+name=["']description["'][^>]*>/i);
  html = stripTag(html, /<link\s+rel=["']canonical["'][^>]*>/i);
  html = stripTag(html, /<meta\s+property=["']og:url["'][^>]*>/i);
  html = stripTag(html, /<meta\s+property=["']og:title["'][^>]*>/i);
  html = stripTag(html, /<meta\s+property=["']og:description["'][^>]*>/i);
  html = stripTag(html, /<meta\s+name=["']twitter:title["'][^>]*>/i);
  html = stripTag(html, /<meta\s+name=["']twitter:description["'][^>]*>/i);
  html = stripTag(html, /<meta\s+name=["']twitter:url["'][^>]*>/i);

  const helmetHead = [
    helmet?.title?.toString?.() ?? '',
    helmet?.priority?.toString?.() ?? '',
    helmet?.meta?.toString?.() ?? '',
    helmet?.link?.toString?.() ?? '',
    helmet?.script?.toString?.() ?? '',
  ]
    .filter(Boolean)
    .join('\n    ');

  html = html.replace(/<head([^>]*)>/i, `<head$1>\n    ${helmetHead}`);
  return html;
}

function outFileFor(url) {
  if (url === '/') return path.join(dist, 'index.html');
  return path.join(dist, url.replace(/^\//, ''), 'index.html');
}

const vite = await createServer({
  root,
  server: { middlewareMode: true, hmr: false },
  appType: 'custom',
  logLevel: 'error',
  define: {
    'process.env.API_KEY': JSON.stringify(''),
    'process.env.GEMINI_API_KEY': JSON.stringify(''),
  },
});

try {
  const templatePath = path.join(dist, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html missing — run vite build first');
  }
  const template = fs.readFileSync(templatePath, 'utf8');
  const { render } = await vite.ssrLoadModule('/entry-server.tsx');

  const results = [];
  for (const url of PRERENDER_ROUTES) {
    const helmetContext = {};
    const appHtml = render(url, helmetContext);
    const html = inject(template, appHtml, helmetContext.helmet);
    const outfile = outFileFor(url);
    fs.mkdirSync(path.dirname(outfile), { recursive: true });
    fs.writeFileSync(outfile, html);
    const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
    results.push({ url, file: path.relative(dist, outfile), title: titleMatch?.[1] || '(no title)' });
    console.log(`prerendered ${url} -> ${path.relative(root, outfile)}`);
  }

  const reportPath = path.join(dist, 'prerender-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`prerender complete: ${results.length} routes`);
} finally {
  await vite.close();
}
