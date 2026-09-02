import React, { useState } from 'react';
import { ArrowRight, Bot, Zap, Cpu, Users, Settings, Workflow, Clock, Check, ChevronDown, Star, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIIntegration: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqItems = [
    {
      q: 'What exactly do you set up?',
      a: 'Claude for Work, ChatGPT Teams, Gemini Business — we handle the full setup: account structure, permissions, security policies, shared workspaces, and team-wide access. Then we build custom agents and automated workflows on top of those platforms, tailored to how your business actually operates.'
    },
    {
      q: 'How long does implementation take?',
      a: 'Platform setup takes 1–2 days. Building a custom AI agent is typically 1–2 weeks depending on complexity. Workflow automation projects range from 2–6 weeks. We give you a timeline before we start — no surprises.'
    },
    {
      q: 'What kind of workflows can you automate?',
      a: 'Anything repetitive that involves text, data, or decisions: drafting proposals, summarizing reports, processing invoices, answering common customer questions, extracting data from documents, generating marketing content, analyzing survey responses — if a human is doing it on autopilot, AI can probably do it faster.'
    },
    {
      q: 'Do you train my team too?',
      a: 'Yes. Setup means nothing if nobody uses it. We run hands-on training sessions with your team — not generic \"how to prompt\" workshops, but specific walkthroughs of the actual workflows we built for them.'
    },
    {
      q: 'What does it cost?',
      a: 'Platform setup starts at £2,500. Custom AI agents are scoped individually based on complexity — most fall between £3,000–£8,000 per agent. Workflow automation projects are priced by scope. We\'ll give you a fixed price before we start.'
    }
  ];

  return (
    <div className="bg-black min-h-screen">

      {/* ===== HERO ===== */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-glow-emerald pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-zinc-900 rounded-xl border border-white/10">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm text-zinc-500 uppercase tracking-widest">Service</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-[1.08]">
            Make AI Your<br />
            <span className="text-gradient-emerald">Best Employee.</span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8 max-w-3xl">
            We set up Claude, ChatGPT, and custom AI agents that actually do the work — so your team stops typing prompts and starts getting results.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.02]"
            >
              Let's Talk About Your Needs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">The Problem</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6 tracking-tight">
                Your Team Has AI. <span className="text-gradient-emerald">It's Not Working.</span>
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                Everyone on your team has opened ChatGPT at least once. A few of them might even have a Claude account. But "playing with AI" and "integrating AI into your business operations" are two completely different things.
              </p>
              <p className="text-zinc-400 font-light leading-relaxed">
                Without proper setup, custom agents, and trained workflows, AI stays a novelty. A tab they open when they're curious. Meanwhile, you're leaving hours of saved time on the table every single week — because nobody has connected the dots between what AI can do and what your business actually needs done.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { stat: '47%', label: 'of companies say their AI investment hasn\'t delivered measurable productivity gains', source: 'BCG' },
                { stat: '20+ hrs', label: 'per employee per week spent on tasks AI could handle with proper setup', source: 'McKinsey' },
                { stat: '3.4x', label: 'productivity lift when AI is integrated into workflows vs. used ad-hoc', source: 'MIT' },
              ].map((item, i) => (
                <div key={i} className="bento-card p-6 flex items-start gap-5">
                  <div>
                    <p className="text-2xl font-bold text-white">{item.stat}</p>
                    <p className="text-xs text-zinc-500 font-light mt-1">{item.label}</p>
                    <p className="text-[9px] text-zinc-700 uppercase tracking-wider mt-2">— {item.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5 bg-zinc-950/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
              Three Ways We Make<br />
              <span className="text-gradient-emerald">AI Work for You</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Settings,
                title: 'Claude & ChatGPT Teams Setup',
                desc: 'Full setup of ChatGPT for Teams, Claude for Work, or Gemini Business. Account structure, permissions, security, shared workspaces — everything configured so your team actually uses it.',
                highlights: ['Account provisioning', 'Security & permissions', 'Shared workspaces', 'Admin console setup']
              },
              {
                icon: Bot,
                title: 'Custom AI Agents',
                desc: 'We build AI agents purpose-built for your business. They know your products, your customers, your tone of voice, and your processes. Not a generic chatbot — an employee in software.',
                highlights: ['Custom knowledge bases', 'Brand voice training', 'Task-specific agents', 'API integrations']
              },
              {
                icon: Workflow,
                title: 'Workflow Automation',
                desc: 'We connect AI into your existing tools and processes so it works automatically in the background — drafting, summarizing, categorising, responding — without anyone having to open a chat window.',
                highlights: ['Process mapping', 'Tool integrations', 'Automated pipelines', 'Approval workflows']
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-6 bg-zinc-900/40 border border-white/5 rounded-2xl flex flex-col">
                  <div className="p-3 bg-zinc-800 rounded-xl w-fit mb-5">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed mb-5 flex-1">{item.desc}</p>
                  <div className="space-y-2 mt-auto pt-4 border-t border-white/5">
                    {item.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="text-xs text-zinc-500">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">Process</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
              From Chaos to <span className="text-gradient-emerald">Autopilot</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Audit', desc: 'We map your current workflows, identify automation opportunities, and figure out what AI should actually do.', icon: Search },
              { step: '02', title: 'Build', desc: 'We set up platforms, build custom agents, and connect workflows. Everything is tested before your team touches it.', icon: Zap },
              { step: '03', title: 'Train', desc: 'We run hands-on sessions with your team. Not generic prompting — specific walkthroughs of the workflows we built.', icon: Users },
              { step: '04', title: 'Support', desc: 'We monitor, tweak, and improve. AI needs tuning as your business changes. We handle that so you don\'t have to.', icon: Settings },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="relative p-6 bg-zinc-900/40 border border-white/5 rounded-2xl flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 bg-zinc-800 rounded-xl">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-zinc-800/50">{item.step}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed flex-1">{item.desc}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-zinc-700" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CASE STUDY ===== */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5 bg-zinc-950/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">Case Study</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
              Real Results. <span className="text-gradient-emerald">No Fluff.</span>
            </h2>
          </div>

          <div className="glass-panel p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-emerald-400 fill-emerald-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
              "We cut a client's reporting time from <span className="text-emerald-400">4 hours to 22 minutes.</span>"
            </blockquote>
            <p className="text-zinc-400 text-sm font-light max-w-lg mx-auto mb-6">
              A professional services firm was spending 4 hours every Monday manually compiling client reports. We built a custom AI agent that pulls data from their CRM, formats it, generates insights, and emails the PDF — all without human intervention.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500">
              <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> <span>Before: 4 hours per report</span></span>
              <span className="text-zinc-800">|</span>
              <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> <span>After: 22 minutes</span></span>
              <span className="text-zinc-800">|</span>
              <span className="flex items-center gap-2"><Star className="w-3.5 h-3.5 text-emerald-400" /> <span>92% time saved</span></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {[
              { before: '6 hours/week', after: '40 minutes', task: 'Drafting client proposals' },
              { before: '3 hours/day', after: '15 minutes', task: 'Email triage and responses' },
            ].map((item, i) => (
              <div key={i} className="p-5 bg-zinc-900/40 border border-white/5 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs text-zinc-500 mb-1">{item.task}</p>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-red-400/60">{item.before}</span>
                    <span className="text-zinc-700">→</span>
                    <span className="text-emerald-400 font-semibold">{item.after}</span>
                  </div>
                </div>
                <Zap className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
              Quick Answers About<br />
              <span className="text-gradient-emerald">AI Integration</span>
            </h2>
            <p className="text-zinc-400 text-base font-light mt-4">
              Real answers to the questions every business asks before bringing AI in-house.
            </p>
          </div>

          <div className="space-y-2.5">
            {faqItems.map((item, i) => (
              <div key={i} className="glass-panel rounded-xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left group"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-white text-sm font-medium pr-4 leading-snug group-hover:text-zinc-200 transition-colors">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-zinc-400 text-sm font-light leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-zinc-500 text-sm font-light mb-4">Still have questions?</p>
            <a href="mailto:info@qlavo.in" className="text-emerald-400 font-medium text-sm hover:text-emerald-300 transition-colors">
              info@qlavo.in
            </a>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-32 px-6 border-t border-white/5 text-center bg-zinc-950/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Make AI<br />
            <span className="text-gradient-emerald">Your Best Employee?</span>
          </h2>
          <p className="text-zinc-400 mb-10 text-base md:text-lg font-light">
            Tell us what your team spends too much time on. We'll show you exactly how AI can cut that down — in a 15-minute call, no commitment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05]"
          >
            Let's Talk <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AIIntegration;
