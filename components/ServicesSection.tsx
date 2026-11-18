import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const services = [
  { n: '01', title: 'Check where you stand', text: 'We agree ten real buyer questions and ask ChatGPT each one in fresh chats. You see every answer, every competitor named, and every source cited.' },
  { n: '02', title: 'Write the pages ChatGPT reads', text: 'Comparison guides, clear service pages, and straight answers to buyer questions—written in plain facts so both buyers and ChatGPT can trust them.' },
  { n: '03', title: 'Clean up your facts & listings', text: 'Make sure your site, offer details, and outside profiles tell the same story, and get your updated pages indexed where ChatGPT looks.' },
  { n: '04', title: 'Re-run every month', text: 'We ask the exact same ten questions again in fresh chats and send you the raw answers. You see what moved and what didn’t, with zero spin.' },
];

const ServicesSection: React.FC = () => (
  <section id="services" className="q-section q-rule">
    <div className="q-container">
      <div className="q-service-intro">
        <div>
          <span className="q-eyebrow">What we actually do</span>
          <h2 className="q-section-heading">How we get you<br />into ChatGPT answers.</h2>
        </div>
        <p>No mystery scores or vanity dashboards. Just the research, writing, and clean-up that give ChatGPT a reason to recommend you.</p>
      </div>
      <div>
        {services.map(s => (
          <Link to="/ai-visibility" className="q-service-row" key={s.n}>
            <span className="q-kicker">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <ArrowUpRight size={20} />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
