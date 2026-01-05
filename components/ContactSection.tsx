import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-zinc-950 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
          Ready to Transform How You Work?
        </h2>
        <p className="text-lg text-zinc-400 font-light mb-8 max-w-xl mx-auto">
          Pick a 30 minute slot for a consultation.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.02]"
          >
            Book a Discovery Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;