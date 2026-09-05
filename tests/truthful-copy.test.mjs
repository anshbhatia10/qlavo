import { after, test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { load } from 'cheerio';

const vite = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom', logLevel: 'error' });
after(() => vite.close());
const { render } = await vite.ssrLoadModule('/entry-server.tsx');
function page(path) {
  const $ = load(render(path, {}));
  return { $, text: $('main').text().replace(/\s+/g, ' '), metadata: $('title, meta[name="description"]').toString() };
}

test('homepage FAQ explains sampled evidence, scoped pricing, and uncertain outcomes', () => {
  const { $ } = page('/');
  const faq = $('#faq');
  const text = faq.text().replace(/\s+/g, ' ');
  assert.doesNotMatch(text, /£|\$750|free audit|within 24 hours|1-2 weeks|30-90 days|Gartner|full AI visibility audit/i);
  assert.match(text, /scope/i);
  assert.match(text, /quote/i);
  assert.match(text, /(?:cannot|do not|no).{0,25}guarantee/i);
  assert.match(text, /sample/i);
  assert.ok(faq.find('a[href="/partners"]').length);
  assert.ok(faq.find('details > summary').length, 'native FAQ interactions work without JS');
});

test('India agency page avoids invented market statistics, outcomes, and pricing', () => {
  const { $, text, metadata } = page('/geo-agency-delhi-india');
  assert.doesNotMatch(text + metadata, /£|\$750|65%|30-60|Days to first AI citation|1-2 weeks|2-4 weeks|30-90 days|free.{0,20}audit|Clients worldwide|citations compound|durable moat|We make your business appear/i);
  assert.match(text, /(?:cannot|do not|no).{0,25}guarantee/i);
  assert.match(text, /scope/i);
  assert.match(text, /quote/i);
  assert.match($('h1').text(), /GEO Agency.*Delhi, India/);
  assert.ok($('main a[href="/partners"]').length);
  assert.ok($('main a[href="/contact"]').length);
});

test('About preserves founder identity without proprietary statistics or default-citation claims', () => {
  const { $, text } = page('/about');
  assert.match(text, /Ansh Bhatia/);
  assert.match(text, /Social media marketing agency founder/);
  assert.match(text, /New Delhi, India/);
  assert.ok($('img[src="/ansh.jpg"][alt="Ansh Bhatia"]').length);
  assert.ok($('main a[href="https://www.linkedin.com/in/ansh-bhatia-290665281/"]').length);
  assert.doesNotMatch(text, /96%|<1%|4,200|proprietary crawl|400M|500%|cite you by default|exactly what's missing|math of how LLMs decide/i);
  assert.match(text, /(?:cannot|do not|no).{0,25}guarantee/i);
});

for (const route of ['/pricing', '/hire-geo-agency']) {
  test(`${route} offers scoped GEO engagements, with partner work separate`, () => {
    const { $, text, metadata } = page(route);
    assert.doesNotMatch(text + metadata, /£|\$\s*(?:750|375)|Most clients see|Typical outcomes|minimum.{0,10}commitment|minimum 3-month|free.{0,20}(?:audit|scan)|Most Popular/i);
    for (const name of ['Baseline audit', 'Implementation', 'Ongoing support']) assert.ok(text.includes(name), name);
    assert.match(text, /scope/i);
    assert.match(text, /quote/i);
    assert.match(text, /(?:cannot|do not|no).{0,25}guarantee/i);
    assert.ok($('main a[href="/partners"]').length, 'dedicated partner service');
    assert.ok($('main a[href="/contact"]').length, 'real discovery contact');
    assert.ok($('main h2, main h3').length >= 3, 'scoped engagements remain structured');
    assert.match(metadata, /GEO/);
  });
}

test('contact section offers real email and booking instead of simulated audit submission', () => {
  const { $ } = page('/');
  const contact = $('#contact');
  assert.equal(contact.length, 1);
  assert.equal(contact.find('form, input, button[type="submit"]').length, 0);
  assert.ok(contact.find('a[href="mailto:info@qlavo.in"]').length);
  assert.ok(contact.find('a[href="/contact"]').length);
  assert.doesNotMatch(contact.text(), /free audit|within 24 hours|Audit submitted|24-hour response|No retainers or lock-in/i);
});

test('contact page keeps an accessible real scheduler and direct fallback links without response guarantees', () => {
  const { $, text } = page('/contact');
  const frame = $('main iframe');
  assert.equal(frame.length, 1);
  assert.match(frame.attr('title'), /book|schedule/i);
  assert.match(frame.attr('src'), /^https:\/\/(calendar\.google\.com\/calendar\/appointments\/schedules\/|calendly\.com\/)/);
  assert.ok($('main a[href="https://calendly.com/anshnb07/30min"]').length, 'direct Calendly fallback');
  assert.ok($('main a[href="mailto:info@qlavo.in"]').length);
  assert.equal($('main form').length, 0);
  assert.doesNotMatch(text, /24-hour response|within one business day|No retainers or lock-in|pay for results/i);
});
