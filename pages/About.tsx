import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import './Commercial.css';

const founder = {
  '@context': 'https://schema.org', '@type': 'Person', name: 'Ansh Bhatia',
  jobTitle: 'Founder & AI Visibility Strategist',
  worksFor: { '@type': 'Organization', name: 'Qlavo', url: 'https://qlavo.in' },
  url: 'https://qlavo.in/about',
  sameAs: ['https://www.wikidata.org/wiki/Q139925819', 'https://www.linkedin.com/in/ansh-bhatia-290665281/'],
  description: 'Founder of Qlavo, a worldwide B2B GEO agency headquartered in New Delhi, focused on AI visibility.'
};

export default function About() {
  return <div className="cm-page">
    <SEOMeta title="About Qlavo — Worldwide B2B GEO Agency | HQ New Delhi" description="Qlavo is a worldwide B2B GEO agency founded in 2025 by Ansh Bhatia. HQ New Delhi. Evidence-led AI visibility research, content, entity and technical work." path="/about" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(founder) }} />
    <section className="q-container cm-hero">
      <p className="q-eyebrow">About Qlavo / Founded 2025</p>
      <h1 className="q-title">A different way<br />to be discovered.</h1>
      <div className="cm-hero-bottom"><p className="q-lede">Qlavo is a Generative Engine Optimization agency. We work on how businesses are represented in AI answers, and the information those answers can draw on.</p><p className="q-eyebrow">New Delhi, India<br />Worldwide B2B engagements</p></div>
    </section>
    <section className="q-container q-section q-rule cm-founder" aria-labelledby="founder-heading">
      <figure className="cm-founder-photo"><img src="/ansh.jpg" alt="Ansh Bhatia" width="640" height="800" loading="lazy" decoding="async" /><figcaption><span>Ansh Bhatia</span><span className="cm-muted">Founder, Qlavo</span></figcaption></figure>
      <div className="cm-founder-story">
        <p className="q-eyebrow">A note from the founder</p>
        <h2 className="q-section-heading" id="founder-heading">The question<br />that started Qlavo.</h2>
        <div className="cm-prose"><p>Before Qlavo, I ran a social media marketing agency. My focus shifted toward how people discover businesses through AI assistants.</p><p>Alongside searching, buyers can now ask ChatGPT, Perplexity or Claude about a business or service. I wanted to focus on a straightforward question: <strong>what do those answers actually say about your brand?</strong></p><p>I founded Qlavo in 2025 to work on AI visibility: reviewing a defined sample of answers, then scoping practical content, entity and technical improvements.</p><p>Useful pages and consistent business facts are a foundation, not a way to control an assistant. We report the work and the evidence. We do not guarantee rankings, AI recommendations or a timeline for visibility gains.</p></div>
        <a className="q-text-link cm-founder-link" href="https://www.linkedin.com/in/ansh-bhatia-290665281/" target="_blank" rel="noopener noreferrer">Follow the research on LinkedIn <span aria-hidden="true">↗</span></a>
        <dl className="cm-facts"><div><dt>Focus</dt><dd>Generative Engine Optimization</dd></div><div><dt>Previously</dt><dd>Social media marketing agency founder</dd></div><div><dt>Based in</dt><dd>New Delhi, India</dd></div></dl>
      </div>
    </section>
    <section className="q-container q-section q-rule cm-split">
      <div><p className="q-eyebrow">Our working principles</p><h2 className="q-section-heading">Show the evidence.<br />Explain the limits.</h2></div>
      <ol className="cm-editorial-list">
        <li><span className="q-kicker">01 / Baseline</span><h3>Observe before you optimize.</h3><p>Record sampled answers and available sources before making changes. Include omissions and inaccurate descriptions, not just positive mentions.</p></li>
        <li><span className="q-kicker">02 / Implementation</span><h3>Work on what can be changed.</h3><p>Improve agreed content, entity information and technical accessibility. Make ownership and review responsibilities explicit.</p></li>
        <li><span className="q-kicker">03 / Review</span><h3>Keep the context attached.</h3><p>Compare repeated checks and document what changed. A mention is an observation, not proof that a particular edit caused it.</p></li>
      </ol>
    </section>
    <section className="q-container q-section q-rule cm-endnote"><p className="q-eyebrow">Work with Qlavo</p><h2 className="q-section-heading">Let’s start with<br />your real questions.</h2><div className="cm-actions"><Link className="q-button" to="/contact">Meet Ansh <span aria-hidden="true">↗</span></Link><Link className="q-text-link" to="/ai-visibility">Explore the work</Link></div></section>
  </div>;
}
