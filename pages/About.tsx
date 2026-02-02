import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tighter mb-12 md:mb-16 leading-tight">
            About Qlavo
          </h1>

          <div className="space-y-8 text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            <p>
              The way customers discover businesses is changing. ChatGPT, Gemini, and Claude are becoming the new search engines—and most businesses aren't prepared. Meanwhile, growth teams are still making decisions based on gut feel when they could have forecasting systems that actually work.
            </p>

            <p>
              We started Qlavo to solve these problems. Our mission is simple: give forward-thinking businesses the AI-powered infrastructure they need to stay ahead of their competition. Not generic AI advice—actual systems that deliver measurable results.
            </p>

            <p>
              <strong className="text-white">AI Visibility</strong> ensures you're found when customers ask AI assistants for recommendations. <strong className="text-white">Forecasting Systems</strong> turn your data into accurate booking and revenue predictions. <strong className="text-white">AI Integration</strong> brings tools like Claude and ChatGPT into your daily workflows as intelligent coworkers.
            </p>

            <p>
              We don't just consult—we build. Every engagement produces real systems that work for you long after we're gone.
            </p>

            <div className="pt-8 border-t border-white/10">
              <p className="text-base md:text-lg text-zinc-500">
                <strong className="text-white">Ansh Bhatia</strong>, Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 text-center border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">Let's talk about what you're building.</h2>
          <p className="text-zinc-400 mb-10 text-base md:text-lg font-light">
            Whether it's AI visibility, revenue forecasting, or full AI integration—we're here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05] text-sm md:text-base"
          >
            Book a Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
