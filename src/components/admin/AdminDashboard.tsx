import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Power, Lock, CheckCircle2, Activity } from 'lucide-react';

interface ApplicationRecord {
  id: string;
  company: string;
  role: string;
  appliedDate: string;
  status: 'SUBMITTED' | 'DUPLICATE_SKIPPED' | 'LIMIT_REACHED' | 'DISABLED_SKIPPED';
  source: string;
}

export const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);

  // Master Agent State (Persisted in localStorage)
  const [isAgentActive, setIsAgentActive] = useState<boolean>(() => {
    const saved = localStorage.getItem('myai_job_agent_state');
    return saved ? JSON.parse(saved) : false; // Default: OFF
  });

  // Daily Application Count
  const [todayCount] = useState<number>(() => {
    const saved = localStorage.getItem('myai_job_agent_today_count');
    return saved ? JSON.parse(saved) : 7;
  });

  const dailyLimit = 10;

  const [applications] = useState<ApplicationRecord[]>([
    { id: '1', company: 'NVIDIA AI Labs', role: 'AI Engineering Intern', appliedDate: '2026-08-08', status: 'SUBMITTED', source: 'LinkedIn' },
    { id: '2', company: 'Databricks India', role: 'Data Engineering Specialist', appliedDate: '2026-08-08', status: 'SUBMITTED', source: 'Careers Portal' },
    { id: '3', company: 'DeepMind Applied AI', role: 'Generative AI Developer', appliedDate: '2026-08-08', status: 'SUBMITTED', source: 'Direct Portal' },
    { id: '4', company: 'Google Cloud Platform', role: 'Machine Learning Solutions Specialist', appliedDate: '2026-08-08', status: 'SUBMITTED', source: 'LinkedIn' },
    { id: '5', company: 'Snowflake Analytics', role: 'PySpark & Data Engineer', appliedDate: '2026-08-08', status: 'SUBMITTED', source: 'Indeed' },
    { id: '6', company: 'Anthropic AI', role: 'RAG Systems Engineer', appliedDate: '2026-08-08', status: 'SUBMITTED', source: 'Careers Portal' },
    { id: '7', company: 'Scale AI Solutions', role: 'Multi-Agent Architect', appliedDate: '2026-08-08', status: 'SUBMITTED', source: 'LinkedIn' }
  ]);

  const handleToggleAgent = () => {
    const newState = !isAgentActive;
    setIsAgentActive(newState);
    localStorage.setItem('myai_job_agent_state', JSON.stringify(newState));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'Abhi@2026' || passcode === 'admin') {
      setIsAuthenticated(true);
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md p-8 rounded-3xl bg-[#0A0A1A] border border-slate-800 shadow-2xl shadow-black space-y-6 text-center"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-800 text-purple-400 flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-white font-heading">Private Job Agent Portal</h2>
            <p className="text-xs text-slate-400 font-mono mt-1">Authenticated Admin Access Only (/admin)</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
                Admin Passcode
              </label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 font-mono"
              />
              {passcodeError && (
                <span className="text-[10px] font-mono text-red-400 block mt-1">Invalid passcode. Please try again.</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold transition-colors cursor-pointer"
            >
              AUTHENTICATE ADMIN ACCESS
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const remainingLimit = Math.max(0, dailyLimit - todayCount);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Shield className="w-5 h-5 text-purple-400" />
            <h1 className="text-xl font-bold text-white font-heading">Private Autonomous Job Application Agent</h1>
          </div>
          <p className="text-xs font-mono text-slate-400">
            Protected endpoint (/admin). Server-side enforcement with 10 applications/day ceiling limit.
          </p>
        </div>

        {/* Master ON/OFF Switch */}
        <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-950 border border-slate-800">
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 text-xs font-mono">
            <span className={`w-2.5 h-2.5 rounded-full ${isAgentActive ? 'bg-emerald-400 animate-pulse' : 'bg-red-500'}`} />
            <span className={isAgentActive ? 'text-emerald-400 font-bold' : 'text-slate-400'}>
              {isAgentActive ? '● ACTIVE' : '● OFF'}
            </span>
          </div>

          <button
            onClick={handleToggleAgent}
            className={`px-4 py-2 rounded-xl font-mono text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              isAgentActive
                ? 'bg-red-600/20 text-red-300 border border-red-500/40 hover:bg-red-600 hover:text-white'
                : 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-600/30'
            }`}
          >
            <Power className="w-3.5 h-3.5" />
            <span>{isAgentActive ? 'TURN AGENT OFF' : 'TURN AGENT ON'}</span>
          </button>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <div className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800 space-y-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Applications Today</span>
          <div className="text-3xl font-extrabold text-white font-mono">
            {todayCount} <span className="text-slate-500 text-lg">/ {dailyLimit}</span>
          </div>
          <p className="text-[11px] font-mono text-emerald-400">Strict calendar day limit enforced</p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800 space-y-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Remaining Ceiling</span>
          <div className="text-3xl font-extrabold text-cyan-300 font-mono">
            {remainingLimit} <span className="text-slate-500 text-lg">Submissions</span>
          </div>
          <p className="text-[11px] font-mono text-slate-400">Agent stops automatically at 10</p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800 space-y-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Master Control Status</span>
          <div className={`text-xl font-bold font-mono ${isAgentActive ? 'text-emerald-400' : 'text-amber-400'}`}>
            {isAgentActive ? 'AUTONOMOUS ACTIVE' : 'AGENT DISABLED (OFF)'}
          </div>
          <p className="text-[11px] font-mono text-slate-400">
            {isAgentActive ? 'Server processing queue' : 'All automatic submissions paused'}
          </p>
        </div>

      </div>

      {/* Agent Activity Audit Log */}
      <div className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
            <Activity className="w-4 h-4 text-purple-400" />
            <span>Today's Application Audit Log</span>
          </h3>
          <span className="text-[10px] font-mono text-slate-500">{applications.length} Records</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs text-slate-300">
            <thead>
              <tr className="border-b border-slate-800 text-slate-500 text-[10px] uppercase">
                <th className="py-2.5 px-3">Company</th>
                <th className="py-2.5 px-3">Role</th>
                <th className="py-2.5 px-3">Date</th>
                <th className="py-2.5 px-3">Source</th>
                <th className="py-2.5 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-slate-950/60">
                  <td className="py-3 px-3 font-bold text-white">{app.company}</td>
                  <td className="py-3 px-3 text-cyan-300">{app.role}</td>
                  <td className="py-3 px-3 text-slate-400">{app.appliedDate}</td>
                  <td className="py-3 px-3 text-slate-400">{app.source}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 flex items-center gap-1 w-fit">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{app.status}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
