import React from 'react';
import SEOMeta from '../components/SEOMeta';
import { ArrowRight, MapPin, Building, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const stats = [
    { number: 'Baseline', label: 'Record sampled AI answers and available sources before making changes' },
    { number: 'Implement', label: 'Improve agreed content, entity information, and technical accessibility' },
    { number: 'Review', label: 'Compare repeated checks and document what changed, including limitations' },
  ];

  return (
    <div className="bg-black min-h-screen">
      <SEOMeta
        title="About Qlavo — Worldwide B2B GEO Agency | HQ New Delhi"
        description="Qlavo is a worldwide B2B GEO agency founded in 2025 by Ansh Bhatia. HQ New Delhi. We help companies get cited by ChatGPT, Gemini, Perplexity, and Google AI Overviews."
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
        "description": "Founder of Qlavo, a worldwide B2B GEO agency headquartered in New Delhi, helping brands get cited in generative engines."
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
                  Before Qlavo, I ran a social media marketing agency. My focus shifted toward how people discover businesses through AI assistants.
                </p>

                <p>
                  Alongside search engines, people can now <em>ask</em> ChatGPT, Perplexity, or Claude about a business or service. That raises a different question: what do those answers actually say about your brand?
                </p>

                <p>
                  That calls for looking at content, technical accessibility, and the consistency of business information together.
                </p>

                <p>
                  AI answers can draw on different sources depending on the platform and whether web search is used. Clear pages and verifiable business details are useful foundations, but they do not control what an assistant will say.
                </p>

                <p>
                  I built Qlavo to focus on <strong>AI visibility</strong>. We review how your brand appears in a defined sample of answers, then scope practical content, entity, and technical improvements.
                </p>

                <p className="text-zinc-500 text-sm">
                  We report the work and the evidence. We do not guarantee rankings, AI recommendations, or a timeline for visibility gains.
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
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium font-mono">The Approach</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mt-3 tracking-tight">
              Evidence before assumptions.
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
              These are the stages of our work, not client performance statistics. Deliverables and reporting cadence are agreed in each engagement scope.
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
                  AI assistants offer another route for buyers to research businesses. Reviewing relevant questions can reveal mentions, omissions, or inaccurate descriptions that conventional search reports may not show.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                <span className="text-emerald-400 font-mono text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">SEO and GEO share foundations.</h3>
                <p className="text-zinc-400 font-light leading-relaxed">
                  Useful content, accessible pages, and consistent business information matter across discovery channels. GEO adds attention to how generated answers describe a brand and which sources they cite.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                <span className="text-emerald-400 font-mono text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Accuracy matters as much as mentions</h3>
                <p className="text-zinc-400 font-light leading-relaxed">
                  AI answers can contain incorrect or incomplete business information. We compare sampled descriptions with verifiable facts and identify changes to the sources you can control.
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
            Let's understand how AI describes your brand.
          </h2>
          <p className="text-zinc-400 mb-10 text-base md:text-lg font-light">
            Book a discovery call to discuss your website, target buyers, and whether a scoped AI visibility audit would be useful.
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
