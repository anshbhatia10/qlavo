import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import './Partners.css';

const measurementFields = [
  ['Question & context', 'Agreed buyer prompt, question ID, market and language.'],
  ['Run conditions', 'Engine, version where available, run number, date, session conditions and search settings.'],
  ['Response & evidence', 'Full response, retained evidence and cited source URLs. Keep misses as well as hits.'],
  ['Brand presence', 'Observed mention, recommendation and citation, recorded separately.'],
  ['Publication & limitations', 'Page publication and indexing status, missing evidence and limits of comparison.'],
];

export default function SampleDeliverable() {
  return (
    <div className="pt-page pt-sample">
      <SEOMeta
        title="Illustrative White-label GEO Deliverable | Qlavo"
        description="Inspect an illustrative GEO handoff: a content brief, headers-only measurement CSV and agency review checklist. Not a client case study or measured result."
        path="/sample-deliverable"
      />
      <section aria-labelledby="sample-title" className="pt-hero q-container">
        <Link to="/partners" className="q-text-link pt-back"><span aria-hidden="true">←</span> Agency partners</Link>
        <p className="q-eyebrow">The handoff / An illustrative format preview</p>
        <div className="pt-sample-hero-grid">
          <div>
            <h1 id="sample-title" className="q-title">Inspect the work.<br /><span className="pt-muted">Before the brief.</span></h1>
            <p className="q-lede">See how a content brief, evidence log and review notes can fit together. No invented client. No made-up performance chart.</p>
          </div>
          <aside className="pt-sample-disclosure" aria-label="Sample limitations">
            <p className="q-eyebrow">Read this first</p>
            <p><strong>Illustrative only.</strong> This is not a client case study. No measurements have been collected for this example.</p>
            <p className="pt-note">It does not demonstrate changes in rankings, AI recommendations, citations or revenue.</p>
          </aside>
        </div>
        <nav aria-label="Sample contents" className="pt-sample-nav">
          <a href="#sample-brief"><span aria-hidden="true">01</span> Content brief</a>
          <a href="#sample-measurement"><span aria-hidden="true">02</span> Evidence log</a>
          <a href="#sample-handoff"><span aria-hidden="true">03</span> Agency review</a>
        </nav>
      </section>

      <section aria-labelledby="sample-brief" className="pt-paper q-section">
        <div className="q-container">
          <div className="pt-sample-document-header"><p className="q-eyebrow">01 / Content brief</p><p className="pt-document-label">Example task · Not an audit finding</p></div>
          <div className="pt-editorial-grid">
            <header className="pt-section-intro">
              <h2 id="sample-brief" className="q-section-heading">Make a service page<br />worth the buyer’s time.</h2>
              <p>Help a buyer understand what the service includes, who it fits and what evidence supports it. The actual page and work would be selected after research.</p>
              <p className="pt-note">Agency deliverables are editable, unbranded and tailored to the agreed scope. This public preview uses Qlavo’s site branding.</p>
            </header>
            <div className="pt-brief-body">
              <h3>Proposed page structure</h3>
              <ol className="pt-draft-list">
                <li>State the service, audience and market in plain language.</li>
                <li>Explain deliverables, exclusions and approval responsibilities.</li>
                <li>Answer buyer questions with approved facts and supporting sources.</li>
                <li>Offer a clear next step without promising an AI recommendation.</li>
              </ol>
              <div className="pt-document-index">
                <p className="pt-document-label">Evidence & review notes</p>
                <dl>
                  <div><dt>Inputs needed</dt><dd>Approved offer details, audience, source documents and the page URL.</dd></div>
                  <div><dt>Claims to verify</dt><dd>Flag unsupported claims for agency review. Never fill gaps with invented testimonials, results or credentials.</dd></div>
                  <div><dt>Publishing owner</dt><dd>Agency or client, unless implementation is explicitly included in the scope.</dd></div>
                  <div><dt>Acceptance</dt><dd>The agreed deliverable and revisions—not an external engine’s decision to cite it.</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="sample-measurement" className="q-section">
        <div className="q-container pt-editorial-grid">
          <header className="pt-section-intro">
            <p className="q-eyebrow">02 / Evidence log</p>
            <h2 id="sample-measurement" className="q-section-heading">An empty log.<br />An explicit method.</h2>
            <p>Field descriptions, not observed results. Agree the prompts, engines, run count and reporting cadence before checks begin.</p>
            <p>Keep evidence separate from interpretation. Preserve hits and misses, and note changing conditions when comparing snapshots.</p>
            <a href="/sample-baseline.csv" download className="q-button-secondary pt-download">Download empty CSV <span aria-hidden="true">↓</span></a>
            <p className="pt-note pt-download-note">Column headers only. No sample observations.</p>
          </header>
          <div>
            <table className="pt-evidence-table">
              <caption>Empty observation log / Fields to complete during agreed research</caption>
              <thead><tr><th scope="col">Field group</th><th scope="col">What to record</th></tr></thead>
              <tbody>{measurementFields.map(([field, description]) => (
                <tr key={field}><th scope="row">{field}</th><td>{description}</td></tr>
              ))}</tbody>
            </table>
            <p className="pt-note pt-evidence-limit">AI answers vary. A small set of checks cannot establish universal visibility or prove that a page change caused an outcome.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="sample-handoff" className="q-section q-rule">
        <div className="q-container pt-editorial-grid">
          <header className="pt-section-intro">
            <p className="q-eyebrow">03 / Agency review</p>
            <h2 id="sample-handoff" className="q-section-heading">Your review.<br />Your final word.</h2>
            <p>A checklist of possible handoff components, not a universal package. The scope determines the files, checks, revisions and implementation notes included.</p>
            <p className="pt-note">Your agency controls what reaches the client. No direct client contact without agency consent.</p>
          </header>
          <ul className="pt-review-list">
            <li><span aria-hidden="true">01</span><div><strong>Research can be traced.</strong><p>Agreed brief, research method and retained evidence.</p></div></li>
            <li><span aria-hidden="true">02</span><div><strong>Recommendations have a basis.</strong><p>Priorities with source references and limitations.</p></div></li>
            <li><span aria-hidden="true">03</span><div><strong>Open questions stay visible.</strong><p>Editable drafts with factual questions marked for approval.</p></div></li>
            <li><span aria-hidden="true">04</span><div><strong>Responsibilities are explicit.</strong><p>Implementation ownership and publication status.</p></div></li>
            <li><span aria-hidden="true">05</span><div><strong>The next step is agreed.</strong><p>Review notes, revisions and next actions.</p></div></li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="sample-call" className="q-container q-section q-rule pt-closing">
        <p className="q-eyebrow">From format to scope</p>
        <h2 id="sample-call" className="q-section-heading">Now bring us<br />the real brief.</h2>
        <div className="pt-closing-bottom"><p>We’ll discuss the deliverables, review responsibilities and a private, scope-based partner quote. Your agency keeps the relationship.</p><a href="https://calendly.com/anshnb07/30min" className="q-button">Book a partner call <span aria-hidden="true">↗</span></a></div>
      </section>
    </div>
  );
}
