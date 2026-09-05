import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Download, FileText } from 'lucide-react';
import SEOMeta from '../components/SEOMeta';

const focus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400';
const measurementFields = [
  ['Question & context', 'Agreed buyer prompt, market, language and question ID.'],
  ['Run conditions', 'Engine, version where available, date, session conditions and search settings.'],
  ['Response & evidence', 'Full response, retained evidence and cited source URLs, including misses.'],
  ['Brand presence', 'Observed mention, recommendation and citation recorded separately.'],
  ['Publication & limitations', 'Page publication and indexing status, missing evidence and limits of comparison.'],
];

export default function SampleDeliverable() {
  return (
    <div className="bg-[#030303] min-h-screen text-white">
      <SEOMeta
        title="Illustrative White-label GEO Deliverable | Qlavo"
        description="Inspect an illustrative GEO handoff: a content brief, empty measurement template and agency review checklist. Not a client case study or measured AI-search result."
        path="/sample-deliverable"
      />
      <section aria-labelledby="sample-title" className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-5xl mx-auto">
          <Link to="/partners" className={`inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 text-sm mb-10 ${focus}`}><ArrowLeft className="w-4 h-4" aria-hidden="true" />Agency partners</Link>
          <p className="text-emerald-400 text-xs font-mono uppercase tracking-widest mb-5">Illustrative deliverable / format preview</p>
          <h1 id="sample-title" className="font-grotesk text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">See the handoff.<br /><span className="text-emerald-400">Not a results promise.</span></h1>
          <p className="text-zinc-300 text-lg leading-relaxed max-w-3xl mb-8">A sample of how research, recommendations and review notes can fit together. Agency deliverables are editable, unbranded and tailored to the agreed scope; this public preview uses Qlavo’s site branding.</p>
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 text-zinc-300 leading-relaxed">
            <strong className="text-emerald-400">Illustrative only.</strong> This is not a client case study. No measurements have been collected for this example. It does not demonstrate changes in rankings, AI recommendations, citations or revenue.
          </div>
        </div>
      </section>

      <section aria-labelledby="sample-brief" className="px-6 py-16 md:py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">Content brief</p>
          <h2 id="sample-brief" className="font-grotesk text-3xl md:text-4xl tracking-tight mb-5">Turn an unclear service page into a useful answer.</h2>
          <p className="text-zinc-400 leading-relaxed max-w-3xl mb-8">Example task, not an audit finding: help a buyer understand what a service includes, who it fits and what evidence supports it. The actual page and work would be selected after research.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <article className="bento-card p-7 md:p-8 motion-reduce:transform-none motion-reduce:transition-none">
              <FileText className="w-6 h-6 text-emerald-400 mb-5" aria-hidden="true" />
              <h3 className="font-grotesk text-xl mb-4">Draft structure</h3>
              <ol className="list-decimal pl-5 space-y-3 text-zinc-300 leading-relaxed">
                <li>State the service, audience and market in plain language.</li>
                <li>Explain deliverables, exclusions and approval responsibilities.</li>
                <li>Answer buyer questions using approved facts and supporting sources.</li>
                <li>Provide a clear next step without promising an AI recommendation.</li>
              </ol>
            </article>
            <article className="bento-card p-7 md:p-8 motion-reduce:transform-none motion-reduce:transition-none">
              <h3 className="font-grotesk text-xl mb-4">Evidence & review notes</h3>
              <dl className="space-y-5 text-sm leading-relaxed">
                <div><dt className="text-emerald-400 font-medium mb-1">Required inputs</dt><dd className="text-zinc-400">Approved offer details, audience, source documents and page URL.</dd></div>
                <div><dt className="text-emerald-400 font-medium mb-1">Claims to verify</dt><dd className="text-zinc-400">Flag unsupported claims for agency review. Do not fill gaps with invented testimonials, results or credentials.</dd></div>
                <div><dt className="text-emerald-400 font-medium mb-1">Publishing owner</dt><dd className="text-zinc-400">Agency or client, unless implementation is explicitly included in the scope.</dd></div>
                <div><dt className="text-emerald-400 font-medium mb-1">Acceptance</dt><dd className="text-zinc-400">Review the agreed deliverable and revisions, not an external engine’s decision to cite it.</dd></div>
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="sample-measurement" className="px-6 py-16 md:py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">Measurement template</p>
          <h2 id="sample-measurement" className="font-grotesk text-3xl md:text-4xl tracking-tight mb-5">Keep evidence separate from interpretation.</h2>
          <p className="text-zinc-400 leading-relaxed max-w-3xl mb-8">These are field descriptions, not observed results. In a scoped engagement, agree the prompts, engines, run count and reporting cadence first. Preserve hits and misses, and note changing conditions when comparing snapshots.</p>
          <div className="rounded-2xl border border-white/10 overflow-hidden mb-6">
            <table className="w-full text-left text-sm">
              <caption className="text-left px-5 py-4 bg-white/5 text-zinc-300">Empty observation log: fields to complete during agreed research.</caption>
              <thead className="border-y border-white/10"><tr><th scope="col" className="px-5 py-4 font-medium text-white w-1/3">Field group</th><th scope="col" className="px-5 py-4 font-medium text-white">What to record</th></tr></thead>
              <tbody className="divide-y divide-white/10">
                {measurementFields.map(([field, description]) => <tr key={field}><th scope="row" className="px-5 py-4 align-top font-medium text-zinc-300">{field}</th><td className="px-5 py-4 text-zinc-400 leading-relaxed">{description}</td></tr>)}
              </tbody>
            </table>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">The downloadable CSV contains column headers only. AI answers vary, and a small set of checks cannot establish universal visibility or prove that a page change caused an outcome.</p>
          <a href="/sample-baseline.csv" download className={`inline-flex items-center gap-2 text-emerald-400 border border-emerald-500/30 rounded-xl px-5 py-3 text-sm hover:bg-emerald-500/10 ${focus}`}><Download className="w-4 h-4 shrink-0" aria-hidden="true" />Download empty measurement CSV</a>
        </div>
      </section>

      <section aria-labelledby="sample-handoff" className="px-6 py-16 md:py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">Agency review</p>
            <h2 id="sample-handoff" className="font-grotesk text-3xl md:text-4xl tracking-tight mb-5">A handoff your team can own.</h2>
            <p className="text-zinc-400 leading-relaxed">This checklist illustrates possible handoff components, not a universal package. The scope determines which files, checks, revisions and implementation notes are included.</p>
          </div>
          <ul className="space-y-4 list-disc pl-5 text-zinc-300 leading-relaxed marker:text-emerald-400">
            <li>Agreed brief, research method and retained evidence.</li>
            <li>Prioritized recommendations with source references and limitations.</li>
            <li>Editable drafts with factual questions marked for approval.</li>
            <li>Implementation responsibilities and publication status.</li>
            <li>Review notes, agreed revisions and next steps.</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="sample-call" className="px-6 py-20 md:py-28 border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 id="sample-call" className="font-grotesk text-3xl md:text-4xl tracking-tight mb-6">Let’s scope the work your client needs.</h2>
          <p className="text-zinc-400 leading-relaxed mb-8">Discuss deliverables, review responsibilities and scope-based partner pricing. Your agency stays in control of the relationship.</p>
          <a href="https://calendly.com/anshnb07/30min" className={`btn-primary px-8 py-4 ${focus}`}>Book a partner call <ArrowRight className="w-4 h-4" aria-hidden="true" /></a>
        </div>
      </section>
    </div>
  );
}
