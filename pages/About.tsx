import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import { EnquireButton } from '../components/ContactCta';
import './Commercial.css';

const founder = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ansh Bhatia',
  jobTitle: 'Founder & GEO Strategist',
  worksFor: { '@type': 'Organization', name: 'Qlavo', url: 'https://qlavo.in' },
  url: 'https://qlavo.in/about',
  sameAs: ['https://www.wikidata.org/wiki/Q139925819', 'https://www.linkedin.com/in/ansh-bhatia-290665281/'],
  description: 'Founder of Qlavo, a worldwide B2B GEO agency headquartered in New Delhi, focused on ChatGPT visibility.',
};

export default function About() {
  return (
    <div className="cm-page">
      <SEOMeta
        title="About Qlavo — Worldwide B2B GEO Agency | HQ New Delhi"
        description="Qlavo is a worldwide B2B GEO agency founded in 2025 by Ansh Bhatia. HQ New Delhi. Evidence-led ChatGPT research, writing and technical work."
        path="/about"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(founder) }} />
      <section className="q-container cm-hero">
        <p className="q-eyebrow">About Qlavo / Founded 2025</p>
        <h1 className="q-title">A different way<br />to be found.</h1>
        <div className="cm-hero-bottom">
          <p className="q-lede">Qlavo is a Generative Engine Optimization agency. We work on how businesses show up when buyers ask ChatGPT for recommendations.</p>
          <p className="q-eyebrow">New Delhi, India<br />Worldwide B2B engagements</p>
        </div>
      </section>
      <section className="q-container q-section q-rule cm-founder" aria-labelledby="founder-heading">
        <figure className="cm-founder-photo">
          <img src="/ansh.jpg" alt="Ansh Bhatia" width="640" height="800" loading="lazy" decoding="async" />
          <figcaption><span>Ansh Bhatia</span><span className="cm-muted">Founder, Qlavo</span></figcaption>
        </figure>
        <div className="cm-founder-story">
          <p className="q-eyebrow">A note from the founder</p>
          <h2 className="q-section-heading" id="founder-heading">The question<br />that started Qlavo.</h2>
          <div className="cm-prose">
            <p>Before Qlavo, I ran a social media marketing agency. My focus shifted as I watched how buyers started researching software and agencies.</p>
            <p>Instead of just scrolling through Google links, buyers now ask ChatGPT who to go with. I wanted to answer one simple question: <strong>what does ChatGPT actually say when someone asks about your space?</strong></p>
            <p>I founded Qlavo in 2025 to work on that problem directly: test a set of real buyer questions in fresh chats, see what’s missing, and do the writing, clean-up, and outreach needed to fix it.</p>
            <p>Clean pages and consistent business facts are the foundation, not a switch you flip to control ChatGPT. We show you the work and every raw answer. We do not guarantee rankings, recommendations, or a timeline for results.</p>
          </div>
          <a className="q-text-link cm-founder-link" href="https://www.linkedin.com/in/ansh-bhatia-290665281/" target="_blank" rel="noopener noreferrer">Follow the research on LinkedIn <span aria-hidden="true">↗</span></a>
          <dl className="cm-facts">
            <div><dt>Focus</dt><dd>ChatGPT visibility (GEO)</dd></div>
            <div><dt>Previously</dt><dd>Social media marketing agency founder</dd></div>
            <div><dt>Based in</dt><dd>New Delhi, India</dd></div>
          </dl>
        </div>
      </section>
      <section className="q-container q-section q-rule cm-split">
        <div><p className="q-eyebrow">How we work</p><h2 className="q-section-heading">Show the evidence.<br />Be straight about limits.</h2></div>
        <ol className="cm-editorial-list">
          <li><span className="q-kicker">01 / Baseline</span><h3>Check before you change anything.</h3><p>We record what ChatGPT actually answers and which pages it cites before touching a line of copy—including the runs where you don’t show up at all.</p></li>
          <li><span className="q-kicker">02 / Execution</span><h3>Fix what’s actually missing.</h3><p>We write the pages buyers and ChatGPT look for, clean up inconsistent business facts, and pitch outside roundups—with clear owners and approvals.</p></li>
          <li><span className="q-kicker">03 / Monthly review</span><h3>Keep every answer on the record.</h3><p>We re-run the same questions each month and send you the raw chats. A new mention is an observation, not a magic trick.</p></li>
        </ol>
      </section>
      <section className="q-container q-section q-rule cm-endnote">
        <p className="q-eyebrow">Work with Qlavo</p>
        <h2 className="q-section-heading">Let’s start with<br />your real questions.</h2>
        <div className="cm-actions">
          <EnquireButton label="Meet Ansh" size={17} />
          <Link className="q-text-link" to="/ai-visibility">See how it works</Link>
        </div>
      </section>
    </div>
  );
}
