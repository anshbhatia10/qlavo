import React from 'react';
import { ArrowRight, Bot, TrendingUp, Zap, BarChart3, MessageSquare, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: "01",
      icon: MessageSquare,
      title: "AI Visibility & Answer Engine Optimization",
      subtitle: "SEO for the AI Era",
      desc: "Get found when customers ask ChatGPT, Gemini, or Claude for recommendations. We optimize your brand's presence in AI-generated answers.",
      benefits: [
        "Rank in AI-generated recommendations",
        "Answer-engine content strategy",
        "AI search performance tracking"
      ],
      link: "/ai-visibility"
    },
    {
      id: "02",
      icon: TrendingUp,
      title: "Custom Forecasting Models",
      subtitle: "Predict. Plan. Profit.",
      desc: "Purpose-built forecasting systems tailored to your business. Turn historical data into accurate predictions with scenario planning capabilities.",
      benefits: [
        "Revenue & demand forecasting",
        "Scenario planning dashboards",
        "Data-driven decision support"
      ],
      link: "/forecasting"
    },
    {
      id: "03",
      icon: Cpu,
      title: "AI Integration for Business",
      subtitle: "Make AI Your Coworker",
      desc: "Set up Claude, ChatGPT, Gemini for your team. Build custom agents and workflows that handle repetitive tasks, freeing your team to focus on what matters.",
      benefits: [
        "Claude for Work/Teams setup",
        "Custom AI agent development",
        "Workflow automation"
      ],
      link: "/ai-integration"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">Our Services</h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-semibold text-white tracking-tight"
            >
              Three ways to <br />outpace your competition.
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="pb-2"
          >
            <Link to="/contact" className="group flex items-center gap-2 text-white border-b border-white pb-1 hover:text-zinc-300 hover:border-zinc-300 transition-colors">
              Get started today <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Services Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={item}>
              <Link to={service.link} className="group relative bg-zinc-900/40 border border-white/5 rounded-[24px] p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 block h-full overflow-hidden">
                {/* Subtle Gradient Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                {/* Service Number Badge */}
                <div className="absolute -top-4 left-8 px-4 py-1 bg-white text-black text-sm font-semibold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  {service.id}
                </div>

                <div className="pt-4">
                  <div className="p-3 bg-zinc-800 rounded-xl w-fit mb-6 group-hover:bg-zinc-700 transition-colors group-hover:scale-110 duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">{service.subtitle}</p>
                  <h4 className="text-xl font-semibold text-white mb-4 leading-snug group-hover:text-zinc-200">{service.title}</h4>
                  <p className="text-zinc-400 font-light leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-zinc-300">
                        <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-full flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center gap-2 text-sm text-white font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* How It Works */}
        <div className="mt-24 pt-16 border-t border-white/5">
          <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-12 text-center">How We Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, step: "01", title: "Discovery", desc: "We analyze your current position, data infrastructure, and growth objectives to identify the highest-impact opportunities." },
              { icon: Zap, step: "02", title: "Build & Deploy", desc: "We implement the systems—whether it's AI visibility optimization, forecasting models, or workflow automation." },
              { icon: Bot, step: "03", title: "Scale & Support", desc: "We train your team and provide ongoing support to ensure you're maximizing value from every system we build." }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="mx-auto w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:border-white/40 group-hover:bg-zinc-800 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-5xl font-thin text-zinc-800 block mb-4 group-hover:text-zinc-700 transition-colors">{item.step}</span>
                <h4 className="text-lg font-medium text-white mb-3">{item.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-8 md:p-16 bg-zinc-900/30 border border-white/5 rounded-[32px] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          <h4 className="text-2xl md:text-3xl font-semibold text-white mb-6 relative z-10">Ready to future-proof your growth?</h4>
          <p className="text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 relative z-10">
            Whether you need AI visibility, custom forecasting, or full AI integration—we'll build the systems that give you an unfair advantage.
          </p>
          <Link to="/contact" className="relative z-10 inline-block px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05]">
            Book a Strategy Call
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;