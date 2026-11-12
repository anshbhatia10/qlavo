import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import { BookCallButton, EnquireButton } from '../components/ContactCta';
import { OFFER } from '../data/offer';
import './Commercial.css';

const clauses = [
  {
    index: '01',
    title: 'The fee.',
    body: [
      'The fee is agreed in writing before work starts and invoiced monthly in advance. No minimum term and no lock-in: cancel any time before your next billing date and no further invoice is raised.',
      'No setup fee and no success fee. Optional paid placements, such as sponsored listings or paid reviews, are never required, are paid by you directly only if you choose them, and do not change clause 06.',
      'You keep all the work produced — pages, copy, listings and outreach results — during the engagement and after it ends.',
    ],
  },
  {
    index: '02',
    title: 'The questions.',
    body: [
      'We agree ten buyer questions in writing before the first invoice. They are locked word for word.',
      'A question can be swapped only by written agreement. A swapped question gets its own baseline, and the clock in clause 07 does not restart.',
    ],
  },
  {
    index: '03',
    title: 'The baseline.',
    body: [
      'Within five days of payment we run each question ten times: a fresh ChatGPT Temporary Chat, memory and personalisation off, from a US connection, the question pasted word for word, no follow-up messages.',
      'A question you already win at baseline is excluded from the guarantee and replaced by agreement.',
      'Every raw answer is shared with you.',
    ],
  },
  {
    index: '04',
    title: 'What counts as won.',
    body: [
      'A question is won when ChatGPT names you as a recommended or suitable option in at least five of ten runs made as described in clause 03, with no negative wording about you in those answers.',
      'A passing mention with no recommendation does not count. We show you the answers either way.',
    ],
  },
  {
    index: '05',
    title: 'The measurement.',
    body: [
      'Measured once, between day 28 and day 30 of the period in clause 07: ten runs per question, made exactly as in clause 03.',
      'All raw answers are shared, and you may watch the runs live.',
    ],
  },
  {
    index: '06',
    title: 'The guarantee.',
    body: [
      `If at least two questions are won, the guarantee is met and billing continues monthly under clause 01.`,
      'If fewer than two are won: we refund the first month within seven days; and, unless you choose to end the engagement after the refund, we keep working at no charge until two questions are won, for up to 60 further days, re-measured the same way at the end of each 30-day block. Billing resumes only from the month after two questions are won, and only if you choose to continue.',
      'If two questions are still not won by the end of those 60 further days, the engagement ends with the refund already paid and nothing further owed by either side.',
      'Each measurement stands on its own. Later movement in the answers, up or down, does not reopen a completed measurement.',
    ],
  },
  {
    index: '07',
    title: 'The clock.',
    body: [
      'The 30-day period, and the free period in clause 06, starts on the later of two things: payment received, and your week-one inputs — CMS or publishing access, or a named person who publishes approved pages.',
      'The clock pauses day for day while approved pages wait more than three business days on you for publishing or sign-off.',
    ],
  },
  {
    index: '08',
    title: 'What we do.',
    body: [
      'We write and place the pages ChatGPT reads when it answers the questions: pages on your site, third-party listings and editorial pitches. We report monthly with the raw answers and adjust the plan to what is moving.',
      'We work on ChatGPT only. We do not currently offer work on other assistants, and nothing here covers them.',
      'We do not control ChatGPT. The only outcome commitment we make is clause 06.',
    ],
  },
  {
    index: '09',
    title: 'Ending it.',
    body: [
      'Either side may end the engagement by email. Fees already paid for a month in progress are not refunded except under clause 06.',
      'Before we invoice, we run all ten questions twice. If fewer than four look winnable, we tell you and decline the work.',
    ],
  },
  {
    index: '10',
    title: 'The rest.',
    body: [
      'These terms, the ten agreed questions and the quote form the whole agreement between us. Paying the first invoice means accepting them.',
      'Qlavo contracts from 15 Poorvi Marg, Vasant Vihar, New Delhi 110057, India. These terms are governed by Indian law, and the courts of New Delhi have jurisdiction.',
      'If any clause is unenforceable, the rest of it stands. Waiving one breach is not waiving any other.',
    ],
  },
];

export default function Terms() {
  return <div className="cm-page">
    <SEOMeta
      title={`Terms — the 30&2 Guarantee | Qlavo`}
      description={`The exact terms behind Qlavo's monthly plan and the 30&2 Guarantee: ${OFFER.questions} agreed questions, how a question is won, the measurement, the refund and the free-work period.`}
      path="/terms"
    />
    <section className="q-container cm-hero">
      <p className="q-eyebrow">Terms / The 30&2 Guarantee</p>
      <h1 className="q-title">The exact terms.<br /><span className="cm-muted">Not the summary.</span></h1>
      <div className="cm-hero-bottom">
        <p className="q-lede">This is what we promise, how it is measured, and what happens if it is not met. The agreement you sign uses the same text.</p>
        <div className="cm-actions"><EnquireButton size={17} /><BookCallButton size={17} /></div>
      </div>
    </section>

    <section className="q-container q-section q-rule" aria-labelledby="terms-heading">
      <div className="cm-section-intro">
        <p className="q-eyebrow">The agreement</p>
        <h2 className="q-section-heading" id="terms-heading">Nine clauses.<br />One commitment.</h2>
        <p className="cm-muted">Last updated 1 November 2026. If anything here is unclear, ask before you pay — that is what the call is for.</p>
      </div>
      <div className="cm-terms">
        {clauses.map(clause => <article className="cm-term" key={clause.index}>
          <span className="q-kicker">{clause.index}</span>
          <div>
            <h3>{clause.title}</h3>
            {clause.body.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            {clause.index === '06' && <p><Link to="/geo-agency-guarantees">How other GEO agencies' guarantees compare →</Link></p>}
          </div>
        </article>)}
      </div>
      <p className="cm-note cm-plan-note">The signature-ready agreement is this text with the parties, dates and payment details filled in. It is sent before any payment. Questions about a clause: <a className="q-text-link" href="mailto:ansh@qlavo.co.in">ansh@qlavo.co.in</a>.</p>
    </section>

    <section className="q-container q-section q-rule cm-split">
      <div><p className="q-eyebrow">The plan itself</p><h2 className="q-section-heading">What the fee buys.</h2><p className="cm-muted">The questions, the baseline, the pages and the monthly report — all in one monthly engagement.</p></div>
      <div className="cm-actions"><Link className="q-button" to="/contact">Talk to us <span aria-hidden="true">↗</span></Link><EnquireButton className="q-button-secondary" label="Ask about a term" topic="the terms" /></div>
    </section>
  </div>;
}
