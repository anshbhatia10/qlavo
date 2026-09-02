import React, { useState } from 'react';
import { ArrowRight, TrendingUp, LineChart, BarChart3, Database, GitBranch, PieChart, Target, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Forecasting: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqItems = [
    {
      q: 'What data do I need to provide?',
      a: 'Whatever you have. The more historical data, the better — but we can start with as little as 12 months of monthly figures. We connect directly to your CRM, accounting software, booking platform, or whatever systems you use. No manual data dumps.'
    },
    {
      q: 'How long does it take to build a model?',
      a: 'Data integration takes 1–2 weeks. Model training and validation another 2–3 weeks. Dashboard deployment is typically week 4–5. You\'ll have a working forecast within 30–45 days from kickoff.'
    },
    {
      q: 'Do I need a data team to use this?',
      a: 'No. The dashboard is built for your leadership team, not data scientists. You log in, see your forecasts, run scenarios, and make decisions. If something needs adjusting, we handle it.'
    },
    {
      q: 'What about accuracy?',
      a: 'We target 85%+ accuracy on the primary forecast metric. But we don\'t just give you one number — you get a range with confidence intervals, so you know how much to trust each prediction. Accuracy improves over time as the model ingests more of your data.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. No lock-in. Month-to-month. We want the forecast to be so useful you keep it because you want it, not because of a contract.'
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
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm text-zinc-500 uppercase tracking-widest">Service</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-[1.08]">
            Know What's Coming.<br />
            <span className="text-gradient-emerald">Before It Arrives.</span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-8 max-w-3xl">
            Custom machine learning forecasting models built on your actual business data. Not spreadsheets. Not gut feel. Real predictions you can bet your budget on.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.02]"
            >
              Book a Discovery Call <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center gap-3 mt-2 sm:mt-0 sm:ml-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs text-zinc-500 font-medium">Most engagements start at <span className="text-white">£3,000/mo</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT IT IS ===== */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">What It Is</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6 tracking-tight">
                Forecasting That Actually<br />
                <span className="text-gradient-emerald">Learns Your Business</span>
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                Every business runs on predictions — next month's revenue, how many bookings, when to hire, what to budget. Most people build these forecasts in Google Sheets with formulas that haven't changed since 1998.
              </p>
              <p className="text-zinc-400 font-light leading-relaxed">
                We build custom machine learning models that eat your historical data, learn your seasonality patterns, understand your leading indicators, and produce forecasts that actually get more accurate over time. Not a dashboard you never look at — a prediction engine you actually use.
              </p>
            </div>
            <div className="glass-panel p-8 md:p-10">
              <h3 className="text-lg font-semibold text-white mb-6">What You Get</h3>
              <div className="space-y-5">
                {[
                  { icon: LineChart, text: 'Revenue & cash flow predictions' },
                  { icon: BarChart3, text: 'Demand and booking forecasts' },
                  { icon: Database, text: 'Custom ML model trained on your data' },
                  { icon: GitBranch, text: 'Scenario planning (best/worst/most likely)' },
                  { icon: PieChart, text: 'Live dashboard with auto-updating forecasts' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-emerald-400" />
                      </div>
                      <p className="text-white text-sm font-medium">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY IT MATTERS ===== */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5 bg-zinc-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">Why It Matters</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6 tracking-tight">
            Spreadsheets Can't Handle<br />
            <span className="text-gradient-emerald">Modern Revenue Complexity</span>
          </h2>
          <p className="text-zinc-400 text-lg font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Your business has too many variables — seasonality, marketing spend, market shifts, competitor moves — for a linear formula in a cell to predict anything useful.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                number: '87%',
                label: 'of spreadsheet forecasts miss revenue targets by more than 10%',
                source: 'Harvard Business Review'
              },
              {
                number: '3.5x',
                label: 'more accurate predictions with ML forecasting vs. traditional methods',
                source: 'McKinsey'
              },
              {
                number: '£2.4M',
                label: 'average annual revenue impact of improved forecasting accuracy for mid-market firms',
                source: 'Deloitte'
              }
            ].map((stat, i) => (
              <div key={i} className="bento-card p-8 flex flex-col">
                <p className="text-4xl md:text-5xl font-bold text-white mb-3">{stat.number}</p>
                <p className="text-zinc-400 text-sm font-light leading-relaxed flex-1">{stat.label}</p>
                <p className="text-[10px] text-zinc-600 uppercase tracking-wider mt-4">— {stat.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS: 3 STEPS ===== */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">Process</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
              Three Steps to <span className="text-gradient-emerald">Know the Future</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Data Integration',
                desc: 'We connect to your existing systems — CRM, accounting, booking platform, whatever you use. No manual CSV exports. Your data flows in automatically.',
                icon: Database
              },
              {
                step: '02',
                title: 'Model Building',
                desc: 'We train a custom ML model on your historical data, tuned to your specific patterns. Seasonality. Trends. Leading indicators. All built in.',
                icon: GitBranch
              },
              {
                step: '03',
                title: 'Dashboard Launch',
                desc: 'You get a live dashboard with rolling forecasts, scenario planning, and alerts. Updated automatically. No data team required to run it.',
                icon: PieChart
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-6 bg-zinc-900/40 border border-white/5 rounded-2xl flex flex-col relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 bg-zinc-800 rounded-xl">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-zinc-800/50">{item.step}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed flex-1">{item.desc}</p>
                  {i < 2 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-zinc-700" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PRICING SIGNAL ===== */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5 bg-zinc-950/30 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="glass-panel p-10 md:p-14">
            <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em] mb-4 block">Investment</span>
            <p className="text-3xl md:text-4xl font-bold text-white mb-4">
              Most Forecasting Engagements<br />
              <span className="text-gradient-emerald">Start at £3,000/mo</span>
            </p>
            <p className="text-zinc-400 text-sm font-light leading-relaxed mb-8 max-w-md mx-auto">
              Scoped based on data complexity, number of forecasting models, and dashboard requirements. No lock-in contracts. Cancel anytime.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.02]"
            >
              Book a Discovery Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== USE CASES ===== */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">Use Cases</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
              Built for <span className="text-gradient-emerald">Real Decisions</span>
            </h2>
            <p className="text-zinc-400 text-base font-light mt-4 max-w-xl mx-auto">
              Not a theoretical model. A tool your leadership team actually uses.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { title: 'Revenue Forecasting', desc: 'Predict next quarter\'s revenue with 85%+ accuracy. Know before your finance team finishes their spreadsheets.' },
              { title: 'Demand Planning', desc: 'Forecast bookings, orders, or service volume. Optimize staffing and inventory before the rush hits.' },
              { title: 'Cash Flow Prediction', desc: 'See your cash position 6 months out. Make hiring and investment decisions with confidence.' },
              { title: 'Scenario Modeling', desc: 'What happens if you double marketing spend? If a competitor enters your market? If the economy slows? Model it.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-zinc-900/40 border border-white/5 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Target className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold mb-1">{item.title}</h4>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5 bg-zinc-950/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em]">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
              Quick Answers About<br />
              <span className="text-gradient-emerald">Forecasting</span>
            </h2>
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
      <section className="py-20 md:py-32 px-6 border-t border-white/5 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Stop Guessing.<br />
            <span className="text-gradient-emerald">Start Knowing.</span>
          </h2>
          <p className="text-zinc-400 mb-10 text-base md:text-lg font-light">
            Tell us what you need to forecast. We'll show you what's possible in a 30-minute discovery call — no pitch, just possibilities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05]"
          >
            Book a Discovery Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Forecasting;
