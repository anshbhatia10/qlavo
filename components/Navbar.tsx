import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SCOPE_URL } from './PilotOffer';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  useEffect(() => { setOpen(false); }, [location.pathname]);
  const links = [['/partners', 'For agencies'], ['/sample-deliverable', 'Sample format'], ['/pricing', 'Pricing'], ['/about', 'About'], ['/contact', 'Contact']];
  return <header className="site-header" onKeyDown={event => { if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); } }}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div className="site-nav-wrap"><Link className="site-wordmark" to="/" aria-label="Qlavo home">qlavo<span aria-hidden="true">.</span></Link>
      <button className="site-menu-toggle" ref={toggle} aria-controls="primary-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close menu' : 'Menu'}</button>
      <nav id="primary-navigation" aria-label="Primary" className={`site-navigation${open ? ' is-open' : ''}`}>
        {links.map(([href, label]) => <Link key={href} to={href} aria-current={location.pathname === href ? 'page' : undefined}>{label}</Link>)}
        <a href={SCOPE_URL} className="pilot-button">Scope a client project <span aria-hidden="true">↗</span></a>
      </nav>
    </div>
  </header>;
}
