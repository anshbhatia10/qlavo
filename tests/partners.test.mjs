import { after, test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { createServer } from 'vite';
import { load } from 'cheerio';

const vite = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom', logLevel: 'error' });
after(() => vite.close());

async function page(name, path) {
  const { default: Page } = await vite.ssrLoadModule(`/pages/${name}.tsx`);
  const context = {};
  const html = renderToStaticMarkup(React.createElement(HelmetProvider, { context },
    React.createElement(MemoryRouter, { initialEntries: [path] }, React.createElement(Page))));
  const $ = load(html);
  return { $, html, text: $('body').text().replace(/\s+/g, ' '), context };
}

function assertPresentation({ $, html, context }, path) {
  assert.equal($('h1').length, 1);
  assert.ok($('[class~="bg-[#030303]"]').length, 'Uses the original dark background');
  assert.ok($('.bento-card').length, 'Uses original bento cards');
  assert.ok($('.font-grotesk').length, 'Uses original display typography');
  assert.match(html, /text-emerald-400/);
  assert.ok($('a.btn-primary[href="https://calendly.com/anshnb07/30min"]').length, 'Working partner call CTA');
  assert.doesNotMatch(html, /pilot-site|pilot-container|\$\s*\d|£\s*\d/);
  const metadata = context.helmet?.link.toString() || html;
  assert.ok(metadata.includes(`https://qlavo.in${path}`), 'Canonical points to the page');
  $('section').each((_, section) => {
    const label = $(section).attr('aria-labelledby');
    assert.ok(label && $(`[id="${label}"]`).length === 1, 'Sections have unique, visible labels');
  });
  $('a').each((_, link) => assert.ok($(link).text().trim(), 'Links have accessible names'));
}

test('partners presents a scoped agency service with relationship safeguards', async () => {
  const result = await page('Partners', '/partners');
  assertPresentation(result, '/partners');
  const { $, text } = result;
  assert.match(text, /Qlavo is a GEO agency/);
  assert.match(text, /white-label is one of our services/i);
  assert.match(text, /you own the client relationship/i);
  assert.match(text, /no direct client contact without agency consent/i);
  assert.match(text, /editable, unbranded deliverables/i);
  assert.match(text, /scope agreed before work/i);
  assert.match(text, /scope-based partner pricing/i);
  assert.match(text, /optional paid pilot/i);
  assert.match(text, /discuss.*on.*call/i);
  for (const service of ['Baseline', 'Prompt research', 'Content', 'Entity', 'Technical prioritization', 'Reporting']) {
    assert.ok($('h3').toArray().some(h => $(h).text().includes(service)), service);
  }
  assert.match(text, /do not guarantee rankings, AI recommendations or editorial placements/i);
  assert.ok($('a[href="/sample-deliverable"]').length);
  assert.ok($('details summary').length, 'Page-specific keyboard-accessible FAQs');
  const source = await readFile(new URL('../pages/Partners.tsx', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /PilotOffer|FAQSection|ContactSection/);
});

test('sample is an illustrative editable handoff, not measured client results', async () => {
  const result = await page('SampleDeliverable', '/sample-deliverable');
  assertPresentation(result, '/sample-deliverable');
  const { $, text } = result;
  assert.match(text, /illustrative/i);
  assert.match(text, /not a client case study/i);
  assert.match(text, /not observed results/i);
  assert.match(text, /editable, unbranded/i);
  assert.match(text, /agreed scope/i);
  assert.match(text, /no measurements have been collected/i);
  assert.doesNotMatch(text, /\d+\s*%|\d+\s*(baseline observations|fresh runs)|our current scope specifies|our previous homepage/i);
  assert.ok($('a[href="/partners"]').length);
  assert.ok($('a[href="/sample-baseline.csv"][download]').length);
  assert.ok($('table caption').length, 'Measurement template has an accessible caption');
  assert.ok($('th[scope="col"]').length);
  const source = await readFile(new URL('../pages/SampleDeliverable.tsx', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /PilotOffer|ScopeCTA|pilot-/);
});
