import React from 'react';
import { BookCallButton, EnquireButton } from './ContactCta';
const ContactSection:React.FC=()=> <section id="contact" className="q-closing"><div className="q-container q-closing-grid"><div><span className="q-eyebrow">A clearer place to start</span><h2>Your brand.<br />Part of the answer.</h2></div><div><p>Bring your website, your market and the questions you’re hearing from customers. We’ll discuss where GEO fits and what a useful first scope looks like.</p><div className="q-actions"><EnquireButton size={17} /><BookCallButton size={17} /></div></div></div></section>;
export default ContactSection;
