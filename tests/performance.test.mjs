import { after, test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createServer } from 'vite';
import { load } from 'cheerio';

const vite = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom', logLevel: 'error' });
after(() => vite.close());

test('local CSS replaces runtime Tailwind and remote fonts', async () => {
  const html = fs.readFileSync('index.html', 'utf8');
  assert.doesNotMatch(html, /cdn\.tailwindcss\.com|fonts\.googleapis\.com|fonts\.gstatic\.com|type=["']importmap/);
  const entry = await vite.transformRequest('/index.tsx');
  assert.match(entry.code, /public\/index\.css/);
  const css = await vite.transformRequest('/tailwind.css');
  assert.match(css.code, /\.flex\s*\{/);
  assert.doesNotMatch(css.code, /@tailwind/);
  const fonts = fs.readFileSync('public/fonts/fonts.css', 'utf8');
  assert.match(fonts, /font-display:\s*swap/);
  for (const name of ['inter-latin.woff2', 'space-grotesk-latin.woff2']) {
    const data = fs.readFileSync(`public/fonts/${name}`);
    assert.equal(data.subarray(0, 4).toString(), 'wOF2');
    assert.ok(data.length < 55000, `${name} must be a small Latin subset`);
  }
});

test('nonhome pages are dynamic client chunks while all routes still render synchronously', async () => {
  const app = await vite.transformRequest('/App.tsx');
  assert.doesNotMatch(app.code, /import\s+\w+\s+from\s+["']\/pages\/(?!Home)/);
  const { render } = await vite.ssrLoadModule('/entry-server.tsx');
  const script = fs.readFileSync('scripts/prerender.mjs', 'utf8');
  const routes = [...script.matchAll(/^  '(\/[^']*)',/gm)].map(match => match[1]);
  assert.equal(routes.length, 30);
  const rewrites = JSON.parse(fs.readFileSync('vercel.json', 'utf8')).rewrites;
  const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
  for (const path of routes) {
    const context = {};
    const html = render(path, context);
    assert.equal(typeof html, 'string', `${path}: synchronous SSR contract`);
    const $ = load(html);
    assert.equal($('h1').length, 1, path);
    assert.ok($('main').text().trim().length > 100, path);
    assert.doesNotMatch(html, /custom-cursor|Loading page/);
    const head = context.helmet
      ? load(context.helmet.title.toString() + context.helmet.meta.toString() + context.helmet.link.toString())
      : $; // Helmet 3 delegates metadata to React 19 instead of context.
    assert.equal(head('title').length, 1, path);
    assert.equal(head('meta[name="description"]').length, 1, path);
    assert.equal(head('link[rel="canonical"]').length, 1, path);
    assert.match(head('link[rel="canonical"]').attr('href'), /^https:\/\/qlavo\.in\//);
    if (path !== '/') {
      assert.ok(sitemap.includes(`https://qlavo.in${path}</loc>`), path);
      for (const suffix of ['', '/']) assert.ok(rewrites.some(r => r.source === path + suffix), path + suffix);
    }
  }
});
