import React from 'react';
import type { Profile, TargetRole } from '../../types/portfolio';
import { User, Sparkles, Compass, Target, Code2 } from 'lucide-react';

interface AboutProps {
  profile: Profile;
  selectedRole: TargetRole;
}

export const About: React.FC<AboutProps> = ({ profile, selectedRole }) => {
  const storyCards = [
    {
      title: "Who I Am",
      subtitle: "AI & Data Science Specialist",
      content: profile.bio,
      icon: User,
      badge: "Background"
    },
    {
      title: "Current Technical Focus",
      subtitle: "Generative AI & Data Systems",
      content: `Specializing in multi-agent orchestration, RAG vector retrieval, local LLM deployment (Ollama/Qwen), PySpark data engineering, and FastAPI microservices tailored for ${selectedRole} workflows.`,
      icon: Code2,
      badge: "Specialization"
    },
    {
      title: "Career Direction",
      subtitle: "Engineering High-Impact Systems",
      content: "Dedicated to solving real-world challenges by building non-hallucinating, grounded AI applications, automated career intelligence systems, and high-throughput data processing engines.",
      icon: Target,
      badge: "Vision"
    },
    {
      title: "Core Engineering Philosophy",
      subtitle: "Robustness & Zero-Cost Architecture",
      content: "Combining modern software practices, strict evaluation, and open-source models to deliver production-grade software without relying on expensive proprietary API locks.",
      icon: Compass,
      badge: "Philosophy"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-950/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/80 text-blue-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" /> PROFESSIONAL BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            About <span className="gradient-text">{profile.name}</span>
          </h2>
          <p className="text-slate-400 text-base">
            Bridging theoretical machine learning models with production-grade software engineering for <span className="text-blue-400 font-semibold">{selectedRole}</span> opportunities.
          </p>
        </div>

        {/* 4 Story Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {storyCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="glass-panel p-6 rounded-2xl border border-slate-800 glass-panel-hover flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/80 flex items-center justify-center text-blue-400 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-purple-400 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800">
                      {card.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white font-heading">{card.title}</h3>
                    <p className="text-xs font-mono text-blue-400">{card.subtitle}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {card.content}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Abhishek Ainapure Portfolio</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
