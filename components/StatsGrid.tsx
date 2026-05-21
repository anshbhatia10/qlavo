import React from 'react';
import { TrendingUp, BarChart3, Cpu } from 'lucide-react';

const stats = [
  {
    value: 'Over half',
    label: 'of consumers now use AI assistants to research before buying',
    icon: TrendingUp,
  },
  {
    value: '25%',
    label: 'search volume drop predicted by 2026 as users turn to AI-powered answers',
    icon: BarChart3,
  },
  {
    value: '<1%',
    label: 'of businesses are actively optimizing for AI search',
    icon: Cpu,
  },
];

const StatsGrid: React.FC = () => {
  return (
    <section className="bg-black border-y border-white/5 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.value}
                className="bento-card p-8 md:p-10 text-center flex flex-col items-center gap-5"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="stat-number mb-2">{stat.value}</p>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-[20ch] mx-auto">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
