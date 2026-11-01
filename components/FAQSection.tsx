import React from 'react';
import { Link } from 'react-router-dom';
const questions=[
 ['What is generative engine optimization?', 'Generative engine optimization (GEO) is work to improve how a business is discovered and represented in AI-generated answers. It combines useful content, consistent business information, technical accessibility and credible supporting sources.'],
 ['Does GEO replace SEO?', 'No. Search engine optimization remains a useful foundation. GEO adds research into generated answers: whether your brand is mentioned, how it is described and which sources are cited. Both benefit from accessible pages and useful, well-supported content.'],
 ['How do you measure AI visibility?', 'We agree a sample of buyer questions and markets, then run them in fresh ChatGPT chats and retain the answers and available source links. Repeat checks use the agreed method. A sample is not a universal visibility score, and answers can change between runs.'],
 ['Can you guarantee mentions or citations?', 'We cannot guarantee rankings, citations or leads, and we do not control ChatGPT. We do put the first month behind the 30-day 2-prompt guarantee: ten agreed buyer questions, and if ChatGPT is not recommending you on two of them within 30 days, month one is refunded and we keep working free until it does. The exact terms are on our terms page.'],
 ['What does an engagement cost?', 'One plan: $300 a month, or ₹30,000, cancel any time. The scope and the quote are agreed in writing before work starts. There is no setup fee, no minimum term and no separate retainer.'],
 ['Do you work with other agencies?', 'Yes. Our white-label GEO service gives agencies specialist delivery under their own brand. You keep the client relationship and review the work. There is no direct client contact without your consent.'],
];
const FAQSection:React.FC=()=> <section id="faq" className="q-section"><div className="q-container q-faq-layout"><div className="q-faq-intro"><span className="q-eyebrow">Before we talk</span><h2 className="q-section-heading">Good questions.<br />Straight answers.</h2><p>More about agency delivery?<br /><Link to="/partners" className="q-text-link">Explore our partner service.</Link></p></div><div className="q-faq">{questions.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>;
export default FAQSection;
