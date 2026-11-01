import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import { BookCallButton, EnquireButton, enquireHref } from '../components/ContactCta';
import { OFFER, GUARANTEE_NAME, PRICE_LINE } from '../data/offer';
import './Commercial.css';

const included = [
  `${OFFER.questions} buyer questions, agreed and locked in writing`,
  `A recorded baseline: ${OFFER.runsPerQuestion} fresh ChatGPT chats per question`,
  'Pages written and placed — your site, listings and editorial pitches',
  'Monthly reporting with the raw answers',
  'ChatGPT only — one engine, measured properly',
];

const engagements = [
  { name: 'Baseline audit', question: 'Where do we stand?', description: 'A recorded starting point before anything changes.', outputs: ['Agreed buyer questions, markets and languages', 'Recorded answers, brand mentions and available source links', 'Review of content, entity consistency and technical accessibility', 'Prioritised findings with evidence and limitations'], cta: 'Talk it through' },
  { name: 'Implementation', question: 'What should we change?', description: 'The agreed findings turned into work on your site and off it.', outputs: ['An agreed page and technical worklist', 'Content improvements grounded in verifiable business facts', 'Appropriate structured data and consistent entity information', 'Documented changes, review checkpoints and handoff'], cta: 'Talk it through' },
  { name: 'Ongoing support', question: 'What happens next?', description: 'Repeat checks and an agreed backlog, inside the monthly plan.', outputs: ['Repeat checks against the agreed question set', 'Comparison with the recorded baseline', 'A prioritised content and technical backlog', 'Reporting with platform variability and attribution limits'], cta: 'Talk it through' },
];

const questions = [
  { q: 'What does it cost?', a: `${OFFER.usd} a month, or ${OFFER.inr}, billed monthly in advance. No setup fee and no success fee.` },
  { q: 'Is there a minimum term?', a: 'No. It is month to month. Cancel any time before your next billing date and no further invoice is raised.' },
  { q: `What is the ${GUARANTEE_NAME}?`, a: `We agree ${OFFER.questions} buyer questions before you pay. If ChatGPT is not recommending you on at least two of them within ${OFFER.windowDays} days, we refund the first month and keep working at no charge until it does. The full wording is on the terms page.` },
  { q: 'What counts as winning a question?', a: `ChatGPT names you as a recommended or suitable option in at least ${OFFER.winBar} of ${OFFER.runsPerQuestion} fresh chats, with no negative wording about you in those answers. A passing mention does not count.` },
  { q: 'When does the 30 days start?', a: 'On the later of payment and your week-one inputs — CMS or publishing access, or a named person who publishes approved pages. The clock pauses while approved pages wait on you.' },
  { q: 'Do you work on other AI engines?', a: 'Not at the moment. We work on ChatGPT only. One engine, measured properly, is worth more than five checked carelessly.' },
  { q: 'What if it does not reach two questions?', a: `You get the first month refunded within seven days. Unless you decide to stop there, we keep working at no charge for up to ${OFFER.freeWorkDays} further days. If it still has not reached two, the engagement ends and nothing further is owed.` },
  { q: 'Who owns the work?', a: 'You do. Pages, copy, listings and outreach results are yours, during the engagement and after it ends.' },
];

export default function Pricing() {
  return <div className="cm-page">
    <SEOMeta
      title={`GEO Pricing — ${OFFER.usd} a Month | Qlavo`}
      description={`One GEO plan from Qlavo: ${PRICE_LINE}. Cancel any time. Ten agreed buyer questions, and if ChatGPT is not naming you on two of them within ${OFFER.windowDays} days, the first month is refunded.`}
      path="/pricing"
    />
    <section className="q-container cm-hero cm-hero-guarantee">
      <p className="q-eyebrow">Pricing / One plan</p>
      <h1 className="q-title">Price the work.<br /><span className="cm-muted">Not the promise.</span></h1>
      <div className="cm-hero-bottom">
        <p className="q-lede">One monthly plan, in dollars or rupees, cancel any time. The only outcome we put in writing is a guarantee you can measure yourself.</p>
        <div className="cm-actions"><EnquireButton size={17} /><BookCallButton size={17} /></div>
      </div>
      <div className="cm-guarantee-hero">
        <p className="q-eyebrow">The {GUARANTEE_NAME}</p>
        <p className="cm-guarantee-statement">Two of your ten buyer questions recommended by ChatGPT within {OFFER.windowDays}{'\u00A0'}days — or we <strong>refund the first month</strong> and keep working free until they are.<Link to="/terms" className="cm-asterisk" aria-label="Full terms">*</Link></p>
        <p className="cm-fine">*Free work continues for up to {OFFER.freeWorkDays} further days. <Link to="/terms">Exact terms and measurement</Link>.</p>
      </div>
    </section>
    <section className="q-container q-section q-rule" aria-labelledby="plan-heading">
      <div className="cm-section-intro">
        <p className="q-eyebrow">The plan</p>
        <h2 className="q-section-heading" id="plan-heading">One plan.<br />One fee.</h2>
        <p className="cm-muted">Everything we do, in one monthly engagement. No tiers to compare and no separate retainer.</p>
      </div>
      <div className="cm-plans cm-plans-single">
        <article className="cm-plan">
          <div className="cm-plan-main">
            <div className="cm-plan-top"><span className="q-kicker">01</span><h3>Monthly</h3></div>
            <p className="cm-plan-price">{OFFER.usd}<span className="cm-plan-alt">or {OFFER.inr} {OFFER.cadence}</span></p>
            <p className="cm-plan-summary cm-muted">We agree the questions, record the baseline, write and place the pages ChatGPT reads, and report against the same test each month.</p>
          </div>
          <div className="cm-plan-side">
            <ul className="cm-plan-list">{included.map(item => <li key={item}>{item}</li>)}</ul>
            <EnquireButton className="q-button cm-plan-button" label="Start with the questions" topic={`the ${OFFER.usd} monthly plan`} />
          </div>
          <div className="cm-guarantee">
            <p className="q-eyebrow">How the guarantee works</p>
            <p className="cm-guarantee-statement">A question is won when ChatGPT recommends you in at least five of ten fresh chats. Two won within {OFFER.windowDays}{'\u00A0'}days and the guarantee is met — otherwise we <strong>refund the first month</strong> and keep working free until it is.<Link to="/terms" className="cm-asterisk" aria-label="Full terms">*</Link></p>
            <p className="cm-fine">*Free work continues for up to {OFFER.freeWorkDays} further days. <Link to="/terms">Full terms and measurement</Link>.</p>
          </div>
        </article>
      </div>
      <p className="cm-note cm-plan-note">Before we invoice, we run all ten questions twice. If fewer than four look winnable, we tell you and decline the work. Prices are shown in USD or INR; scope and timing are agreed in writing before work starts. We do not guarantee rankings or citations — the 2-prompt guarantee is the only outcome commitment, and it is written down.</p>
    </section>
    <section className="q-container q-section q-rule" aria-labelledby="engagements-heading">
      <div className="cm-section-intro"><p className="q-eyebrow">What the fee covers</p><h2 className="q-section-heading" id="engagements-heading">Start where you are.</h2><p className="cm-muted">Each month is built from the same three parts. They are stages of one engagement, not a ladder of subscriptions.</p></div>
      <div className="cm-engagements">{engagements.map((item, index) => <article className="cm-engagement" key={item.name}>
        <div className="cm-engagement-name"><span className="q-kicker">0{index + 1}</span><h3>{item.name}</h3><p className="cm-note">Included every month</p></div>
        <div className="cm-engagement-body"><p className="cm-engagement-question">{item.question}</p><p className="cm-muted">{item.description}</p><ul className="cm-output-list">{item.outputs.map(output => <li key={output}>{output}</li>)}</ul></div>
        <a className="q-text-link cm-engagement-link" href={enquireHref(item.name === 'Baseline audit' ? 'the baseline audit' : item.name === 'Implementation' ? 'implementation' : 'ongoing support')}>{item.cta} <span aria-hidden="true">↗</span></a>
      </article>)}</div>
    </section>
    <section className="q-container q-section q-rule cm-split">
      <div><p className="q-eyebrow">The scope conversation</p><h2 className="q-section-heading">Less guesswork.<br />A better brief.</h2><p className="cm-muted">Send your website, the buyers you want to reach and the question you are trying to answer. We can work through the rest together.</p></div>
      <dl className="cm-scope-inputs"><div><dt>Questions</dt><dd>The buyer questions, markets and languages that matter to you.</dd></div><div><dt>Delivery</dt><dd>Pages to review, changes to implement, access and approval responsibilities.</dd></div><div><dt>Review</dt><dd>Reporting cadence, evidence format and the decisions the work should inform.</dd></div></dl>
    </section>
    <section className="q-container q-section q-rule cm-split"><div><p className="q-eyebrow">Before we begin</p><h2 className="q-section-heading">The practical details.</h2></div><div className="cm-faq">{questions.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
    <section className="q-container q-section q-rule cm-endnote"><p className="q-eyebrow">A separate service for agencies</p><h2 className="q-section-heading">Your client.<br />Our delivery support.</h2><p>Need white-label GEO work under your agency’s brand? Partner engagements have their own scope, deliverables and private quote.</p><div className="cm-actions"><Link className="q-button" to="/partners">Explore agency partnerships <span aria-hidden="true">↗</span></Link><Link className="q-text-link" to="/contact">Contact page</Link></div></section>
  </div>;
}
