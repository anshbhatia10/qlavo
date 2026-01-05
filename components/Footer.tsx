import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-zinc-900 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <Logo className="w-8 h-8 text-white group-hover:text-zinc-300 transition-colors" />
              <span className="text-xl font-medium tracking-tight text-white">Qlavo</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 pr-4 max-w-md">
              Automating legal practice with automatic time-tracking and sovereign, air-gapped AI infrastructure. 
              We replace manual drudgery with intelligent agents.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/qlavo/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-zinc-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/qlavo.ai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-zinc-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-tight">Solutions</h4>
            <ul className="space-y-4">
            <li><Link to="/point-one" className="text-zinc-400 hover:text-white text-sm transition-colors">PointOne Time Tracking</Link></li>
            <li><Link to="/in-house-ai" className="text-zinc-400 hover:text-white text-sm transition-colors">Qore 1.0 (Flagship Model)</Link></li>
            <li><Link to="/contact" className="text-zinc-400 hover:text-white text-sm transition-colors">Request Audit</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">© 2026 Qlavo Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/contact" className="text-zinc-600 hover:text-white text-sm transition-colors">Terms</Link>
            <Link to="/contact" className="text-zinc-600 hover:text-white text-sm transition-colors">Privacy</Link>
            <Link to="/contact" className="text-zinc-600 hover:text-white text-sm transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;