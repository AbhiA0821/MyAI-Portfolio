import React, { useState, useEffect } from 'react';
import { Bot, Sparkles, Code2, Briefcase, User, FileText, Cpu, LayoutDashboard, Menu, X } from 'lucide-react';
import { TargetRole } from '../../types/portfolio';

interface NavbarProps {
  selectedRole: TargetRole;
  onSelectRole: (role: TargetRole) => void;
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ selectedRole, onSelectRole, onOpenChat }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Projects', href: '#projects', icon: Code2 },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Career Intel', href: '#career', icon: Sparkles },
    { name: 'Admin', href: '#admin', icon: LayoutDashboard }
  ];

  const roles: TargetRole[] = ['AI Engineer', 'ML Engineer', 'Data Engineer', 'Data Scientist'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-[#0B0F17]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 p-[1px] shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0B0F17] rounded-[11px] flex items-center justify-center">
              <Bot className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div>
            <span className="font-heading text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              MyAI<span className="gradient-text">Portfolio</span>
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">Multi-Agent Engine</span>
            </div>
          </div>
        </a>

        {/* Target Role Selector Pills (Desktop) */}
        <div className="hidden lg:flex items-center bg-slate-900/80 border border-slate-800 rounded-full p-1 shadow-inner">
          <span className="text-xs font-mono text-slate-400 px-3 py-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" /> Mode:
          </span>
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => onSelectRole(role)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                selectedRole === role
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <link.icon className="w-4 h-4 text-slate-400" />
              {link.name}
            </a>
          ))}
          
          {/* Ask MyAI Trigger Button */}
          <button
            onClick={onOpenChat}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold hover:opacity-95 transition-all shadow-md shadow-blue-500/20 flex items-center gap-2 group"
          >
            <Bot className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Ask MyAI</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenChat}
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold flex items-center gap-1.5"
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Ask AI</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F17]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-4">
          <div className="space-y-1">
            <p className="text-xs font-mono text-slate-400 px-2 mb-2">TARGET CAREER ROLE:</p>
            <div className="grid grid-cols-2 gap-2">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => {
                    onSelectRole(role);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium text-center ${
                    selectedRole === role
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-900 text-slate-400 border border-slate-800'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
          <div className="pt-2 border-t border-slate-800 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-slate-200 text-sm font-medium py-2 px-2 hover:bg-slate-800 rounded-lg"
              >
                <link.icon className="w-4 h-4 text-blue-400" />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
