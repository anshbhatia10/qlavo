import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, AlertCircle, Info, ExternalLink } from 'lucide-react';

const HubSpotAudit: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Schema Stacking */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": "https://qlavo.in/blog/hubspot-geo-audit-2026#article",
              "headline": "We Ran HubSpot Through a GEO Audit. Here's What We Found.",
              "description": "A technical Generative Engine Optimization (GEO) audit of HubSpot. Exploring AI crawler access, schema gaps, and entity consistency signals.",
              "datePublished": "2026-04-13",
              "dateModified": "2026-04-13",
              "author": {
                "@type": "Organization",
                "name": "Qlavo",
                "url": "https://qlavo.in"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Qlavo",
                "url": "https://qlavo.in",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://qlavo.in/logo.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://qlavo.in/blog/hubspot-geo-audit-2026"
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is HubSpot optimized for GEO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Partially. HubSpot scores approximately 76% on Qlavo's GEO audit framework. Their crawler access and third-party authority are excellent, but their schema stacking has notable gaps."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is a GEO audit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A GEO audit is an assessment of how well a website and brand entity are structured to be discovered, extracted, and cited by AI-powered answer engines like ChatGPT, Perplexity, and Google Gemini."
                  }
                }
              ]
            }
          ]
        })}
      </script>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/geo-resources" className="inline-flex items-center gap-2 text-zinc-500 hover:text-black transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Resources
        </Link>

        <article className="qlavo-article-wrapper">
          <div className="article-meta text-sm text-zinc-500 mb-4">
            <span>By Qlavo Research</span> • <span>Published: April 13, 2026</span> • <span>7 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-8">
            We Ran HubSpot Through a GEO Audit. <br />Here's What We Found.
          </h1>

          <p className="text-xl text-zinc-600 font-light leading-relaxed mb-10">
            HubSpot is an SEO giant. But when we applied our Generative Engine Optimization (GEO) framework to their public data, we found surprising technical gaps that leave them vulnerable to AI recommendation shifts.
          </p>

          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 mb-12">
            <h2 className="text-lg font-semibold text-black mb-4">Executive Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-black">Overall GEO Score</p>
                  <p className="text-2xl font-bold text-black">38/50 (76%)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-100 rounded-lg">
                  <Info className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-black">Status</p>
                  <p className="text-base font-semibold text-zinc-700">Enterprise Mature</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12 text-zinc-800 leading-relaxed text-lg font-light">
            <section>
              <h2 className="text-2xl font-bold text-black mb-6">Dimension 1: Crawler Access (7/10)</h2>
              <p className="mb-4">
                HubSpot's <code>robots.txt</code> correctly defaults to allowing all bots. However, it lacks <strong>explicit</strong> instructions for AI crawlers like GPTBot, PerplexityBot, or GoogleOther. While technically permitted, this passive access is a risk factor as AI crawling policies become more complex.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6">Dimension 2: Schema Coverage (5/10)</h2>
              <p className="mb-4">
                This is the biggest gap. Verified via live audit, HubSpot's listicle content (e.g., "Best Sales Management Software") is <strong>missing ItemList schema</strong>. 
              </p>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-3 text-sm text-amber-800 italic">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>Finding: Without ItemList schema, AI models must gamble on HTML parsing rather than reading a defined list object.</span>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6">Dimension 3: Content Extractability (8/10)</h2>
              <p>
                HubSpot excels here. Their use of TL;DR blocks and structured headers makes their content highly machine-readable. Their "State of Marketing" reports provide the specific, attributable statistics that AI models love to cite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6">Dimension 4: Entity Consistency (8/10)</h2>
              <p>
                Strong brand-level consistency. We verified they link to their **Wikidata** entity in their homepage schema — a sophisticated move that anchors their identity for LLM training sets. Their only weakness is product-category fragmentation across different hubs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6">Dimension 5: Third-Party Authority (10/10)</h2>
              <p>
                The gold standard. HubSpot is cited by thousands of high-authority domains, Gartner properties, and news outlets. This massive "corroboration web" makes them virtually immune to technical errors in the long run.
              </p>
            </section>

            <section className="bg-black text-white p-8 rounded-3xl mt-16">
              <h2 className="text-2xl font-bold mb-6">Does your brand stand a chance?</h2>
              <p className="text-zinc-400 mb-8">
                If an SEO giant like HubSpot has schema gaps, your business likely does too. These gaps are your biggest opportunity to leapfrog competitors in AI search results.
              </p>
              <Link to="/geo-calculator" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all">
                Run Your Free GEO Audit
              </Link>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default HubSpotAudit;
