import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Qore 1.0', href: '/in-house-ai' },
    { name: 'PointOne', href: '/point-one' },
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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${
        scrolled || mobileMenuOpen
          ? 'bg-black/95 backdrop-blur-xl border-white/5 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group cursor-pointer relative z-[110]">
          <Logo className="w-8 h-8 text-white group-hover:text-zinc-300 transition-colors" />
          <span className="text-xl font-medium tracking-tight text-white">Qlavo</span>
        </Link>

        {/* Desktop Nav - Hidden until Large screens (1024px) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={`text-sm font-light tracking-wide transition-colors ${
                location.pathname === link.href ? 'text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            key="contact-desktop"
            to="/contact"
            className={`text-sm font-light tracking-wide transition-colors ${
              location.pathname === '/contact' ? 'text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Contact
          </Link>
          <Link 
            to="/contact"
            className="px-5 py-2 text-sm font-medium text-black bg-white hover:bg-zinc-200 transition-colors rounded-full"
          >
            Book a Call
          </Link>
        </nav>

        {/* Mobile Toggle - Only visible below lg */}
        <button 
          className="lg:hidden relative z-[110] text-white p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay - Fully Covers Screen */}
        <div 
          className={`fixed inset-0 h-dvh w-full bg-black z-[100] flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out lg:hidden ${
            mobileMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-full opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                onClick={closeMenu}
                className="text-3xl font-light text-white tracking-wide hover:text-zinc-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              key="contact-mobile"
              to="/contact"
              onClick={closeMenu}
              className="text-3xl font-light text-white tracking-wide hover:text-zinc-400 transition-colors"
            >
              Contact
            </Link>
          </div>
          
          <div className="w-full px-12 mt-4">
            <Link 
              to="/contact"
              onClick={closeMenu}
              className="block w-full text-center px-10 py-5 text-xl font-medium text-black bg-white rounded-full transition-transform active:scale-95 shadow-2xl"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;