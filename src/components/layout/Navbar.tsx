import React, { useState } from 'react';
import { Bot, Menu, X, Shield, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenChat: () => void;
  onOpenAdmin?: () => void;
  onOpenResume?: () => void;
}

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#timeline' },
  { name: 'MyAI', href: '#inside-myai' },
  { name: 'Contact', href: '#contact' }
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenChat,
  onOpenAdmin,
  onOpenResume
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/85 backdrop-blur-xl border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  ABHISHEK <span className="text-blue-400 font-mono font-normal">AINAPURE</span>
                </span>
                <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest -mt-1">
                  AI & Data Science
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-blue-400 transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono text-slate-300 hover:text-white border border-slate-800 hover:border-slate-600 transition-all cursor-pointer"
              >
                RESUME
              </button>
            )}

            <button
              onClick={onOpenChat}
              className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask MyAI</span>
            </button>

            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                title="Private Job Agent Admin"
                className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
              >
                <Shield className="w-4 h-4 text-purple-400" />
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
              >
                <Shield className="w-4 h-4 text-purple-400" />
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050505]/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 backdrop-blur-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 text-sm font-mono text-slate-300 hover:text-blue-400 border-b border-slate-900"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ask MyAI</span>
            </button>

            {onOpenResume && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs font-semibold"
              >
                RESUME
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
