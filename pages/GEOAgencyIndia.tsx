import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import './Commercial.css';

const faqs = [
  { q: 'What is a GEO agency and why does it matter in Delhi/India?', a: 'A GEO (Generative Engine Optimization) agency works on how a business is represented in AI-generated answers. Qlavo reviews sampled answers, content, technical accessibility, and business information to identify practical improvements for Indian and international buyer queries.' },
  { q: 'What does Qlavo focus on?', a: 'Qlavo is a GEO agency focused on baseline audits, implementation, and ongoing support. The work can include entity consistency, structured data, content improvements, citation opportunities, and prompt-based measurement. Specific deliverables are agreed in the scope.' },
  { q: 'How long does it take to see results from GEO in India?', a: 'There is no universal timeline. Responses vary by prompt, platform, sources, and user context. We agree milestones for our deliverables but do not guarantee rankings, AI recommendations, citation counts, or a date for visibility improvements.' },
  { q: 'Can Indian and international businesses hire Qlavo?', a: 'Yes. Qlavo is headquartered in New Delhi and offers remote B2B engagements for India, the US, UK, EU, and Gulf. Those are target markets, not additional offices. We agree the markets and language requirements before work starts.' },
  { q: 'What platforms do you optimize for?', a: 'The scope can cover ChatGPT, Gemini, Perplexity, Google AI Overviews, Claude, or other relevant assistants. Platform selection depends on your buyers and what can be tested reliably. A sample of answers is not a complete measure of a platform or its users.' },
  { q: 'How much do GEO services cost in India?', a: 'We provide a scope-based quote for a baseline audit, implementation, or ongoing support. Fees depend on brands, markets, prompts, platforms, pages, and reporting needs. White-label agency delivery is a separate partner service, not the default price for direct engagements.' },
];
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };

export default function GEOAgencyIndia() {
  return <div className="cm-page">
    <SEOMeta title="GEO Agency India, Delhi — Generative Engine Optimization | Qlavo" description="Qlavo is a Generative Engine Optimization (GEO) agency in New Delhi offering scoped AI visibility audits, implementation, and ongoing support for B2B businesses." path="/geo-agency-delhi-india" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <section className="q-container cm-hero">
      <p className="q-eyebrow">Based in New Delhi / Working worldwide</p>
      <h1 className="q-title">GEO Agency<br /><span className="cm-muted">Delhi, India.</span></h1>
      <div className="cm-hero-bottom"><p className="q-lede">Your buyers may be nearby or across borders. We investigate how AI answers represent your business, then scope the content, entity and technical work around the market you actually serve.</p><Link className="q-button" to="/contact">Discuss your market <span aria-hidden="true">↗</span></Link></div>
    </section>
    <section className="q-container q-section q-rule cm-split">
      <div><p className="q-eyebrow">Location is context</p><h2 className="q-section-heading">One headquarters.<br />A specific market brief.</h2><p className="cm-location-note cm-muted">Qlavo is headquartered in New Delhi, India. India, the US, UK, EU and Gulf are target markets, not additional offices. Engagements are delivered remotely; we do not have a Dubai office.</p></div>
      <dl className="cm-scope-inputs"><div><dt>Buyer & market</dt><dd>Define the service, customer and geography before choosing prompts. A Delhi service query and an international vendor shortlist need different evidence.</dd></div><div><dt>Language</dt><dd>Agree the language requirements, review responsibilities and available expertise. An English-language check does not establish visibility in Hindi or any other language.</dd></div><div><dt>Platform & context</dt><dd>Select relevant platforms such as ChatGPT, Gemini or Perplexity. Record the date, prompt and available location or session context; disclose conditions we cannot control.</dd></div></dl>
    </section>
    <section className="q-container q-section q-rule cm-split">
      <div><p className="q-eyebrow">The work, in order</p><h2 className="q-section-heading">Start with evidence.<br />Act on the gaps.</h2><p className="cm-muted">GEO complements SEO. Accessible pages and reliable business information matter to both; sampled AI answers are a separate observation, not proof of a ranking or a sale.</p></div>
      <ol className="cm-editorial-list"><li><span className="q-kicker">01 / Baseline audit</span><h3>See the answer in context.</h3><p>Review agreed buyer questions, record responses and available source links, and include absent or inaccurate brand mentions. Deliver a prioritized set of findings with the sample limits attached.</p></li><li><span className="q-kicker">02 / Implementation</span><h3>Make the information useful.</h3><p>Improve agreed service pages, entity consistency and crawl accessibility. Use structured data only where it accurately describes the business and visible content. Third-party citation opportunities are not guaranteed placements.</p></li><li><span className="q-kicker">03 / Ongoing support</span><h3>Repeat. Compare. Explain.</h3><p>Revisit the agreed sample on a defined cadence. Report changes alongside platform variability and the implementation log, without treating correlation as proof of impact.</p></li></ol>
    </section>
    <section className="q-container q-section q-rule cm-split"><div><p className="q-eyebrow">Practical questions</p><h2 className="q-section-heading">Before you brief us.</h2></div><div className="cm-faq">{faqs.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <section className="q-container q-section q-rule cm-endnote"><p className="q-eyebrow">A scope-based quote</p><h2 className="q-section-heading">Bring your website.<br />Name your market.</h2><p>We agree deliverables, responsibilities, fees and timing before work starts. We do not guarantee AI recommendations or a date for visibility gains.</p><div className="cm-actions"><Link className="q-button" to="/contact">Scope an engagement <span aria-hidden="true">↗</span></Link><Link className="q-text-link" to="/pricing">How pricing works</Link><Link className="q-text-link" to="/partners">White-label work for agencies</Link></div></section>
  </div>;
}
