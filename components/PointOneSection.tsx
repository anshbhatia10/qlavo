import React from 'react';
import { MousePointer2, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PointOneSection: React.FC = () => {
  return (
    <section id="point-one" className="py-20 md:py-32 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-4 tracking-tight">PointOne</h2>
          <h3 className="text-3xl md:text-6xl font-semibold text-white tracking-tight mb-6 md:mb-8 leading-[1.2] md:leading-[1.1]">
            Stop losing billable hours. <br/>
            <span className="text-zinc-500 text-2xl md:text-5xl font-light">Capture everything automatically.</span>
          </h3>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            Lawyers lose thousands in revenue every year because small tasks go unrecorded. PointOne sits silently on your desktop, using private local AI to track your work so you never have to start a manual timer again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="glass-panel p-6 md:p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
              <MousePointer2 className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-medium text-white mb-3">Automatic Capture</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              It identifies which case or document you're working on and logs the exact time. You focus on the law; PointOne handles the clock.
            </p>
          </div>

          <div className="glass-panel p-6 md:p-8 rounded-3xl">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-medium text-white mb-3">AI-Generated Entries</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Our built-in AI drafts your billing narratives for you, turning your daily activity into professional descriptions ready for your invoices.
            </p>
          </div>

          <div className="glass-panel p-6 md:p-8 rounded-3xl border-white/10">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-medium text-white mb-3">Total Privacy</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Your client data never leaves your computer. Because the AI is local, your secrets stay off the internet and under your total control.
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-12">
          <Link to="/point-one" className="inline-flex items-center gap-2 text-white font-medium group border-b border-white/20 pb-1 hover:border-white transition-all text-sm md:text-base">
            See how it makes you money <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PointOneSection;