import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import './Commercial.css';

const engagements = [
  { name: 'Baseline audit', question: 'Where do we stand?', description: 'A defined starting point before you decide what to change.', outputs: ['Agreed buyer prompts, markets and AI platforms', 'Recorded answers, brand mentions and available source links', 'Review of content, entity consistency and technical accessibility', 'Prioritized findings with evidence and limitations'], cta: 'Scope an audit' },
  { name: 'Implementation', question: 'What should we change?', description: 'A focused project to turn agreed findings into practical improvements.', outputs: ['An agreed page and technical worklist', 'Content improvements grounded in verifiable business facts', 'Appropriate structured data and consistent entity information', 'Documented changes, review checkpoints and handoff'], cta: 'Scope implementation' },
  { name: 'Ongoing support', question: 'What happens next?', description: 'Repeated checks and an agreed backlog, with a cadence that fits the work.', outputs: ['Repeat checks against the agreed prompt sample', 'Comparison with the recorded baseline', 'A prioritized content and technical backlog', 'Reporting with platform variability and attribution limits'], cta: 'Scope ongoing support' },
];
const questions = [
  { q: 'How is the quote determined?', a: 'Brands, markets, platforms, prompts and pages define the size of the work. Implementation complexity, access requirements and reporting cadence shape the rest. We agree these inputs before quoting.' },
  { q: 'Do I have to commit to ongoing work?', a: 'An audit, implementation project and ongoing support can be scoped separately. Deliverables, timing, fees, billing and any ongoing terms are agreed in writing before work starts.' },
  { q: 'What results can I expect?', a: 'You receive the deliverables in your agreed scope and evidence of the work completed. AI answers vary by prompt, platform, time and user context. We do not guarantee rankings, AI recommendations, citation counts, revenue or a date when visibility will improve.' },
];

export default function Pricing() {
  return <div className="cm-page">
    <SEOMeta title="GEO Pricing — Scoped Engagements | Qlavo" description="Scope-based quotes for baseline audits, GEO implementation, and ongoing support from Qlavo, a worldwide B2B GEO agency headquartered in New Delhi." path="/pricing" />
    <section className="q-container cm-hero">
      <p className="q-eyebrow">Pricing / Scope comes first</p>
      <h1 className="q-title">Price the work.<br /><span className="cm-muted">Not the promise.</span></h1>
      <div className="cm-hero-bottom"><p className="q-lede">A useful GEO engagement starts with a clear question and a defined body of work. We agree the deliverables, responsibilities and quote before starting.</p><Link className="q-button" to="/contact">Discuss your scope <span aria-hidden="true">↗</span></Link></div>
    </section>
    <section className="q-container q-section q-rule" aria-labelledby="engagements-heading">
      <div className="cm-section-intro"><p className="q-eyebrow">Ways to work together</p><h2 className="q-section-heading" id="engagements-heading">Start where you are.</h2><p className="cm-muted">These are separately scoped engagements, not a mandatory package or a ladder of subscriptions.</p></div>
      <div className="cm-engagements">{engagements.map((item, index) => <article className="cm-engagement" key={item.name}>
        <div className="cm-engagement-name"><span className="q-kicker">0{index + 1}</span><h3>{item.name}</h3><p className="cm-note">Scope-based quote</p></div>
        <div className="cm-engagement-body"><p className="cm-engagement-question">{item.question}</p><p className="cm-muted">{item.description}</p><ul className="cm-output-list">{item.outputs.map(output => <li key={output}>{output}</li>)}</ul></div>
        <Link className="q-text-link cm-engagement-link" to="/contact">{item.cta} <span aria-hidden="true">↗</span></Link>
      </article>)}</div>
    </section>
    <section className="q-container q-section q-rule cm-split">
      <div><p className="q-eyebrow">The scope conversation</p><h2 className="q-section-heading">Less guesswork.<br />A better brief.</h2><p className="cm-muted">Send your website, the buyers you want to reach and the question you are trying to answer. We can work through the rest together.</p></div>
      <dl className="cm-scope-inputs"><div><dt>Coverage</dt><dd>Brands, markets, languages, platforms and buyer prompts.</dd></div><div><dt>Delivery</dt><dd>Pages to review, changes to implement, access and approval responsibilities.</dd></div><div><dt>Review</dt><dd>Reporting cadence, evidence format and the decisions the work should inform.</dd></div></dl>
    </section>
    <section className="q-container q-section q-rule cm-split"><div><p className="q-eyebrow">Before we begin</p><h2 className="q-section-heading">The practical details.</h2></div><div className="cm-faq">{questions.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
    <section className="q-container q-section q-rule cm-endnote"><p className="q-eyebrow">A separate service for agencies</p><h2 className="q-section-heading">Your client.<br />Our delivery support.</h2><p>Need white-label GEO work under your agency’s brand? Partner engagements have their own scope, deliverables and private quote.</p><div className="cm-actions"><Link className="q-button" to="/partners">Explore agency partnerships <span aria-hidden="true">↗</span></Link><Link className="q-text-link" to="/contact">Discuss a direct engagement</Link></div></section>
  </div>;
}
