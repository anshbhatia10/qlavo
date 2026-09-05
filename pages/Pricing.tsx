import React from 'react';
import SEOMeta from '../components/SEOMeta';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, HelpCircle } from 'lucide-react';

const tiers = [
  {
    name: 'Baseline audit',
    price: 'Scoped quote',
    period: '',
    description: 'Understand how your brand appears in a defined sample of AI answers before choosing what to change.',
    features: [
      'Agree target markets, buyer prompts, and AI platforms',
      'Record sampled answers, brand mentions, and available source links',
      'Review website accessibility, entity consistency, and content gaps',
      'Receive a baseline report with prioritized next steps and limitations',
    ],
    cta: 'Discuss an audit',
    href: '/contact',
    highlighted: false,
  },
  {
    name: 'Implementation',
    price: 'Scoped quote',
    period: '',
    description: 'Turn audit findings into an agreed set of website, content, and entity improvements.',
    features: [
      'Prioritize fixes against your baseline and business goals',
      'Improve agreed pages for clarity, evidence, and buyer questions',
      'Implement appropriate structured data and consistent business details',
      'Check technical accessibility and document the changes delivered',
      'Agree responsibilities, access requirements, and review checkpoints',
    ],
    cta: 'Discuss implementation',
    href: '/contact',
    highlighted: true,
  },
  {
    name: 'Ongoing support',
    price: 'Scoped quote',
    period: '',
    description: 'Review changes over time and decide which improvements to make next.',
    features: [
      'Repeat the agreed prompt sample on a defined reporting cadence',
      'Compare brand mentions and citations with the recorded baseline',
      'Review competitor references and relevant content opportunities',
      'Maintain an agreed backlog of content and technical improvements',
      'Document platform variability and limits of attribution',
    ],
    cta: 'Discuss ongoing support',
    href: '/contact',
    highlighted: false,
  },
];

const faqs = [
  {
    q: "What's the commitment?",
    a: 'Deliverables, timing, fees, billing, and any ongoing terms are agreed in a written scope before work starts. An audit, implementation project, and ongoing support can be scoped separately.',
  },
  {
    q: 'How is pricing determined?',
    a: 'We quote against the number of brands, markets, platforms, prompts, and pages involved, along with implementation complexity and reporting needs. There is no single public price for every business. Agency partner work is a separate white-label service.',
  },
  {
    q: 'What results can I expect?',
    a: 'You receive the deliverables in your agreed scope and evidence of the work completed. AI answers vary by prompt, platform, time, and user context. We do not guarantee rankings, AI recommendations, citation counts, revenue, or a date when visibility will improve.',
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <SEOMeta
        title="GEO Pricing — Scoped Engagements | Qlavo"
        description="Scope-based quotes for baseline audits, GEO implementation, and ongoing support from Qlavo, a worldwide B2B GEO agency headquartered in New Delhi."
        path="/pricing"
      />
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-medium text-emerald-500 uppercase tracking-[0.2em] mb-4">
              Pricing
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
              Clear scope. <span className="text-gradient-emerald">Agreed pricing.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
              GEO engagements built around your business, from an initial baseline to implementation and ongoing support. We agree the work and quote before starting.
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
                      Put findings to work
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
            Fees and terms depend on the agreed scope. For agency delivery, see our{' '}
            <Link to="/partners" className="text-emerald-400 hover:text-emerald-300">white-label partner service</Link>.
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
            Not sure where to start?
          </h2>
          <p className="text-zinc-400 text-lg font-light mb-8 max-w-xl mx-auto">
            Tell us about your business and target buyers. We can discuss whether an audit, implementation project, or ongoing support fits your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05]"
          >
            Discuss your scope <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
