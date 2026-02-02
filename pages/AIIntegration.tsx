import React from 'react';
import { ArrowRight, Cpu, Bot, Workflow, Users, Zap, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIIntegration: React.FC = () => {
    return (
        <div className="bg-black min-h-screen">
            {/* Hero */}
            <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-zinc-900 rounded-xl border border-white/10">
                            <Cpu className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm text-zinc-500 uppercase tracking-widest">Service</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tighter mb-8 leading-tight">
                        AI Integration <br />for Business
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-10">
                        Make AI your coworker, not just a tool. We set up Claude, ChatGPT, and Gemini for your team and build custom agents that handle the work you shouldn't be doing manually.
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
                        AI is everywhere, but most businesses aren't using it properly
                    </h3>
                    <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
                        <p>
                            Your team knows AI exists. They've probably tried ChatGPT. But there's a massive gap between "playing with AI" and actually integrating it into how your business operates.
                        </p>
                        <p>
                            Without proper setup, training, and custom workflows, AI remains a novelty instead of becoming the productivity multiplier it should be. You're leaving hours of saved time on the table every single week.
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">What We Do</h2>
                    <h3 className="text-3xl md:text-4xl font-semibold text-white mb-12">
                        Full-stack AI integration for your team
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Settings,
                                title: "Platform Setup",
                                desc: "We set up Claude for Work, ChatGPT Teams, or other AI platforms with proper permissions, security, and organization-wide access."
                            },
                            {
                                icon: Users,
                                title: "Team Training",
                                desc: "We train your team to use AI effectively—not just basic prompts, but workflows that actually save hours every week."
                            },
                            {
                                icon: Bot,
                                title: "Custom AI Agents",
                                desc: "We build AI agents tailored to your business—automating repetitive tasks, processing documents, handling customer inquiries."
                            },
                            {
                                icon: Workflow,
                                title: "Workflow Automation",
                                desc: "We integrate AI into your existing workflows so it works behind the scenes, making everything faster without disrupting how you work."
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

            {/* Use Cases */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">Example Use Cases</h2>
                    <h3 className="text-3xl md:text-4xl font-semibold text-white mb-12">
                        What AI could be doing for you
                    </h3>

                    <div className="space-y-6">
                        {[
                            "Drafting first versions of emails, proposals, and documents",
                            "Summarizing long documents, meeting notes, and reports",
                            "Answering routine customer questions with consistent quality",
                            "Processing and extracting data from forms and applications",
                            "Generating content for marketing, social media, and communications",
                            "Research and competitive analysis at 10x speed",
                            "Onboarding new team members with custom AI training assistants"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 bg-zinc-900/40 border border-white/5 rounded-xl">
                                <Zap className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                                <p className="text-zinc-300 font-light">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-6">The Result</h2>
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <span className="text-5xl font-thin text-zinc-800">01</span>
                            <div>
                                <h4 className="text-xl font-medium text-white mb-2">Hours saved every week</h4>
                                <p className="text-zinc-400 font-light">Most teams save 5-10+ hours per person per week once AI is properly integrated into their workflows.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <span className="text-5xl font-thin text-zinc-800">02</span>
                            <div>
                                <h4 className="text-xl font-medium text-white mb-2">Consistent quality at scale</h4>
                                <p className="text-zinc-400 font-light">AI doesn't have off days. Your customer communications, documents, and processes stay consistent.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <span className="text-5xl font-thin text-zinc-800">03</span>
                            <div>
                                <h4 className="text-xl font-medium text-white mb-2">Focus on what matters</h4>
                                <p className="text-zinc-400 font-light">When AI handles the repetitive tasks, your team can focus on the high-value work that actually grows your business.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-32 text-center border-t border-white/5">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">Ready to make AI your coworker?</h2>
                    <p className="text-zinc-400 mb-10 text-base md:text-lg font-light">
                        Let's talk about how AI can integrate into your team's workflows and start saving time.
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

export default AIIntegration;
