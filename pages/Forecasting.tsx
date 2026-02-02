import React from 'react';
import { ArrowRight, TrendingUp, LineChart, PieChart, Layers, Calculator, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';

const Forecasting: React.FC = () => {
    return (
        <div className="bg-black min-h-screen">
            {/* Hero */}
            <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-zinc-900 rounded-xl border border-white/10">
                            <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm text-zinc-500 uppercase tracking-widest">Service</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tighter mb-8 leading-tight">
                        Custom Forecasting <br />Models
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-10">
                        Stop guessing. We build forecasting systems tailored to your business that turn historical data into accurate predictions you can act on.
                    </p>

                    <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.02]">
                        Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* Problem */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">The Problem</h2>
                    <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8">
                        Making business decisions without knowing what's coming
                    </h3>
                    <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
                        <p>
                            Every business runs on predictions—how many bookings next month, what revenue to expect, how much inventory to hold, when to hire. But most businesses make these predictions based on gut feel and spreadsheets.
                        </p>
                        <p>
                            You have data. Lots of it. But turning that data into reliable forecasts requires models built specifically for your business context, not generic tools that don't understand your industry.
                        </p>
                    </div>
                </div>
            </section>

            {/* Types of Forecasting */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">What We Build</h2>
                    <h3 className="text-3xl md:text-4xl font-semibold text-white mb-12">
                        Forecasting systems for any business challenge
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: LineChart,
                                title: "Revenue Forecasting",
                                desc: "Predict future revenue based on historical patterns, seasonality, and leading indicators."
                            },
                            {
                                icon: Calculator,
                                title: "Demand Planning",
                                desc: "Forecast customer demand to optimize inventory, staffing, and resource allocation."
                            },
                            {
                                icon: TrendingUp,
                                title: "Booking & Lead Forecasting",
                                desc: "Predict appointment bookings, lead volume, and conversion rates over time."
                            },
                            {
                                icon: PieChart,
                                title: "Cash Flow Forecasting",
                                desc: "Model future cash positions to make informed financial decisions."
                            },
                            {
                                icon: Layers,
                                title: "Capacity Planning",
                                desc: "Forecast when you'll need to scale operations, hire, or expand infrastructure."
                            },
                            {
                                icon: GitBranch,
                                title: "Scenario Planning",
                                desc: "Model multiple futures—best case, worst case, and everything in between."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 bg-zinc-900/40 border border-white/5 rounded-2xl">
                                <div className="p-3 bg-zinc-800 rounded-xl w-fit mb-4">
                                    <item.icon className="w-5 h-5 text-white" />
                                </div>
                                <h4 className="text-lg font-medium text-white mb-3">{item.title}</h4>
                                <p className="text-zinc-400 font-light leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">Our Approach</h2>
                    <h3 className="text-3xl md:text-4xl font-semibold text-white mb-12">
                        From data to decisions
                    </h3>

                    <div className="space-y-12">
                        <div className="flex gap-6">
                            <span className="text-5xl font-thin text-zinc-800">01</span>
                            <div>
                                <h4 className="text-xl font-medium text-white mb-2">Understand your business</h4>
                                <p className="text-zinc-400 font-light leading-relaxed">We start by understanding what you're trying to predict and why. What decisions will this forecast drive? What data do you have?</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <span className="text-5xl font-thin text-zinc-800">02</span>
                            <div>
                                <h4 className="text-xl font-medium text-white mb-2">Build the model</h4>
                                <p className="text-zinc-400 font-light leading-relaxed">We develop a forecasting model tailored to your specific context—accounting for seasonality, trends, and the unique factors that affect your business.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <span className="text-5xl font-thin text-zinc-800">03</span>
                            <div>
                                <h4 className="text-xl font-medium text-white mb-2">Deploy with a dashboard</h4>
                                <p className="text-zinc-400 font-light leading-relaxed">You get a live dashboard that updates automatically with new predictions, scenario planning tools, and the insights you need to act.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <span className="text-5xl font-thin text-zinc-800">04</span>
                            <div>
                                <h4 className="text-xl font-medium text-white mb-2">Refine over time</h4>
                                <p className="text-zinc-400 font-light leading-relaxed">Models get better with more data. We continuously improve accuracy as your business generates new information.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-32 text-center border-t border-white/5">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">Ready to stop guessing?</h2>
                    <p className="text-zinc-400 mb-10 text-base md:text-lg font-light">
                        Let's talk about what you need to forecast and how we can build a system that delivers.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05]"
                    >
                        Book a Call <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Forecasting;
