import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'What is GEO', href: '/what-is-generative-engine-optimization' },
    { name: 'Hire', href: '/hire-geo-agency' },
    { name: 'GEO Agency', href: '/geo-agency-delhi-india' },
    { name: 'About', href: '/about' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false;
    return location.pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled || mobileMenuOpen
          ? 'bg-[#030303]/80 backdrop-blur-2xl border-b border-white/[0.06] py-3'
          : 'bg-transparent border-b border-transparent py-5'
        }`}
    >
      {/* Animated gradient line at top */}
      <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group cursor-pointer relative z-[110]">
          <div className="relative">
            <Logo className="w-8 h-8 text-white group-hover:text-emerald-400 transition-colors duration-300" />
            <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </div>
          <span className="text-xl font-grotesk font-semibold tracking-tight text-white group-hover:text-emerald-50 transition-colors duration-300">
            Qlavo
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`relative px-4 py-2 text-[13px] font-light tracking-wide transition-all duration-300 rounded-lg group ${
                isActive(link.href) ? 'text-white' : 'text-zinc-500 hover:text-white'
              }`}
            >
              {link.name}
              {/* Animated underline */}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-emerald-400 rounded-full transition-all duration-300 ${
                isActive(link.href) ? 'w-6' : 'w-0 group-hover:w-4'
              }`} />
              {/* Hover glow bg */}
              <span className="absolute inset-0 rounded-lg bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-colors duration-300 -z-10" />
            </Link>
          ))}

          <div className="w-px h-5 bg-white/10 mx-2" />

          <Link
            to="/contact"
            className={`relative px-4 py-2 text-[13px] font-light tracking-wide transition-all duration-300 rounded-lg group ${
              location.pathname === '/contact' ? 'text-white' : 'text-zinc-500 hover:text-white'
            }`}
          >
            Contact
            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-emerald-400 rounded-full transition-all duration-300 ${
              location.pathname === '/contact' ? 'w-6' : 'w-0 group-hover:w-4'
            }`} />
          </Link>

          <Link
            to="/contact"
            className="ml-3 btn-primary inline-flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-semibold rounded-xl"
          >
            Book a Call <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-[110] text-white p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
            <X className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 h-dvh w-full bg-[#030303] z-[100] flex flex-col items-center justify-center gap-2 transition-all duration-500 ease-in-out lg:hidden ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          {/* Background glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col items-center gap-2 relative z-10">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={closeMenu}
                className="text-2xl sm:text-3xl font-grotesk font-light text-zinc-400 tracking-wide hover:text-white hover:tracking-wider transition-all duration-300 py-2"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              key="contact-mobile"
              to="/contact"
              onClick={closeMenu}
              className="text-2xl sm:text-3xl font-grotesk font-light text-zinc-400 tracking-wide hover:text-white transition-all duration-300 py-2"
            >
              Contact
            </Link>
          </div>

          <div className="w-full px-12 mt-8 relative z-10">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="btn-primary block w-full text-center px-10 py-4 text-lg font-semibold rounded-2xl transition-transform active:scale-95"
            >
              Book a Call
            </Link>
          </div>

          {/* Bottom glow line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
