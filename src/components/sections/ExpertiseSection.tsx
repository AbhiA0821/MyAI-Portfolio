import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Database, Bot, Brain, Server, Terminal, ChevronRight, X, CheckCircle } from 'lucide-react';
import type { ExpertiseItem } from '../../types/portfolio';

interface ExpertiseSectionProps {
  expertiseList: ExpertiseItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6 text-blue-400" />,
  Database: <Database className="w-6 h-6 text-purple-400" />,
  Bot: <Bot className="w-6 h-6 text-cyan-400" />,
  Brain: <Brain className="w-6 h-6 text-pink-400" />,
  Server: <Server className="w-6 h-6 text-emerald-400" />,
  Terminal: <Terminal className="w-6 h-6 text-amber-400" />
};

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ expertiseList }) => {
  const [selectedExpertise, setSelectedExpertise] = useState<ExpertiseItem | null>(null);

  return (
    <section id="expertise" className="py-24 bg-[#050505] relative overflow-hidden border-b border-slate-800/80">
      {/* Background light leak */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-purple-600/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-medium">
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white font-heading">
            WHAT I{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              BUILD
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Five technical pillars across Generative AI, Autonomous Multi-Agent Workflows, Machine Learning, Data Engineering, and Production AI Applications. Click any card to explore capabilities.
          </p>
        </div>

        {/* 5 Primary Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              onClick={() => setSelectedExpertise(item)}
              className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800/90 hover:border-cyan-500/50 backdrop-blur-xl shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Glow bar top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                    {iconMap[item.iconName] || <Sparkles className="w-6 h-6 text-blue-400" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                    {item.title.split(' ')[0]}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white mb-1 font-heading group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-purple-400 mb-3">
                  {item.subtitle}
                </p>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300">
                      {tech}
                    </span>
                  ))}
                  {item.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400">
                      +{item.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Link */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs font-mono text-blue-400 group-hover:text-cyan-300">
                  <span>EXPLORE CAPABILITIES</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Case Study / Concept Drawer */}
        <AnimatePresence>
          {selectedExpertise && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-3xl rounded-2xl bg-[#0A0A1A] border border-slate-700 p-6 sm:p-8 shadow-2xl shadow-black relative max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedExpertise(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                    {iconMap[selectedExpertise.iconName] || <Sparkles className="w-8 h-8 text-blue-400" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-heading">
                      {selectedExpertise.title}
                    </h3>
                    <p className="text-xs font-mono text-purple-400">
                      {selectedExpertise.subtitle}
                    </p>
                  </div>
                </div>

                {/* Technical Overview */}
                <div className="space-y-3 text-slate-300 text-sm leading-relaxed mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                    Technical Architecture Overview
                  </h4>
                  <p className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm">
                    {selectedExpertise.detailedOverview}
                  </p>
                </div>

                {/* Key Capabilities */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                    Key Implementation Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedExpertise.keyCapabilities.map((cap, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies List */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                    Technologies & Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExpertise.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
