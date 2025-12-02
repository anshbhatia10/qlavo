import React, { useState } from 'react';
import { GlassButton } from './ui/GlassButton';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const auditEmailSubject = encodeURIComponent("Request for AI Audit - [Your Company Name]");
    const auditEmailBody = encodeURIComponent("Hi Qlavo Team,\n\nI am interested in a free AI audit for my business.\n\nName:\nCompany:\nPhone:\n\nBest regards,");

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center justify-between w-full px-6 md:px-12 py-4 bg-[#0B0B0F]/80 backdrop-blur-md border-b border-white/10">

                {/* Logo Section - Clean SVG Qlavo Logo */}
                <div className="flex items-center gap-3 relative z-10 flex-shrink-0" aria-label="Qlavo Logo">
                    <div className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center">
                        <svg viewBox="0 0 120 120" className="w-full h-full text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="60" cy="60" r="45" stroke="currentColor" strokeWidth="12" />
                            <rect x="52" y="52" width="24" height="24" fill="currentColor" />
                            <path d="M74 74L96 96" stroke="currentColor" strokeWidth="12" strokeLinecap="square" />
                        </svg>
                    </div>
                    <span className="text-3xl font-sans font-bold tracking-tight text-white">
                        Qlavo
                    </span>
                </div>

                {/* Desktop Links - FLEX SPACED (Natural Center between Left and Right) */}
                <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-xs font-bold text-white tracking-widest uppercase font-mono px-4">
                    <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="hover:text-[#7EE7E7] transition-colors flex items-center gap-1">
                        Automation
                    </a>
                    <a href="#process" onClick={(e) => handleScroll(e, 'process')} className="hover:text-[#7EE7E7] transition-colors flex items-center gap-1">
                        How It Works
                    </a>
                    <a href="#work" onClick={(e) => handleScroll(e, 'work')} className="hover:text-[#7EE7E7] transition-colors flex items-center gap-1">
                        Latest Work
                    </a>
                    <a href="#pricing" onClick={(e) => handleScroll(e, 'pricing')} className="hover:text-[#7EE7E7] transition-colors flex items-center gap-1">
                        Pricing
                    </a>
                </div>

                {/* Right CTA */}
                <div className="hidden md:flex items-center gap-4 relative z-10 flex-shrink-0">
                    <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-xs font-bold uppercase tracking-widest hover:text-[#7EE7E7] transition-colors flex items-center gap-1">
                        Contact Us <ArrowUpRight size={14} />
                    </a>
                    <GlassButton
                        className="text-xs px-5 py-2"
                        href={`mailto:info@qlavo.in?subject=${auditEmailSubject}&body=${auditEmailBody}`}
                    >
                        Get Audit <ArrowUpRight size={14} />
                    </GlassButton>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-white relative z-50 p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-[#0B0B0F] z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
                        <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="text-2xl font-bold text-white tracking-widest uppercase font-mono hover:text-[#7EE7E7] transition-colors">
                            Automation
                        </a>
                        <a href="#process" onClick={(e) => handleScroll(e, 'process')} className="text-2xl font-bold text-white tracking-widest uppercase font-mono hover:text-[#7EE7E7] transition-colors">
                            How It Works
                        </a>
                        <a href="#work" onClick={(e) => handleScroll(e, 'work')} className="text-2xl font-bold text-white tracking-widest uppercase font-mono hover:text-[#7EE7E7] transition-colors">
                            Latest Work
                        </a>
                        <a href="#pricing" onClick={(e) => handleScroll(e, 'pricing')} className="text-2xl font-bold text-white tracking-widest uppercase font-mono hover:text-[#7EE7E7] transition-colors">
                            Pricing
                        </a>
                        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-2xl font-bold text-white tracking-widest uppercase font-mono hover:text-[#7EE7E7] transition-colors">
                            Contact Us
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};