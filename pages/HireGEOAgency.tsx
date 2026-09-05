import React from 'react';
import SEOMeta from '../components/SEOMeta';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, HelpCircle } from 'lucide-react';

const tiers = [
  { name: 'Baseline audit', price: 'Scoped quote', period: '' },
  { name: 'Implementation', price: 'Scoped quote', period: '' },
  { name: 'Ongoing support', price: 'Scoped quote', period: '' },
];

const HireGEOAgency: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <SEOMeta
        title="Hire a GEO Agency — Who to Hire to Get Cited on ChatGPT | Qlavo"
        description="Hire Qlavo, a worldwide B2B GEO agency headquartered in New Delhi, for scoped AI visibility audits, implementation, and ongoing support."
        path="/hire-geo-agency"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Hire a GEO Agency — Who to Hire to Get Cited on ChatGPT',
            url: 'https://qlavo.in/hire-geo-agency',
            description:
              'Qlavo is a worldwide B2B GEO agency headquartered in New Delhi, offering scoped audits, implementation, and ongoing support.',
            isPartOf: { '@type': 'WebSite', name: 'Qlavo', url: 'https://qlavo.in' },
            about: { '@id': 'https://qlavo.in#organization' },
          }),
        }}
      />

      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium text-emerald-500 uppercase tracking-[0.2em] mb-4">
            Worldwide B2B GEO agency
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6 leading-tight">
            Hire a GEO agency for AI visibility
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">
            GEO (generative engine optimization) focuses on how a brand is represented in AI answers. Qlavo is a worldwide B2B GEO agency, founded in 2025 by Ansh Bhatia and headquartered in New Delhi. We offer baseline audits, implementation, and ongoing support for businesses targeting India, the US, UK, EU, and Gulf. Each engagement starts with an agreed scope and quote.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bento-card p-8">
              <h2 className="text-xl font-semibold text-white mb-3">What SEO actually does</h2>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Search engine optimization is still how you earn blue-link rankings, technical crawl health, and classic organic traffic. It matters. It does not, by itself, make an LLM retrieve your entity when a buyer asks for a recommendation.
              </p>
            </div>
            <div className="bento-card p-8 border-emerald-500/20">
              <h2 className="text-xl font-semibold text-white mb-3">What GEO actually does</h2>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                GEO is entity work: consistent NAP and sameAs, citation-ready pages, third-party mentions, structured data, and prompt monitoring across ChatGPT, Gemini, Perplexity, and AI Overviews. That is who you hire if the brief is “get cited.”
              </p>
            </div>
          </div>

          <div className="bento-card p-8 md:p-10 mb-10">
            <h2 className="text-2xl font-semibold text-white tracking-tight mb-4">
              Who to hire (and who not to)
            </h2>
            <ul className="space-y-3">
              {[
                'Hire a shop that can show a named GEO methodology — entity graph, citation sources, and how they measure AI mention rate — not a renamed content calendar.',
                'Hire worldwide if your buyers are in the US, UK, EU, or Gulf. HQ location is a fact, not a service area limit. Qlavo’s HQ is New Delhi; retainers are B2B and remote.',
                'We do not guarantee rankings, AI recommendations, citation counts, or results on a deadline. Look for defined deliverables and evidence, not placement promises.',
                'Keep Delhi as a local option if that is the query you actually have. We maintain a Delhi GEO page because it is a real HQ and a smaller local market — not because the whole company is a city shop.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-zinc-300 font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white tracking-tight mb-2">
              Scoped GEO engagements
            </h2>
            <p className="text-zinc-400 font-light mb-8">
              Choose a baseline audit, implementation project, or ongoing support. Scope and quote depend on your markets, website, and reporting needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <div key={tier.name} className="bento-card p-6 flex flex-col">
                  <h3 className="text-lg font-semibold text-white mb-1">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-white tracking-tight">{tier.price}</span>
                    <span className="text-zinc-500 text-sm">{tier.period}</span>
                  </div>
                  <Link
                    to="/pricing"
                    className="text-sm text-emerald-400 hover:text-emerald-300 mt-auto"
                  >
                    Engagement details →
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-zinc-600 mt-6 font-mono">
              Deliverables, fees, and terms are agreed before work begins. Agency delivery has a separate{' '}
              <Link to="/partners" className="text-emerald-400 hover:text-emerald-300">white-label partner service</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28 px-6 border-t border-white/5 pt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-white tracking-tight mb-10 text-center">
            Common hire questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Can a Delhi HQ agency run a US or UK GEO retainer?',
                a: 'Yes. Qlavo offers remote GEO engagements for businesses targeting the US, UK, EU, and Gulf, as well as India. New Delhi is our headquarters; serving another market does not mean we have an office there.',
              },
              {
                q: 'Do you have a Dubai office or a US office?',
                a: 'No. Serving a market is not the same as claiming an office there. We do not list a US office or a Dubai office. Gulf and UK are hire markets. HQ is New Delhi, India.',
              },
              {
                q: 'Is GEO the same as SEO?',
                a: 'No. SEO is still how you rank on Google. GEO is how you become a citable entity in generative answers. You usually need both. If the job is ChatGPT citations, GEO is the hire.',
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
                </summary>
                <div className="px-6 pb-5 pt-0">
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 text-center border-t border-white/5 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Start with a conversation about scope.
          </h2>
          <p className="text-zinc-400 text-lg font-light mb-8 max-w-xl mx-auto">
            Discuss your goals on a discovery call, or share your website by email:{' '}
            <a href="mailto:info@qlavo.in" className="text-emerald-400 hover:text-emerald-300">
              info@qlavo.in
            </a>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05]"
            >
              Book a discovery call <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 px-10 py-4 border border-white/15 text-white rounded-full hover:bg-white/5"
            >
              Agency partner service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HireGEOAgency;
