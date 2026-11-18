import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import './Partners.css';

const callUrl = 'https://calendly.com/anshnb07/30min';
const workstreams = [
  ['Baseline', 'See what is actually showing up.', 'A clean log of fresh ChatGPT checks: prompts, dates, full answers, cited links, and misses.'],
  ['Prompt research', 'Start with real buyer questions.', 'A question set built around your client’s offer and market, agreed before testing begins.'],
  ['Content', 'Give useful answers a clear home.', 'Plain, well-sourced briefs or page drafts using approved brand facts. Your team reviews and publishes.'],
  ['Entity', 'Make the business facts match.', 'A check of profiles, company details, and structured data—fixing inconsistencies without inventing authority.'],
  ['Technical prioritization', 'Separate real blockers from busywork.', 'A short, prioritized brief on crawl, Bing indexing, and page structure.'],
  ['Reporting', 'Show the work, honestly.', 'An editable summary with the raw answers and next steps, ready for your brand.'],
];
const faqs = [
  ['Who owns the client relationship?', 'You own the client relationship, strategy, and commercial terms. We never contact your client without your written consent.'],
  ['Can we put our brand on the work?', 'Yes. You get editable, unbranded deliverables. Your team reviews, brands, and approves everything before the client sees it.'],
  ['Can we start with one project?', 'Yes—we can discuss an optional paid pilot on the partner call. It is a private, separately scoped first project with fees and deliverables agreed up front.'],
  ['What can we promise the client?', 'Promise the agreed work, not ChatGPT’s decisions. We do not guarantee rankings, AI recommendations or editorial placements. ChatGPT answers vary from run to run, so reports show the exact method and raw chats.'],
  ['Who handles publishing and implementation?', 'Your agency coordinates approvals and publishing unless implementation is explicitly scoped. We agree access, revisions, and responsibilities before work starts.'],
];

export default function Partners() {
  return (
    <div className="pt-page">
      <SEOMeta
        title="White-label GEO for Agency Partners | Qlavo"
        description="White-label GEO delivery for agencies. Keep the client relationship; get editable, unbranded ChatGPT research, writing and reporting. Private, scope-based partner quotes."
        path="/partners"
      />
      <section aria-labelledby="partners-title" className="pt-hero q-container">
        <p className="q-eyebrow">Agency partnerships / White-label GEO</p>
        <div className="pt-hero-grid">
          <div>
            <h1 id="partners-title" className="q-title">Add ChatGPT delivery.<br /><span className="pt-muted">Keep the account.</span></h1>
            <p className="q-lede">Your client is asking how to show up in ChatGPT. Bring in a quiet delivery partner, not another agency at the table.</p>
            <div className="pt-actions">
              <a href={callUrl} className="q-button">Discuss a client brief <span aria-hidden="true">↗</span></a>
              <Link to="/sample-deliverable" className="q-text-link">Inspect the sample handoff <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <aside className="pt-agreement" aria-label="Partner commitments">
            <p className="q-eyebrow">The working agreement</p>
            <ul>
              <li>You own the client relationship.</li>
              <li>No direct client contact without agency consent.</li>
              <li>Editable, unbranded deliverables.</li>
              <li>Scope agreed before work.</li>
            </ul>
            <p className="pt-note">Qlavo is a GEO agency; white-label is one of our services. You lead the account. We do the agreed behind-the-scenes work.</p>
          </aside>
        </div>
        <div className="pt-fitline"><span className="q-eyebrow">Built for</span><p>SEO, content, and digital agencies that need specialist delivery—not another SaaS dashboard to manage.</p></div>
      </section>

      <section aria-labelledby="partner-services" className="q-section q-rule">
        <div className="q-container pt-editorial-grid">
          <header className="pt-section-intro">
            <p className="q-eyebrow">01 / The work</p>
            <h2 id="partner-services" className="q-section-heading">A delivery team.<br />Not a fixed bundle.</h2>
            <p>Bring us the gap in your team’s capacity. We scope the work around it.</p>
            <p className="pt-note">Possible workstreams, not automatic inclusions. Deliverables, volume, markets, review rounds, and implementation are agreed per project.</p>
          </header>
          <div className="pt-workstreams">
            {workstreams.map(([title, lead, description]) => (
              <article key={title} className="pt-workstream">
                <h3>{title}</h3>
                <div><p className="pt-workstream-lead">{lead}</p><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="partner-handoff" className="pt-paper q-section">
        <div className="q-container pt-editorial-grid">
          <header className="pt-section-intro">
            <p className="q-eyebrow">02 / The handoff</p>
            <h2 id="partner-handoff" className="q-section-heading">Ready for your review.<br />Then your brand.</h2>
            <p>No dashboard subscription to resell. No Qlavo-branded report to explain. Just an editable handoff your team can review, adapt, and present.</p>
            <Link to="/sample-deliverable" className="q-text-link">Open the illustrative sample <span aria-hidden="true">→</span></Link>
          </header>
          <div className="pt-document-index">
            <p className="pt-document-label">Anatomy of a handoff / Format preview</p>
            <dl>
              <div><dt>Research record</dt><dd>Questions, method, source links, and saved ChatGPT answers—including misses.</dd></div>
              <div><dt>Recommended work</dt><dd>Priorities, editable briefs or drafts, and factual questions flagged for approval.</dd></div>
              <div><dt>Agency review</dt><dd>Responsibilities, limitations, revision notes, and the agreed next step.</dd></div>
            </dl>
            <p className="pt-note">Illustrative components only. The agreed scope determines the actual files included.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="partner-process" className="q-section">
        <div className="q-container pt-editorial-grid">
          <header className="pt-section-intro">
            <p className="q-eyebrow">03 / Working together</p>
            <h2 id="partner-process" className="q-section-heading">Start with the brief.<br />Agree the boundaries.</h2>
            <p>A good fit when your team can share approved brand facts, coordinate reviews, and handle publishing.</p>
          </header>
          <ol className="pt-process">
            <li><span className="q-kicker" aria-hidden="true">01</span><div><h3>Bring the client context</h3><p>Share the audience, market, site, and goal. We clarify fit, access, confidentiality, and who handles what.</p></div></li>
            <li><span className="q-kicker" aria-hidden="true">02</span><div><h3>Agree the work in writing</h3><p>Confirm deliverables, exclusions, fees, timing, and revision rounds before anything starts.</p></div></li>
            <li><span className="q-kicker" aria-hidden="true">03</span><div><h3>Review, brand, deliver</h3><p>We prepare the agreed work. You review the editable handoff, approve client comms, and manage publishing.</p></div></li>
          </ol>
        </div>
      </section>

      <section aria-labelledby="partner-pricing" className="q-section q-rule">
        <div className="q-container pt-editorial-grid">
          <header className="pt-section-intro">
            <p className="q-eyebrow">04 / Commercial terms</p>
            <h2 id="partner-pricing" className="q-section-heading">A private quote.<br />Your client pricing.</h2>
          </header>
          <div className="pt-terms">
            <p className="pt-large-copy">Scope-based partner pricing. You decide what to charge your client.</p>
            <p>Our fees reflect the deliverables, research depth, markets, and reporting cadence—no blanket fixed-price package.</p>
            <p>Want to test working together first? Discuss an optional paid pilot on the partner call. We agree its scope and price separately before work starts.</p>
            <p className="pt-note">A call is a scoping chat, not a commitment to buy.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="partner-faq" className="q-section q-rule">
        <div className="q-container pt-editorial-grid">
          <header className="pt-section-intro"><p className="q-eyebrow">Before we begin</p><h2 id="partner-faq" className="q-section-heading">The practical<br />questions.</h2></header>
          <div className="pt-faq">
            {faqs.map(([question, answer]) => (
              <details key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="partner-call" className="q-container q-section q-rule pt-closing">
        <p className="q-eyebrow">Your next client brief</p>
        <h2 id="partner-call" className="q-section-heading">You bring the relationship.<br />Let’s scope the delivery.</h2>
        <div className="pt-closing-bottom"><p>Bring the site, the market, and the question your client is asking. We’ll work out whether there’s a fit.</p><a href={callUrl} className="q-button">Book a partner call <span aria-hidden="true">↗</span></a></div>
      </section>
    </div>
  );
}
