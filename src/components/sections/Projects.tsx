import React, { useState } from 'react';
import { Project, TargetRole } from '../../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { Code2, ArrowUpRight, Github, Sparkles, Layers } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
  selectedRole: TargetRole;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, selectedRole }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Filter projects relevant to selectedRole or show all
  const filteredProjects = projects.filter((p) => p.targetRoles.includes(selectedRole));

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/80 text-indigo-400 text-xs font-mono mb-3">
              <Code2 className="w-3.5 h-3.5" /> FEATURED WORK
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              AI Engineering & <span className="gradient-text">Data Science Projects</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs font-mono">
            Showing projects optimized for <span className="text-blue-400 font-semibold">{selectedRole}</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="glass-panel rounded-2xl border border-slate-800 p-6 flex flex-col justify-between cursor-pointer glass-panel-hover group relative overflow-hidden"
            >
              {/* Card Top */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800/60">
                    {project.targetRoles[0]}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white font-heading group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-400">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Bottom Metrics */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-400 font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{Object.values(project.metrics)[0]}</span>
                </div>
                <span className="text-[11px] text-blue-400 font-medium group-hover:underline">Technical Breakdown →</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};
