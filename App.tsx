import React from 'react';
import { Navbar } from './components/Navbar';
import { GlassButton } from './components/ui/GlassButton';
import { GlassCard } from './components/ui/GlassCard';
import { LiquidCursor } from './components/ui/LiquidCursor';
import { VeloMascot } from './components/ui/VeloMascot';
import { Brain, ArrowUpRight, Zap, Search, TrendingUp, Rocket, Check, Mail, Phone, MapPin, Cuboid as Cube, BarChart3, Settings, Lightbulb, ClipboardList, Code2, Presentation, Bot, Database, Linkedin } from 'lucide-react';

const App: React.FC = () => {

    // Email Templates
    const auditEmailSubject = encodeURIComponent("Free AI Audit Request");
    const auditEmailBody = encodeURIComponent("Hi Qlavo Team,\n\nI am interested in a free AI audit for my business.\n\nName:\nCompany:\nPhone:\n\nBest regards,");

    const quoteEmailSubject = encodeURIComponent("Enterprise Build Quote Request");
    const quoteEmailBody = encodeURIComponent("Hi Qlavo Team,\n\nI am looking for a custom AI solution. Here is a brief overview of my requirements:\n\n[Describe your project]\n\nBudget Range:\nTimeline:\n\nBest,");

    const handleScroll = (e: React.MouseEvent<HTMLElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-[#0B0B0F] text-white selection:bg-[#7EE7E7] selection:text-black font-sans overflow-x-hidden">

            <LiquidCursor />

            <Navbar />

            <main>

                {/* --- HERO SECTION (Dark Blue Gradient) --- */}
                <section className="relative pt-60 pb-32 overflow-hidden">
                    {/* Background Gradient - Updated to Dark Blue */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#172554] to-[#0B0B0F] z-0" />

                    {/* Grid Overlay */}
                    <div className="absolute inset-0 pixel-grid opacity-20 z-0 pointer-events-none" />

                    <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal font-sans text-white mb-8 leading-tight tracking-tight">
                            Qlavo <span className="text-[#7EE7E7]">Automates</span> Your<br />
                            Enterprise <span className="text-[#E0CCF7]">AI</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mb-12 font-light">
                            Eliminate manual tasks, reduce costs, and make smarter decisions. We build custom <span className="text-[#CCF381] font-bold">AI Automation Systems</span> and <span className="text-[#CCF381] font-bold">Data Analytics Dashboards</span> tailored to your needs.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <GlassButton
                                className="min-w-[200px]"
                                href="#contact"
                                onClick={(e) => handleScroll(e, 'contact')}
                            >
                                Automate My Business <ArrowUpRight size={18} />
                            </GlassButton>
                            <GlassButton
                                variant="secondary"
                                className="min-w-[200px]"
                                href="#work"
                                onClick={(e) => handleScroll(e, 'work')}
                            >
                                View Latest Work <ArrowUpRight size={18} />
                            </GlassButton>
                        </div>

                        {/* Velo Mascot Hero Integration */}
                        <div className="mt-20 relative w-full max-w-4xl h-[400px] md:h-[500px] flex items-center justify-center">
                            <VeloMascot className="animate-float" />

                            {/* Floating Elements */}
                            <div className="absolute top-20 left-10 md:left-20 animate-float" style={{ animationDelay: '0.5s' }}>
                                <div className="w-24 h-24 bg-[#CCF381] border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                                    <span className="font-pixel text-4xl text-black font-bold tracking-tighter">AI</span>
                                </div>
                            </div>
                            <div className="absolute top-40 right-10 md:right-20 animate-float" style={{ animationDelay: '1.5s' }}>
                                <div className="w-32 h-24 bg-[#7EE7E7] -rotate-12 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                                    <Database size={40} className="text-black" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- PIXEL HEADER SECTION (Grid + Pixel Text) --- */}
                <section className="py-24 border-y border-white/10 relative bg-[#0B0B0F]">
                    <div className="absolute inset-0 pixel-grid opacity-30 z-0 pointer-events-none" />

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-12 lg:items-end">
                        <div className="lg:w-2/3">
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-pixel text-white leading-none uppercase break-words tracking-normal">
                                Automate Workflows <br />
                                Unlock Insights <br />
                                Scale Growth
                            </h2>
                        </div>
                        <div className="lg:w-1/3 pb-4">
                            <p className="text-xl text-white/60 font-mono">
                                Stop wasting time on repetitive tasks. We turn your data into action and your manual processes into autonomous agents.
                            </p>
                        </div>
                    </div>

                    {/* Horizontal Features Strip */}
                    <div className="max-w-[1400px] mx-auto px-6 mt-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/20 divide-y md:divide-y-0 md:divide-x divide-white/20 bg-[#121217]">
                            {[
                                { icon: Zap, title: "Workflow Automation", color: "text-[#7EE7E7]" },
                                { icon: BarChart3, title: "Data Analytics", color: "text-[#CCF381]" },
                                { icon: Search, title: "Deep Discovery", color: "text-[#E0CCF7]" },
                                { icon: Rocket, title: "Rapid Scale", color: "text-white" },
                            ].map((feat, i) => (
                                <div key={i} className="p-8 flex items-center gap-4 group hover:bg-white/5 transition-colors">
                                    <feat.icon size={24} className={feat.color} />
                                    <span className="font-bold text-lg">{feat.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- FEATURE GRID (Bento Style) --- */}
                <section id="services" className="py-32 bg-[#0B0B0F] border-b border-white/10">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-7xl font-pixel text-white mb-6 uppercase tracking-wide">
                                What We Do
                            </h2>
                            <p className="text-white/60 font-mono text-lg">
                                We simply solve problems. Here is exactly how we do it.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-white/20">

                            {/* Card 1: AI Automation (Primary) */}
                            <div className="border-r border-b border-white/20 bg-[#0B0B0F] p-8 lg:p-10 hover:bg-[#121217] transition-colors group h-full min-h-[400px] flex flex-col">
                                <div className="mb-12 relative">
                                    <div className="w-24 h-24 bg-[#7EE7E7] rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] flex items-center justify-center transform group-hover:-translate-y-2 transition-transform">
                                        <Bot size={48} className="text-black" />
                                    </div>
                                </div>
                                <h3 className="text-4xl font-pixel text-white mb-4">AI Automation</h3>
                                <p className="text-white/60 text-lg leading-relaxed">
                                    We replace manual workflows with intelligent agents. From customer support to document processing, we build systems that run 24/7.
                                </p>
                            </div>

                            {/* Card 2: Data Analytics (Secondary) */}
                            <div className="border-r border-b border-white/20 bg-[#0B0B0F] p-8 lg:p-10 hover:bg-[#121217] transition-colors group h-full min-h-[400px] flex flex-col">
                                <div className="mb-12 relative">
                                    <div className="w-24 h-24 bg-[#CCF381] rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] flex items-center justify-center transform group-hover:-translate-y-2 transition-transform">
                                        <BarChart3 size={48} className="text-black" />
                                    </div>
                                </div>
                                <h3 className="text-4xl font-pixel text-white mb-4">Data Analytics</h3>
                                <p className="text-white/60 text-lg leading-relaxed">
                                    Stop guessing. We consolidate your business data into live dashboards and use AI to forecast trends and opportunities.
                                </p>
                            </div>

                            {/* Card 3: Discovery */}
                            <div className="border-r border-b border-white/20 bg-[#0B0B0F] p-8 lg:p-10 hover:bg-[#121217] transition-colors group h-full min-h-[400px] flex flex-col">
                                <div className="mb-12 relative">
                                    <div className="w-24 h-24 bg-[#E0CCF7] -rotate-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] flex items-center justify-center transform group-hover:-translate-y-2 transition-transform">
                                        <Search size={48} className="text-black" />
                                    </div>
                                </div>
                                <h3 className="text-4xl font-pixel text-white mb-4">Discovery</h3>
                                <p className="text-white/60 text-lg leading-relaxed">
                                    Not sure where to start? We audit your current operations to find the highest-ROI opportunities for automation.
                                </p>
                            </div>

                            {/* Card 4: Strategy */}
                            <div className="border-r border-b border-white/20 bg-[#0B0B0F] p-8 lg:p-10 hover:bg-[#121217] transition-colors group h-full min-h-[400px] flex flex-col">
                                <div className="mb-12 relative">
                                    <div className="w-24 h-24 bg-white rotate-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] flex items-center justify-center transform group-hover:-translate-y-2 transition-transform">
                                        <Rocket size={48} className="text-black" />
                                    </div>
                                </div>
                                <h3 className="text-4xl font-pixel text-white mb-4">Strategy</h3>
                                <p className="text-white/60 text-lg leading-relaxed">
                                    We help you navigate the AI landscape, choosing the right tools and models to keep your business ahead of the competition.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- "HOW WE WORK" SECTION --- */}
                <section id="process" className="py-32 bg-[#0B0B0F] border-b border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[#7EE7E7] to-transparent" />

                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="text-center mb-24">
                            <h2 className="text-6xl md:text-8xl font-pixel text-white mb-8 tracking-normal">
                                HOW WE DELIVER
                            </h2>
                            <p className="text-xl text-white/60 font-mono max-w-2xl mx-auto">
                                Our transparent engagement model ensures you know exactly what to expect.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Step 1 */}
                            <div className="bg-[#121217] border border-white/20 p-8 relative hover:border-[#E0CCF7] transition-colors group">
                                <div className="absolute -top-6 left-8 bg-[#E0CCF7] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                                    <span className="font-pixel text-2xl text-black">Step 01</span>
                                </div>
                                <div className="mt-8 mb-6 text-[#E0CCF7]">
                                    <ClipboardList size={48} />
                                </div>
                                <h3 className="text-3xl font-pixel text-white mb-4">Discovery & Audit</h3>
                                <p className="text-white/60 font-mono text-lg leading-relaxed">
                                    We analyze your manual processes and data flows. We calculate potential time and cost savings before any code is written.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-[#121217] border border-white/20 p-8 relative hover:border-[#7EE7E7] transition-colors group">
                                <div className="absolute -top-6 left-8 bg-[#7EE7E7] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                                    <span className="font-pixel text-2xl text-black">Step 02</span>
                                </div>
                                <div className="mt-8 mb-6 text-[#7EE7E7]">
                                    <Code2 size={48} />
                                </div>
                                <h3 className="text-3xl font-pixel text-white mb-4">Automate & Build</h3>
                                <p className="text-white/60 font-mono text-lg leading-relaxed">
                                    We build your custom AI agents and analytics dashboards. We handle integration with your existing CRM, ERP, and databases.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-[#121217] border border-white/20 p-8 relative hover:border-[#CCF381] transition-colors group">
                                <div className="absolute -top-6 left-8 bg-[#CCF381] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                                    <span className="font-pixel text-2xl text-black">Step 03</span>
                                </div>
                                <div className="mt-8 mb-6 text-[#CCF381]">
                                    <Presentation size={48} />
                                </div>
                                <h3 className="text-3xl font-pixel text-white mb-4">Delivery & Training</h3>
                                <p className="text-white/60 font-mono text-lg leading-relaxed">
                                    We deploy the system and train your team. You start saving hours of manual work immediately.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- CASE STUDIES SECTION --- */}
                <section id="work" className="py-32 bg-[#0B0B0F] border-b border-white/10">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <h2 className="text-5xl md:text-7xl font-pixel text-white mb-16">Latest Work</h2>

                        {/* Retro Monitor Container for Embed */}
                        <div className="relative inline-block p-4 bg-[#121217] border-2 border-white/20 rounded-lg shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-[#0B0B0F] border border-white/20 text-[#7EE7E7] font-mono text-sm tracking-widest">
                                CASE_STUDY_01.EMBED
                            </div>
                            <div className="overflow-hidden rounded-sm bg-black">
                                <iframe
                                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7398619152770387968?compact=1"
                                    height="399"
                                    width="504"
                                    frameBorder="0"
                                    allowFullScreen
                                    title="Embedded post"
                                    className="max-w-full"
                                ></iframe>
                            </div>
                        </div>

                        <p className="mt-8 text-white/60 font-mono">
                            See how we're transforming businesses with real-world AI implementation.
                        </p>
                    </div>
                </section>

                {/* --- PRICING --- */}
                <section id="pricing" className="py-32 bg-[#0B0B0F] border-b border-white/10">
                    <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Card Left: Audit */}
                        <div className="border border-white/20 bg-[#121217] p-12 hover:border-[#CCF381] transition-colors relative group">
                            <h3 className="text-4xl font-pixel text-white mb-2">Free Audit</h3>
                            <div className="text-6xl font-pixel text-[#CCF381] mb-8">₹0</div>
                            <p className="text-white/60 mb-8 font-mono">Understand what can be automated.</p>

                            <div className="space-y-4 mb-12">
                                {['Identify Manual Bottlenecks', 'Data Readiness Check', 'Automation Roadmap Call'].map(item => (
                                    <div key={item} className="flex items-center gap-4 text-lg">
                                        <Check className="text-[#CCF381]" /> {item}
                                    </div>
                                ))}
                            </div>

                            <GlassButton
                                className="w-full bg-[#CCF381] hover:bg-[#bce66d] text-black"
                                href={`mailto:info@qlavo.in?subject=${auditEmailSubject}&body=${auditEmailBody}`}
                            >
                                Get Free Audit
                            </GlassButton>
                        </div>

                        {/* Card Right: Implementation */}
                        <div className="border border-white/20 bg-[#1e3a8a] p-12 hover:border-[#7EE7E7] transition-colors relative overflow-hidden">
                            <div className="absolute inset-0 pixel-grid opacity-10 pointer-events-none" />
                            <h3 className="text-4xl font-pixel text-white mb-2">Custom Build</h3>
                            <div className="text-5xl font-pixel text-[#7EE7E7] mb-8 mt-2">Custom Quote</div>
                            <p className="text-white/60 mb-8 font-mono">For building your specific solution.</p>

                            <div className="space-y-4 mb-12 relative z-10">
                                {['Custom AI Agents', 'Live Analytics Dashboards', 'Full System Integration'].map(item => (
                                    <div key={item} className="flex items-center gap-4 text-lg text-white">
                                        <Check className="text-[#7EE7E7]" /> {item}
                                    </div>
                                ))}
                            </div>

                            <GlassButton
                                variant="primary"
                                className="w-full bg-[#7EE7E7] hover:bg-[#6bd6d6] text-black relative z-10"
                                href={`mailto:info@qlavo.in?subject=${quoteEmailSubject}&body=${quoteEmailBody}`}
                            >
                                Request Quote
                            </GlassButton>
                        </div>

                    </div>
                </section>

                {/* --- CONTACT FOOTER --- */}
                <section id="contact" className="py-32 bg-[#0B0B0F] relative">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-5xl md:text-7xl font-pixel text-white mb-12">Automate Today</h2>

                        <div className="border border-white/20 bg-[#121217] p-8 md:p-12 text-left">
                            <form
                                action="https://formsubmit.co/info@qlavo.in"
                                method="POST"
                                className="space-y-6"
                            >
                                {/* Hidden Configs for FormSubmit */}
                                <input type="hidden" name="_subject" value="New Automation Inquiry via Qlavo Website" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_captcha" value="false" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-white/60">Name</label>
                                        <input type="text" name="name" required className="w-full bg-black border border-white/20 text-white p-4 focus:border-[#7EE7E7] focus:outline-none font-mono" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-widest text-white/60">Email</label>
                                        <input type="email" name="email" required className="w-full bg-black border border-white/20 text-white p-4 focus:border-[#7EE7E7] focus:outline-none font-mono" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-widest text-white/60">What do you want to automate?</label>
                                    <textarea name="message" required rows={4} placeholder="Describe your manual process..." className="w-full bg-black border border-white/20 text-white p-4 focus:border-[#7EE7E7] focus:outline-none font-mono resize-none"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-[#7EE7E7] transition-colors border-2 border-transparent hover:border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 font-mono text-white/60">
                            <div className="flex items-center gap-3 hover:text-[#7EE7E7] cursor-pointer"><Mail size={20} /> info@qlavo.in</div>
                            <div className="flex items-center gap-3 hover:text-[#7EE7E7] cursor-pointer"><Phone size={20} /> +91 9810002395</div>
                            <div className="flex items-center gap-3"><MapPin size={20} /> New Delhi</div>
                            <a href="https://www.linkedin.com/company/qlavo/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#7EE7E7] cursor-pointer">
                                <Linkedin size={20} /> LinkedIn
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="h-20 bg-black flex items-center justify-center border-t border-white/10">
                <p className="text-white/30 font-mono text-sm uppercase">© 2024 Qlavo Inc. // Systems Online</p>
            </footer>

        </div>
    );
};

export default App;