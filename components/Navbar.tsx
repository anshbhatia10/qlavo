import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
const links=[['Services','/#services'],['Approach','/#approach'],['For agencies','/partners'],['Pricing','/pricing'],['About','/about']];
const Navbar:React.FC<{scrolled?:boolean}>=()=>{
 const [open,setOpen]=useState(false);const location=useLocation();const toggleRef=useRef<HTMLButtonElement>(null);const headerRef=useRef<HTMLElement>(null);
 useEffect(()=>setOpen(false),[location.pathname,location.hash]);
 useEffect(()=>{
  if(!open)return;
  const previous=document.body.style.overflow;document.body.style.overflow='hidden';
  const key=(e:KeyboardEvent)=>{
   if(e.key==='Escape'){setOpen(false);toggleRef.current?.focus();}
   if(e.key==='Tab'){
    const items=Array.from(headerRef.current?.querySelectorAll<HTMLElement>('a,button')||[]).filter(el=>el.getClientRects().length>0);
    const first=items[0],last=items[items.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}
   }
  };
  const resize=()=>{if(window.innerWidth>900)setOpen(false);};
  document.addEventListener('keydown',key);window.addEventListener('resize',resize);
  return()=>{document.body.style.overflow=previous;document.removeEventListener('keydown',key);window.removeEventListener('resize',resize);};
 },[open]);
 const close=()=>setOpen(false);
 return <header className="q-nav" ref={headerRef}><div className="q-container q-nav-inner"><Link className="q-brand" to="/" onClick={close} aria-label="Qlavo home"><Logo />Qlavo</Link><nav className="q-nav-links" aria-label="Primary">{links.map(([label,to])=><Link key={to} to={to} aria-current={location.pathname===to?'page':undefined}>{label}</Link>)}<Link to="/contact" className="q-button">Let’s talk <ArrowUpRight size={15} /></Link></nav><button className="q-menu-toggle" ref={toggleRef} type="button" aria-label={open?'Close menu':'Open menu'} aria-controls="mobile-navigation" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X size={20}/>:<Menu size={20}/>}</button></div><nav id="mobile-navigation" className="q-mobile-nav" hidden={!open} aria-label="Mobile">{links.map(([label,to])=><Link key={to} to={to} onClick={close} aria-current={location.pathname===to?'page':undefined}>{label}</Link>)}<Link to="/contact" onClick={close} className="q-button">Let’s talk <ArrowUpRight size={17}/></Link></nav></header>;
};
export default Navbar;
