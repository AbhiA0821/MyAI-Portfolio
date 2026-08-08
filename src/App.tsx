import { useState } from 'react';
import type { TargetRole } from './types/portfolio';
import { profileData, skillCategoriesData, projectsData, experienceData, educationData, certificationsData, githubStatsData } from './data/portfolioData';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { EngineeringCapabilities } from './components/sections/EngineeringCapabilities';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { GitHubSection } from './components/sections/GitHubSection';
import { Experience } from './components/sections/Experience';
import { CareerIntelligence } from './components/career/CareerIntelligence';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { ChatWidget } from './components/ai/ChatWidget';
import { Bot } from 'lucide-react';

export function App() {
  const [selectedRole, setSelectedRole] = useState<TargetRole>('AI Engineer');
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        selectedRole={selectedRole}
        onSelectRole={setSelectedRole}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          profile={profileData}
          selectedRole={selectedRole}
          onOpenChat={() => setIsChatOpen(true)}
        />

        <About
          profile={profileData}
          selectedRole={selectedRole}
        />

        <EngineeringCapabilities />

        <Projects
          projects={projectsData}
          selectedRole={selectedRole}
        />

        <Skills
          skillCategories={skillCategoriesData}
          selectedRole={selectedRole}
        />

        <GitHubSection stats={githubStatsData} />

        <Experience
          experiences={experienceData}
          education={educationData}
          certifications={certificationsData}
          selectedRole={selectedRole}
        />

        <CareerIntelligence
          selectedRole={selectedRole}
          skillCategories={skillCategoriesData}
        />

        <AdminDashboard />
      </main>

      {/* Floating Chat Widget */}
      <ChatWidget
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        selectedRole={selectedRole}
      />

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-800/80 text-center text-xs font-mono text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-blue-400" />
            <span>MyAI Portfolio Engine • Multi-Agent System</span>
          </div>
          <p>© {new Date().getFullYear()} Abhishek Ainapure. Zero-Cost Architecture.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
