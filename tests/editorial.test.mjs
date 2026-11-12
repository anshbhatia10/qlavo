import { after, test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { load } from 'cheerio';

const vite = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom', logLevel: 'error' });
after(() => vite.close());
const { render } = await vite.ssrLoadModule('/entry-server.tsx');
const { marketingRoutes } = await vite.ssrLoadModule('/route-pages.ts');
const routes = new Set(marketingRoutes.map(([path]) => path));
const page = path => load(render(path, {}));

function assertSEO($, path) {
  assert.equal($('h1').length, 1);
  assert.equal($('title').length, 1);
  assert.equal($('meta[name="description"]').length, 1);
  assert.equal($('link[rel="canonical"]').length, 1);
  assert.equal($('link[rel="canonical"]').attr('href'), `https://qlavo.in${path}`);
  for (const link of $('.ed-hub a[href^="/"]').toArray()) {
    assert.ok(routes.has($(link).attr('href').split('#')[0]), `Real route: ${$(link).attr('href')}`);
  }
}

test('journal is an accessible dated editorial index with all retained articles', () => {
  const $ = page('/blog');
  assertSEO($, '/blog');
  assert.equal($('.ed-hub').length, 1);
  assert.match($('h1').text(), /Qlavo Journal/);
  const retained = [
    ['/blog/7-signals-ai-engines-brand-exists', '2026-05-26', 'May 26, 2026'],
    ['/blog/hubspot-geo-audit-2026', '2026-04-13', 'April 13, 2026'],
    ['/blog/top-geo-agencies-b2b-2026', '2026-04-28', 'April 28, 2026'],
    ['/blog/state-of-ai-search-april-2026', '2026-04-21', 'April 21, 2026'],
  ];
  assert.equal($('.ed-hub article').length, retained.length);
  for (const [href, isoDate, date] of retained) {
    const article = $(`.ed-hub article:has(a[href="${href}"])`);
    assert.equal(article.length, 1, href);
    assert.equal(article.find(`time[datetime="${isoDate}"]`).text(), date);
    assert.ok(article.find('h2 a').length, 'descriptive article title is a link');
  }
  assert.equal($('.ed-hub .bento-card, .ed-hub [class*="bg-gradient"]').length, 0);
  assert.ok($('.ed-hub nav[aria-label="Journal sections"] a[href="#all-articles"]').length);
  assert.ok($('.ed-hub a[href="/geo-resources"]').length);
  assert.doesNotMatch($('.ed-hub').text(), /Subscribe|No fluff|Just data|We audited 15|surprising technical gaps|best Generative Engine Optimization agencies/);
  assert.match($('.ed-hub').text(), /not client case studies/i);
});

test('resource library retains a substantive navigable GEO guide without guaranteed outcomes', () => {
  const $ = page('/geo-resources');
  assertSEO($, '/geo-resources');
  assert.equal($('.ed-hub').length, 1);
  assert.match($('h1').text(), /Generative Engine Optimization/);
  assert.equal($('nav[aria-label="Guide contents"]').length, 1);
  for (const id of ['definition', 'seo-vs-geo', 'pillars', 'platforms', 'checklist', 'opportunity']) {
    assert.equal($(`section#${id}`).length, 1);
    assert.ok($(`nav[aria-label="Guide contents"] a[href="#${id}"]`).length);
    assert.equal($(`section#${id} > h2`).length, 1);
  }
  const guideText = $('.ed-guide-content').text().replace(/\s+/g, ' ');
  assert.ok(guideText.split(' ').length > 1500, 'retain substantial guidance, not a thin link hub');
  for (const topic of ['Entity Consistency', 'High-Authority Content', 'Q&A Structured Content', 'Citation Networks', 'Recency Signals', 'ChatGPT', 'Gemini', 'Perplexity', 'Claude']) {
    assert.ok(guideText.includes(topic), `Retained topic: ${topic}`);
  }
  assert.equal($('#checklist ol > li').length, 10);
  assert.equal($('#seo-vs-geo table caption').length, 1);
  assert.equal($('#seo-vs-geo th[scope="col"]').length, 3);
  for (const href of ['/contact', '/ai-visibility', '/blog', '/ai-glossary', '/geo-vs-seo-vs-aeo-differences']) {
    assert.ok($(`.ed-hub a[href="${href}"]`).length, href);
  }
  for (const a of $('.ed-hub a[href^="#"]').toArray()) {
    assert.equal($($(a).attr('href')).length, 1, 'unique and valid chapter target');
  }
  assert.doesNotMatch($('.ed-hub').text(), /less than 1%|single biggest cause|500 million|200M\+|100M\+|Free AI Audit|skips you entirely|single well-written Medium article/i);
  assert.match(guideText, /not guarantee|no guarantee|cannot guarantee/i);
  assert.equal($('.ed-hub .bento-card, .ed-hub [class*="bg-gradient"]').length, 0);
});
