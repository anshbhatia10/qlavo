import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SEOMeta from '../components/SEOMeta';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import { Logo } from '../components/Logo';

const steps=[
 {n:'01',title:'Find out where you stand.',text:'Agree the buyer questions, markets and engines that matter. Record what appears, what gets cited and where your brand is missing.'},
 {n:'02',title:'Make the right changes.',text:'Turn the findings into a focused plan. Improve the content, business facts and technical foundations that need attention.'},
 {n:'03',title:'Measure without the guesswork.',text:'Repeat agreed checks, keep the evidence and report what changed. Separate observations from assumptions about what caused them.'},
];
const Home:React.FC=()=> <>
 <SEOMeta title="Qlavo | GEO Agency for AI Search Visibility" description="Be the brand in the answer. Qlavo is an independent GEO agency helping businesses improve AI search visibility through research, content and technical work." path="/" />
 <Hero />
 <section className="q-engines" aria-label="AI search platforms we can assess"><div className="q-container q-engine-inner"><p>AI search platforms.<br />Selected to fit your scope.</p><div className="q-engine-list">{['ChatGPT','Google AI Overviews','Gemini','Perplexity','Claude'].map(name=><span key={name}>{name}</span>)}</div></div></section>
 <section className="q-section"><div className="q-container q-split"><p className="q-eyebrow">The discovery shift</p><div><h2 className="q-statement">Your next customer might ask a question.<br /><span>And never see a search results page.</span></h2><p className="q-problem-copy">AI answers give buyers a different way to research, compare and choose. A well-ranked website is a useful foundation, but it doesn’t tell you how your brand appears in those answers.</p><p className="q-problem-copy">We help you understand that gap and work on what you can change: the clarity of your offer, the evidence behind it and the information search systems can access.</p><Link to="/what-is-generative-engine-optimization" className="q-quiet-link">What is generative engine optimization? <ArrowUpRight size={16} /></Link></div></div></section>
 <ServicesSection />
 <section id="approach" className="q-section q-method q-rule"><div className="q-container"><span className="q-eyebrow">How the work happens</span><h2 className="q-section-heading" style={{marginTop:20}}>Every finding.<br />Ready to inspect.</h2><div className="q-method-layout"><div>{steps.map(s=><div className="q-method-step" key={s.n}><span className="q-kicker">{s.n}</span><div><h3>{s.title}</h3><p>{s.text}</p></div></div>)}</div><aside className="q-evidence" aria-label="Illustrative research handoff format"><div className="q-evidence-header"><span className="q-brand"><Logo />Qlavo</span><span className="q-eyebrow">Format preview</span></div><h3>A handoff you can inspect.</h3><p>Useful research should show its working. Here’s the structure, before we discuss your scope.</p><dl><div><dt>Question set</dt><dd>Buyer intent, market and engine</dd></div><div><dt>Evidence</dt><dd>Recorded answers and cited sources</dd></div><div><dt>Next steps</dt><dd>Priorities, owners and review notes</dd></div></dl><p className="q-evidence-note">Illustrative format, not a client result or a live audit.</p><Link className="q-quiet-link" to="/sample-deliverable">Inspect the sample <ArrowUpRight size={16} /></Link></aside></div></div></section>
 <section className="q-section q-partner-section"><div className="q-container q-agency-band"><div><span className="q-eyebrow">For agency partners</span><h2>Your client relationship.<br />Our GEO delivery.</h2></div><div><p>Add specialist support behind the scenes. We prepare the agreed research, content and reporting; you review the work and present it under your brand.</p><Link to="/partners" className="q-button-secondary">Explore white-label GEO <ArrowUpRight size={16} /></Link></div></div></section>
 <FAQSection />
 <ContactSection />
 </>;
export default Home;
