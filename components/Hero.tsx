import React from 'react';
import { Logo } from './Logo';
import { BookCallButton, EnquireButton } from './ContactCta';

const Hero: React.FC = () => (
  <section className="q-hero" aria-labelledby="hero-heading">
    <div className="q-container q-hero-inner">
      <div className="q-hero-topline"><span className="q-hero-location">New Delhi · Working worldwide</span></div>
      <div className="q-hero-composition">
        <div className="q-hero-copy">
          <h1 id="hero-heading">Be the brand<br /><span>in the answer.</span></h1>
          <p className="q-hero-description">When buyers ask ChatGPT who to go with, your brand should be in the answer.</p>
          <p className="q-hero-detail">We help B2B companies show up in ChatGPT recommendations by writing and placing the pages it actually reads.</p>
          <div className="q-actions"><EnquireButton size={17} /><BookCallButton size={17} /></div>
        </div>
        <div className="q-hero-art" aria-hidden="true">
          <div className="q-signal">
            <div className="q-signal-orbit q-orbit-outer" /><div className="q-signal-orbit q-orbit-middle" /><div className="q-signal-orbit q-orbit-inner" />
            <div className="q-signal-cross q-cross-x" /><div className="q-signal-cross q-cross-y" />
            <div className="q-signal-core"><Logo className="q-signal-logo" /></div>
            <span className="q-signal-point q-point-one" /><span className="q-signal-point q-point-two" /><span className="q-signal-point q-point-three" />
            <span className="q-art-label q-label-one">Clear positioning</span><span className="q-art-label q-label-two">Pages ChatGPT reads</span><span className="q-art-coordinate">QL / CHATGPT VISIBILITY</span>
          </div>
        </div>
      </div>
      <div className="q-hero-bottom"><span>ChatGPT only. Measured in fresh chats.</span><span className="q-eyebrow">Agreed questions · Recorded answers</span></div>
    </div>
  </section>
);
export default Hero;
