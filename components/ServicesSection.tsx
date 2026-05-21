import React from 'react';
import { ArrowRight, Search, FileText, Zap, Clock, MessageSquare, TrendingUp, BarChart3, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  return (
    <>
      {/* DATA — The market shift */}
      <section className="bg-black border-y border-white/5 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">The Shift</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 tracking-tight">
              Search is changing. <span className="text-gradient-emerald">Fast.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.value}
                  className="bento-card p-8 md:p-10 text-center flex flex-col items-center gap-5"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="stat-number mb-2">{stat.value}</p>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-[20ch] mx-auto">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE DO — GEO (single service, naturally) */}
      <section id="services" className="py-28 md:py-36 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-glow-emerald opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="text-center mb-16 md:mb-20">
            <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">What We Do</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight">
              Generative Engine <span className="text-gradient-emerald">Optimization</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg font-light mt-4 max-w-2xl mx-auto">
              When someone asks ChatGPT, Gemini, or Perplexity to recommend a business like yours — do you show up? 
              We make sure AI recommends you first.
            </p>
          </div>

          {/* GEO Deep Dive */}
          <div className="max-w-4xl mx-auto">
            <div className="bento-card p-8 md:p-12 relative">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="flex-1">
                  <div className="p-3 bg-emerald-500/10 rounded-xl w-fit mb-5">
                    <MessageSquare className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight leading-tight">
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
                    <p className="text-3xl font-bold text-gradient-emerald">100M+</p>
                    <p className="text-xs text-zinc-500 mt-1 max-w-[16ch]">people search with AI every day</p>
                  </div>
                  <div className="w-12 h-px bg-white/5" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">40+</p>
                    <p className="text-xs text-zinc-500 mt-1 max-w-[16ch]">platforms we audit and optimize across</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works — 4 Steps */}
          <div className="mt-28 pt-20 border-t border-white/5">
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">How It Works</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mt-4 tracking-tight">
                From invisible to <span className="text-gradient-emerald">AI-recommended</span>.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="text-center group p-6 bg-zinc-900/40 border border-white/5 rounded-2xl hover:border-emerald-500/20 transition-all duration-300">
                    <div className="mx-auto w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <span className="text-4xl font-thin text-zinc-800 block mb-4">{item.step}</span>
                    <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Card */}
          <div className="mt-28 p-8 md:p-14 relative overflow-hidden rounded-[28px] border border-white/5 bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-xl text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-glow-emerald opacity-10 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
                The businesses that act now will own AI search.
              </h3>
              <p className="text-zinc-400 text-base md:text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed">
                Every month you wait, more competitors get visible. Let's make sure you're ahead — not catching up.
              </p>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold hover:brightness-110 transition-all"
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
