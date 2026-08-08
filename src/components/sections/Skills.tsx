import React from 'react';
import type { SkillCategory, TargetRole } from '../../types/portfolio';
import { Cpu, CheckCircle2 } from 'lucide-react';

interface SkillsProps {
  skillCategories: SkillCategory[];
  selectedRole: TargetRole;
}

export const Skills: React.FC<SkillsProps> = ({ skillCategories, selectedRole }) => {
  const getBadgeStyle = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-blue-950 text-blue-300 border-blue-800';
      case 'Proficient':
        return 'bg-purple-950 text-purple-300 border-purple-800';
      case 'Intermediate':
        return 'bg-slate-900 text-slate-300 border-slate-700';
      default:
        return 'bg-slate-900 text-slate-400 border-slate-800';
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-950/40 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/80 text-purple-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" /> TECHNICAL MATRIX
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Technical Competencies & <span className="gradient-text">Proficiency Matrix</span>
          </h2>
          <p className="text-slate-400 text-base">
            Reflecting realistic technical proficiency across 7 core engineering categories. Skills relevant to <span className="text-blue-400 font-semibold">{selectedRole}</span> are highlighted below.
          </p>
        </div>

        {/* 7 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.category} className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white font-heading border-b border-slate-800 pb-3 flex items-center justify-between">
                  <span>{category.category}</span>
                  <span className="text-[11px] font-mono text-slate-500 font-normal">
                    {category.skills.length} Items
                  </span>
                </h3>

                <div className="space-y-2 pt-3">
                  {category.skills.map((skill) => {
                    const isRoleMatch = skill.roles.includes(selectedRole);
                    return (
                      <div
                        key={skill.name}
                        className={`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs ${
                          isRoleMatch
                            ? 'bg-slate-900/90 border-blue-500/50 shadow-md shadow-blue-500/10'
                            : 'bg-slate-950/60 border-slate-800/80 opacity-75'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isRoleMatch ? 'text-blue-400' : 'text-slate-500'}`} />
                          <span className="font-semibold text-slate-200">{skill.name}</span>
                        </div>

                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getBadgeStyle(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
