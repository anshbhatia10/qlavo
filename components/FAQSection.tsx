import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    title: 'GEO & AI Visibility',
    items: [
      {
        question: 'What is GEO?',
        answer: `Generative Engine Optimization (GEO) is the practice of optimizing your brand so AI assistants — ChatGPT, Gemini, Claude, Perplexity — recommend you in their answers. Think of it as SEO for the AI era. Instead of ranking on Google's tenth page, you're getting cited in the AI answer itself.`
      },
      {
        question: 'How is it different from SEO?',
        answer: `SEO gets you clicks on Google. GEO gets you cited in AI responses. SEO needs keywords and backlinks. GEO needs entity consistency, structured data, and authority signals across platforms. Both matter — but GEO is where search is heading. Gartner predicts search volume will drop 25% by 2026 as users turn to AI-powered answers.`
      },
      {
        question: 'How long does it take to see results?',
        answer: `Perplexity and Google Gemini update in near-real-time, so you can see changes in 1-2 weeks. ChatGPT and Claude update their knowledge less often — expect 30-90 days. We baseline your AI visibility score before we start, so you have numbers to track against from day one.`
      },
      {
        question: 'How do you measure AI visibility?',
        answer: `We audit how ChatGPT, Gemini, Claude, and Perplexity currently see your business. We test dozens of prompts relevant to your industry and track whether you're cited, how often, and in what context. That gives us a baseline visibility score. We re-run the same tests monthly to measure progress.`
      }
    ]
  },
  {
    title: 'Working With Qlavo',
    items: [
      {
        question: 'What kind of businesses do you work with?',
        answer: `Growth-stage companies doing $500K to $50M in revenue — across hospitality, professional services, e-commerce, and B2B SaaS. Mostly based in Delhi, the UK, and internationally. If you know AI changes everything but don't know where to start, you're our kind of client.`
      },
      {
        question: 'How much does it cost?',
        answer: `Every engagement includes a free audit first — we don't talk money until we know we can actually help. Pricing varies based on scope and is agreed upfront.`
      },
      {
        question: 'Do you offer a free audit?',
        answer: `Yes. Enter your URL above and we'll run a full AI visibility audit. Within 24 hours, you get a breakdown of how ChatGPT, Gemini, Claude, and Perplexity see your business — plus a score and specific recommendations. No credit card. No sales pitch.`
      },
      {
        question: 'What happens after the audit?',
        answer: `If the numbers look good, great — you have a baseline. If there's room to grow (and for most companies, there is), we hop on a 30-minute call to walk through the findings. No pitch deck. Just the data and what we'd do about it.`
      }
    ]
  }
];

const FAQSection: React.FC = () => {
  // Track open state per category and per item: categoryIndex-itemIndex
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(['0-0']));

  const toggle = (catIdx: number, itemIdx: number) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <section id="faq" className="py-28 md:py-36 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 tracking-tight">
            Quick answers about AI visibility.
          </h2>
          <p className="text-zinc-400 text-base font-light mt-4 max-w-xl mx-auto">
            No fluff. Just the stuff clients actually ask before working with us.
          </p>
        </div>

        {/* Two-column FAQ layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <h3 className="text-lg font-semibold text-white mb-6 tracking-tight flex items-center gap-3">
                <span className="w-1 h-5 bg-emerald-400 rounded-full" />
                {category.title}
              </h3>

              <div className="space-y-2.5">
                {category.items.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  const isOpen = openItems.has(key);

                  return (
                    <div
                      key={itemIdx}
                      className="glass-panel rounded-xl overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggle(catIdx, itemIdx)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left group"
                        aria-expanded={isOpen}
                        id={`faq-q-${catIdx}-${itemIdx}`}
                      >
                        <span className="text-white text-sm font-medium pr-4 leading-snug group-hover:text-zinc-200 transition-colors">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                        role="region"
                        aria-labelledby={`faq-q-${catIdx}-${itemIdx}`}
                      >
                        <p className="px-5 pb-5 text-zinc-400 text-sm font-light leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-zinc-500 text-sm font-light mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:info@qlavo.in"
            className="inline-flex items-center gap-2 text-emerald-400 font-medium text-sm hover:text-emerald-300 transition-colors"
          >
            info@qlavo.in
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
