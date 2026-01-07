import React from 'react';
import { Shield, Brain, Zap, Lock, MessageSquare, Files, Search, ArrowRight, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const LocalAI: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 relative overflow-hidden">
        {/* Ambient background glow - Neutralized */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/5 rounded-full blur-[80px] md:blur-[120px] -z-10 opacity-20"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-xl md:text-4xl font-bold text-white mb-4 md:mb-6 tracking-tight">Qore 1.0</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-white tracking-tighter mb-6 md:mb-8 leading-tight">
              Legal AI that never <br/>
              <span className="text-zinc-500 font-light">touches the internet.</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-400 font-light leading-relaxed mb-10">
              Qore 1.0 is deployed behind your firewall, on your hardware. We fine-tune it on your firm's corpus—briefs, contracts, research memos. Air-gapped by default. Zero data leakage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all text-center">
                Request Audit
              </Link>
              <div className="px-8 py-4 bg-transparent border border-white/10 text-zinc-400 rounded-full flex items-center justify-center gap-2 cursor-default text-sm md:text-base">
                <Lock className="w-4 h-4" /> 100% Air-Gapped Capable
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The "Why Qore?" Section */}
      <section className="py-20 md:py-24 border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">Why firms choose Qore over cloud AI</h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
                ChatGPT, Claude, and legal-specific tools like Harvey route your queries through their servers. Qore 1.0 runs inside your infrastructure. Your client data, case strategy, and research never leave your network.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-zinc-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Air-Gapped Deployment</h4>
                    <p className="text-zinc-500 text-sm">Runs on your on-premise servers. No outbound internet connection required. Complete isolation from external networks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-zinc-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Trained on Your Corpus</h4>
                    <p className="text-zinc-500 text-sm">Fine-tuned exclusively on your firm's work product. Understands your style, preferred clauses, and internal precedents.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-6 md:p-8 rounded-[24px] md:rounded-[32px] border-white/10 bg-white/[0.02] mt-8 lg:mt-0">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-5 h-5 text-zinc-400" />
                <span className="text-sm font-medium text-zinc-300">Internal AI Interface</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-zinc-500 mb-1 uppercase tracking-wider">Partner Question:</p>
                  <p className="text-sm text-zinc-300 italic">"Find all indemnity clauses we've used in SaaS contracts for New York clients that include a 30-day notice period."</p>
                </div>
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                  <p className="text-[10px] text-zinc-400 mb-1 uppercase tracking-wider">Qore 1.0:</p>
                  <p className="text-sm text-zinc-200 font-light leading-relaxed">"Found 14 instances. The most common variation is in the [Client Name] 2023 agreement. Would you like me to draft a new version based on those standards?"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight">How it helps your firm</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-sm md:text-base px-4">Specific applications designed to turn your historical knowledge into a competitive advantage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="glass-panel p-6 md:p-8 rounded-3xl group hover:border-white/20 transition-all">
              <Files className="w-8 h-8 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-medium text-white mb-3">Instant Document Audits</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Upload a 100-page opposing counsel brief and ask the AI to find contradictions with their previous filings or identify missing required disclosures in seconds.
              </p>
            </div>

            <div className="glass-panel p-6 md:p-8 rounded-3xl group hover:border-white/20 transition-all">
              <Search className="w-8 h-8 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-medium text-white mb-3">Case Law Mining</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Ask questions about your firm's internal research memos from the last 20 years. Don't waste time re-researching a point of law a colleague already solved in 2018.
              </p>
            </div>

            <div className="glass-panel p-6 md:p-8 rounded-3xl group hover:border-white/20 transition-all">
              <Zap className="w-8 h-8 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-medium text-white mb-3">Drafting Support</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Generate first drafts of motions, demand letters, or contracts using your firm's unique templates and style guides. It acts as an tireless senior associate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Deployment Section */}
      <section className="py-16 md:py-20 border-y border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="flex-1 w-full order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Complete Data Sovereignty</h2>
              <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base">
                Qore 1.0 isn't a SaaS login. It's infrastructure deployed on your premises. We handle hardware provisioning, model deployment, and fine-tuning—all behind your firewall. You own the servers. You control the data.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-zinc-300 text-sm md:text-base">
                  <Server className="w-5 h-5 text-zinc-500" />
                  On-premise or private cloud deployment
                </li>
                <li className="flex items-center gap-3 text-zinc-300 text-sm md:text-base">
                  <Lock className="w-5 h-5 text-zinc-500" />
                  Air-gapped network option
                </li>
                <li className="flex items-center gap-3 text-zinc-300 text-sm md:text-base">
                  <Brain className="w-5 h-5 text-zinc-500" />
                  Fine-tuned on your firm's data
                </li>
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-all text-sm md:text-base">
                Talk to an Engineer <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-1 w-full order-1 lg:order-2">
              <div className="relative aspect-square max-w-sm mx-auto">
                <div className="absolute inset-0 border border-white/10 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 border border-white/5 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center">
                      <Lock className="w-12 h-12 text-white mx-auto mb-4 opacity-50 md:opacity-100" />
                      <div className="text-[10px] md:text-sm text-zinc-500 uppercase tracking-widest">Qore 1.0</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">AI without the privacy trade-off.</h2>
          <p className="text-zinc-400 mb-10 text-base md:text-lg font-light">Built for firms that won't send privileged data to the cloud.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-12 py-5 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05] text-sm md:text-base">
            Book a Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LocalAI;