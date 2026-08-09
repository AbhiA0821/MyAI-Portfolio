import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroLoaderProps {
  onComplete: () => void;
}

const firstNameChars = "ABHISHEK".split("");

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(false);
      onComplete();
      return;
    }

    // Auto complete at 4.6 seconds (fade out lasts till 5.0 seconds)
    const timer = setTimeout(() => {
      handleComplete();
    }, 4600);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(onComplete, 400); // 4.6s + 0.4s fade out = exactly 5.0s total
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden font-sans select-none"
        >
          {/* 0.0 - 0.8s: Subtle Ambient Gradient Base */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: [0, 0.25, 0.4], scale: [0.7, 1, 1.2] }}
            transition={{ duration: 1.8, times: [0, 0.44, 1], ease: "easeOut" }}
            className="absolute w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/30 via-purple-600/30 to-cyan-500/20 rounded-full blur-[160px] pointer-events-none"
          />

          {/* 0.8 - 1.8s: AI/Data Floating Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: `${(i * 17) % 100}vw`,
                  y: `${(i * 23) % 100}vh`,
                  scale: 0.2
                }}
                animate={{
                  opacity: [0, 0.6, 0],
                  y: [`${(i * 23) % 100}vh`, `${((i * 23) % 100) - 40}vh`],
                  scale: [0.2, 1, 0.4]
                }}
                transition={{
                  duration: 2.2,
                  delay: 0.8 + (i % 6) * 0.15,
                  ease: "easeInOut"
                }}
                className={`absolute w-1.5 h-1.5 rounded-full ${
                  i % 3 === 0 ? 'bg-cyan-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-blue-400'
                } shadow-sm shadow-cyan-400/50`}
              />
            ))}
          </div>

          {/* 3.0 - 4.0s: Gradient Light Sweep Line across screen */}
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '100%', opacity: [0, 0.8, 0] }}
            transition={{ duration: 1.2, delay: 3.0, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none"
          />

          {/* Main Content Reveal Container */}
          <div className="relative z-10 text-center space-y-4 px-4">
            
            {/* Name Container */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              
              {/* 1.8 - 3.0s: Reveal "ABHISHEK" character by character */}
              <div className="flex items-center justify-center font-black tracking-tight text-white text-4xl sm:text-6xl md:text-7xl font-heading">
                {firstNameChars.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)', scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.8 + index * 0.08,
                      ease: [0.215, 0.61, 0.355, 1]
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              {/* 3.0 - 4.0s: Reveal "AINAPURE" with Gradient Light Sweep */}
              <motion.span
                initial={{ opacity: 0, y: 25, filter: 'blur(10px)', scale: 0.9 }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                transition={{ duration: 0.8, delay: 3.0, ease: "easeOut" }}
                className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-heading relative"
              >
                AINAPURE
              </motion.span>
            </div>

            {/* 4.0 - 4.6s: Reveal "AI & DATA SCIENCE" with subtle motion */}
            <motion.div
              initial={{ opacity: 0, y: 15, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0.25em' }}
              transition={{ duration: 0.6, delay: 4.0, ease: "easeOut" }}
              className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono text-slate-300 uppercase font-semibold pt-2"
            >
              <span className="w-8 h-[1px] bg-blue-500/50" />
              <span className="tracking-[0.25em]">AI & DATA SCIENCE</span>
              <span className="w-8 h-[1px] bg-purple-500/50" />
            </motion.div>

          </div>

          {/* Quick Skip Option */}
          <button
            onClick={handleComplete}
            className="absolute bottom-8 right-8 text-[11px] font-mono text-slate-500 hover:text-slate-300 uppercase tracking-widest border border-slate-800 hover:border-slate-700 px-3 py-1.5 rounded-lg backdrop-blur-md transition-colors cursor-pointer"
          >
            SKIP INTRO →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
