import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Power, Lock, CheckCircle2, Activity, ExternalLink, RefreshCw, AlertCircle, Plus, Sparkles } from 'lucide-react';

interface ApplicationRecord {
  id: string;
  company: string;
  role: string;
  jobUrl: string;
  source: string;
  status: string;
  discoveredAt: string;
  appliedAt?: string;
  failureReason?: string;
}

interface AgentStatus {
  agentEnabled: boolean;
  applicationsToday: number;
  dailyLimit: number;
  remainingCapacity: number;
  lastRun?: string;
  nextRun?: string;
  lastEmailStatus?: string;
  totalHistoryCount: number;
}

const API_BASE = 'http://localhost:8000/api/v1/agent';

export const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);

  // Live Backend State (Default OFF, 0 count, 0 history)
  const [agentStatus, setAgentStatus] = useState<AgentStatus>({
    agentEnabled: false,
    applicationsToday: 0,
    dailyLimit: 10,
    remainingCapacity: 10,
    lastEmailStatus: 'NOT SENT',
    totalHistoryCount: 0
  });

  const [applications, setApplications] = useState<ApplicationRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  // New Application Form State
  const [newCompany, setNewCompany] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newJobUrl, setNewJobUrl] = useState('');
  const [newSource, setNewSource] = useState('LinkedIn');
  const [newStatus, setNewStatus] = useState('SUBMITTED');
  const [formError, setFormError] = useState('');

  // Fetch real agent status and applications from backend API
  const fetchBackendData = async () => {
    setLoading(true);
    try {
      const statusRes = await fetch(`${API_BASE}/status`);
      if (statusRes.ok) {
        const statusData: AgentStatus = await statusRes.json();
        setAgentStatus(statusData);
      }

      const appsRes = await fetch(`${API_BASE}/applications`);
      if (appsRes.ok) {
        const appsData: ApplicationRecord[] = await appsRes.json();
        setApplications(appsData);
      }
    } catch {
      // Backend unavailable fallback — zero state, NO mock records
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchBackendData();
    }
  }, [isAuthenticated]);

  // Requirement 2 & 3: Master Switch Toggle API
  const handleToggleAgent = async () => {
    setActionLoading(true);
    const targetState = !agentStatus.agentEnabled;
    try {
      const res = await fetch(`${API_BASE}/toggle`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enabled: targetState })
      });
      if (res.ok) {
        const updatedStatus: AgentStatus = await res.json();
        setAgentStatus(updatedStatus);
        fetchBackendData();
      }
    } catch {
      // If API call fails, update local state
      setAgentStatus((prev) => ({
        ...prev,
        agentEnabled: targetState
      }));
    } finally {
      setActionLoading(false);
    }
  };

  // Trigger manual workflow run
  const handleRunNow = async () => {
    setActionLoading(true);
    try {
      const res = await fetch(`${API_BASE}/run-now`, { method: 'POST' });
      if (res.ok) {
        const updatedStatus: AgentStatus = await res.json();
        setAgentStatus(updatedStatus);
        fetchBackendData();
      }
    } catch {
      // Silent error handling
    } finally {
      setActionLoading(false);
    }
  };

  // Submit real application record
  const handleAddApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!newCompany.trim() || !newRole.trim() || !newJobUrl.trim()) {
      setFormError('Company, role, and exact original jobUrl are required.');
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/record-application`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company: newCompany,
          role: newRole,
          jobUrl: newJobUrl,
          source: newSource,
          status: newStatus
        })
      });

      if (res.ok) {
        setNewCompany('');
        setNewRole('');
        setNewJobUrl('');
        setShowAddForm(false);
        fetchBackendData();
      } else {
        const err = await res.json();
        setFormError(err.detail || 'Failed to submit application record.');
      }
    } catch {
      setFormError('Backend API unreachable. Please start backend server.');
    }
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800 shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Shield className="w-5 h-5 text-purple-400" />
            <h1 className="text-xl font-bold text-white font-heading">Persistent Job Application Agent Control</h1>
          </div>
          <p className="text-xs font-mono text-slate-400">
            Real backend source of truth • IST (Asia/Kolkata) calendar day 10/day limit enforcement
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={fetchBackendData}
            title="Refresh Data"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-cyan-400' : ''}`} />
          </button>

          {/* Master ON/OFF Switch */}
          <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 text-xs font-mono">
              <span className={`w-2.5 h-2.5 rounded-full ${agentStatus.agentEnabled ? 'bg-emerald-400 animate-pulse' : 'bg-red-500'}`} />
              <span className={agentStatus.agentEnabled ? 'text-emerald-400 font-bold' : 'text-slate-400'}>
                {agentStatus.agentEnabled ? '● ACTIVE' : '● OFF'}
              </span>
            </div>

            <button
              onClick={handleToggleAgent}
              disabled={actionLoading}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                agentStatus.agentEnabled
                  ? 'bg-red-600/20 text-red-300 border border-red-500/40 hover:bg-red-600 hover:text-white'
                  : 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-600/30'
              }`}
            >
              <Power className="w-3.5 h-3.5" />
              <span>{agentStatus.agentEnabled ? 'TURN AGENT OFF' : 'TURN AGENT ON'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Real Metrics Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        
        <div className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800 space-y-1 shadow-xl">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Applications Today (IST)</span>
          <div className="text-3xl font-extrabold text-white font-mono">
            {agentStatus.applicationsToday} <span className="text-slate-500 text-lg">/ {agentStatus.dailyLimit}</span>
          </div>
          <p className="text-[11px] font-mono text-emerald-400">Strict 10/day calendar ceiling</p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800 space-y-1 shadow-xl">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Remaining Capacity</span>
          <div className="text-3xl font-extrabold text-cyan-300 font-mono">
            {agentStatus.remainingCapacity} <span className="text-slate-500 text-lg">Submissions</span>
          </div>
          <p className="text-[11px] font-mono text-slate-400">Resets daily at 00:00 IST</p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800 space-y-1 shadow-xl">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Master Control Status</span>
          <div className={`text-xl font-bold font-mono ${agentStatus.agentEnabled ? 'text-emerald-400' : 'text-amber-400'}`}>
            {agentStatus.agentEnabled ? 'AUTONOMOUS ACTIVE' : 'AGENT DISABLED (OFF)'}
          </div>
          <p className="text-[11px] font-mono text-slate-400">
            {agentStatus.agentEnabled ? 'Persistent daily automation authorized' : 'All submissions & reports paused'}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800 space-y-1 shadow-xl">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Daily Email Report</span>
          <div className="text-xl font-bold font-mono text-purple-400">
            {agentStatus.lastEmailStatus || 'NOT SENT'}
          </div>
          <p className="text-[11px] font-mono text-slate-400">SMTP summary dispatch status</p>
        </div>

      </div>

      {/* Manual Actions & Real Application Submission */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#0A0A1A] border border-slate-800">
        <div className="flex items-center gap-3">
          <button
            onClick={handleRunNow}
            disabled={!agentStatus.agentEnabled || actionLoading}
            className="px-4 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600 border border-purple-500/40 text-purple-300 hover:text-white font-mono text-xs font-semibold flex items-center gap-1.5 disabled:opacity-40 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>RUN DISCOVERY & WORKFLOW NOW</span>
          </button>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-lg shadow-blue-500/20"
        >
          <Plus className="w-4 h-4" />
          <span>RECORD APPLICATION</span>
        </button>
      </div>

      {/* Modal / Form to Record Real Application */}
      {showAddForm && (
        <form onSubmit={handleAddApplication} className="p-6 rounded-2xl bg-[#0A0A1A] border border-blue-500/40 space-y-4 shadow-2xl">
          <h3 className="text-sm font-bold text-white font-heading">Record Verified Job Application</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">Company</label>
              <input
                type="text"
                value={newCompany}
                onChange={(e) => setNewCompany(e.target.value)}
                placeholder="e.g. Google India"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 font-mono"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">Role Title</label>
              <input
                type="text"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                placeholder="e.g. AI/ML Intern"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 font-mono"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">Original Job Posting URL</label>
              <input
                type="url"
                value={newJobUrl}
                onChange={(e) => setNewJobUrl(e.target.value)}
                placeholder="https://careers.google.com/jobs/results/..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">Source</label>
              <select
                value={newSource}
                onChange={(e) => setNewSource(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white font-mono"
              >
                <option value="LinkedIn">LinkedIn</option>
                <option value="Careers Portal">Careers Portal</option>
                <option value="Indeed">Indeed</option>
                <option value="Direct Listing">Direct Listing</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">Status</label>
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white font-mono"
              >
                <option value="SUBMITTED">SUBMITTED (Counts toward 10/day limit)</option>
                <option value="MANUAL_ACTION_REQUIRED">MANUAL_ACTION_REQUIRED</option>
                <option value="FAILED">FAILED</option>
                <option value="SKIPPED">SKIPPED</option>
              </select>
            </div>
          </div>

          {formError && (
            <p className="text-xs font-mono text-red-400">{formError}</p>
          )}

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold cursor-pointer"
            >
              Submit Application Record
            </button>
          </div>
        </form>
      )}

      {/* Real Application History Audit Table */}
      <div className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
            <Activity className="w-4 h-4 text-purple-400" />
            <span>Persistent Real Application History</span>
          </h3>
          <span className="text-[10px] font-mono text-slate-500">{applications.length} Real Records</span>
        </div>

        {applications.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <AlertCircle className="w-10 h-10 text-slate-600 mx-auto stroke-[1.5]" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white font-heading">
                {agentStatus.agentEnabled ? 'No applications submitted yet.' : 'Agent is currently OFF.'}
              </h4>
              <p className="text-xs font-mono text-slate-400 max-w-md mx-auto">
                {agentStatus.agentEnabled
                  ? 'The agent is active and discovery is running for verified job postings.'
                  : 'Turn it ON to begin automated job discovery and applications.'}
              </p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs text-slate-300">
              <thead>
                <tr className="border-b border-slate-800 text-slate-500 text-[10px] uppercase">
                  <th className="py-2.5 px-3">Company</th>
                  <th className="py-2.5 px-3">Role</th>
                  <th className="py-2.5 px-3">Date (IST)</th>
                  <th className="py-2.5 px-3">Source</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 px-3 text-right">Job Posting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-950/60 transition-colors">
                    <td className="py-3 px-3 font-bold text-white">{app.company}</td>
                    <td className="py-3 px-3 text-cyan-300">{app.role}</td>
                    <td className="py-3 px-3 text-slate-400">
                      {app.appliedAt ? app.appliedAt.substring(0, 10) : app.discoveredAt.substring(0, 10)}
                    </td>
                    <td className="py-3 px-3 text-slate-400">{app.source}</td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border inline-flex items-center gap-1 ${
                        app.status === 'SUBMITTED'
                          ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                          : app.status === 'MANUAL_ACTION_REQUIRED'
                          ? 'bg-amber-950 text-amber-300 border-amber-800'
                          : app.status === 'SKIPPED'
                          ? 'bg-sky-950 text-sky-300 border-sky-800'
                          : 'bg-red-950 text-red-300 border-red-800'
                      }`}>
                        {app.status === 'SUBMITTED' && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                        <span>{app.status}</span>
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      {/* Requirement 11: Clickable original job posting link */}
                      <a
                        href={app.jobUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-blue-400 hover:text-cyan-300 text-[11px] font-semibold inline-flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>VIEW POSTING</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
};
