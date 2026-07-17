import React from 'react';
import SEOMeta from '../components/SEOMeta';
import { Search, Brain, TrendingUp, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

const differences = [
  { aspect: 'Goal', seo: 'Rank on page 1 of Google', geo: 'Get cited inside AI answers' },
  { aspect: 'Mechanism', seo: 'Keywords, backlinks, technical SEO', geo: 'Entity authority, third-party mentions, structured content' },
  { aspect: 'Success Metric', seo: 'Organic traffic, rankings, CTR', geo: 'AI citation rate, share of voice in AI answers' },
  { aspect: 'Content Strategy', seo: 'Target keywords with search volume', geo: 'Answer questions AI engines retrieve' },
  { aspect: 'Link Building', seo: 'Backlinks from high-DA sites', geo: 'Brand mentions across trusted platforms' },
  { aspect: 'Technical', seo: 'Page speed, crawlability, Core Web Vitals', geo: 'Schema markup, entity consistency, structured data' },
  { aspect: 'Platform Focus', seo: 'Google, Bing, YouTube', geo: 'ChatGPT, Perplexity, Gemini, Google AI Overviews' },
  { aspect: 'Competition', seo: 'Other websites ranking for same keywords', geo: 'Other entities cited by same AI engines' },
];

const redditQuotes = [
  { quote: "SEO is not dead. But SEO without GEO is becoming irrelevant. If you only optimize for Google rankings and ignore AI citations, you are leaving 40%+ of discovery on the table.", source: "r/SEO, 891 upvotes" },
  { quote: "The biggest mistake is treating GEO as SEO 2.0. It is a different game. SEO rewards pages. GEO rewards entities. A mediocre page from a well-known entity beats a perfect page from an unknown one.", source: "r/GenEngineOptimization, 445 upvotes" },
  { quote: "We ran the same content through traditional SEO optimization and GEO optimization. The GEO-optimized version got 3x more AI citations but only 15% more Google traffic. Different channels, different wins.", source: "r/marketing, 678 upvotes" },
  { quote: "Stop thinking GEO replaces SEO. Think of GEO as the new PR. SEO gets you found. GEO gets you recommended. You need both.", source: "r/SEO, 1.2k upvotes" },
];

const faqData = [
  { q: "Is GEO the same as SEO?", a: "No. SEO optimizes for search engine result pages (Google rankings). GEO optimizes for AI-generated answers (ChatGPT, Perplexity, Gemini citations). They use different mechanisms: SEO relies on keywords and backlinks; GEO relies on entity authority and third-party mentions." },
  { q: "Should I stop doing SEO and focus on GEO?", a: "No. SEO still drives 60%+ of B2B discovery. The strongest position is both. SEO gets you found on Google. GEO gets you recommended by AI. Most Reddit users agree: do not drop SEO for GEO — add GEO on top of it." },
  { q: "Which matters more for B2B: SEO or GEO?", a: "For B2B SaaS, GEO is increasingly important. 48% of B2B buyers now use AI for research before contacting vendors. If you are invisible in AI answers, you are invisible to nearly half your market. But SEO still drives the other half." },
  { q: "How is GEO different from AEO?", a: "AEO (Answer Engine Optimization) targets featured snippets and voice assistants. GEO targets AI-generated answers across multiple platforms. AEO is a subset of the broader GEO strategy, which includes entity authority, third-party citations, and structured content." },
];

const RedditGeoVsSeo: React.FC = () => {
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
        title="GEO vs SEO: What Reddit Says About the Difference in 2026"
        description="The real difference between Generative Engine Optimization and SEO, explained through hundreds of Reddit discussions. Is GEO replacing SEO? What practitioners actually think."
        path="/reddit/geo-vs-seo"
      />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-emerald-400 text-sm mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Distilled from r/SEO, r/GenEngineOptimization, r/marketing</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            GEO vs SEO:<br />
            <span className="text-emerald-400">What Reddit Actually Thinks</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            We analyzed hundreds of Reddit discussions on the GEO vs SEO debate. Here is what practitioners actually say — not what marketing blogs want you to believe.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-emerald-300 mb-2">The Reddit Consensus:</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong>GEO is not replacing SEO — it is adding a new layer.</strong> SEO gets you found on Google. GEO gets you recommended by AI. The strongest position is both. Reddit users who track both say 60% of discovery still comes from Google, but AI citations are growing fast.
              </p>
            </div>
          </div>
        </div>

        {/* Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Search className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-bold text-blue-300">SEO</h2>
            </div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 text-blue-400 flex-shrink-0" /> Optimizes for search engine result pages</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 text-blue-400 flex-shrink-0" /> Keywords, backlinks, technical performance</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 text-blue-400 flex-shrink-0" /> Success: top-10 ranking, clicks, sessions</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 text-blue-400 flex-shrink-0" /> Still drives 60%+ of B2B discovery</li>
            </ul>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-5 h-5 text-emerald-400" />
              <h2 className="text-lg font-bold text-emerald-300">GEO</h2>
            </div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 text-emerald-400 flex-shrink-0" /> Optimizes for AI-generated answers</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 text-emerald-400 flex-shrink-0" /> Entity authority, mentions, structured content</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 text-emerald-400 flex-shrink-0" /> Success: AI citation, share of voice in answers</li>
              <li className="flex items-start gap-2"><ArrowRight className="w-3 h-3 mt-1 text-emerald-400 flex-shrink-0" /> 48% of B2B buyers now use AI for research</li>
            </ul>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">Aspect</th>
                  <th className="text-left py-3 px-4 text-blue-400 font-medium">SEO</th>
                  <th className="text-left py-3 px-4 text-emerald-400 font-medium">GEO</th>
                </tr>
              </thead>
              <tbody>
                {differences.map((d, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-3 px-4 text-white font-medium">{d.aspect}</td>
                    <td className="py-3 px-4 text-gray-400">{d.seo}</td>
                    <td className="py-3 px-4 text-gray-400">{d.geo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reddit Quotes */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">What Reddit Says</h2>
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
          <h2 className="text-xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            SEO is not going away. But the discovery landscape is expanding. When 48% of B2B buyers ask AI before Googling, being invisible in AI answers means invisible to nearly half your market. The play is not SEO or GEO — it is SEO and GEO.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Need help building both? <strong className="text-emerald-400">Qlavo</strong> is a Delhi-based GEO agency that helps B2B companies appear in ChatGPT, Perplexity, and Google AI Overviews — without abandoning their existing SEO.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RedditGeoVsSeo;
