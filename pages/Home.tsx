import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SEOMeta from '../components/SEOMeta';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import { Logo } from '../components/Logo';
import ClientProof from '../components/ClientProof';

const steps = [
  { n: '01', title: 'Agree the ten questions.', text: 'Before we start, we lock in ten questions your buyers actually ask ChatGPT, along with the market and exact wording.' },
  { n: '02', title: 'Record the baseline and ship the work.', text: 'We run each question in fresh chats to see where you stand today, then write the pages, fix the gaps, and pitch the outside roundups ChatGPT relies on.' },
  { n: '03', title: 'Re-run every month.', text: 'We ask the exact same ten questions again with memory off, share every raw answer, and adjust the plan around what is moving.' },
];

const Home: React.FC = () => (
  <>
    <SEOMeta
      title="Qlavo | GEO Agency for ChatGPT Visibility"
      description="Be the brand in the answer. Qlavo is a GEO agency helping B2B businesses show up in ChatGPT recommendations through research, writing and technical work."
      path="/"
    />
    <Hero />
    <section className="q-engines" aria-label="The engine we work on">
      <div className="q-container q-engine-inner">
        <p>One engine.<br />Measured properly.</p>
        <div className="q-engine-list"><span>ChatGPT</span></div>
      </div>
    </section>
    <ClientProof />
    <section className="q-section">
      <div className="q-container q-split">
        <p className="q-eyebrow">Why this matters</p>
        <div>
          <h2 className="q-statement">Your next customer asks ChatGPT.<br /><span>And never opens a search results page.</span></h2>
          <p className="q-problem-copy">More buyers now open ChatGPT before they ever open Google. They ask what software to use, which vendor fits their team, and who to shortlist. Ranking on Google still helps, but it doesn’t tell you what ChatGPT says about you.</p>
          <p className="q-problem-copy">That’s what generative engine optimization (GEO) is for. We test the exact questions your buyers ask ChatGPT, see who gets recommended instead of you, and fix what’s missing on your site and across the web.</p>
          <Link to="/what-is-generative-engine-optimization" className="q-quiet-link">What is generative engine optimization? <ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </section>
    <ServicesSection />
    <section id="approach" className="q-section q-method q-rule">
      <div className="q-container">
        <span className="q-eyebrow">How it works</span>
        <h2 className="q-section-heading" style={{ marginTop: 20 }}>Simple process.<br />Nothing hidden.</h2>
        <div className="q-method-layout">
          <div>
            {steps.map(s => (
              <div className="q-method-step" key={s.n}>
                <span className="q-kicker">{s.n}</span>
                <div><h3>{s.title}</h3><p>{s.text}</p></div>
              </div>
            ))}
          </div>
          <aside className="q-evidence" aria-label="Illustrative research handoff format">
            <div className="q-evidence-header"><span className="q-brand"><Logo />Qlavo</span><span className="q-eyebrow">Format preview</span></div>
            <h3>What you get each month.</h3>
            <p>You shouldn’t have to take anyone’s word for it. Here’s what sits inside every monthly handoff.</p>
            <dl>
              <div><dt>Question set</dt><dd>Your 10 agreed buyer questions</dd></div>
              <div><dt>Raw answers</dt><dd>Every ChatGPT response and cited link</dd></div>
              <div><dt>Next moves</dt><dd>What we’re shipping next and why</dd></div>
            </dl>
            <p className="q-evidence-note">Illustrative format, not a client result or a live audit.</p>
            <Link className="q-quiet-link" to="/sample-deliverable">Inspect the sample <ArrowUpRight size={16} /></Link>
          </aside>
        </div>
      </div>
    </section>
    <section className="q-section q-rule" id="offer">
      <div className="q-container q-split">
        <p className="q-eyebrow">How we measure</p>
        <div>
          <h2 className="q-statement">Ten questions. A hundred fresh chats.<br /><span>Every answer on the record.</span></h2>
          <p className="q-lede" style={{ marginTop: 22 }}>We agree your buyer questions before we start, ask ChatGPT each one in ten fresh chats every month, and show you every answer. Scoped and quoted in writing. Monthly, cancel any time.</p>
          <div className="q-actions">
            <Link className="q-button" to="/contact">Talk to us <ArrowUpRight size={16} /></Link>
            <Link className="q-text-link" to="/terms">Read the terms</Link>
          </div>
        </div>
      </div>
    </section>
    <section className="q-section q-partner-section">
      <div className="q-container q-agency-band">
        <div>
          <span className="q-eyebrow">For agencies</span>
          <h2>Your client.<br />Our ChatGPT delivery.</h2>
        </div>
        <div>
          <p>If your clients are asking how to show up in ChatGPT, we handle the research, writing, and monthly reporting behind the scenes. You review it and present it under your own brand.</p>
          <Link to="/partners" className="q-button-secondary">Explore white-label GEO <ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </section>
    <FAQSection />
    <ContactSection />
  </>
);

export default Home;
