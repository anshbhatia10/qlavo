import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
const ContactSection:React.FC=()=> <section id="contact" className="q-closing"><div className="q-container q-closing-grid"><div><span className="q-eyebrow">A clearer place to start</span><h2>Your brand.<br />Part of the answer.</h2></div><div><p>Bring your website, your market and the questions you’re hearing from customers. We’ll discuss where GEO fits and what a useful first scope looks like.</p><div className="q-actions"><Link to="/contact" className="q-button">Book a conversation <ArrowUpRight size={17} /></Link><a href="mailto:info@qlavo.in" className="q-quiet-link">Email us ↗</a></div></div></div></section>;
export default ContactSection;
