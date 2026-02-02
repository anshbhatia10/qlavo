import React from 'react';
import { ArrowRight, MessageSquare, Search, Target, BarChart, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIVisibility: React.FC = () => {
    return (
        <div className="bg-black min-h-screen">
            {/* Hero */}
            <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-zinc-900 rounded-xl border border-white/10">
                            <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm text-zinc-500 uppercase tracking-widest">Service</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tighter mb-8 leading-tight">
                        AI Visibility & <br />Answer Engine Optimization
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-10">
                        The way people search is changing. ChatGPT, Gemini, and Claude are becoming the new search engines—and your traditional SEO won't get you found there.
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
                        Your customers are asking AI for recommendations. Are you showing up?
                    </h3>
                    <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
                        <p>
                            When someone asks ChatGPT "What's the best [your service] in [your city]?" or "Who should I hire for [your specialty]?"—what happens? If you're not optimized for AI visibility, the answer is simple: you're invisible.
                        </p>
                        <p>
                            Traditional SEO focused on Google's algorithm. But AI assistants work differently. They synthesize information from across the web, looking for authority signals, structured data, and content that directly answers questions.
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">What We Do</h2>
                    <h3 className="text-3xl md:text-4xl font-semibold text-white mb-12">
                        Position your brand to be recommended by AI
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Search,
                                title: "AI Search Audit",
                                desc: "We analyze how your brand currently appears in AI-generated answers and identify gaps in your visibility."
                            },
                            {
                                icon: Target,
                                title: "Content Strategy",
                                desc: "We develop content that AI systems recognize as authoritative and recommend to users asking relevant questions."
                            },
                            {
                                icon: BarChart,
                                title: "Performance Tracking",
                                desc: "We monitor your AI search presence and track how often you're being recommended across different platforms."
                            },
                            {
                                icon: CheckCircle2,
                                title: "Ongoing Optimization",
                                desc: "AI systems evolve constantly. We continuously refine your presence to maintain and improve your visibility."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 bg-zinc-900/40 border border-white/5 rounded-2xl">
                                <div className="p-3 bg-zinc-800 rounded-xl w-fit mb-4">
                                    <item.icon className="w-5 h-5 text-white" />
                                </div>
                                <h4 className="text-lg font-medium text-white mb-3">{item.title}</h4>
                                <p className="text-zinc-400 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why It Matters */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">Why It Matters</h2>
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <span className="text-5xl font-thin text-zinc-800">01</span>
                            <div>
                                <h4 className="text-xl font-medium text-white mb-2">First-mover advantage</h4>
                                <p className="text-zinc-400 font-light">Most businesses haven't even thought about AI visibility yet. Getting in early means less competition.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <span className="text-5xl font-thin text-zinc-800">02</span>
                            <div>
                                <h4 className="text-xl font-medium text-white mb-2">AI ads are coming</h4>
                                <p className="text-zinc-400 font-light">ChatGPT and others are already exploring advertising. Being ready now positions you for when that market opens.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <span className="text-5xl font-thin text-zinc-800">03</span>
                            <div>
                                <h4 className="text-xl font-medium text-white mb-2">Trust at the moment of decision</h4>
                                <p className="text-zinc-400 font-light">Being recommended by AI carries implicit trust. It's like getting a referral from a knowledgeable friend.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-32 text-center border-t border-white/5">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">Ready to get found by AI?</h2>
                    <p className="text-zinc-400 mb-10 text-base md:text-lg font-light">
                        Let's analyze your current AI visibility and build a strategy to get you recommended.
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

export default AIVisibility;
