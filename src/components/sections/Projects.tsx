import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, ExternalLink, Cpu, Info } from 'lucide-react';
import type { Project } from '../../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { RevealText } from '../motion/RevealText';
import { TiltCard } from '../motion/TiltCard';

interface ProjectsProps {
  projects: Project[];
}

type ProjectCategory = 'All' | 'AI / GenAI' | 'Machine Learning' | 'Data Engineering';

const categories: ProjectCategory[] = ['All', 'AI / GenAI', 'Machine Learning', 'Data Engineering'];

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((proj) => {
    return activeCategory === 'All' || proj.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 bg-[#050505] relative overflow-hidden border-b border-slate-800/80">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <span>CANONICAL PROJECT SHOWCASE</span>
          </div>
          <RevealText
            text="WHAT I BUILT"
            as="h2"
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading justify-center"
          />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Verified projects built with Python, PySpark, DuckDB, Streamlit, PyTorch, and Apache Airflow. Strictly synchronized with GitHub repositories.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-[#0A0A1A] text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Compact Projects Grid with Staggered Reveal */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const projectNumber = String(index + 1).padStart(2, '0');
              return (
                <TiltCard key={project.id} className="h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group rounded-3xl bg-[#0A0A1A] border border-slate-800/90 hover:border-blue-500/50 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/70 flex flex-col justify-between transition-all h-full relative"
                  >
                    {/* Top Decorative Header */}
                    <div className="p-6 pb-4 border-b border-slate-800/80 bg-gradient-to-r from-slate-950 via-[#0A0A1A] to-blue-950/40 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-extrabold font-mono text-blue-400">
                          {projectNumber}
                        </span>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors font-heading">
                            {project.title}
                          </h3>
                          <span className="text-[10px] font-mono text-purple-400 block font-semibold">
                            {project.tagline}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="px-2 py-0.5 rounded-md bg-emerald-950/80 text-emerald-300 border border-emerald-800 text-[9px] font-mono font-bold tracking-wider uppercase">
                          VERIFIED
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300 font-semibold uppercase">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Badges */}
                      <div className="space-y-1.5 pt-2">
                        <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                          Main Technologies
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="px-6 py-4 border-t border-slate-800/80 bg-slate-950/60 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        {project.demoUrl ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-md transition-all"
                          >
                            <span>LIVE DEMO</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : null}

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
                        >
                          <GitBranch className="w-3.5 h-3.5 text-blue-400" />
                          <span>VIEW GITHUB →</span>
                        </a>
                      </div>

                      <button
                        onClick={() => setActiveModalProject(project)}
                        title="View Architecture Case Study"
                        className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <Info className="w-4 h-4" />
                      </button>
                    </div>

                  </motion.div>
                </TiltCard>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};
