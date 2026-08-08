import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroLoaderProps {
  onComplete: () => void;
}

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

    // Auto complete after 1.8 seconds
    const timer = setTimeout(() => {
      handleComplete();
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500); // Allow fade out animation
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden font-sans select-none"
        >
          {/* Ambient Background Light Sweep */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.4, 0.2], scale: [0.8, 1.2, 1] }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute w-[600px] h-[300px] bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-full blur-[140px] pointer-events-none"
          />

          {/* Thin Light Beam Sweep */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none"
          />

          {/* Content Container */}
          <div className="relative z-10 text-center space-y-4 px-4">
            
            {/* Cinematic Name Reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white font-heading"
            >
              ABHISHEK{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AINAPURE
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="flex items-center justify-center gap-3 text-xs sm:text-sm font-mono tracking-[0.25em] text-slate-400 uppercase font-semibold"
            >
              <span className="w-8 h-[1px] bg-blue-500/40" />
              <span>AI & DATA SCIENCE</span>
              <span className="w-8 h-[1px] bg-purple-500/40" />
            </motion.div>

          </div>

          {/* Skip Button */}
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
