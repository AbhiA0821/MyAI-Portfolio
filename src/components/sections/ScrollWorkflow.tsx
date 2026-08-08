import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { workflowStepsData } from '../../data/portfolioData';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const ScrollWorkflow: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="workflow" className="py-24 bg-[#050505] relative overflow-hidden border-b border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
            <span>ENGINEERING METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-heading">
            HOW I BUILD{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              INTELLIGENT SYSTEMS
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A disciplined 6-stage engineering lifecycle ensuring analytical clarity, data grounding, continuous evaluation, and production deployment.
          </p>
        </div>

        {/* Storytelling Stage Selector (Horizontal Tabs) */}
        <div className="flex overflow-x-auto gap-2 mb-8 pb-2 justify-start lg:justify-center no-scrollbar">
          {workflowStepsData.map((step, idx) => {
            const isActive = idx === activeStage;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStage(idx)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105'
                    : 'bg-[#0A0A1A] text-slate-400 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{step.stepNumber}</span>
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Storytelling Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-8 rounded-3xl bg-[#0A0A1A] border border-emerald-500/40 backdrop-blur-2xl shadow-2xl shadow-black relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-1">
                  STAGE {workflowStepsData[activeStage].stepNumber} • {workflowStepsData[activeStage].statusBadge}
                </span>
                <h3 className="text-3xl font-extrabold text-white font-heading">
                  {workflowStepsData[activeStage].title}: {workflowStepsData[activeStage].subtitle}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : workflowStepsData.length - 1))}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white"
                >
                  ← PREV
                </button>
                <button
                  onClick={() => setActiveStage((prev) => (prev < workflowStepsData.length - 1 ? prev + 1 : 0))}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 text-xs font-mono text-white flex items-center gap-1"
                >
                  <span>NEXT</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {workflowStepsData[activeStage].description}
            </p>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Primary Tooling & Focus Areas:
              </span>
              <div className="flex flex-wrap gap-2">
                {workflowStepsData[activeStage].techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
