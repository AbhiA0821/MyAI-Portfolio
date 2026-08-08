import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { CheckCircle2, Rocket } from 'lucide-react';
import type { TimelineMilestone } from '../../types/portfolio';

interface TimelineSectionProps {
  timeline: TimelineMilestone[];
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ timeline }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="timeline" ref={containerRef} className="py-24 bg-[#0B0F17] relative overflow-hidden border-b border-slate-800/80">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium">
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineering Journey &{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Milestone Timeline
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From foundational data science to architecting production multi-agent systems and real-time distributed data pipelines.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Static Glowing Background Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2" />

          {/* Dynamic Scroll Progress Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top -translate-x-1/2 shadow-lg shadow-purple-500/50"
          />

          {/* Timeline Nodes */}
          <div className="space-y-12 sm:space-y-16">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Glowing Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-slate-900 border-2 border-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      {item.status === 'Completed' ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : item.status === 'In Progress' ? (
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
                      ) : (
                        <Rocket className="w-4 h-4 text-pink-400" />
                      )}
                    </div>
                  </div>

                  {/* Milestone Card */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                    isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'
                  }`}>
                    <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 backdrop-blur-md shadow-xl transition-all hover:scale-[1.01] group">
                      
                      {/* Year Badge */}
                      <div className={`flex items-center gap-2 mb-2 ${
                        isEven ? 'sm:justify-end' : 'justify-start'
                      }`}>
                        <span className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-xs font-mono font-bold text-blue-400">
                          {item.year}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                          {item.status}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-purple-400 mb-3">
                        {item.subtitle}
                      </p>
                      <p className="text-slate-300 text-xs leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="space-y-1.5 mb-4 text-xs text-slate-400">
                        {item.highlights.map((h, i) => (
                          <div key={i} className={`flex items-start gap-1.5 ${
                            isEven ? 'sm:justify-end' : 'justify-start'
                          }`}>
                            <span className="text-blue-400">•</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Pills */}
                      <div className={`flex flex-wrap gap-1.5 ${
                        isEven ? 'sm:justify-end' : 'justify-start'
                      }`}>
                        {item.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-[10px] font-mono text-slate-300">
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
