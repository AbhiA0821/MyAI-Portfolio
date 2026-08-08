import React from 'react';
import { motion } from 'framer-motion';
import { workflowStepsData } from '../../data/portfolioData';

export const WorkflowSection: React.FC = () => {
  return (
    <section id="workflow" className="py-24 bg-[#0B0F17] relative overflow-hidden border-b border-slate-800/80">
      {/* Background Glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
            <span>ENGINEERING PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How I Build{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
              Intelligent Systems
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A disciplined 6-stage engineering lifecycle ensuring data grounding, architectural clarity, rigorous evaluation, and reliable production deployment.
          </p>
        </div>

        {/* Engineering Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowStepsData.map((step, idx) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 backdrop-blur-md shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-black text-slate-400 group-hover:text-emerald-400 transition-colors">
                    {step.stepNumber}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-950 border border-slate-800 text-emerald-400">
                    {step.statusBadge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-3">
                  {step.subtitle}
                </p>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {step.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
