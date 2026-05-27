import React, { useState } from 'react';
import SEOMeta from '../components/SEOMeta';
import { ArrowRight, Check, Search, Loader2, FileText, Layers, Globe, Star, Clock, MessageSquare, Target, Award, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIVisibility: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/geo-calculator';
    }, 1200);
  };

  const faqItems = [
    {
      q: 'What actually is GEO?',
      a: 'Generative Engine Optimization (GEO) is the practice of optimizing your brand\'s online presence so AI assistants — ChatGPT, Gemini, Claude, Perplexity — cite and recommend you in their answers. Think of it as SEO for the AI era. Instead of fighting for page-one Google rankings, you\'re getting cited inside the AI answer itself. That\'s where search is going.'
    },
    {
      q: 'How is GEO different from SEO?',
      a: 'SEO gets you clicks on Google. GEO gets you cited inside AI responses. SEO leans on keywords and backlinks. GEO runs on entity consistency, structured data, citation authority, and cross-platform presence. Both matter. But Gartner predicts search volume will drop 25% by 2026 as users turn to AI-powered answers. GEO is the hedge.'
    },
    {
      q: 'How fast will I see results?',
      a: 'Depends on the platform. Perplexity and Google Gemini update in near-real-time — you can see changes in 1–2 weeks. ChatGPT and Claude have longer knowledge refresh cycles — expect 30–90 days. We baseline your visibility score before we start, so you have real numbers to track from day one.'
    },
    {
      q: 'How do you measure AI visibility?',
      a: 'We audit how ChatGPT, Gemini, Claude, and Perplexity currently see your business. We run dozens of prompts relevant to your industry and track whether you\'re cited, how often, and in what context. That gives you a score. We re-run the same tests monthly so you see exactly what\'s moving.'
    },
    {
      q: 'What does a GEO engagement actually cost?',
      a: 'Most AI Visibility engagements start at £3,000/month. That includes the audit, the optimization work, and monthly tracking. But we don\'t talk money until we know we can actually move your numbers. The audit comes first — free.'
    }
  ];

  return (
    <div className="bg-black min-h-screen">

      {/* ===== HERO ===== */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-glow-emerald pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-zinc-900 rounded-xl border border-white/10">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm text-zinc-500 uppercase tracking-widest">Service</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-[1.08]">
            Get Recommended by AI.<br />
            <span className="text-gradient-emerald">Or Get Forgotten.</span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8 max-w-3xl">
            Generative Engine Optimization makes your business the answer when customers ask ChatGPT, Gemini, or Perplexity for recommendations. Most brands aren't even visible there yet.
          </p>

          {/* Audit form */}
          <form onSubmit={handleAudit} className="w-full max-w-lg flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
              <input
                type="text"
                placeholder="Enter your website URL..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="audit-input pl-11 pr-4"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary justify-center whitespace-nowrap px-7 py-4 sm:py-[17px]"
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Checking...</>
              ) : (
                <><ArrowRight className="w-4 h-4" /> Run Your Free Audit</>
              )}
            </button>
          </form>
          <p className="text-xs sm:text-sm text-zinc-500 font-light">Free. Takes 30 seconds. No email required.</p>
        </div>
      </section>

      {/* ===== WHAT IS GEO? ===== */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">The Basics</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
              What Is <span className="text-gradient-emerald">GEO</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-lg text-white font-medium mb-4 leading-relaxed">
                Generative Engine Optimization = getting AI to recommend you.
              </p>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                When someone asks ChatGPT "Who's the best [your service] in [your city]?" — the AI synthesizes an answer from across the web. If your brand isn't structured, cited, and optimized for that moment, you don't exist in that answer.
              </p>
              <p className="text-zinc-400 font-light leading-relaxed">
                GEO optimizes your entity consistency, structured data, citations, and platform presence so AI systems recognize you as authoritative and trustworthy. It's SEO for a world where nobody clicks links anymore — they just read the answer.
              </p>
            </div>
            <div className="glass-panel p-8 md:p-10">
              <div className="space-y-5">
                {[
                  { label: 'SEO', desc: 'Optimizes for Google rankings & clicks' },
                  { label: 'GEO', desc: 'Optimizes for AI citations & recommendations' },
                  { label: 'SEO', desc: 'Needs keywords & backlinks' },
                  { label: 'GEO', desc: 'Needs entity consistency & structured data' },
                  { label: 'SEO', desc: 'Measured by traffic & CTR' },
                  { label: 'GEO', desc: 'Measured by AI citation rate & sentiment' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm">
                    <span className={`font-semibold w-12 ${row.label === 'GEO' ? 'text-emerald-400' : 'text-zinc-500'}`}>{row.label}</span>
                    <span className="text-zinc-600">→</span>
                    <span className={`font-light ${row.label === 'GEO' ? 'text-white' : 'text-zinc-400'}`}>{row.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY IT MATTERS ===== */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5 bg-zinc-950/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">Why It Matters</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
              The Numbers Don't Lie.<br />
              <span className="text-gradient-emerald">The Window Is Closing.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: 'Over half', label: 'consumers now use AI assistants to research products and services before buying', icon: MessageSquare },
              { value: '25%', label: 'search volume drop predicted by 2026 as users turn to AI-powered answers', icon: Target },
              { value: '<1%', label: 'of businesses are actively optimizing for AI visibility right now', icon: Award },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="bento-card p-8 md:p-10 text-center flex flex-col items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <p className="text-5xl md:text-6xl font-bold text-white tracking-tight">{stat.value}</p>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-[22ch] mx-auto">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <p className="text-center text-zinc-500 text-sm font-light mt-10 max-w-2xl mx-auto">
            Your competitors aren't doing GEO yet. That won't last. Every month you wait is another month they could get there first.
          </p>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
              Four Steps to <span className="text-gradient-emerald">AI Visibility</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Audit', desc: 'We scan every AI platform to see where you stand. Baseline score. Gap analysis. Competitor comparison.', icon: Search },
              { step: '02', title: 'Structure', desc: 'We fix your entity signals — schema markup, structured data, citation consistency across the web.', icon: Layers },
              { step: '03', title: 'Build', desc: 'We create and optimize the content, profiles, and references AI trusts enough to cite.', icon: FileText },
              { step: '04', title: 'Monitor', desc: 'Monthly re-scans. Real numbers. You see exactly which citations are improving and where to double down.', icon: Clock },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="relative p-6 bg-zinc-900/40 border border-white/5 rounded-2xl flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 bg-zinc-800 rounded-xl">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-zinc-800/50">{item.step}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed flex-1">{item.desc}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-zinc-700" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED ===== */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5 bg-zinc-950/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">Deliverables</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
              Everything <span className="text-gradient-emerald">Included</span>
            </h2>
            <p className="text-zinc-400 text-base font-light mt-4 max-w-xl mx-auto">
              No fluff. Every item directly moves your AI citation score.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              'Entity consistency audit across the web',
              'Schema markup implementation',
              'Citation building and cleanup',
              'Content optimization for AI consumption',
              'Platform presence (Crunchbase, Clutch, G2, etc.)',
              'Monthly tracking & performance reports',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 glass-panel rounded-xl">
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-white text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESULTS TIMELINE ===== */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">Timeline</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
              What to Expect, <span className="text-gradient-emerald">When</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-8">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-semibold text-white">Perplexity & Gemini</h3>
              </div>
              <p className="text-4xl font-bold text-white mb-2">1–2 weeks</p>
              <p className="text-zinc-400 text-sm font-light">
                These platforms update their knowledge bases in near-real-time. Changes to your citations and profiles can reflect within days.
              </p>
            </div>
            <div className="glass-panel p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-zinc-400" />
                <h3 className="text-lg font-semibold text-white">ChatGPT & Claude</h3>
              </div>
              <p className="text-4xl font-bold text-white mb-2">30–90 days</p>
              <p className="text-zinc-400 text-sm font-light">
                Longer knowledge refresh cycles mean more patience — but when you land, you land in the most-used AI platform on earth.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-zinc-900/40 border border-white/5 rounded-xl text-center">
            <p className="text-zinc-400 text-sm font-light">
              <span className="text-white font-medium">Pro tip:</span> We start with Perplexity and Gemini to build momentum, then layer in ChatGPT and Claude as the structural work compounds.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5 bg-zinc-950/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
              Quick Answers About <span className="text-gradient-emerald">GEO</span>
            </h2>
            <p className="text-zinc-400 text-base font-light mt-4">
              The stuff clients actually ask before working with us. No marketing speak.
            </p>
          </div>

          <div className="space-y-2.5">
            {faqItems.map((item, i) => (
              <div key={i} className="glass-panel rounded-xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left group"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-white text-sm font-medium pr-4 leading-snug group-hover:text-zinc-200 transition-colors">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-zinc-400 text-sm font-light leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-zinc-500 text-sm font-light mb-4">Still have questions?</p>
            <a href="mailto:info@qlavo.in" className="text-emerald-400 font-medium text-sm hover:text-emerald-300 transition-colors">
              info@qlavo.in
            </a>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-32 px-6 border-t border-white/5 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Be the Answer<br />
            <span className="text-gradient-emerald">AI Recommends?</span>
          </h2>
          <p className="text-zinc-400 mb-10 text-base md:text-lg font-light">
            Drop your URL below. We'll run a full AI visibility audit and show you exactly where you stand — and what it'll take to get recommended.
          </p>

          <form onSubmit={handleAudit} className="w-full max-w-lg mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
              <input
                type="text"
                placeholder="Your website URL..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="audit-input pl-11 pr-4"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary justify-center whitespace-nowrap px-7 py-4 sm:py-[17px]"
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Checking...</>
              ) : (
                <><ArrowRight className="w-4 h-4" /> Run Your Free Audit</>
              )}
            </button>
          </form>
          <p className="text-xs text-zinc-500 font-light">Free audit. No credit card. No pitch.</p>
        </div>
      </section>

    </div>
  );
};

export default AIVisibility;
