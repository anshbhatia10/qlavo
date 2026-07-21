import React from 'react';
import { ArrowRight, Search, FileText, Zap, Clock, MessageSquare, TrendingUp, BarChart3, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const stats = [
  {
    value: '3 in 4',
    label: 'consumers now use AI assistants to research before buying',
    icon: TrendingUp,
  },
  {
    value: '25%',
    label: 'search volume drop predicted by 2026 as users turn to AI-powered answers',
    icon: BarChart3,
  },
  {
    value: '40+',
    label: 'brands audited for AI visibility',
    icon: Cpu,
  },
];

const ServicesSection: React.FC = () => {
  useScrollReveal();

  return (
    <>
      {/* DATA — The market shift */}
      <section className="bg-[#030303] border-y border-white/5 py-20 md:py-28 relative overflow-hidden">
        {/* Subtle grid bg */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14 reveal">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 uppercase tracking-[0.25em] mb-4">
              <span className="w-6 h-px bg-emerald-400/40" />
              The Shift
              <span className="w-6 h-px bg-emerald-400/40" />
            </span>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 tracking-tight">
              Search is changing. <span className="text-gradient-emerald">Fast.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.value}
                  className={`bento-card p-8 md:p-10 text-center flex flex-col items-center gap-5 group cursor-default reveal-scale`}
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-500">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="stat-number mb-3">{stat.value}</p>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-[20ch] mx-auto">
                      {stat.label}
                    </p>
                  </div>
                  {/* Hover glow line */}
                  <div className="w-0 h-[2px] bg-emerald-400/40 rounded-full group-hover:w-16 transition-all duration-500" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE DO — GEO */}
      <section id="services" className="py-28 md:py-36 bg-[#030303] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-glow-emerald opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/3 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="text-center mb-16 md:mb-20 reveal">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 uppercase tracking-[0.25em] mb-4">
              <span className="w-6 h-px bg-emerald-400/40" />
              What We Do
              <span className="w-6 h-px bg-emerald-400/40" />
            </span>
            <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight">
              Generative Engine <span className="text-gradient-emerald">Optimization</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg font-light mt-4 max-w-2xl mx-auto">
              When someone asks ChatGPT, Gemini, or Perplexity to recommend a business like yours — do you show up?
              We make sure AI recommends you first.
            </p>
          </div>

          {/* GEO Deep Dive */}
          <div className="max-w-4xl mx-auto reveal">
            <div className="bento-card p-8 md:p-12 relative gradient-border">
              {/* Shimmer overlay */}
              <div className="absolute inset-0 shimmer rounded-[20px] pointer-events-none" />

              <div className="flex flex-col md:flex-row gap-8 md:gap-12 relative z-10">
                <div className="flex-1">
                  <div className="p-3 bg-emerald-500/10 rounded-xl w-fit mb-5">
                    <MessageSquare className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="font-grotesk text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight leading-tight">
                    Get found in AI answers.<br />Not just Google.
                  </h3>
                  <p className="text-zinc-400 font-light leading-relaxed mb-6">
                    GEO is the practice of optimizing your brand so AI assistants cite you in their responses.
                    It's not about keywords and backlinks — it's about entity authority, structured data,
                    and consistency across every platform AI trusts.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {[
                      'Entity authority across 40+ platforms (LinkedIn, Crunchbase, and more)',
                      'Structured data and schema markup AI can actually parse',
                      'Content strategy optimized for citation, not just clicks',
                      'Monthly AI visibility tracking with real benchmarks'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/ai-visibility"
                    className="inline-flex items-center gap-2 text-emerald-400 font-medium text-sm hover:text-emerald-300 transition-colors group"
                  >
                    Learn how GEO works <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="hidden md:flex flex-col justify-center items-center gap-6 shrink-0 border-l border-white/5 pl-10">
                  <div className="text-center">
                    <p className="font-grotesk text-4xl font-bold text-gradient-emerald">100M+</p>
                    <p className="text-xs text-zinc-500 mt-2 max-w-[16ch]">people search with AI every day</p>
                  </div>
                  <div className="w-12 h-px bg-white/10" />
                  <div className="text-center">
                    <p className="font-grotesk text-4xl font-bold text-white">40+</p>
                    <p className="text-xs text-zinc-500 mt-2 max-w-[16ch]">platforms we audit and optimize across</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works — 4 Steps */}
          <div className="mt-28 pt-20 border-t border-white/5">
            <div className="text-center mb-16 reveal">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 uppercase tracking-[0.25em] mb-4">
                <span className="w-6 h-px bg-emerald-400/40" />
                How It Works
                <span className="w-6 h-px bg-emerald-400/40" />
              </span>
              <h3 className="font-grotesk text-3xl md:text-4xl font-bold text-white mt-4 tracking-tight">
                From invisible to <span className="text-gradient-emerald">AI-recommended</span>.
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {[
                {
                  icon: Search,
                  step: '01',
                  title: 'Audit',
                  desc: 'We scan every major AI platform to see where you stand. Baseline score. Gap analysis. Competitor comparison.'
                },
                {
                  icon: FileText,
                  step: '02',
                  title: 'Structure',
                  desc: 'We fix your entity signals — schema markup, structured data, citation consistency across the web.'
                },
                {
                  icon: Zap,
                  step: '03',
                  title: 'Build',
                  desc: 'We create and optimize the content, profiles, and references AI trusts enough to cite.'
                },
                {
                  icon: Clock,
                  step: '04',
                  title: 'Monitor',
                  desc: 'Monthly re-scans. Real numbers. You see exactly which citations are improving and where to double down.'
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className={`bento-card text-center group p-6 cursor-default reveal`}
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div className="mx-auto w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-500">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <span className="font-grotesk text-5xl font-thin text-zinc-800 block mb-4 group-hover:text-emerald-500/20 transition-colors duration-500">
                      {item.step}
                    </span>
                    <h4 className="font-grotesk text-lg font-semibold text-white mb-3">{item.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Card */}
          <div className="mt-28 p-8 md:p-14 relative overflow-hidden rounded-[28px] gradient-border bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-xl text-center reveal-scale">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-glow-emerald opacity-15 pointer-events-none" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <h3 className="font-grotesk text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
                The businesses that act now will own AI search.
              </h3>
              <p className="text-zinc-400 text-base md:text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed">
                Every month you wait, more competitors get visible. Let's make sure you're ahead — not catching up.
              </p>
              <Link
                to="/geo-calculator"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold"
              >
                Get Your Free Audit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ServicesSection;
