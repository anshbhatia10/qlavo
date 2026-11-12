import { after, test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { load } from 'cheerio';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const vite = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom', logLevel: 'error' });
after(() => vite.close());
const { render } = await vite.ssrLoadModule('/entry-server.tsx');
const { OFFER } = await vite.ssrLoadModule('/data/offer.ts');

/* Copy frozen by PAGE_CONTENT.md. Any mismatch here is a copy conflict, not a test to relax. */
const PATH = '/geo-agency-guarantees';
const TITLE = 'GEO Agency Guarantees 2026: Who Guarantees Results';
const DESCRIPTION = '14 GEO agencies that publish a results guarantee, compared on the pass mark, days to a verdict, the remedy and what you pay before you find out.';
const H1 = 'GEO agency guarantees in 2026: which agencies offer a results guarantee';
const CAPSULE = "We found fourteen GEO agencies that publish a results guarantee, including Qlavo, Citant.ai, GEOHATS, KKV Labs and CiteVantage. Nine state a pass mark you can check; five promise improvement without saying how much. Of the measurable guarantees, Qlavo's gives a verdict at 30 days, Citant.ai's at 9 weeks, and the rest at 90 days or later.";
const DISCLOSURE = "Qlavo wrote this page and lists itself first; every other agency's terms are quoted from its own website, checked 3 November 2026. Corrections: info@qlavo.in";

const FACTS_PATH = process.env.GUARANTEES_FACTS
  || '/home/ubuntu/qlavo/self/promptcheck-2026-11-02/guarantees/facts.json';

const VERDICT_DAYS = {
  '30 days': 30, '60 days': 60, '90 days': 90, '120 days': 120,
  '9 weeks': 63, '12 months': 365, '3–6 months': 135,
};

const $ = load(render(PATH, {}));
const text = selector => $(selector).text().replace(/\s+/g, ' ').trim();
const tables = $('table');
const measurable = tables.eq(0);
const noPassMark = tables.eq(1);
const paid = tables.eq(2);
const cells = (row, selector = 'td') => $(row).find(selector).toArray().map(cell => $(cell).text().replace(/\s+/g, ' ').trim());

test('metadata is published once and matches the approved copy', () => {
  assert.equal($('title').length, 1);
  assert.equal($('title').text(), TITLE);
  assert.equal($('h1').length, 1);
  assert.equal($('h1').text().replace(/\s+/g, ' ').trim(), H1);
  assert.equal($('meta[name="description"]').length, 1);
  assert.equal($('meta[name="description"]').attr('content'), DESCRIPTION);
  assert.equal($('link[rel="canonical"]').length, 1);
  assert.equal($('link[rel="canonical"]').attr('href'), `https://qlavo.in${PATH}`);
  assert.equal($('p.q-eyebrow').first().text().trim(), 'Guide / GEO guarantees');
});

test('the answer capsule is the first paragraph after the H1 and carries no links', () => {
  const capsule = $('h1').first().nextAll('p').first();
  assert.equal(capsule.length, 1);
  assert.equal(capsule.text().replace(/\s+/g, ' ').trim(), CAPSULE);
  assert.equal(capsule.find('a').length, 0);
});

test('the posted date sits above the H1 with a machine-readable date', () => {
  const posted = $('p.ed-posted').first();
  assert.equal(posted.length, 1);
  assert.equal(posted.text().replace(/\s+/g, ' ').trim(), 'Posted on 3 November 2026');
  assert.equal(posted.find('time').attr('datetime'), '2026-11-03');
  assert.equal($('p.q-eyebrow').first().nextAll('p.ed-posted').length > 0, true);
  assert.equal(posted.nextAll('h1').length, 1);
});

test('measurable guarantees table is nine rows, soonest verdict first', () => {
  assert.equal($('thead th').length > 0, true);
  const rows = measurable.find('tbody tr').toArray();
  assert.equal(rows.length, 9);
  assert.equal(cells(rows[0])[0], 'Qlavo');
  assert.equal(cells(rows[1])[0], 'Citant.ai');
  let previous = 0;
  for (const row of rows) {
    const label = cells(row)[3];
    assert.ok(label in VERDICT_DAYS, `known verdict label: ${label}`);
    const days = VERDICT_DAYS[label];
    assert.ok(days >= previous, `verdict days never decrease: ${label} after ${previous}`);
    previous = days;
  }
  assert.ok(measurable.find('thead th').toArray().map(th => $(th).text()).includes('AI platforms'));
});

test('promises without a pass mark are five rows with Qlavo absent', () => {
  const rows = noPassMark.find('tbody tr').toArray();
  assert.equal(rows.length, 5);
  assert.equal(cells(rows[0])[0], 'Ekamoira');
  assert.equal(cells(rows.at(-1))[0], 'Arise GEO');
  assert.ok(!rows.some(row => cells(row)[0] === 'Qlavo'));
  const headers = noPassMark.find('thead th').toArray().map(th => $(th).text());
  assert.ok(!headers.includes('AI platforms'));
});

test('paid before the verdict lists published prices only, cheapest first, Qlavo absent', () => {
  const rows = paid.find('tbody tr').toArray();
  assert.equal(rows.length, 3);
  assert.ok(!rows.some(row => cells(row)[0] === 'Qlavo'));
  assert.ok(!rows.some(row => cells(row)[0] === 'Ekamoira'));
  const amounts = rows.map(row => Number(cells(row)[1].match(/\$([\d,]+)/)[1].replace(/,/g, '')));
  assert.deepEqual(amounts, [...amounts].sort((a, b) => a - b));
});

test('the Qlavo row is built from the published offer, not typed', () => {
  const row = cells(measurable.find('tbody tr').toArray()[0]);
  assert.equal(row[1], `${OFFER.targetWins} of ${OFFER.questions} agreed questions won. A question is won when ChatGPT recommends you in at least ${OFFER.winBar} of ${OFFER.runsPerQuestion} fresh runs`);
  assert.equal(row[2], 'ChatGPT');
  assert.equal(row[3], `${OFFER.windowDays} days`);
  assert.equal(row[4], `First month refunded within 7 days, plus up to ${OFFER.freeWorkDays} days of further work at no charge`);
  assert.equal(row[5], 'Quoted on request, monthly, cancel by email');
  assert.doesNotMatch(row[5], /\$|₹/);
});

test('every competitor links to the guarantee page it was quoted from', () => {
  const facts = JSON.parse(fs.readFileSync(FACTS_PATH, 'utf8'));
  const verified = new Set(facts.verified.map(row => row.guarantee_url));
  for (const table of [measurable, noPassMark]) {
    for (const row of table.find('tbody tr').toArray()) {
      const link = $(row).find('td').first().find('a');
      assert.equal(link.length, 1, `one agency link: ${cells(row)[0]}`);
      const href = link.attr('href');
      if (cells(row)[0] === 'Qlavo') {
        assert.equal(href, '/terms');
        assert.equal($(row).find('td').first().find('strong').length, 1, 'Qlavo name is bold');
        continue;
      }
      assert.match(href, /^https:\/\//, `${cells(row)[0]} is an external link`);
      assert.equal(link.attr('target'), '_blank');
      assert.match(link.attr('rel'), /nofollow/, 'competitor links are nofollow');
      assert.match(link.attr('rel'), /noopener/);
      assert.ok(verified.has(href), `facts.json carries this guarantee_url: ${href}`);
    }
  }
});

test('the disclosure is the last paragraph inside main, verbatim', () => {
  const last = $('main p').last();
  assert.equal(last.text().replace(/\s+/g, ' ').trim(), DISCLOSURE);
  assert.ok(last.hasClass('cm-note'), 'secondary smaller type');
});

test('Article and FAQPage schema parse and mirror the page', () => {
  const schemas = $('script[type="application/ld+json"]').toArray().map(tag => JSON.parse($(tag).text()));
  const article = schemas.find(schema => schema['@type'] === 'Article');
  const faq = schemas.find(schema => schema['@type'] === 'FAQPage');
  assert.ok(article, 'Article schema');
  assert.ok(faq, 'FAQPage schema');
  assert.equal(article.headline, H1);
  assert.equal(article.description, DESCRIPTION);
  assert.equal(article.datePublished, '2026-11-03');
  assert.equal(article.dateModified, '2026-11-03');
  assert.equal(article.author.name, 'Ansh Bhatia');
  assert.equal(article.publisher['@id'], 'https://qlavo.in#organization');
  assert.equal(article.mainEntityOfPage, `https://qlavo.in${PATH}`);

  const visible = $('.cm-faq details').toArray().map(tag => ({
    question: $(tag).find('summary').text().replace(/\s+/g, ' ').trim(),
    answer: $(tag).find('p').first().text().replace(/\s+/g, ' ').trim(),
  }));
  assert.equal(visible.length, 5);
  assert.deepEqual(faq.mainEntity.map(item => item.name), visible.map(item => item.question));
  assert.deepEqual(faq.mainEntity.map(item => item.acceptedAnswer.text), visible.map(item => item.answer));
});

test('page text makes no superlative claim and no localised pricing', () => {
  const main = text('main');
  assert.doesNotMatch(main, /\b(best|number one|#1|leading (GEO|agency)|only (GEO|agency)|first (GEO|agency))\b/i);
  assert.doesNotMatch(main, /India|Delhi|₹|INR/);
});

test('route is wired into prerender, sitemap, vercel and llms.txt', () => {
  const prerender = fs.readFileSync(path.join(root, 'scripts/prerender.mjs'), 'utf8');
  assert.ok(prerender.includes(`'${PATH}'`), 'PRERENDER_ROUTES');
  assert.ok(fs.readFileSync(path.join(root, 'public/sitemap.xml'), 'utf8').includes(`https://qlavo.in${PATH}</loc>`), 'sitemap');
  const config = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
  for (const suffix of ['', '/']) {
    assert.ok(config.rewrites.some(rule => rule.source === `${PATH}${suffix}` && rule.destination === `${PATH}/index.html`), `rewrite ${PATH}${suffix}`);
  }
  const llms = fs.readFileSync(path.join(root, 'public/llms.txt'), 'utf8');
  assert.equal(llms.split(`https://qlavo.in${PATH}`).length - 1, 2, 'llms.txt twice');
});
