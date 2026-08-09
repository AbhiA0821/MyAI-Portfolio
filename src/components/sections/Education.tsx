import React from 'react';
import type { EducationItem } from '../../types/portfolio';
import { GraduationCap, Calendar, CheckCircle2, Award } from 'lucide-react';

interface EducationProps {
  education: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-24 bg-[#050505] relative overflow-hidden border-b border-slate-800/80">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-medium">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-heading">
            EDUCATION &{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              ACADEMICS
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Formal engineering degree with focus on Computer Science, Data Science, Artificial Intelligence, and Systems Architecture.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#0A0A1A] border border-slate-800/90 backdrop-blur-xl shadow-2xl space-y-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800/80 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">{edu.degree}</h3>
                  <p className="text-sm font-semibold text-purple-400 font-mono pt-1">{edu.field}</p>
                  <p className="text-xs font-mono text-slate-400 pt-0.5">{edu.institution}</p>
                </div>
                <div className="text-right space-y-2">
                  <div className="flex items-center gap-1.5 justify-end text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.period}</span>
                  </div>
                  {edu.grade && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950/80 border border-emerald-800 text-emerald-300">
                      <Award className="w-3.5 h-3.5" />
                      {edu.grade}
                    </span>
                  )}
                </div>
              </div>

              {edu.highlights && edu.highlights.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400 uppercase font-bold tracking-wider">
                    Academic Focus & Achievements:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {edu.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
