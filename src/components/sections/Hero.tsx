import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Terminal, FileText, ArrowRight, Database, Cpu } from 'lucide-react';
import type { Profile } from '../../types/portfolio';

interface HeroProps {
  profile: Profile;
  onOpenChat: () => void;
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onOpenChat,
  onOpenResume
}) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050505]">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Atmospheric Light Leaks (Purple & Cyan Radial Glows) */}
      <div className="absolute top-1/4 left-1/6 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-[450px] h-[450px] bg-cyan-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A1A] border border-slate-800 backdrop-blur-md shadow-lg shadow-black/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono text-slate-300 font-medium tracking-wide">
                AI & DATA SCIENCE SPECIALIST • {profile.availability}
              </span>
            </div>

            {/* Main Title & Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1] mb-4">
                Hello, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>

              <p className="text-xl sm:text-2xl font-semibold text-slate-200 leading-snug">
                Building intelligent systems with Machine Learning, Generative AI and modern data technologies.
              </p>
            </div>

            {/* Profile Bio */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Experienced in engineering production RAG search engines, multi-agent frameworks, PySpark ETL pipelines, and high-throughput FastAPI backends.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm flex items-center gap-2 shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenChat}
                className="px-6 py-3.5 rounded-xl bg-[#0A0A1A] border border-slate-700/80 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-black/50 backdrop-blur-md transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>ASK MYAI</span>
              </button>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="px-5 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-slate-400" />
                  <span>VIEW RESUME</span>
                </button>
              )}
            </div>

          </motion.div>

          {/* Right Visual Element (2.5D Layered Preview Cards) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/4] max-w-lg mx-auto flex items-center justify-center">
              
              {/* Back Card (Layer 1) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left-4 right-8 bottom-12 p-6 rounded-2xl bg-[#0A0A1A]/80 border border-slate-800/80 backdrop-blur-xl shadow-2xl space-y-4 pointer-events-none opacity-60 transform -rotate-3"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                  <Database className="w-4 h-4" />
                  <span>Distributed PySpark & DuckDB Engine</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 w-3/4" />
                <div className="h-2 rounded-full bg-slate-800 w-1/2" />
              </motion.div>

              {/* Middle Card (Layer 2) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-10 left-8 right-4 bottom-6 p-6 rounded-2xl bg-[#0A0A1A]/90 border border-purple-500/30 backdrop-blur-xl shadow-2xl space-y-4 pointer-events-none transform rotate-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <Bot className="w-4 h-4" />
                    <span>MyAI Multi-Agent System</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
                    5 NODES ACTIVE
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span>Intent Router</span>
                    <span className="text-purple-400">Classified</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="w-4/5 h-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                  </div>
                </div>
              </motion.div>

              {/* Front Card (Main 2.5D Layer) */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full p-6 rounded-2xl bg-[#0A0A1A] border border-cyan-500/40 backdrop-blur-2xl shadow-2xl shadow-black space-y-5 transform hover:shadow-cyan-500/20"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-mono font-bold uppercase text-white">
                        MedIntel Clinical RAG
                      </h3>
                      <p className="text-[10px] font-mono text-slate-400">PubMed & Vector Pipeline</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-950 text-blue-300 border border-blue-800">
                    Precision 92.1%
                  </span>
                </div>

                <div className="space-y-2 text-xs font-mono text-slate-300">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <span>Embedding Index:</span>
                    <span className="text-cyan-400">FastEmbed Dense</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <span>Query Throughput:</span>
                    <span className="text-purple-400">120 QPS</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" /> Grounded Generation
                  </span>
                  <span className="text-blue-400">PySpark + DuckDB</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
