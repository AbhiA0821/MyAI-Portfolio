import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { SkillCategory, TargetRole, SkillProficiency } from '../../types/portfolio';
import { Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

interface SkillsProps {
  skillCategories: SkillCategory[];
  selectedRole?: TargetRole;
}

const techChains: Record<string, string[]> = {
  'RAG': ['RAG', 'LLM API Integration', 'Generative AI', 'FastAPI'],
  'PySpark': ['PySpark', 'DuckDB', 'Apache Airflow', 'ETL Pipelines', 'SQL'],
  'FastAPI': ['FastAPI', 'REST APIs', 'JWT Authentication', 'MySQL'],
  'PyTorch': ['PyTorch', 'Deep Learning', 'GANs', 'CycleGAN'],
  'Machine Learning': ['Machine Learning', 'Scikit-Learn', 'KNN', 'Random Forest']
};

const getBadgeStyle = (level: SkillProficiency) => {
  switch (level) {
    case 'Learning':
      return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
    case 'Working Knowledge':
      return 'bg-sky-500/20 text-sky-300 border-sky-500/40';
    case 'Hands-on':
      return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
    case 'Proficient':
      return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40';
    case 'Strong':
      return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
    case 'Advanced':
      return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
    default:
      return 'bg-slate-900 text-slate-400 border-slate-800';
  }
};

export const Skills: React.FC<SkillsProps> = ({ skillCategories }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeChain = hoveredSkill && techChains[hoveredSkill] ? techChains[hoveredSkill] : null;

  return (
    <section id="skills" className="py-24 bg-[#050505] relative overflow-hidden border-b border-slate-800/80">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-medium">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-heading">
            TECHNICAL{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              COMPETENCIES
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            An interactive technical ecosystem displaying verified competencies across Generative AI, Machine Learning, Data Engineering, and Backend Microservices.
          </p>
        </div>

        {/* Dynamic Execution Chain Visualizer Banner */}
        <div className="p-4 rounded-2xl bg-[#0A0A1A] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs shadow-xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-slate-400 uppercase font-bold">Execution Chain Visualizer:</span>
          </div>

          {activeChain ? (
            <div className="flex items-center gap-2 flex-wrap">
              {activeChain.map((node, i) => (
                <React.Fragment key={node}>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-950/80 border border-blue-800 text-cyan-300 font-semibold">
                    {node}
                  </span>
                  {i < activeChain.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
                  )}
                </React.Fragment>
              ))}
            </div>
          ) : (
            <span className="text-slate-500 italic">Hover any core technology below to trace its execution pipeline</span>
          )}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800/90 backdrop-blur-xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-white border-b border-slate-800/80 pb-3 flex items-center justify-between font-heading">
                  <span>{category.category}</span>
                  <span className="text-[11px] font-mono text-slate-500 font-normal">
                    {category.skills.length} Items
                  </span>
                </h3>

                <div className="space-y-2 pt-3">
                  {category.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs cursor-pointer ${
                          isHovered
                            ? 'bg-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-500/10 scale-[1.02]'
                            : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isHovered ? 'text-cyan-400' : 'text-slate-500'}`} />
                          <span className="font-semibold text-slate-200">{skill.name}</span>
                        </div>

                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getBadgeStyle(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
