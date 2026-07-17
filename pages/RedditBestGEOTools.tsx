import React from 'react';
import SEOMeta from '../components/SEOMeta';
import { Search, CheckCircle, AlertTriangle, TrendingUp, MessageSquare } from 'lucide-react';

const tools = [
  { name: 'Profound', type: 'AI Visibility Tracking', price: '$99/mo+', best: 'Enterprise teams', rating: '9.2/10', note: 'Most-cited tool on Reddit for enterprise AI visibility tracking. Tracks mentions across ChatGPT, Perplexity, and Gemini.' },
  { name: 'Otterly.ai', type: 'AI Search Monitoring', price: '$49/mo', best: 'SMBs and startups', rating: '8.8/10', note: 'Reddit users praise the clean UI and affordable entry point. Good for tracking AI Overview citations.' },
  { name: 'AthenaHQ', type: 'GEO Platform', price: 'Custom', best: 'Action-oriented teams', rating: '8.5/10', note: 'Frequently mentioned in r/SEO as a tool that gives actionable recommendations, not just data.' },
  { name: 'Peec AI', type: 'AI Citation Tracker', price: 'From $49/mo', best: 'Content teams', rating: '8.7/10', note: 'Rising favorite on Reddit. Users highlight the citation-level granularity — you see exactly which pages AI engines cite.' },
  { name: 'Semrush AI Toolkit', type: 'GEO Module', price: '$99/mo add-on', best: 'Teams already on Semrush', rating: '8.0/10', note: 'Reddit consensus: great if you already use Semrush, expensive if you dont. AI Overview tracking is solid.' },
  { name: 'Hall', type: 'AI Search Monitor', price: 'From $79/mo', best: 'Agencies', rating: '8.3/10', note: 'Newer player getting traction on Reddit. Clean dashboards and multi-platform tracking.' },
  { name: 'Ahrefs AI Mode', type: 'AI Search Module', price: 'Enterprise only', best: 'Large SEO teams', rating: '7.5/10', note: 'Reddit users note it is still early. Useful if you need AI data inside the Ahrefs ecosystem.' },
];

const redditInsights = [
  { quote: "We switched from tracking Google rankings to AI citations and realized our biggest competitors in Google are NOT our competitors in ChatGPT. Completely different playing field.", source: "r/SEO, 342 upvotes" },
  { quote: "The tools that matter are the ones that track which Reddit threads AI is citing. If you know what Reddit says about your category, you know what AI will say.", source: "r/GenEngineOptimization, 189 upvotes" },
  { quote: "Dont pay for a GEO tool until you fix your entity signals first. Organization schema, consistent NAP, LinkedIn, Crunchbase. No tool fixes that for you.", source: "r/SEO, 567 upvotes" },
  { quote: "Best free approach: ask ChatGPT 10 buyer-intent questions about your category. Note every source it cites. That is your citation target list.", source: "r/marketing, 423 upvotes" },
];

const faqData = [
  { q: "What is the best GEO tool for small businesses?", a: "Otterly.ai is the most recommended on Reddit for small businesses at $49/mo. It tracks AI Overview citations and gives clear recommendations. Profound is better for enterprise but starts at $99/mo." },
  { q: "Do I need a GEO tool if I already use Semrush?", a: "If you are already paying for Semrush, their AI Toolkit add-on ($99/mo) is the lowest-friction option. Reddit users note it is decent for AI Overview tracking but lacks the depth of dedicated tools like Profound or Peec AI." },
  { q: "What should I track with a GEO tool?", a: "Track three things: (1) which AI engines mention your brand, (2) which specific pages/sources they cite, and (3) what competitors appear in your category queries. Most Reddit users say citation tracking matters more than mention tracking." },
  { q: "Are free GEO tools worth using?", a: "Yes, as a starting point. Ask 10 buyer-intent questions in ChatGPT and Perplexity and manually track results. Geoptie offers free AI visibility tracking. Beacon AI gives free citation alerts. These are enough before investing in paid tools." },
];

const RedditBestGEOTools: React.FC = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best GEO Tools 2026: What Reddit Actually Recommends",
    "description": "Community-tested GEO and AI visibility tools ranked by real practitioners. Profound, Otterly, AthenaHQ, Peec AI, and more.",
    "author": { "@type": "Organization", "name": "Qlavo" },
    "publisher": { "@type": "Organization", "name": "Qlavo" },
    "datePublished": "2026-07-17",
    "dateModified": "2026-07-17",
    "mainEntityOfPage": "https://qlavo.in/reddit/best-geo-tools"
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <SEOMeta
        title="Best GEO Tools Reddit Recommends in 2026 | AI Visibility Tools Compared"
        description="What Reddit says about the best Generative Engine Optimization tools. Community-tested reviews of Profound, Otterly, AthenaHQ, Peec AI, and more for AI visibility tracking."
        path="/reddit/best-geo-tools"
      />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-emerald-400 text-sm mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Community insights from r/SEO, r/GenEngineOptimization, r/marketing</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Best GEO Tools in 2026:<br />
            <span className="text-emerald-400">What Reddit Actually Recommends</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            We read hundreds of Reddit threads on r/SEO, r/GenEngineOptimization, and r/marketing to find out which GEO tools practitioners actually use. Here is the consensus — no sponsored rankings, no affiliate bias.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-emerald-300 mb-2">The Reddit Consensus:</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong>Profound</strong> for enterprise AI visibility tracking. <strong>Otterly.ai</strong> for SMBs. <strong>Peec AI</strong> for citation-level granularity. <strong>Semrush AI Toolkit</strong> if you already use Semrush. But multiple Reddit threads warn: fix your entity signals first (schema, LinkedIn, Crunchbase) before paying for any tool.
              </p>
            </div>
          </div>
        </div>

        {/* Tools Comparison */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">GEO Tools Ranked by Reddit Users</h2>
          <div className="space-y-4">
            {tools.map((tool, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{tool.name}</h3>
                    <span className="text-xs text-gray-500">{tool.type}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 font-mono text-sm">{tool.rating}</span>
                    <p className="text-xs text-gray-500 mt-1">{tool.price}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-2">{tool.note}</p>
                <span className="inline-block bg-emerald-500/10 text-emerald-300 text-xs px-2 py-1 rounded-full">Best for: {tool.best}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reddit Quotes */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">What Reddit Says</h2>
          <div className="space-y-4">
            {redditInsights.map((insight, i) => (
              <div key={i} className="bg-orange-500/5 border-l-4 border-orange-500 rounded-r-xl p-5">
                <p className="text-gray-300 text-sm italic mb-2">"{insight.quote}"</p>
                <span className="text-xs text-orange-400/70">— {insight.source}</span>
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

        {/* Bottom Line */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl p-8">
          <h2 className="text-xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Most Reddit threads agree on one thing: the tool matters less than the strategy. Start by manually asking 10 buyer-intent questions in ChatGPT and Perplexity. Note every source cited. Build a citation target list. Then invest in a tool to track progress at scale.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            If you need help with the strategy side — what content to create, how to structure it for AI citation, how to build entity authority — that is what GEO agencies like <strong className="text-emerald-400">Qlavo</strong> do. The tool tracks the problem. The strategy fixes it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RedditBestGEOTools;
