import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, ArrowRight, AlertCircle } from 'lucide-react';

interface AdminLoginProps {
  onLoginSuccess: (token: string, adminProfile: any) => void;
}

const API_BASE = 'http://localhost:8000/api/v1/admin';

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!email.trim() || !password.trim()) {
      setErrorMsg('Please enter both admin email and password.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password })
      });

      if (res.ok) {
        const data = await res.json();
        sessionStorage.setItem('myai_admin_token', data.token);
        onLoginSuccess(data.token, data);
      } else {
        const err = await res.json();
        setErrorMsg(err.detail || '401 Unauthorized: Invalid credentials.');
      }
    } catch {
      setErrorMsg('Unable to connect to authentication server. Verify backend status.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4 bg-[#050505]">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-[#0A0A1A] border border-slate-800 shadow-2xl shadow-black space-y-6 text-center relative overflow-hidden"
      >
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-purple-600/20 blur-3xl pointer-events-none" />

        <div className="w-14 h-14 rounded-2xl bg-purple-950/80 border border-purple-800/80 text-purple-400 flex items-center justify-center mx-auto shadow-lg shadow-purple-950/50">
          <Lock className="w-7 h-7 stroke-[1.75]" />
        </div>

        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-purple-400 font-bold block">
            PRIVATE ACCESS ONLY
          </span>
          <h1 className="text-2xl font-extrabold text-white font-heading tracking-tight">
            MyAI Administration
          </h1>
          <p className="text-xs font-mono text-slate-400">
            Secure Backend Authentication Gateway
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left pt-2">
          <div>
            <label className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
              Admin Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ainapureabhi0821@gmail.com"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 font-mono transition-colors"
            />
          </div>

          <div>
            <label className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter secure password..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 font-mono transition-colors"
            />
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-950/80 border border-red-800/80 text-red-300 text-xs font-mono flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
              <span>{errorMsg}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-purple-600/25"
          >
            <span>{loading ? 'AUTHENTICATING...' : 'SIGN IN TO CONTROL CENTER'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-4 border-t border-slate-900 text-[10px] font-mono text-slate-500 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-slate-600" /> Protected /admin route
          </span>
          <span>HTTP-Only Session</span>
        </div>
      </motion.div>
    </div>
  );
};
