import React from 'react';
import { motion } from 'framer-motion';
import { Bot, FileText, Sparkles, GraduationCap } from 'lucide-react';
import type { Profile } from '../../types/portfolio';
import { RevealText } from '../motion/RevealText';
import { MagneticButton } from '../motion/MagneticButton';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';

interface HeroProps {
  profile: Profile;
  onOpenChat: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenChat, onOpenResume }) => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050505] border-b border-slate-800/80">
      
      {/* Dynamic Ambient Light Leaks */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-purple-600/15 to-cyan-500/10 blur-[170px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-8">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-slate-300 font-semibold">
            B.Tech AI & Data Science Student
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-xs font-mono text-cyan-400 font-medium">
            Ichalkaranji, Maharashtra
          </span>
        </motion.div>

        {/* Main Headline Reveal */}
        <div className="space-y-3 max-w-4xl mx-auto">
          <RevealText
            text="Abhishek Ainapure"
            as="h1"
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-heading leading-tight justify-center"
          />
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-heading"
          >
            AI Engineer | Generative AI | Machine Learning | Data Engineering
          </motion.div>
        </div>

        {/* Professional Summary */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
        >
          B.Tech Artificial Intelligence and Data Science student at Annasaheb Dange College of Engineering & Technology building practical AI applications, RAG pipelines, machine learning solutions, and scalable data engineering pipelines.
        </motion.p>

        {/* Core Pillars Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-2 pt-1 font-mono text-xs"
        >
          <span className="px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/80 text-blue-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Generative AI & RAG
          </span>
          <span className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/80 text-purple-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Machine Learning & PyTorch
          </span>
          <span className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/80 text-cyan-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> PySpark & Airflow ETL
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-400" /> CGPA: 8.26 / 10
          </span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <MagneticButton
            onClick={onOpenResume}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs font-mono flex items-center gap-2 shadow-xl shadow-blue-500/25 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-white" />
            <span>VIEW RESUME</span>
          </MagneticButton>

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-xs font-mono flex items-center gap-2 cursor-pointer transition-colors shadow-lg"
          >
            <GithubIcon className="w-4 h-4 text-slate-200" />
            <span>GITHUB</span>
          </a>

          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-xs font-mono flex items-center gap-2 cursor-pointer transition-colors shadow-lg"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-400" />
            <span>LINKEDIN</span>
          </a>

          <MagneticButton
            onClick={onOpenChat}
            className="px-5 py-3 rounded-xl bg-[#0A0A1A] border border-slate-700 hover:border-cyan-500 text-slate-200 hover:text-white font-semibold text-xs font-mono flex items-center gap-2 backdrop-blur-xl shadow-lg cursor-pointer"
          >
            <Bot className="w-4 h-4 text-cyan-400" />
            <span>ASK MYAI</span>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
};

