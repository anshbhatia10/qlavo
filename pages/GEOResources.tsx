import React from 'react';
import { ArrowRight, BookOpen, Search, Zap, BarChart3, Globe, MessageCircle, CheckCircle2, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const GEOResources: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-zinc-900 rounded-xl border border-white/10">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm text-zinc-500 uppercase tracking-widest">Resources</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tighter mb-8 leading-tight">
            The Complete Guide to <br />Generative Engine Optimization
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8">
            Everything you need to know about getting your business recommended by AI assistants like ChatGPT, Google Gemini, Claude, and Perplexity.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="https://huggingface.co/datasets/qlavo/geo-visibility-benchmarks-2026" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-white/10 rounded-lg text-zinc-400 hover:text-white hover:border-white/30 transition-all text-xs font-mono"
            >
              <Database className="w-3 h-3 text-emerald-500" /> 
              <span>Resource: View our Benchmarks on Hugging Face</span>
              <ArrowRight className="w-3 h-3 opacity-50" />
            </a>
            <a 
              href="https://doi.org/10.5281/zenodo.18980486" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-white/10 rounded-lg text-zinc-400 hover:text-white hover:border-white/30 transition-all text-xs font-mono"
            >
              <Database className="w-3 h-3 text-cyan-500" /> 
              <span>Academic: View Whitepaper on Zenodo (DOI)</span>
              <ArrowRight className="w-3 h-3 opacity-50" />
            </a>
          </div>

          <p className="text-sm text-zinc-600 font-light">
            Written by Qlavo • Last Updated: May 4, 2026
          </p>
        </div>
      </section>

      {/* What is GEO */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">Definition</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            What is Generative Engine Optimization (GEO)?
          </h3>
          <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
            <p>
              <strong className="text-white">Generative Engine Optimization (GEO)</strong> is the practice of optimizing your business's online presence so that AI-powered search engines and assistants — including ChatGPT, Google Gemini, Claude, and Perplexity — recommend your brand, products, or services in their generated responses.
            </p>
            <p>
              Unlike traditional Search Engine Optimization (SEO), which focuses on ranking your website in Google's list of blue links, GEO focuses on being <strong className="text-white">cited, referenced, and recommended</strong> in AI-generated answers. When a potential customer asks an AI assistant &ldquo;Who are the best [your service] providers in [your city]?&rdquo;, GEO determines whether your business appears in that answer.
            </p>
            <p>
              The term emerged in 2024-2025 as AI assistants became a primary discovery channel for consumers and businesses. With ChatGPT surpassing 500 million weekly active users as of early 2026 and Google integrating AI Overviews into the vast majority of search results, GEO has quickly become essential for any business that depends on being found online.
            </p>
          </div>
        </div>
      </section>

      {/* SEO vs GEO */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">Comparison</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-12">
            SEO vs. GEO: What's different?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 md:p-8 bg-zinc-900/40 border border-white/5 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Search className="w-5 h-5 text-zinc-500" />
                <h4 className="text-lg font-medium text-zinc-400">Traditional SEO</h4>
              </div>
              <ul className="space-y-4 text-zinc-500 text-sm font-light">
                <li className="flex gap-3"><span className="text-zinc-700 shrink-0">—</span>Optimizes for Google's ranking algorithm</li>
                <li className="flex gap-3"><span className="text-zinc-700 shrink-0">—</span>Focuses on keywords and backlinks</li>
                <li className="flex gap-3"><span className="text-zinc-700 shrink-0">—</span>Goal: rank on page 1 of search results</li>
                <li className="flex gap-3"><span className="text-zinc-700 shrink-0">—</span>Success = clicks to your website</li>
                <li className="flex gap-3"><span className="text-zinc-700 shrink-0">—</span>Content lives on your website</li>
                <li className="flex gap-3"><span className="text-zinc-700 shrink-0">—</span>Competitive: millions of businesses optimizing</li>
              </ul>
            </div>

            <div className="p-6 md:p-8 bg-white/[0.02] border border-white/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-5 h-5 text-white" />
                <h4 className="text-lg font-medium text-white">Generative Engine Optimization</h4>
              </div>
              <ul className="space-y-4 text-zinc-300 text-sm font-light">
                <li className="flex gap-3"><span className="text-zinc-500 shrink-0">→</span>Optimizes for AI synthesis and recommendation</li>
                <li className="flex gap-3"><span className="text-zinc-500 shrink-0">→</span>Focuses on entity authority and citations</li>
                <li className="flex gap-3"><span className="text-zinc-500 shrink-0">→</span>Goal: be recommended in AI-generated answers</li>
                <li className="flex gap-3"><span className="text-zinc-500 shrink-0">→</span>Success = being cited as a trusted source</li>
                <li className="flex gap-3"><span className="text-zinc-500 shrink-0">→</span>Content lives across high-authority platforms</li>
                <li className="flex gap-3"><span className="text-zinc-500 shrink-0">→</span>Early-stage: less than 1% of businesses optimizing</li>
              </ul>
            </div>
          </div>

          <p className="text-zinc-500 text-sm font-light mt-8 text-center">
            Both SEO and GEO are important. SEO drives traffic from traditional search. GEO captures the rapidly growing audience using AI for discovery.
          </p>
        </div>
      </section>

      {/* How GEO Works */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">How It Works</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-12">
            The five pillars of GEO
          </h3>

          <div className="space-y-10">
            {[
              {
                num: "01",
                icon: Globe,
                title: "Entity Consistency",
                desc: "AI models don't search like Google — they synthesize information from hundreds of sources simultaneously. If your business name, description, services, and founder information differ across LinkedIn, Crunchbase, your website, and Google Business Profile, the AI gets confused and skips you entirely. Our April 2026 audit of enterprise leaders found that 'Product Entity Fragmentation' (where different product lines have conflicting category labels) is the single biggest cause of inconsistent AI descriptions, even for household brands. The first step in GEO is ensuring your 'entity' (your business identity) is perfectly consistent across every platform, ideally anchored by a Wikidata link in your schema.",
                action: "Audit your business information on every platform. Standardize your name, description, services, and team details. Link your Organization schema to your Wikidata ID using 'sameAs'."
              },
              {
                num: "02",
                icon: BookOpen,
                title: "High-Authority Content",
                desc: "Your website has a domain authority of maybe 10-30. Medium has 95. Quora has 93. Reddit has 91. Wikipedia has 100. When you publish expert content on these high-authority platforms, AI models treat it as significantly more credible than the same content on your own blog. This is why a single well-written Medium article about your expertise can have more impact on AI recommendations than months of blog posts.",
                action: "Publish 2-3 in-depth articles on Medium, answer 5-10 relevant Quora questions, and contribute to relevant Reddit discussions."
              },
              {
                num: "03",
                icon: MessageCircle,
                title: "Q&A Structured Content",
                desc: "Large Language Models are fundamentally trained to answer questions. They actively look for content structured as question-answer pairs because it maps perfectly to their output format. FAQ pages, 'How does X work?' sections, and conversational content are dramatically easier for AI models to extract, understand, and cite in their responses. A single well-structured FAQ page can outperform an entire blog in terms of AI citations.",
                action: "Add FAQ sections to your website with schema markup. Answer the exact questions your customers would ask an AI assistant."
              },
              {
                num: "04",
                icon: BarChart3,
                title: "Citation Networks",
                desc: "In traditional SEO, backlinks boost your Google ranking. In GEO, the equivalent is citations — instances where credible third-party sources mention your brand alongside relevant service keywords. Directory listings on Crunchbase, Clutch, Product Hunt, and Wellfound function as citation signals. When multiple authoritative sources consistently describe your business the same way, AI models gain confidence in recommending you.",
                action: "Create profiles on 5-7 business directories. Ensure every listing has identical, keyword-rich descriptions of your services."
              },
              {
                num: "05",
                icon: Zap,
                title: "Recency Signals",
                desc: "AI models with real-time web access — like Perplexity, Google Gemini, and the browsing version of ChatGPT — prioritize recent, relevant content. A blog post from 2023 carries far less weight than a Medium article published last week. Regular publishing on high-authority platforms creates a stream of fresh signals that keep your business top-of-mind for AI recommendation engines.",
                action: "Publish fresh content weekly across platforms. Post on Google Business Profile. Keep your LinkedIn active with industry insights."
              }
            ].map((pillar) => (
              <div key={pillar.num} className="flex gap-6 md:gap-8">
                <span className="text-5xl font-thin text-zinc-800 shrink-0 hidden sm:block">{pillar.num}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <pillar.icon className="w-5 h-5 text-zinc-400" />
                    <h4 className="text-xl font-medium text-white">{pillar.title}</h4>
                  </div>
                  <p className="text-zinc-400 font-light leading-relaxed mb-3">{pillar.desc}</p>
                  <div className="flex items-start gap-2 bg-zinc-900/50 rounded-lg p-3 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-zinc-600 mt-0.5 shrink-0" />
                    <p className="text-zinc-500 text-sm font-light"><strong className="text-zinc-400 font-medium">Action:</strong> {pillar.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Platforms */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">Platform Guide</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-12">
            How each AI platform discovers businesses
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "ChatGPT (OpenAI)",
                users: "200M+ weekly users",
                how: "Synthesizes from training data (updated periodically) plus real-time web browsing in Plus/Enterprise tiers. Relies heavily on Wikipedia, news sites, and high-DA platforms.",
                speed: "Training data: months. Web browsing: real-time.",
                tip: "Focus on getting mentioned on high-authority sites that OpenAI's crawlers index regularly."
              },
              {
                name: "Google Gemini",
                users: "Integrated into Google Search",
                how: "Has full access to Google's search index plus real-time web access. Powers Google AI Overviews which appear in most search results. Heavily weights Google's own ecosystem (Google Business Profile, YouTube, Google Reviews).",
                speed: "Real-time web access. AI Overviews update within days.",
                tip: "Keep your Google Business Profile active. Post regularly. Maintain strong Google Reviews."
              },
              {
                name: "Perplexity",
                users: "100M+ monthly queries",
                how: "Always uses real-time web search. Cites its sources directly. Indexes content quickly and tends to favor recent, authoritative content. Great for measuring GEO progress because results update fast.",
                speed: "Near real-time. New content can appear within hours.",
                tip: "Perplexity is your fastest feedback loop. Publish content and test within days."
              },
              {
                name: "Claude (Anthropic)",
                users: "Growing enterprise adoption",
                how: "Primarily relies on training data with periodic updates. Less influenced by real-time web content. Tends to be cautious and only recommends businesses it has strong signals about from multiple sources.",
                speed: "Training data updates: 2-6 months.",
                tip: "Build citations across as many authoritative sources as possible. Claude needs volume of evidence."
              }
            ].map((platform, idx) => (
              <div key={idx} className="p-6 md:p-7 bg-zinc-900/40 border border-white/5 rounded-2xl">
                <h4 className="text-lg font-medium text-white mb-1">{platform.name}</h4>
                <p className="text-xs text-zinc-600 mb-4">{platform.users}</p>
                <div className="space-y-3 text-sm text-zinc-400 font-light">
                  <div>
                    <span className="text-zinc-500 text-xs uppercase tracking-wider">How it works</span>
                    <p className="mt-1 leading-relaxed">{platform.how}</p>
                  </div>
                  <div>
                    <span className="text-zinc-500 text-xs uppercase tracking-wider">Speed</span>
                    <p className="mt-1">{platform.speed}</p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3 border border-white/5">
                    <span className="text-zinc-500 text-xs uppercase tracking-wider">Pro tip</span>
                    <p className="mt-1 text-zinc-300">{platform.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEO Checklist */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">Quick-Start Checklist</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Your GEO audit in 10 steps
          </h3>
          <p className="text-zinc-500 font-light mb-10">
            A practical checklist for any business that wants to start appearing in AI-generated recommendations.
          </p>

          <div className="space-y-4">
            {[
              "Search for your business name on ChatGPT, Gemini, Claude, and Perplexity. Screenshot the results as your baseline.",
              "Standardize your business name, description, and service list across your website, LinkedIn, Google Business Profile, and all directory listings.",
              "Create or claim your Google Business Profile. Add accurate category, services, description, and keep it active with weekly posts.",
              "Create profiles on Crunchbase, Clutch, Product Hunt, and Wellfound with identical, keyword-rich descriptions.",
              "Add FAQ schema markup to your website answering the exact questions people would ask an AI about your industry.",
              "Publish 1-2 in-depth articles on Medium about your area of expertise. Mention your business naturally, not promotionally.",
              "Answer 3-5 relevant questions on Quora with genuine, detailed responses that demonstrate expertise.",
              "Add Organization schema and WebSite schema structured data to your website's HTML.",
              "Set up a content calendar: one platform post per week minimum across Medium, LinkedIn, and your Google Business Profile.",
              "Re-test on all 4 AI platforms after 30 days. Compare against your baseline screenshots."
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 bg-zinc-900/30 border border-white/5 rounded-xl hover:border-white/10 transition-colors">
                <span className="text-xs font-mono text-zinc-600 bg-zinc-800 rounded-md px-2 py-1 shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="text-zinc-300 text-sm font-light leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Early Matters */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">The Opportunity</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            Why acting now matters
          </h3>
          <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
            <p>
              Less than 1% of businesses are actively optimizing for AI search engines today. This means the competitive landscape for GEO is where SEO was in 2005 — wide open for those who move first.
            </p>
            <p>
              The businesses that establish AI visibility now will have a compounding advantage. AI models learn from patterns: the more consistently your brand appears across authoritative sources, the more confident the AI becomes in recommending you. Once you're established as an authority in an AI's knowledge, it's significantly harder for competitors to displace you.
            </p>
            <p>
              Google's AI Overviews now appear in the majority of search queries. ChatGPT has over 200 million weekly active users. Perplexity is processing over 100 million queries per month. The shift from &ldquo;search and click&rdquo; to &ldquo;ask and get an answer&rdquo; is happening right now — and the businesses that adapt will capture the customers who are making this shift.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 text-center border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">Ready to get started with GEO?</h2>
          <p className="text-zinc-400 mb-4 text-base md:text-lg font-light">
            Qlavo specializes in Generative Engine Optimization for growth-stage businesses. We'll audit your current AI visibility, build your GEO strategy, and implement it end-to-end.
          </p>
          <p className="text-zinc-500 mb-10 text-sm font-light">
            Free 30-minute discovery call. No pitch deck. Just a conversation about your AI visibility.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05] text-sm md:text-base"
            >
              Book a Free AI Audit <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/ai-visibility"
              className="inline-flex items-center gap-2 px-10 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all text-sm md:text-base"
            >
              View Our AI Visibility Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GEOResources;
