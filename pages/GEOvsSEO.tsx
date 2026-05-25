import React, { useEffect } from 'react';
import { Search, MessageCircle, Mic, HelpCircle } from 'lucide-react';

const GEOvsSEO: React.FC = () => {
  useEffect(() => {
    document.title = 'GEO vs SEO vs AEO — What\'s the Difference? | Qlavo';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'GEO vs SEO vs AEO explained with examples. Learn the difference between Generative Engine Optimization, Search Engine Optimization, and Answer Engine Optimization — and why you need all three.');
    }
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-medium text-emerald-500 uppercase tracking-[0.2em] mb-4">
              Comparison Guide
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6 leading-tight">
              GEO vs SEO vs AEO:<br />
              <span className="text-gradient-emerald">What's the Difference?</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">
              Three acronyms. Three different jobs. One common confusion.
              Here is the difference explained with real examples.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1.5 text-xs bg-white/5 text-zinc-300 rounded-full border border-white/5">
              7 min read
            </span>
            <span className="px-3 py-1.5 text-xs bg-white/5 text-zinc-300 rounded-full border border-white/5">
              Updated May 2026
            </span>
          </div>
        </div>
      </section>

      {/* The Core Difference */}
      <section className="pb-20 md:pb-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bento-card p-8 md:p-10 mb-10">
            <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">
              One sentence each
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02]">
                <div className="flex items-center gap-2 mb-4">
                  <Search className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">SEO</span>
                </div>
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  SEO gets your website to appear on Google when someone searches for your keywords.
                </p>
              </div>
              <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02]">
                <div className="flex items-center gap-2 mb-4">
                  <Mic className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">AEO</span>
                </div>
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  AEO gets your answer to appear directly in voice search results and featured snippets.
                </p>
              </div>
              <div className="p-6 border border-emerald-500/20 rounded-2xl bg-emerald-500/[0.03]">
                <div className="flex items-center gap-2 mb-4">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">GEO</span>
                </div>
                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  GEO gets your brand cited inside AI-generated answers from ChatGPT, Perplexity, and Gemini.
                </p>
              </div>
            </div>
          </div>

          {/* The Table */}
          <div className="bento-card p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">
              Side by side
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 pr-4 text-zinc-400 font-medium">Dimension</th>
                    <th className="py-4 px-4 text-blue-400 font-medium">SEO</th>
                    <th className="py-4 px-4 text-purple-400 font-medium">AEO</th>
                    <th className="py-4 pl-4 text-emerald-400 font-medium">GEO</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300 font-light">
                  {[
                    ['Primary target', 'Search engines', 'Voice assistants', 'AI models & LLMs'],
                    ['What you win', 'Page rankings', 'Featured snippets', 'AI citations'],
                    ['User gets', 'A list of links', 'A single answer', 'A generated response'],
                    ['Traffic type', 'Clicks to your site', 'Zero-click views', 'Brand mentions in AI'],
                    ['Content format', 'Keyword-optimized pages', 'Q&A / FAQ structure', 'Entity-rich, retrievable content'],
                    ['Main metric', 'Organic sessions', 'Snippet ownership rate', 'AI citation frequency'],
                    ['Time to impact', '1-6 months', '2-8 weeks', '1-12 weeks'],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-3 pr-4 text-white font-medium">{row[0]}</td>
                      <td className="py-3 px-4">{row[1]}</td>
                      <td className="py-3 px-4">{row[2]}</td>
                      <td className="py-3 pl-4 text-emerald-300">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Deeper Explanation */}
      <section className="pb-20 md:pb-28 px-6 border-t border-white/5 pt-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* SEO */}
          <div className="bento-card p-8 md:p-10 border-l-4 border-l-blue-500/50">
            <div className="flex items-center gap-3 mb-6">
              <Search className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">SEO — Search Engine Optimization</h2>
            </div>
            <p className="text-zinc-300 font-light leading-relaxed mb-4">
              SEO is the oldest and most established of the three. It asks: "What page on my site is most likely to rank for this keyword?" Then it optimizes that page through keywords, backlinks, technical performance, and content depth.
            </p>
            <p className="text-zinc-300 font-light leading-relaxed mb-4">
              The goal is a click. A user searches on Google, sees your page in the results, and clicks through. Success is measured in rankings, organic traffic, and conversion rate.
            </p>
            <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5">
              <p className="text-zinc-400 text-sm font-light">
                <span className="text-zinc-300 font-medium">Real example:</span> A user searches "best CRM for startups." SEO makes your blog post appear at position two on Google. They click, read, and sign up for your trial.
              </p>
            </div>
          </div>

          {/* AEO */}
          <div className="bento-card p-8 md:p-10 border-l-4 border-l-purple-500/50">
            <div className="flex items-center gap-3 mb-6">
              <Mic className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-semibold text-white">AEO — Answer Engine Optimization</h2>
            </div>
            <p className="text-zinc-300 font-light leading-relaxed mb-4">
              AEO emerged when search engines started answering questions directly instead of just listing links. You know it as featured snippets, "people also ask" boxes, and voice assistant responses from Siri and Alexa.
            </p>
            <p className="text-zinc-300 font-light leading-relaxed mb-4">
              The goal is a direct answer. A user asks a question, and your content is the answer they see without clicking anything. Success is measured in snippet ownership and voice search visibility.
            </p>
            <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5">
              <p className="text-zinc-400 text-sm font-light">
                <span className="text-zinc-300 font-medium">Real example:</span> A user asks Siri "What is GEO?" AEO makes your concise definition the answer Siri reads aloud. The user never visits your site.
              </p>
            </div>
          </div>

          {/* GEO */}
          <div className="bento-card p-8 md:p-10 border-l-4 border-l-emerald-500/50 bg-emerald-500/[0.02]">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-semibold text-white">GEO — Generative Engine Optimization</h2>
            </div>
            <p className="text-zinc-300 font-light leading-relaxed mb-4">
              GEO is the newest and least understood. It asks: "Does my brand exist as a trusted entity in the data these AI models are trained on?" Then it optimizes not a single page, but your entire web presence — your consistency across platforms, the third-party sites that mention you, the structure of your content, and the authority signals you accumulate.
            </p>
            <p className="text-zinc-300 font-light leading-relaxed mb-4">
              The goal is a citation. A user asks ChatGPT for a recommendation, and your brand appears in the generated answer. Success is measured in AI citation rate — the percentage of relevant prompts where your brand gets mentioned.
            </p>
            <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5">
              <p className="text-zinc-400 text-sm font-light">
                <span className="text-zinc-300 font-medium">Real example:</span> A user asks ChatGPT "Best GEO agencies for B2B companies." GEO makes your brand appear in the list ChatGPT generates. The user learns about you without ever opening a search engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="pb-20 md:pb-28 px-6 border-t border-white/5 pt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-white tracking-tight mb-6">
            Why the distinction matters
          </h2>
          <div className="bento-card p-8 md:p-10">
            <p className="text-zinc-300 font-light leading-relaxed mb-4">
              Most businesses treat all three as the same thing. They hire an SEO agency and ask for "AI visibility." The agency adds schema markup, calls it GEO, and sends a report showing keyword rankings.
            </p>
            <p className="text-zinc-300 font-light leading-relaxed mb-4">
              This is like hiring a carpenter and asking for plumbing. Schema markup helps AEO. It does almost nothing for GEO. GEO requires entity management, citation building, cross-platform consistency, and retrievable content architecture — skills that most SEO agencies do not have.
            </p>
            <p className="text-zinc-300 font-light leading-relaxed">
              The businesses that win in AI search will be the ones that understand which optimization they actually need and pay for the right one. If you need clicks from Google, buy SEO. If you need answers in voice search, buy AEO. If you need your brand mentioned inside ChatGPT, buy GEO. Do not let anyone sell you one as the other.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20 md:pb-28 px-6 border-t border-white/5 pt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-white tracking-tight mb-10 text-center">
            Common Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'If I have good SEO, do I also have good GEO?',
                a: 'No. SEO and GEO optimize for different things. You can rank number one on Google for your keyword and be completely invisible in ChatGPT. Many businesses discover this the hard way.',
              },
              {
                q: 'Does GEO replace SEO?',
                a: 'No. GEO builds on top of SEO. AI systems still rely on well-structured, authoritative content. But GEO adds an entirely new layer of optimization that SEO does not cover.',
              },
              {
                q: 'Which one should I start with?',
                a: 'If you have no SEO foundation, start there. If your SEO is solid but you are invisible in AI answers, add GEO. The order matters — SEO first, then GEO.',
              },
              {
                q: 'Do most agencies offer all three?',
                a: 'Most claim to. Very few actually deliver. SEO is mature. AEO is straightforward. GEO is genuinely new. Ask specific questions about entity optimization, citation tracking, and cross-platform consistency. If the answers are vague, they are probably repackaging SEO.',
              },
              {
                q: 'Can I measure all three the same way?',
                a: 'No. SEO is measured in rankings and traffic. AEO is measured in snippet ownership. GEO is measured in AI citation rate — how often your brand appears in AI-generated answers for relevant prompts. Different metrics for different jobs.',
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="glass-panel rounded-2xl border border-white/5 overflow-hidden group"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer text-white font-medium text-base hover:bg-white/[0.01] transition-colors list-none">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    {faq.q}
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-zinc-600 group-open:rotate-180 transition-transform shrink-0">
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-0">
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
            A test you can run right now
          </h2>
          <p className="text-zinc-400 text-lg font-light mb-8 leading-relaxed">
            Open ChatGPT and type: "Best [your industry] companies for [your customer's need]."
            Then open Google and search the same thing. Compare the results.
            If Google lists you but ChatGPT does not, you know exactly where your gap is.
          </p>
          <p className="text-zinc-500 text-sm font-light max-w-xl mx-auto">
            Qlavo helps businesses close the gap between their Google visibility and their
            AI visibility. This guide exists because the difference between SEO, AEO, and GEO
            needs to be stated plainly.
          </p>
        </div>
      </section>
    </div>
  );
};

export default GEOvsSEO;
