import React from 'react';
import SEOMeta from '../components/SEOMeta';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import { PilotTerms, PILOT_DESCRIPTION } from '../components/PilotOffer';
export default function Home() { return <div className="pilot-site"><SEOMeta title="Qlavo — White-label AI-search pilots for agencies" description={PILOT_DESCRIPTION} path="/" /><Hero /><div className="pilot-container"><ServicesSection /><PilotTerms /><FAQSection /></div><ContactSection /></div>; }
