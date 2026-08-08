import React from 'react';
import { X, Download, FileText, ExternalLink, CheckCircle } from 'lucide-react';
import type { Profile } from '../../types/portfolio';

interface ResumeModalProps {
  profile: Profile;
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ profile, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
            <FileText className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">
              {profile.name} — Curriculum Vitae
            </h3>
            <p className="text-xs font-mono text-slate-400">
              {profile.title}
            </p>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 mb-6">
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
            Executive Summary
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            {profile.bio} Specializing in Generative AI architectures, RAG vector retrieval, PySpark big data transformations, and high-performance FastAPI backends.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Generative AI & Multi-Agent Frameworks</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>PySpark & DuckDB ETL Infrastructure</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>ChromaDB Vector Retrieval & Guardrails</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>FastAPI & Async Python 3.11+ Microservices</span>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5"
          >
            <span>GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href="mailto:ainapureabhi0821@gmail.com?subject=Resume%20Request%20-%20Abhishek%20Ainapure"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/20"
          >
            <Download className="w-4 h-4" />
            <span>Request PDF Resume</span>
          </a>
        </div>

      </div>
    </div>
  );
};
