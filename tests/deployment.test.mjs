import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

test('HTML shell cannot overwrite current pricing or inject unrelated FAQ claims', () => {
  const html=fs.readFileSync('index.html','utf8');
  assert.doesNotMatch(html,/£2,000|Retainers for|Worldwide B2B GEO retainers|var metas =|"@type": "FAQPage"/);
  assert.match(html,/White-label AI-search/);
});

test('retained articles do not advertise superseded Qlavo retainers', () => {
  for (const file of ['pages/RedditBestGeoAgencies.tsx','pages/RedditGeoPricing.tsx']) {
    assert.equal(/Published retainers:|£2,000/.test(fs.readFileSync(file,'utf8')),false,file);
  }
});

test('new agency routes are prerendered and served directly by Vercel', () => {
  const script=fs.readFileSync('scripts/prerender.mjs','utf8');
  const config=JSON.parse(fs.readFileSync('vercel.json','utf8'));
  const sitemap=fs.readFileSync('public/sitemap.xml','utf8');
  for(const route of ['/partners','/sample-deliverable']) {
    assert.ok(script.includes(`'${route}'`));
    assert.ok(config.rewrites.some(r=>r.source===route && r.destination===`${route}/index.html`));
    assert.ok(sitemap.includes(`https://qlavo.in${route}</loc>`));
  }
});
