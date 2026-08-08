import React, { useState } from 'react';
import { LayoutDashboard, Lock, Power, Activity, Terminal } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);

  // Job Automation Agent State
  const [jobAgentEnabled, setJobAgentEnabled] = useState(false);
  const [dailyApplicationsCount, setDailyApplicationsCount] = useState(3);
  const maxDailyLimit = 10;

  const sampleApplications = [
    {
      id: 'app-101',
      company: 'TechAI Systems',
      role: 'Senior AI Engineer',
      jobUrl: 'https://careers.techai.com/jobs/101',
      source: 'Verified Company Portal',
      matchScore: '94.2%',
      status: 'Applied',
      method: 'Permitted API',
      verified: true,
      timestamp: 'Today 10:15 AM'
    },
    {
      id: 'app-102',
      company: 'DataStream Platform',
      role: 'Data Engineer (PySpark)',
      jobUrl: 'https://datastream.io/careers/402',
      source: 'Official Feed',
      matchScore: '89.5%',
      status: 'Applied',
      method: 'Supported Form',
      verified: true,
      timestamp: 'Today 08:30 AM'
    },
    {
      id: 'app-103',
      company: 'CloudML Inc',
      role: 'ML Engineer (RAG)',
      jobUrl: 'https://cloudml.ai/jobs/330',
      source: 'Verified Feed',
      matchScore: '91.8%',
      status: 'Applied',
      method: 'Permitted API',
      verified: true,
      timestamp: 'Yesterday'
    },
    {
      id: 'app-104',
      company: 'SecureBot Labs',
      role: 'Generative AI Specialist',
      jobUrl: 'https://securebot.io/jobs/505',
      source: 'External Portal',
      matchScore: '87.0%',
      status: 'Blocked',
      method: 'CAPTCHA Protected (Safety Stop)',
      verified: false,
      timestamp: 'Yesterday'
    }
  ];

  const auditLogs = [
    { time: "10:15:22 AM", level: "SUCCESS", message: "Job Agent applied to TechAI Systems [Senior AI Engineer] via Permitted API (Match: 94.2%). Application recorded." },
    { time: "09:40:10 AM", level: "WARN", message: "Job discovered at SecureBot Labs requires CAPTCHA bypass. Safety Guard triggered: Marked as BLOCKED." },
    { time: "08:30:05 AM", level: "SUCCESS", message: "Company DataStream Platform verified (Score: 0.92). Automated application submitted." },
    { time: "08:00:00 AM", level: "INFO", message: "Daily Job Application Agent cycle started. Rate limit enforced: 3 / 10." }
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Applied':
        return 'bg-emerald-950 text-emerald-300 border-emerald-800';
      case 'Verified':
        return 'bg-blue-950 text-blue-300 border-blue-800';
      case 'Discovered':
        return 'bg-purple-950 text-purple-300 border-purple-800';
      case 'Blocked':
        return 'bg-rose-950 text-rose-300 border-rose-800';
      case 'Failed':
        return 'bg-rose-950 text-rose-300 border-rose-800';
      default:
        return 'bg-slate-900 text-slate-400 border-slate-800';
    }
  };

  return (
    <section id="admin" className="py-20 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono mb-2">
              <LayoutDashboard className="w-3.5 h-3.5 text-blue-400" /> PRIVATE PERSONAL DASHBOARD
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Autonomous Job Agent & <span className="gradient-text">Application Tracker</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1.5 rounded-full border border-emerald-800">
              Server Limit: {dailyApplicationsCount} / {maxDailyLimit} Applications Today
            </span>
          </div>
        </div>

        {!authenticated ? (
          /* Private Unlock Form */
          <div className="max-w-md mx-auto glass-panel p-8 rounded-2xl border border-slate-800 text-center space-y-4 shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-blue-400">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Private Admin Access Required</h3>
            <p className="text-xs text-slate-400">Enter your personal passcode to access autonomous job agent controls & tracker logs.</p>

            <form onSubmit={handleLogin} className="space-y-3">
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode (e.g. admin)"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white text-center focus:outline-none focus:border-blue-500"
              />
              {error && <p className="text-[11px] text-rose-400 font-mono">Invalid passcode. Try 'admin'</p>}
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md shadow-blue-500/20 transition-all"
              >
                Unlock Private Control Panel
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Private Control Panel */
          <div className="space-y-8 animate-fade-in">
            
            {/* Global Automation Controller Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1 text-left">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white font-heading">AUTONOMOUS JOB APPLICATION AGENT</h3>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                    jobAgentEnabled ? 'bg-emerald-950 text-emerald-300 border-emerald-800' : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}>
                    {jobAgentEnabled ? 'STATUS: ACTIVE' : 'STATUS: DISABLED'}
                  </span>
                </div>
                <p className="text-xs text-slate-400 max-w-2xl">
                  When enabled, the agent discovers verified job listings, evaluates match scores, generates tailored material, and applies to up to 10 verified opportunities per day without manual approval per application.
                </p>
              </div>

              {/* Master Toggle */}
              <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800 shrink-0">
                <span className="text-xs font-mono text-slate-300 font-semibold">JOB AGENT:</span>
                <button
                  onClick={() => setJobAgentEnabled(!jobAgentEnabled)}
                  className={`px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all flex items-center gap-2 shadow-md ${
                    jobAgentEnabled
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-400'
                  }`}
                >
                  <Power className="w-4 h-4" />
                  <span>{jobAgentEnabled ? 'ON' : 'OFF'}</span>
                </button>
              </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-xs font-mono text-slate-400">Total Tracked Jobs</span>
                <span className="text-2xl font-bold text-white font-mono block">18</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-xs font-mono text-slate-400">Applied Today (Cap: 10)</span>
                <span className="text-2xl font-bold text-emerald-400 font-mono block">{dailyApplicationsCount} / 10</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-xs font-mono text-slate-400">Avg Match Score</span>
                <span className="text-2xl font-bold text-blue-400 font-mono block">91.4%</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-xs font-mono text-slate-400">Safety Guard Blocks</span>
                <span className="text-2xl font-bold text-rose-400 font-mono block">2 (Anti-Bot Stops)</span>
              </div>
            </div>

            {/* Application Tracker Table */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white font-heading uppercase tracking-wider flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-400" /> Private Application Tracker Table
              </h3>

              <div className="glass-panel rounded-2xl border border-slate-800 overflow-x-auto shadow-xl">
                <table className="w-full text-left text-xs font-mono text-slate-300">
                  <thead className="bg-slate-900/80 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-800">
                    <tr>
                      <th className="p-3">Company</th>
                      <th className="p-3">Target Role</th>
                      <th className="p-3">Source</th>
                      <th className="p-3">Match Score</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Submission Method</th>
                      <th className="p-3">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {sampleApplications.map((app) => (
                      <tr key={app.id} className="hover:bg-slate-900/40 transition-colors">
                        <td className="p-3 font-semibold text-white">{app.company}</td>
                        <td className="p-3 text-slate-300">{app.role}</td>
                        <td className="p-3 text-slate-400">{app.source}</td>
                        <td className="p-3 font-bold text-blue-400">{app.matchScore}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] border ${getStatusBadge(app.status)}`}>
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

            {/* Agent Audit Logs Stream */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white font-heading uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-400" /> Real-Time Agent Audit Logs
              </h3>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs max-h-60 overflow-y-auto">
                {auditLogs.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-[11px] leading-relaxed border-b border-slate-900/80 pb-2">
                    <span className="text-slate-500 shrink-0">{log.time}</span>
                    <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold shrink-0 ${
                      log.level === 'SUCCESS' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' :
                      log.level === 'WARN' ? 'bg-amber-950 text-amber-300 border border-amber-800' : 'bg-blue-950 text-blue-300 border border-blue-800'
                    }`}>
                      {log.level}
                    </span>
                    <span className="text-slate-300">{log.message}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
