import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-dvh flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[500px] bg-white/5 rounded-full blur-[80px] md:blur-[120px] -z-10 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 text-center z-10 flex flex-col items-center justify-center h-full">
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6 md:mb-8 leading-[1.05] animate-fade-in-up">
          Autonomous <br />
          <span className="text-gradient">Legal Intelligence.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-light mb-10 md:mb-12 leading-relaxed px-4 opacity-90">
          We replace manual drudgery with intelligent agents. 
          From automated time-tracking with <strong>PointOne</strong> to sovereign in-house AI, we build the infrastructure 
          modern law firms need to scale.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0 w-full sm:w-auto">
          <Link to="/point-one" className="w-full sm:w-auto px-10 py-5 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
            Discover PointOne <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all">
            Consulting & Audits
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;