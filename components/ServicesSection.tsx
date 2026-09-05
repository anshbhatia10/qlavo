import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
const services=[
 {n:'01',title:'AI visibility research',text:'See how your brand appears for relevant buyer questions. Establish a recorded baseline across the engines and markets we agree.'},
 {n:'02',title:'Content worth referencing',text:'Answer real buying questions with clear pages, useful structure and supported claims. Give people and search systems something substantial to work with.'},
 {n:'03',title:'Entity & technical clarity',text:'Make your business facts consistent and your pages accessible. Prioritize crawl, indexing and structured-data work around the evidence.'},
 {n:'04',title:'Measurement & direction',text:'Track the agreed question set, retain the sources and make the next decisions with context. Report variability instead of hiding it behind a score.'},
];
const ServicesSection:React.FC=()=> <section id="services" className="q-section q-rule"><div className="q-container"><div className="q-service-intro"><div><span className="q-eyebrow">What we do</span><h2 className="q-section-heading">Build a clearer<br />presence in AI search.</h2></div><p>Research, content and technical work, connected by one agreed plan. Start with the part your business needs.</p></div><div>{services.map(s=><Link to="/ai-visibility" className="q-service-row" key={s.n}><span className="q-kicker">{s.n}</span><h3>{s.title}</h3><p>{s.text}</p><ArrowUpRight size={20} /></Link>)}</div></div></section>;
export default ServicesSection;
