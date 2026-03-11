import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer: "Generative Engine Optimization (GEO) is the practice of optimizing your business's online presence so that AI assistants like ChatGPT, Google Gemini, Claude, and Perplexity recommend you in their responses. Unlike traditional SEO which focuses on ranking in search results, GEO focuses on being cited and recommended in AI-generated answers. This involves building entity consistency across platforms, creating structured content that AI models can easily parse, and establishing authority signals on high-domain-authority platforms."
  },
  {
    question: "How do I get my business recommended by ChatGPT, Gemini, or Perplexity?",
    answer: "To get recommended by AI assistants, you need to build what we call 'entity authority.' This means ensuring your business information is consistent across all platforms (website, LinkedIn, Crunchbase, Google Business Profile), publishing expert content on high-authority platforms like Medium and Quora, adding structured FAQ data to your website, and building citations — mentions of your brand on credible third-party sources. At Qlavo, we handle this entire process through our AI Visibility service, typically delivering measurable improvements in AI recommendations within 30-60 days."
  },
  {
    question: "What is the difference between SEO and GEO?",
    answer: "SEO (Search Engine Optimization) focuses on ranking your website higher in Google's traditional search results. GEO (Generative Engine Optimization) focuses on getting your business recommended in AI-generated answers from ChatGPT, Gemini, Claude, and Perplexity. While SEO relies on keywords, backlinks, and page authority, GEO relies on entity consistency, structured data, content on high-authority platforms, and citation frequency. Both are important — SEO drives traffic from traditional search, while GEO captures the rapidly growing audience that uses AI assistants for discovery and recommendations."
  },
  {
    question: "How does Qlavo help businesses with AI visibility?",
    answer: "Qlavo provides end-to-end AI visibility services. We start with an AI audit — testing how ChatGPT, Gemini, Claude, and Perplexity currently perceive your business. Then we implement a GEO strategy: standardizing your entity data across platforms, creating optimized content on high-authority sites, adding structured schema markup to your website, and building citation networks. We also provide custom AI forecasting models and workflow automation. Our clients typically see their first AI recommendation improvements within 30 days."
  },
  {
    question: "How does AI-powered revenue forecasting work?",
    answer: "Our custom forecasting models analyze your historical revenue, booking, and operational data to predict future performance with significantly higher accuracy than spreadsheet-based methods. We build bespoke machine learning models tailored to your business — not generic templates. These models account for seasonality, market trends, and your specific growth patterns to deliver forecasts you can actually make decisions with. The models run continuously, improving their accuracy over time as they learn from new data."
  },
  {
    question: "What kind of businesses does Qlavo work with?",
    answer: "We work with growth-stage businesses in Dubai, the UK, and internationally — typically companies doing $500K-$50M in revenue that want to leverage AI before their competitors do. Our clients include hospitality brands, professional services firms, e-commerce companies, and B2B SaaS businesses. If you're a business owner who knows AI matters but isn't sure where to start, we're a good fit."
  },
  {
    question: "How long does it take to see results from GEO?",
    answer: "Results vary by platform. Perplexity and Google Gemini, which have real-time web access, can show improvements within 1-2 weeks as they discover new content and citations. Google's AI Overviews typically respond within 2-4 weeks. ChatGPT and Claude update their knowledge bases less frequently, so results there usually appear within 30-90 days. We provide a clear baseline audit at the start so you can measure progress against concrete benchmarks."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-black border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-medium">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mt-4 tracking-tight">
            Everything you need to know about AI visibility
          </h2>
          <p className="text-zinc-500 mt-3 text-base font-light max-w-xl mx-auto">
            The questions our clients ask before working with us — and the answers that matter.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/5 rounded-xl overflow-hidden transition-colors hover:border-white/10"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                aria-expanded={openIndex === index}
                id={`faq-question-${index}`}
              >
                <span className="text-white text-[15px] font-medium pr-4 leading-snug group-hover:text-zinc-200 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p className="px-6 pb-5 text-zinc-400 text-sm font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
