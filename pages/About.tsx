import React from 'react';
import SEOMeta from '../components/SEOMeta';
import { ArrowRight, MapPin, Building, Briefcase, BarChart3, TrendingUp, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const stats = [
    { number: 'Over half', label: 'consumers now use AI assistants to research before buying' },
    { number: '96%', label: 'of AI answers cite a brand — or make one up' },
    { number: '<1%', label: 'of businesses are actively optimizing for AI visibility right now' },
  ];

  return (
    <div className="bg-black min-h-screen">
      <SEOMeta
        title="About Qlavo — Delhi's Generative Engine Optimization Agency"
        description="Learn about Qlavo, Delhi's leading GEO agency. We help businesses get recommended by ChatGPT, Gemini, Perplexity, and Google AI Overviews through AI search optimization."
        path="/about"
      />
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
          "https://www.wikidata.org/wiki/Q139925819",
          "https://www.linkedin.com/in/ansh-bhatia-290665281/"
        ],
        "description": "Founder of Qlavo, an AI Visibility Agency based in New Delhi helping brands optimize for Generative Engine Optimization (GEO)."
      }) }} />

      {/* Hero / Founder Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="text-sm font-medium text-zinc-500 uppercase tracking-widest">About Qlavo</span>
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
              <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tighter mb-2 leading-tight">
                Ansh Bhatia
              </h1>
              <p className="text-xl text-emerald-500 font-medium mb-8">
                Founder, Qlavo
              </p>

              <div className="flex flex-col space-y-4 mb-8 text-sm text-zinc-400 font-mono">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-zinc-500" />
                  <span>Specialization: Generative Engine Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-zinc-500" />
                  <span>Previously: Social media marketing agency founder</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-zinc-500" />
                  <span>Location: New Delhi, India</span>
                </div>
              </div>

              {/* Bio — Joanna Wiebe style: punchy, conversational, zero fluff */}
              <div className="space-y-5 text-base md:text-lg text-zinc-300 font-light leading-relaxed">
                <p>
                  I ran a social media marketing agency for years. Paid traffic. Big budgets. 
                  Real results. Then something shifted.
                </p>

                <p>
                  People stopped typing queries into Google. They started <em>asking</em> — 
                  ChatGPT, Perplexity, Claude. And I watched brands I knew were excellent 
                  just... disappear from these answers. The AI either made something up 
                  or cited a competitor.
                </p>

                <p>
                  That's not a content problem. It's a data architecture problem.
                </p>

                <p>
                  LLMs don't read your website the way Google does. They don't crawl 
                  keywords. They look for entities, schemas, citation chains — structured 
                  proof that your business exists and matters.
                </p>

                <p>
                  I built Qlavo to solve one thing: <strong>AI invisibility</strong>. 
                  We audit how generative engines see your brand, then build the exact 
                  infrastructure they need to cite you by default. Not by chance.
                </p>

                <p className="text-zinc-500 text-sm">
                  No fluff. No content "strategies" that worked in 2022. Just the 
                  math of how LLMs decide who to recommend.
                </p>

                <div className="pt-6">
                  <a
                    href="https://www.linkedin.com/in/ansh-bhatia-290665281/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors text-sm"
                  >
                    Follow the research on LinkedIn <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Facts Section */}
      <section className="py-20 border-t border-white/5 bg-zinc-900/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium font-mono">The Data</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mt-3 tracking-tight">
              AI search isn't coming. It's here.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 bg-zinc-900/40">
                <p className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2 tracking-tight">
                  {stat.number}
                </p>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 border border-white/5 rounded-xl bg-zinc-900/20">
            <p className="text-zinc-500 text-xs font-mono leading-relaxed">
              Sources: Salesforce (2024), Authoritas (2024), BrightEdge AI search study (2024), 
              Gartner (2024), Qlavo proprietary crawl analysis across 4,200+ brand domains.
            </p>
          </div>
        </div>
      </section>

      {/* Why GEO Section */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium font-mono">The Shift</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mt-3 tracking-tight">
              Why GEO?
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex gap-5 items-start">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                <span className="text-emerald-400 font-mono text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Google is no longer the only front door</h3>
                <p className="text-zinc-400 font-light leading-relaxed">
                  ChatGPT surpassed 400M weekly users. Perplexity grew 500% in a year. 
                  People don't browse ten blue links anymore — they ask for one answer. 
                  If your brand isn't in that answer, it doesn't exist.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                <span className="text-emerald-400 font-mono text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">SEO optimizes for crawlers. GEO optimizes for reasoners.</h3>
                <p className="text-zinc-400 font-light leading-relaxed">
                  Google ranks pages. LLMs rank entities. They don't scan your meta 
                  description — they evaluate whether your business is a known, trusted 
                  entity backed by corroborating citations across the web. Different game. 
                  Different rules.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                <span className="text-emerald-400 font-mono text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Hallucination is your biggest competitor</h3>
                <p className="text-zinc-400 font-light leading-relaxed">
                  When an AI doesn't have structured data about your business, it does 
                  one of two things: invents a fact (hallucination) or recommends a 
                  brand that <em>did</em> structure its data. Either way, you lose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 text-center border-t border-white/5 bg-zinc-900/20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Let's get your brand cited by AI — not guessed.
          </h2>
          <p className="text-zinc-400 mb-10 text-base md:text-lg font-light">
            Free discovery call. 30 minutes. We'll audit your current AI visibility 
            and show you exactly what's missing.
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
