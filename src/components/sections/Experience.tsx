import React from 'react';
import { motion } from 'framer-motion';
import type { ExperienceItem } from '../../types/portfolio';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-24 bg-[#050505] relative overflow-hidden border-b border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PROFESSIONAL BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-heading">
            WORK{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              EXPERIENCE
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Verified industry experience and virtual internships across Machine Learning, PySpark, DuckDB, and SQL database management.
          </p>
        </div>

        {/* Experience Cards Timeline with Framer Motion */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-8 w-[2px] bg-gradient-to-b from-blue-600 via-purple-600 to-slate-900 pointer-events-none hidden sm:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#0A0A1A] border border-slate-800/90 hover:border-purple-500/40 backdrop-blur-xl shadow-2xl space-y-5 transition-all group relative"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800/80 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    {exp.role.toLowerCase().includes('intern') && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950/80 text-purple-300 border border-purple-800 font-semibold uppercase">
                        INTERNSHIP
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-purple-400 font-mono pt-1">
                    {exp.company}
                  </p>
                </div>

                <div className="text-right text-xs font-mono text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5 justify-end text-cyan-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-end text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                {exp.description.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.15 + idx * 0.05 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-2 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 group-hover:border-slate-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
