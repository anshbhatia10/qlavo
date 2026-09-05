import { after, test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { load } from 'cheerio';
const vite = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom', logLevel: 'error' });
after(() => vite.close());
const { render } = await vite.ssrLoadModule('/entry-server.tsx');
function page(path) { const $ = load(render(path, {})); return { $, text: $('main').text().replace(/\s+/g, ' ') }; }

test('restored homepage presents GEO agency with original logo, not wholesale pilot', () => {
  const { $, text } = page('/');
  assert.match($('title').text(), /GEO Agency/i);
  assert.equal($('h1').length, 1);
  assert.ok($('header a[href="/"] svg').length, 'original logo SVG');
  assert.ok($('main section.q-hero').length, 'redesigned dark hero');
  assert.doesNotMatch(text, /\$750|\$375|White-label AI-search pilot/);
});

test('partner service is linked from original navigation with keyboard access', () => {
  const { $ } = page('/');
  assert.ok($('header a[href="/partners"]').length);
  assert.ok($('footer a[href="/partners"]').length);
  assert.equal($('a[href="#main-content"]').text(), 'Skip to content');
  assert.equal($('main#main-content').length, 1);
  assert.ok($('button[aria-controls="mobile-navigation"][aria-expanded="false"]').length);
  assert.ok($('nav[aria-label="Primary"]').length);
});

test('home keeps agency message without invented counters or simulated live findings', () => {
  const { text } = page('/');
  assert.doesNotMatch(text, /100M|Brands Audited|3 in 4|We make sure|Your business not found|Live|within 24 hours/);
  assert.match(text, /Illustrative format/);
});

test('AI visibility pages are dark agency services, not a pilot checkout or fake score', () => {
  for (const route of ['/ai-visibility', '/geo-calculator']) {
    const { $, text } = page(route);
    assert.equal($('h1').length,1);
    assert.doesNotMatch(text,/\$750|Check Your AI Visibility Score|Check My Score|20 baseline observations/);
    assert.match(text,/observations/i);
    assert.ok($('a[href="https://calendly.com/anshnb07/30min"]').length);
    assert.equal($('[class*="pilot-"]').length,0);
  }
});
