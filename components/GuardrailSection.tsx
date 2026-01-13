import React from 'react';
import { Shield, AlertTriangle, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GuardrailSection: React.FC = () => {
  return (
    <section id="guardrail" className="py-20 md:py-32 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-4 tracking-tight">Qlavo Guardrail</h2>
          <h3 className="text-3xl md:text-6xl font-semibold text-white tracking-tight mb-6 md:mb-8 leading-[1.2] md:leading-[1.1]">
            Prevent billing mistakes. <br/>
            <span className="text-zinc-500 text-2xl md:text-5xl font-light">Before they cost you.</span>
          </h3>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            Billing mistakes don't feel like software issues — they feel like professional risk. 
            Guardrail adds a safety layer on top of Clio and similar systems, catching errors before invoices are sent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="glass-panel p-6 md:p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-medium text-white mb-3">Pre-flight Checks</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Runs trust & billing checks before actions are finalized. Catches negative balances, client/matter mismatches, and unusual amounts.
            </p>
          </div>

          <div className="glass-panel p-6 md:p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-medium text-white mb-3">Plain English Warnings</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              No cryptic errors. Every warning explains what's wrong and why it matters — before it's too late to fix.
            </p>
          </div>

          <div className="glass-panel p-6 md:p-8 rounded-3xl border-white/10">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-medium text-white mb-3">Immutable Audit Trail</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Every check, override, and action is permanently logged. Exportable for accountants, audits, or regulators.
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-12">
          <Link to="/guardrail" className="inline-flex items-center gap-2 text-white font-medium group border-b border-white/20 pb-1 hover:border-white transition-all text-sm md:text-base">
            See how it protects your firm <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GuardrailSection;
