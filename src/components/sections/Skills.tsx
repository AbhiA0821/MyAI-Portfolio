import React from 'react';
import { SkillCategory, TargetRole } from '../../types/portfolio';
import { Cpu, CheckCircle2, Star } from 'lucide-react';

interface SkillsProps {
  skillCategories: SkillCategory[];
  selectedRole: TargetRole;
}

export const Skills: React.FC<SkillsProps> = ({ skillCategories, selectedRole }) => {
  return (
    <section id="skills" className="py-20 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/80 text-purple-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" /> TECHNICAL MATRIX
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Core Competencies & <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 text-base">
            Skills highlighted with glowing borders match your selected <span className="text-blue-400 font-semibold">{selectedRole}</span> profile.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white font-heading border-b border-slate-800 pb-3 flex items-center justify-between">
                <span>{category.category}</span>
                <span className="text-xs font-mono text-slate-500 font-normal">
                  {category.skills.length} Competencies
                </span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => {
                  const isRoleMatch = skill.roles.includes(selectedRole);
                  return (
                    <div
                      key={skill.name}
                      className={`p-3 rounded-xl border transition-all flex items-center justify-between ${
                        isRoleMatch
                          ? 'bg-slate-900/90 border-blue-500/50 shadow-md shadow-blue-500/10'
                          : 'bg-slate-950/60 border-slate-800/80 opacity-75'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${isRoleMatch ? 'text-blue-400' : 'text-slate-500'}`} />
                          <span className="text-xs font-semibold text-slate-200">{skill.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 block pl-5">{skill.level}</span>
                      </div>

                      {isRoleMatch && (
                        <span className="px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 text-[9px] font-mono border border-blue-800">
                          MATCH
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
