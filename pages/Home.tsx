import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      {/* Schema: Organization with SameAs */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://qlavo.in#organization",
          "name": "Qlavo",
          "url": "https://qlavo.in",
          "description": "Qlavo is a Delhi-based Generative Engine Optimization (GEO) agency helping businesses get recommended by ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
          "foundingDate": "2025",
          "founder": {
            "@type": "Person",
            "name": "Ansh Bhatia",
            "sameAs": "https://www.wikidata.org/wiki/Q139925819"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Delhi",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://www.wikidata.org/wiki/Q139925808",
            "https://www.linkedin.com/company/qlavo",
            "https://crunchbase.com/organization/qlavo"
          ]
        })}
      </script>
      {/* HERO — Problem-focused headline */}
      <Hero />

      {/* WHAT WE DO — Stats + GEO deep dive + How It Works + CTA */}
      <ServicesSection />

      {/* SIMULATED AI DEMO — Show the gap */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium text-emerald-500 uppercase tracking-[0.2em] mb-4">See It In Action</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
              What does AI say <span className="text-gradient-emerald">about your business?</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bento-card p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-400 text-xs font-bold">AI</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Simulated AI Response</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Based on your current online presence</p>
                </div>
              </div>

              <div className="bg-zinc-900/50 rounded-xl p-6 border border-white/5 mb-6">
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  "I searched for leading <span className="text-zinc-600">[your industry]</span> providers in <span className="text-zinc-600">[your city]</span> and found several options including <span className="text-emerald-500/50">[competitor A]</span>, <span className="text-emerald-500/50">[competitor B]</span>, and <span className="text-emerald-500/50">[competitor C]</span>. However, I couldn't find specific information about <span className="text-red-400/50">[your business name]</span> in my training data."
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="text-xs text-red-400 font-medium">Your business not found</span>
                </div>
                <a
                  href="/geo-calculator"
                  className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Run your actual audit →
                </a>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-zinc-500 text-sm font-light">
                This is what happens when AI can't find your business. <br className="hidden md:block" />
                Most companies don't know they're invisible until someone checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CONTACT — Free audit + book a call */}
      <ContactSection />
    </>
  );
};

export default Home;
