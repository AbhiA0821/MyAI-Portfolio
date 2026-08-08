import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, FileText, ArrowRight, Database } from 'lucide-react';
import type { Profile } from '../../types/portfolio';
import { RevealText } from '../motion/RevealText';
import { MagneticButton } from '../motion/MagneticButton';
import { ParallaxElement } from '../motion/ParallaxElement';

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
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <MagneticButton
                onClick={scrollToProjects}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs font-mono flex items-center gap-2 shadow-xl shadow-blue-500/25 cursor-pointer"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                onClick={onOpenChat}
                className="px-6 py-3.5 rounded-xl bg-[#0A0A1A] border border-slate-700 hover:border-cyan-500 text-slate-200 hover:text-white font-semibold text-xs font-mono flex items-center gap-2 backdrop-blur-xl shadow-xl cursor-pointer"
              >
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>ASK MYAI</span>
              </MagneticButton>

              <MagneticButton
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold text-xs font-mono flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>VIEW RESUME</span>
              </MagneticButton>
            </motion.div>

          </div>

          {/* Right Column: 2.5D Layered Preview Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <ParallaxElement speed={-20} className="w-full">
              <div className="relative space-y-4">
                
                {/* 2.5D Floating Card 1: MedIntel RAG Status */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="p-5 rounded-2xl bg-[#0A0A1A] border border-slate-800/90 shadow-2xl backdrop-blur-xl space-y-2 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      MedIntel RAG Pipeline
                    </span>
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                      92.1% Precision@5
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 font-semibold">Clinical Knowledge PubMed Abstract Vector Search</p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['PySpark', 'FastEmbed', 'DuckDB', 'FastAPI'].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* 2.5D Floating Card 2: Multi-Agent Engine */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="p-5 rounded-2xl bg-[#0A0A1A] border border-purple-500/40 shadow-2xl backdrop-blur-xl space-y-2 relative lg:-translate-x-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-purple-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5" />
                      MyAI Multi-Agent Engine
                    </span>
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-purple-950 text-purple-300 border border-purple-800 animate-pulse">
                      5 Agent Nodes Active
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 font-semibold">Master Intent Orchestrator & RAG Retriever</p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Ollama Qwen2.5', 'ChromaDB', 'Intent Router', 'React 19'].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* 2.5D Floating Card 3: Distributed Data Engine */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="p-5 rounded-2xl bg-[#0A0A1A] border border-slate-800/90 shadow-2xl backdrop-blur-xl space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5" />
                      PySpark Data Engine
                    </span>
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800">
                      Delta Lake Parquet
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 font-semibold">Distributed Event Streaming & ETL Transformations</p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Apache Spark', 'SQL', 'PostgreSQL', 'Airflow'].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>

              </div>
            </ParallaxElement>

          </div>

        </div>
      </div>
    </section>
  );
};
