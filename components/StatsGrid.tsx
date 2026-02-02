import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatItem: React.FC<{ label: string; sub: string; delay?: number }> = ({ label, sub, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="text-center group cursor-default"
    >
      <h3 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter group-hover:text-zinc-300 transition-colors duration-300">
        {label}
      </h3>
      <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.3em] mt-3 group-hover:text-zinc-400 transition-colors duration-300">
        {sub}
      </p>
    </motion.div>
  );
};

const StatsGrid: React.FC = () => {
  return (
    <section className="bg-black border-y border-white/5 py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatItem label="AI Search" sub="Visibility" delay={0} />
          <StatItem label="Forecast" sub="Revenue Clarity" delay={0.1} />
          <StatItem label="Integrate" sub="AI Workflows" delay={0.2} />
          <StatItem label="Scale" sub="Your Business" delay={0.3} />
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
