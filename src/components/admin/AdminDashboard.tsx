import React, { useState } from 'react';
import { LayoutDashboard, Lock } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);

  const sampleApplications = [
    {
      id: 'app-101',
      company: 'TechAI Corp',
      role: 'Senior AI Engineer',
      matchScore: '94.2%',
      status: 'Ready',
      method: 'Permitted Career API',
      verified: true,
      timestamp: 'Today 10:15 AM'
    },
    {
      id: 'app-102',
      company: 'DataStream Systems',
      role: 'Data Engineer (PySpark)',
      matchScore: '89.5%',
      status: 'Verified',
      method: 'Official Portal',
      verified: true,
      timestamp: 'Today 08:30 AM'
    },
    {
      id: 'app-103',
      company: 'ML Health Labs',
      role: 'ML Engineer (RAG)',
      matchScore: '91.8%',
      status: 'Discovered',
      method: 'Verified Feed',
      verified: true,
      timestamp: 'Yesterday'
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'admin' || passcode === '1234' || passcode === 'abhi') {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <section id="admin" className="py-20 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono mb-2">
              <LayoutDashboard className="w-3.5 h-3.5 text-blue-400" /> PRIVATE CONTROL DASHBOARD
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Application Tracker & <span className="gradient-text">Agent Audit Logs</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
              Safety Cap: 3/10 Applied Today
            </span>
          </div>
        </div>

        {!authenticated ? (
          /* Private Unlock Form */
          <div className="max-w-md mx-auto glass-panel p-8 rounded-2xl border border-slate-800 text-center space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-blue-400">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Private Admin Access</h3>
            <p className="text-xs text-slate-400">Enter passcode to view internal application tracker & agent logs.</p>

            <form onSubmit={handleLogin} className="space-y-3">
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode (e.g. admin)"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white text-center focus:outline-none focus:border-blue-500"
              />
              {error && <p className="text-[11px] text-rose-400 font-mono">Invalid passcode. Try 'admin'</p>}
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md shadow-blue-500/20"
              >
                Unlock Dashboard
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div className="space-y-6 animate-fade-in">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-xs font-mono text-slate-400">Total Tracked</span>
                <span className="text-2xl font-bold text-white font-mono block">14</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-xs font-mono text-slate-400">Applied Today</span>
                <span className="text-2xl font-bold text-emerald-400 font-mono block">3 / 10</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-xs font-mono text-slate-400">Avg Match Score</span>
                <span className="text-2xl font-bold text-blue-400 font-mono block">91.8%</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-xs font-mono text-slate-400">Agent Runs</span>
                <span className="text-2xl font-bold text-purple-400 font-mono block">128</span>
              </div>
            </div>

            {/* Table */}
            <div className="glass-panel rounded-2xl border border-slate-800 overflow-x-auto">
              <table className="w-full text-left text-xs font-mono text-slate-300">
                <thead className="bg-slate-900/80 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-800">
                  <tr>
                    <th className="p-3">Company</th>
                    <th className="p-3">Role</th>
                    <th className="p-3">Match</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Method</th>
                    <th className="p-3">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {sampleApplications.map((app) => (
                    <tr key={app.id} className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3 font-semibold text-white">{app.company}</td>
                      <td className="p-3 text-slate-300">{app.role}</td>
                      <td className="p-3 font-bold text-blue-400">{app.matchScore}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                          {app.status}
                        </span>
                      </td>
                      <td className="p-3 text-slate-400">{app.method}</td>
                      <td className="p-3 text-slate-500">{app.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
