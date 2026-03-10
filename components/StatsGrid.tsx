import React from 'react';

const StatsGrid: React.FC = () => {
  return (
    <section className="bg-black border-y border-white/5 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="text-center group">
            <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter group-hover:text-zinc-300 transition-colors">3 in 4</h3>
            <p className="text-sm text-zinc-500 mt-3 font-light">consumers now use AI assistants<br />to research before buying</p>
          </div>
          <div className="text-center group">
            <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter group-hover:text-zinc-300 transition-colors">40%</h3>
            <p className="text-sm text-zinc-500 mt-3 font-light">of Google searches will shift to<br />AI-generated answers by 2027</p>
          </div>
          <div className="text-center group">
            <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter group-hover:text-zinc-300 transition-colors">&lt;1%</h3>
            <p className="text-sm text-zinc-500 mt-3 font-light">of businesses are actively<br />optimizing for AI search</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
