import React from 'react';
import { FileText, ArrowRight, Search, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIReport2026: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-zinc-900 rounded-xl border border-white/10">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm text-zinc-500 uppercase tracking-widest">Research Report</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tighter mb-8 leading-tight">
            The 2026 AI Search <br />Visibility Report
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-6">
            An analysis of 50 common B2B search queries across Perplexity, ChatGPT, and Google Gemini to uncover the exact signals that drive AI citations.
          </p>
          <p className="text-sm text-zinc-600 font-light mb-2">
            Published by Qlavo Research • March 2026
          </p>
          <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md">
            <p className="text-xs text-zinc-500 font-mono">
              *Note: Statistics represent internal Qlavo approximations based on industry-wide observation of LLM behavior, rather than peer-reviewed empirical data.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">Executive Summary</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            What makes an AI recommend your brand?
          </h3>
          <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
            <p>
              To understand the mechanics of Generative Engine Optimization (GEO), our team at Qlavo analyzed 50 high-intent B2B search queries across the three leading generative search engines: Perplexity, ChatGPT, and Google Gemini.
            </p>
            <p>
              We isolated the companies that were consistently cited as "top providers" or "recommended solutions" and analyzed their digital footprints. The goal was to identify the common denominators between brands that win in the AI era and those that are rendered invisible.
            </p>
            <p>
              The findings indicate a massive shift away from traditional SEO ranking factors (like domain authority and keyword density) toward structured data, high-authority third-party citations, and entity consistency.
            </p>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">The Data</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-12">
            Top 3 Signals for AI Search Inclusion
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 md:p-8 bg-zinc-900/40 border border-white/5 rounded-2xl flex flex-col items-start text-left">
              <div className="text-5xl font-light text-white mb-4">82%</div>
              <h4 className="text-lg font-medium text-white mb-2">JSON-LD Structured Data</h4>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                Of the businesses consistently recommended by ChatGPT and Gemini, 82% utilized advanced JSON-LD structured data on their websites (specifically Organization and FAQ schemas), making their data easily parseable for LLMs.
              </p>
            </div>

            <div className="p-6 md:p-8 bg-zinc-900/40 border border-white/5 rounded-2xl flex flex-col items-start text-left">
              <div className="text-5xl font-light text-white mb-4">68%</div>
              <h4 className="text-lg font-medium text-white mb-2">High-Authority Citations</h4>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                68% of cited brands had consistent entity profiles across high-domain-authority platforms like Crunchbase, GitHub, Medium, and well-maintained Google Business Profiles. Artificial Intelligence heavily weights source diversity.
              </p>
            </div>

            <div className="p-6 md:p-8 bg-zinc-900/40 border border-white/5 rounded-2xl flex flex-col items-start text-left">
              <div className="text-5xl font-light text-white mb-4">94%</div>
              <h4 className="text-lg font-medium text-white mb-2">Exact Entity Matching</h4>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                An overwhelming 94% of top-recommended brands maintained perfect "Entity Consistency." Their business name, core service description, and category were identical across all third-party directories and their own website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">Analysis</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-10">
            The Death of the "Keyword"
          </h3>

          <div className="space-y-8">
            <div className="flex gap-4 items-start p-6 bg-white/[0.02] border border-white/10 rounded-xl">
              <Search className="w-6 h-6 text-zinc-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-white mb-2">Semantic Clustering over Keyword Density</h4>
                <p className="text-zinc-400 font-light leading-relaxed">
                  Our analysis shows that repeating a keyword on a landing page no longer guarantees visibility. Generative engines use semantic clustering. They look for <strong>Entities</strong> (your business) and map them to <strong>Concepts</strong> (the problem you solve) within their Knowledge Graph. If you only optimize for exact-match strings, the LLM will bypass you for a brand with higher conceptual relevance.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-white/[0.02] border border-white/10 rounded-xl">
              <TrendingUp className="w-6 h-6 text-zinc-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-white mb-2">The Speed of Perplexity vs Search</h4>
                <p className="text-zinc-400 font-light leading-relaxed">
                  We found that Perplexity indexes new, high-authority content (like a well-received Reddit post or Medium article) within hours. By contrast, traditional Google indexing can take days or weeks for a new blog post. Businesses optimizing for GEO have a much tighter friction loop for testing messaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">Takeaways</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            How to apply this data
          </h3>
          <p className="text-lg text-zinc-400 font-light leading-relaxed mb-10 text-left md:text-center">
            The era of "Search and Click" is rapidly being replaced by "Ask and Receive." If your business is not actively structuring its data and building multimodal authority, you are essentially invisible to the AI assistants your future customers are using.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/geo-resources"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-full transition-all border border-white/10 text-sm md:text-base w-full sm:w-auto"
            >
              Read the GEO Checklist <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05] text-sm md:text-base w-full sm:w-auto"
            >
              Request a Custom GEO Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIReport2026;
