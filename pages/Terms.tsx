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
      'No setup fee and no success fee. Optional paid placements, such as sponsored listings or paid reviews, are never required and are paid by you directly only if you approve them.',
      'You keep all the work produced — pages, copy, listings and outreach results — during the engagement and after it ends.',
    ],
  },
  {
    index: '02',
    title: 'The questions.',
    body: [
      'We agree ten buyer questions in writing before the first invoice. They are locked word for word.',
      'A question can be swapped only by written agreement. A swapped question gets its own baseline.',
    ],
  },
  {
    index: '03',
    title: 'The baseline.',
    body: [
      'Within five days of payment we run each question ten times: a fresh ChatGPT Temporary Chat, memory and personalisation off, from a US connection, the question pasted word for word, no follow-up messages.',
      'Every raw answer is shared with you.',
    ],
  },
  {
    index: '04',
    title: 'How progress is measured.',
    body: [
      'Each month we re-run every question exactly as in clause 03 and report how often ChatGPT names you as a recommended or suitable option, with the raw answers.',
      'A passing mention with no recommendation is reported as a mention, not a recommendation. You may watch the runs live.',
    ],
  },
  {
    index: '05',
    title: 'Your inputs.',
    body: [
      'In week one we need CMS or publishing access, or a named person who publishes approved pages.',
      'Drafts are sent for approval. Anything not answered within three business days may be published as written.',
    ],
  },
  {
    index: '06',
    title: 'What we do.',
    body: [
      'We write and place the pages ChatGPT reads when it answers the questions: pages on your site, third-party listings and editorial pitches. We report monthly with the raw answers and adjust the plan to what is moving.',
      'We work on ChatGPT only. We do not currently offer work on other assistants, and nothing here covers them.',
      'We do not control ChatGPT and do not guarantee rankings, recommendations, citations or leads.',
    ],
  },
  {
    index: '07',
    title: 'Ending it.',
    body: [
      'Either side may end the engagement by email. Fees already paid for a month in progress are not refunded.',
      'Before we invoice, we run all ten questions twice. If fewer than four look winnable, we tell you and decline the work.',
    ],
  },
  {
    index: '08',
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
      title={`Terms of engagement | Qlavo`}
      description={`The exact terms of a Qlavo engagement: the fee, the ${OFFER.questions} agreed questions, how progress is measured, your inputs and how to end it.`}
      path="/terms"
    />
    <section className="q-container cm-hero">
      <p className="q-eyebrow">Terms of engagement</p>
      <h1 className="q-title">The exact terms.<br /><span className="cm-muted">Not the summary.</span></h1>
      <div className="cm-hero-bottom">
        <p className="q-lede">This is what we do, how it is measured, and how either side can end it. The agreement you sign uses the same text.</p>
        <div className="cm-actions"><EnquireButton size={17} /><BookCallButton size={17} /></div>
      </div>
    </section>

    <section className="q-container q-section q-rule" aria-labelledby="terms-heading">
      <div className="cm-section-intro">
        <p className="q-eyebrow">The agreement</p>
        <h2 className="q-section-heading" id="terms-heading">Eight clauses.<br />No small print.</h2>
        <p className="cm-muted">Last updated 1 November 2026. If anything here is unclear, ask before you pay — that is what the call is for.</p>
      </div>
      <div className="cm-terms">
        {clauses.map(clause => <article className="cm-term" key={clause.index}>
          <span className="q-kicker">{clause.index}</span>
          <div>
            <h3>{clause.title}</h3>
            {clause.body.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
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
