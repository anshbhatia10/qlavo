import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import './Commercial.css';

const sections = [
  {
    index: '01',
    title: 'Digital service delivery.',
    body: [
      'Qlavo provides B2B Generative Engine Optimization (GEO) and ChatGPT visibility consulting services. All deliverables — baselines, written pages, outreach work, and monthly reports — are delivered electronically by email and online calls. No physical goods are shipped.',
    ],
  },
  {
    index: '02',
    title: 'Cancellation.',
    body: [
      'Standard monthly engagements have no minimum term and no lock-in. Either party may cancel at any time by emailing ansh@qlavo.co.in before the next billing date, and no further invoice will be issued.',
    ],
  },
  {
    index: '03',
    title: 'Refund policy.',
    body: [
      'Fees paid for a billing period already in progress or for completed, verified deliverables are non-refundable, unless a separate signed written agreement between Qlavo and the client explicitly specifies a performance-based refund condition.',
      'For performance-based agreements, no invoice is raised and no fee is owed unless the agreed verification criteria are met.',
    ],
  },
  {
    index: '04',
    title: 'Approved refund timeline.',
    body: [
      'If a refund is approved (for example, in the case of a duplicate payment or an agreed contractual refund), it is initiated back to the original payment method within 5 to 7 business days.',
    ],
  },
  {
    index: '05',
    title: 'Billing & disputes.',
    body: [
      'If you believe you were billed in error or have a question about an invoice, email ansh@qlavo.co.in with your invoice number and we will resolve it directly.',
    ],
  },
];

export default function RefundPolicy() {
  return (
    <div className="cm-page">
      <SEOMeta
        title="Refund & Cancellation Policy | Qlavo"
        description="Qlavo's cancellation, digital service delivery, and refund policy for B2B GEO engagements."
        path="/refund-policy"
      />
      <section className="q-container cm-hero">
        <p className="q-eyebrow">Refund &amp; cancellation policy</p>
        <h1 className="q-title">Cancel any time.<br /><span className="cm-muted">Clear billing rules.</span></h1>
        <div className="cm-hero-bottom">
          <p className="q-lede">How cancellations, digital service delivery, and refunds work across Qlavo engagements.</p>
        </div>
      </section>

      <section className="q-container q-section q-rule" aria-labelledby="refund-heading">
        <div className="cm-section-intro">
          <p className="q-eyebrow">Policy</p>
          <h2 className="q-section-heading" id="refund-heading">Five points.</h2>
          <p className="cm-muted">Last updated 22 November 2026. See also our <Link className="q-text-link" to="/terms">Terms of engagement</Link>.</p>
        </div>
        <div className="cm-terms">
          {sections.map(s => (
            <article className="cm-term" key={s.index}>
              <span className="q-kicker">{s.index}</span>
              <div>
                <h3>{s.title}</h3>
                {s.body.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </article>
          ))}
        </div>
        <p className="cm-note cm-plan-note">
          Billing enquiries: <a className="q-text-link" href="mailto:ansh@qlavo.co.in">ansh@qlavo.co.in</a> · Qlavo, Ground Floor, 15, Poorvi Marg, Vasant Vihar, New Delhi 110057, India.
        </p>
      </section>
    </div>
  );
}
