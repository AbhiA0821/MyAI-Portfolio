import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Calendar } from 'lucide-react';
import type { TimelineMilestone } from '../../types/portfolio';
import { RevealText } from '../motion/RevealText';
import { AnimatedTimeline } from '../motion/AnimatedTimeline';

interface TimelineSectionProps {
  timeline: TimelineMilestone[];
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ timeline }) => {
  return (
    <section id="journey" className="py-24 bg-[#050505] relative overflow-hidden border-b border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-medium">
            <Calendar className="w-3.5 h-3.5" />
            <span>ENGINEERING TRAJECTORY</span>
          </div>
          <RevealText
            text="CAREER & TECHNICAL TIMELINE"
            as="h2"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-heading justify-center"
          />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Progressive evolution from foundational computer science to distributed data engineering and multi-agent GenAI systems.
          </p>
        </div>

        {/* Timeline Container with Scroll Drawing Stroke Line */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatedTimeline className="absolute inset-y-0" />

          <div className="space-y-12 relative z-10">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.year + item.title}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-1/2">
                    <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A1A] border border-slate-800/90 backdrop-blur-xl shadow-2xl space-y-4 hover:border-purple-500/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-950/80 border border-purple-800 text-purple-300 font-bold">
                          {item.year}
                        </span>
                        <span className={`text-[10px] font-mono flex items-center gap-1 ${
                          item.status === 'Completed' ? 'text-emerald-400' : 'text-cyan-400'
                        }`}>
                          {item.status === 'Completed' ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3 animate-spin" />}
                          {item.status}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white font-heading">{item.title}</h3>
                        <p className="text-xs font-mono text-cyan-400 mt-0.5">{item.subtitle}</p>
                      </div>

                      <p className="text-slate-300 text-xs leading-relaxed">{item.description}</p>

                      <div className="space-y-1.5 pt-1">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="text-xs text-slate-400 flex items-start gap-2 font-sans">
                            <span className="text-purple-400 mt-0.5">◆</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.technologies.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Central Node Indicator */}
                  <div className="relative z-20 shrink-0 w-8 h-8 rounded-full bg-slate-950 border-2 border-purple-500 shadow-[0_0_15px_#a855f7] flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
