import React from 'react';
import { BookCallButton, EnquireButton } from './ContactCta';

const ContactSection: React.FC = () => (
  <section id="contact" className="q-closing">
    <div className="q-container q-closing-grid">
      <div>
        <span className="q-eyebrow">A simple place to start</span>
        <h2>Your brand.<br />In the ChatGPT answer.</h2>
      </div>
      <div>
        <p>Send over your website, your market, and the questions your buyers ask. We’ll tell you honestly where you stand and what a first month looks like.</p>
        <div className="q-actions"><EnquireButton size={17} /><BookCallButton size={17} /></div>
      </div>
    </div>
  </section>
);

export default ContactSection;
