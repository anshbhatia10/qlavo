import React from 'react';
import SEOMeta from '../components/SEOMeta';

const GEOAgencyIndia: React.FC = () => {


  const stats = [
    { value: '30-60', label: 'Days to first AI citation' },
    { value: '4+', label: 'AI platforms optimized' },
    { value: 'India', label: 'Headquartered in Delhi' },
    { value: 'Global', label: 'Clients worldwide' },
  ];

  const services = [
    {
      title: 'AI Visibility Audit',
      desc: 'We test how ChatGPT, Gemini, Perplexity, and Google AI Overviews currently perceive your brand across 50+ target prompts. Full source tracking included.',
    },
    {
      title: 'Entity Optimization',
      desc: 'We standardize your business entity across platforms (website, LinkedIn, Crunchbase, Google Business Profile) so AI engines confidently cite you.',
    },
    {
      title: 'Content & Citation Building',
      desc: 'We build citations on high-authority platforms and create AI-optimized content that search engines and language models both trust.',
    },
    {
      title: 'Structured Data & Schema',
      desc: 'We implement FAQPage, Organization, LocalBusiness, and BreadcrumbList schema markup that LLMs parse directly for AI answers.',
    },
    {
      title: 'Ongoing Monitoring',
      desc: 'Weekly prompt audits across ChatGPT, Google AI Overview, Perplexity, and Gemini with detailed reporting on citation improvements.',
    },
    {
      title: 'GEO Strategy & Consulting',
      desc: 'Full GEO roadmap tailored to your industry, competition, and target markets in India and globally.',
    },
  ];

  const faqs = [
    {
      q: 'What is a GEO agency and why does it matter in Delhi/India?',
      a: 'A GEO (Generative Engine Optimization) agency helps businesses appear in AI-generated answers from ChatGPT, Google Gemini, Perplexity, and Google AI Overviews. In India, where 65%+ of consumers now use AI for research before purchasing, GEO is becoming essential. Traditional SEO optimizes for search engine result pages — GEO optimizes for AI recommendations. As a Delhi-based GEO agency, Qlavo helps Indian businesses capture this growing channel.',
    },
    {
      q: 'How is Qlavo different from other marketing agencies in Delhi?',
      a: 'Most marketing agencies in Delhi offer SEO and digital marketing services rebranded as GEO. Qlavo is purpose-built for Generative Engine Optimization — we focus exclusively on getting your business cited and recommended by AI assistants. Our methodology includes entity-based optimization, structured data implementation, citation building on high-authority platforms, and weekly AI prompt audits across ChatGPT, Gemini, Perplexity, and Google AI Overviews.',
    },
    {
      q: 'How long does it take to see results from GEO in India?',
      a: 'Perplexity and Google Gemini, which have real-time web access, can show improvements within 1-2 weeks. Google AI Overviews typically respond within 2-4 weeks. ChatGPT and Claude update their knowledge bases less frequently, so results there usually appear within 30-90 days. We provide a clear baseline audit at the start so you can measure progress against concrete benchmarks.',
    },
    {
      q: 'Do you work with Indian businesses or only international?',
      a: 'Both. Qlavo is headquartered in Delhi, India, and we work extensively with Indian businesses across e-commerce, professional services, hospitality, B2B SaaS, and more. We also serve clients in Dubai, the UK, and internationally. Our India-focused GEO strategies account for local search behavior, regional language considerations, and the Indian AI adoption landscape.',
    },
    {
      q: 'What platforms do you optimize for?',
      a: 'We optimize for all major AI platforms: ChatGPT (OpenAI), Google Gemini, Google AI Overviews, Perplexity AI, Claude (Anthropic), and Microsoft Copilot. Each platform has different citation behaviors — we tailor our strategy accordingly. Perplexity and Gemini reference real-time web sources, while ChatGPT and Claude draw from their training data supplemented with citations.',
    },
    {
      q: 'How much does GEO services cost in India?',
      a: 'Qlavo offers three tiers: GEO Essentials (£2k/mo) for foundational AI visibility, GEO Growth (£3.5k/mo) for comprehensive multi-platform optimization, and GEO Enterprise (£5k+/mo) for full-suite GEO with priority monitoring and strategy. Each includes an initial AI audit, entity optimization, citation building, structured data implementation, and weekly monitoring.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#f4f4f5]">
      <SEOMeta
        title="GEO Agency Delhi, India — Generative Engine Optimization Services | Qlavo"
        description="Qlavo is Delhi's leading Generative Engine Optimization (GEO) agency. We help Indian businesses get recommended by ChatGPT, Gemini, and Perplexity. Based in New Delhi."
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
            India's dedicated Generative Engine Optimization agency. 
            We make your business appear in <span className="text-white">ChatGPT</span>,{' '}
            <span className="text-white">Gemini</span>,{' '}
            <span className="text-white">Perplexity</span>, and{' '}
            <span className="text-white">Google AI Overviews</span>.
          </p>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-10 text-sm">
            Headquartered in Delhi. Serving clients across India, Dubai, UK, and internationally.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact"
              className="px-8 py-3.5 bg-white text-black rounded-full text-sm font-medium hover:bg-zinc-200 transition-all duration-300">
              Get a Free AI Visibility Audit →
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
              <h3 className="text-lg font-medium mb-3">65%+ use AI for research</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Over 65% of Indian consumers now use AI assistants like ChatGPT and Gemini 
                to research products, services, and businesses before making purchasing decisions. 
                If you're not appearing in AI answers, you're invisible to this growing audience.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-lg font-medium mb-3">SEO alone isn't enough</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                AI engines don't just show "10 blue links" — they synthesize answers from multiple 
                sources and recommend specific businesses. Traditional SEO doesn't optimize for this.
                GEO is the new discipline required for AI-era visibility.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-lg font-medium mb-3">First-mover advantage</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The GEO landscape in India is still emerging. Most agencies are rebranding SEO 
                services as GEO. A dedicated GEO approach gives you a significant first-mover 
                advantage in capturing AI search market share before it becomes competitive.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-lg font-medium mb-3">AI citations compound</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Once an AI engine starts citing your business, those citations compound. 
                Being recommended by ChatGPT for one query increases your chances of being 
                cited for related queries. Early investment in GEO creates a durable moat.
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
            We optimize for every major{' '}
            <span className="text-gradient">AI platform</span>
          </h2>
          <p className="text-zinc-500 mb-12 text-sm">
            Each platform has unique citation behaviors — we tailor strategies for all of them
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
            Ready to get recommended{' '}
            <span className="text-gradient">by AI?</span>
          </h2>
          <p className="text-zinc-400 mb-10 max-w-xl mx-auto text-sm">
            Book a free discovery call. We'll audit your current AI visibility across 
            ChatGPT, Gemini, Perplexity, and Google AI Overviews — no commitment required.
          </p>
          <a href="/contact"
            className="inline-block px-10 py-4 bg-white text-black rounded-full text-sm font-medium hover:bg-zinc-200 transition-all duration-300">
            Book Your Free Audit →
          </a>
        </div>
      </section>
    </div>
  );
};

export default GEOAgencyIndia;
