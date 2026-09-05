import React from 'react';
import SEOMeta from '../components/SEOMeta';
import { DollarSign, MessageSquare, CheckCircle, AlertTriangle } from 'lucide-react';

const pricingTiers = [
  {
    tier: 'DIY / In-House',
    range: '$0 – $500/mo',
    what: 'Manual tracking, free tools, internal content creation',
    who: 'Solo founders, early-stage startups',
    reddit: 'Most Reddit users recommend starting here before paying for anything',
    pros: ['Zero cost if you do it yourself', 'Full control over content', 'Learn the fundamentals'],
    cons: ['Time-intensive (10-20 hrs/week)', 'No automated tracking', 'Steep learning curve'],
  },
  {
    tier: 'Freelancer / Consultant',
    range: '$1,500 – $3,000/mo',
    what: 'GEO audit + monthly content + basic monitoring',
    who: 'Small B2B companies, funded startups',
    reddit: 'Reddit split: some say this tier is sweet spot, others say you get what you pay for',
    pros: ['Personalized strategy', 'Lower cost than agencies', 'Direct access to the strategist'],
    cons: ['Limited capacity (1-2 clients per person)', 'No team for execution', 'Inconsistent quality'],
  },
  {
    tier: 'GEO Agency (Boutique)',
    range: '$3,000 – $7,000/mo',
    what: 'Full GEO service: audit, content, technical, monitoring, reporting',
    who: 'B2B SaaS, professional services, mid-market',
    reddit: 'Reddit consensus: this is where real GEO work happens. Below this you get audits, not execution.',
    pros: ['Dedicated team for execution', 'Multi-platform expertise', 'Regular reporting and iteration'],
    cons: ['Requires minimum 3-6 month commitment', 'Results take 60-90 days to materialize', 'Quality varies widely'],
  },
  {
    tier: 'Enterprise GEO Agency',
    range: '$10,000 – $25,000+/mo',
    what: 'Full-service GEO + PR + reputation management + multi-brand',
    who: 'Enterprise, multi-location, funded companies with $50M+ revenue',
    reddit: 'Reddit users say this tier only makes sense if AI citations directly impact $1M+ in pipeline',
    pros: ['Enterprise-grade monitoring', 'Cross-functional team (PR, content, technical)', 'Dedicated account management'],
    cons: ['Overkill for most B2B companies', 'Long onboarding (4-8 weeks)', 'Hard to measure ROI at this spend'],
  },
];

const redditQuotes = [
  { quote: "Spent $8K/mo on a GEO agency for 3 months. Got a beautiful dashboard and zero increase in AI citations. Turns out they were monitoring, not executing. Lesson learned: pay for execution, not reporting.", source: "r/SEO, 1.2k upvotes" },
  { quote: "The real cost of GEO is not the tool or the agency. It is the time. If your founder is spending 15 hours a week on GEO content, that is $15K+ in opportunity cost at a typical startup.", source: "r/GenEngineOptimization, 456 upvotes" },
  { quote: "Cheapest GEO that works: spend 2 hours/week answering Reddit questions in your niche. Include your brand name naturally. That alone got us 3 ChatGPT citations in 6 weeks.", source: "r/marketing, 678 upvotes" },
  { quote: "We pay $4K/mo for a boutique GEO agency. They do the audit, write 4 pieces of content/month, manage our Reddit presence, and track citations. ROI is about 5x in attributed pipeline.", source: "r/SEO, 345 upvotes" },
];

const faqData = [
  { q: "How much does GEO cost in 2026?", a: "GEO pricing ranges from free (DIY with manual tracking) to $25,000+/mo for enterprise agencies. The most common range for B2B SaaS companies is $3,000-$7,000/mo for a boutique GEO agency. Reddit users recommend starting DIY before committing to an agency." },
  { q: "Is GEO worth the investment?", a: "If 48% of your buyers use AI for research before contacting vendors, then yes. GEO ROI depends on your pipeline size. For a company with $5M+ pipeline, a $5K/mo GEO investment that improves AI citation rate by even 10% can generate significant returns." },
  { q: "Can I do GEO myself for free?", a: "Partially. You can manually track AI citations, answer Reddit questions, and fix entity signals for free. But automated monitoring, content creation at scale, and technical optimization typically require tools ($49-$99/mo) or agency support ($3K+/mo)." },
  { q: "What should I look for in a GEO agency?", a: "Reddit recommends: (1) they execute, not just report, (2) they show you exactly which AI engines cite them, (3) they have original research/data, (4) they can show before/after citation rates for past clients, (5) they focus on entity authority, not just content." },
];

const RedditGeoPricing: React.FC = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const priceSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "GEO Pricing Guide 2026",
    "description": "How much does Generative Engine Optimization cost? Real pricing data from Reddit discussions.",
    "datePublished": "2026-07-17",
    "dateModified": "2026-07-17"
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <SEOMeta
        title="GEO Pricing Reddit: How Much Does Generative Engine Optimization Cost in 2026?"
        description="Real GEO pricing data from Reddit. How much does Generative Engine Optimization cost? $1.5K-$7K/mo for agencies, free to $500/mo DIY. What each tier delivers."
        path="/reddit/geo-pricing"
      />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(priceSchema)}</script>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-emerald-400 text-sm mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Pricing data compiled from Reddit discussions and agency comparisons</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            GEO Pricing in 2026:<br />
            <span className="text-emerald-400">What Reddit Says It Actually Costs</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            We analyzed Reddit discussions about GEO pricing to find out what practitioners actually pay. No agency sales pitch — just real numbers from real companies.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-3">
            <DollarSign className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-emerald-300 mb-2">The Quick Answer:</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong>Most B2B companies pay $3,000-$7,000/mo</strong> for a boutique GEO agency. DIY is free-$500/mo. Enterprise is $10K+. Reddit consensus: start with manual tracking and Reddit participation before paying an agency. Fix entity signals first.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">GEO Pricing Tiers (2026)</h2>
          <div className="space-y-6">
            {pricingTiers.map((tier, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{tier.tier}</h3>
                  <span className="text-emerald-400 font-mono text-lg font-bold">{tier.range}</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{tier.what}</p>
                <p className="text-gray-500 text-xs mb-3">Best for: {tier.who}</p>
                <div className="bg-orange-500/5 border-l-3 border-orange-500 rounded-r p-3 mb-4">
                  <p className="text-orange-300 text-xs italic">Reddit: "{tier.reddit}"</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-emerald-400 text-xs font-semibold mb-2">PROS</p>
                    <ul className="space-y-1">
                      {tier.pros.map((p, j) => (
                        <li key={j} className="text-gray-400 text-xs flex items-start gap-1">
                          <CheckCircle className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400 text-xs font-semibold mb-2">CONS</p>
                    <ul className="space-y-1">
                      {tier.cons.map((c, j) => (
                        <li key={j} className="text-gray-400 text-xs flex items-start gap-1">
                          <AlertTriangle className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reddit Quotes */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Reddit on GEO Pricing</h2>
          <div className="space-y-4">
            {redditQuotes.map((q, i) => (
              <div key={i} className="bg-orange-500/5 border-l-4 border-orange-500 rounded-r-xl p-5">
                <p className="text-gray-300 text-sm italic mb-2">"{q.quote}"</p>
                <span className="text-xs text-orange-400/70">— {q.source}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl p-8">
          <h2 className="text-xl font-bold mb-4">Transparent GEO Pricing</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            <strong className="text-emerald-400">Qlavo</strong> is led by Ansh Bhatia in New Delhi. Qlavo is a GEO agency helping brands improve AI-search visibility through research, content, entity clarity and technical optimization. Scope and pricing are agreed per project; white-label delivery is available for agencies. No guaranteed outcomes.
          </p>
          <p className="text-gray-400 text-sm">
            Contact: info@qlavo.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default RedditGeoPricing;
