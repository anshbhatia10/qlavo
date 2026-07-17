import React from 'react';
import SEOMeta from '../components/SEOMeta';
import { CheckCircle, XCircle, MessageSquare, TrendingUp, AlertTriangle } from 'lucide-react';

const pros = [
  { point: '48% of B2B buyers use AI for research before contacting vendors', source: 'Multiple sources' },
  { point: 'AI citations compound over time — once cited, you tend to stay cited', source: 'Reddit consensus' },
  { point: 'Early movers have massive advantage — most brands have zero GEO', source: '93% of agencies churn weekly in AI answers' },
  { point: 'GEO overlaps with good content marketing — you are building assets either way', source: 'r/marketing' },
  { point: 'Reddit presence (a GEO tactic) drives both AI citations AND organic traffic', source: 'r/SEO' },
];

const cons = [
  { point: 'Results take 60-90 days minimum — no overnight wins', source: 'Reddit consensus' },
  { point: 'Hard to measure ROI directly — AI citations do not have attribution like Google Ads', source: 'r/SEO' },
  { point: 'Most GEO tools and agencies are overpriced for what they deliver', source: 'r/marketing' },
  { point: 'If your ICP does not use AI for research, GEO is a waste of money', source: 'r/GenEngineOptimization' },
  { point: 'AI search is still <5% of total B2B discovery — premature optimization risk', source: 'r/SEO' },
];

const redditQuotes = [
  { quote: "GEO is worth it IF your buyers actually use AI. We sell to developers. They use ChatGPT for everything. GEO was a no-brainer for us. If you sell to factory managers, maybe not.", source: "r/SEO, 567 upvotes" },
  { quote: "The ROI question is the wrong question. The right question is: what happens if you ignore GEO for 2 years while your competitors invest in it? By then the window is closed.", source: "r/GenEngineOptimization, 345 upvotes" },
  { quote: "We tracked our AI citations for 6 months. Went from 0 to 12% citation rate. Pipeline attributed to AI: $340K. GEO cost: $24K. That is 14x ROI. But it took 6 months to see anything.", source: "r/SEO, 789 upvotes" },
  { quote: "Hot take: GEO is not worth it for 80% of B2B companies right now. If you are Series A with <$5M ARR, focus on SEO and sales. GEO matters when AI search hits critical mass in your category.", source: "r/marketing, 1.1k upvotes" },
];

const faqData = [
  { q: "Is GEO worth it for small businesses?", a: "Depends on your buyers. If your customers use ChatGPT, Perplexity, or Google AI Overviews to research before buying, then yes. If they rely entirely on Google or referrals, the ROI is unclear. Reddit consensus: fix entity signals (free) before paying for GEO services." },
  { q: "How long until GEO shows results?", a: "60-90 days minimum for measurable AI citation changes. Entity authority signals take 4-8 weeks to propagate. Content citations take 2-6 weeks. Reddit users report first ChatGPT citations within 3-4 weeks of starting aggressive Reddit participation." },
  { q: "Should I wait for AI search to grow before investing in GEO?", a: "This is the biggest debate on Reddit. The bull case: early movers get compounding advantage. The bear case: AI search is still <5% of B2B discovery. Reddit consensus: invest in entity signals now (cheap, high-impact), defer content and agency spend until AI search grows in your category." },
  { q: "What is the minimum viable GEO investment?", a: "Reddit recommends: $0 for entity signals (LinkedIn, Crunchbase, schema), $0 for Reddit participation (2 hrs/week), $49/mo for a GEO tracking tool. That is enough to establish presence and measure progress before committing to agency-level spend." },
];

const RedditIsGeoWorthIt: React.FC = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <SEOMeta
        title="Is GEO Worth It Reddit? Honest 2026 Assessment (Pros, Cons, ROI)"
        description="Is Generative Engine Optimization worth the investment? Real Reddit discussions on GEO ROI, timeline, and who should (and should not) invest in it."
        path="/reddit/is-geo-worth-it"
      />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-emerald-400 text-sm mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Honest assessment from Reddit practitioners — no agency sales pitch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Is GEO Worth It in 2026?<br />
            <span className="text-emerald-400">What Reddit Actually Thinks</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            The most divisive question in SEO right now. We compiled the strongest arguments from both sides on Reddit to give you an honest assessment.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-emerald-300 mb-2">The Reddit Verdict:</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong>It depends on your buyers.</strong> If your ICP uses AI for research (developers, marketers, SaaS buyers), GEO is high-ROI. If they do not (factory managers, traditional industries), wait. Start with free entity signals regardless — they cost nothing and compound over time.
              </p>
            </div>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" /> Arguments FOR GEO
            </h2>
            <div className="space-y-3">
              {pros.map((p, i) => (
                <div key={i} className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4">
                  <p className="text-gray-300 text-sm">{p.point}</p>
                  <span className="text-xs text-gray-500 mt-1 block">— {p.source}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-400" /> Arguments AGAINST GEO
            </h2>
            <div className="space-y-3">
              {cons.map((c, i) => (
                <div key={i} className="bg-red-500/5 border border-red-500/10 rounded-xl p-4">
                  <p className="text-gray-300 text-sm">{c.point}</p>
                  <span className="text-xs text-gray-500 mt-1 block">— {c.source}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decision Framework */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">The Decision Framework</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Reddit users developed this rough decision matrix:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <p className="text-gray-300 text-sm"><strong className="text-emerald-300">Invest now</strong> if: your ICP uses AI for research AND you have $3K+/mo budget AND you can commit for 6+ months</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 font-bold">~</span>
                <p className="text-gray-300 text-sm"><strong className="text-yellow-300">Start free, scale later</strong> if: you are early-stage AND AI search is growing in your category AND you can do entity signals yourself</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold">✗</span>
                <p className="text-gray-300 text-sm"><strong className="text-red-300">Wait</strong> if: your ICP does not use AI AND you have limited budget AND your category has low AI search volume</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reddit Quotes */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Reddit's Honest Take</h2>
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
          <h2 className="text-xl font-bold mb-4">Our Take</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            <strong className="text-emerald-400">Qlavo</strong> believes GEO is worth it for B2B SaaS targeting US/EU markets — but only with the right expectations. 60-90 days to first results. Transparent measurement. No vanity dashboards. If your buyers use AI, the question is not whether to invest, but how much and how fast.
          </p>
          <p className="text-gray-400 text-sm">
            Contact: ansh@qlavo.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default RedditIsGeoWorthIt;
