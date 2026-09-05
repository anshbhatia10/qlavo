import React from 'react';
import SEOMeta from '../components/SEOMeta';

const GEOAgencyIndia: React.FC = () => {


  const stats = [
    { value: 'Baseline', label: 'Evidence before implementation' },
    { value: 'Scoped', label: 'Agreed platforms and prompts' },
    { value: 'India', label: 'Headquartered in Delhi' },
    { value: 'Global', label: 'Remote B2B engagements' },
  ];

  const services = [
    {
      title: 'AI Visibility Audit',
      desc: 'Review a defined sample of buyer prompts across agreed platforms, recording brand mentions, answer context, and available source links.',
    },
    {
      title: 'Entity Optimization',
      desc: 'Review your website and relevant business profiles for consistent names, descriptions, locations, and links to authoritative sources.',
    },
    {
      title: 'Content & Citation Building',
      desc: 'Improve agreed pages with useful answers and verifiable evidence, and identify relevant third-party citation opportunities. Placements are not guaranteed.',
    },
    {
      title: 'Structured Data & Schema',
      desc: 'Implement appropriate Organization, LocalBusiness, FAQPage, or BreadcrumbList markup where it accurately reflects the page and business.',
    },
    {
      title: 'Ongoing Monitoring',
      desc: 'Repeat the agreed prompt sample on a defined cadence, reporting changes in mentions and citations alongside platform variability.',
    },
    {
      title: 'GEO Strategy & Consulting',
      desc: 'Develop a prioritized roadmap around your industry, website, competition, and target markets in India or internationally.',
    },
  ];

  const faqs = [
    {
      q: 'What is a GEO agency and why does it matter in Delhi/India?',
      a: 'A GEO (Generative Engine Optimization) agency works on how a business is represented in AI-generated answers. Qlavo reviews sampled answers, content, technical accessibility, and business information to identify practical improvements for Indian and international buyer queries.',
    },
    {
      q: 'What does Qlavo focus on?',
      a: 'Qlavo is a GEO agency focused on baseline audits, implementation, and ongoing support. The work can include entity consistency, structured data, content improvements, citation opportunities, and prompt-based measurement. Specific deliverables are agreed in the scope.',
    },
    {
      q: 'How long does it take to see results from GEO in India?',
      a: 'There is no universal timeline. Responses vary by prompt, platform, sources, and user context. We agree milestones for our deliverables but do not guarantee rankings, AI recommendations, citation counts, or a date for visibility improvements.',
    },
    {
      q: 'Can Indian and international businesses hire Qlavo?',
      a: 'Yes. Qlavo is headquartered in New Delhi and offers remote B2B engagements for India, the US, UK, EU, and Gulf. Those are target markets, not additional offices. We agree the markets and language requirements before work starts.',
    },
    {
      q: 'What platforms do you optimize for?',
      a: 'The scope can cover ChatGPT, Gemini, Perplexity, Google AI Overviews, Claude, or other relevant assistants. Platform selection depends on your buyers and what can be tested reliably. A sample of answers is not a complete measure of a platform or its users.',
    },
    {
      q: 'How much do GEO services cost in India?',
      a: 'We provide a scope-based quote for a baseline audit, implementation, or ongoing support. Fees depend on brands, markets, prompts, platforms, pages, and reporting needs. White-label agency delivery is a separate partner service, not the default price for direct engagements.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#f4f4f5]">
      <SEOMeta
        title="GEO Agency India, Delhi — Generative Engine Optimization | Qlavo"
        description="Qlavo is a Generative Engine Optimization (GEO) agency in New Delhi offering scoped AI visibility audits, implementation, and ongoing support for B2B businesses."
        path="/geo-agency-delhi-india"
      />
      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_60%)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs tracking-widest uppercase border border-white/10 rounded-full text-zinc-400">
            Delhi, India — Since 2025
          </span>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6 tracking-tight">
            GEO Agency <span className="text-gradient">Delhi, India</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed mb-8">
            A dedicated Generative Engine Optimization agency in India.
            We review and work to improve your visibility in <span className="text-white">ChatGPT</span>,{' '}
            <span className="text-white">Gemini</span>,{' '}
            <span className="text-white">Perplexity</span>, and{' '}
            <span className="text-white">Google AI Overviews</span>.
          </p>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-10 text-sm">
            Headquartered in New Delhi. Worldwide B2B GEO engagements for India, US, UK, EU, and Gulf markets. No Dubai office.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact"
              className="px-8 py-3.5 bg-white text-black rounded-full text-sm font-medium hover:bg-zinc-200 transition-all duration-300">
              Discuss an AI Visibility Audit →
            </a>
            <a href="/pricing"
              className="px-8 py-3.5 border border-white/10 rounded-full text-sm text-zinc-300 hover:bg-white/5 transition-all duration-300">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-light text-white mb-1">{s.value}</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GEO in India */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-light mb-16 text-center">
            Why GEO matters for{' '}
            <span className="text-gradient">Indian businesses</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-lg font-medium mb-3">AI adds another discovery channel</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Buyers can use AI assistants like ChatGPT and Gemini to research products and services. Checking relevant buyer questions helps you understand how your business is represented in this channel.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-lg font-medium mb-3">GEO complements SEO</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                AI search can synthesize answers from multiple sources. Technical accessibility, useful content, and credible references support both SEO and GEO; sampled AI answers add another way to assess visibility.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-lg font-medium mb-3">Start with a relevant baseline</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The right questions depend on your buyers, location, and services. Agreeing a relevant prompt sample gives you a starting point for deciding which content and technical improvements to prioritize.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-lg font-medium mb-3">Citations need context</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A citation in one answer does not guarantee a mention in another. We record the prompt, platform, date, and available sources so findings can be reviewed with their limitations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-light mb-4 text-center">
            Our <span className="text-gradient">GEO Services</span> in Delhi
          </h2>
          <p className="text-zinc-500 text-center mb-16 max-w-2xl mx-auto text-sm">
            End-to-end Generative Engine Optimization for Indian and global businesses
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="glass-panel rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                <h3 className="text-base font-medium mb-2">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-light mb-4">
            Scope your work around the right{' '}
            <span className="text-gradient">AI platform</span>
          </h2>
          <p className="text-zinc-500 mb-12 text-sm">
            We agree which platforms to sample based on your buyers and the available evidence
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['ChatGPT', 'Google Gemini', 'Perplexity AI', 'Google AI Overview', 'Claude', 'Microsoft Copilot', 'Meta AI', 'Grok'].map((p, i) => (
              <div key={i} className="glass-panel rounded-xl px-6 py-5 text-sm font-light">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-light mb-12 text-center">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-panel rounded-xl group open:border-white/20 transition-all duration-300">
                <summary className="px-6 py-5 cursor-pointer text-sm font-medium flex items-center justify-between">
                  <span>{faq.q}</span>
                  <span className="text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-light mb-6">
            Ready to understand your{' '}
            <span className="text-gradient">AI visibility?</span>
          </h2>
          <p className="text-zinc-400 mb-10 max-w-xl mx-auto text-sm">
            Book a discovery call to discuss your website, target markets, and a possible audit scope. For agency delivery, see our{' '}
            <a href="/partners" className="text-emerald-400 hover:text-emerald-300">white-label partner service</a>.
          </p>
          <a href="/contact"
            className="inline-block px-10 py-4 bg-white text-black rounded-full text-sm font-medium hover:bg-zinc-200 transition-all duration-300">
            Book a Discovery Call →
          </a>
        </div>
      </section>
    </div>
  );
};

export default GEOAgencyIndia;
