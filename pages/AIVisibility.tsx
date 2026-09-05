import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import './Commercial.css';

const steps = [
  { title: 'Define the question.', text: 'Agree buyer prompts, markets, languages and platforms. Include discovery, comparison and brand-specific questions where they are relevant, rather than choosing only prompts likely to mention you.' },
  { title: 'Record the baseline.', text: 'Keep the response, brand presence or absence, description accuracy and available source links. Document the conditions and limits so another reviewer can understand what was checked.' },
  { title: 'Prioritize the work.', text: 'Separate content gaps, inconsistent business facts and technical issues. Agree the page list, access, approvals and implementation responsibilities before changing anything.' },
  { title: 'Repeat with context.', text: 'Compare repeated checks against the agreed sample. Report observations alongside the change log and platform variability; a later citation does not prove that an edit caused it.' },
];

export default function AIVisibility() {
  return <div className="cm-page">
    <SEOMeta title="AI Search Visibility & GEO Services | Qlavo" description="Qlavo helps brands improve AI-search visibility with recorded buyer-question research, content, entity clarity and technical optimization. Scope agreed before work starts." path="/ai-visibility" />
    <section className="q-container cm-hero">
      <p className="q-eyebrow">GEO / AI-search visibility</p>
      <h1 className="q-title">What does AI<br /><span className="cm-muted">say about you?</span></h1>
      <div className="cm-hero-bottom"><p className="q-lede">AI visibility is about how your business appears in answers buyers may use to make decisions. Qlavo starts with recorded observations, not a score generated from your website’s HTML.</p><Link className="q-button" to="/contact">Discuss your visibility <span aria-hidden="true">↗</span></Link></div>
    </section>
    <section className="q-container q-section q-rule cm-split" aria-labelledby="measured-answers">
      <div><p className="q-eyebrow">01 / Observed in answers</p><h2 className="q-section-heading" id="measured-answers">Measured answers.<br />A defined sample.</h2><p className="cm-muted">A real check records what a platform returned under particular conditions. It does not tell us what every buyer sees.</p></div>
      <div className="cm-prose"><p>For each check, retain the prompt, platform, date, response and available cited sources. Note whether your brand appears, how it is described and which alternatives are mentioned. Keep negative and inconclusive observations too.</p><p>Agree which experiences to sample, such as ChatGPT, Gemini or Perplexity, based on your buyers and what can be tested reliably. Record the model or mode, language and session context where available.</p><p>If reporting a mention rate, show the underlying checks and sample size. A limited sample is not a visibility score for an entire platform, market or audience. Wording, time and personalization can change the answer.</p></div>
    </section>
    <section className="q-container q-section q-rule cm-split" aria-labelledby="technical-signals">
      <div><p className="q-eyebrow">02 / Reviewed on your website</p><h2 className="q-section-heading" id="technical-signals">Technical signals.<br />Not recommendations.</h2><p className="cm-muted">A website review identifies things you can improve. It cannot establish that an AI assistant recommends your business.</p></div>
      <dl className="cm-scope-inputs"><div><dt>Accessibility</dt><dd>Review crawl permissions, indexability, rendered content and page structure. Accessible content is a foundation, not proof that a platform retrieved or used it.</dd></div><div><dt>Entity clarity</dt><dd>Check business names, descriptions, locations and relevant profiles for consistency. Structured data should accurately describe visible content; valid markup does not guarantee a citation.</dd></div><div><dt>Useful evidence</dt><dd>Improve service explanations, buyer questions and substantiated business facts. A content checklist or HTML scan is not a measurement of actual AI answers.</dd></div></dl>
    </section>
    <section className="q-container q-section q-rule cm-split"><div><p className="q-eyebrow">From research to delivery</p><h2 className="q-section-heading">A repeatable process.<br />An honest report.</h2><p className="cm-muted">The handoff should distinguish recorded evidence, interpretation and proposed actions. Findings without their limits are not a useful baseline.</p></div><ol className="cm-editorial-list">{steps.map((step, index) => <li key={step.title}><span className="q-kicker">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></section>
    <section className="q-container q-section q-rule cm-endnote"><p className="q-eyebrow">Scope before promises</p><h2 className="q-section-heading">Understand the baseline.<br />Then decide what’s next.</h2><p>Start with a baseline audit, a defined implementation project or ongoing support. Deliverables, responsibilities, fees and timing are agreed before work starts. We do not guarantee AI recommendations, rankings, leads or outcome deadlines.</p><div className="cm-actions"><a className="q-button" href="https://calendly.com/anshnb07/30min">Book a discovery call <span aria-hidden="true">↗</span></a><Link className="q-text-link" to="/pricing">Explore engagement options</Link><Link className="q-text-link" to="/partners">White-label GEO for agencies</Link></div><p className="cm-note">Looking for the GEO calculator? This page explains the work instead. A URL alone cannot produce a measured AI visibility result.</p></section>
  </div>;
}
