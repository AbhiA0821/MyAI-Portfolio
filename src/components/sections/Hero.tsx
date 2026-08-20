import React from 'react';
import { motion } from 'framer-motion';
import { Bot, FileText, Sparkles, GraduationCap } from 'lucide-react';
import type { Profile } from '../../types/portfolio';
import { RevealText } from '../motion/RevealText';
import { MagneticButton } from '../motion/MagneticButton';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import profilePic from '../../assets/abhishek-profile.jpg';

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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
          
          {/* Left Side: Headline, Bio & Action CTAs */}
          <div className="md:col-span-7 lg:col-span-7 text-center md:text-left space-y-6">
            
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
            <div className="space-y-3">
              <RevealText
                text="Abhishek Ainapure"
                as="h1"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-tight justify-center md:justify-start"
              />
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-heading"
              >
                AI Engineer | Generative AI | Machine Learning | Data Engineering
              </motion.div>
            </div>

            {/* Professional Summary */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              B.Tech Artificial Intelligence and Data Science student at Annasaheb Dange College of Engineering & Technology building practical AI applications, RAG pipelines, machine learning solutions, and scalable data engineering pipelines.
            </motion.p>

            {/* Core Pillars Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 font-mono text-xs"
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
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2"
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

          {/* Right Side: Circular Profile Picture Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 lg:col-span-5 flex justify-center order-first md:order-last"
          >
            <div className="relative group">
              
              {/* Outer Glowing Gradient Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-700 group-hover:duration-200 animate-pulse" />
              
              {/* Circular Container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-76 lg:h-76 rounded-full p-1.5 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 shadow-2xl overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 border-2 border-slate-900">
                  <img
                    src={profilePic}
                    alt="Abhishek Ainapure"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Decorative Accent Tag */}
              <div className="absolute -bottom-2 right-2 sm:right-4 px-3.5 py-1.5 rounded-full bg-slate-900/95 border border-cyan-500/50 shadow-xl backdrop-blur-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-[11px] font-mono font-bold text-cyan-300">Abhishek Ainapure</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
