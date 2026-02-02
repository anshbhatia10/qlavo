import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';

const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Floating animation for background blobs
  const blobVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.3, 0.2],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      className="relative h-dvh flex flex-col items-center justify-center pt-20 overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Spotlight Background */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Ambient Background Blobs */}
      <motion.div
        variants={blobVariants}
        animate="animate"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[500px] bg-white/5 rounded-full blur-[80px] md:blur-[120px] -z-10"
      />
      <motion.div
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 2, duration: 10 }}
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-zinc-800/20 rounded-full blur-[100px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 text-center z-10 flex flex-col items-center justify-center h-full">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6 md:mb-8 leading-[1.05]"
        >
          Get Found. <br />
          <span className="text-zinc-500">Get Predicted.</span> <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-white"
          >Get Ahead.</motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          AI visibility optimization for the era of ChatGPT and Gemini.
          Custom forecasting models that turn guesswork into strategy.
          AI integration that transforms how you work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0 w-full sm:w-auto"
        >
          <Link to="/#services" className="w-full sm:w-auto px-10 py-5 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2">
            Explore Services <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all hover:border-white/40 active:scale-95">
            Book a Strategy Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;