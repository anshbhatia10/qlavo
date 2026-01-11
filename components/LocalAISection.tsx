import React from 'react';
import { Server, Lock, Shield, Cpu } from 'lucide-react';

const LocalAISection: React.FC = () => {
  return (
    <section id="local-ai" className="py-20 md:py-32 bg-zinc-950 relative border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/5 rounded-full blur-[80px] md:blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        <div className="flex-1 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-[10px] md:text-xs tracking-widest uppercase mb-6">
            <Lock className="w-3 h-3" />
            Donna / Flagship Model
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">
            Our base model. <br/>
            <span className="text-zinc-500">Fine-tuned for you.</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-400 font-light mb-8 leading-relaxed">
            Meet <strong>Donna</strong>, our flagship open-weight foundation model. We don't just give you a generic chatbot; we take Donna and strictly fine-tune it on your firm's specific history.
            The result is a bespoke intelligence that speaks your language, deployed entirely inside your firewall.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-white/30 transition-colors">
                <Shield className="w-5 h-5 text-zinc-300" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Zero Data Leakage</h4>
                <p className="text-zinc-500 text-sm">Your data never leaves your premises. No training on your inputs by third parties.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-white/30 transition-colors">
                <Server className="w-5 h-5 text-zinc-300" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Donna Foundation</h4>
                <p className="text-zinc-500 text-sm">Built on top-tier open-weight architecture (Llama/Mistral), Donna provides the reasoning capabilities of a senior partner.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-white/30 transition-colors">
                <Cpu className="w-5 h-5 text-zinc-300" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Fine-Tuned for Law</h4>
                <p className="text-zinc-500 text-sm">We fine-tune models on your historical contracts and briefs to speak your firm's specific dialect.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md lg:max-w-none relative mt-8 lg:mt-0">
           {/* Visual representation of a server/neural net */}
           <div className="aspect-square rounded-full border border-white/5 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-full animate-spin-slow opacity-40 md:opacity-100"></div>
              
              <div className="w-3/4 h-3/4 rounded-full border border-white/10 flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm">
                <div className="text-center">
                    <div className="text-3xl md:text-5xl font-bold text-white mb-2">Donna</div>
                    <div className="text-[10px] md:text-sm text-zinc-500 tracking-widest uppercase px-4">Flagship Model</div>
                </div>
              </div>

              {/* Orbiting nodes - Hidden or scaled on mobile */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-10 h-10 md:w-12 md:h-12 bg-black border border-zinc-800 rounded-lg flex items-center justify-center text-[10px] md:text-xs text-white z-10 shadow-2xl">
                GPU
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-10 h-10 md:w-12 md:h-12 bg-black border border-zinc-800 rounded-lg flex items-center justify-center text-[10px] md:text-xs text-white z-10 shadow-2xl">
                LLM
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black border border-zinc-800 rounded-lg flex items-center justify-center text-[10px] md:text-xs text-white z-10 shadow-2xl">
                RAG
              </div>
               <div className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black border border-zinc-800 rounded-lg flex items-center justify-center text-[10px] md:text-xs text-white z-10 shadow-2xl">
                SQL
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default LocalAISection;