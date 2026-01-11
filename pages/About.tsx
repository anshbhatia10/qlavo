import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tighter mb-12 md:mb-16 leading-tight">
            About Qlavo
          </h1>

          <div className="space-y-8 text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            <p>
              Law firms are sitting out the AI revolution because every tool on the market requires them to send client data to external servers. That's not paranoia—it's professional responsibility. Client confidentiality isn't a feature request, it's the job.
            </p>

            <p>
              We believe the future of legal AI is sovereign. Models that run inside the firm, trained on the firm's own data, with zero dependency on external infrastructure. Not because cloud is bad, but because for legal work, local is the only option that makes sense.
            </p>

            <p>
              We're building tools that bring AI to law firms without the privacy trade-off. <strong className="text-white">PointOne</strong> tracks time locally with on-device AI. <strong className="text-white">Donna</strong> deploys behind your firewall for research and drafting. We also build custom solutions for firms with specific workflow problems.
            </p>

            <div className="pt-8 border-t border-white/10">
              <p className="text-base md:text-lg text-zinc-500">
                <strong className="text-white">Ansh Bhatia</strong>, Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 text-center border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">Let's talk about what you're building.</h2>
          <p className="text-zinc-400 mb-10 text-base md:text-lg font-light">
            Whether it's time tracking, on-premise AI, or a custom workflow tool—we're here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.05] text-sm md:text-base"
          >
            Book a Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
