import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, Code2, BarChart3, ArrowUpRight } from 'lucide-react';
import SEOMeta from '../components/SEOMeta';

const steps = [
  { icon: Search, title: 'Record the answers', text: 'Agree the buyer questions, markets and engines to test. Keep the wording, date, response and cited sources, including checks where your brand is absent.' },
  { icon: FileText, title: 'Improve the information', text: 'Review service and use-case pages, business descriptions and supporting sources. Prioritize clear, useful content grounded in facts your business can substantiate.' },
  { icon: Code2, title: 'Address technical gaps', text: 'Review crawl access, page structure, relevant structured data and entity consistency. Agree implementation responsibilities before making changes.' },
  { icon: BarChart3, title: 'Measure with context', text: 'Repeat agreed checks and report what changed. Separate observed mentions and citations from interpretation, and do not treat correlation as proof of impact.' },
];

export default function AIVisibility() {
  return <div className="bg-[#030303] min-h-screen text-white">
    <SEOMeta title="AI Search Visibility & GEO Services | Qlavo" description="Qlavo helps brands improve AI-search visibility with recorded buyer-question research, content, entity clarity and technical optimization. Scope agreed before work starts." path="/ai-visibility" />
    <section className="pt-32 md:pt-40 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <p className="text-xs font-medium text-emerald-400 uppercase tracking-[0.25em] mb-6">GEO & AI-search visibility</p>
        <h1 className="font-grotesk text-4xl md:text-6xl font-bold tracking-tight mb-8">Help buyers find you.<br /><span className="text-gradient-emerald">Understand what AI actually says.</span></h1>
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mb-8">Qlavo is a GEO agency working with brands on how they appear in ChatGPT, Gemini, Perplexity and other AI-search experiences. We start with evidence, then agree the content, entity and technical work that fits your business.</p>
        <a href="https://calendly.com/anshnb07/30min" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold">Discuss your visibility <ArrowUpRight className="w-4 h-4" /></a>
      </div>
    </section>
    <section className="border-t border-white/5 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-grotesk text-3xl md:text-4xl font-semibold mb-10">From observations to practical work.</h2>
        <div className="grid md:grid-cols-2 gap-6">{steps.map(({icon: Icon,title,text}) => <article key={title} className="bento-card p-8"><Icon className="w-6 h-6 text-emerald-400 mb-5" /><h3 className="font-grotesk text-xl font-semibold mb-3">{title}</h3><p className="text-zinc-400 leading-relaxed">{text}</p></article>)}</div>
      </div>
    </section>
    <section className="border-t border-white/5 py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div><h2 className="font-grotesk text-2xl font-semibold mb-4">A snapshot, not a guarantee.</h2><p className="text-zinc-400 leading-relaxed">AI answers vary by engine, wording, time and personalization. A limited set of checks is not a universal visibility score. No guaranteed AI recommendations, rankings, leads or outcome deadlines.</p></div>
        <div><h2 className="font-grotesk text-2xl font-semibold mb-4">Scope built around your needs.</h2><p className="text-zinc-400 leading-relaxed mb-6">Start with research, a defined implementation project or ongoing support. Deliverables, responsibilities, fees and timing are agreed before work starts.</p><Link to="/pricing" className="text-emerald-400 underline underline-offset-4">Explore engagement options →</Link><p className="text-zinc-400 mt-6">Managing this for a client? <Link to="/partners" className="text-emerald-400 underline underline-offset-4">White-label GEO for agencies →</Link></p></div>
      </div>
    </section>
  </div>;
}
