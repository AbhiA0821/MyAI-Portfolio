import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Target, Compass, Code, MapPin, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import type { Profile } from '../../types/portfolio';

interface AboutProps {
  profile: Profile;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden border-b border-slate-800/80">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-heading">
            Bridging Machine Learning &{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Software Engineering
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Developing high-performance Generative AI solutions, autonomous multi-agent workflows, and distributed data pipelines.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800/90 hover:border-slate-700 backdrop-blur-xl shadow-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 group-hover:scale-105 transition-transform">
                  <User className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  IDENTITY
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">Profile Overview</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {profile.bio}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Academics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800/90 hover:border-slate-700 backdrop-blur-xl shadow-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  ACADEMICS
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">Education & Foundation</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                <strong className="text-white">Bachelor of Technology (B.Tech)</strong> in Computer Science & Engineering / Data Science (2021 - 2025). First Class Distinction.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li className="flex items-start gap-1.5">
                  <span className="text-purple-400">•</span>
                  <span>Specialized coursework in Machine Learning, Deep Learning, and Distributed Databases.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-purple-400">•</span>
                  <span>Capstone project on multi-agent LLM systems and automated data processing.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3: Active Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800/90 hover:border-slate-700 backdrop-blur-xl shadow-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-105 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                  ACTIVE FOCUS
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">Current Technical Focus</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                Developing production-grade GenAI frameworks, RAG retrieval guardrails, and real-time PySpark & DuckDB ETL data engines.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Multi-Agent Systems', 'Local LLMs', 'ChromaDB', 'PySpark', 'FastAPI'].map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4: Trajectory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800/90 hover:border-slate-700 backdrop-blur-xl shadow-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  TRAJECTORY
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">Career Direction</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                Targeting roles in AI Engineering, ML Engineering, and Data Science. Focused on bringing complex ML models into scalable production software.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800/90 hover:border-slate-700 backdrop-blur-xl shadow-xl flex flex-col justify-between group md:col-span-2 lg:col-span-2"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 group-hover:scale-105 transition-transform">
                  <Code className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                  PHILOSOPHY
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">Engineering Philosophy</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                "AI systems are only as effective as the data pipelines and grounding mechanisms behind them." I advocate for clean architecture, zero-cost open-source tools where applicable, comprehensive test coverage, and transparent evaluation metrics over black-box assumptions.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
