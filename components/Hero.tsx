import React from 'react';
import { Link } from 'react-router-dom';
import { PilotSummary, ScopeCTA } from './PilotOffer';
export default function Hero() {
  return <section className="pilot-hero pilot-container"><div><p className="pilot-eyebrow">For SEO, content &amp; digital agencies</p><h1>Your client asks about AI search.<br /><em>Have a concrete next step.</em></h1><p className="pilot-lede">White-label research and one useful page improvement, delivered behind the scenes. You keep the relationship. We give you a defined piece of work to review, publish and present.</p><ScopeCTA /><Link className="pilot-text-link pilot-sample-link" to="/sample-deliverable">See the illustrative deliverable format →</Link></div><PilotSummary /></section>;
}
