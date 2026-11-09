import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEOMeta from '../components/SEOMeta';
import { SMARTER_TRACKS_REVIEW as R } from '../data/clientProof';
import './Commercial.css';
import './CaseStudy.css';

const QUESTIONS: [string, string][] = [
  ['What is the best HVAC tool tracking software?', 'HVAC'],
  ['What is the best HVAC tool tracking app?', 'HVAC'],
  ['What is the best tool tracking software for construction?', 'Construction'],
  ['What is the best tool tracking app for construction?', 'Construction'],
  ['What is the best tool tracking system for construction?', 'Construction'],
  ['What is the best construction tool tracking software?', 'Construction'],
  ['What is the best construction tool tracking app?', 'Construction'],
  ['What is the best tool tracking software for contractors?', 'Contractors'],
  ['What is the best tool inventory software for contractors?', 'Contractors'],
  ['What is the best tool checkout system for contractors?', 'Contractors'],
];

const CHECKS = [
  { date: '28 Sep', label: 'Baseline', where: 'India', h1: '0/10', h2: '0/10', other: '0/80', total: '0/100' },
  { date: '22 Oct', label: 'Week 3', where: 'India', h1: '9/10', h2: '9/10', other: '0/80', total: '18/100' },
  { date: '30 Oct', label: 'Week 4', where: 'US', h1: '6/10', h2: '2/10', other: '0/80', total: '8/100' },
  { date: '7 Nov', label: 'Final', where: 'US', h1: '7/10', h2: '7/10', other: '0/80', total: '14/100' },
];

const WORK = [
  ['Measured first', 'Ten buyer questions agreed up front, each asked in ten fresh ChatGPT chats. Every answer, ranking and cited source was recorded, so every later number compares like with like.'],
  ['Rewrote the pages ChatGPT reads', 'Comparison pages for HVAC, construction and contractor tool tracking, written as plain facts: what each tool does, who it suits, prices and where it falls short. The founder published the changes himself.'],
  ['Got the changes indexed', 'Bing Webmaster Tools and IndexNow submissions after each update. ChatGPT search leans on Bing, and the HVAC numbers moved shortly after the pages were re-crawled.'],
  ['Pitched outside publishers', 'Outreach to the review and roundup sites that ChatGPT cites for these questions. No paid placements.'],
];

export default function CaseStudySmarterTracks() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Smarter Tracks: from invisible to #1 on ChatGPT for HVAC tool tracking',
    datePublished: '2026-11-09',
    author: { '@type': 'Organization', name: 'Qlavo', url: 'https://qlavo.in' },
    publisher: { '@type': 'Organization', name: 'Qlavo', url: 'https://qlavo.in' },
    about: { '@type': 'Organization', name: 'Smarter Tracks', url: 'https://www.smartertracks.com' },
    mainEntityOfPage: 'https://qlavo.in/case-studies/smarter-tracks',
  };
  return (
    <div className="cm-page cs-page">
      <SEOMeta
        title="Case Study: Smarter Tracks on ChatGPT | Qlavo"
        description="How Smarter Tracks went from never being named by ChatGPT to its #1 recommendation for HVAC tool tracking in a 45-day GEO engagement, including what didn't move and why."
        path="/case-studies/smarter-tracks"
      />
      <Helmet><script type="application/ld+json">{JSON.stringify(jsonLd)}</script></Helmet>

      <section className="q-container cm-hero cs-hero">
        <p className="q-eyebrow">Case study / Smarter Tracks</p>
        <h1 className="q-title">From invisible to #1.<br /><span className="cm-muted">On ChatGPT, for HVAC tool tracking.</span></h1>
        <div className="cs-facts">
          <div><span className="q-kicker">Client</span><p>Smarter Tracks, tool tracking software for contractors. Founded 2025.</p></div>
          <div><span className="q-kicker">Engagement</span><p>45 days, 29 September to 13 November 2026. ChatGPT only.</p></div>
          <div><span className="q-kicker">Result</span><p>Both HVAC questions went from 0 of 10 answers to 7 of 10, with Smarter Tracks ranked #1.</p></div>
        </div>
      </section>

      <section className="q-container q-section q-rule cs-section" aria-labelledby="cs-start">
        <div className="cs-grid">
          <h2 className="q-section-heading cs-h2" id="cs-start">The starting point</h2>
          <div className="cs-body">
            <p>Smarter Tracks is a young product in a crowded market. Hilti, Milwaukee and a handful of established tool trackers dominate the search results and the review sites.</p>
            <p>We agreed ten questions a contractor might ask ChatGPT, then asked each one in ten fresh chats. Across all 100 answers, ChatGPT never named Smarter Tracks.</p>
            <ul className="cs-questions">{QUESTIONS.map(([q, g]) => <li key={q}><span>{q}</span><em>{g}</em></li>)}</ul>
          </div>
        </div>
      </section>

      <section className="q-container q-section q-rule cs-section" aria-labelledby="cs-work">
        <div className="cs-grid">
          <h2 className="q-section-heading cs-h2" id="cs-work">What we did</h2>
          <ol className="cs-work">{WORK.map(([t, d], i) => <li key={t}><span className="q-kicker">0{i + 1}</span><div><h3>{t}</h3><p className="cm-muted">{d}</p></div></li>)}</ol>
        </div>
      </section>

      <section className="q-container q-section q-rule cs-section" aria-labelledby="cs-results">
        <div className="cs-grid">
          <h2 className="q-section-heading cs-h2" id="cs-results">The results</h2>
          <div className="cs-body">
            <p>Each figure is how many of ten fresh ChatGPT answers put Smarter Tracks in the top three.</p>
            <div className="cs-table-wrap">
              <table className="cs-table">
                <thead><tr><th scope="col">Check</th><th scope="col">HVAC software</th><th scope="col">HVAC app</th><th scope="col">Other 8 questions</th><th scope="col">All 100</th></tr></thead>
                <tbody>{CHECKS.map(c => <tr key={c.date}><th scope="row">{c.label}<span>{c.date} · {c.where}</span></th><td>{c.h1}</td><td>{c.h2}</td><td>{c.other}</td><td>{c.total}</td></tr>)}</tbody>
              </table>
            </div>
            <ul className="cs-points">
              <li>By week three, Smarter Tracks was in the top three in 9 of 10 answers to both HVAC questions.</li>
              <li>In the final check, every time ChatGPT named Smarter Tracks it ranked it first or second, and first in 13 of 14.</li>
              <li>The numbers moved between checks. Week four dipped after a page change, and recovered after the pages were revised and re-indexed.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="q-container q-section q-rule cs-section" aria-labelledby="cs-limits">
        <div className="cs-grid">
          <h2 className="q-section-heading cs-h2" id="cs-limits">What didn't move</h2>
          <div className="cs-body">
            <p>The engagement aimed for seven of the ten questions. We won two, so the full target was not met.</p>
            <p>On the eight broader construction and contractor questions, ChatGPT read Smarter Tracks' own pages in most answers but still recommended the tools that outside roundups and review sites name. On these questions, a vendor's own site is read as background, not as proof that it is the best choice. Moving them takes listings on those roundup sites and real customer reviews, which is months of work, not weeks.</p>
            <p>HVAC moved because few sites cover it, and Smarter Tracks is the only HVAC-specific tool in them.</p>
          </div>
        </div>
      </section>

      <section className="q-container q-section q-rule cs-section" aria-labelledby="cs-review">
        <div className="cs-grid">
          <h2 className="q-section-heading cs-h2" id="cs-review">The client's review</h2>
          <div className="cs-body">
            <figure className="cs-quote">
              <blockquote><p>“{R.quote}”</p></blockquote>
              <figcaption><strong>{R.name}</strong>, {R.role}, {R.company}</figcaption>
            </figure>
            <dl className="cs-scores">{R.scores.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}/10</dd></div>)}</dl>
            <p className="cm-note">Submitted through our review form on {R.dateLabel}, after the final results were shared. Quoted word for word, with his permission to name Smarter Tracks.</p>
          </div>
        </div>
      </section>

      <section className="q-container q-section q-rule cs-section cs-cta">
        <div className="cs-grid">
          <h2 className="q-section-heading cs-h2">Want the same check for your questions?</h2>
          <div className="cs-body">
            <p className="cm-muted">We run your ten buyer questions before we invoice, and tell you if fewer than four look winnable.</p>
            <p><Link className="q-button" to="/pricing">See the plan</Link> <a className="q-text-link cs-mail" href="mailto:ansh@qlavo.co.in?subject=GEO%20enquiry">ansh@qlavo.co.in</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
