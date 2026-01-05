import React from 'react';

const StatsGrid: React.FC = () => {
  return (
    <section className="bg-black border-y border-white/5 py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center group">
            <h3 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter group-hover:text-zinc-300 transition-colors">0.1h</h3>
            <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.3em] mt-3">Precision Billing</p>
          </div>
          <div className="text-center group">
            <h3 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter group-hover:text-zinc-300 transition-colors">100%</h3>
            <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.3em] mt-3">Privacy Focused</p>
          </div>
          <div className="text-center group">
            <h3 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter group-hover:text-zinc-300 transition-colors">24/7</h3>
            <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.3em] mt-3">Automated Ops</p>
          </div>
          <div className="text-center group">
            <h3 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter group-hover:text-zinc-300 transition-colors">Local</h3>
            <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.3em] mt-3">Infrastructure</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;