import React from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import { BOOK_CALL_URL, BookCallButton, ENQUIRE_EMAIL, EnquireButton } from '../components/ContactCta';
import './Commercial.css';

const bookingUrl = 'https://calendly.com/anshnb07/30min?embed_domain=qlavo.in&embed_type=Inline&hide_event_type_details=1&background_color=ffffff&text_color=111111&primary_color=333333';

export default function Contact() {
  return (
    <div className="cm-page">
      <SEOMeta
        title="Contact Qlavo — Enquire by Email or Book a Call"
        description="Enquire about ChatGPT visibility work with Qlavo by email, or book a 30-minute call. Headquartered in New Delhi, working worldwide."
        path="/contact"
      />
      <section className="q-container cm-booking" id="booking" aria-labelledby="booking-heading">
        <div className="cm-booking-intro">
          <h1 id="booking-heading">Write. Or book a time.</h1>
          <p>Send an email and Ansh replies himself. Prefer to talk? Grab a 30-minute slot below.</p>
          <div className="cm-actions cm-contact-actions"><EnquireButton size={17} /><BookCallButton size={17} /></div>
        </div>
        <div className="cm-calendar-area">
          <a className="q-quiet-link cm-calendar-direct" href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer">Open directly in Calendly ↗</a>
          <iframe className="cm-calendar" src={bookingUrl} title="Book a 30-minute discovery call with Ansh at Qlavo" loading="eager" width="100%" height="780" />
          <p className="cm-note">Calendar not loading? <a className="q-text-link" href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer">Open the booking page directly <span aria-hidden="true">↗</span></a></p>
          <p className="cm-note">Calendly handles availability and booking details. Your appointment is confirmed through Calendly, not by this page.</p>
        </div>
      </section>
      <section className="q-container q-section q-rule" aria-labelledby="brief-heading">
        <div className="cm-booking-brief">
          <p className="q-eyebrow">Intro call / 30 minutes</p>
          <h2 className="q-section-heading" id="brief-heading">Bring a question.<br />We’ll scope the work.</h2>
          <p>You don’t need a finished brief. Your website and a rough sense of who your buyers are is plenty.</p>
          <ol className="cm-brief-list">
            <li><span className="q-kicker">01 / Context</span><h3>Your website &amp; buyers</h3><p>What you sell, who buys it, and which market you care about.</p></li>
            <li><span className="q-kicker">02 / Question</span><h3>What you’re seeing in ChatGPT</h3><p>Share a ChatGPT answer you’re unsure about, a competitor showing up instead of you, or a gap you want to check.</p></li>
            <li><span className="q-kicker">03 / Next step</span><h3>A plain written scope</h3><p>If it makes sense to work together, we agree the ten questions, deliverables, and monthly fee in writing before starting.</p></li>
          </ol>
          <p className="cm-note">This is a scoping chat, not an instant audit or a promise of ChatGPT recommendations. Plans are monthly and scoped to your business, cancel any time.</p>
        </div>
      </section>
      <section className="q-container q-section q-rule cm-split">
        <div>
          <p className="q-eyebrow">Prefer to write?</p>
          <h2 className="q-section-heading">Start in your inbox.</h2>
          <a className="cm-email q-text-link" href={`mailto:${ENQUIRE_EMAIL}`}>{ENQUIRE_EMAIL}</a>
        </div>
        <div className="cm-prose">
          <p>Send your website, target market, and the question you want to test. If you found us through ChatGPT, Google, or LinkedIn, feel free to mention it.</p>
          <p>Ground Floor, 15, Poorvi Marg, Vasant Vihar, New Delhi 110057, India — working with B2B businesses worldwide.</p>
          <p>Scoping this for a client? <Link className="q-text-link" to="/partners">Explore our white-label partner service.</Link></p>
        </div>
      </section>
    </div>
  );
}
