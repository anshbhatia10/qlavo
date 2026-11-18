import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import { BookCallButton, EnquireButton } from '../components/ContactCta';
import './Commercial.css';

const criteria = [
  { title: 'A defined question set.', ask: 'Which buyers, markets, and prompts will you test?', answer: 'A real sample with agreed questions and repeatable wording—not one lucky screenshot.' },
  { title: 'Evidence you can inspect.', ask: 'Can I see what your conclusions are based on?', answer: 'Saved ChatGPT answers, dates, cited links, and the checks where your brand didn’t appear.' },
  { title: 'A practical worklist.', ask: 'What changes will you actually ship?', answer: 'Named pages, cleaner business facts, Bing indexing, and outside roundups—with clear owners and approvals.' },
  { title: 'Honest measurement.', ask: 'How will you report progress without spin?', answer: 'Re-run the same questions each month, show the raw chats, and never pretend a deliverable date guarantees a recommendation.' },
];

export default function HireGEOAgency() {
  return (
    <div className="cm-page">
      <SEOMeta
        title="Hire a GEO Agency — Who to Hire to Get Cited on ChatGPT | Qlavo"
        description="Hire Qlavo, a worldwide B2B GEO agency headquartered in New Delhi, for scoped ChatGPT visibility audits, writing, and ongoing support."
        path="/hire-geo-agency"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', name: 'Hire a GEO Agency — Who to Hire to Get Cited on ChatGPT', url: 'https://qlavo.in/hire-geo-agency', description: 'Qlavo is a worldwide B2B GEO agency headquartered in New Delhi, offering scoped audits, implementation, and ongoing support.', isPartOf: { '@type': 'WebSite', name: 'Qlavo', url: 'https://qlavo.in' }, about: { '@id': 'https://qlavo.in#organization' } }) }} />
      <section className="q-container cm-hero">
        <p className="q-eyebrow">Hire a GEO agency / A buyer’s guide</p>
        <h1 className="q-title">Hire for the work.<br /><span className="cm-muted">Ask for the evidence.</span></h1>
        <div className="cm-hero-bottom">
          <p className="q-lede">If your brief is “help us show up when buyers ask ChatGPT,” look past a renamed content calendar. Here is what to ask any GEO agency—including us.</p>
          <div className="cm-actions"><EnquireButton label="Discuss your brief" size={17} /><BookCallButton size={17} /></div>
        </div>
      </section>
      <section className="q-container q-section q-rule" aria-labelledby="criteria-heading">
        <div className="cm-section-intro">
          <p className="q-eyebrow">Your selection checklist</p>
          <h2 className="q-section-heading" id="criteria-heading">Four things worth asking.</h2>
        </div>
        <ol className="cm-selection-list">
          {criteria.map((item, index) => (
            <li key={item.title}>
              <span className="cm-row-index">0{index + 1}</span>
              <div><h3>{item.title}</h3><p className="cm-selection-question">{item.ask}</p></div>
              <p className="cm-muted">{item.answer}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="q-container q-section q-rule cm-split">
        <div><p className="q-eyebrow">SEO &amp; GEO</p><h2 className="q-section-heading">Shared foundations.<br />A different lens.</h2></div>
        <div className="cm-prose">
          <p>SEO focuses on ranking pages in Google. GEO looks at what ChatGPT says when someone asks a buying question, and which pages it relies on to answer.</p>
          <p>They overlap. Clear pages, real proof, and consistent company facts help both—though neither a schema tag nor a blog post buys a guaranteed spot in ChatGPT.</p>
          <Link className="q-text-link" to="/ai-visibility">See how we approach ChatGPT visibility</Link>
        </div>
      </section>
      <section className="q-container q-section q-rule cm-split">
        <div>
          <p className="q-eyebrow">Working with Qlavo</p>
          <h2 className="q-section-heading">A clear starting point.<br />No empty promises.</h2>
          <p className="cm-muted">Founded in 2025 by Ansh Bhatia. Headquartered in New Delhi. Remote B2B engagements for India, the US, UK, EU, and Gulf.</p>
        </div>
        <div>
          <dl className="cm-scope-inputs">
            <div><dt>Baseline audit</dt><dd>Run the agreed questions and pinpoint what’s missing.</dd></div>
            <div><dt>Implementation</dt><dd>Ship the agreed pages, fact clean-up, indexing, and outreach.</dd></div>
            <div><dt>Ongoing support</dt><dd>Re-run the questions every month and adjust around what moves.</dd></div>
          </dl>
          <p className="cm-note">One monthly plan, scoped and agreed in writing, cancel any time. Ten buyer questions agreed in writing and re-run every month. The fee is quoted and the scope agreed before work starts. We do not guarantee rankings or citations.</p>
          <Link className="q-text-link cm-founder-link" to="/terms">Exact terms</Link>
        </div>
      </section>
      <section className="q-container q-section q-rule cm-split">
        <div><p className="q-eyebrow">Working across markets</p><h2 className="q-section-heading">Headquarters is a fact.<br />Not a limit.</h2></div>
        <div className="cm-faq">
          <details><summary>Can Qlavo work with a US or UK business?</summary><p>Yes. We work remotely with B2B companies across India, the US, UK, EU, and Gulf. We agree markets, language, and responsibilities before work starts.</p></details>
          <details><summary>Do you have a US or Dubai office?</summary><p>No. Our headquarters is New Delhi, India. Serving a market is not the same as having an office there.</p></details>
          <details><summary>Can you work under our agency’s brand?</summary><p>Yes, through our separate <Link className="q-text-link" to="/partners">white-label partner service</Link>. Direct client work and agency delivery are scoped separately.</p></details>
        </div>
      </section>
      <section className="q-container q-section q-rule cm-endnote">
        <p className="q-eyebrow">Make the brief concrete</p>
        <h2 className="q-section-heading">What do your buyers ask?</h2>
        <p>Bring your website, your market, and a question you want tested. We’ll tell you whether a scoped engagement makes sense.</p>
        <div className="cm-actions"><EnquireButton size={17} /><BookCallButton size={17} /></div>
      </section>
    </div>
  );
}
