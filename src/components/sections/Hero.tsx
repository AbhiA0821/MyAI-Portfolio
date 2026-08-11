import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, FileText, ArrowRight, Database } from 'lucide-react';
import type { Profile } from '../../types/portfolio';
import { RevealText } from '../motion/RevealText';
import { MagneticButton } from '../motion/MagneticButton';
import { ParallaxElement } from '../motion/ParallaxElement';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';

interface HeroProps {
  profile: Profile;
  onOpenChat: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenChat, onOpenResume }) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050505] border-b border-slate-800/80">
      
      {/* Dynamic Ambient Light Leaks */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-purple-600/15 to-cyan-500/10 blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Brand & Headline */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-300 font-semibold">
                Hello, I'm {profile.name}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-mono text-purple-400">AI & Data Science Specialist</span>
            </motion.div>

            {/* Main Headline Reveal */}
            <div className="space-y-2">
              <RevealText
                text="Building Intelligent Systems with"
                as="h1"
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-tight"
              />
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-heading"
              >
                Machine Learning & GenAI
              </motion.div>
            </div>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Specializing in autonomous multi-agent workflows, dense vector RAG retrieval, PySpark distributed pipelines, and production FastAPI microservices.
            </motion.p>

            {/* Action Buttons with Magnetic Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <MagneticButton
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-purple-500 text-white font-semibold text-xs font-mono flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>VIEW RESUME</span>
              </MagneticButton>

              <MagneticButton
                onClick={onOpenChat}
                className="px-5 py-3 rounded-xl bg-[#0A0A1A] border border-slate-700 hover:border-cyan-500 text-slate-200 hover:text-white font-semibold text-xs font-mono flex items-center gap-2 backdrop-blur-xl shadow-lg cursor-pointer"
              >
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>ASK MYAI</span>
              </MagneticButton>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold text-xs font-mono flex items-center gap-2 cursor-pointer transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>GITHUB</span>
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold text-xs font-mono flex items-center gap-2 cursor-pointer transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LINKEDIN</span>
              </a>

              <MagneticButton
                onClick={scrollToProjects}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs font-mono flex items-center gap-2 shadow-xl shadow-blue-500/25 cursor-pointer"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </motion.div>

          </div>

          {/* Right Column: Clean Technical Stack & Engineering Badge (No Project Cards) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <ParallaxElement speed={-20} className="w-full">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A1A] border border-slate-800 shadow-2xl backdrop-blur-2xl space-y-6 relative overflow-hidden">
                {/* Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      Technical Stack & Engineering
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800 font-semibold">
                    VERIFIED
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                      Core Specializations
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Python', 'PySpark', 'DuckDB', 'Apache Airflow', 'SQL', 'Scikit-Learn', 'PyTorch', 'FastAPI', 'Streamlit'].map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                      Primary Engineering Focus
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      Building scalable ETL workflows, machine learning models (KNN, Random Forest, CycleGAN), and intelligent data applications.
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-900">
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                      Verified Verification Links
                    </span>
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <a
                        href={profile.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-300 hover:text-white underline underline-offset-4 flex items-center gap-1"
                      >
                        github.com/AbhiA0821
                      </a>
                      <span className="text-slate-600">•</span>
                      <a
                        href={profile.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-300 hover:text-white underline underline-offset-4 flex items-center gap-1"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </ParallaxElement>

          </div>

        </div>
      </div>
    </section>
  );
};
