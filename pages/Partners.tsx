import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, FileText, ShieldCheck } from 'lucide-react';
import SEOMeta from '../components/SEOMeta';

const callUrl = 'https://calendly.com/anshnb07/30min';
const focus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400';
const services = [
  { title: 'Baseline', description: 'Document how the client appears in agreed AI engines. Retain the prompts, dates, responses and cited sources, including misses and limitations.' },
  { title: 'Prompt research', description: 'Map buyer questions to the client’s offering, audience and market. Agree the question set and testing conditions before checks begin.' },
  { title: 'Content', description: 'Prepare evidence-led briefs or page revisions using approved brand facts. Your team reviews the copy and controls publication.' },
  { title: 'Entity', description: 'Review the consistency of business facts, profiles and structured data. Recommend corrections backed by sources, not invented authority signals.' },
  { title: 'Technical prioritization', description: 'Identify crawl, indexing and structured-data issues. Hand over a prioritized implementation brief; development is included only if explicitly scoped.' },
  { title: 'Reporting', description: 'Provide an editable evidence log, work summary and next steps. Agree any repeat checks and reporting cadence, with observations separate from interpretation.' },
];
const faqs = [
  { question: 'Who owns the client relationship?', answer: 'You own the client relationship, account strategy and commercial terms with your client. There is no direct client contact without agency consent. Any client-facing involvement must be agreed with you first.' },
  { question: 'Can we present the work under our own brand?', answer: 'Yes. You receive editable, unbranded deliverables for your review and branding. We agree file formats and handoff requirements before work starts. Your agency approves what reaches the client.' },
  { question: 'Can we start with a smaller project?', answer: 'An optional paid pilot can be discussed on the partner call. It is not a mandatory package: scope, fees, timing, required inputs and acceptance criteria are agreed before you decide to proceed.' },
  { question: 'What outcomes can we promise our client?', answer: 'Promise the agreed work, not control of a search engine. We do not guarantee rankings, AI recommendations or editorial placements. AI responses can vary between runs; reports state the methods and limits of the evidence.' },
];

export default function Partners() {
  return (
    <div className="bg-[#030303] min-h-screen text-white">
      <SEOMeta
        title="White-label GEO for Agency Partners | Qlavo"
        description="Add white-label GEO delivery to your agency: research, content, entity and technical priorities, and editable reporting. You own the client relationship. Scope-based partner pricing."
        path="/partners"
      />
      <section aria-labelledby="partners-title" className="px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3">
            <p className="text-emerald-400 text-xs font-mono uppercase tracking-widest mb-6">For SEO, content & digital agencies</p>
            <h1 id="partners-title" className="font-grotesk text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
              Your client. Your brand.<br /><span className="text-emerald-400">Our GEO delivery.</span>
            </h1>
            <p className="text-zinc-300 text-lg leading-relaxed max-w-xl mb-5">Bring AI-search expertise into your agency without handing over the account. We do the agreed behind-the-scenes work. You lead the relationship.</p>
            <p className="text-zinc-400 leading-relaxed max-w-xl mb-8">Qlavo is a GEO agency; white-label is one of our services. This partnership is for agencies that want support with generative engine optimization under their own brand.</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a href={callUrl} className={`btn-primary px-6 py-4 text-sm ${focus}`}>Book a partner call <ArrowRight className="w-4 h-4" aria-hidden="true" /></a>
              <Link to="/sample-deliverable" className={`inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-emerald-400 ${focus}`}>View a sample deliverable <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
            </div>
          </div>
          <aside aria-label="Partner commitments" className="lg:col-span-2 bento-card p-7 md:p-9 motion-reduce:transform-none motion-reduce:transition-none">
            <ShieldCheck className="w-8 h-8 text-emerald-400 mb-6" aria-hidden="true" />
            <h2 className="font-grotesk text-2xl font-medium mb-6">Built around your agency.</h2>
            <ul className="space-y-5 text-zinc-300 leading-relaxed">
              {['You own the client relationship.', 'No direct client contact without agency consent.', 'Editable, unbranded deliverables.', 'Scope agreed before work.'].map(item => (
                <li key={item} className="flex gap-3"><Check className="w-5 h-5 text-emerald-400 shrink-0 mt-1" aria-hidden="true" /><span>{item}</span></li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section aria-labelledby="partner-services" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">Choose the work you need</p>
          <h2 id="partner-services" className="font-grotesk text-3xl md:text-4xl tracking-tight mb-5">GEO support, not a one-size-fits-all bundle.</h2>
          <p className="text-zinc-400 max-w-2xl leading-relaxed mb-10">These are possible workstreams, not automatic inclusions. Deliverables, volume, markets, engines, implementation and review rounds are agreed per scope.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(service => (
              <article key={service.title} className="bento-card p-7 motion-reduce:transform-none motion-reduce:transition-none">
                <h3 className="font-grotesk text-xl text-white mb-3">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="partner-process" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">A clear working agreement</p>
            <h2 id="partner-process" className="font-grotesk text-3xl md:text-4xl tracking-tight mb-6">Agree the scope.<br />Keep control of the handoff.</h2>
            <p className="text-zinc-400 leading-relaxed">A useful fit when you can provide approved brand information, coordinate reviews and arrange publishing. We clarify access, confidentiality and responsibilities before any client work begins.</p>
          </div>
          <ol className="space-y-8">
            {[
              ['Discuss the client brief', 'Share the audience, market, site and objective. We discuss fit, required inputs and what your team will handle.'],
              ['Agree the work in writing', 'Confirm deliverables, exclusions, fees, timing, revision rounds and acceptance criteria. Scope changes need agreement, not assumptions.'],
              ['Review, brand and deliver', 'Qlavo prepares the agreed work. Your agency reviews the editable handoff, approves client communication and manages publication unless otherwise scoped.'],
            ].map(([title, description], index) => (
              <li key={title} className="flex gap-5">
                <span className="text-emerald-400 font-mono text-sm mt-1" aria-hidden="true">0{index + 1}</span>
                <div><h3 className="font-grotesk text-xl mb-2">{title}</h3><p className="text-zinc-400 text-sm leading-relaxed">{description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="partner-pricing" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto bento-card p-7 md:p-12 grid md:grid-cols-2 gap-8 items-start motion-reduce:transform-none motion-reduce:transition-none">
          <div>
            <p className="text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">Commercial terms</p>
            <h2 id="partner-pricing" className="font-grotesk text-3xl md:text-4xl tracking-tight mb-5">Scope-based partner pricing.</h2>
            <p className="text-zinc-300 leading-relaxed">Fees depend on the agreed deliverables, research depth, markets, technical involvement and reporting cadence. You set your own client pricing.</p>
          </div>
          <div className="space-y-5 text-zinc-400 leading-relaxed">
            <p>Discuss an optional paid pilot on the partner call if you want to test the working relationship first. Its scope and price are agreed separately; there is no blanket fixed-price package.</p>
            <p>A call is a scoping conversation, not a commitment to buy. We confirm fees and delivery terms before work starts.</p>
            <Link to="/sample-deliverable" className={`inline-flex items-center gap-2 text-emerald-400 text-sm ${focus}`}><FileText className="w-4 h-4" aria-hidden="true" />Inspect the handoff format</Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="partner-faq" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 id="partner-faq" className="font-grotesk text-3xl md:text-4xl tracking-tight mb-8">Partner questions.</h2>
          <div className="divide-y divide-white/10">
            {faqs.map(faq => (
              <details key={faq.question} className="py-5">
                <summary className={`cursor-pointer text-lg font-medium rounded-sm ${focus}`}>{faq.question}</summary>
                <p className="text-zinc-400 leading-relaxed pt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="partner-call" className="px-6 py-20 md:py-28 border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 id="partner-call" className="font-grotesk text-3xl md:text-5xl tracking-tight mb-6">Have a client brief in mind?</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">Bring the context. We’ll discuss where Qlavo can support your team and what a sensible first scope could look like.</p>
          <a href={callUrl} className={`btn-primary px-8 py-4 ${focus}`}>Book a partner call <ArrowRight className="w-4 h-4" aria-hidden="true" /></a>
        </div>
      </section>
    </div>
  );
}
