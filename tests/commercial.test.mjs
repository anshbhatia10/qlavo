import { after, test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { load } from 'cheerio';

const vite = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom', logLevel: 'error' });
after(() => vite.close());
const { render } = await vite.ssrLoadModule('/entry-server.tsx');
function page(path) {
  const context = {};
  const html = render(path, context);
  const $ = load(html);
  // React 19 hoists Helmet metadata into the rendered stream.
  const head = context.helmet || { title: { toString: () => $('title').toString() }, link: { toString: () => $('link[rel="canonical"]').toString() } };
  return { $, text: $('main').text().replace(/\s+/g, ' '), head, html };
}

test('shared navigation makes agency scope discoverable and accessible without fake activity', () => {
  const { $, html } = page('/');
  const nav = $('header');
  for (const path of ['/partners', '/sample-deliverable', '/pricing', '/about', '/contact']) assert.ok(nav.find(`a[href="${path}"]`).length, `Navigation missing ${path}`);
  assert.equal(nav.find('a[href="/geo-calculator"]').length, 0);
  assert.equal($('a[href="#main-content"]').text(), 'Skip to content');
  assert.equal($('main#main-content').length, 1);
  assert.ok($('button[aria-controls="primary-navigation"][aria-expanded="false"]').length);
  assert.ok($('nav[aria-label="Primary"]').length);
  assert.ok($('footer a[href="/sample-deliverable"]').length);
  assert.doesNotMatch(html, /custom-cursor|Book a Call|Free Audit|trusted by|clients served/i);
});

test('commercial entry points explain the current pilot with unique crawlable metadata', () => {
  const titles = new Set();
  for (const path of ['/partners', '/pricing', '/contact', '/about', '/hire-geo-agency', '/ai-visibility', '/geo-agency-delhi-india']) {
    const { $, text, head } = page(path);
    assert.equal($('h1').length, 1, `${path} has one heading`);
    for (const phrase of ['$750 USD', 'one-time', 'White-label AI-search pilot']) assert.ok(text.includes(phrase), `${path}: ${phrase}`);
    assert.doesNotMatch(text, /£|free audit|We make sure AI recommends you first|4,200|minimum 3|15.minute|3.month commitment/i);
    const title = head.title.toString();
    assert.ok(!titles.has(title), `Unique title: ${path}`); titles.add(title);
    assert.ok(head.link.toString().includes(`https://qlavo.in${path}`));
    assert.ok($('main a[href="https://calendly.com/anshnb07/30min"]').length, `${path} can scope a project`);
  }
  const about = page('/about');
  assert.ok(about.$('img[src="/ansh.jpg"][alt*="Ansh Bhatia"]').length);
  assert.match(about.text, /New Delhi/);
  const partners = page('/partners').text;
  assert.match(partners, /no direct client contact without agency consent/i);
  assert.match(partners, /required inputs/);
  assert.match(page('/pricing').text, /Acceptance is not automatic/);
});

test('legacy calculator does not misrepresent an HTML scan as observed AI visibility', () => {
  const { text } = page('/geo-calculator');
  assert.doesNotMatch(text, /Check Your AI Visibility Score|Check My Score/);
  assert.match(text, /observations|Observation/);
});

test('sample route shows inspectable self-work without claiming client or AI outcomes', () => {
  const { $, text } = page('/sample-deliverable');
  assert.equal($('h1').length, 1);
  for (const phrase of ['Qlavo website example', 'not a client case study', 'Before', 'After', 'Measurement template', 'not observed results']) assert.ok(text.includes(phrase), phrase);
  assert.ok($('a[href="/sample-baseline.csv"][download]').length);
});

test('home offers a bounded agency pilot rather than free audits or promised outcomes', () => {
  const { $, text } = page('/');
  for (const phrase of ['$750 USD', 'one-time', 'White-label AI-search pilot', '10 business days', '$375', 'one revision', 'one client brand', '5 agreed buyer questions', '2 engines', '2 fresh runs', '20 baseline observations', 'all results', 'publish-ready', 'agency/client publishes', 'No guaranteed']) {
    assert.ok(text.includes(phrase), `Home must explain: ${phrase}`);
  }
  assert.equal($('h1').length, 1);
  assert.ok($('a[href="https://calendly.com/anshnb07/30min"]').toArray().some(a => $(a).text().includes('Scope a client project')));
  assert.ok($('a[href="mailto:info@qlavo.in"]').length);
  assert.doesNotMatch(text, /free audit|£|4,200|98%|live intelligence/i);
});
