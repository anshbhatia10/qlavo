import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, Zap } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'GEO', href: '/#services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-zinc-950/95 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2.5 group cursor-pointer relative z-[110]">
          <Logo className="w-7 h-7 text-white group-hover:text-zinc-300 transition-colors" />
          <span className="text-lg font-semibold tracking-tight text-white">Qlavo</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                location.pathname === link.href ? 'text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-sm font-medium tracking-wide text-zinc-400 hover:text-white transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/geo-calculator"
            className="btn-primary text-sm px-5 py-2.5 flex items-center gap-2"
          >
            Free Audit <Zap className="w-3.5 h-3.5" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-[110] text-white p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 h-dvh w-full bg-zinc-950 z-[100] flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out lg:hidden ${
            mobileMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-full opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={closeMenu}
                className="text-2xl font-light text-white tracking-wide hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="text-2xl font-light text-white tracking-wide hover:text-emerald-400 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="w-full px-12 mt-2">
            <Link
              to="/geo-calculator"
              onClick={closeMenu}
              className="btn-primary w-full justify-center text-lg px-10 py-4"
            >
              Free Audit <Zap className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
