import React from 'react';
import { Link } from 'react-router-dom';

const questions = [
  ['What is generative engine optimization?', 'Generative engine optimization (GEO) is the work of getting your business recommended when buyers ask ChatGPT for options. It comes down to clear pages on your site, consistent facts about what you do, and credible outside sources ChatGPT can cite.'],
  ['Does GEO replace SEO?', 'No. Good SEO is still the base. GEO looks specifically at what ChatGPT says when someone asks a buying question—whether you’re named, how you’re described, and which pages it pulls from.'],
  ['How do you measure ChatGPT visibility?', 'We agree ten buyer questions and run each one ten times in fresh ChatGPT chats with memory off, then save every answer and source link. A sample isn’t a universal score, and answers vary from run to run, so we show you the raw chats.'],
  ['Can you guarantee mentions or citations?', 'No. We don’t control ChatGPT, so we cannot guarantee rankings, citations, or leads. What we commit to is the agreed work, every raw answer on the record, and a monthly re-run of the exact same questions so you can see what changed.'],
  ['What does an engagement cost?', 'Every engagement is scoped and quoted in writing before work starts, based on your market and the work involved. It’s monthly, with no setup fee, no lock-in, and you can cancel any time.'],
  ['Do you work with other agencies?', 'Yes. Our white-label GEO service lets agencies offer ChatGPT work under their own brand. You keep the client relationship and approve everything before it goes out—we never contact your client without your say-so.'],
];

const FAQSection: React.FC = () => (
  <section id="faq" className="q-section">
    <div className="q-container q-faq-layout">
      <div className="q-faq-intro">
        <span className="q-eyebrow">Before we talk</span>
        <h2 className="q-section-heading">Good questions.<br />Straight answers.</h2>
        <p>More about agency delivery?<br /><Link to="/partners" className="q-text-link">Explore our partner service.</Link></p>
      </div>
      <div className="q-faq">
        {questions.map(([q, a], i) => (
          <details key={q} open={i === 0}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
