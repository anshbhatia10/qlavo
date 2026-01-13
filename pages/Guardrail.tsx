import React, { useRef, useEffect, useState } from 'react';
import { Shield, AlertTriangle, FileText, CheckCircle2, ArrowRight, Lock, Users } from 'lucide-react';
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
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/5 rounded-full blur-[80px] md:blur-[120px] -z-10 opacity-20"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-xl md:text-4xl font-bold text-white mb-4 md:mb-6 tracking-tight">Guardrail</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-white tracking-tighter mb-6 md:mb-8 leading-tight">
              Billing mistakes caught <br/>
              <span className="text-zinc-500 font-light">before they're irreversible.</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-400 font-light leading-relaxed mb-10">
              Guardrail sits between you and your billing software. Pre-flight checks catch trust account errors, 
              client/matter mismatches, and unusual amounts before invoices go out. Works alongside Clio and similar platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all text-center">
                Request a Demo
              </Link>
              <div className="px-8 py-4 bg-transparent border border-white/10 text-zinc-400 rounded-full flex items-center justify-center gap-2 cursor-default text-sm md:text-base">
                <Shield className="w-4 h-4" /> From £49 / firm / month
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Guardrail Section */}
      <section className="py-20 md:py-24 border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">Why billing software needs a safety layer</h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                Modern billing platforms are powerful — but rigid. When something goes wrong, you can't safely fix it, 
                you can't clearly explain it, and you're still personally responsible. Billing mistakes don't feel like 
                "software issues." They feel like professional risk.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-zinc-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Pre-flight Checks</h4>
                    <p className="text-zinc-500 text-sm">Negative trust balances, client/matter mismatches, unusual amounts—all flagged before actions finalize.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-zinc-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Immutable Audit Trail</h4>
                    <p className="text-zinc-500 text-sm">Every check, override, and action logged permanently. Exportable for accountants or regulators.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-6 md:p-8 rounded-[24px] md:rounded-[32px] border-white/10 bg-white/[0.02] mt-8 lg:mt-0">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-5 h-5 text-zinc-400" />
                <span className="text-sm font-medium text-zinc-300">Pre-flight Warning</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-zinc-500 mb-1 uppercase tracking-wider">Attempted Action:</p>
                  <p className="text-sm text-zinc-300 italic">"Transfer £2,500 from trust account to operating account for Client A."</p>
                </div>
                <div className="p-4 bg-red-500/10 rounded-2xl border border-red-500/20">
                  <p className="text-[10px] text-red-400 mb-1 uppercase tracking-wider">Guardrail:</p>
                  <p className="text-sm text-zinc-200 font-light leading-relaxed">"⚠️ Blocked. Client A trust balance is £1,800. This transfer would create a negative balance of -£700. Please verify the amount or deposit additional funds first."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Helps Section */}
      <section className="py-20 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight">What Guardrail catches</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-sm md:text-base px-4">Mistakes that billing software lets through—until they become complaints, audits, or refunds.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="glass-panel p-6 md:p-8 rounded-3xl group hover:border-white/20 transition-all">
              <Shield className="w-8 h-8 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-medium text-white mb-3">Trust Account Errors</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Detects negative balances, client/matter mismatches, and transfers that violate trust accounting rules before they're executed.
              </p>
            </div>

            <div className="glass-panel p-6 md:p-8 rounded-3xl group hover:border-white/20 transition-all">
              <AlertTriangle className="w-8 h-8 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-medium text-white mb-3">Unusual Amounts</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Flags invoices or payments that are significantly different from your firm's typical ranges—catching data entry errors early.
              </p>
            </div>

            <div className="glass-panel p-6 md:p-8 rounded-3xl group hover:border-white/20 transition-all">
              <FileText className="w-8 h-8 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-medium text-white mb-3">Plain-English Warnings</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                No cryptic error codes. Every warning explains what's wrong, why it matters, and how to fix it—before it's too late.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Lawyers Say - Carousel */}
      <section className="py-20 md:py-24 border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-8">What lawyers say about billing software</h2>
          
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

      {/* Technical Details */}
      <section className="py-16 md:py-20 border-y border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="flex-1 w-full order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Works alongside your existing stack</h2>
              <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base">
                Guardrail isn't a replacement. It's a safety layer that sits between you and your billing platform. 
                We don't process payments or hold client funds—we just help you avoid preventable mistakes.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-zinc-300 text-sm md:text-base">
                  <CheckCircle2 className="w-5 h-5 text-zinc-500" />
                  Works with Clio, PracticePanther, and similar platforms
                </li>
                <li className="flex items-center gap-3 text-zinc-300 text-sm md:text-base">
                  <Lock className="w-5 h-5 text-zinc-500" />
                  UK & Australia compliance presets built-in
                </li>
                <li className="flex items-center gap-3 text-zinc-300 text-sm md:text-base">
                  <Users className="w-5 h-5 text-zinc-500" />
                  Unlimited users, unlimited matters
                </li>
              </ul>
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-white">£49</span>
                  <span className="text-zinc-400 text-base">/ firm / month</span>
                </div>
                <p className="text-zinc-500 text-sm">No per-user pricing. No annual contracts. Early customers receive price protection.</p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-all text-sm md:text-base">
                Request a Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-1 w-full order-1 lg:order-2">
              <div className="relative aspect-square max-w-sm mx-auto">
                <div className="absolute inset-0 border border-white/10 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 border border-white/5 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center">
                      <Shield className="w-12 h-12 text-white mx-auto mb-4 opacity-50 md:opacity-100" />
                      <div className="text-[10px] md:text-sm text-zinc-500 uppercase tracking-widest">Guardrail</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Billing safety without changing your workflow.</h2>
          <p className="text-zinc-400 mb-10 text-base md:text-lg font-light">Built for firms that want fewer billing surprises.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-12 py-5 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05] text-sm md:text-base">
            Book a Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Guardrail;
