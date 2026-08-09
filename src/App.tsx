import { useState, useEffect } from 'react';
import {
  profileData,
  skillCategoriesData,
  projectsData,
  experienceData,
  educationData,
  githubStatsData,
  statsData,
  expertiseData
} from './data/portfolioData';

import { CustomCursor } from './components/common/CustomCursor';
import { IntroLoader } from './components/common/IntroLoader';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { TextMarqueeStrip } from './components/common/TextMarqueeStrip';
import { StatsSection } from './components/sections/StatsSection';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { ExpertiseSection } from './components/sections/ExpertiseSection';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ArsenalMarquee } from './components/sections/ArsenalMarquee';
import { Projects } from './components/sections/Projects';
import { GitHubSection } from './components/sections/GitHubSection';
import { ScrollWorkflow } from './components/sections/ScrollWorkflow';
import { SystemShowcase } from './components/sections/SystemShowcase';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { ChatWidget } from './components/ai/ChatWidget';
import { ResumeModal } from './components/sections/ResumeModal';
import { SectionTransition } from './components/motion/SectionTransition';
import { Bot, Mail, ArrowUpRight, Lock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './components/common/SocialIcons';

const marqueeStrip1 = [
  "MACHINE LEARNING",
  "GENERATIVE AI",
  "RAG",
  "MULTI-AGENT SYSTEMS",
  "PYSPARK",
  "DATA ENGINEERING",
  "LLM APPLICATIONS",
  "OLLAMA",
  "FASTAPI"
];

const marqueeStrip2 = [
  "PYTHON",
  "FASTAPI",
  "LANGGRAPH",
  "CHROMADB",
  "OLLAMA",
  "DUCKDB",
  "AIRFLOW",
  "REACT 19",
  "TYPESCRIPT"
];

export function App() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAdminView, setIsAdminView] = useState(false);

  // Check URL pathname for /admin or /admin/login
  useEffect(() => {
    const handleOpenChat = () => setIsChatOpen(true);
    window.addEventListener('open-chat-widget', handleOpenChat);

    const path = window.location.pathname.toLowerCase();
    if (path.startsWith('/admin')) {
      setIsAdminView(true);
    }

    const handlePopState = () => {
      if (window.location.pathname.toLowerCase().startsWith('/admin')) {
        setIsAdminView(true);
      } else {
        setIsAdminView(false);
      }
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('open-chat-widget', handleOpenChat);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      
      {/* Intelligent Custom Cursor */}
      <CustomCursor />

      {/* 01. CINEMATIC INTRO (5.0 Seconds Exactly) */}
      {!isIntroComplete && !isAdminView && (
        <IntroLoader onComplete={() => setIsIntroComplete(true)} />
      )}

      {/* Sticky Personal Navigation Header (Public Website) */}
      {!isAdminView && (
        <Navbar
          onOpenChat={() => setIsChatOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      )}

      {/* Main Flow Render */}
      <main>
        {isAdminView ? (
          <div className="min-h-screen bg-[#050505] text-slate-100 pt-6">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
                  Private Administration Control Gateway (/admin)
                </span>
              </div>
              <button
                onClick={() => {
                  window.history.pushState({}, '', '/');
                  setIsAdminView(false);
                }}
                className="text-xs font-mono text-slate-400 hover:text-white underline cursor-pointer"
              >
                ← Return to Public Portfolio
              </button>
            </div>
            {/* Private Admin Control Center */}
            <AdminDashboard />
          </div>
        ) : (
          <>
            {/* 02. HERO */}
            <Hero
              profile={profileData}
              onOpenChat={() => setIsChatOpen(true)}
              onOpenResume={() => setIsResumeOpen(true)}
            />

            {/* Transition: Hero -> About */}
            <SectionTransition />
            <TextMarqueeStrip items={marqueeStrip1} direction="left" speed={30} />
            <StatsSection stats={statsData} />

            {/* 03. ABOUT */}
            <About profile={profileData} />

            {/* Transition: About -> Skills */}
            <SectionTransition />

            {/* 04. SKILLS */}
            <Skills skillCategories={skillCategoriesData} />
            <ExpertiseSection expertiseList={expertiseData} />

            {/* Transition: Skills -> Experience */}
            <SectionTransition />

            {/* 05. EXPERIENCE */}
            <Experience experiences={experienceData} />

            {/* 06. EDUCATION */}
            <Education education={educationData} />

            {/* 07. CERTIFICATIONS */}
            <CertificationsSection />

            {/* Technology Arsenal Marquee */}
            <ArsenalMarquee />

            {/* Transition: Certifications -> Projects */}
            <SectionTransition />

            {/* 08. FEATURED PROJECTS */}
            <Projects projects={projectsData} />

            {/* Transition: Projects -> GitHub */}
            <SectionTransition />

            {/* 09. GITHUB */}
            <GitHubSection stats={githubStatsData} />

            {/* Transition: GitHub -> MyAI */}
            <SectionTransition />

            {/* 10. MYAI */}
            <ScrollWorkflow />
            <SystemShowcase />

            {/* Transition: MyAI -> Contact */}
            <SectionTransition />
            <TextMarqueeStrip items={marqueeStrip2} direction="right" speed={35} />
          </>
        )}
      </main>

      {/* Floating MyAI Chatbot Assistant */}
      {!isAdminView && (
        <ChatWidget
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
        />
      )}

      {/* Resume Preview Modal */}
      <ResumeModal
        profile={profileData}
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* 11. CONTACT */}
      {!isAdminView && (
        <footer id="contact" className="py-16 bg-[#050505] border-t border-slate-800/80 text-center text-xs font-mono text-slate-400 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 space-y-8 relative z-10">
            
            {/* Final CTA Card */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/60 via-[#0A0A1A] to-purple-950/60 border border-slate-800 shadow-2xl text-center space-y-4">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
                Let's Build Intelligent Systems.
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
                Open to high-impact Machine Learning, Generative AI, and Data Engineering opportunities globally.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={scrollToProjects}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg shadow-blue-500/20 cursor-pointer"
                >
                  <span>EXPLORE PROJECTS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setIsChatOpen(true)}
                  className="px-6 py-3 rounded-xl bg-[#0A0A1A] border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Bot className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ASK MYAI</span>
                </button>

                <a
                  href={`mailto:${profileData.email}`}
                  className="px-6 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white font-semibold text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-purple-400" />
                  <span>GET IN TOUCH</span>
                </a>
              </div>
            </div>

            {/* Social Links & Copyright */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-900">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-blue-400" />
                <span className="font-bold text-slate-300">ABHISHEK AINAPURE</span>
                <span>• Portfolio</span>
              </div>

              <div className="flex items-center gap-4 text-slate-400">
                <a href={profileData.githubUrl} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1">
                  <GithubIcon className="w-3.5 h-3.5" /> GitHub
                </a>
                <a href={profileData.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1">
                  <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
                </a>
              </div>

              <p>© {new Date().getFullYear()} Abhishek Ainapure. Zero-Cost Architecture.</p>
            </div>

          </div>
        </footer>
      )}

    </div>
  );
}

export default App;
