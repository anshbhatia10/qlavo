import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import { ScopeCTA } from '../components/PilotOffer';

export default function SampleDeliverable() {
  return <div className="pilot-site"><SEOMeta title="Inspect a white-label deliverable — Qlavo work example" description="Inspect Qlavo's own website copy revision and download an empty AI-search measurement template. Self-initiated work, not a client case study or claimed visibility result." path="/sample-deliverable" />
    <div className="pilot-container">
      <section className="pilot-section">
        <p className="pilot-eyebrow">See the work before buying it</p>
        <h1>A deliverable you can inspect.<br /><em>Not a results promise.</em></h1>
        <p className="pilot-lede">This is a Qlavo website example: a self-initiated revision of our own offer. It is not a client case study and does not demonstrate improved AI recommendations, citations or revenue.</p>
      </section>
      <section className="pilot-section">
        <p className="pilot-eyebrow">01 / Page improvement</p><h2>Replace an outcome promise with an offer a buyer can evaluate.</h2>
        <div className="pilot-two-col">
          <div><h3>Before</h3><blockquote>“We make sure AI recommends you first.”</blockquote><p>Our previous homepage line implied control over an external recommendation system. It did not tell an agency what it would receive or who would publish the work.</p></div>
          <div><h3>After</h3><blockquote>“A focused piece of work, not an open-ended promise to make AI recommend a brand.”</blockquote><p>Our current scope specifies one brand, site, market and language; recorded checks; one publish-ready page improvement; an editable handoff; and agency-led publication.</p><Link className="pilot-text-link" to="/pricing">Inspect the full published scope →</Link></div>
        </div>
        <h3>Why this changed</h3><p>The revised wording separates delivery from outcomes. A buyer can check whether the work was delivered without treating a fluctuating AI response as a contractual acceptance test.</p>
      </section>
      <section className="pilot-section">
        <p className="pilot-eyebrow">02 / Measurement template</p><h2>Keep observations separate from interpretation.</h2>
        <p>This is a Measurement template, not observed results. Its empty fields are intentional. In a paid project we record each agreed question, engine and run, the date, full response, brand mentions, recommendations, citations and source URLs. We retain hits and misses.</p>
        <p>Five questions × two engines × two fresh runs gives 20 observations per snapshot. We repeat the same conditions at handoff, noting publication and indexing status. Small samples and changing engines limit what a comparison can establish.</p>
        <a className="pilot-button" href="/sample-baseline.csv" download>Download empty measurement CSV ↓</a>
      </section>
      <section className="pilot-section">
        <p className="pilot-eyebrow">03 / Handoff checklist</p><h2>Ready for your team to review.</h2>
        <ul><li>Agreed buyer questions and run records, including cited source URLs.</li><li>Prioritized issue/source memo with evidence and limitations.</li><li>One fact-checked page revision and publication instructions.</li><li>Editable report and repeat checks, with publication status noted.</li><li>One consolidated revision round against the agreed scope.</li></ul>
        <p>We do not invent customer stories, buy citations, or contact your client without consent. You approve and publish the work.</p><ScopeCTA />
      </section>
    </div>
  </div>;
}
