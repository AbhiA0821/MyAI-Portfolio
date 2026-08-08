import React, { useState, useEffect } from 'react';
import { Bot, Sparkles, Code2, Briefcase, User, Cpu, LayoutDashboard, GitBranch, Menu, X, ChevronDown } from 'lucide-react';
import type { TargetRole } from '../../types/portfolio';

interface NavbarProps {
  selectedRole: TargetRole;
  onSelectRole: (role: TargetRole) => void;
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ selectedRole, onSelectRole, onOpenChat }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Engineering', href: '#capabilities', icon: Cpu },
    { name: 'Projects', href: '#projects', icon: Code2 },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'GitHub', href: '#github', icon: GitBranch },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Career Intel', href: '#career', icon: Sparkles },
    { name: 'Admin', href: '#admin', icon: LayoutDashboard }
  ];

  const roles: TargetRole[] = ['AI Engineer', 'ML Engineer', 'Data Engineer', 'Data Scientist'];

  return (
    <>
      {/* Floating Centered Glassmorphic Navbar (Desktop) */}
      <nav className="fixed top-6 left-0 right-0 z-50 hidden lg:flex justify-center pointer-events-none px-6">
        <div className="relative rounded-full px-4 py-2 flex items-center gap-4 pointer-events-auto shadow-2xl bg-[#0F0E0E]/60 backdrop-blur-xl border border-white/10">
          
          {/* Animated Spinning Conic Border */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full p-[1px]">
            <div className="absolute left-1/2 top-1/2 w-[180%] aspect-square -translate-x-1/2 -translate-y-1/2 animate-navbar-border-spin bg-[conic-gradient(from_0deg,#3B82F6,rgba(139,92,246,0.3)_25%,rgba(236,72,153,0.3)_75%,#3B82F6)] opacity-40"></div>
          </div>

          {/* Logo Pill */}
          <a href="#" className="relative z-10 flex items-center gap-2 pr-2 border-r border-white/10 group">
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:rotate-12 transition-transform">
              <Bot className="w-4 h-4" />
            </div>
            <span className="font-heading font-bold text-xs tracking-tight text-white">
              MyAI<span className="gradient-text">Portfolio</span>
            </span>
          </a>

          {/* Role Dropdown Selector */}
          <div className="relative z-10">
            <button
              onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
              className="px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] text-xs font-mono text-slate-200 flex items-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>{selectedRole}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {roleDropdownOpen && (
              <div className="absolute top-full mt-2 left-0 w-44 bg-[#0F0E0E] border border-slate-800 rounded-xl p-1.5 shadow-2xl space-y-1 z-50">
                <span className="text-[9px] font-mono text-slate-500 px-2 py-1 block uppercase">Select Profile Mode:</span>
                {roles.map((role) => (
                  <button
                    key={role}
                    onClick={() => {
                      onSelectRole(role);
                      setRoleDropdownOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                      selectedRole === role
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-slate-300 hover:bg-slate-900'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Nav Links */}
          <div className="relative z-10 flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              >
                <link.icon className="w-3.5 h-3.5 text-slate-400" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* Ask MyAI Trigger Button */}
          <button
            onClick={onOpenChat}
            className="relative z-10 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold hover:opacity-95 transition-all shadow-md shadow-blue-500/20 flex items-center gap-1.5 group"
          >
            <Bot className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            <span>Ask MyAI</span>
          </button>

        </div>
      </nav>

      {/* Mobile Top Navbar */}
      <nav className="fixed top-4 left-0 right-0 z-50 px-4 lg:hidden">
        <div className="relative backdrop-blur-xl rounded-full px-4 py-2 shadow-lg flex justify-between items-center bg-[#0F0E0E]/80 border border-white/10">
          <a href="#" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <Bot className="w-4 h-4" />
            </div>
            <span className="font-heading font-bold text-xs text-white">MyAI Portfolio</span>
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenChat}
              className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center gap-1"
            >
              <Bot className="w-3 h-3" />
              <span>Ask AI</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 z-40 bg-[#0F0E0E]/95 backdrop-blur-xl border-b border-slate-800 px-4 py-4 space-y-4 shadow-2xl">
          <div className="space-y-1">
            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">TARGET PROFILE ROLE:</p>
            <div className="grid grid-cols-2 gap-2">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => {
                    onSelectRole(role);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono text-center ${
                    selectedRole === role
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-slate-900 text-slate-400 border border-slate-800'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-slate-200 text-xs font-medium py-2 px-2 hover:bg-slate-900 rounded-lg"
              >
                <link.icon className="w-4 h-4 text-blue-400" />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
