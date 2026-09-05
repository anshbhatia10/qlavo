import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import './Editorial.css';

const chapters = [
  ['definition', 'What is GEO?'],
  ['seo-vs-geo', 'SEO vs. GEO'],
  ['pillars', 'The five pillars'],
  ['platforms', 'The platform guide'],
  ['checklist', 'Your audit checklist'],
  ['opportunity', 'Where to start'],
];

const pillars = [
  {
    title: 'Entity Consistency',
    description: 'Make it straightforward to identify your business. Your website, LinkedIn page, Google Business Profile, and relevant directory listings should agree on your name, primary services, location, and official website. Product names and parent-company relationships should be explained rather than left for a reader or retrieval system to infer. Consistency means accurate facts, not identical keyword-heavy copy everywhere.',
    detail: 'Conflicting information is worth fixing, but it does not prove why an AI answer omitted your brand. Keep a record of the discrepancy, its source, and the correction. Use Organization structured data to describe real facts and sameAs links only for profiles that genuinely identify the same organization. A Wikidata entry is not a prerequisite for GEO.',
    action: 'Create a source-of-truth sheet for your business details. Check the profiles your customers actually use, resolve duplicates, and assign an owner for future updates.',
  },
  {
    title: 'High-Authority Content',
    description: 'Publish material that helps a reader make a decision: clear service explanations, named authors with relevant experience, transparent methods, and evidence that supports the claims. Your own website is an important source. Third-party publications can add context and reach, but a platform’s reputation or a third-party domain-authority score is not a known AI recommendation formula.',
    detail: 'Medium, trade publications, and community sites may be useful when they have a relevant audience. Choose the channel for its editorial fit rather than assuming a post there will outperform your website. Distinguish original research from opinion, describe how any data was collected, and link to the underlying source when it can be shared.',
    action: 'Start with one substantive answer to a recurring customer question. Publish it where it belongs, support it with accessible evidence, and adapt it for other channels only when that serves their readers.',
  },
  {
    title: 'Q&A Structured Content',
    description: 'Questions make useful headings when they reflect what buyers genuinely need to know. Give a direct answer, then explain the conditions, limitations, and examples. A clear page structure is helpful to people and makes individual passages easier to interpret. It does not establish that every model favors FAQ pages or that an FAQ will earn a citation.',
    detail: 'Keep important answers in readable HTML rather than only in images or interactive widgets. Use descriptive headings, concise definitions, and links to the fuller explanation. Structured data should match the visible content and follow the relevant eligibility rules; adding FAQ markup alone is not a visibility strategy.',
    action: 'Collect questions from sales and support, group them by intent, and add useful answers to the relevant service or guide page. Test that the text and links are available without client-side interaction.',
  },
  {
    title: 'Citation Networks',
    description: 'A third-party mention and a citation inside an AI answer are different things. A business directory, review, or industry article may provide independent context about your brand; an answer citation is a link a system displays for that particular response. Neither an unlinked mention nor a backlink guarantees a recommendation.',
    detail: 'Prioritize accurate, relevant listings and legitimate editorial coverage. Crunchbase, Clutch, Product Hunt, and Wellfound serve different audiences, so they are not a universal checklist for every business. Avoid mass profile creation, paid praise presented as independent opinion, or community posts that conceal a commercial relationship.',
    action: 'Review the third-party sources buyers already consult in your category. Correct factual errors, ask for honest customer feedback where appropriate, and pursue coverage based on work you can substantiate.',
  },
  {
    title: 'Recency Signals',
    description: 'Keep time-sensitive information current: service availability, team details, prices, product capabilities, and any dated research. Freshness matters differently for different questions. A current product comparison and a durable definition have different maintenance needs; a newly published article is not automatically a better source than an older, well-supported one.',
    detail: 'An assistant’s access to fresh web content depends on the product and mode used. Publishing today does not mean a system will crawl, retrieve, or cite the page tomorrow. Update a visible date only when the content has materially changed, and retain the observation period for any research rather than presenting old results as current.',
    action: 'Maintain a realistic review calendar. Check high-impact pages after business changes, log substantive revisions, and retest your baseline at an agreed interval instead of chasing every isolated answer.',
  },
];

const platforms = [
  {
    name: 'ChatGPT (OpenAI)',
    context: 'Distinguish a response using web search from one without live retrieval. Those are different observation conditions; a brand appearing in one does not establish that it will appear in the other. Record whether search was used and which sources the answer exposes.',
    action: 'Use realistic buyer prompts, save the full answer and linked sources, and record the date and available model or mode information. Do not describe a website change as an update to the model’s training data.',
  },
  {
    name: 'Google Gemini',
    context: 'Treat the Gemini assistant and Google Search AI Overviews as separate surfaces in your reporting. A finding from one is not evidence about the other. Keep the search query, language, location, and any visible source links with each observation.',
    action: 'Check whether an AI Overview was present rather than assuming every query triggers one. Maintain accurate website and Business Profile information where relevant, without treating a profile update or a review count as a guaranteed recommendation lever.',
  },
  {
    name: 'Perplexity',
    context: 'Source-linked answers can be useful for studying which pages support a response. Inspect the cited pages themselves: a link may support a specific factual statement without recommending the company that published it. Results still depend on the prompt and search mode.',
    action: 'Separate brand mentions, linked citations, and explicit recommendations in your notes. Repeat comparable checks over time; there is no fixed publication-to-citation turnaround that should be promised to a client.',
  },
  {
    name: 'Claude (Anthropic)',
    context: 'Record the actual tools and retrieval settings available in the session instead of assuming every Claude answer uses only training data. If web access is unavailable or not used, flag that limit before drawing conclusions about the visibility of a new page.',
    action: 'Capture the answer, its sources if shown, and the conditions of the run. A missing brand is an observation in that test, not proof that the system distrusts the business or requires a particular number of directory listings.',
  },
];

const checklist = [
  'Define your baseline. Include your brand name, service-category questions, and realistic buyer comparisons. Record the exact prompts, platforms, search modes, date, and location where available; save complete answers and source URLs, not just a cropped screenshot.',
  'Standardize business facts. Compare your website, LinkedIn, Google Business Profile, and relevant directories. Fix outdated names, locations, service descriptions, and official links. Explain product and parent-company relationships where the distinction matters.',
  'Review your Google Business Profile if your business is eligible. Use an accurate category, address or service area, opening hours, and service information. Keep it useful for customers rather than treating weekly posting as a prerequisite for AI visibility.',
  'Check relevant directory listings. Consider Crunchbase, Clutch, Product Hunt, or Wellfound only where the platform fits your business. Claim legitimate profiles, remove errors, and avoid creating a volume of low-value listings simply to meet a quota.',
  'Improve customer-question coverage. Add direct, specific answers to your key pages with clear headings and supporting detail. If you use FAQ structured data, ensure it represents visible content and meets the applicable requirements; markup does not guarantee citations.',
  'Publish a useful piece of expert content. Choose your own site or a relevant publication such as Medium based on audience fit. Explain your method, attribute external material, and separate evidence from interpretation. Do not manufacture a study to support a sales message.',
  'Contribute responsibly to communities. Answer relevant questions on Quora, Reddit, or specialist forums only where you have something useful to add. Follow community rules, disclose your affiliation when appropriate, and avoid repetitive promotional answers.',
  'Check the technical foundation. Verify that important pages load, are linked internally, and expose readable content. Review crawler rules deliberately. Add accurate Organization and WebSite structured data where appropriate and validate it against the visible page.',
  'Assign a maintenance owner. Schedule reviews around meaningful changes, not arbitrary publishing quotas. Keep service details and evidence current, retain dated observations, and record what was changed so later tests can be interpreted in context.',
  'Repeat the baseline at a planned interval, such as 30 days. Keep the prompt set and conditions comparable, repeat tests where practical, and report mentions, citations, and recommendations separately. Compare business outcomes too; a changed answer alone does not prove causation.',
];

const GEOResources: React.FC = () => (
  <div className="ed-hub">
    <SEOMeta
      title="GEO Resources — AI Search & Generative Engine Optimization Guides | Qlavo"
      description="Explore Qlavo's GEO resources library. A practical guide to Generative Engine Optimization, SEO comparisons, AI platforms, and a ten-step visibility checklist."
      path="/geo-resources"
    />
    <header className="q-container ed-masthead">
      <div className="ed-topline"><p className="q-eyebrow">Learn / Resource library</p><Link className="q-text-link ed-small-link" to="/blog">Read the journal <span aria-hidden="true">↗</span></Link></div>
      <div className="ed-resource-hero">
        <h1 className="q-title">A practical guide to Generative Engine Optimization.</h1>
        <div className="ed-resource-intro"><p className="q-eyebrow">By Qlavo / Foundations</p><p className="q-lede">Understand AI search. Build a useful baseline. Decide what deserves your attention next.</p></div>
      </div>
      <nav className="ed-section-nav" aria-label="Resource collections">
        <a href="#definition">The field guide <span aria-hidden="true">↓</span></a>
        <Link to="/ai-glossary">AI terminology</Link>
        <Link to="/geo-vs-seo-vs-aeo-differences">SEO, GEO &amp; AEO</Link>
        <Link to="/blog">Journal &amp; perspectives</Link>
      </nav>
    </header>

    <div className="q-container ed-guide-layout">
      <aside className="ed-guide-sidebar">
        <nav aria-label="Guide contents">
          <p className="q-eyebrow">In this guide</p>
          <ol>{chapters.map(([id, label], index) => <li key={id}><a href={`#${id}`}><span className="q-kicker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{label}</a></li>)}</ol>
        </nav>
        <p className="ed-sidebar-note">A working reference, not a promise of placement. Start with the parts relevant to your business.</p>
      </aside>
      <div className="ed-guide-content">
        <section id="definition" className="ed-chapter">
          <p className="q-eyebrow">01 / Definition</p>
          <h2>What is Generative Engine Optimization (GEO)?</h2>
          <p><strong>Generative Engine Optimization (GEO)</strong> is the practice of improving how a business and its content can be found, understood, and represented in AI-generated answers. The work can include clearer website content, technical accessibility, consistent business information, and relevant third-party references.</p>
          <p>Where traditional SEO often measures visibility in search results and the traffic those results send, GEO also examines whether an answer mentions a brand, links to its material, or recommends its services. These are different outcomes and should be measured separately. A citation is not necessarily an endorsement, and a mention may not lead to a visit.</p>
          <p>When a buyer asks an assistant who provides a particular service, the answer may draw on retrieved web pages, other available sources, or the model’s existing knowledge, depending on the product and settings. You can improve the quality and availability of your information; you cannot guarantee that an assistant will choose it. Treat GEO as an extension of sound publishing and measurement, not a way to control a model’s answers.</p>
          <p>New to the terminology? Keep the <Link className="q-text-link" to="/ai-glossary">AI search glossary</Link> alongside this guide.</p>
        </section>

        <section id="seo-vs-geo" className="ed-chapter">
          <p className="q-eyebrow">02 / Comparison</p>
          <h2>SEO vs. GEO: What’s different?</h2>
          <p>The two disciplines overlap. Accessible pages, useful content, and clear business information matter to both. The distinction is most useful when it tells you what to observe, rather than forcing a choice between search traffic and AI visibility.</p>
          <div className="ed-table-wrap" tabIndex={0} role="region" aria-label="SEO and GEO comparison, scroll horizontally on smaller screens">
            <table>
              <caption>Different surfaces. Shared foundations.</caption>
              <thead><tr><th scope="col">Dimension</th><th scope="col">Traditional SEO</th><th scope="col">GEO</th></tr></thead>
              <tbody>
                <tr><th scope="row">Primary surface</th><td>Search results and the pages they link to.</td><td>Generated answers, their mentions, and linked sources.</td></tr>
                <tr><th scope="row">Content work</th><td>Useful, accessible pages that address search intent.</td><td>Clear, supportable answers and accurately described entities.</td></tr>
                <tr><th scope="row">External context</th><td>Relevant links, reputation, and local business information.</td><td>Relevant references and source material a system may retrieve.</td></tr>
                <tr><th scope="row">Measurement</th><td>Impressions, rankings, clicks, and conversions.</td><td>Defined-prompt observations, cited URLs, referral traffic, and business outcomes.</td></tr>
                <tr><th scope="row">Main limitation</th><td>A ranking does not guarantee a customer.</td><td>A citation does not guarantee a recommendation or a customer.</td></tr>
              </tbody>
            </table>
          </div>
          <p>Measure each surface on its own terms. If AI referrals are small but ordinary search brings qualified leads, maintain what works while testing the new channel. For the terminology in more detail, read <Link className="q-text-link" to="/geo-vs-seo-vs-aeo-differences">GEO vs. SEO vs. AEO</Link>.</p>
        </section>

        <section id="pillars" className="ed-chapter">
          <p className="q-eyebrow">03 / How it works</p>
          <h2>The five pillars of GEO</h2>
          <p>Use these as a planning framework, not a published model-ranking formula. The aim is to make your business easier to understand and your claims easier to check before measuring how answers change.</p>
          {pillars.map((pillar, index) => <div className="ed-pillar" key={pillar.title}>
            <h3><span className="q-kicker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{pillar.title}</h3>
            <p>{pillar.description}</p><p>{pillar.detail}</p>
            <p className="ed-action-note"><strong>Put it into practice.</strong> {pillar.action}</p>
          </div>)}
        </section>

        <section id="platforms" className="ed-chapter">
          <p className="q-eyebrow">04 / Platform guide</p>
          <h2>How each AI platform discovers businesses</h2>
          <p>There is no single retrieval process to optimize for across all assistants. Products and settings change, and the same prompt can produce different answers. Use the guide below to define what to record rather than to infer a platform’s hidden ranking rules or promise an update timeline.</p>
          {platforms.map(platform => <div className="ed-platform" key={platform.name}><h3>{platform.name}</h3><p>{platform.context}</p><p className="ed-action-note"><strong>What to check.</strong> {platform.action}</p></div>)}
          <p>Keep the evidence with the conclusion. A report should let someone trace a claim back to the prompt, answer, date, and visible source. See the <Link className="q-text-link" to="/sample-deliverable">illustrative deliverable format</Link> for how evidence and recommended actions can be kept separate.</p>
        </section>

        <section id="checklist" className="ed-chapter">
          <p className="q-eyebrow">05 / Quick-start checklist</p>
          <h2>Your GEO audit in 10 steps</h2>
          <p>A practical starting point for an internal review. This is a checklist you can use, not an audit already performed on your website. Keep a log of owners, evidence, and outstanding questions as you work through it.</p>
          <ol className="ed-checklist">{checklist.map(step => <li key={step}>{step}</li>)}</ol>
          <p>After the review, prioritize by business relevance, confidence in the evidence, and implementation effort. An incorrect service description may deserve attention before a new publishing campaign. Do not treat every missed mention as a technical defect.</p>
        </section>

        <section id="opportunity" className="ed-chapter">
          <p className="q-eyebrow">06 / The opportunity</p>
          <h2>Why acting now matters</h2>
          <p>A baseline gives you something more useful than a prediction: a record of how your business is represented today. If prospective buyers use AI assistants in your category, inaccurate descriptions or missing source material are worth investigating. The scale of that opportunity depends on your audience and should not be assumed from broad adoption figures.</p>
          <p>There is no guaranteed first-mover advantage or permanent place in an answer. Start with a bounded review, correct clear problems, and track the same questions over time. Combine those observations with customer conversations, analytics, and qualified enquiries before deciding whether to expand the work.</p>
          <p>If you need support defining the scope, explore our <Link className="q-text-link" to="/ai-visibility">AI visibility service</Link>. For dated perspectives and longer editorial discussions, browse the <Link className="q-text-link" to="/blog">Qlavo Journal</Link>.</p>
        </section>

        <aside className="ed-archive" aria-labelledby="archive-heading">
          <h2 id="archive-heading">From the resource archive</h2>
          <p>Previously linked materials are retained for reference. Check their methods, dates, and limitations before reusing any figures; inclusion here is not independent validation.</p>
          <ul>
            <li><a className="q-text-link" href="https://huggingface.co/datasets/qlavo/geo-visibility-benchmarks-2026" target="_blank" rel="noopener noreferrer">Qlavo benchmark dataset on Hugging Face <span className="ed-external-note">(opens in a new tab)</span></a></li>
            <li><a className="q-text-link" href="https://doi.org/10.5281/zenodo.18980486" target="_blank" rel="noopener noreferrer">Qlavo whitepaper on Zenodo <span className="ed-external-note">(opens in a new tab)</span></a></li>
          </ul>
        </aside>
      </div>
    </div>

    <section className="q-container q-section q-rule ed-closing" aria-labelledby="resource-next">
      <div><p className="q-eyebrow">A useful next step</p><h2 id="resource-next" className="q-section-heading">Turn questions into a clear scope.</h2></div>
      <div><p className="ed-muted">Discuss your business, the questions you want to investigate, and the evidence a useful review would need. The discovery conversation is free; project work is scoped separately.</p><Link className="q-button" to="/contact">Book a discovery call <span aria-hidden="true">↗</span></Link><Link className="q-text-link ed-follow-link" to="/ai-visibility">Explore AI visibility services</Link></div>
    </section>
  </div>
);

export default GEOResources;
