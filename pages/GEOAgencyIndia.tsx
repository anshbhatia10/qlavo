import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import { BookCallButton, EnquireButton } from '../components/ContactCta';
import './Commercial.css';

const faqs = [
  { q: 'Which agency in India can get my business recommended by ChatGPT?', a: 'Qlavo is a GEO agency in New Delhi that works on exactly this: we test the questions your buyers ask ChatGPT, find the pages those answers rely on, and improve your presence on them. No agency can guarantee a ChatGPT recommendation. We also publish a plain comparison of other GEO agencies in India.' },
  { q: 'What is a GEO agency and why does it matter in Delhi/India?', a: 'A GEO (Generative Engine Optimization) agency works on how a business shows up in ChatGPT answers. Qlavo reviews sampled ChatGPT responses, your site’s pages, technical indexing, and business facts to make practical improvements for Indian and international buyers.' },
  { q: 'What does Qlavo focus on?', a: 'Qlavo is a GEO agency focused on baseline audits, implementation, and ongoing support. The work covers consistent company facts, Bing indexing, comparison and service pages, outside roundup pitches, and monthly prompt-based checks.' },
  { q: 'How long does it take to see results from GEO in India?', a: 'There is no fixed timeline. ChatGPT answers vary by question, sources, and context. We agree clear milestones for our deliverables, but we do not guarantee rankings, ChatGPT recommendations, citation counts, or a date for visibility gains.' },
  { q: 'Can Indian and international businesses hire Qlavo?', a: 'Yes. Qlavo is headquartered in New Delhi and offers remote B2B engagements for India, the US, UK, EU, and Gulf. Those are target markets, not additional offices. We agree the markets and language requirements before work starts.' },
  { q: 'Which assistant do you work on?', a: 'ChatGPT. It is the only engine we sell at the moment; we do not currently offer work on Gemini, Perplexity, Google AI Overviews, or Claude. A sample of answers is not a complete measure of an engine or its users.' },
  { q: 'How much do GEO services cost in India?', a: 'Every engagement is scoped and quoted in writing before work starts, monthly, cancel any time. It covers the agreed buyer questions, a recorded baseline, the pages we write and place, and repeat checks. White-label agency delivery is a separate partner service with its own private quote.' },
];
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };

export default function GEOAgencyIndia() {
  return (
    <div className="cm-page">
      <SEOMeta
        title="GEO Agency India, Delhi — Generative Engine Optimization | Qlavo"
        description="Qlavo is a Generative Engine Optimization (GEO) agency in New Delhi offering scoped ChatGPT visibility audits, writing, and ongoing support for B2B businesses."
        path="/geo-agency-delhi-india"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="q-container cm-hero">
        <p className="q-eyebrow">Based in New Delhi / Working worldwide</p>
        <h1 className="q-title">GEO Agency<br /><span className="cm-muted">Delhi, India.</span></h1>
        <div className="cm-hero-bottom">
          <p className="q-lede">Whether your buyers are in India or abroad, we check what ChatGPT says about your space and ship the pages, facts, and outreach needed to compete.</p>
          <div className="cm-actions"><EnquireButton label="Discuss your market" size={17} /><BookCallButton size={17} /></div>
        </div>
      </section>
      <section className="q-container q-section q-rule cm-split">
        <div>
          <p className="q-eyebrow">Location is context</p>
          <h2 className="q-section-heading">One headquarters.<br />A clear market brief.</h2>
          <p className="cm-location-note cm-muted">Qlavo is headquartered in New Delhi, India. India, the US, UK, EU, and Gulf are target markets, not additional offices. All work is delivered remotely; we do not have a Dubai office.</p>
        </div>
        <dl className="cm-scope-inputs">
          <div><dt>Buyer &amp; market</dt><dd>We define the service, customer, and geography before picking questions. A Delhi buyer and a US software buyer ask very different things.</dd></div>
          <div><dt>Language</dt><dd>We agree the language requirements up front. An English check does not tell you how ChatGPT answers in Hindi or any other language.</dd></div>
          <div><dt>Conditions</dt><dd>We record the date, exact prompt, and session setup, and note any conditions we can’t control.</dd></div>
        </dl>
      </section>
      <section className="q-container q-section q-rule cm-split">
        <div>
          <p className="q-eyebrow">The work, in order</p>
          <h2 className="q-section-heading">Start with evidence.<br />Fix the gaps.</h2>
          <p className="cm-muted">GEO sits alongside SEO. Clean pages and accurate business facts help both, while sampled ChatGPT answers are tracked on their own terms.</p>
        </div>
        <ol className="cm-editorial-list">
          <li><span className="q-kicker">01 / Baseline audit</span><h3>See the answers as they are.</h3><p>Test agreed buyer questions in ChatGPT, save the responses and cited links, and note where your brand is missing or misdescribed.</p></li>
          <li><span className="q-kicker">02 / Implementation</span><h3>Ship useful pages and facts.</h3><p>Update key service and comparison pages, align your company details, get indexed on Bing, and pitch outside roundups.</p></li>
          <li><span className="q-kicker">03 / Ongoing support</span><h3>Re-run. Compare. Adjust.</h3><p>Run the same questions again every month and share the raw answers alongside what we shipped.</p></li>
        </ol>
      </section>
      <section className="q-container q-section q-rule cm-split">
        <div><p className="q-eyebrow">Practical questions</p><h2 className="q-section-heading">Before you brief us.</h2></div>
        <div className="cm-faq">{faqs.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </section>
      <section className="q-container q-section q-rule cm-endnote">
        <p className="q-eyebrow">Fixed plans / Agreed in writing</p>
        <h2 className="q-section-heading">Bring your website.<br />Name your market.</h2>
        <p>We agree deliverables, responsibilities, fees, and timing before work starts. We do not guarantee ChatGPT recommendations or a date for visibility gains.</p>
        <div className="cm-actions">
          <EnquireButton label="Scope an engagement" size={17} />
          <BookCallButton size={17} />
          <Link className="q-text-link" to="/best-geo-agencies-india">GEO agencies in India, compared</Link>
          <Link className="q-text-link" to="/partners">White-label work for agencies</Link>
        </div>
      </section>
    </div>
  );
}
