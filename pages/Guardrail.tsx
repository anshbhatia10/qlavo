import React, { useRef, useEffect, useState } from 'react';
import { Shield, AlertTriangle, FileText, CheckCircle2, ArrowRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Guardrail: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      if (scrollRef.current) {
        setIsScrollable(scrollRef.current.scrollWidth > scrollRef.current.clientWidth);
      }
    };
    
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, []);

  const quotes = [
    "I couldn't fix a billing mistake without creating a bigger one.",
    "There is no proper audit trail — transactions can be changed too easily.",
    "Once a payment is made, you're locked in, even if it's wrong.",
    "The trust accounting feels dangerous if you don't catch things early.",
    "Billing works until something unusual happens — then you're stuck.",
    "Support couldn't explain how to correct errors safely.",
    "I'm always worried a small mistake could turn into a complaint.",
    "You need multiple tools just to feel safe.",
    "The software assumes perfect data entry — real life isn't perfect.",
    "I like the system overall, but billing makes me uneasy."
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 tracking-tight">Guardrail</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tighter mb-5 md:mb-6 leading-tight">
              Billing & trust safety <br/>
              <span className="text-zinc-500">for law firms.</span>
            </h1>
            <p className="text-base md:text-xl text-zinc-400 font-light leading-relaxed mb-8">
              Prevent trust and billing mistakes before they become complaints, audits, or refunds. 
              Works alongside Clio and similar systems.
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

      {/* The Problem */}
      <section className="py-12 md:py-16 border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-xl md:text-2xl font-medium text-white mb-6">The problem</h2>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-4">
              Modern billing software is powerful — but rigid.
            </p>
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-4">
              When something goes wrong, you can't safely fix it, you can't clearly explain it, and you're still personally responsible.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Billing mistakes don't feel like "software issues." <span className="text-zinc-500">They feel like professional risk.</span>
            </p>
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="py-12 md:py-16 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-medium text-white mb-6">What Guardrail does</h2>
          
          <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-8 max-w-3xl">
            Guardrail adds a compliance and safety layer on top of your existing billing system. 
            Before invoices are sent or trust actions are completed, it:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mb-8">
            <div className="glass-panel p-5 md:p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Pre-flight Checks</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Runs trust & billing checks before actions are finalized
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-5 md:p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Smart Blocking</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Flags or blocks risky actions before they become irreversible
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-5 md:p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Plain English</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Explains why something is a problem in clear, understandable language
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-5 md:p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Audit Trail</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Creates an immutable audit trail with safe, logged overrides when needed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 md:p-6 bg-zinc-900/30 border border-white/5 rounded-2xl max-w-3xl">
            <h4 className="text-base font-medium text-white mb-3">What it's NOT</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-400">
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
            <p className="text-zinc-300 mt-4 text-sm">
              You stay in control. We help you avoid preventable mistakes.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-12 md:py-16 border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-medium text-white mb-8">Key features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-white">Pre-flight Checks</h3>
              </div>
              <div className="space-y-2 text-sm text-zinc-400 pl-13">
                <p>• Negative trust balance detection</p>
                <p>• Client / matter mismatch warnings</p>
                <p>• Large or unusual amount flags</p>
                <p>• UK & Australia-aware rule presets</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-white">Clear Explanations</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm pl-13">
                No cryptic errors. You see why something is risky — before it becomes irreversible. 
                Every check, override, and action is logged with who, when, and why.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-white">Safe Overrides</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm pl-13">
                When exceptions are legitimate: explicit confirmation required, reason captured, 
                permanently recorded. No silent edits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-16 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-medium text-white mb-8">Pricing</h2>
          
          <div className="max-w-2xl glass-panel p-6 md:p-8 rounded-2xl border border-white/10">
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl md:text-5xl font-bold text-white">£49</span>
              <span className="text-zinc-400 text-base">/ firm / month</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="text-zinc-300 text-sm">Unlimited users</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="text-zinc-300 text-sm">Unlimited matters</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="text-zinc-300 text-sm">Full audit logs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="text-zinc-300 text-sm">UK & AU compliance presets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="text-zinc-300 text-sm">No annual contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="text-zinc-300 text-sm">No per-user fees</span>
              </div>
            </div>

            <p className="text-zinc-500 text-xs mb-6">
              Early customers receive price protection.
            </p>

            <Link
              to="/contact"
              className="block w-full px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all text-center text-sm"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Real Pain Points - Carousel */}
      <section className="py-12 md:py-16 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-medium text-white mb-8">What lawyers say about billing software</h2>
          
          <div className="relative">
            <div 
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent snap-x snap-mandatory"
              style={{ scrollbarWidth: 'thin' }}
            >
              {quotes.map((quote, idx) => (
                <div 
                  key={idx} 
                  className="glass-panel p-5 rounded-2xl border border-white/5 min-w-[280px] md:min-w-[340px] snap-start"
                >
                  <p className="text-zinc-400 text-sm leading-relaxed italic">"{quote}"</p>
                </div>
              ))}
            </div>
            {isScrollable && (
              <div className="text-center mt-4">
                <p className="text-zinc-500 text-xs">Scroll to see more →</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-12 md:py-16 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-xl md:text-2xl font-medium text-white mb-6">Built for law firms that:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-zinc-600" />
                <span>Use Clio or similar platforms</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-zinc-600" />
                <span>Handle client trust accounts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-zinc-600" />
                <span>Use flat-fee or mixed billing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-zinc-600" />
                <span>Want fewer billing surprises</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Qlavo */}
      <section className="py-12 md:py-16 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-xl md:text-2xl font-medium text-white mb-6">Why Qlavo</h2>
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-6">
              We build in-house AI and infrastructure for law firms. We understand legal risk, compliance anxiety, 
              and why "just automate it" is dangerous.
            </p>
            <p className="text-lg md:text-xl text-white font-medium">
              Guardrail is built with the same philosophy: <span className="text-zinc-500 font-light">Augment judgement. Don't replace it.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 text-center bg-black border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">Get started</h2>
          <p className="text-zinc-400 mb-8 text-base font-light">
            If billing or trust handling ever makes you pause — Guardrail was built for you.
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
