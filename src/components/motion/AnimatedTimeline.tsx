import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface AnimatedTimelineProps {
  className?: string;
}

export const AnimatedTimeline: React.FC<AnimatedTimelineProps> = ({ className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Background Line Track */}
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-slate-800/80" />

      {/* Animated Glowing Progress Line */}
      <motion.div
        style={{ scaleY, transformOrigin: 'top center' }}
        className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-400 shadow-[0_0_12px_#38bdf8]"
      />
    </div>
  );
};
