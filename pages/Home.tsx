import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import useScrollReveal from '../hooks/useScrollReveal';

/* ─── Typing Text Hook ─── */
const useTypingText = (text: string, speed: number = 20, startDelay: number = 500) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true);
      }
    }, { threshold: 0.3 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [started, text, speed, startDelay]);

  return { displayed, ref, done: displayed.length === text.length };
};

/* ─── AI Demo Section ─── */
const AIDemoSection: React.FC = () => {
  useScrollReveal();

  const aiText = `I searched for leading [your industry] providers in [your city] and found several options including [competitor A], [competitor B], and [competitor C]. However, I couldn't find specific information about [your business name] in my training data.`;

  const { displayed, ref, done } = useTypingText(aiText, 12, 300);

  return (
    <section className="py-24 md:py-32 bg-[#030303] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 uppercase tracking-[0.25em] mb-4">
            <span className="w-6 h-px bg-emerald-400/40" />
            See It In Action
            <span className="w-6 h-px bg-emerald-400/40" />
          </span>
          <h2 className="font-grotesk text-3xl md:text-5xl font-bold text-white tracking-tight">
            What does AI say <span className="text-gradient-emerald">about your business?</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto reveal-scale">
          <div className="bento-card p-8 md:p-12 gradient-border" ref={ref}>
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-400 text-xs font-bold font-grotesk">AI</span>
                </div>
                <div className="absolute inset-0 bg-emerald-400/10 rounded-full blur-lg" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Simulated AI Response</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Based on your current online presence</p>
              </div>
              {/* Live indicator */}
              <div className="ml-auto flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-emerald-400 font-medium uppercase tracking-wider">Live</span>
              </div>
            </div>

            {/* AI Response Bubble */}
            <div className="bg-zinc-900/60 rounded-2xl p-6 border border-white/5 mb-8 relative">
              <div className="absolute -top-2 left-6 w-4 h-4 bg-zinc-900/60 border-l border-t border-white/5 rotate-45" />
              <p className={`text-zinc-300 text-sm md:text-base font-light leading-relaxed ${!done ? 'typing-cursor' : ''}`}>
                {displayed.split(/(\[.*?\])/).map((part, i) => {
                  if (part.startsWith('[') && part.endsWith(']')) {
                    const isCompetitor = part.includes('competitor');
                    const isBusiness = part.includes('your business');
                    return (
                      <span
                        key={i}
                        className={
                          isCompetitor ? 'text-emerald-500/60' :
                          isBusiness ? 'text-red-400/70 font-medium' :
                          'text-zinc-500'
                        }
                      >
                        {part}
                      </span>
                    );
                  }
                  return <span key={i}>{part}</span>;
                })}
              </p>
            </div>

            {/* Status */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span className="text-xs text-red-400 font-medium">Your business not found</span>
              </div>
              <a
                href="/geo-calculator"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold"
              >
                Run Your Actual Audit →
              </a>
            </div>
          </div>

          <div className="text-center mt-8 reveal">
            <p className="text-zinc-500 text-sm font-light">
              This is what happens when AI can't find your business. <br className="hidden md:block" />
              Most companies don't know they're invisible until someone checks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Home Page ─── */
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
      <SEOMeta
        title="Qlavo | B2B GEO Agency — Get Cited on ChatGPT | Worldwide"
        description="Qlavo is a worldwide B2B GEO agency. Get cited by ChatGPT, Gemini, Perplexity, and Google AI Overviews. Founded 2025 by Ansh Bhatia. HQ New Delhi. Retainers for US, UK, EU, and Gulf hire."
        path="/"
      />

      {/* HERO */}
      <Hero />

      {/* WHAT WE DO */}
      <ServicesSection />

      {/* AI DEMO */}
      <AIDemoSection />

      {/* FAQ */}
      <FAQSection />

      {/* CONTACT */}
      <ContactSection />
    </>
  );
};

export default Home;
