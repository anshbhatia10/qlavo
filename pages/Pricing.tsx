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
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-white">$49</span>
                  <span className="text-zinc-400 text-sm md:text-base">/ seat / month</span>
                </div>
                <p className="text-zinc-500 text-sm mt-2">Billed monthly. Cancel anytime.</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">Automatic activity capture</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">AI-drafted billing narratives</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">100% local processing</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">Export to existing billing software</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">Priority email support</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all text-center"
              >
                Get Started
              </Link>
            </div>

            {/* Qore 1.0 Card */}
            <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/20 flex flex-col relative overflow-hidden">
              {/* Accent border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0"></div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">Qore 1.0</h3>
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
                  <span className="text-zinc-300 text-sm md:text-base">Private, on-premise deployment</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">Flexible: rent or buy GPU hardware</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">Custom model parameters & fine-tuning</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">Full data sovereignty</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">Dedicated implementation support</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 shrink-0" />
                  <span className="text-zinc-300 text-sm md:text-base">SLA & ongoing maintenance</span>
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
              <h3 className="text-lg font-medium text-white mb-3">What's included in PointOne?</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                PointOne includes automatic time tracking, AI-generated billing narratives, and seamless export to your existing billing software. Everything runs locally on your machine for maximum privacy.
              </p>
            </div>

            <div className="border-b border-white/10 pb-8">
              <h3 className="text-lg font-medium text-white mb-3">How is Qore 1.0 priced?</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                Qore 1.0 pricing depends on your deployment preferences—whether you rent or purchase GPU hardware, the model parameters you need, and your support requirements. Contact us for a custom quote.
              </p>
            </div>

            <div className="border-b border-white/10 pb-8">
              <h3 className="text-lg font-medium text-white mb-3">Can I try before I buy?</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                Yes. We offer a pilot program for both PointOne and Qore 1.0. Book a call with our team to discuss a trial that fits your firm's needs.
              </p>
            </div>

            <div className="pb-8">
              <h3 className="text-lg font-medium text-white mb-3">Is there a minimum commitment?</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                PointOne is billed monthly with no long-term commitment—cancel anytime. Qore 1.0 typically involves a longer engagement due to the infrastructure setup, which we'll discuss during your consultation.
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
