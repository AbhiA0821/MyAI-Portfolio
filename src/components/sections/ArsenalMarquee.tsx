import React from 'react';
import { motion } from 'framer-motion';
import {
  marqueeTechnologiesRow1,
  marqueeTechnologiesRow2,
  marqueeTechnologiesRow3,
  marqueeTechnologiesRow4
} from '../../data/portfolioData';

export const ArsenalMarquee: React.FC = () => {
  const row1Repeated = [...marqueeTechnologiesRow1, ...marqueeTechnologiesRow1, ...marqueeTechnologiesRow1, ...marqueeTechnologiesRow1];
  const row2Repeated = [...marqueeTechnologiesRow2, ...marqueeTechnologiesRow2, ...marqueeTechnologiesRow2, ...marqueeTechnologiesRow2];
  const row3Repeated = [...marqueeTechnologiesRow3, ...marqueeTechnologiesRow3, ...marqueeTechnologiesRow3, ...marqueeTechnologiesRow3];
  const row4Repeated = [...marqueeTechnologiesRow4, ...marqueeTechnologiesRow4, ...marqueeTechnologiesRow4, ...marqueeTechnologiesRow4];

  return (
    <section className="py-20 bg-[#050505] relative overflow-hidden border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-3">
          <span>TECHNOLOGY ARSENAL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
          Production Stack &{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Tooling Marquee
          </span>
        </h2>
      </div>

      {/* Row 1: Leftward */}
      <div className="relative overflow-hidden py-2.5 mb-3 select-none">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 items-center whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        >
          {row1Repeated.map((tech, i) => (
            <div
              key={i}
              className="px-4 py-2 rounded-xl bg-[#0A0A1A] border border-slate-800 hover:border-blue-500/50 text-slate-300 font-mono text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md transition-all"
            >
              <span className="text-blue-400">◆</span>
              <span>{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Rightward */}
      <div className="relative overflow-hidden py-2.5 mb-3 select-none">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 items-center whitespace-nowrap"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
        >
          {row2Repeated.map((tech, i) => (
            <div
              key={i}
              className="px-4 py-2 rounded-xl bg-[#0A0A1A] border border-slate-800 hover:border-purple-500/50 text-slate-300 font-mono text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md transition-all"
            >
              <span className="text-purple-400">◆</span>
              <span>{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 3: Leftward */}
      <div className="relative overflow-hidden py-2.5 mb-3 select-none">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 items-center whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {row3Repeated.map((tech, i) => (
            <div
              key={i}
              className="px-4 py-2 rounded-xl bg-[#0A0A1A] border border-slate-800 hover:border-pink-500/50 text-slate-300 font-mono text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md transition-all"
            >
              <span className="text-pink-400">◆</span>
              <span>{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 4: Rightward */}
      <div className="relative overflow-hidden py-2.5 select-none">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 items-center whitespace-nowrap"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 32 }}
        >
          {row4Repeated.map((tech, i) => (
            <div
              key={i}
              className="px-4 py-2 rounded-xl bg-[#0A0A1A] border border-slate-800 hover:border-cyan-500/50 text-slate-300 font-mono text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md transition-all"
            >
              <span className="text-cyan-400">◆</span>
              <span>{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
