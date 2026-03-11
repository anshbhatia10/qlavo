import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-zinc-900 font-sans">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <Logo className="w-8 h-8 text-white group-hover:text-zinc-300 transition-colors" />
              <span className="text-xl font-medium tracking-tight text-white">Qlavo</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 pr-4 max-w-md">
              AI visibility, custom forecasting, and intelligent automation.
              We build the systems that give forward-thinking businesses an unfair advantage.
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
            <a
              href="https://www.producthunt.com/products/qlavo?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-qlavo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1094562&theme=dark&t=1773159513400"
                alt="Qlavo - AI Visibility & Revenue Forecasting | Product Hunt"
                width="250"
                height="54"
                style={{ width: '200px', height: 'auto' }}
              />
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-tight">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/ai-visibility" className="text-zinc-400 hover:text-white text-sm transition-colors">AI Visibility</Link></li>
              <li><Link to="/forecasting" className="text-zinc-400 hover:text-white text-sm transition-colors">Forecasting Models</Link></li>
              <li><Link to="/ai-integration" className="text-zinc-400 hover:text-white text-sm transition-colors">AI Integration</Link></li>
              <li><Link to="/geo-resources" className="text-zinc-400 hover:text-white text-sm transition-colors">GEO Resources</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-tight">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-zinc-400 hover:text-white text-sm transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-zinc-400 hover:text-white text-sm transition-colors">Contact</Link></li>
              <li><Link to="/geo-resources" className="text-zinc-400 hover:text-white text-sm transition-colors">What is GEO?</Link></li>
              <li><Link to="/ai-search-report-2026" className="text-zinc-400 hover:text-white text-sm transition-colors">2026 AI Search Report</Link></li>
              <li><Link to="/ai-glossary" className="text-zinc-400 hover:text-white text-sm transition-colors">AI Marketing Glossary</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">© 2026 Qlavo Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;