import React from 'react';
import { motion } from 'framer-motion';

interface TextMarqueeStripProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
  separator?: string;
  className?: string;
}

export const TextMarqueeStrip: React.FC<TextMarqueeStripProps> = ({
  items,
  direction = 'left',
  speed = 35,
  separator = "◆",
  className = ""
}) => {
  // Repeat items to ensure continuous infinite loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  const animateX = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];

  return (
    <div className={`relative overflow-hidden py-4 bg-slate-950/80 border-y border-slate-800/80 backdrop-blur-md select-none ${className}`}>
      {/* Left/Right Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0F17] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0F17] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap gap-6 items-center"
        animate={{ x: animateX }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed
        }}
        whileHover={{ animationPlayState: 'paused' }}
      >
        {repeatedItems.map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 font-mono text-xs sm:text-sm tracking-wider font-semibold uppercase text-slate-300">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {text}
            </span>
            <span className="text-blue-500/50 text-[10px]">{separator}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
