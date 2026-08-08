import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Layers, Award, GitBranch, Bot } from 'lucide-react';
import type { StatItem } from '../../types/portfolio';

interface StatsSectionProps {
  stats: StatItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6 text-blue-400" />,
  Layers: <Layers className="w-6 h-6 text-purple-400" />,
  Award: <Award className="w-6 h-6 text-emerald-400" />,
  GitBranch: <GitBranch className="w-6 h-6 text-pink-400" />,
  Bot: <Bot className="w-6 h-6 text-cyan-400" />
};

function CountUpNumber({ targetValue, suffix, isInView }: { targetValue: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500; // ms
    const increment = targetValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetValue, isInView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="py-16 bg-[#0B0F17]/90 relative overflow-hidden border-b border-slate-800/60">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 backdrop-blur-sm transition-all duration-300 group shadow-lg shadow-black/40 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/50 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[stat.iconName] || <Cpu className="w-6 h-6 text-blue-400" />}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-blue-400 transition-colors">
                  VERIFIED
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-bold tracking-tight font-mono text-white mb-1 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  <CountUpNumber targetValue={stat.numericValue} suffix={stat.suffix} isInView={isInView} />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-slate-300 mb-1">
                  {stat.label}
                </h3>
                <p className="text-[11px] text-slate-400 line-clamp-2">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
