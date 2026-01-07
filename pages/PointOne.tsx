import React from 'react';
import { Clock, PenTool, CheckCircle2, ShieldAlert, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const PointOne: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-xl md:text-4xl font-bold text-white mb-4 md:mb-6 tracking-tight">PointOne</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-white tracking-tighter mb-6 md:mb-8 leading-tight">
              Time tracking without <br/>
              <span className="text-zinc-500">cloud surveillance.</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-400 font-light leading-relaxed mb-10">
              PointOne captures your billable time automatically—on your machine, with on-device AI. No cloud sync. No API calls to OpenAI. Your client data never leaves your desk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all text-center">
                Get Started
              </Link>
              <div className="px-8 py-4 bg-transparent border border-white/10 text-zinc-400 rounded-full flex items-center justify-center gap-2 cursor-default text-sm md:text-base">
                <ShieldAlert className="w-4 h-4" /> 100% Private & Local
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3-Step Process */}
      <section className="py-20 md:py-24 border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-12 md:mb-16">How it works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Step 1 */}
            <div className="space-y-6">
              <div className="text-3xl md:text-4xl font-light text-zinc-800">01</div>
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-white">Work Normally</h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                PointOne runs in the background. Whether you spend 10 minutes on a document or 5 minutes on an email, it captures the activity instantly without you touching a timer.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-6">
              <div className="text-3xl md:text-4xl font-light text-zinc-800">02</div>
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                <PenTool className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-white">Local AI Drafting</h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                On-device AI drafts professional billing narratives for every task—entirely offline. No data sent to external servers. Your activity logs stay encrypted on your machine.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-6">
              <div className="text-3xl md:text-4xl font-light text-zinc-800">03</div>
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-white">Approve & Send</h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                Quickly review your entries, make any needed adjustments, and export them directly to your existing billing software. You stay in total control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-panel p-6 md:p-10 rounded-3xl border-white/10 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="shrink-0">
                <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-zinc-500" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Why firms that rejected cloud AI use PointOne</h2>
                <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base">
                  Tools like Clio Duo, Billables AI, and MagicTime send your activity data to their cloud. PointOne doesn't. Everything runs on your machine—AI inference, data storage, narrative generation. Client confidentiality is never compromised.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12px] md:text-sm text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-zinc-600" />
                    <span>No external API calls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-zinc-600" />
                    <span>Encrypted SQLite storage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-zinc-600" />
                    <span>Works offline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-zinc-600" />
                    <span>On-device AI (Ollama)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">Start recovering your revenue.</h2>
          <p className="text-zinc-400 mb-10 text-base md:text-lg font-light">Join the firms that have stopped letting billable hours slip through the cracks.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05] text-sm md:text-base">
            Book a Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PointOne;