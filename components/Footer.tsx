import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030303] pt-20 pb-10 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group w-fit">
              <Logo className="w-8 h-8 text-white group-hover:text-emerald-400 transition-colors duration-300" />
              <span className="text-xl font-grotesk font-semibold tracking-tight text-white group-hover:text-emerald-50 transition-colors duration-300">
                Qlavo
              </span>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6 pr-4 max-w-md">
              A worldwide B2B GEO agency. Helping brands improve their visibility in AI search.
              Headquartered in New Delhi. Public email:{' '}
              <a href="mailto:info@qlavo.in" className="text-emerald-400 hover:text-emerald-300">info@qlavo.in</a>
            </p>

            <div className="flex gap-3 mb-6">
              <a
                href="https://www.linkedin.com/company/qlavo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/20 border border-transparent transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/qlavo.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/20 border border-transparent transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <a
              href="https://www.producthunt.com/products/qlavo?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-qlavo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1094562&theme=dark&t=1773159513400"
                alt="Qlavo on Product Hunt"
                width="250"
                height="54"
                style={{ width: '180px', height: 'auto' }}
              />
            </a>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-grotesk text-white font-semibold mb-6 tracking-tight text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-4">
              <li><Link to="/partners" className="text-zinc-400 hover:text-emerald-400 text-sm">White-label GEO for agencies</Link></li>
              <li>
                <Link to="/ai-visibility" className="text-zinc-400 hover:text-emerald-400 text-sm transition-colors duration-300 flex items-center gap-1 group">
                  AI Visibility
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/geo-resources" className="text-zinc-400 hover:text-emerald-400 text-sm transition-colors duration-300 flex items-center gap-1 group">
                  GEO Resources
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-visibility"
                  className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors duration-300 font-medium flex items-center gap-1 group"
                >
                  AI Visibility Approach
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-grotesk text-white font-semibold mb-6 tracking-tight text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-zinc-400 hover:text-emerald-400 text-sm transition-colors duration-300 flex items-center gap-1 group">
                  About
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/hire-geo-agency" className="text-zinc-400 hover:text-emerald-400 text-sm transition-colors duration-300 flex items-center gap-1 group">
                  Hire Qlavo
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-400 hover:text-emerald-400 text-sm transition-colors duration-300 flex items-center gap-1 group">
                  Contact
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/geo-agency-delhi-india" className="text-zinc-400 hover:text-emerald-400 text-sm transition-colors duration-300 flex items-center gap-1 group">
                  GEO agency Delhi
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-zinc-400 hover:text-emerald-400 text-sm transition-colors duration-300 flex items-center gap-1 group">
                  Blog
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Free Audit */}
          <div className="glass-panel rounded-2xl p-6 gradient-border">
            <h5 className="font-grotesk text-white font-semibold text-sm mb-4 tracking-tight">
              Discuss Your GEO Goals
            </h5>
            <div className="flex flex-col gap-3">
              <Link
                to="/ai-visibility"
                className="btn-primary justify-center text-sm px-5 py-3"
              >
                Explore Our Approach
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-zinc-600 text-xs mt-3">
              Research, implementation and reporting, scoped to your goals.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            © 2026 Qlavo. All rights reserved.
          </p>
          <p className="text-zinc-700 text-xs">
            HQ New Delhi · Worldwide B2B
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
