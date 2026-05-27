import React from 'react';
import SEOMeta from '../components/SEOMeta';
import { BookOpen, Search, Brain, Network, FileText, BarChart3, ArrowRight } from 'lucide-react';

const sections = [
  {
    icon: <Search className="w-5 h-5" />,
    title: 'What is GEO?',
    content: `Last Tuesday a founder told me: "We rank top three on Google for our main keyword. But when someone asks ChatGPT to recommend a provider in our space, we never appear. Our competitor shows up every time."

This is the problem GEO exists to solve.

Generative Engine Optimization is the practice of making your brand visible inside AI-generated answers. Not on a search results page — inside the answer itself. When someone opens ChatGPT and types "who is the best provider of X service," GEO determines whether your name appears in the response or gets left out.

The mechanics are different from SEO. Search engines rank pages. AI systems retrieve entities. They look for brands that appear consistently across the web with the same name, the same description, the same category. They look for third-party mentions, structured data, and clear topical authority. They prefer sources that are easy to quote, easy to cite, and hard to contradict.

GEO is not a replacement for SEO. It is a new layer on top of it. The brands that win in AI search will be the ones that build both.`,
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: 'How GEO Works — The Retrieval Layer',
    content: `When you ask ChatGPT a question, it does not scan the live web the way Google does. It generates an answer from what it already knows — its training data — supplemented by real-time retrieval from Bing and other sources.

This creates a different playing field.

Traditional SEO optimized for a crawler that reads your pages, follows your links, and ranks you based on keywords and backlinks. GEO optimizes for a system that asks three questions:

1. Does this brand exist as a recognized entity across the web?
2. Does it have consistent name, location, and category on the platforms AI trusts?
3. Do other authoritative sources mention it in the same context?

The brands that satisfy all three get cited. The ones that do not get left out.

This is why a company with a clean LinkedIn profile, a verified Crunchbase listing, consistent schema markup, and mentions on three industry blogs will often appear in AI answers before a larger competitor with none of these things. AI does not care about your budget. It cares about your retrievability.`,
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: 'GEO vs SEO vs AEO — The Real Difference',
    content: `A lot of people use these terms as if they mean the same thing. They do not.

SEO optimizes for search engine result pages. The goal is a top-ten ranking, a click, a session. The mechanism is keywords, backlinks, technical performance. Success looks like a graph going up in Google Search Console.

AEO — Answer Engine Optimization — optimizes for featured snippets and voice assistants. The goal is a direct answer in position zero. The mechanism is structured Q&A, FAQ schema, concise definitions. Success looks like your answer appearing above the organic results.

GEO optimizes for AI-generated answers. The goal is a citation inside a ChatGPT or Perplexity response. The mechanism is entity authority, third-party mentions, retrievable content, and cross-platform consistency. Success looks like your brand being recommended when someone asks an AI for a provider in your space.

All three matter. But they work at different levels:

SEO says: rank my page.
AEO says: answer the question.
GEO says: become the brand the AI trusts.

The distinction is not academic. A brand doing SEO alone will appear on Google but vanish inside ChatGPT. A brand doing GEO alone will appear in ChatGPT but lose the direct click. The strongest position is all three.`,
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'What Makes Content "Retrievable" by AI',
    content: `Not all content is equal in the eyes of an AI model. Some pages are easy to cite. Others are effectively invisible.

After auditing hundreds of prompts across ChatGPT, Perplexity, Gemini, and Google AI Overviews, a clear pattern emerges. The content that gets cited shares five qualities:

First, it is structured for extraction. Clear H2 headings, short paragraphs, bullet points, FAQ sections. An AI should be able to grab a single paragraph and quote it as a complete answer.

Second, it is concrete. Specific numbers, named entities, dates, locations. "We help businesses grow" gets ignored. "Qlavo is a Delhi-based GEO agency that helps B2B companies appear in ChatGPT, Perplexity, and Google AI Overviews" gets cited.

Third, it is third-party validated. AI systems trust consensus. A claim made only on your own website carries less weight than the same claim repeated on LinkedIn, Crunchbase, a podcast, a guest post, and two industry blogs.

Fourth, it is current. Perplexity and Google AI Overviews have strong recency bias. A page updated this week beats a better page updated in January.

Fifth, it is the best answer to a single question. Pages that try to cover everything cover nothing. A page that answers one question thoroughly will be cited more often than a page that answers ten questions vaguely.`,
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Measuring AI Visibility',
    content: `The old metric was Google rankings. The new metric is AI citation rate.

This is measured by running a set of prompts — typically 15 to 20 — across the major AI platforms and tracking whether your brand appears in each response. Which prompts? The ones your potential customers are actually typing.

For a B2B agency, these might be:
"Best GEO agencies for B2B brands"
"How to improve AI search visibility"
"What does a GEO agency cost"

For a logistics company:
"Best cold chain logistics providers in Germany"
"How to choose a freight forwarder for pharmaceuticals"

The baseline is your starting citation rate. The target is month-over-month improvement. Over time, this data becomes your most valuable sales asset — real trend information about when and where AI systems started recommending you.`,
  },
];

const GEOGuide: React.FC = () => {
  return (
    <>
      <SEOMeta
        title="What is Generative Engine Optimization (GEO)? — Complete Guide 2026 | Qlavo"
        description="Generative Engine Optimization (GEO) explained in plain English. Learn how to get your brand cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews. A complete 2026 guide from Qlavo."
        path="/what-is-generative-engine-optimization"
      />
      <div className="bg-black min-h-screen">
        {/* Schema: Article + FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id": "https://qlavo.in/what-is-generative-engine-optimization#article",
                "headline": "What is Generative Engine Optimization (GEO)? — 2026 Guide",
                "description": "Generative Engine Optimization (GEO) explained in plain English. How to get your brand cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews. A complete 2026 guide.",
                "datePublished": "2026-05-26",
                "dateModified": "2026-05-26",
                "author": {
                  "@type": "Organization",
                  "name": "Qlavo",
                  "url": "https://qlavo.in"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Qlavo",
                  "url": "https://qlavo.in"
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://qlavo.in/what-is-generative-engine-optimization"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Is GEO the same as SEO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. SEO gets you clicks on Google. GEO gets you cited inside AI answers. They work together — a strong SEO foundation helps GEO — but they optimize for different things."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does GEO take to work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It depends on the platform. Perplexity and Google Gemini update in near-real-time, so changes can appear within 1-2 weeks. ChatGPT and Claude update their underlying knowledge less often — expect 30-90 days. Google AI Overviews falls somewhere in between, typically 2-4 weeks."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I still need SEO if I do GEO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. GEO builds on top of SEO. AI systems still rely on well-structured, authoritative content. Dropping SEO for GEO would be like building a second floor before the ground floor is finished."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Who needs GEO most right now?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "B2B companies, agencies, consultants, and any business where buyers research using AI tools before purchasing. If your customers open ChatGPT before they open Google, you need GEO."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you actually measure GEO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "By running a fixed set of prompts across ChatGPT, Perplexity, Gemini, and Google AI Overviews, and tracking whether your brand appears in each response. You measure your baseline, then track changes month over month. This is called an AI visibility audit."
                    }
                  }
                ]
              }
            ]
          })}
        </script>
        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-medium text-emerald-500 uppercase tracking-[0.2em] mb-4">
                Complete Guide
              </p>
              <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6 leading-tight">
                What is Generative Engine<br />
                <span className="text-gradient-emerald">Optimization (GEO)?</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">
                A plain-English guide to the practice of getting your brand cited by ChatGPT,
                Perplexity, Gemini, and Google AI Overviews. No jargon. No theory. Just what works.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 text-xs bg-white/5 text-zinc-300 rounded-full border border-white/5">
                8 min read
              </span>
              <span className="px-3 py-1.5 text-xs bg-white/5 text-zinc-300 rounded-full border border-white/5">
                Updated May 2026
              </span>
            </div>
          </div>
        </section>

        {/* Sections */}
        <section className="pb-20 md:pb-28 px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section, i) => (
              <div key={i} className="bento-card p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-emerald-400">{section.icon}</span>
                  <h2 className="text-2xl font-semibold text-white tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <div className="prose prose-invert max-w-none">
                  {section.content.split('\n\n').filter(Boolean).map((paragraph, i) => (
                    <p key={i} className="text-zinc-300 font-light leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="pb-20 md:pb-28 px-6 border-t border-white/5 pt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-white tracking-tight mb-2">
              Quick Comparison
            </h2>
            <p className="text-zinc-400 font-light mb-10">
              How SEO, AEO, and GEO differ in practice.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 pr-4 text-zinc-400 font-medium">Dimension</th>
                    <th className="py-4 px-4 text-zinc-400 font-medium">SEO</th>
                    <th className="py-4 px-4 text-zinc-400 font-medium">AEO</th>
                    <th className="py-4 pl-4 text-emerald-400 font-medium">GEO</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300 font-light">
                  {[
                    ['Goal', 'Rank pages', 'Answer questions', 'Get cited by AI'],
                    ['Optimized for', 'Search algorithms', 'Voice assistants', 'LLM retrieval'],
                    ['Shows up in', 'Google results', 'Snippets / Siri / Alexa', 'ChatGPT / Perplexity / Gemini'],
                    ['Key metric', 'Organic traffic', 'Featured snippet share', 'AI citation rate'],
                    ['Content style', 'Keyword-optimized', 'Q&A formatted', 'Entity-rich, retrievable'],
                    ['Authority signal', 'Backlinks', 'Structured data', 'Cross-web consensus'],
                    ['Time to impact', '1-6 months', '2-8 weeks', '1-12 weeks (varies by platform)'],
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
                  q: 'Is GEO the same as SEO?',
                  a: 'No. SEO gets you clicks on Google. GEO gets you cited inside AI answers. They work together — a strong SEO foundation helps GEO — but they optimize for different things.',
                },
                {
                  q: 'How long does GEO take to work?',
                  a: 'It depends on the platform. Perplexity and Google Gemini update in near-real-time, so changes can appear within 1-2 weeks. ChatGPT and Claude update their underlying knowledge less often — expect 30-90 days. Google AI Overviews falls somewhere in between, typically 2-4 weeks.',
                },
                {
                  q: 'Do I still need SEO if I do GEO?',
                  a: 'Yes. GEO builds on top of SEO. AI systems still rely on well-structured, authoritative content. Dropping SEO for GEO would be like building a second floor before the ground floor is finished.',
                },
                {
                  q: 'Who needs GEO most right now?',
                  a: 'B2B companies, agencies, consultants, and any business where buyers research using AI tools before purchasing. If your customers open ChatGPT before they open Google, you need GEO.',
                },
                {
                  q: 'How do you actually measure GEO?',
                  a: 'By running a fixed set of prompts across ChatGPT, Perplexity, Gemini, and Google AI Overviews, and tracking whether your brand appears in each response. You measure your baseline, then track changes month over month. This is called an AI visibility audit.',
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="glass-panel rounded-2xl border border-white/5 overflow-hidden group"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer text-white font-medium text-base hover:bg-white/[0.01] transition-colors list-none">
                    <span>{faq.q}</span>
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

        {/* Bottom — Not a CTA */}
        <section className="py-20 md:py-28 px-6 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
              See for yourself
            </h2>
            <p className="text-zinc-400 text-lg font-light mb-8 leading-relaxed">
              Open ChatGPT right now. Type a question about your industry — the kind your customers ask.
              Does your brand appear in the answer? If not, you now know what to work on.
            </p>
            <p className="text-zinc-500 text-sm font-light">
              We wrote this guide because we believe clear information about how AI search works
              helps everyone make better decisions. Qlavo is a GEO agency based in Delhi, India.
              We help brands get cited by AI. But the principles in this guide apply whether you
              work with us or not.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default GEOGuide;
