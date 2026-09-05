import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { load } from 'cheerio';

test('HTML shell and entity describe GEO agency with no price or global FAQ conflict', () => {
  const html=fs.readFileSync('index.html','utf8'); const $=load(html);
  assert.match($('title').text(), /GEO Agency/i);
  assert.doesNotMatch(html,/\$750|\$375|var metas =|"@type":\s*"FAQPage"/);
  const org=JSON.parse($('script[type="application/ld+json"]').first().text());
  assert.match(org.description,/GEO\)? agency/i);
  assert.equal(org.logo,'https://qlavo.in/apple-touch-icon.png');
  assert.match(fs.readFileSync('public/llms.txt','utf8'),/^# Qlavo — GEO Agency/);
});
test('retained articles do not advertise superseded Qlavo prices', () => {
  for (const file of ['pages/RedditBestGeoAgencies.tsx','pages/RedditGeoPricing.tsx'])
    assert.doesNotMatch(fs.readFileSync(file,'utf8'), /\$750|\$375|Published retainers:|£2,000/,file);
});
test('dedicated partner routes retain prerender, sitemap and slash rewrites', () => {
  const script=fs.readFileSync('scripts/prerender.mjs','utf8');
  const config=JSON.parse(fs.readFileSync('vercel.json','utf8'));
  const sitemap=fs.readFileSync('public/sitemap.xml','utf8');
  for(const route of ['/partners','/sample-deliverable']) {
    assert.ok(script.includes(`'${route}'`));
    for (const suffix of ['', '/']) assert.ok(config.rewrites.some(r=>r.source===route+suffix && r.destination===`${route}/index.html`));
    assert.ok(sitemap.includes(`https://qlavo.in${route}</loc>`));
  }
});
