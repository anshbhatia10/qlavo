import React from 'react';
import SEOMeta from '../components/SEOMeta';
import { FileSearch, MessageSquare, CheckCircle, AlertTriangle, Search } from 'lucide-react';

const auditSteps = [
  {
    step: 1,
    title: 'Define Your Prompt Bank',
    desc: 'Create 20 buyer-intent questions across 4 tiers: Awareness (what is GEO?), Consideration (best GEO agencies?), Decision (GEO pricing), and Niche (GEO for B2B SaaS). These are the questions your buyers ask AI.',
    time: '30 min',
    tip: 'Ask ChatGPT and Gemini the same questions — they cite different sources'
  },
  {
    step: 2,
    title: 'Run Prompts on AI Platforms',
    desc: 'Submit each prompt in a FRESH chat (never reuse sessions). Platforms: ChatGPT, Perplexity, Gemini, Google AI Overviews, Bing/Copilot. Record: does your brand appear, position, which pages cited, which competitors named.',
    time: '3-4 hours',
    tip: 'Session context contamination creates false positives — always use new chats'
  },
  {
    step: 3,
    title: 'Score Your Visibility',
    desc: 'Calculate: mention rate (% of prompts where you appear), average rank, URL citation rate, share of voice vs competitors. The key diagnostic: category mention rate vs brand mention rate. If brand works but category does not, you have a GEO gap.',
    time: '1 hour',
    tip: 'Track competitor churn — over 50% of cited domains rotate monthly'
  },
  {
    step: 4,
    title: 'Analyze Cited Sources',
    desc: 'Extract every source AI cited in its answers. Map: which domains appear most, which content formats get cited, which competitors own the category. This is your citation target list.',
    time: '1 hour',
    tip: 'ChatGPT and Gemini share only 10-15% of sources — you need strategies for both'
  },
  {
    step: 5,
    title: 'Check Technical Signals',
    desc: 'Audit: robots.txt (are AI bots allowed?), schema markup (Organization, FAQPage, Article?), entity consistency (LinkedIn, Crunchbase, Wikidata all match?), Bing Webmaster Tools setup.',
    time: '1-2 hours',
    tip: 'Bing Webmaster Tools is critical — ChatGPT uses Bing index for web search'
  },
  {
    step: 6,
    title: 'Build Your Action Plan',
    desc: 'Prioritize: (1) Fix entity signals (free, high-impact), (2) Create citation-ready content for your top 5 missing queries, (3) Build Reddit presence in your category, (4) Set up automated monitoring.',
    time: '1 hour',
    tip: 'Reddit presence + entity authority = 80% of GEO results for most B2B companies'
  },
];

const redditQuotes = [
  { quote: "We ran an AI visibility audit manually before paying anyone. Took 2 days. Found out our biggest competitor had zero AI citations too. Saved ourselves $10K on an agency that would have had nothing to fix.", source: "r/SEO, 456 upvotes" },
  { quote: "The audit is the easy part. The hard part is doing something about it. Most companies run the audit, see the gaps, and then do nothing for 6 months.", source: "r/GenEngineOptimization, 234 upvotes" },
  { quote: "Best free audit method: ask ChatGPT 10 questions about your category in a fresh chat. Note every source. Ask Perplexity the same 10 questions. Note every source. Overlap = your priority targets.", source: "r/marketing, 678 upvotes" },
  { quote: "We paid $5K for a GEO audit. It was basically the same thing we could have done ourselves with a spreadsheet and 2 hours. The value is in the execution, not the diagnosis.", source: "r/SEO, 891 upvotes" },
];

const faqData = [
  { q: "How do I audit my AI visibility for free?", a: "Ask 10 buyer-intent questions in ChatGPT and Perplexity (fresh chat each time). Note every source cited. Check if your brand appears. Repeat monthly. This manual audit takes 2-3 hours and gives you 80% of the insight a paid tool provides." },
  { q: "What is the 'Category Invisible, Brand Visible' pattern?", a: "When AI knows your brand (appears in brand-name queries) but does not cite you in category queries (best GEO agencies, top AI visibility tools). This means your entity signals work but your content strategy does not. The fix: create content targeting category-level questions." },
  { q: "How often should I run an AI visibility audit?", a: "Monthly at minimum. Reddit users recommend weekly for competitive categories. Over 50% of cited domains rotate monthly, so your audit from 3 months ago is already stale. Track competitor churn — new competitors appearing and existing ones disappearing." },
  { q: "Should I hire an agency or do the audit myself?", a: "Reddit consensus: do the audit yourself first. It is 2-3 hours of work and gives you the data to evaluate agencies honestly. If an agency cannot explain what they would do differently than your manual audit, they are not worth hiring." },
];

const RedditAIVisibilityAudit: React.FC = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Run an AI Visibility Audit",
    "description": "Step-by-step guide to auditing your brand's visibility in AI-generated answers across ChatGPT, Perplexity, and Gemini.",
    "step": auditSteps.map(s => ({
      "@type": "HowToStep",
      "name": s.title,
      "text": s.desc
    }))
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <SEOMeta
        title="AI Visibility Audit Reddit: How to Check Your Brand in ChatGPT, Perplexity, Gemini"
        description="How to run an AI visibility audit for free. Step-by-step guide to checking your brand's presence in ChatGPT, Perplexity, Gemini, and Google AI Overviews."
        path="/reddit/ai-visibility-audit"
      />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-emerald-400 text-sm mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Practitioner-tested method from r/SEO and r/GenEngineOptimization</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI Visibility Audit:<br />
            <span className="text-emerald-400">How to Check Your Brand in ChatGPT (Free Method)</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Before paying an agency or buying a tool, run this manual audit yourself. It takes 2-3 hours and tells you exactly where you stand in AI answers.
          </p>
        </div>

        {/* Quick Answer */}
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-3">
            <Search className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-emerald-300 mb-2">The Quick Method:</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Ask 10 buyer-intent questions in ChatGPT and Perplexity (fresh chat each time). Note every source cited. Check if your brand appears. Calculate your mention rate. Compare with competitors. That is 80% of what a $5K audit gives you.
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">The 6-Step Manual Audit</h2>
          <div className="space-y-6">
            {auditSteps.map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 relative">
                <div className="absolute -top-3 -left-1 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 ml-6">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{s.desc}</p>
                <div className="flex gap-3 text-xs">
                  <span className="bg-blue-500/10 text-blue-300 px-2 py-1 rounded-full">⏱ {s.time}</span>
                  <span className="bg-yellow-500/10 text-yellow-300 px-2 py-1 rounded-full">💡 {s.tip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Key Metrics to Track</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">Metric</th>
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">How to Calculate</th>
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">Target</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-medium">Mention Rate</td>
                  <td className="py-3 px-4 text-gray-400">Prompts where you appear ÷ total prompts</td>
                  <td className="py-3 px-4 text-emerald-400">30%+ (good), 60%+ (great)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-medium">Average Rank</td>
                  <td className="py-3 px-4 text-gray-400">Average position when mentioned</td>
                  <td className="py-3 px-4 text-emerald-400">#1-#2 (good), #1 (great)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-medium">URL Citation Rate</td>
                  <td className="py-3 px-4 text-gray-400">Prompts where your URL cited ÷ total prompts</td>
                  <td className="py-3 px-4 text-emerald-400">20%+ (good), 40%+ (great)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-medium">Share of Voice</td>
                  <td className="py-3 px-4 text-gray-400">Your mentions ÷ total competitor mentions</td>
                  <td className="py-3 px-4 text-emerald-400">15%+ (good), 30%+ (great)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4 text-white font-medium">Category vs Brand Gap</td>
                  <td className="py-3 px-4 text-gray-400">Brand mention rate − Category mention rate</td>
                  <td className="py-3 px-4 text-emerald-400">0 (ideal — both work)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Reddit Quotes */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">What Reddit Says About Audits</h2>
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
          <h2 className="text-xl font-bold mb-4">Need Help With the Audit?</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            <strong className="text-emerald-400">Qlavo</strong> runs 40-prompt audits across ChatGPT and Gemini every week as part of our own research. We deliver full AI visibility audits as a standalone service or as part of ongoing GEO engagement. Same methodology, same rigor, delivered as a branded PDF report.
          </p>
          <p className="text-gray-400 text-sm">
            Contact: ansh@qlavo.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default RedditAIVisibilityAudit;
