import React from 'react';
import { Bot, Sparkles, ArrowRight, GitBranch, Globe, FileText, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';
import type { Profile, TargetRole } from '../../types/portfolio';

interface HeroProps {
  profile: Profile;
  selectedRole: TargetRole;
  onOpenChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, selectedRole, onOpenChat }) => {
  const roleBadges: Record<TargetRole, string[]> = {
    'AI Engineer': ['Multi-Agent Systems', 'RAG Pipelines', 'LangGraph', 'Local Open LLMs', 'Tool Calling', 'FastAPI'],
    'ML Engineer': ['PyTorch', 'MLOps', 'Model Alignment', 'Fine-Tuning', 'Vector Indexing', 'NLP'],
    'Data Engineer': ['PySpark', 'Apache Spark', 'Delta Lake', 'Kafka Streaming', 'ETL Architecture', 'PostgreSQL'],
    'Data Scientist': ['Predictive Modeling', 'Statistical Inference', 'NLP', 'Data Pipelines', 'Scikit-Learn', 'PyTorch']
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-500/15 to-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300">Targeting Role:</span>
              <span className="text-blue-400 font-semibold">{selectedRole}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white leading-[1.15]">
              Hello, I'm <span className="gradient-text">{profile.name}</span>
            </h1>

            {/* Dynamic Tagline */}
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
              {profile.tagline}
            </p>

            {/* Bio summary */}
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
              {profile.bio}
            </p>

            {/* Role Technical Badges */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Core Stack for {selectedRole}:</span>
              <div className="flex flex-wrap gap-2">
                {roleBadges[selectedRole].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-blue-300 hover:border-blue-500/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 group"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenChat}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2 shadow-sm"
              >
                <Bot className="w-4 h-4 text-blue-400" />
                <span>Ask MyAI Assistant</span>
              </button>

              <a
                href="#career"
                className="px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 text-sm font-medium border border-slate-800 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Resume Intel</span>
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

          {/* Right Column: Interactive AI Multi-Agent Card Visualizer */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">agent_orchestrator.py</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                  SYSTEM READY
                </span>
              </div>

              {/* Agent Orchestrator Visualizer */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-blue-400 flex items-center gap-1">
                      <Terminal className="w-3.5 h-3.5" /> Agent Router
                    </span>
                    <span className="text-[10px] text-slate-500">v1.0.4</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">Active Intent Classifier: <span className="text-amber-300">"{selectedRole} Profile Context"</span></p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-slate-300 font-semibold">
                      <span>RAG Engine</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <p className="text-[10px] text-slate-400">ChromaDB Vector Store</p>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[95%]"></div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-slate-300 font-semibold">
                      <span>LLM Provider</span>
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    </div>
                    <p className="text-[10px] text-slate-400">Ollama / Groq Free</p>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full w-[100%]"></div>
                    </div>
                  </div>
                </div>

                {/* Sub-Agents Status */}
                <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-[11px]">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Orchestrated Specialized Agents:</p>
                  <div className="grid grid-cols-2 gap-1.5 text-slate-300">
                    <span className="flex items-center gap-1.5 bg-slate-900/60 p-1.5 rounded border border-slate-800/60">
                      <CheckCircle2 className="w-3 h-3 text-blue-400" /> Profile Agent
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-900/60 p-1.5 rounded border border-slate-800/60">
                      <CheckCircle2 className="w-3 h-3 text-blue-400" /> Project Agent
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-900/60 p-1.5 rounded border border-slate-800/60">
                      <CheckCircle2 className="w-3 h-3 text-blue-400" /> Career Agent
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-900/60 p-1.5 rounded border border-slate-800/60">
                      <CheckCircle2 className="w-3 h-3 text-blue-400" /> Job Matcher
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
