import React from 'react';
import { ArrowRight, Search, Code2, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection: React.FC = () => {
  const steps = [
    {
      id: "01",
      icon: Search,
      title: "Discovery & Audit",
      desc: "We analyze your manual processes and data flows. We calculate potential billable time leakage and ROI before code is written."
    },
    {
      id: "02",
      icon: Code2,
      title: "Automate & Build",
      desc: "We build custom agents, dashboards, or deploy PointOne. We handle integration with your existing Case Management Software."
    },
    {
      id: "03",
      icon: Rocket,
      title: "Training & Scale",
      desc: "We deploy the system and train your partners and associates. You start saving hours of administrative work immediately."
    }
  ];

  return (
    <section id="services" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">How We Deliver</h2>
            <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
              A transparent engagement <br /> model for legal firms.
            </h3>
          </div>
          <div className="pb-2">
            <Link to="/contact" className="group flex items-center gap-2 text-white border-b border-white pb-1 hover:text-zinc-300 hover:border-zinc-300 transition-colors">
              Start a custom project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="group border-t border-zinc-800 pt-8 hover:border-white transition-colors duration-500">
              <div className="flex justify-between items-start mb-6">
                <span className="text-5xl font-thin text-zinc-800 group-hover:text-zinc-600 transition-colors">{step.id}</span>
                <div className="p-3 bg-zinc-900 rounded-full text-white">
                  <step.icon className="w-5 h-5" />
                </div>
              </div>
              <h4 className="text-xl font-medium text-white mb-4">{step.title}</h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Custom Tools Callout */}
        <div className="mt-24 p-8 md:p-16 bg-zinc-900/30 border border-white/5 rounded-[32px] text-center">
            <h4 className="text-2xl md:text-3xl font-semibold text-white mb-6">Need something specific?</h4>
            <p className="text-zinc-500 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Beyond PointOne and Donna, we build custom dashboards, document automation pipelines, and client portals tailored to your practice area.
              We don't just sell software; we re-engineer your firm's operating system.
            </p>
            <Link to="/contact" className="inline-block px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05]">
                Request Custom Quote
            </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;