import React from 'react';
import { Link } from 'react-router-dom';
const questions=[
 ['What is generative engine optimization?', 'Generative engine optimization (GEO) is work to improve how a business is discovered and represented in AI-generated answers. It combines useful content, consistent business information, technical accessibility and credible supporting sources.'],
 ['Does GEO replace SEO?', 'No. Search engine optimization remains a useful foundation. GEO adds research into generated answers: whether your brand is mentioned, how it is described and which sources are cited. Both benefit from accessible pages and useful, well-supported content.'],
 ['How do you measure AI visibility?', 'We agree a sample of buyer questions, engines and markets, then retain the answers and available source links. Repeat checks use the agreed method. A sample is not a universal visibility score, and answers can change between runs.'],
 ['Can you guarantee mentions or citations?', 'We cannot guarantee rankings, citations, recommendations or leads. We agree the work, delivery milestones and evidence to report. An AI platform’s choice to include a brand is outside our control.'],
 ['What does an engagement cost?', 'We provide a scope-based quote. The fee depends on the research, markets, content, technical involvement and reporting you need. You approve the deliverables and terms before work begins. A first project does not require an ongoing retainer.'],
 ['Do you work with other agencies?', 'Yes. Our white-label GEO service gives agencies specialist delivery under their own brand. You keep the client relationship and review the work. There is no direct client contact without your consent.'],
];
const FAQSection:React.FC=()=> <section id="faq" className="q-section"><div className="q-container q-faq-layout"><div className="q-faq-intro"><span className="q-eyebrow">Before we talk</span><h2 className="q-section-heading">Good questions.<br />Straight answers.</h2><p>More about agency delivery?<br /><Link to="/partners" className="q-text-link">Explore our partner service.</Link></p></div><div className="q-faq">{questions.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>;
export default FAQSection;
