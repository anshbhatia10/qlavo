import { after, test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createServer } from 'vite';
import { load } from 'cheerio';

const vite = await createServer({ optimizeDeps: { noDiscovery: true, include: [] }, server: { middlewareMode: true, hmr: false }, appType: 'custom', logLevel: 'error' });
after(() => vite.close());
const React = (await import('react')).default;
const { renderToString } = await import('react-dom/server');
const { StaticRouter } = await import('react-router-dom/server.js');
const { HelmetProvider } = await import('react-helmet-async');
HelmetProvider.canUseDOM = false;
const routes = { '/contact': 'Contact', '/about': 'About', '/pricing': 'Pricing', '/hire-geo-agency': 'HireGEOAgency', '/geo-agency-delhi-india': 'GEOAgencyIndia', '/ai-visibility': 'AIVisibility', '/geo-calculator': 'AIVisibility' };
async function page(path) {
  const context = {};
  const { default: Page } = await vite.ssrLoadModule(`/pages/${routes[path]}.tsx`);
  const html = renderToString(React.createElement(HelmetProvider, { context }, React.createElement(StaticRouter, { location: path }, React.createElement('main', null, React.createElement(Page)))));
  const $ = load(html);
  const head = context.helmet;
  const metadata = load(head ? head.title.toString() + head.meta.toString() + head.link.toString() : html);
  return { $, text: $('main').text().replace(/\s+/g, ' '), metadata };
}

test('contact provides a real dark Calendly embed with accessible direct fallback and a scoping brief', async () => {
  const { $, text, metadata } = await page('/contact');
  const frame = $('main iframe');
  assert.equal(frame.length, 1);
  const url = new URL(frame.attr('src'));
  assert.equal(url.origin + url.pathname, 'https://calendly.com/anshnb07/30min');
  assert.equal(url.searchParams.get('background_color'), 'ffffff');
  assert.equal(url.searchParams.get('text_color'), '111111');
  assert.equal(url.searchParams.get('primary_color'), '333333');
  assert.equal(url.searchParams.get('embed_domain'), 'qlavo.in');
  assert.equal(url.searchParams.get('embed_type'), 'Inline');
  assert.ok($('.cm-calendar-area > a[href="https://calendly.com/anshnb07/30min"]').length, 'direct fallback before frame');
  assert.match(frame.attr('title'), /book|schedule/i);
  assert.equal(frame.attr('loading'), 'eager');
  assert.equal(url.searchParams.get('hide_event_type_details'), '1');
  assert.equal($('main a[href="#booking"]').length, 0, 'no extra find-a-time step');
  assert.equal($('.cm-page > section').first().find('iframe').length, 1, 'calendar is in the first section');
  assert.ok($('main').html().indexOf('<iframe') < $('main').html().indexOf('cm-booking-brief'), 'calendar precedes the briefing on mobile and without CSS');
  assert.ok($('main a[href="https://calendly.com/anshnb07/30min"]').length);
  assert.ok($('main a[href="mailto:info@qlavo.in"]').length);
  assert.equal($('main form, main input').length, 0);
  assert.equal($('h1').length, 1);
  assert.match(text, /website/i);
  assert.match(text, /buyers/i);
  assert.match(text, /30 minutes/i);
  assert.equal(metadata('link[rel="canonical"]').attr('href'), 'https://qlavo.in/contact');
  assert.equal($('main .cm-booking').length, 1);
  const css = await readFile(new URL('../pages/Commercial.css', import.meta.url), 'utf8');
  assert.match(css, /\.cm-calendar\s*\{[^}]*filter:\s*grayscale\(1\) invert\(1\)/s);
  assert.match(css, /forced-colors:\s*active/);
  assert.match(css, /\.cm-calendar\s*\{[^}]*height:\s*\d+px/s);
  assert.match(css, /@media[^}]+[\s\S]*\.cm-calendar\s*\{[^}]*height:\s*\d+px/);
});

test('About presents a founder editorial with preserved biography, photo and Person identity', async () => {
  const { $, text, metadata } = await page('/about');
  assert.equal($('figure.cm-founder-photo img[src="/ansh.jpg"][alt="Ansh Bhatia"]').length, 1);
  assert.equal($('h1').length, 1);
  assert.match(text, /Social media marketing agency founder/);
  assert.match(text, /2025/);
  assert.match(text, /New Delhi, India/);
  assert.match(text, /do not guarantee/i);
  assert.ok($('a[href="https://www.linkedin.com/in/ansh-bhatia-290665281/"]').length);
  const person = JSON.parse($('script[type="application/ld+json"]').text());
  assert.equal(person.name, 'Ansh Bhatia');
  assert.equal(person.worksFor.name, 'Qlavo');
  assert.equal(metadata('link[rel="canonical"]').attr('href'), 'https://qlavo.in/about');
  assert.equal($('.bento-card, .glass-panel, [class*="emerald"]').length, 0);
});

test('Pricing scopes three engagement types as an editorial ledger without invented amounts', async () => {
  const { $, text, metadata } = await page('/pricing');
  assert.equal($('.cm-engagement').length, 3);
  for (const name of ['Baseline audit', 'Implementation', 'Ongoing support']) assert.ok(text.includes(name));
  assert.match(text, /scope-based quote/i);
  assert.match(text, /do not guarantee/i);
  assert.doesNotMatch(text, /[$£₹]|Most popular|margin|guaranteed results/i);
  assert.ok($('a[href="/contact"]').length);
  assert.ok($('a[href="/partners"]').length);
  assert.ok($('details > summary').length >= 3);
  assert.equal($('h1').length, 1);
  assert.equal(metadata('link[rel="canonical"]').attr('href'), 'https://qlavo.in/pricing');
  assert.equal($('.bento-card, .glass-panel, [class*="emerald"]').length, 0);
});

test('Hire GEO Agency gives a useful selection checklist and separates evidence from promises', async () => {
  const { $, text, metadata } = await page('/hire-geo-agency');
  assert.equal($('ol.cm-selection-list > li').length, 4);
  assert.match(text, /Baseline audit/);
  assert.match(text, /Implementation/);
  assert.match(text, /Ongoing support/);
  assert.match(text, /do not guarantee/i);
  assert.match(text, /quote/i);
  assert.match(text, /New Delhi/);
  assert.ok($('a[href="/pricing"]').length);
  assert.ok($('a[href="/partners"]').length);
  assert.ok($('a[href="/contact"]').length);
  assert.equal($('h1').length, 1);
  assert.equal(metadata('link[rel="canonical"]').attr('href'), 'https://qlavo.in/hire-geo-agency');
  assert.equal($('.bento-card, .glass-panel, [class*="emerald"]').length, 0);
});

test('India route presents a real headquarters and explicit market scoping, not fabricated office evidence', async () => {
  const { $, text, metadata } = await page('/geo-agency-delhi-india');
  assert.equal($('.cm-location-note').length, 1);
  assert.match($('h1').text(), /GEO Agency.*Delhi, India/);
  assert.match(text, /target markets, not additional offices/i);
  assert.match(text, /language/i);
  assert.match(text, /scope-based quote/i);
  assert.match(text, /do not guarantee/i);
  assert.ok($('a[href="/contact"]').length);
  assert.ok($('a[href="/partners"]').length);
  assert.equal(metadata('link[rel="canonical"]').attr('href'), 'https://qlavo.in/geo-agency-delhi-india');
  assert.equal($('.bento-card, .glass-panel, [class*="gradient"], [class*="emerald"]').length, 0);
  const faq = JSON.parse($('script[type="application/ld+json"]').text());
  assert.equal(faq.mainEntity.length, $('.cm-faq details').length);
  faq.mainEntity.forEach((item, i) => {
    assert.equal(item.name, $('.cm-faq summary').eq(i).text());
    assert.equal(item.acceptedAnswer.text, $('.cm-faq details > p').eq(i).text());
  });
});

for (const route of ['/ai-visibility', '/geo-calculator']) {
  test(`${route} explains measured answers separately from technical signals without a fake calculator`, async () => {
    const { $, text, metadata } = await page(route);
    assert.equal($('.cm-page').length, 1);
    assert.equal($('h1').length, 1);
    assert.equal($('#measured-answers').length, 1);
    assert.equal($('#technical-signals').length, 1);
    assert.match(text, /prompt.*platform.*date/i);
    assert.match(text, /not a visibility score/i);
    assert.match(text, /do not guarantee/i);
    assert.equal($('form, input, output, progress, [role="meter"]').length, 0);
    assert.equal($('.bento-card, .glass-panel, [class*="gradient"], [class*="emerald"]').length, 0);
    for (const href of ['/contact', '/pricing', '/partners']) assert.ok($(`a[href="${href}"]`).length);
    assert.equal(metadata('link[rel="canonical"]').attr('href'), 'https://qlavo.in/ai-visibility');
  });
}
