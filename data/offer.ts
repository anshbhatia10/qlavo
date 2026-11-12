/**
 * The published Qlavo offer. One source of truth: every page reads from here,
 * so a price or term can never drift between pages again.
 */
export const OFFER = {
  questions: 10,
  runsPerQuestion: 10,
  winBar: 5,
  targetWins: 2,
  windowDays: 30,
  freeWorkDays: 60,
} as const;

/** Qlavo does not publish prices: every engagement is scoped and quoted in writing. */
export const PRICE_NOTE = 'Scoped to your business and agreed in writing before any work starts.';

export const GUARANTEE_NAME = '30&2 Guarantee';

/** Short form for cards and page bands. The asterisk links to /terms. */
export const GUARANTEE_SHORT =
  `We agree ten buyer questions before you pay. If, within 30 days, ChatGPT names you as a recommended or suitable option on fewer than two of them, we refund the first month and keep working at no charge until it does.`;

export const ENGINE_LINE = 'ChatGPT only. One engine, measured properly.';
