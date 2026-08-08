import React, { useState } from 'react';
import { Bot, Sparkles, ArrowRight, GitBranch, Globe, FileText, CheckCircle2, ShieldCheck, Terminal, Cpu, Database, Network } from 'lucide-react';
import type { Profile, TargetRole } from '../../types/portfolio';

interface HeroProps {
  profile: Profile;
  selectedRole: TargetRole;
  onOpenChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, selectedRole, onOpenChat }) => {
  const [activePipelineStep, setActivePipelineStep] = useState<number>(1);

  const roleBadges: Record<TargetRole, string[]> = {
    'AI Engineer': ['Multi-Agent Systems', 'RAG Pipelines', 'LangGraph', 'Local LLMs (Ollama)', 'Tool Execution', 'FastAPI'],
    'ML Engineer': ['PyTorch', 'Model Alignment', 'Scikit-Learn', 'NLP', 'Model Evaluation', 'FastAPI'],
    'Data Engineer': ['PySpark', 'DuckDB', 'Apache Airflow', 'ETL Pipelines', 'SQL', 'PostgreSQL'],
    'Data Scientist': ['Statistical Modeling', 'Scikit-Learn', 'PyTorch', 'NLP', 'Data Pipelines', 'Python']
  };

  const pipelineSteps = [
    { id: 1, label: "User Query", sub: "Natural Language Input", icon: Terminal, color: "text-blue-400 border-blue-500/40 bg-blue-950/60" },
    { id: 2, label: "AI Orchestrator", sub: "Master Intent Router", icon: Network, color: "text-indigo-400 border-indigo-500/40 bg-indigo-950/60" },
    { id: 3, label: "Intent Router", sub: "5 Specialized Agents", icon: Cpu, color: "text-purple-400 border-purple-500/40 bg-purple-950/60" },
    { id: 4, label: "RAG & Tools", sub: "ChromaDB / GitHub API", icon: Database, color: "text-emerald-400 border-emerald-500/40 bg-emerald-950/60" },
    { id: 5, label: "LLM Engine", sub: "Ollama Qwen2.5 / Groq", icon: Sparkles, color: "text-amber-400 border-amber-500/40 bg-amber-950/60" },
    { id: 6, label: "Grounded Response", sub: "Zero-Hallucination Stream", icon: CheckCircle2, color: "text-cyan-400 border-cyan-500/40 bg-cyan-950/60" }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Cinematic Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-purple-600/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300">Target Role:</span>
              <span className="text-blue-400 font-semibold">{selectedRole}</span>
            </div>

            {/* Main Title & Positioning */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white leading-[1.12]">
                Hello, I'm <span className="gradient-text">{profile.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl text-blue-400 font-heading font-semibold tracking-wide">
                AI Engineer & Data Science Professional
              </p>
            </div>

            {/* Positioning Statement */}
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
              Architecting production-grade <span className="text-white font-medium">Generative AI</span>, <span className="text-white font-medium">LLM Applications</span>, <span className="text-white font-medium">RAG Pipelines</span>, <span className="text-white font-medium">Multi-Agent Systems</span>, and scalable <span className="text-white font-medium">Data Engineering</span> workflows.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              {profile.bio}
            </p>

            {/* Role-Specific Core Stack Pills */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">Core Technical Focus for {selectedRole}:</span>
              <div className="flex flex-wrap gap-2">
                {roleBadges[selectedRole].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-medium text-blue-300 hover:border-blue-500/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenChat}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2 shadow-sm"
              >
                <Bot className="w-4 h-4 text-blue-400" />
                <span>Ask MyAI</span>
              </button>

              <a
                href="#experience"
                className="px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 text-sm font-medium border border-slate-800 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>View Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-4 text-slate-400 text-xs">
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 transition-colors">
                <GitBranch className="w-4 h-4" /> GitHub
              </a>
              <span className="text-slate-700">•</span>
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 transition-colors">
                <Globe className="w-4 h-4" /> LinkedIn
              </a>
              <span className="text-slate-700">•</span>
              <span className="text-slate-400">{profile.location}</span>
            </div>

          </div>

          {/* Right Side: Futuristic "MyAI Engine" Pipeline Visualization */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 shadow-2xl relative space-y-4">
              
              {/* Header Status Bar */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">myai_engine_pipeline</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono">
                  <span className="text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                    SYSTEM ONLINE
                  </span>
                  <span className="text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800">
                    RAG ACTIVE
                  </span>
                </div>
              </div>

              {/* Status Indicator Badges */}
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                <div className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">AGENT ROUTER:</span>
                  <span className="text-purple-400 font-bold">READY</span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">LLM PROVIDER:</span>
                  <span className="text-amber-400 font-bold">OLLAMA / GROQ</span>
                </div>
              </div>

              {/* Visual Pipeline Interactive Steps */}
              <div className="space-y-2 pt-2">
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Interactive AI System Architecture:
                </p>

                <div className="space-y-2">
                  {pipelineSteps.map((step) => {
                    const StepIcon = step.icon;
                    const isActive = activePipelineStep === step.id;
                    return (
                      <div
                        key={step.id}
                        onMouseEnter={() => setActivePipelineStep(step.id)}
                        className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          isActive
                            ? 'bg-slate-900/90 border-blue-500/60 shadow-lg shadow-blue-500/10 translate-x-1'
                            : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/40'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-1.5 rounded-lg border text-xs ${step.color}`}>
                            <StepIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-slate-200 block font-heading">{step.label}</span>
                            <span className="text-[10px] font-mono text-slate-400 block">{step.sub}</span>
                          </div>
                        </div>

                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Engine Footer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Grounded RAG
                </span>
                <span className="text-blue-400 font-semibold cursor-pointer hover:underline" onClick={onOpenChat}>
                  Test Live Engine →
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
