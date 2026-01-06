import React, { useState, useMemo } from 'react';
import { Calculator, DollarSign, Users, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ROICalculator: React.FC = () => {
  const [attorneys, setAttorneys] = useState<number>(5);
  const [hourlyRate, setHourlyRate] = useState<number>(350);
  const [hoursRecovered, setHoursRecovered] = useState<number>(10);

  const calculations = useMemo(() => {
    const monthlyRecoveredPerAttorney = hoursRecovered * hourlyRate;
    const monthlyRecoveredTotal = monthlyRecoveredPerAttorney * attorneys;
    const annualRecoveredTotal = monthlyRecoveredTotal * 12;

    const monthlyCost = attorneys * 49;
    const annualCost = monthlyCost * 12;

    const monthlyNetGain = monthlyRecoveredTotal - monthlyCost;
    const annualNetGain = annualRecoveredTotal - annualCost;

    const roi = annualCost > 0 ? ((annualNetGain / annualCost) * 100) : 0;

    return {
      monthlyRecoveredTotal,
      annualRecoveredTotal,
      monthlyCost,
      annualCost,
      monthlyNetGain,
      annualNetGain,
      roi
    };
  }, [attorneys, hourlyRate, hoursRecovered]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tighter mb-6 leading-tight">
            ROI Calculator
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
            See how much billable revenue you could recover with PointOne's automatic time tracking.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

            {/* Input Section */}
            <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/10">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-8">Your Firm Details</h2>

              <div className="space-y-8">
                {/* Number of Attorneys */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-zinc-300 text-sm md:text-base flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Number of Attorneys
                    </label>
                    <span className="text-white font-semibold text-lg">{attorneys}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={attorneys}
                    onChange={(e) => setAttorneys(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-white"
                  />
                  <div className="flex justify-between text-zinc-600 text-xs mt-2">
                    <span>1</span>
                    <span>100</span>
                  </div>
                </div>

                {/* Average Hourly Rate */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-zinc-300 text-sm md:text-base flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Average Hourly Rate
                    </label>
                    <span className="text-white font-semibold text-lg">${hourlyRate}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="1500"
                    step="25"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-white"
                  />
                  <div className="flex justify-between text-zinc-600 text-xs mt-2">
                    <span>$100</span>
                    <span>$1,500</span>
                  </div>
                </div>

                {/* Hours Recovered Per Month */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-zinc-300 text-sm md:text-base flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Hours Recovered / Attorney / Month
                    </label>
                    <span className="text-white font-semibold text-lg">{hoursRecovered}h</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={hoursRecovered}
                    onChange={(e) => setHoursRecovered(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-white"
                  />
                  <div className="flex justify-between text-zinc-600 text-xs mt-2">
                    <span>1h</span>
                    <span>30h</span>
                  </div>
                  <p className="text-zinc-500 text-xs mt-3">
                    Studies show lawyers lose 10-15 hours monthly to forgotten time entries.
                  </p>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {/* Main Result Card */}
              <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0"></div>

                <div className="flex items-center gap-2 text-zinc-400 text-sm mb-4">
                  <TrendingUp className="w-4 h-4" />
                  Annual Net Revenue Gain
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {formatCurrency(calculations.annualNetGain)}
                </div>
                <div className="text-zinc-500 text-sm">
                  After PointOne subscription costs
                </div>
              </div>

              {/* Breakdown Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-panel rounded-2xl p-6 border border-white/10">
                  <div className="text-zinc-400 text-xs md:text-sm mb-2">Monthly Recovery</div>
                  <div className="text-xl md:text-2xl font-semibold text-white">
                    {formatCurrency(calculations.monthlyRecoveredTotal)}
                  </div>
                </div>
                <div className="glass-panel rounded-2xl p-6 border border-white/10">
                  <div className="text-zinc-400 text-xs md:text-sm mb-2">Annual Recovery</div>
                  <div className="text-xl md:text-2xl font-semibold text-white">
                    {formatCurrency(calculations.annualRecoveredTotal)}
                  </div>
                </div>
                <div className="glass-panel rounded-2xl p-6 border border-white/10">
                  <div className="text-zinc-400 text-xs md:text-sm mb-2">Annual Cost</div>
                  <div className="text-xl md:text-2xl font-semibold text-white">
                    {formatCurrency(calculations.annualCost)}
                  </div>
                  <div className="text-zinc-600 text-xs mt-1">
                    {attorneys} seats × $49/mo × 12
                  </div>
                </div>
                <div className="glass-panel rounded-2xl p-6 border border-white/10">
                  <div className="text-zinc-400 text-xs md:text-sm mb-2">ROI</div>
                  <div className="text-xl md:text-2xl font-semibold text-white">
                    {calculations.roi.toFixed(0)}%
                  </div>
                  <div className="text-zinc-600 text-xs mt-1">
                    Return on investment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="py-16 md:py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-center">
            How we calculate this
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-semibold">1</span>
              </div>
              <h3 className="text-white font-medium mb-2">Lost Time</h3>
              <p className="text-zinc-400 text-sm">
                Research shows attorneys lose 10-15 hours monthly to incomplete time tracking—time worked but never billed.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-semibold">2</span>
              </div>
              <h3 className="text-white font-medium mb-2">Recovery Rate</h3>
              <p className="text-zinc-400 text-sm">
                PointOne's automatic tracking captures activities you'd normally miss, recovering a significant portion of this lost time.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-semibold">3</span>
              </div>
              <h3 className="text-white font-medium mb-2">Revenue Impact</h3>
              <p className="text-zinc-400 text-sm">
                Multiply recovered hours by your billing rate. Even conservative estimates show substantial revenue gains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
            Ready to recover your revenue?
          </h2>
          <p className="text-zinc-400 mb-10 text-base md:text-lg font-light">
            Join firms already using PointOne to capture every billable moment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05] text-sm md:text-base"
            >
              Book a Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all text-sm md:text-base"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ROICalculator;
