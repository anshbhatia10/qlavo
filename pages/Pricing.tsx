import React from 'react';
import { Check, ArrowRight, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-white tracking-tighter mb-6 md:mb-8 leading-tight">
            Simple, transparent <br/>
            <span className="text-zinc-500">pricing.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
            Choose the solution that fits your firm. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* PointOne Card */}
            <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/10 flex flex-col">
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">PointOne</h3>
                <p className="text-zinc-400 text-sm md:text-base">Automatic time tracking for lawyers</p>
              </div>

              <div className="mb-8">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-white">£29</span>
                    <span className="text-zinc-400 text-sm md:text-base">/ user / month</span>
                  </div>
                  <p className="text-zinc-500 text-sm mt-2">No commitment</p>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-bold text-white">£24</span>
                    <span className="text-zinc-400 text-sm md:text-base">/ user / month</span>
                  </div>
                  <p className="text-zinc-500 text-sm mt-2">£288/year · 17% discount, paid upfront</p>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">Zero cloud sync—all data stays on your machine</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">On-device AI—no API calls to external servers</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">Automatic time capture & AI billing narratives</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">Encrypted SQLite storage</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">Export to existing billing software</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all text-center"
              >
                Get Started
              </Link>
            </div>

            {/* Donna Card */}
            <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/20 flex flex-col relative overflow-hidden">
              {/* Accent border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0"></div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">Donna</h3>
                  <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full">Enterprise</span>
                </div>
                <p className="text-zinc-400 text-sm md:text-base">Sovereign AI infrastructure for your firm</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-white">Custom</span>
                </div>
                <p className="text-zinc-500 text-sm mt-2">Tailored to your infrastructure needs</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">Behind your firewall—zero external data calls</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">Air-gapped deployment available</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">Fine-tuned on your firm's corpus</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">Full data sovereignty—your hardware, your data</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">Flexible: rent or buy GPU hardware</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">SLA & dedicated support</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all text-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-16 md:py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 text-center">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Calculate your ROI
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-8 max-w-xl mx-auto">
              See how much revenue you could recover with PointOne. Our calculator shows you the potential return based on your firm's billing rate and team size.
            </p>
            <Link
              to="/roi-calculator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.02]"
            >
              Try the Calculator <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-12 text-center">
            Frequently asked questions
          </h2>

          <div className="space-y-8">
            <div className="border-b border-white/10 pb-8">
              <h3 className="text-lg font-medium text-white mb-3">Does my data leave my machine with PointOne?</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                No. PointOne runs entirely on your device. The AI processes your activity logs locally using on-device models—no cloud sync, no API calls to OpenAI or third parties. Your client data never leaves your machine.
              </p>
            </div>

            <div className="border-b border-white/10 pb-8">
              <h3 className="text-lg font-medium text-white mb-3">How is Donna different from ChatGPT or other cloud AI?</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                Donna deploys behind your firewall on your own hardware. It's air-gapped by default—no data sent to external servers. Cloud AI tools like ChatGPT, Claude, and competing legal AI platforms route your queries through their infrastructure. With Donna, you have complete data sovereignty.
              </p>
            </div>

            <div className="border-b border-white/10 pb-8">
              <h3 className="text-lg font-medium text-white mb-3">Can I try before I buy?</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                Yes. We offer a pilot program for both PointOne and Donna. Book a call with our team to discuss a trial that fits your firm's needs.
              </p>
            </div>

            <div className="pb-8">
              <h3 className="text-lg font-medium text-white mb-3">What's the commitment?</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                PointOne has monthly and annual plans—no long-term lock-in. Donna typically involves a longer engagement due to infrastructure setup and model fine-tuning on your firm's data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 text-center border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">Ready to get started?</h2>
          <p className="text-zinc-400 mb-10 text-base md:text-lg font-light">
            Let's find the right solution for your firm.
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

export default Pricing;
