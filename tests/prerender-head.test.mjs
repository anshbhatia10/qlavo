import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { inject } from '../scripts/html-shell.mjs';
import { createServer } from 'vite';
import { load } from 'cheerio';

const template = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const vite = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom', logLevel: 'error' });
after(() => vite.close());
const { render } = await vite.ssrLoadModule('/entry-server.tsx');
const prerenderSource = fs.readFileSync(new URL('../scripts/prerender.mjs', import.meta.url), 'utf8');
const routes = [...prerenderSource.match(/export const PRERENDER_ROUTES = \[([\s\S]*?)\];/)[1].matchAll(/'([^']+)'/g)].map(match => match[1]);

const rawHead = html => html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)[1];
const headDOM = html => load(rawHead(html), {}, false);
const required = ['title', 'meta[name="description"]', 'link[rel="canonical"]',
  ...['url', 'title', 'description', 'image'].map(name => `meta[property="og:${name}"]`),
  ...['url', 'title', 'description', 'image', 'card'].map(name => `meta[name="twitter:${name}"]`)];

test('real React SSR puts route metadata inside the raw HTML head', () => {
  const context = {};
  const appHtml = render('/contact', context);
  const html = inject(template, appHtml, context.helmet);
  const $ = headDOM(html);
  for (const selector of required) assert.equal($(selector).length, 1, `${selector} must occur once in raw head`);
  assert.equal($('title').text(), load(appHtml)('title').text());
  assert.equal($('link[rel="canonical"]').attr('href'), 'https://qlavo.in/contact');
  const body = html.slice(html.indexOf('</head>') + '</head>'.length);
  assert.doesNotMatch(body, /<title\b|<meta\b|<link[^>]+rel="canonical"/i);
  assert.ok(html.includes('<h1'), 'SSR content remains present');
  const organization = JSON.parse($('script[type="application/ld+json"]').first().text());
  assert.equal(organization['@type'], 'Organization');
  assert.equal(organization['@id'], 'https://qlavo.in#organization');
});


test('native hoisting preserves body bytes, React comments, microdata and JSON-LD', () => {
  const body = '<main><h1>A &amp; B</h1><!--$--><span>one</span><!-- -->two<!--/$--><meta itemprop="name" content="Entity"/><script type="application/ld+json">{"@type":"WebPage","name":"A & B","description":"literal <meta name=\"x\">"}</script></main>';
  const metadata = '<title>Route &amp; title</title><meta name="description" content="Route &amp; description"/><link rel="canonical" href="https://qlavo.in/test"/>';
  const html = inject(template, metadata + body);
  assert.ok(html.includes(`<div id="root">${body}</div>`), 'body must remain byte-for-byte intact');
  assert.ok(rawHead(html).includes(metadata.replaceAll('/><', '/>\n    <').replace('</title><', '</title>\n    <')));
});

test('legacy Helmet replaces shell metadata and preserves page schema', () => {
  const pageSchema = '<script data-rh="true" type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","name":"Legacy"}</script>';
  const helmet = {
    title: '<title data-rh="true">Legacy title</title>',
    priority: '<meta data-rh="true" property="og:title" content="Legacy title"/>',
    meta: '<meta data-rh="true" name="description" content="Legacy description"/><meta data-rh="true" name="twitter:card" content="summary"/>',
    link: '<link data-rh="true" rel="canonical" href="https://qlavo.in/legacy"/>',
    script: pageSchema,
  };
  const html = inject(template, '<main><h1>Legacy</h1></main>', helmet);
  const $ = headDOM(html);
  for (const selector of ['title', 'meta[name="description"]', 'link[rel="canonical"]', 'meta[name="twitter:card"]']) assert.equal($(selector).length, 1, selector);
  assert.equal($('title').text(), 'Legacy title');
  assert.equal($('meta[name="twitter:card"]').attr('content'), 'summary');
  assert.ok(rawHead(html).includes(pageSchema));
  assert.equal($('script[type="application/ld+json"]').length, 2);
});

test('mixed native and legacy metadata has exactly one authoritative tag', () => {
  const html = inject(template, '<title>Native</title><meta name="description" content="Native"/><main>Keep me</main>', {
    title: '<title data-rh="true">Legacy</title>',
    meta: '<meta name="description" content="Legacy"/>',
  });
  const $ = headDOM(html);
  assert.equal($('title').length, 1);
  assert.equal($('title').text(), 'Legacy');
  assert.equal($('meta[name="description"]').length, 1);
  assert.equal($('meta[name="description"]').attr('content'), 'Legacy');
  assert.ok(html.includes('<div id="root"><main>Keep me</main></div>'));
});

function checkRoute(html, url) {
  const $ = headDOM(html);
  for (const selector of required) assert.equal($(selector).length, 1, `${url}: ${selector}`);
  const canonical = `https://qlavo.in${url === '/geo-calculator' ? '/ai-visibility' : url}`;
  assert.equal($('link[rel="canonical"]').attr('href'), canonical, url);
  assert.equal($('meta[property="og:url"]').attr('content'), canonical, url);
  assert.equal($('meta[name="twitter:url"]').attr('content'), canonical, url);
  const seen = new Set();
  $('meta[name], meta[property]').each((_, tag) => {
    const key = tag.attribs.name || tag.attribs.property;
    assert.ok(!seen.has(key), `${url}: duplicate ${key}`);
    seen.add(key);
  });
  const schemas = $('script[type="application/ld+json"]').toArray().map(tag => JSON.parse($(tag).text()));
  assert.equal(schemas.filter(schema => schema['@type'] === 'Organization').length, 1, `${url}: Organization head schema`);
  const body = html.slice(html.indexOf('</head>') + '</head>'.length);
  assert.doesNotMatch(body, /<title\b|<meta\s+(?:name|property)=|<link[^>]+rel="canonical"/i, `${url}: metadata in body`);
  const bodyDOM = load(body, {}, false);
  assert.equal(bodyDOM('h1').length, 1, `${url}: H1`);
  bodyDOM('script[type="application/ld+json"]').each((_, tag) => JSON.parse(bodyDOM(tag).text()));
  return { url, title: $('title').length, description: $('meta[name="description"]').length, canonical: $('link[rel="canonical"]').length, og: $('meta[property^="og:"]').length, twitter: $('meta[name^="twitter:"]').length, organization: 1, pageSchemas: bodyDOM('script[type="application/ld+json"]').length };
}

test('every real SSR route retains its metadata, content and page JSON-LD', () => {
  for (const url of routes) {
    const context = {};
    const appHtml = render(url, context);
    const html = inject(template, appHtml, context.helmet);
    checkRoute(html, url);
    const original = load(appHtml, {}, false);
    const result = load(html);
    assert.equal(result('h1').text(), original('h1').text(), url);
    original('script[type="application/ld+json"]').each((_, tag) => {
      assert.ok(html.includes(original(tag).text()), `${url}: original page schema bytes retained`);
    });
  }
});

test('every built route has exactly one SEO tag in its raw head', { skip: process.env.PRERENDER_VERIFY_DIST !== '1' }, () => {
  const report = JSON.parse(fs.readFileSync(new URL('../dist/prerender-report.json', import.meta.url), 'utf8'));
  assert.deepEqual(report.map(row => row.url).sort(), [...routes].sort());
  const results = report.map(row => checkRoute(fs.readFileSync(new URL(`../dist/${row.file}`, import.meta.url), 'utf8'), row.url));
  for (const row of results) console.log(JSON.stringify(row));
  console.log(`Verified ${results.length}/${routes.length} built routes against raw <head> boundaries.`);
});
