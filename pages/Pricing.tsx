import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, HelpCircle } from 'lucide-react';

const tiers = [
  {
    name: 'GEO Essentials',
    price: '£2,000',
    period: '/mo',
    description: 'Perfect for startups and small businesses establishing AI visibility for the first time.',
    features: [
      'AI visibility audit — full crawl of how ChatGPT, Gemini, and Perplexity see your brand',
      'Entity optimization — structured data, Wikidata linkage, and knowledge graph alignment',
      'Monthly AI monitoring — track your recommendation rate across 4 major AI platforms',
      '1 citation-building campaign — targeted backlinks from GEO-authoritative sources',
    ],
    cta: 'Get Started',
    href: '/contact',
    highlighted: false,
  },
  {
    name: 'GEO Growth',
    price: '£3,500',
    period: '/mo',
    description: 'For growing companies ready to dominate AI search in their category.',
    features: [
      'Everything in Essentials',
      'AI-first content strategy — topic clusters optimized for LLM extraction',
      'Multi-platform optimization — ChatGPT, Perplexity, Gemini, Claude, Copilot',
      'Monthly reporting dashboard — shareable ROI metrics and visibility scores',
      'Dedicated GEO strategist — your point of contact, same person every time',
    ],
    cta: 'Get Started',
    href: '/contact',
    highlighted: true,
  },
  {
    name: 'GEO Enterprise',
    price: '£5,000',
    period: '/mo+',
    description: 'For established brands and agencies that need to own every AI surface.',
    features: [
      'Everything in Growth',
      'Full content production — blog posts, whitepapers, case studies optimized for AI citation',
      'API-level monitoring — real-time visibility tracking via AI platform APIs',
      'Competitive intelligence — monthly analysis of competitor AI positioning and gaps',
      'Priority support — 4-hour response, dedicated Slack channel, quarterly strategy sessions',
    ],
    cta: 'Get Started',
    href: '/contact',
    highlighted: false,
  },
];

const faqs = [
  {
    q: "What's the commitment?",
    a: "All plans require a minimum 3-month commitment — that's the timeframe needed to see meaningful shifts in AI recommendation behavior. After that, you can continue month-to-month or switch to annual billing for a discount. No hidden fees, no complicated exit clauses.",
  },
  {
    q: 'How is pricing determined?',
    a: 'Pricing is based on the scope of your AI visibility needs. Essentials covers foundational setup for single-location businesses. Growth adds content strategy and multi-platform coverage for companies in competitive categories. Enterprise is for organizations with complex brand architectures, multiple entities, or aggressive growth timelines. Every plan starts with a free audit to determine your starting position.',
  },
  {
    q: 'What results can I expect?',
    a: 'Most clients see a measurable improvement in AI citation rates within 60–90 days. Typical outcomes: appearing in ChatGPT recommendations for 3–5 key industry queries, improved entity recognition across all major AI platforms, and a documented increase in referral traffic from AI-powered search. Every plan includes monthly monitoring so you can track progress in real time.',
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-medium text-emerald-500 uppercase tracking-[0.2em] mb-4">
              Pricing
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
              Simple pricing. <span className="text-gradient-emerald">Real results.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
              No retainers. No hidden fees. Just transparent, results-driven GEO 
              packages built around what your brand actually needs to get cited by AI.
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-1">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-zinc-500 text-sm">{tier.period}</span>
                  </div>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-zinc-300 font-light leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={tier.href}
                  className={`inline-flex items-center justify-center gap-2 w-full py-4 rounded-full text-sm font-semibold transition-all ${
                    tier.highlighted
                      ? 'bg-emerald-500 text-black hover:bg-emerald-400 hover:scale-[1.02]'
                      : 'border border-white/15 text-white hover:bg-white/5 hover:border-white/30'
                  }`}
                >
                  {tier.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Fine Print */}
          <p className="text-center text-xs text-zinc-600 mt-6 font-mono">
            All prices exclude VAT. Minimum 3-month commitment. Monthly or annual billing available.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 border-t border-white/5 bg-zinc-900/20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium text-emerald-500 uppercase tracking-[0.2em] mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Questions? We've got <span className="text-gradient-emerald">answers.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="glass-panel rounded-2xl border border-white/5 overflow-hidden group"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer text-white font-medium text-base hover:bg-white/[0.01] transition-colors list-none">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    {faq.q}
                  </span>
                  <span className="text-zinc-600 group-open:rotate-180 transition-transform shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-0">
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 text-center border-t border-white/5 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Not sure which tier fits?
          </h2>
          <p className="text-zinc-400 text-lg font-light mb-8 max-w-xl mx-auto">
            We'll run a free AI visibility audit and recommend the right plan — no pitch, no pressure.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05]"
          >
            Book a Free Audit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
