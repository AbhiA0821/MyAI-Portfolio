import React from 'react';
import type { Project } from '../../types/portfolio';
import { X, ExternalLink, GitBranch, CheckCircle, Zap, Layers, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 shadow-2xl relative p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            {project.targetRoles.map((role) => (
              <span key={role} className="px-2.5 py-0.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-[11px] font-mono">
                {role}
              </span>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">{project.title}</h2>
          <p className="text-sm text-blue-400 font-medium">{project.tagline}</p>
        </div>

        {/* Content Breakdown */}
        <div className="space-y-6 text-slate-300 text-sm">
          
          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <h3 className="text-xs font-mono text-rose-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <X className="w-4 h-4" /> Technical Challenge / Problem
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">{project.problem}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Engineered Solution
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Visual Architecture Pipeline Diagram */}
          {project.pipelineDiagram && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-purple-400" /> Interactive Data Flow Pipeline
              </h3>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {project.pipelineDiagram.map((node, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1 relative">
                      <div className="flex items-center justify-between text-blue-400 text-xs font-mono font-bold">
                        <span>{node.step}</span>
                        {idx < project.pipelineDiagram!.length - 1 && (
                          <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden lg:block" />
                        )}
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">{node.description}</p>
                      <span className="inline-block text-[9px] font-mono text-purple-300 bg-purple-950/80 px-1.5 py-0.2 rounded border border-purple-800">
                        {node.tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Key Metrics */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" /> Verified Performance Metrics
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {Object.entries(project.metrics).map(([key, val]) => (
                <div key={key} className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                  <span className="text-xs text-slate-400 block">{key}</span>
                  <span className="text-sm font-bold text-white font-mono">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & AI Techniques */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Technologies:</span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">AI/ML Techniques:</span>
              <div className="flex flex-wrap gap-1.5">
                {project.aiTechniques.map((a) => (
                  <span key={a} className="px-2.5 py-1 rounded bg-blue-950/60 border border-blue-900/60 text-xs font-mono text-blue-300">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold border border-slate-700 flex items-center gap-2"
            >
              <GitBranch className="w-4 h-4" /> View GitHub Repository
            </a>

            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
