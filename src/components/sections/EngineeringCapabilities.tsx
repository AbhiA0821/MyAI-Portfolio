import React from 'react';
import { Network, Bot, Sparkles, Database, ShieldCheck, Cpu } from 'lucide-react';

export const EngineeringCapabilities: React.FC = () => {
  const capabilities = [
    {
      title: "Multi-Agent Systems",
      subtitle: "Agent Orchestration & Tool Execution",
      description: "Designing autonomous multi-agent systems featuring intent classification, specialized agent routing, stateful workflows, and safe tool permissions.",
      icon: Network,
      color: "from-blue-500 to-indigo-600",
      borderColor: "hover:border-blue-500/50",
      badge: "Orchestration"
    },
    {
      title: "RAG & Vector Search",
      subtitle: "Grounded LLM Retrieval Pipelines",
      description: "Building production RAG systems with semantic chunking, dense vector embeddings (ChromaDB/FastEmbed), re-ranking, and strict hallucination defense.",
      icon: Bot,
      color: "from-purple-500 to-pink-600",
      borderColor: "hover:border-purple-500/50",
      badge: "Retrieval"
    },
    {
      title: "Generative AI",
      subtitle: "LLM Applications & Prompt Workflows",
      description: "Engineering production LLM applications using LangChain, LangGraph, prompt optimization, local open models (Ollama/Qwen), and structured function calling.",
      icon: Sparkles,
      color: "from-amber-500 to-orange-600",
      borderColor: "hover:border-amber-500/50",
      badge: "GenAI Applications"
    },
    {
      title: "Data Engineering",
      subtitle: "Scalable Data Pipelines & Analytics",
      description: "Constructing high-throughput streaming & batch pipelines with PySpark, DuckDB, SQL warehousing, Apache Airflow, and PostgreSQL.",
      icon: Database,
      color: "from-emerald-500 to-teal-600",
      borderColor: "hover:border-emerald-500/50",
      badge: "Pipelines"
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-slate-950/60 relative border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/80 text-blue-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" /> SYSTEM CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Engineering <span className="gradient-text">Intelligent Systems</span>
          </h2>
          <p className="text-slate-400 text-base">
            Demonstrating production-grade AI system design, autonomous multi-agent orchestration, and robust data engineering.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className={`glass-panel p-6 rounded-2xl border border-slate-800 ${cap.borderColor} transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${cap.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {cap.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-blue-400 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs font-mono text-blue-400/80 mt-0.5">{cap.subtitle}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Grounded
                  </span>
                  <span className="text-slate-500 group-hover:text-slate-300 transition-colors">Production Grade</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
