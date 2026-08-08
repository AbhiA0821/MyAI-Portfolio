import React from 'react';
import { GraduationCap, Target, Cpu, Award } from 'lucide-react';
import type { Profile } from '../../types/portfolio';
import { RevealText } from '../motion/RevealText';
import { TiltCard } from '../motion/TiltCard';
import { ParallaxElement } from '../motion/ParallaxElement';

interface AboutProps {
  profile: Profile;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden border-b border-slate-800/80">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium">
            <span>ABOUT & BACKGROUND</span>
          </div>
          <RevealText
            text="ENGINEERING IDENTITY & CORE FOCUS"
            as="h2"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-heading justify-center"
          />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging theoretical data science, machine learning models, and production-grade software engineering.
          </p>
        </div>

        {/* Bento Grid with 3D Tilt Cards */}
        <ParallaxElement speed={15}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Card 1: Identity & Degree */}
            <TiltCard className="md:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#0A0A1A] border border-slate-800/90 backdrop-blur-xl shadow-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-950/80 border border-blue-800 text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">Academic & Professional Identity</h3>
                  <p className="text-xs font-mono text-purple-400">B.Tech Computer Science & Data Science • First Class Distinction</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {profile.bio}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300">
                  📍 {profile.location}
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-400">
                  ⚡ {profile.availability}
                </span>
              </div>
            </TiltCard>

            {/* Card 2: Active Technical Focus */}
            <TiltCard className="md:col-span-4 p-6 sm:p-8 rounded-3xl bg-[#0A0A1A] border border-slate-800/90 backdrop-blur-xl shadow-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-purple-950/80 border border-purple-800 text-purple-400">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">Current Focus</h3>
                  <p className="text-xs font-mono text-slate-400">2026 Core Initiatives</p>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs font-mono text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Autonomous Multi-Agent Routing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Dense Vector RAG Grounding</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>PySpark Streaming Data Lakes</span>
                </li>
              </ul>
            </TiltCard>

            {/* Card 3: System Philosophy */}
            <TiltCard className="md:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#0A0A1A] border border-slate-800/90 backdrop-blur-xl shadow-2xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-cyan-950/80 border border-cyan-800 text-cyan-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading">Engineering Philosophy</h3>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                "AI systems must be grounded in verified data, low-latency API contracts, and deterministic fallbacks. Model execution is only as strong as the data pipelines supporting it."
              </p>
            </TiltCard>

            {/* Card 4: Verified Specializations */}
            <TiltCard className="md:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#0A0A1A] border border-slate-800/90 backdrop-blur-xl shadow-2xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-950/80 border border-emerald-800 text-emerald-400">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading">Verified Competencies</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-purple-300">
                  Oracle OCI GenAI 2025
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-blue-300">
                  Oracle OCI Data Science 2025
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-cyan-300">
                  Infosys AI 2026
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-emerald-300">
                  Tecspeak SQL Internship
                </span>
              </div>
            </TiltCard>

          </div>
        </ParallaxElement>

      </div>
    </section>
  );
};
