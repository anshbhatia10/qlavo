import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

const Hero: React.FC = () => (
  <section className="q-hero" aria-labelledby="hero-heading">
    <div className="q-container q-hero-inner">
      <div className="q-hero-topline"><span className="q-hero-location">New Delhi · Working worldwide</span></div>
      <div className="q-hero-composition">
        <div className="q-hero-copy">
          <h1 id="hero-heading">Be the brand<br /><span>in the answer.</span></h1>
          <p className="q-hero-description">When buyers ask AI who to trust, your brand should be part of the conversation.</p>
          <p className="q-hero-detail">Qlavo helps businesses improve how they’re found and represented in AI search through generative engine optimization.</p>
          <div className="q-actions"><Link to="/contact" className="q-button">Let’s talk about your brand <ArrowUpRight size={17} /></Link><a href="#approach" className="q-quiet-link">Explore our approach <ArrowDown size={15} /></a></div>
        </div>
        <div className="q-hero-art" aria-hidden="true">
          <div className="q-signal">
            <div className="q-signal-orbit q-orbit-outer" /><div className="q-signal-orbit q-orbit-middle" /><div className="q-signal-orbit q-orbit-inner" />
            <div className="q-signal-cross q-cross-x" /><div className="q-signal-cross q-cross-y" />
            <div className="q-signal-core"><Logo className="q-signal-logo" /></div>
            <span className="q-signal-point q-point-one" /><span className="q-signal-point q-point-two" /><span className="q-signal-point q-point-three" />
            <span className="q-art-label q-label-one">A clear identity</span><span className="q-art-label q-label-two">Evidence that holds up</span><span className="q-art-coordinate">QL / GENERATIVE SEARCH</span>
          </div>
        </div>
      </div>
      <div className="q-hero-bottom"><span>Built for the way discovery is changing.</span><span className="q-eyebrow">Clarity. Credibility. Discoverability.</span></div>
    </div>
  </section>
);
export default Hero;
