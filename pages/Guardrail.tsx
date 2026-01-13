import React from 'react';
import { Shield, AlertTriangle, FileText, CheckCircle2, ArrowRight, Lock, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Guardrail: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-xl md:text-4xl font-bold text-white mb-4 md:mb-6 tracking-tight">Qlavo Guardrail</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-white tracking-tighter mb-6 md:mb-8 leading-tight">
              Billing & trust safety <br/>
              <span className="text-zinc-500">for law firms.</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-400 font-light leading-relaxed mb-10">
              Prevent trust and billing mistakes before they become complaints, audits, or refunds. 
              Built by Qlavo — specialists in in-house AI for legal teams. Works alongside Clio and similar systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all text-center">
                Request a Demo
              </Link>
              <div className="px-8 py-4 bg-transparent border border-white/10 text-zinc-400 rounded-full flex items-center justify-center gap-2 cursor-default text-sm md:text-base">
                <Shield className="w-4 h-4" /> From £49 / firm / month
              </div>
            </div>
            <p className="text-zinc-500 text-sm mt-4">No per-user pricing. No lock-ins.</p>
          </div>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="py-20 md:py-24 border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-12 md:mb-16">Why Qlavo built this</h2>
          
          <div className="max-w-3xl space-y-6">
            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
              Modern billing software is powerful — but rigid.
            </p>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              When something goes wrong:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="text-zinc-400 text-base md:text-lg flex items-start gap-3">
                <span className="text-zinc-600 mt-1">•</span>
                <span>You can't safely fix it</span>
              </li>
              <li className="text-zinc-400 text-base md:text-lg flex items-start gap-3">
                <span className="text-zinc-600 mt-1">•</span>
                <span>You can't clearly explain it</span>
              </li>
              <li className="text-zinc-400 text-base md:text-lg flex items-start gap-3">
                <span className="text-zinc-600 mt-1">•</span>
                <span>And you're still personally responsible</span>
              </li>
            </ul>
            <p className="text-xl md:text-2xl text-white leading-relaxed mt-8">
              Billing mistakes don't feel like "software issues".<br/>
              <span className="text-zinc-500">They feel like professional risk.</span>
            </p>
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="py-20 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-12 md:mb-16">What Guardrail does (simple)</h2>
          
          <div className="max-w-3xl mb-12">
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8">
              Qlavo Guardrail adds a compliance and safety layer on top of your existing billing system.
            </p>
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-6">
              Before invoices are sent or trust actions are completed, it:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            <div className="glass-panel p-6 md:p-8 rounded-3xl">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Pre-flight Checks</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Runs pre-flight trust & billing checks before actions are finalized
              </p>
            </div>

            <div className="glass-panel p-6 md:p-8 rounded-3xl">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Smart Blocking</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Flags or blocks risky actions before they become irreversible
              </p>
            </div>

            <div className="glass-panel p-6 md:p-8 rounded-3xl">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Plain English</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Explains why something is a problem in clear, understandable language
              </p>
            </div>

            <div className="glass-panel p-6 md:p-8 rounded-3xl">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Audit Trail</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Creates an immutable audit trail with safe, logged overrides when needed
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 md:p-8 bg-zinc-900/30 border border-white/5 rounded-3xl max-w-3xl">
            <h4 className="text-lg font-medium text-white mb-4">What it's NOT (important)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>
                <span>Not a billing replacement</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>
                <span>Not a payment processor</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>
                <span>Not AI "auto-billing"</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>
                <span>Not legal advice</span>
              </div>
            </div>
            <p className="text-zinc-300 mt-6 text-sm md:text-base">
              You stay in control. We help you avoid preventable mistakes.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 md:py-24 border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-12 md:mb-16">Core features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Feature 1 */}
            <div className="space-y-6">
              <div className="text-3xl md:text-4xl font-light text-zinc-800">01</div>
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-white">Pre-flight Checks</h3>
              <div className="space-y-2 text-sm text-zinc-400">
                <p>• Negative trust balance detection</p>
                <p>• Client / matter mismatch warnings</p>
                <p>• Large or unusual amount flags</p>
                <p>• UK & Australia-aware rule presets</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="space-y-6">
              <div className="text-3xl md:text-4xl font-light text-zinc-800">02</div>
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-white">Plain-English Explanations</h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                No cryptic errors. You see why something is risky — before it becomes irreversible. 
                Every check, override, and action is logged with who, when, and why.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-6">
              <div className="text-3xl md:text-4xl font-light text-zinc-800">03</div>
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-white">Safe Override Flow</h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                When exceptions are legitimate: explicit confirmation required, reason captured, 
                permanently recorded. No silent edits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-panel p-6 md:p-10 rounded-3xl border-white/10 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="shrink-0">
                <Users className="w-10 h-10 md:w-12 md:h-12 text-zinc-500" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Who this is for</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-zinc-600" />
                    <span>Solo & small law firms (1–10 lawyers)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-zinc-600" />
                    <span>Firms using Clio or similar platforms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-zinc-600" />
                    <span>Flat-fee or mixed billing practices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-zinc-600" />
                    <span>Firms that want fewer billing surprises</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-24 border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-12 text-center">Pricing</h2>
          
          <div className="max-w-2xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border border-white/10">
            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl md:text-6xl font-bold text-white">£49</span>
                <span className="text-zinc-400 text-lg">/ firm / month</span>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white mt-0.5 shrink-0" />
                <span className="text-zinc-300 text-sm md:text-base">Unlimited users</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white mt-0.5 shrink-0" />
                <span className="text-zinc-300 text-sm md:text-base">Unlimited matters</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white mt-0.5 shrink-0" />
                <span className="text-zinc-300 text-sm md:text-base">Full audit logs</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white mt-0.5 shrink-0" />
                <span className="text-zinc-300 text-sm md:text-base">UK & AU compliance presets</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white mt-0.5 shrink-0" />
                <span className="text-zinc-300 text-sm md:text-base">No annual contracts</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white mt-0.5 shrink-0" />
                <span className="text-zinc-300 text-sm md:text-base">No per-user fees</span>
              </div>
            </div>

            <p className="text-zinc-500 text-sm text-center mb-8">
              Early customers receive price protection.
            </p>

            <Link
              to="/contact"
              className="block w-full px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all text-center"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Real Pain Points */}
      <section className="py-20 md:py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-12 md:mb-16 text-center">Real lawyer pain (from user reviews)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "I couldn't fix a billing mistake without creating a bigger one.",
              "There is no proper audit trail — transactions can be changed too easily.",
              "Once a payment is made, you're locked in, even if it's wrong.",
              "The trust accounting feels dangerous if you don't catch things early.",
              "Billing works until something unusual happens — then you're stuck.",
              "Support couldn't explain how to correct errors safely.",
              "I'm always worried a small mistake could turn into a complaint.",
              "You need multiple tools just to feel safe.",
              "The software assumes perfect data entry — real life isn't perfect."
            ].map((quote, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5">
                <p className="text-zinc-400 text-sm leading-relaxed italic">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Qlavo */}
      <section className="py-16 md:py-20 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Why Qlavo</h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-6">
              Qlavo builds in-house AI and infrastructure for law firms. We understand:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="px-6 py-3 bg-white/5 rounded-full text-zinc-300 text-sm">Legal risk</div>
              <div className="px-6 py-3 bg-white/5 rounded-full text-zinc-300 text-sm">Compliance anxiety</div>
              <div className="px-6 py-3 bg-white/5 rounded-full text-zinc-300 text-sm">Why "just automate it" is dangerous</div>
            </div>
            <p className="text-xl md:text-2xl text-white font-medium">
              Guardrail is built with the same philosophy:<br/>
              <span className="text-zinc-500 font-light">Augment judgement. Don't replace it.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 text-center bg-black">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">Get started</h2>
          <p className="text-zinc-400 mb-10 text-base md:text-lg font-light">
            If billing or trust handling ever makes you pause — Qlavo Guardrail was built for you.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05] text-sm md:text-base">
            Request a Demo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Guardrail;
