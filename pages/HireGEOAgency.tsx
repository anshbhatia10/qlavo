import React from 'react';
import SEOMeta from '../components/SEOMeta';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, HelpCircle } from 'lucide-react';

const tiers = [
  { name: 'GEO Essentials', price: '£2,000', period: '/mo' },
  { name: 'GEO Growth', price: '£3,500', period: '/mo' },
  { name: 'GEO Enterprise', price: '£5,000', period: '/mo+' },
];

const HireGEOAgency: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <SEOMeta
        title="Hire a GEO Agency — Who to Hire to Get Cited on ChatGPT | Qlavo"
        description="SEO ranks pages. GEO gets you cited in ChatGPT, Gemini, and Perplexity. Qlavo is a worldwide B2B GEO retainer agency — HQ New Delhi. Plans from £2,000/mo. Book an audit."
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
              'SEO ranks pages. GEO gets you cited in ChatGPT, Gemini, and Perplexity. Qlavo runs worldwide B2B GEO retainers from HQ in New Delhi.',
            isPartOf: { '@type': 'WebSite', name: 'Qlavo', url: 'https://qlavo.in' },
            about: { '@id': 'https://qlavo.in#organization' },
          }),
        }}
      />

      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium text-emerald-500 uppercase tracking-[0.2em] mb-4">
            Worldwide B2B retainers
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6 leading-tight">
            Hire a GEO agency to get cited on ChatGPT
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">
            SEO ranks pages on Google. GEO (generative engine optimization) is the work that gets your brand named in AI answers. If you want ChatGPT, Gemini, or Perplexity to cite you, hire a GEO retainer — not a traditional SEO shop that swapped the acronym. Qlavo is a worldwide B2B GEO agency, founded in 2025 by Ansh Bhatia, headquartered in New Delhi. We take retainers from companies hiring in the US, UK, EU, and Gulf. Published plans: £2,000, £3,500, and £5,000+/mo.
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
                'Do not hire anyone selling guaranteed ChatGPT placements. There is no paid slot. Anyone promising a citation count on a deadline is selling theatre.',
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
              Honest GBP pricing (from our live plans)
            </h2>
            <p className="text-zinc-400 font-light mb-8">
              These are the three GEO retainers already published on /pricing. We are not inventing a fourth number here.
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
                    Full plan details →
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-zinc-600 mt-6 font-mono">
              All prices exclude VAT. Minimum 3-month commitment on published GEO plans.
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
                a: 'Yes. Qlavo is set up as a worldwide B2B retainer, not a walk-in Delhi shop. New Delhi is headquarters. Buyers in the US, UK, EU, and Gulf hire remotely. We also keep a real Delhi page for the local query we already own.',
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
            Start with an audit, then hire if it fits.
          </h2>
          <p className="text-zinc-400 text-lg font-light mb-8 max-w-xl mx-auto">
            Free scan on the calculator, or a 30-minute discovery call. Public email:{' '}
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
              to="/geo-calculator"
              className="inline-flex items-center gap-2 px-10 py-4 border border-white/15 text-white rounded-full hover:bg-white/5"
            >
              Run a free audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HireGEOAgency;
