import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Terminal, Database, GitBranch, ArrowRight, UserCheck, Briefcase, Award, CheckCircle2 } from 'lucide-react';

const agents = [
  { id: 'profile', name: 'Profile Agent', desc: 'Personal background & education', icon: <UserCheck className="w-4 h-4 text-blue-400" /> },
  { id: 'project', name: 'Project Agent', desc: 'MedIntel RAG & PySpark engine', icon: <Terminal className="w-4 h-4 text-purple-400" /> },
  { id: 'career', name: 'Career Agent', desc: 'Alignment & background analysis', icon: <Briefcase className="w-4 h-4 text-pink-400" /> },
  { id: 'github', name: 'GitHub Agent', desc: 'Repos, commits & MCP tools', icon: <GitBranch className="w-4 h-4 text-emerald-400" /> },
  { id: 'portfolio', name: 'Portfolio Agent', desc: 'Navigation & general queries', icon: <Award className="w-4 h-4 text-cyan-400" /> }
];

export const SystemShowcase: React.FC = () => {
  const [pulseIndex, setPulseIndex] = useState(0);
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % agents.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inside-myai" className="py-24 bg-[#050505] relative overflow-hidden border-b border-slate-800/80">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-cyan-600/10 blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <span>MULTI-AGENT ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-heading">
            INSIDE{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              MYAI
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            How visitor queries are routed through a master intent orchestrator to 5 specialized domain agents backed by ChromaDB vector search and local LLM response streaming.
          </p>
        </div>

        {/* Interactive Architecture Canvas */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#0A0A1A] border border-slate-800/90 backdrop-blur-2xl shadow-2xl space-y-10">
          
          {/* Layer 1: Visitor Query & Master Assistant */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            
            {/* Step 1 Node */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1 w-full md:w-64 shadow-md">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block font-bold">
                01 • VISITOR QUERY
              </span>
              <h4 className="text-sm font-bold text-white">Natural Language Input</h4>
              <p className="text-[11px] font-mono text-slate-400">"Tell me about MedIntel architecture"</p>
            </div>

            {/* Pulsing Light Stream Line */}
            <div className="flex items-center gap-1">
              <ArrowRight className="w-5 h-5 text-cyan-400 animate-pulse hidden md:block" />
            </div>

            {/* Step 2 Node */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-cyan-500/50 space-y-1 w-full md:w-64 shadow-lg shadow-cyan-500/10">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block font-bold">
                02 • ORCHESTRATOR
              </span>
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5 justify-center md:justify-start">
                <Bot className="w-4 h-4 text-purple-400" />
                <span>Master Intent Router</span>
              </h4>
              <p className="text-[11px] font-mono text-slate-400">Intent classification & slots</p>
            </div>

          </div>

          {/* Layer 2: 5 Specialized Agent Nodes */}
          <div className="space-y-3">
            <div className="text-center">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
                03 • 5 SPECIALIZED DOMAIN AGENTS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {agents.map((agent, idx) => {
                const isActive = idx === pulseIndex || hoveredAgent === agent.id;
                return (
                  <motion.div
                    key={agent.id}
                    onMouseEnter={() => setHoveredAgent(agent.id)}
                    onMouseLeave={() => setHoveredAgent(null)}
                    animate={{
                      scale: isActive ? 1.04 : 1,
                      borderColor: isActive ? '#38bdf8' : '#1e293b'
                    }}
                    className={`p-4 rounded-2xl bg-slate-950 border backdrop-blur-md transition-all shadow-md flex flex-col justify-between cursor-pointer ${
                      isActive ? 'shadow-cyan-500/20 bg-slate-900/90' : 'border-slate-800'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                          {agent.icon}
                        </div>
                        {isActive && (
                          <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800 animate-pulse">
                            ROUTED
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1 font-heading">{agent.name}</h4>
                      <p className="text-[11px] text-slate-400 leading-snug">{agent.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Layer 3: RAG Engine, LLM & Streamed Response */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
            
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold">
                04 • RAG VECTOR ENGINE
              </span>
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5 font-heading">
                <Database className="w-4 h-4 text-emerald-400" />
                <span>ChromaDB Vector Store</span>
              </h4>
              <p className="text-[11px] text-slate-400">FastEmbed dense search (Top-K = 4, Similarity threshold ≥ 0.72)</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                05 • LLM EXECUTION
              </span>
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5 font-heading">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Ollama Qwen2.5 / Groq</span>
              </h4>
              <p className="text-[11px] text-slate-400">Context synthesis without technical or medical hallucination</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest block font-bold">
                06 • STREAMED RESPONSE
              </span>
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5 font-heading">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>FastAPI Stream Adapter</span>
              </h4>
              <p className="text-[11px] text-slate-400">Real-time Markdown stream with source context indicators</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
