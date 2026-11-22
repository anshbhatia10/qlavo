import React from 'react';
import SEOMeta from '../components/SEOMeta';
import './Commercial.css';

const sections = [
  {
    index: '01',
    title: 'Who we are.',
    body: [
      'Qlavo is an independent Generative Engine Optimization (GEO) agency operated by Ansh Bhatia (Proprietor) from Ground Floor, 15, Poorvi Marg, Vasant Vihar, New Delhi 110057, India.',
      'This policy explains what information we collect through qlavo.in and during client engagements, how we use it, and how you can ask us to update or delete it.',
    ],
  },
  {
    index: '02',
    title: 'Information we collect.',
    body: [
      'When you email us, book a call, submit a client review, or become a client, we collect only the details you share with us: your name, business email, company name, website URL, billing details, and project communications.',
      'We do not run third-party advertising trackers or sell personal data.',
    ],
  },
  {
    index: '03',
    title: 'How we use it.',
    body: [
      'We use your information to reply to enquiries, schedule discovery calls, deliver agreed ChatGPT visibility work, issue invoices, and maintain legally required accounting and tax records.',
      'Client reviews submitted through qlavo.in/review are published only in the exact manner you select on the form.',
    ],
  },
  {
    index: '04',
    title: 'Service providers.',
    body: [
      'We use reputable third-party providers to operate our business: Vercel (website hosting), Google Workspace (email), Calendly (call scheduling), and regulated payment processors (such as Razorpay and Skydo) to process invoices. Payment card and bank details are handled directly by those processors and are never stored on our servers.',
    ],
  },
  {
    index: '05',
    title: 'Retention & your rights.',
    body: [
      'We keep project and billing records for as long as needed to deliver services and comply with Indian tax and accounting laws. You may request access to, correction of, or deletion of your personal information at any time by emailing ansh@qlavo.co.in.',
    ],
  },
];

export default function Privacy() {
  return (
    <div className="cm-page">
      <SEOMeta
        title="Privacy Policy | Qlavo"
        description="How Qlavo collects, uses, and protects information shared through qlavo.in and client engagements."
        path="/privacy"
      />
      <section className="q-container cm-hero">
        <p className="q-eyebrow">Privacy policy</p>
        <h1 className="q-title">Plain privacy.<br /><span className="cm-muted">No trackers, no resale.</span></h1>
        <div className="cm-hero-bottom">
          <p className="q-lede">We collect only what you send us to talk, work together, or process an invoice. Nothing is sold or shared with ad networks.</p>
        </div>
      </section>

      <section className="q-container q-section q-rule" aria-labelledby="privacy-heading">
        <div className="cm-section-intro">
          <p className="q-eyebrow">Policy</p>
          <h2 className="q-section-heading" id="privacy-heading">Five points.</h2>
          <p className="cm-muted">Last updated 22 November 2026.</p>
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
          Privacy enquiries: <a className="q-text-link" href="mailto:ansh@qlavo.co.in">ansh@qlavo.co.in</a> · Qlavo, Ground Floor, 15, Poorvi Marg, Vasant Vihar, New Delhi 110057, India.
        </p>
      </section>
    </div>
  );
}
