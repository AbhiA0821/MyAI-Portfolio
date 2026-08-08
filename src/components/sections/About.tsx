import React from 'react';
import type { Profile, TargetRole } from '../../types/portfolio';
import { Bot, Cpu, Database, Network, ShieldCheck, Zap } from 'lucide-react';

interface AboutProps {
  profile: Profile;
  selectedRole: TargetRole;
}

export const About: React.FC<AboutProps> = ({ selectedRole }) => {
  const CorePillars = [
    {
      title: "Multi-Agent Orchestration",
      description: "Designing autonomous agent systems with explicit tool permissions, intent classification, and multi-step reasoning frameworks.",
      icon: Network,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "RAG & Vector Search",
      description: "Building production RAG pipelines with semantic chunking, dense embeddings, re-ranking, and hallucination defense.",
      icon: Bot,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Scalable Data Pipelines",
      description: "Constructing high-throughput ETL & streaming pipelines using PySpark, Kafka, PostgreSQL, and ACID Delta Lakes.",
      icon: Database,
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Zero-Cost MLOps Infrastructure",
      description: "Deploying open-source LLMs (Qwen2.5/Gemma 2) locally via Ollama & Docker with fast API orchestration.",
      icon: Zap,
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/80 text-blue-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" /> ARCHITECTURAL CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Engineering High-Impact <span className="gradient-text">AI & Data Systems</span>
          </h2>
          <p className="text-slate-400 text-base">
            Focused on building robust, non-hallucinating Generative AI applications and scalable data infrastructure tailored for <span className="text-blue-400 font-semibold">{selectedRole}</span> challenges.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CorePillars.map((pillar) => (
            <div
              key={pillar.title}
              className="glass-panel p-6 rounded-2xl border border-slate-800 glass-panel-hover flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center shadow-lg`}>
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading">{pillar.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center gap-1 text-[11px] font-mono text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Production Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
