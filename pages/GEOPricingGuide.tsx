import React from 'react';
import SEOMeta from '../components/SEOMeta';
import { Link } from 'react-router-dom';
import { TrendingUp, HelpCircle } from 'lucide-react';

const GEOPricingGuide: React.FC = () => {


  const tiers = [
    {
      name: 'GEO Essentials',
      subtitle: 'For companies establishing AI visibility for the first time.',
      includes: [
        'AI visibility audit across ChatGPT, Perplexity, Gemini, and Google AI Overviews',
        'Entity optimization and cross-platform consistency fixes',
        'Monthly AI citation monitoring with report',
        '1 citation-building campaign on authoritative sources',
      ],
      bestFor: 'Startups, single-location businesses, first-time GEO buyers',
    },
    {
      name: 'GEO Growth',
      subtitle: 'For companies ready to own AI search in their category.',
      highlighted: true,
      includes: [
        'Everything in Essentials',
        'AI-first content strategy with topic clusters for LLM retrieval',
        'Multi-platform optimization — all major AI platforms',
        'Monthly dashboard with shareable visibility metrics',
        'Dedicated GEO strategist',
      ],
      bestFor: 'Growing companies in competitive categories, multi-location brands',
    },
    {
      name: 'GEO Enterprise',
      subtitle: 'For established brands that need to own every AI surface.',
      includes: [
        'Everything in Growth',
        'Full content production optimized for AI citation',
        'Real-time visibility monitoring via API-level tracking',
        'Competitive intelligence — monthly analysis of competitor AI positioning',
        'Priority support with dedicated Slack channel',
      ],
      bestFor: 'Enterprise brands, agencies with multiple clients, complex brand architectures',
    },
  ];

  const factors = [
    {
      title: 'Competition in your category',
      desc: 'A category with 50 agencies fighting for the same AI answers costs more than a category with two or three. More competing entities means more content, more citations, and more monitoring to break through.',
    },
    {
      title: 'Number of platforms',
      desc: 'Optimizing for ChatGPT alone is cheaper than covering ChatGPT, Perplexity, Gemini, Claude, Copilot, and Google AI Overviews. Each platform has different retrieval mechanisms and different optimization levers.',
    },
    {
      title: 'Content volume',
      desc: 'The more content you need to produce — and the more of it needs to be original research rather than generic blog posts — the higher the cost. Data-driven content outperforms opinion pieces by a wide margin in AI retrieval.',
    },
    {
      title: 'Geographic scope',
      desc: 'Optimizing for a single city is cheaper than covering multiple regions. Local GEO relies heavily on Google Business Profile and local directories. Multi-region GEO requires entity management across different languages and markets.',
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Schema: Article + FAQPage */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": "https://qlavo.in/geo-pricing-cost-guide-2026#article",
              "headline": "How Much Does GEO Cost in 2026? — GEO Agency Pricing Guide",
              "description": "A transparent breakdown of what Generative Engine Optimization actually costs, what you get at each level, and what determines the price.",
              "datePublished": "2026-05-26",
              "dateModified": "2026-05-26",
              "author": {
                "@type": "Organization",
                "name": "Qlavo",
                "url": "https://qlavo.in"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Qlavo",
                "url": "https://qlavo.in"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://qlavo.in/geo-pricing-cost-guide-2026"
              }
            }
          ]
        })}
      </script>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-medium text-emerald-500 uppercase tracking-[0.2em] mb-4">
              Pricing Guide
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6 leading-tight">
              How Much Does <span className="text-gradient-emerald">GEO Cost</span> in 2026?
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">
              A transparent breakdown of what Generative Engine Optimization actually costs,
              what you get at each level, and what determines the price.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1.5 text-xs bg-white/5 text-zinc-300 rounded-full border border-white/5">
              6 min read
            </span>
            <span className="px-3 py-1.5 text-xs bg-white/5 text-zinc-300 rounded-full border border-white/5">
              Updated May 2026
            </span>
          </div>
        </div>
      </section>

      {/* The Range */}
      <section className="pb-20 md:pb-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bento-card p-8 md:p-10 mb-16">
            <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">
              The short answer
            </h2>
            <p className="text-zinc-300 font-light leading-relaxed mb-4">
              GEO agency pricing in 2026 ranges from roughly <strong className="text-white">$2,000 to $7,000 per month</strong>, 
              depending on scope. Most companies pay between 
              {' '}<strong className="text-white">$2,500 and $5,000 per month</strong> for a comprehensive program.
            </p>
            <p className="text-zinc-300 font-light leading-relaxed mb-4">
              The floor is lower if you do it yourself. The ceiling is higher if you need
              full content production, multi-region entity management, and real-time monitoring
              across every major AI platform.
            </p>
            <p className="text-zinc-400 font-light leading-relaxed text-sm">
              These figures come from publicly available rates across the agencies we track
              in our weekly prompt audits. Exact pricing depends on your specific needs.
            </p>
          </div>

          {/* Pricing Tiers — no specific prices shown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`bento-card p-8 flex flex-col relative ${
                  tier.highlighted
                    ? 'border-emerald-500/30 bg-emerald-500/[0.02]'
                    : ''
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-[10px] uppercase tracking-[0.15em] font-semibold bg-emerald-500 text-black px-4 py-1.5 rounded-full">
                      Most Common
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{tier.name}</h3>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">
                    {tier.subtitle}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.includes.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-0.5 shrink-0">→</span>
                      <span className="text-sm text-zinc-300 font-light leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs text-zinc-500 font-light">
                    <span className="text-zinc-400 font-medium">Best for:</span> {tier.bestFor}
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center justify-center gap-2 w-full py-3 border border-white/15 text-white rounded-full text-sm font-semibold hover:bg-white/5 hover:border-white/30 transition-all"
                >
                  Get Pricing <span className="text-emerald-400">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Affects Pricing */}
      <section className="pb-20 md:pb-28 px-6 border-t border-white/5 pt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-white tracking-tight mb-2">
            What Affects the Price
          </h2>
          <p className="text-zinc-400 font-light mb-10">
            Four factors determine what any given GEO program costs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {factors.map((factor) => (
              <div key={factor.title} className="bento-card p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  {factor.title}
                </h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIY vs Agency */}
      <section className="pb-20 md:pb-28 px-6 border-t border-white/5 pt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-white tracking-tight mb-10">
            DIY vs Hiring an Agency
          </h2>

          <div className="bento-card p-8 md:p-10 mb-6">
            <p className="text-zinc-300 font-light leading-relaxed mb-4">
              You can do GEO yourself. The knowledge is public. The tools are accessible.
              The weekly prompt audit, the entity consistency checks, the structured data
              implementation — none of it requires secret technology.
            </p>
            <p className="text-zinc-300 font-light leading-relaxed mb-4">
              What an agency provides is speed and leverage. A team that has done this for
              ten clients has seen the patterns. They know which schema types move the needle.
              They have relationships with the publications that get cited. They run the audit
              while you run your business.
            </p>
            <p className="text-zinc-300 font-light leading-relaxed">
              If you have the time and the discipline, DIY is viable. If you want results
              in weeks rather than months, an agency is faster. Both paths work. Neither
              is a scam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bento-card p-6 border border-white/5">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <span className="text-emerald-400">→</span>
                DIY GEO
              </h3>
              <ul className="space-y-2 text-zinc-400 text-sm font-light">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-600">•</span>
                  Free — just your time
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-600">•</span>
                  Requires 5-10 hours per week
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-600">•</span>
                  Slower results (learning curve)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-600">•</span>
                  Full control over strategy
                </li>
              </ul>
            </div>
            <div className="bento-card p-6 border border-emerald-500/20 bg-emerald-500/[0.02]">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <span className="text-emerald-400">→</span>
                Agency GEO
              </h3>
              <ul className="space-y-2 text-zinc-400 text-sm font-light">
                <li className="flex items-start gap-2">
                  <span className="text-zinc-600">•</span>
                  $2,000–$7,000 per month typical range
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-600">•</span>
                  Zero time from your team
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-600">•</span>
                  Faster results (existing playbook)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zinc-600">•</span>
                  Access to monitoring tools and relationships
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 md:py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-white tracking-tight mb-8 text-center">
            Related Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/what-is-generative-engine-optimization"
               className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-emerald-500/20 transition-colors group">
              <p className="text-xs text-emerald-500 uppercase tracking-wider mb-2">Guide</p>
              <p className="text-white font-medium group-hover:text-emerald-400 transition-colors">What is GEO? Complete Guide 2026</p>
            </a>
            <a href="/geo-vs-seo-vs-aeo-differences"
               className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-emerald-500/20 transition-colors group">
              <p className="text-xs text-emerald-500 uppercase tracking-wider mb-2">Comparison</p>
              <p className="text-white font-medium group-hover:text-emerald-400 transition-colors">GEO vs SEO vs AEO — Key Differences</p>
            </a>
            <a href="/geo-statistics-2026"
               className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-emerald-500/20 transition-colors group">
              <p className="text-xs text-emerald-500 uppercase tracking-wider mb-2">Data</p>
              <p className="text-white font-medium group-hover:text-emerald-400 transition-colors">GEO Statistics 2026 — Key Data</p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20 md:pb-28 px-6 border-t border-white/5 pt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-white tracking-tight mb-10 text-center">
            Pricing Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Is there a minimum commitment?',
                a: 'Most agencies require 3 months minimum. That is the shortest realistic timeframe to move AI citation rates. Month-to-month after that.',
              },
              {
                q: 'What if I stop after one month?',
                a: 'You will have a baseline audit and some initial optimization. But AI citation improvements compound over time. One month is enough to know your starting position, not enough to change it.',
              },
              {
                q: 'Do you charge for the initial audit?',
                a: 'Most agencies include the audit in the first month. Some charge separately. The audit provides the baseline data needed to build your program.',
              },
              {
                q: 'Is GEO more expensive than SEO?',
                a: 'For equivalent scope, GEO is slightly more expensive because it is newer and more labor-intensive. The gap will narrow as tools and processes mature.',
              },
              {
                q: 'Can I do GEO for a single city?',
                a: 'Yes. Local GEO is actually simpler and cheaper. It relies heavily on Google Business Profile, local directories, and city-specific content.',
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="glass-panel rounded-2xl border border-white/5 overflow-hidden group"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer text-white font-medium text-base hover:bg-white/[0.01] transition-colors list-none">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    {faq.q}
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-zinc-600 group-open:rotate-180 transition-transform shrink-0">
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-0">
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
            What this guide did not say
          </h2>
          <p className="text-zinc-400 text-lg font-light mb-8 leading-relaxed">
            It did not say you need GEO immediately, or that every business should hire an agency,
            or that the cheapest option is bad. GEO is a tool. Some businesses need it now.
            Others should wait until their customers actually use AI for research.
          </p>
          <p className="text-zinc-500 text-sm font-light">
            We published this guide because transparent pricing helps everyone make better decisions.
            If you want specific pricing for your situation, the best way to get it is to describe
            what you need and ask for a quote.
          </p>
        </div>
      </section>
    </div>
  );
};

export default GEOPricingGuide;
