import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, ArrowUpRight, Cpu } from 'lucide-react';
import type { Project } from '../../types/portfolio';
import { ProjectModal } from './ProjectModal';

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
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium">
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-heading">
            FEATURED{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Case studies covering production Multi-Agent systems, clinical PubMed RAG search engines, and PySpark streaming data pipelines.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
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

        {/* Projects Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl bg-[#0A0A1A] border border-slate-800/90 hover:border-cyan-500/50 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/60 flex flex-col justify-between transition-all"
              >
                <div>
                  {/* Card Visual Header / Gradient Banner */}
                  <div className="h-44 bg-gradient-to-br from-slate-950 via-[#0A0A1A] to-blue-950/60 p-5 relative overflow-hidden flex flex-col justify-between border-b border-slate-800/80">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-[10px] font-mono font-semibold uppercase">
                        {project.category}
                      </span>
                      <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-400 transition-colors">
                        <Cpu className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1 font-heading">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-purple-400 line-clamp-1">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {Object.entries(project.metrics).slice(0, 2).map(([key, val]) => (
                        <div key={key} className="p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                          <span className="text-[10px] font-mono text-slate-400 block">{key}</span>
                          <span className="text-xs font-mono font-bold text-cyan-300">{val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 py-4 border-t border-slate-800/80 bg-slate-950/40 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600 border border-blue-500/40 hover:border-blue-500 text-blue-300 hover:text-white text-xs font-mono font-semibold flex items-center gap-1 transition-all cursor-pointer"
                  >
                    <span>CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            ))}
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
