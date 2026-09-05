import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

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
        answer: `Generative Engine Optimization (GEO) is work to improve how a brand is represented in AI answers. It combines clear content, consistent business information, technical accessibility, and evidence from relevant sources. The aim is better discoverability, not a guaranteed recommendation.`
      },
      {
        question: 'How is it different from SEO?',
        answer: `SEO focuses on visibility in search results. GEO also examines mentions and citations in generated answers from tools such as ChatGPT, Gemini, Claude, and Perplexity. They overlap: useful content, accessible pages, and credible sources matter to both.`
      },
      {
        question: 'How long does it take to see results?',
        answer: `There is no reliable universal timeline. AI answers depend on the prompt, platform, available sources, and user context, and can change between runs. We agree delivery milestones for our work, but do not guarantee rankings, AI recommendations, citation counts, or a date for visibility improvements.`
      },
      {
        question: 'How do you measure AI visibility?',
        answer: `We agree a sample of buyer prompts, markets, and platforms, then record the answers, brand mentions, and available source links. That is a baseline for that sample, not a score for the whole internet. Any repeat checks and reporting cadence are defined in the scope, with variability and limitations documented.`
      }
    ]
  },
  {
    title: 'Working With Qlavo',
    items: [
      {
        question: 'What kind of businesses can hire Qlavo?',
        answer: `Qlavo is a worldwide B2B GEO agency headquartered in New Delhi. We offer scoped engagements for businesses targeting India, the US, UK, EU, and Gulf, including professional services, hospitality, e-commerce, and SaaS. We discuss fit before proposing work.`
      },
      {
        question: 'How much does it cost?',
        answer: `We provide a scope-based quote for a baseline audit, implementation, or ongoing support. Pricing depends on brands, markets, prompts, platforms, pages, and delivery needs. Fees and terms are agreed before work begins. White-label agency delivery is a separate partner service.`
      },
      {
        question: 'How do I request an audit?',
        answer: `Book a discovery call or email info@qlavo.in with your website and goals. We discuss what to test and agree the audit scope and quote. This website does not run an instant automated audit or submit an audit request just because you visit it.`
      },
      {
        question: 'What happens after the audit?',
        answer: `We review the recorded findings, limitations, and prioritized next steps with you. You can use the report internally or discuss a separate implementation or ongoing support scope. An audit does not commit you to further work.`
      }
    ]
  }
];

const FAQSection: React.FC = () => {
  useScrollReveal();
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
    <section id="faq" className="py-28 md:py-36 bg-[#030303] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 uppercase tracking-[0.25em] mb-4">
            <span className="w-6 h-px bg-emerald-400/40" />
            Frequently Asked Questions
            <span className="w-6 h-px bg-emerald-400/40" />
          </span>
          <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 tracking-tight">
            Quick answers about AI visibility.
          </h2>
          <p className="text-zinc-400 text-base font-light mt-4 max-w-xl mx-auto">
            What to know about the work, its scope, and its limits.
          </p>
        </div>

        {/* Two-column FAQ layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} className={catIdx === 0 ? 'reveal-left' : 'reveal-right'}>
              <h3 className="font-grotesk text-lg font-semibold text-white mb-6 tracking-tight flex items-center gap-3">
                <span className="w-1 h-5 bg-emerald-400 rounded-full" />
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.items.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  const isOpen = openItems.has(key);

                  return (
                    <div
                      key={itemIdx}
                      className={`glass-panel rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-emerald-500/20' : ''}`}
                    >
                      <button
                        onClick={() => toggle(catIdx, itemIdx)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left group"
                        aria-expanded={isOpen}
                        id={`faq-q-${catIdx}-${itemIdx}`}
                      >
                        <span className={`text-sm font-medium pr-4 leading-snug transition-colors ${isOpen ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                          {item.question}
                        </span>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-emerald-500/20 rotate-180' : 'bg-white/5'}`}>
                          <ChevronDown className={`w-3.5 h-3.5 transition-colors ${isOpen ? 'text-emerald-400' : 'text-zinc-500'}`} />
                        </div>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        role="region"
                        aria-labelledby={`faq-q-${catIdx}-${itemIdx}`}
                      >
                        <p className="px-5 pb-5 text-zinc-400 text-sm font-light leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                      {/* Bottom glow line when open */}
                      {isOpen && (
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent mx-5" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center reveal">
          <p className="text-zinc-500 text-sm font-light mb-4">
            Still have questions? For agency delivery, explore our{' '}
            <a href="/partners" className="text-emerald-400 hover:text-emerald-300">white-label partner service</a>.
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
