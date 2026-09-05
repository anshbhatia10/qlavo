import React from 'react';
import { Link } from 'react-router-dom';

export const SCOPE_URL = 'https://calendly.com/anshnb07/30min';
export const PILOT_DESCRIPTION = 'A $750 USD one-time White-label AI-search pilot for one client brand, site, market and language. Bounded research, one publish-ready page improvement and an editable agency handoff.';

export function ScopeCTA({ secondary = true }: { secondary?: boolean }) {
  return <div className="pilot-actions"><a className="pilot-button" href={SCOPE_URL}>Scope a client project <span aria-hidden="true">↗</span></a>{secondary && <a className="pilot-text-link" href="mailto:info@qlavo.in">Email info@qlavo.in</a>}</div>;
}

export function PilotSummary() {
  return <aside className="pilot-summary" aria-label="Pilot scope at a glance">
    <p className="pilot-eyebrow">A small, defined first project</p>
    <h2>White-label AI-search pilot</h2>
    <p className="pilot-price">$750 USD <span>one-time</span></p>
    <p>For one client brand, one site, one market and one language.</p>
    <dl><div><dt>Delivery</dt><dd>10 business days after required inputs are received. Client delays pause the clock.</dd></div><div><dt>Payment</dt><dd>$375 at start / $375 on acceptance.</dd></div><div><dt>Revision</dt><dd>Includes one revision within the agreed scope.</dd></div></dl>
    <Link className="pilot-text-link" to="/pricing">Read scope &amp; acceptance terms →</Link>
  </aside>;
}

export function PilotDeliverables() {
  return <section className="pilot-section" id="services" aria-labelledby="deliverables-heading"><div className="pilot-section-heading"><p className="pilot-eyebrow">What you can put in front of a client</p><h2 id="deliverables-heading">Research. One page improvement.<br />A handoff you can own.</h2><p>A focused piece of work, not an open-ended promise to make AI recommend a brand.</p></div>
    <ol className="pilot-deliverables">
      <li><span className="pilot-index">01</span><div><h3>A recorded baseline</h3><p>5 agreed buyer questions × 2 engines × 2 fresh runs each: 20 baseline observations. We keep all results, including misses, with question, engine, date, response and cited sources. Engines and question wording are agreed before work starts.</p></div></li>
      <li><span className="pilot-index">02</span><div><h3>A prioritized issue/source memo</h3><p>What the checks show, which claims or sources need attention, and what to tackle first. Observations are separated from interpretation; limited evidence stays limited evidence.</p></div></li>
      <li><span className="pilot-index">03</span><div><h3>One publish-ready buyer/use-case page improvement</h3><p>A revision of one agreed page, grounded in supplied facts. Clear buyer fit, supported service claims and an explicit next step. No invented reviews, numbers or client stories.</p></div></li>
      <li><span className="pilot-index">04</span><div><h3>An implementation handoff &amp; repeat checks</h3><p>An implementation handoff checklist: agency/client publishes, with no unapproved live changes. We repeat the same checks at handoff and provide editable client-ready reporting. If the page is not yet published or indexed, the report says so; a repeat check is not proof of impact.</p></div></li>
    </ol>
  </section>;
}

export function PilotTerms() {
  return <section className="pilot-section pilot-terms" aria-labelledby="terms-heading"><p className="pilot-eyebrow">Boundaries, in plain English</p><h2 id="terms-heading">Buy the work. Not a prediction.</h2><div className="pilot-two-col"><div><h3>When the clock starts</h3><p>10 business days starts after the agreed buyer questions, engine choice, target page, brand/site/market/language, approved facts and sources, and an agency approval contact are supplied. Client delays pause delivery.</p><h3>What acceptance means</h3><p>Acceptance is against the agreed deliverables, not AI results. Review the handoff against the scope and request the included one revision as a consolidated set of changes. The remaining $375 is due on acceptance. Acceptance is not automatic because time has passed.</p></div><div><h3>What stays with your agency</h3><p>You keep the client relationship. Qlavo works behind the scenes, with no direct client contact without agency consent. You review and present the editable reporting under your brand.</p><h3>What is not included</h3><p>Additional pages, brands, markets, languages, ongoing monitoring, link placements and CMS development are outside this pilot. Optional ongoing scope is separately agreed. No auto-renewal or minimum contract beyond this one-time project.</p></div></div><p className="pilot-note">No guaranteed AI recommendations, rankings or leads. No outcome deadlines. The delivery window covers our work, not how or when an engine responds.</p></section>;
}
