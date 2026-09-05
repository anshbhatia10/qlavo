import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import './Commercial.css';

const bookingUrl = 'https://calendly.com/anshnb07/30min?embed_domain=qlavo.in&embed_type=Inline&hide_event_type_details=1&background_color=ffffff&text_color=111111&primary_color=333333';

export default function Contact() {
  return <div className="cm-page">
    <SEOMeta title="Book a Discovery Call — Hire Qlavo (Worldwide B2B GEO)" description="Book a 30-minute discovery call with Qlavo, a worldwide B2B GEO agency (HQ New Delhi). Discuss your buyers, website and a practical scope for AI visibility work." path="/contact" />
    <section className="q-container cm-booking" id="booking" aria-labelledby="booking-heading">
      <div className="cm-booking-intro">
        <h1 id="booking-heading">Let’s find a time.</h1>
        <p>30 minutes with Ansh. Pick a day that works for you.</p>
      </div>
      <div className="cm-calendar-area">
        <a className="q-quiet-link cm-calendar-direct" href="https://calendly.com/anshnb07/30min" target="_blank" rel="noopener noreferrer">Open directly in Calendly ↗</a>
        <iframe className="cm-calendar" src={bookingUrl} title="Book a 30-minute discovery call with Ansh at Qlavo" loading="eager" width="100%" height="780" />
        <p className="cm-note">Calendar not loading? <a className="q-text-link" href="https://calendly.com/anshnb07/30min" target="_blank" rel="noopener noreferrer">Open the booking page directly <span aria-hidden="true">↗</span></a></p>
        <p className="cm-note">Calendly handles availability and booking details. Your appointment is confirmed through Calendly, not by this page.</p>
      </div>
    </section>
    <section className="q-container q-section q-rule" aria-labelledby="brief-heading">
      <div className="cm-booking-brief">
        <p className="q-eyebrow">Free discovery call / 30 minutes</p>
        <h2 className="q-section-heading" id="brief-heading">Bring a question.<br />We’ll scope the work.</h2>
        <p>You do not need a finished brief. A website and a sense of who you want to reach are enough to start.</p>
        <ol className="cm-brief-list">
          <li><span className="q-kicker">01 / Context</span><h3>Your website & buyers</h3><p>Which brand, service and market should we focus on?</p></li>
          <li><span className="q-kicker">02 / Question</span><h3>What are you seeing?</h3><p>Share an AI answer you are unsure about, a competitor reference, or a gap you want to investigate.</p></li>
          <li><span className="q-kicker">03 / Next step</span><h3>A scope, if it makes sense</h3><p>We discuss an audit, implementation or ongoing support. Deliverables, fees and terms are agreed before work begins.</p></li>
        </ol>
        <p className="cm-note">This is a scoping conversation, not an instant audit or a promise of AI recommendations.</p>
      </div>
    </section>
    <section className="q-container q-section q-rule cm-split">
      <div><p className="q-eyebrow">Prefer to write?</p><h2 className="q-section-heading">Start in your inbox.</h2><a className="cm-email q-text-link" href="mailto:info@qlavo.in">info@qlavo.in</a></div>
      <div className="cm-prose"><p>Send your website, target market and the question you want to answer. If you found us through ChatGPT, Gemini, LinkedIn or somewhere else, we’d like to know.</p><p>New Delhi, India — working with B2B businesses worldwide.</p><p>Scoping this for a client? <Link className="q-text-link" to="/partners">Explore our white-label partner service.</Link></p></div>
    </section>
  </div>;
}
