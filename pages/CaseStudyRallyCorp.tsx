import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEOMeta from '../components/SEOMeta';
import { RALLY_CORP_REVIEW as R } from '../data/clientProof';
import './Commercial.css';
import './CaseStudy.css';

const QUESTIONS: [string, string][] = [
  ['best nonprofit texting software', 'Core SMS'],
  ['best text messaging service for nonprofits', 'Core SMS'],
  ['best mass texting service for nonprofits', 'Mass SMS'],
  ['best SMS platform for nonprofits', 'Platform'],
  ['best text-to-give platform for nonprofits', 'Fundraising'],
];

const CHECKS = [
  { date: '16 Nov', label: 'Pre-index', where: 'US', p1: '2/10', p2: '0/10', p3: '0/10', p4: '0/10', p5: '0/10', total: '2/50' },
  { date: '20 Nov', label: 'Post-index', where: 'US', p1: '9/10', p2: '7/10', p3: '9/10', p4: '6/10', p5: '0/10', total: '31/50' },
];

const WORK = [
  ['Locked five buyer questions first', 'Five exact nonprofit buyer questions agreed in writing before work began, each run ten times in fresh US ChatGPT Temporary Chats with memory and personalisation off.'],
  ['Published a 2026 comparison guide & pricing refresh', 'Replaced an outdated 2025 guide with a factual 11-platform 2026 comparison at /blog/best-nonprofit-texting-software-2026 (with a clean 301 redirect) and updated the /pricing page title to match the pricing queries ChatGPT actually runs.'],
  ['Accelerated re-indexing', 'Added an IndexNow key file, submitted updated URLs directly through Bing Webmaster Tools, and wired internal links from high-authority pages so ChatGPT’s search index picked up the new pages within seven days.'],
  ['Fixed third-party directory & roundup gaps', 'Corrected outdated listings and pricing across third-party comparison directories that ChatGPT reads (including iTechGuides, iTechFAQs, TechYorker and peer sites), with zero paid placements.'],
];

export default function CaseStudyRallyCorp() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rally Corp: from 2 of 50 to 31 of 50 ChatGPT recommendations in five weeks',
    datePublished: '2026-11-24',
    author: { '@type': 'Organization', name: 'Qlavo', url: 'https://qlavo.in' },
    publisher: { '@type': 'Organization', name: 'Qlavo', url: 'https://qlavo.in' },
    about: { '@type': 'Organization', name: 'Rally Corp', url: 'https://www.rallycorp.com' },
    mainEntityOfPage: 'https://qlavo.in/case-studies/rally-corp',
  };
  return (
    <div className="cm-page cs-page">
      <SEOMeta
        title="Case Study: Rally Corp on ChatGPT | Qlavo"
        description="How Rally Corp jumped from 2 of 50 to 31 of 50 ChatGPT recommendations and won 4 of 5 locked nonprofit texting buyer questions in a 45-day GEO pilot."
        path="/case-studies/rally-corp"
      />
      <Helmet><script type="application/ld+json">{JSON.stringify(jsonLd)}</script></Helmet>

      <section className="q-container cm-hero cs-hero">
        <p className="q-eyebrow">Case study / Rally Corp</p>
        <h1 className="q-title">From 2 of 50 to 31 of 50.<br /><span className="cm-muted">Four of five buyer questions won on ChatGPT.</span></h1>
        <div className="cs-facts">
          <div><span className="q-kicker">Client</span><p>Rally Corp, Inc., mobile messaging &amp; fundraising platform for nonprofits (San Diego, CA).</p></div>
          <div><span className="q-kicker">Engagement</span><p>45-day performance pilot, started 15 October 2026 (verified 20 November 2026). ChatGPT only.</p></div>
          <div><span className="q-kicker">Result</span><p>4 of 5 target questions passed the 6/10 bar (9/10, 7/10, 9/10, 6/10) — twice the 2-of-5 target, with 14 top-3 placements.</p></div>
        </div>
      </section>

      <section className="q-container q-section q-rule cs-section" aria-labelledby="cs-start">
        <div className="cs-grid">
          <h2 className="q-section-heading cs-h2" id="cs-start">The starting point</h2>
          <div className="cs-body">
            <p>Rally Corp had a strong product built specifically for nonprofits, but ChatGPT rarely recommended it. General-purpose SMS tools like SimpleTexting, SlickText, CallHub and Givebutter took nearly every slot.</p>
            <p>We locked five exact buyer questions and tested each one ten times in fresh US Temporary Chats (memory and personalisation off). Before the new pages entered ChatGPT’s search index, Rally Corp appeared in only 2 of 50 answers and won 0 of 5 questions.</p>
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
            <p>Each figure is how many of ten fresh US ChatGPT Temporary Chats recommended Rally Corp (target: at least 6 of 10 on at least 2 of 5 questions).</p>
            <div className="cs-table-wrap">
              <table className="cs-table">
                <thead>
                  <tr>
                    <th scope="col">Check</th>
                    <th scope="col">P1 Software</th>
                    <th scope="col">P2 Service</th>
                    <th scope="col">P3 Mass SMS</th>
                    <th scope="col">P4 Platform</th>
                    <th scope="col">P5 Text-to-give</th>
                    <th scope="col">All 50</th>
                  </tr>
                </thead>
                <tbody>
                  {CHECKS.map(c => (
                    <tr key={c.date}>
                      <th scope="row">{c.label}<span>{c.date} · {c.where}</span></th>
                      <td>{c.p1}</td>
                      <td>{c.p2}</td>
                      <td>{c.p3}</td>
                      <td>{c.p4}</td>
                      <td>{c.p5}</td>
                      <td>{c.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="cs-points">
              <li>Seven days after the new comparison guide and pricing update went live (13 Nov → 20 Nov), Rally Corp jumped from 2/50 to 31/50 recommendations and 14 top-3 placements (including #1 picks on P1).</li>
              <li>A second raw 50-run verification screen recording sent to the client the same day recorded 28/50 mentions — confirming consistent wins across normal ChatGPT variance.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="q-container q-section q-rule cs-section" aria-labelledby="cs-limits">
        <div className="cs-grid">
          <h2 className="q-section-heading cs-h2" id="cs-limits">What didn't move</h2>
          <div className="cs-body">
            <p>The fifth question — “best text-to-give platform for nonprofits” — stayed at 0 of 10.</p>
            <p>Unlike general nonprofit texting queries, text-to-give answers pull heavily from pure fundraising software roundups dominated by Givebutter, Give Lively and Donorbox. Winning that question requires dedicated text-to-give comparison authority and placements on fundraising-focused third-party sites.</p>
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
            {R.summary && <p><em>“{R.summary}”</em> — {R.fullBody}</p>}
            <dl className="cs-scores">{R.scores.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}/10</dd></div>)}</dl>
            <p className="cm-note">Submitted through our review form on {R.dateLabel}, after verification was delivered. Quoted word for word, with his permission to name Rally Corp.</p>
          </div>
        </div>
      </section>

      <section className="q-container q-section q-rule cs-section cs-cta">
        <div className="cs-grid">
          <h2 className="q-section-heading cs-h2">Want the same check for your questions?</h2>
          <div className="cs-body">
            <p className="cm-muted">We run your ten buyer questions before we invoice, and tell you if fewer than four look winnable.</p>
            <p><Link className="q-button" to="/contact">Talk to us</Link> <a className="q-text-link cs-mail" href="mailto:ansh@qlavo.co.in?subject=GEO%20enquiry">ansh@qlavo.co.in</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
