import React, { useState } from 'react';
import { ArrowRight, Search, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/contact';
    }, 1200);
  };

  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-glow-emerald -z-10" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center justify-center h-full pt-28 pb-16">
        {/* Eyebrow — Positioning Badge */}
        <p
          className="text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase mb-4 animate-fade-in-up"
          style={{ animationDelay: '0.05s', opacity: 0 }}
        >
          India's Only GEO Agency
        </p>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-5 leading-[1.08] animate-fade-in-up"
        >
          100M people search with AI every day.{' '}
          <span className="text-gradient-emerald">Are you in their answers?</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-base sm:text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.15s', opacity: 0 }}
        >
          When customers ask ChatGPT, Gemini, or Perplexity to recommend a business like yours — 
          you should be the answer. We make sure you are.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          <Link
            to="/geo-calculator"
            className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold"
          >
            Get a Free Audit <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-zinc-400 border border-white/10 rounded-2xl hover:border-white/20 hover:text-white transition-all"
          >
            How It Works
          </a>
        </div>

        {/* Featured on */}
        <p
          className="text-xs sm:text-sm text-zinc-500 mt-6 font-light tracking-wide animate-fade-in-up"
          style={{ animationDelay: '0.45s', opacity: 0 }}
        >
          Featured on Product Hunt
        </p>
      </div>
    </section>
  );
};

export default Hero;
