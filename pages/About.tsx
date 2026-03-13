import React from 'react';
import { ArrowRight, MapPin, Building, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* JSON-LD Schema for Founder Entity Corroboration */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ansh Bhatia",
        "jobTitle": "Founder & AI Visibility Strategist",
        "worksFor": {
          "@type": "Organization",
          "name": "Qlavo",
          "url": "https://qlavo.in"
        },
        "url": "https://qlavo.in/about",
        "sameAs": [
          "https://www.linkedin.com/in/ansh-bhatia-290665281/"
        ],
        "description": "Founder of Qlavo, an AI Visibility Agency based in Dubai helping B2B brands optimize for Generative Engine Optimization (GEO)."
      }) }} />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center md:text-left mb-16">
            <span className="text-[12px] uppercase tracking-[0.2em] text-zinc-500 font-medium font-mono">
              Last Updated: March 13, 2026
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3 shrink-0">
              <div className="p-2 border border-white/10 rounded-3xl bg-zinc-900/30">
                <img
                  src="/ansh.jpg"
                  alt="Ansh Bhatia"
                  className="w-full aspect-[4/5] rounded-2xl object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tighter mb-4 leading-tight">
                Ansh Bhatia
              </h1>
              <h2 className="text-xl text-emerald-500 font-medium mb-8">
                Founder, Qlavo | AI Visibility Strategist | Dubai
              </h2>
              
              <div className="flex flex-col space-y-4 mb-10 text-sm text-zinc-400 font-mono">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-zinc-500" />
                  <span>Specialization: Generative Engine Optimization (GEO)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-zinc-500" />
                  <span>Current: Founder @ Qlavo</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-zinc-500" />
                  <span>Location: Dubai, UAE</span>
                </div>
              </div>

              <div className="space-y-6 text-lg text-zinc-300 font-light leading-relaxed">
                <p>
                  I'm the founder of Qlavo, an agency focused on solving the newest problem in marketing: <strong>AI Invisibility</strong>.
                </p>

                <p>
                  Previously, I ran a social media marketing agency handling top-tier paid traffic campaigns for B2C clients. But looking at the data over the last year, it became obvious that the fundamental architecture of the internet was shifting from lexical search (Google) to generative recommendation (ChatGPT, Perplexity, Claude).
                </p>

                <p>
                  I built Qlavo because I saw mid-size B2B brands—companies doing $5M to $50M in revenue—disappearing entirely from AI search results simply because their data wasn't structured for LLMs. 
                </p>

                <p>
                  Now, I spend my time auditing the citation logic of large language models, building open-source GEO frameworks for developers, and structuring entity relationships for enterprise clients so they are mathematically impossible for AI engines to ignore.
                </p>

                <div className="pt-8">
                  <a
                    href="https://www.linkedin.com/in/ansh-bhatia-290665281/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                  >
                    Follow my research on LinkedIn <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Qlavo (The Agency) Section */}
      <section className="py-20 bg-zinc-900/20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-white mb-6">About Qlavo</h3>
          <div className="space-y-6 text-zinc-400 font-light leading-relaxed">
            <p>
              Qlavo is our Dubai-based AI infrastructure and visibility agency. We don't just consult—we build. 
            </p>
            <p>
              Our flagship service is <strong>Generative Engine Optimization (GEO)</strong>, where we construct the exact schemas, citation chains, and semantic clusters required to force AI algorithms to cite our clients. Beyond visibility, we build custom AI forecasting tools that turn historical data into accurate revenue predictions, and develop custom AI agents that automate complex workflows.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 text-center border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">Let's talk about what you're building.</h2>
          <p className="text-zinc-400 mb-10 text-base md:text-lg font-light">
            Whether it's AI visibility, revenue forecasting, or full workflow automation—we're here to help.
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
