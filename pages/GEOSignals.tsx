import React from 'react';
import { ShieldCheck, Zap, Database, Globe, Network, Cpu, TextCursorInput, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GEOSignals: React.FC = () => {
  const publishDate = "2026-04-21";
  const signals = [
    {
      id: "01",
      icon: Globe,
      title: "Entity Consistency (NAP-D)",
      desc: "AI models don't just 'crawl' your site; they cross-reference your Name, Address, Phone, and semi-permanent Description (NAP-D) across high-authority nodes. If your LinkedIn bio contradicts your website, the AI's confidence score drops.",
      action: "Standardize your one-sentence company description across LinkedIn, Crunchbase, and GitHub."
    },
    {
      id: "02",
      icon: Database,
      title: "Multi-Schema Stacking",
      desc: "LLMs are data-hungry. By stacking Article, ItemList, and FAQPage schemas, you provide multiple 'entry points' for the model to index the same piece of information, increasing the likelihood of being cited as a primary source.",
      action: "Use JSON-LD to explicitly define the relationships between your services and your founder's credentials."
    },
    {
      id: "03",
      icon: Network,
      title: "Citation Corroboration",
      desc: "A single backlink is a vote; a citation on a technical platform (like a GitHub repo or Hugging Face dataset) is a validation. AI models heavily weight mentions in high-trust technical environments.",
      action: "Publish 1-2 open-source assets that naturally reference your technical methodology."
    },
    {
      id: "04",
      icon: Cpu,
      title: "LLM Hallucination Prevention Markers",
      desc: "Models prioritize 'verifiable truth.' By including clear, non-promotional, data-backed claims (e.g., '14% reduction in lead cost' instead of 'best lead Gen'), you reduce the agent's risk of hallucinating.",
      action: "Audit your hero copy for superlatives and replace them with objective stats."
    },
    {
      id: "05",
      icon: Zap,
      title: "Recency & Freshness Signals",
      desc: "Real-time AI (Perplexity, GPT-4o with Search) looks for 'Last Updated' tags. Content that signals it is current for 2026 will be prioritized over historically authoritative but stale content.",
      action: "Add dynamic 'Last Updated' timestamps to all of your service pages."
    },
    {
      id: "06",
      icon: TextCursorInput,
      title: "Conversational Intent Mapping",
      desc: "Humans ask AI engines questions, not keywords. Your content must be structured as direct answers to probable user prompts (e.g., 'How do I scale B2B visibility?') rather than just focusing on 'B2B Marketing' as a keyword.",
      action: "Transform your H2 headers into specific, answer-able questions."
    },
    {
      id: "07",
      icon: ShieldCheck,
      title: "Multimodal Authority (OCR/ASR)",
      desc: "Modern models 'see' your images (OCR) and 'hear' your video transcripts (ASR). If your graphic text doesn't match your page copy, it creates an ontological mismatch that confuses the engine.",
      action: "Ensure all infographic text is identical to its adjacent HTML body copy."
    },
    {
      id: "08",
      icon: Network,
      title: "Wikidata Entity Anchoring (sameAs)",
      desc: "LLMs are trained heavily on Wikidata — one of the world's most authoritative structured knowledge graphs. Adding a 'sameAs' property to your Organization JSON-LD that points to your Wikidata Q-code tells AI models: 'I am the same verified entity that Wikidata has already catalogued.' Our April 2026 audit found that enterprise brands with this implemented receive more consistent, accurate descriptions in AI-generated answers.",
      action: "Create or claim your brand's Wikidata entry. Copy your Q-code and add 'sameAs': 'https://www.wikidata.org/wiki/Q[YourID]' to your Organization JSON-LD."
    }
  ];

  const faqs = [
    {
      q: "What is Schema Stacking?",
      a: "Schema Stacking is the practice of applying multiple types of structured data (like Article and FAQPage) to a single URL to give AI models multiple ways to parse and understand the content."
    },
    {
      q: "Why does Entity Consistency matter for AI?",
      a: "AI models build a Knowledge Graph. If your 'Entity' (your brand) has conflicting information across the web, the model marks the data as untrustworthy and will avoid recommending you in sensitive or high-value answers."
    },
    {
      q: "How fast do GEO changes take effect?",
      a: "Real-time engines like Perplexity or SearchGPT can reflect GEO optimizations in as little as 24-48 hours, while foundational models like Claude or the base GPT may take several months (until their next training cycle)."
    },
    {
      q: "What is Wikidata sameAs and why does it matter for GEO?",
      a: "The sameAs schema property links your Organization JSON-LD to your Wikidata entity ID. Since LLMs are trained extensively on Wikidata, this creates a direct corroboration bridge between your live website and a highly-trusted training source, increasing citation confidence and reducing hallucination risk."
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* JSON-LD Stacking */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": "https://qlavo.in/top-7-geo-signals-2026#article",
              "headline": "Top 7 GEO Signals for B2B Brands in 2026",
              "description": "A technical breakdown of the most influential Generative Engine Optimization signals for B2B companies looking to be cited in AI search results.",
              "datePublished": publishDate,
              "author": {
                "@type": "Person",
                "name": "Ansh Bhatia",
                "url": "https://qlavo.in/about"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Qlavo",
                "logo": "https://qlavo.in/logo.png"
              }
            },
            {
              "@type": "ItemList",
              "@id": "https://qlavo.in/top-7-geo-signals-2026#itemlist",
              "name": "Top 7 GEO Signals for 2026",
              "itemListElement": signals.map((s, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "name": s.title,
                "description": s.desc
              }))
            },
            {
              "@type": "FAQPage",
              "@id": "https://qlavo.in/top-7-geo-signals-2026#faq",
              "mainEntity": faqs.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.a
                }
              }))
            }
          ]
        })}
      </script>

      {/* Hero Section */}
      <section className="pt-32 md:pt-44 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-emerald-500/10 to-transparent blur-[120px] -z-10 rounded-full" />
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            MARCH 2026 UPDATE
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Top 7 GEO Signals <br />for B2B Brands.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl">
            As AI assistants move from experimental chat to primary search interfaces, these seven signals determine whether your brand is an authority or an invisible entity.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {signals.map((signal) => (
              <div key={signal.id} className="relative group">
                <div className="absolute -left-4 md:-left-12 top-0 text-zinc-800 text-6xl md:text-8xl font-bold font-mono group-hover:text-zinc-700 transition-colors">
                  {signal.id}
                </div>
                <div className="relative pl-6 md:pl-16">
                  <div className="flex items-center gap-3 mb-4">
                    <signal.icon className="w-6 h-6 text-emerald-500" />
                    <h2 className="text-2xl md:text-3xl font-medium">{signal.title}</h2>
                  </div>
                  <p className="text-lg text-zinc-400 font-light leading-relaxed mb-6">
                    {signal.desc}
                  </p>
                  <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5 flex gap-4 items-start">
                    <div className="mt-1 px-1.5 py-0.5 rounded bg-white text-[8px] text-black font-bold uppercase tracking-tighter">Action</div>
                    <p className="text-sm text-zinc-500 italic">
                      {signal.action}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 border-t border-white/5 bg-zinc-950/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5">
                <h3 className="text-lg font-medium mb-3 text-emerald-400">{faq.q}</h3>
                <p className="text-zinc-400 font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-32 px-6 text-center border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[100px] -z-10 rounded-full" />
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight">Stop being invisible to AI agents.</h2>
          <p className="text-zinc-400 text-lg mb-10 font-light">
            We specialize in deep technical Generative Engine Optimization. Let's audit your brand's AI persona today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all hover:scale-105">
              Secure Your AI Presence
            </Link>
            <Link to="/geo-calculator" className="px-10 py-5 bg-transparent border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              Run Free Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GEOSignals;
