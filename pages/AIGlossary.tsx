import React, { useState } from 'react';
import { BookA, Search, Hash } from 'lucide-react';
import { Link } from 'react-router-dom';

const glossaryTerms = [
  {
    term: "Generative Engine Optimization (GEO)",
    definition: "The practice of optimizing a brand's online presence to be cited and recommended by AI-powered search engines and large language models (LLMs) like ChatGPT, Perplexity, and Google Gemini.",
    category: "Core Concept"
  },
  {
    term: "Citation Logic",
    definition: "The underlying algorithms and heuristics that determine which external sources an AI model chooses to reference or link to when generating an answer to a user prompt.",
    category: "Technical"
  },
  {
    term: "Entity Consistency",
    definition: "The degree to which a brand's name, core services, and defining characteristics remain identical across high-authority platforms (website, LinkedIn, Crunchbase, GitHub). High consistency builds AI confidence.",
    category: "Strategy"
  },
  {
    term: "Zero-Click Search",
    definition: "A search query where the user's intent is fully satisfied directly on the search engine results page (SERP) or within the AI chat interface, without requiring them to click through to a third-party website.",
    category: "Consumer Behavior"
  },
  {
    term: "Semantic Clustering",
    definition: "The method by which AI models group related concepts, pain points, and entities together in their knowledge base, moving beyond direct 'keyword exact-matching'.",
    category: "Technical"
  },
  {
    term: "Knowledge Graph Integration",
    definition: "The process by which an AI model maps relationships between real-world entities (people, businesses, locations), which is heavily influenced by structured data like JSON-LD.",
    category: "Technical"
  },
  {
    term: "Source Diversity",
    definition: "A key trust signal for LLMs where a claim or brand recommendation is corroborated by multiple, unconnected high-domain-authority websites rather than a single source.",
    category: "Strategy"
  },
  {
    term: "Retrieval-Augmented Generation (RAG)",
    definition: "An AI framework that improves the quality of LLM-generated responses by grounding the model on external sources of knowledge (like a real-time web search via Perplexity) before answering.",
    category: "Technical"
  },
  {
    term: "Multimodal Authority",
    definition: "Establishing brand credibility across text, image, and video formats (e.g., YouTube transcripts), as modern AI models ingest and cross-reference data across all media types.",
    category: "Strategy"
  },
  {
    term: "LLM Hallucination",
    definition: "When an AI model generates highly plausible-sounding but factually incorrect or nonsensical information. GEO strategies aim to prevent a brand from being associated with hallucinatory data.",
    category: "Core Concept"
  }
];

const AIGlossary: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTerms = glossaryTerms.filter(item => 
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-zinc-900 rounded-xl border border-white/10">
                <BookA className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-zinc-500 uppercase tracking-widest">Qlavo Dictionary</span>
            </div>
            <span className="text-xs text-zinc-600 font-mono mt-2">Last Updated: March 13, 2026</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tighter mb-8 leading-tight">
            The Glossary of <br />AI Search & GEO
          </h1>

          <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
            Clear, structured definitions of the concepts driving the shift from traditional SEO to Generative Engine Optimization.
          </p>
        </div>
      </section>

      {/* Glossary Dictionary */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-12">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-500" />
            </div>
            <input
              type="text"
              className="w-full bg-zinc-900/50 border border-white/10 text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-white/30 transition-colors"
              placeholder="Search terms (e.g., Semantic Clustering, RAG, Entity)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Term List */}
          <div className="space-y-8">
            {filteredTerms.length > 0 ? (
              filteredTerms.map((item, index) => (
                <div key={index} id={item.term.toLowerCase().replace(/\s+/g, '-')} className="group flex gap-4 items-start p-6 md:p-8 bg-zinc-900/20 border border-white/5 rounded-2xl hover:bg-zinc-900/40 transition-colors">
                  <div className="mt-1 hidden sm:block">
                    <Hash className="w-5 h-5 text-zinc-700 group-hover:text-zinc-400 transition-colors" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="text-xl md:text-2xl font-medium text-white">{item.term}</h2>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/10 text-zinc-400 bg-zinc-900">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-zinc-300 font-light leading-relaxed text-base md:text-lg">
                      {item.definition}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 border border-dashed border-white/10 rounded-2xl">
                <p className="text-zinc-500">No terms found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center border-t border-white/5">
         <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">Need help navigating AI visibility?</h2>
          <p className="text-zinc-400 mb-8 text-base font-light">
            Our team builds custom Generative Engine Optimization strategies for modern businesses.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05]"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIGlossary;
