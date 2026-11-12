/**
 * Every row of /geo-agency-guarantees in one typed place.
 *
 * Competitor cells are quoted from each agency's own guarantee page (see
 * facts.json in the research folder for the source URL of every row). The
 * Qlavo row is built from data/offer.ts so it can never drift from the plan.
 */
import { OFFER } from './offer';

export interface GuaranteeRow {
  agency: string;
  url: string; // guarantee_url (Qlavo: '/terms')
  passMark: string;
  platforms: string;
  verdictLabel: string;
  verdictDays: number;
  remedy: string;
  price: string;
  priceSortUsd: number | null; // null = not published
  group: 'measurable' | 'no-pass-mark';
  isQlavo?: boolean;
}

export interface PaidBeforeVerdictRow {
  agency: string;
  paid: string;
  paidSortUsd: number;
  ifFails: string;
}

export const CHECKED_AT = '2026-11-03';

/** Built, never typed: the rendered strings must equal the published terms. */
export const QLAVO_ROW: GuaranteeRow = {
  agency: 'Qlavo',
  url: '/terms',
  passMark: `${OFFER.targetWins} of ${OFFER.questions} agreed questions won. A question is won when ChatGPT recommends you in at least ${OFFER.winBar} of ${OFFER.runsPerQuestion} fresh runs`,
  platforms: 'ChatGPT',
  verdictLabel: `${OFFER.windowDays} days`,
  verdictDays: OFFER.windowDays,
  remedy: `First month refunded within 7 days, plus up to ${OFFER.freeWorkDays} days of further work at no charge`,
  price: 'Quoted on request, monthly, cancel by email',
  priceSortUsd: null,
  group: 'measurable',
  isQlavo: true,
};

const MEASURABLE_COMPETITORS: GuaranteeRow[] = [
  {
    agency: 'Citant.ai', url: 'https://citant.ai/guarantee/',
    passMark: 'Named on 3 of 10 agreed queries, on at least 2 of 6 tracked platforms',
    platforms: 'ChatGPT, Claude, Perplexity, Gemini, Copilot, Google AI Overviews',
    verdictLabel: '9 weeks', verdictDays: 63,
    remedy: 'Every pilot payment refunded',
    price: '$7,875 pilot (3 × $2,625)', priceSortUsd: 7875,
    group: 'measurable',
  },
  {
    agency: 'CiteVantage', url: 'https://citevantage.com/guarantee/',
    passMark: 'Named on 1 in 4 of 50–100 approved questions; a question counts at 2 of 3 runs',
    platforms: 'ChatGPT, Perplexity, Gemini or Copilot',
    verdictLabel: '90 days', verdictDays: 90,
    remedy: 'Two more months of free work, never a refund',
    price: 'From $499 a month, 3-month minimum', priceSortUsd: 499,
    group: 'measurable',
  },
  {
    agency: 'GEOHATS', url: 'https://geohats.com/done-for-you',
    passMark: 'Brand cited for the agreed buyer questions',
    platforms: 'ChatGPT, Claude, Perplexity, Gemini',
    verdictLabel: '90 days', verdictDays: 90,
    remedy: 'Full refund of service fees',
    price: 'From $2,000 a month', priceSortUsd: 2000,
    group: 'measurable',
  },
  {
    agency: 'KKV Labs', url: 'https://www.kkvlabs.com/guarantee',
    passMark: 'Top 3 for 3 of 5 agreed questions',
    platforms: 'ChatGPT or Google AI Mode',
    verdictLabel: '90 days', verdictDays: 90,
    remedy: 'Your choice: every dollar back, or free work until you are recommended',
    price: 'Not published', priceSortUsd: null,
    group: 'measurable',
  },
  {
    agency: 'RankZero', url: 'https://www.rankzero.io/services/generative-engine-optimization',
    passMark: '25% more AI-referred sessions in your GA4',
    platforms: 'Traffic, not citations',
    verdictLabel: '90 days', verdictDays: 90,
    remedy: 'Keeps working at no charge',
    price: 'Not published', priceSortUsd: null,
    group: 'measurable',
  },
  {
    agency: 'Cited Co', url: 'https://citedco.ai/guarantee/',
    passMark: 'One major AI platform names you for an agreed query',
    platforms: 'ChatGPT, Perplexity, Gemini, Claude',
    verdictLabel: '120 days', verdictDays: 120,
    remedy: 'Month five is not billed',
    price: 'Not published', priceSortUsd: null,
    group: 'measurable',
  },
  {
    agency: 'VisibilityStack', url: 'https://www.visibilitystack.ai/ai-search-visibility',
    passMark: '100 high-intent prompts cite your pages on at least one engine',
    platforms: 'At least one tracked engine',
    verdictLabel: '120 days', verdictDays: 120,
    remedy: 'Set in each signed order form',
    price: 'Not published', priceSortUsd: null,
    group: 'measurable',
  },
  {
    agency: 'Resurrect Studio', url: 'https://studio.resurrects.co/en/geo',
    passMark: '50% of the agreed question set on target',
    platforms: 'Not stated',
    verdictLabel: '12 months', verdictDays: 365,
    remedy: "Next month's fee waived",
    price: 'HK$6,000 setup, monthly fee by tier', priceSortUsd: null,
    group: 'measurable',
  },
];

const NO_PASS_MARK_ROWS: GuaranteeRow[] = [
  {
    agency: 'Ekamoira', url: 'https://www.ekamoira.com/services/for-brands',
    passMark: '"Positive trends" (the metric is not defined on its page)',
    platforms: '',
    verdictLabel: '30 days', verdictDays: 30,
    remedy: 'First month free',
    price: '$3,000–$5,000 a month', priceSortUsd: 3000,
    group: 'no-pass-mark',
  },
  {
    agency: 'Georanc', url: 'https://georanc.com/',
    passMark: 'Visibility improves',
    platforms: '',
    verdictLabel: '60 days', verdictDays: 60,
    remedy: 'Continued work, not a refund',
    price: 'Not published', priceSortUsd: null,
    group: 'no-pass-mark',
  },
  {
    agency: 'ShowUpWithAI', url: 'https://showupwithai.com/',
    passMark: 'An increase in AI visibility, read from AI referral visits in Google Analytics',
    platforms: '',
    verdictLabel: '60 days', verdictDays: 60,
    remedy: 'Money back',
    price: 'Not published', priceSortUsd: null,
    group: 'no-pass-mark',
  },
  {
    agency: 'WKND Agency', url: 'https://wkndagency.com/faq/',
    passMark: 'Measurable movement against the audit baseline',
    platforms: '',
    verdictLabel: '90 days', verdictDays: 90,
    remedy: 'You may stop; no refund stated',
    price: 'Not published', priceSortUsd: null,
    group: 'no-pass-mark',
  },
  {
    agency: 'Arise GEO', url: 'https://arisegeo.com/services/digital-marketing-agency',
    passMark: 'Leading indicators move (not specified)',
    platforms: '',
    verdictLabel: '3–6 months', verdictDays: 135,
    remedy: 'Fees refunded',
    price: 'Not published', priceSortUsd: null,
    group: 'no-pass-mark',
  },
];

/** Soonest verdict first, then cheapest published price (unpublished last). */
const byVerdictThenPrice = (a: GuaranteeRow, b: GuaranteeRow): number =>
  a.verdictDays - b.verdictDays
  || (a.priceSortUsd ?? Infinity) - (b.priceSortUsd ?? Infinity)
  || (a.isQlavo ? (b.isQlavo ? 0 : -1) : b.isQlavo ? 1 : 0)
  || a.agency.localeCompare(b.agency);

export const MEASURABLE_GUARANTEES: GuaranteeRow[] =
  [QLAVO_ROW, ...MEASURABLE_COMPETITORS].sort(byVerdictThenPrice);

export const NO_PASS_MARK_GUARANTEES: GuaranteeRow[] = [...NO_PASS_MARK_ROWS].sort(byVerdictThenPrice);

export const PAID_BEFORE_VERDICT: PaidBeforeVerdictRow[] = [
  { agency: 'CiteVantage', paid: '$1,497 (three months at $499, the minimum term)', paidSortUsd: 1497, ifFails: 'Free work, no refund' },
  { agency: 'GEOHATS', paid: 'From $6,000 (three months from $2,000)', paidSortUsd: 6000, ifFails: 'Refunded' },
  { agency: 'Citant.ai', paid: '$7,875 (the pilot)', paidSortUsd: 7875, ifFails: 'Refunded' },
].sort((a, b) => a.paidSortUsd - b.paidSortUsd);

export interface FaqItem { question: string; answer: string; }

export const FAQS: FaqItem[] = [
  {
    question: 'Can a GEO agency guarantee ChatGPT recommendations?',
    answer: 'No agency controls what ChatGPT says. What an agency can guarantee is a measured result on agreed questions, tested a stated way, with a refund or free work if it misses. Look for a defined pass mark, a fixed number of runs and access to the raw answers.',
  },
  {
    question: 'What is a fair results guarantee for generative engine optimization?',
    answer: 'A fair GEO guarantee names the questions, the AI platforms, the number of runs, the date of the verdict and the remedy, all in writing before work starts. The shorter the window and the smaller the payment at risk, the less you lose if the agency misses.',
  },
  {
    question: 'How are GEO results measured?',
    answer: 'Most agencies run an agreed set of buyer questions through AI assistants and count how often the brand is named or recommended. The details vary: Qlavo runs each question 10 times in fresh ChatGPT Temporary Chats, CiteVantage 3 times, and some agencies measure AI-referred traffic in Google Analytics instead.',
  },
  {
    question: 'Do GEO guarantees cover Perplexity, Gemini and Google AI Overviews?',
    answer: "Some do. Citant.ai tracks six platforms, GEOHATS four, Ekamoira three, and KKV Labs counts Google AI Mode. Qlavo's guarantee is measured on ChatGPT only. Check which platform the guarantee is scored on, not which ones the agency tracks.",
  },
  {
    question: 'How much does a GEO engagement with a guarantee cost?',
    answer: 'Published prices range from $499 a month at CiteVantage to a $7,875 nine-week pilot at Citant.ai, with GEOHATS from $2,000 a month and Ekamoira from $3,000. The CiteVantage price carries a 3-month minimum. Several agencies do not publish prices.',
  },
];
