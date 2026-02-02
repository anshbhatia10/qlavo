import React from 'react';
import { ArrowRight, Bot, TrendingUp, Zap, BarChart3, MessageSquare, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  return (
    <section id="services" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Three ways to <br />outpace your competition.
            </h3>
          </div>
          <div className="pb-2">
            <Link to="/contact" className="group flex items-center gap-2 text-white border-b border-white pb-1 hover:text-zinc-300 hover:border-zinc-300 transition-colors">
              Get started today <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.id} to={service.link} className="group relative bg-zinc-900/40 border border-white/5 rounded-[24px] p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 block">
              {/* Service Number Badge */}
              <div className="absolute -top-4 left-8 px-4 py-1 bg-white text-black text-sm font-semibold rounded-full">
                {service.id}
              </div>

              <div className="pt-4">
                <div className="p-3 bg-zinc-800 rounded-xl w-fit mb-6 group-hover:bg-zinc-700 transition-colors">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <p className="text-zinc-400 text-sm font-medium mb-2">{service.subtitle}</p>
                <h4 className="text-xl font-semibold text-white mb-4 leading-snug">{service.title}</h4>
                <p className="text-zinc-400 font-light leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Benefits List */}
                <ul className="space-y-3 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-2 text-sm text-white group-hover:underline">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-24 pt-16 border-t border-white/5">
          <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-12 text-center">How We Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, step: "01", title: "Discovery", desc: "We analyze your current position, data infrastructure, and growth objectives to identify the highest-impact opportunities." },
              { icon: Zap, step: "02", title: "Build & Deploy", desc: "We implement the systems—whether it's AI visibility optimization, forecasting models, or workflow automation." },
              { icon: Bot, step: "03", title: "Scale & Support", desc: "We train your team and provide ongoing support to ensure you're maximizing value from every system we build." }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mb-6 border border-white/10">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-5xl font-thin text-zinc-800 block mb-4">{item.step}</span>
                <h4 className="text-lg font-medium text-white mb-3">{item.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 p-8 md:p-16 bg-zinc-900/30 border border-white/5 rounded-[32px] text-center">
          <h4 className="text-2xl md:text-3xl font-semibold text-white mb-6">Ready to future-proof your growth?</h4>
          <p className="text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you need AI visibility, custom forecasting, or full AI integration—we'll build the systems that give you an unfair advantage.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05]">
            Book a Strategy Call
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;