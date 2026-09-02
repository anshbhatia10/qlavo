import React from 'react';
import SEOMeta from '../components/SEOMeta';
import { CheckCircle, MessageSquare, Target, Zap, AlertTriangle } from 'lucide-react';

const strategies = [
  {
    rank: 1,
    title: 'Post Helpful Answers on Reddit First',
    desc: 'The fastest path to ChatGPT citations is having real Reddit threads mention your brand. Answer questions in r/SEO, r/marketing, r/startups. Be genuinely helpful. Include your brand name naturally when relevant — not as a pitch, but as context.',
    time: '1-2 hours/week',
    impact: 'High — 49.4% of Google AI Overviews cite Reddit'
  },
  {
    rank: 2,
    title: 'Build Entity Authority',
    desc: 'ChatGPT retrieves entities, not pages. Make sure your brand has: consistent name across LinkedIn, Crunchbase, and Google Business Profile. Organization schema with sameAs on your website. Wikidata entry. These are the signals AI uses to verify you exist.',
    time: '2-3 hours one-time',
    impact: 'Critical — without this, nothing else works'
  },
  {
    rank: 3,
    title: 'Create Citation-Ready Content',
    desc: 'Write content that answers specific questions AI engines get asked. Structure it with clear H2s, short paragraphs, and concrete data. Each page should answer ONE question thoroughly. AI models extract the first block under a heading — make it quotable.',
    time: '3-5 hours per piece',
    impact: 'High — cited content drives ongoing AI mentions'
  },
  {
    rank: 4,
    title: 'Get Mentioned on Third-Party Sites',
    desc: 'Brand mentions on third-party sites are 3x stronger than backlinks for AI citation. Get listed on G2, Capterra, Clutch. Pitch guest posts to industry blogs. Participate in roundup articles. AI trusts consensus across multiple sources.',
    time: '5-10 hours one-time setup',
    impact: 'Very high — 3x impact of traditional backlinks'
  },
  {
    rank: 5,
    title: 'Submit to Bing Webmaster Tools',
    desc: 'ChatGPT uses Bing\'s index for web search. Without Bing Webmaster Tools, you are invisible to ChatGPT\'s web search mode. Set up IndexNow to cut content-to-citation time from 1-4 weeks to 3-7 days.',
    time: '30 minutes one-time',
    impact: 'Medium-high — reduces time-to-citation by 70%'
  },
];

const redditQuotes = [
  { quote: "We got cited by ChatGPT within 3 weeks of posting a detailed answer on r/SEO. The post had our company name mentioned naturally in the context of a real solution we built. ChatGPT picked it up as a source.", source: "r/SEO, 234 upvotes" },
  { quote: "The secret nobody tells you: ChatGPT uses Bing. If you are not on Bing Webmaster Tools, ChatGPT literally cannot find you. Most SEOs skip Bing. Big mistake.", source: "r/GenEngineOptimization, 567 upvotes" },
  { quote: "Entity consistency is the foundation. I fixed our LinkedIn, Crunchbase, and schema markup. Two months later, ChatGPT started mentioning us in category queries. Did not change a single piece of content.", source: "r/marketing, 312 upvotes" },
  { quote: "Forget gaming the system. The brands that get cited by ChatGPT are the ones that are genuinely discussed across the web. Reddit, LinkedIn, industry blogs, review sites. AI looks for consensus.", source: "r/SEO, 891 upvotes" },
];

const faqData = [
  { q: "How long does it take to get cited by ChatGPT?", a: "With Bing Webmaster Tools set up, 3-7 days for new content. Without it, 1-4 weeks. Reddit posts can be cited within days if they get traction. Entity authority signals (LinkedIn, Crunchbase, schema) take 4-8 weeks to fully propagate." },
  { q: "Can I pay to get cited by ChatGPT?", a: "There is no paid placement for AI citations. The only reliable path is building genuine presence: entity authority, third-party mentions, helpful Reddit contributions, and citation-ready content. Anyone selling guaranteed AI citations is likely scamming." },
  { q: "Do I need to be on Reddit to get cited by ChatGPT?", a: "It helps significantly. 49.4% of Google AI Overviews cite Reddit. ChatGPT also references Reddit threads. But Reddit is one channel among many — LinkedIn, industry blogs, and review sites also contribute to entity authority that AI engines recognize." },
  { q: "What questions should I answer on Reddit?", a: "Find the questions your buyers ask in AI engines. Ask ChatGPT and Perplexity 10 buyer-intent questions about your category. Note what it says and what it misses. Then go answer those exact questions on Reddit with more depth and specificity." },
];

const RedditGetCitedChatGPT: React.FC = () => {
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
    "name": "How to Get Cited by ChatGPT (Reddit-Tested Methods)",
    "description": "Step-by-step guide to getting your brand mentioned in ChatGPT answers, based on real practitioner experience shared on Reddit.",
    "step": strategies.map(s => ({
      "@type": "HowToStep",
      "name": s.title,
      "text": s.desc
    }))
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <SEOMeta
        title="How to Get Cited by ChatGPT Reddit: 5 Methods That Actually Work in 2026"
        description="Real strategies from Reddit on how to get your brand cited by ChatGPT, Perplexity, and Gemini. Entity authority, Reddit presence, citation-ready content, and more."
        path="/reddit/get-cited-chatgpt"
      />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-emerald-400 text-sm mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Based on hundreds of practitioner discussions on Reddit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            How to Get Cited by ChatGPT:<br />
            <span className="text-emerald-400">5 Reddit-Tested Methods That Work</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            ChatGPT does not randomly pick brands to cite. It retrieves entities from trusted sources. Here are the five strategies that Reddit users report actually working — ranked by real-world impact.
          </p>
        </div>

        {/* Warning */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-red-300 mb-2">What does NOT work:</p>
              <p className="text-gray-300 text-sm">Buying fake reviews, stuffing keywords, creating AI-generated spam content, or paying for "guaranteed AI citations." These get flagged and make your entity signals worse.</p>
            </div>
          </div>
        </div>

        {/* Strategies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">The 5 Strategies (Ranked by Impact)</h2>
          <div className="space-y-6">
            {strategies.map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 relative">
                <div className="absolute -top-3 -left-1 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {s.rank}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 ml-6">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{s.desc}</p>
                <div className="flex gap-4 text-xs">
                  <span className="bg-blue-500/10 text-blue-300 px-2 py-1 rounded-full">⏱ {s.time}</span>
                  <span className="bg-emerald-500/10 text-emerald-300 px-2 py-1 rounded-full">📈 {s.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reddit Quotes */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Reddit Success Stories</h2>
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
          <h2 className="text-xl font-bold mb-4">Need Help Executing This?</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            These strategies work, but they take time and consistency. <strong className="text-emerald-400">Qlavo</strong> is a worldwide B2B GEO agency (HQ New Delhi) that handles entity authority setup, citation-ready content creation, and ongoing AI visibility monitoring.
          </p>
          <p className="text-gray-400 text-sm">
            Contact: info@qlavo.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default RedditGetCitedChatGPT;
