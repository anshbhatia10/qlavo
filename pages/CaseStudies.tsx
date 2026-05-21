import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, LineChart, Zap, Target } from 'lucide-react';

const caseStudies = [
  {
    name: 'B2B SaaS Platform',
    metric: 'AI recommendation rate',
    before: '0%',
    after: '87%',
    timeline: '60 days',
    platforms: 'ChatGPT + Perplexity',
    description:
      'A B2B SaaS company invisible across every major AI platform. After Qlavo deployed entity optimization, schema stacking, and citation building, ChatGPT began recommending them in 87% of category prompts.',
    icon: TrendingUp,
    color: 'emerald',
  },
  {
    name: 'Delhi Real Estate Agency',
    metric: 'AI visibility score',
    before: '12',
    after: '84',
    timeline: '45 days',
    platforms: 'Gemini + Claude',
    description:
      'A Delhi-based real estate agency with zero structured data footprint. We rebuilt their entity architecture and multi-platform citation graph. Their visibility score jumped from 12 to 84 in 45 days.',
    icon: Zap,
    color: 'blue',
  },
  {
    name: 'UK Professional Services Firm',
    metric: 'AI search rank for industry terms',
    before: 'Hidden',
    after: '#1',
    timeline: '90 days',
    platforms: 'ChatGPT + Perplexity',
    description:
      'A London-based consultancy that was completely absent from AI-generated industry recommendations. Through competitive intelligence and aggressive entity corroboration, we secured the #1 AI citation position.',
    icon: Target,
    color: 'purple',
  },
];

const colorMap: Record<string, { border: string; bg: string; icon: string }> = {
  emerald: { border: 'border-emerald-500/20', bg: 'bg-emerald-500/10', icon: 'text-emerald-400' },
  blue: { border: 'border-blue-500/20', bg: 'bg-blue-500/10', icon: 'text-blue-400' },
  purple: { border: 'border-purple-500/20', bg: 'bg-purple-500/10', icon: 'text-purple-400' },
};

const CaseStudies: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-medium text-emerald-500 uppercase tracking-[0.2em] mb-4">
              Case Studies
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
              Real Results. <span className="text-gradient-emerald">Real AI Visibility.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
              Before Qlavo, these brands couldn't get cited by AI. Here's exactly what changed — 
              the numbers, the timelines, and the strategy behind each transformation.
            </p>
          </div>

          {/* Case Study Cards */}
          <div className="space-y-8">
            {caseStudies.map((cs, i) => {
              const colors = colorMap[cs.color] || colorMap.emerald;
              return (
                <div
                  key={cs.name}
                  className="bento-card p-8 md:p-10 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
                >
                  {/* Left: Company Info + Stats */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-full ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                        <cs.icon className={`w-5 h-5 ${colors.icon}`} />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">
                          Case Study 0{i + 1}
                        </span>
                        <h2 className="text-2xl font-semibold text-white">{cs.name}</h2>
                      </div>
                    </div>

                    <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
                      {cs.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {cs.timeline}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-400">
                        {cs.platforms}
                      </span>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                    >
                      Get this result for your business <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Right: Before / After */}
                  <div className="lg:col-span-2">
                    <div className="glass-panel rounded-2xl border border-white/5 p-6">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-500 font-mono mb-4 text-center">
                        {cs.metric}
                      </p>
                      <div className="flex items-center justify-center gap-6">
                        <div className="text-center">
                          <p className="text-[10px] uppercase tracking-wider text-red-400/60 mb-1">Before</p>
                          <p className="text-3xl md:text-4xl font-bold text-red-400/80 tracking-tight">
                            {cs.before}
                          </p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <LineChart className="w-5 h-5 text-emerald-500" />
                          <span className="text-[10px] text-zinc-600 font-mono">→</span>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] uppercase tracking-wider text-emerald-400/80 mb-1">After</p>
                          <p className="text-3xl md:text-4xl font-bold text-emerald-400 tracking-tight">
                            {cs.after}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 text-center border-t border-white/5 bg-zinc-900/20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Ready to see your results?
          </h2>
          <p className="text-zinc-400 text-lg font-light mb-8 max-w-xl mx-auto">
            Run your free AI visibility audit and find out exactly where you stand — in under 60 seconds.
          </p>
          <Link
            to="/geo-calculator"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05]"
          >
            Run Your Free Audit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
