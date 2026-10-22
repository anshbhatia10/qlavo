import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import { BookCallButton, EnquireButton, enquireHref } from '../components/ContactCta';
import './Commercial.css';

const plans = [
  {
    index: '01',
    length: 'Three months',
    price: '$900',
    alt: 'or ₹90,000',
    summary: 'A focused engagement: baseline, implementation and a first round of repeat checks inside one quarter.',
    items: [
      'Agreed buyer questions, markets and engines',
      'A recorded baseline with the answers we saw',
      'Content, entity and technical work on one agreed worklist',
      'Repeat checks and a written report against the baseline',
    ],
    cta: 'Enquire about three months',
    topic: 'the three-month plan',
  },
  {
    index: '02',
    length: 'Six months',
    price: '$1,500',
    alt: 'or ₹1,50,000',
    summary: 'The same work with more room to implement, re-test and follow the evidence.',
    items: [
      'Everything in the three-month plan',
      'A longer worklist, delivered in stages',
      'Additional repeat checks against the same baseline',
      'A closing report and handover',
    ],
    cta: 'Enquire about six months',
    topic: 'the six-month plan',
  },
];

const engagements = [
  { name: 'Baseline audit', question: 'Where do we stand?', description: 'A defined starting point before you decide what to change.', outputs: ['Agreed buyer prompts, markets and AI platforms', 'Recorded answers, brand mentions and available source links', 'Review of content, entity consistency and technical accessibility', 'Prioritized findings with evidence and limitations'], cta: 'Talk it through' },
  { name: 'Implementation', question: 'What should we change?', description: 'A focused project to turn agreed findings into practical improvements.', outputs: ['An agreed page and technical worklist', 'Content improvements grounded in verifiable business facts', 'Appropriate structured data and consistent entity information', 'Documented changes, review checkpoints and handoff'], cta: 'Talk it through' },
  { name: 'Ongoing support', question: 'What happens next?', description: 'Repeated checks and an agreed backlog, run inside your plan.', outputs: ['Repeat checks against the agreed prompt sample', 'Comparison with the recorded baseline', 'A prioritized content and technical backlog', 'Reporting with platform variability and attribution limits'], cta: 'Talk it through' },
];

const questions = [
  { q: 'What does a plan cost?', a: 'Three months is $900 or ₹90,000. Six months is $1,500 or ₹1,50,000. The fee is agreed in writing before work starts. No hourly billing, and no separate retainer is required.' },
  { q: 'Do I have to commit to ongoing work?', a: 'No. Both plans have a defined end. Continuing after a plan is a separate decision, with its own scope and terms, agreed only if it makes sense for the work.' },
  { q: 'What is the difference between the plans?', a: 'The work is the same: a baseline, implementation and repeat checks. Six months gives more time to deliver a longer worklist and re-test it. Choose the horizon that fits your team and your market.' },
  { q: 'What results can I expect?', a: 'You receive the deliverables in your agreed scope and evidence of the work completed. AI answers vary by prompt, platform, time and user context. We do not guarantee rankings, AI recommendations, citation counts, revenue or a date when visibility will improve.' },
];

export default function Pricing() {
  return <div className="cm-page">
    <SEOMeta title="GEO Pricing — Fixed Plans | Qlavo" description="Fixed GEO pricing from Qlavo: three months for $900 or ₹90,000, six months for $1,500 or ₹1,50,000. Baseline, implementation and repeat checks, agreed in writing." path="/pricing" />
    <section className="q-container cm-hero">
      <p className="q-eyebrow">Pricing / Fixed fee</p>
      <h1 className="q-title">Price the work.<br /><span className="cm-muted">Not the promise.</span></h1>
      <div className="cm-hero-bottom"><p className="q-lede">Two fixed plans, in dollars or rupees. One fee, agreed in writing before work starts. No hourly billing, no separate retainer.</p><div className="cm-actions"><EnquireButton size={17} /><BookCallButton size={17} /></div></div>
    </section>
    <section className="q-container q-section q-rule" aria-labelledby="plans-heading">
      <div className="cm-section-intro"><p className="q-eyebrow">Plans</p><h2 className="q-section-heading" id="plans-heading">Two plans.<br />One fixed fee.</h2><p className="cm-muted">Both plans cover the same three parts of the work: a baseline, implementation and repeat checks. The difference is how much time we have to do them.</p></div>
      <div className="cm-plans">{plans.map(plan => <article className="cm-plan" key={plan.length}>
        <div className="cm-plan-top"><span className="q-kicker">{plan.index}</span><h3>{plan.length}</h3></div>
        <p className="cm-plan-price">{plan.price}<span className="cm-plan-alt">{plan.alt}</span></p>
        <p className="cm-plan-summary cm-muted">{plan.summary}</p>
        <ul className="cm-plan-list">{plan.items.map(item => <li key={item}>{item}</li>)}</ul>
        <EnquireButton className="q-button cm-plan-button" label={plan.cta} topic={plan.topic} />
      </article>)}</div>
      <p className="cm-note cm-plan-note">Prices are shown in USD or INR. Scope, deliverables and timing are agreed in writing before work starts. Anything outside the agreed scope is discussed before it is added.</p>
    </section>
    <section className="q-container q-section q-rule" aria-labelledby="engagements-heading">
      <div className="cm-section-intro"><p className="q-eyebrow">What the fee covers</p><h2 className="q-section-heading" id="engagements-heading">Start where you are.</h2><p className="cm-muted">Each plan is built from the same three parts. They are stages of one engagement, not a ladder of subscriptions.</p></div>
      <div className="cm-engagements">{engagements.map((item, index) => <article className="cm-engagement" key={item.name}>
        <div className="cm-engagement-name"><span className="q-kicker">0{index + 1}</span><h3>{item.name}</h3><p className="cm-note">Included in every plan</p></div>
        <div className="cm-engagement-body"><p className="cm-engagement-question">{item.question}</p><p className="cm-muted">{item.description}</p><ul className="cm-output-list">{item.outputs.map(output => <li key={output}>{output}</li>)}</ul></div>
        <a className="q-text-link cm-engagement-link" href={enquireHref(item.name === 'Baseline audit' ? 'the baseline audit' : item.name === 'Implementation' ? 'implementation' : 'ongoing support')}>{item.cta} <span aria-hidden="true">↗</span></a>
      </article>)}</div>
    </section>
    <section className="q-container q-section q-rule cm-split">
      <div><p className="q-eyebrow">The scope conversation</p><h2 className="q-section-heading">Less guesswork.<br />A better brief.</h2><p className="cm-muted">Send your website, the buyers you want to reach and the question you are trying to answer. We can work through the rest together.</p></div>
      <dl className="cm-scope-inputs"><div><dt>Coverage</dt><dd>Brands, markets, languages, platforms and buyer prompts.</dd></div><div><dt>Delivery</dt><dd>Pages to review, changes to implement, access and approval responsibilities.</dd></div><div><dt>Review</dt><dd>Reporting cadence, evidence format and the decisions the work should inform.</dd></div></dl>
    </section>
    <section className="q-container q-section q-rule cm-split"><div><p className="q-eyebrow">Before we begin</p><h2 className="q-section-heading">The practical details.</h2></div><div className="cm-faq">{questions.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
    <section className="q-container q-section q-rule cm-endnote"><p className="q-eyebrow">A separate service for agencies</p><h2 className="q-section-heading">Your client.<br />Our delivery support.</h2><p>Need white-label GEO work under your agency’s brand? Partner engagements have their own scope, deliverables and private quote.</p><div className="cm-actions"><Link className="q-button" to="/partners">Explore agency partnerships <span aria-hidden="true">↗</span></Link><Link className="q-text-link" to="/contact">Contact page</Link></div></section>
  </div>;
}
