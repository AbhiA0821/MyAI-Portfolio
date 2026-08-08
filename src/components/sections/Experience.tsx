import React from 'react';
import { ExperienceItem, EducationItem, CertificationItem, TargetRole } from '../../types/portfolio';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle } from 'lucide-react';

interface ExperienceProps {
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  selectedRole: TargetRole;
}

export const Experience: React.FC<ExperienceProps> = ({
  experiences,
  education,
  certifications,
  selectedRole
}) => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Experience Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" /> CAREER TIMELINE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Experience, Education & <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Work Experience */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Briefcase className="w-5 h-5 text-blue-400" /> Work Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 relative">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white font-heading">{exp.role}</h4>
                      <p className="text-sm font-medium text-blue-400">{exp.company}</p>
                    </div>
                    <div className="text-right text-xs font-mono text-slate-400 space-y-1">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 justify-end">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <GraduationCap className="w-5 h-5 text-purple-400" /> Education
              </h3>

              {education.map((edu) => (
                <div key={edu.id} className="glass-panel p-5 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-start justify-between">
                    <h4 className="text-base font-bold text-white font-heading">{edu.degree}</h4>
                    <span className="text-[11px] font-mono text-slate-400">{edu.period}</span>
                  </div>
                  <p className="text-xs font-medium text-purple-400">{edu.field}</p>
                  <p className="text-xs text-slate-400">{edu.institution}</p>
                  <span className="inline-block text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/80">
                    {edu.grade}
                  </span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <Award className="w-5 h-5 text-amber-400" /> Certifications
              </h3>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.id} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="text-xs font-bold text-slate-200">{cert.title}</h4>
                      <span className="text-[10px] font-mono text-slate-400">{cert.date}</span>
                    </div>
                    <p className="text-[11px] text-amber-400">{cert.issuer}</p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((s) => (
                        <span key={s} className="px-1.5 py-0.5 rounded bg-slate-950 text-[9px] font-mono text-slate-400 border border-slate-800">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
