import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, Search, Zap, Globe, AlertCircle, CheckCircle2 } from 'lucide-react';

const StateOfAISearchApril2026: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Schema Stacking */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": "https://qlavo.in/blog/state-of-ai-search-april-2026#article",
              "headline": "State of AI Search for GEO Agencies: April 2026 Data",
              "description": "A research-led audit of 22 target prompts across Google AI Overview and ChatGPT, documenting citation patterns, competitor dominance, and territorial gaps in the GEO space.",
              "datePublished": "2026-04-21",
              "dateModified": "2026-05-04",
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
                "@id": "https://qlavo.in/blog/state-of-ai-search-april-2026"
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How often should you run a GEO prompt audit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Monthly is the minimum for a brand actively building citation authority. Weekly is appropriate if you are in a competitive category where AI Overviews are actively forming."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which AI platform is best for measuring GEO progress?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Perplexity is the fastest feedback loop — it indexes fresh content in near real-time and cites sources directly. Google AI Overviews are the highest priority for volume but slower to update."
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
            <span>By Qlavo Research</span> • <span>Published: April 21, 2026</span> • <span>Updated: May 4, 2026</span> • <span>6 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-8">
            State of AI Search for GEO Agencies: <br />What the Data Actually Shows
          </h1>

          <p className="text-xl text-zinc-600 font-light leading-relaxed mb-10">
            We've spent the last month running buying-intent prompts through Google AI Overview and ChatGPT, logging every result, and analysing the citation patterns behind them. Here is the raw data.
          </p>

          <div className="bg-zinc-900 text-white rounded-2xl p-8 mb-12">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-accent" />
              Audit Methodology
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-light text-zinc-400">
              <li className="flex gap-3"><span className="text-accent">→</span> 22 Prompts (12 Google, 10 ChatGPT)</li>
              <li className="flex gap-3"><span className="text-accent">→</span> Region: UK & Global B2B</li>
              <li className="flex gap-3"><span className="text-accent">→</span> Tool: Headed browser, no VPN</li>
              <li className="flex gap-3"><span className="text-accent">→</span> Results logged immediately</li>
            </ul>
          </div>

          <div className="space-y-12 text-zinc-800 leading-relaxed text-lg font-light">
            <section>
              <h2 className="text-2xl font-bold text-black mb-6">Finding 1: Territorial Gaps in AI Overviews</h2>
              <p className="mb-4">
                Google AI Overview triggered on 8 of 12 queries. Crucially, 4 high-intent queries (e.g., "GEO agency UK") returned **no AI Overview at all**. These represent "territorial gaps" — unclaimed competitive space where the first brand to establish authority will likely own the future AI-curated answer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6">Finding 2: The Dominance of Service Pages</h2>
              <p className="mb-4">
                100% of cited URLs in Google AI Overviews were either **dedicated service pages** (e.g., /services/geo/) or **third-party roundups**. Zero AI Overviews cited general blog posts or homepages. If you don't have a dedicated page, you don't exist in the AI summary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6">Finding 3: ChatGPT's Source Logic</h2>
              <p className="mb-4">
                ChatGPT prioritises **aggregator listicles** over agency websites. For agency discovery queries, it cited articles from Linkflow, Siege Media, and Growthner rather than the agencies themselves. To win in ChatGPT, you need to be *in* the lists it reads.
              </p>
            </section>

            <section className="my-16">
              <h2 className="text-2xl font-bold text-black mb-8 text-center">Competitive Landscape</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-zinc-200 border border-zinc-200 rounded-xl overflow-hidden">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">Platform</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">Dominant Agency</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">Key Signal</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-zinc-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-zinc-600">Google AIO (UK)</td>
                      <td className="px-6 py-4 text-sm font-medium text-black">ClickSlice</td>
                      <td className="px-6 py-4 text-sm text-zinc-500">Dedicated AI-SEO URL</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-zinc-600">Google AIO (Global)</td>
                      <td className="px-6 py-4 text-sm font-medium text-black">Directive</td>
                      <td className="px-6 py-4 text-sm text-zinc-500">Established Category Authority</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-zinc-600">ChatGPT</td>
                      <td className="px-6 py-4 text-sm font-medium text-black">Siege / iPullRank</td>
                      <td className="px-6 py-4 text-sm text-zinc-500">Third-Party Roundup Presence</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6">Entity Disambiguation Failure</h2>
              <div className="bg-red-50 border border-red-100 rounded-xl p-6 flex gap-4 items-start mb-6">
                <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                <p className="text-red-900 text-sm italic leading-relaxed">
                  "When we asked ChatGPT about Qlavo, it returned info on a branding studio called QLO. Why? Because they had a corroborated Clutch profile and we didn't. AI defaults to the entity with the most verifiable structured data."
                </p>
              </div>
            </section>

            <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 mt-12 text-center">
              <h3 className="text-xl font-semibold text-black mb-4">Want to see where your brand stands?</h3>
              <p className="text-zinc-500 mb-8 max-w-lg mx-auto">Our research shows that technical gaps (like missing schema or blocked crawlers) are the primary reason B2B brands stay invisible to AI.</p>
              <Link to="/geo-calculator" className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white font-semibold rounded-full hover:bg-zinc-800 transition-all">
                Run Your Free GEO Audit
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default StateOfAISearchApril2026;
