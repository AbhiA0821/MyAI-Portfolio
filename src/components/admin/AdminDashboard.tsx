import React, { useState, useEffect } from 'react';
import { Power, CheckCircle2, Activity, ExternalLink, RefreshCw, AlertCircle, Plus, Sparkles, LogOut, UserCheck, Mail } from 'lucide-react';
import { AdminLogin } from './AdminLogin';

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

interface AdminProfile {
  fullName: string;
  email: string;
  role: string;
  status: string;
}

const API_BASE = 'http://localhost:8000/api/v1/admin';

export const AdminDashboard: React.FC = () => {
  const [adminToken, setAdminToken] = useState<string | null>(() => {
    return sessionStorage.getItem('myai_admin_token');
  });

  const [adminProfile, setAdminProfile] = useState<AdminProfile | null>(null);
  const [activeTab, setActiveTab] = useState<'control' | 'history' | 'reports'>('control');

  // Live Agent State
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

  // Form State
  const [newCompany, setNewCompany] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newJobUrl, setNewJobUrl] = useState('');
  const [newSource, setNewSource] = useState('LinkedIn');
  const [newStatus, setNewStatus] = useState('SUBMITTED');
  const [formError, setFormError] = useState('');

  // Fetch Admin Profile & Real Agent Data
  const fetchAdminData = async (tokenStr: string) => {
    setLoading(true);
    const authHeaders = {
      'Authorization': `Bearer ${tokenStr}`,
      'x-admin-token': tokenStr
    };

    try {
      // 1. Verify profile
      const profRes = await fetch(`${API_BASE}/me`, { headers: authHeaders });
      if (profRes.ok) {
        const profData = await profRes.json();
        setAdminProfile(profData);
      } else if (profRes.status === 401 || profRes.status === 403) {
        handleLogout();
        return;
      }

      // 2. Fetch Agent status
      const statusRes = await fetch(`${API_BASE}/agent/status`, { headers: authHeaders });
      if (statusRes.ok) {
        const statusData: AgentStatus = await statusRes.json();
        setAgentStatus(statusData);
      }

      // 3. Fetch Real Applications
      const appsRes = await fetch(`${API_BASE}/applications`, { headers: authHeaders });
      if (appsRes.ok) {
        const appsData: ApplicationRecord[] = await appsRes.json();
        setApplications(appsData);
      }
    } catch {
      // Backend offline fallback - zero state, NO fake records
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (adminToken) {
      fetchAdminData(adminToken);
    }
  }, [adminToken]);

  const handleLoginSuccess = (token: string, profile: any) => {
    setAdminToken(token);
    setAdminProfile({
      fullName: profile.fullName || 'Abhishek Ainapure',
      email: profile.email || 'ainapureabhi0821@gmail.com',
      role: profile.role || 'Administrator',
      status: 'AUTHENTICATED'
    });
    fetchAdminData(token);
  };

  const handleLogout = async () => {
    if (adminToken) {
      try {
        await fetch(`${API_BASE}/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${adminToken}`,
            'x-admin-token': adminToken
          }
        });
      } catch {
        // Silent error
      }
    }
    sessionStorage.removeItem('myai_admin_token');
    setAdminToken(null);
    setAdminProfile(null);
  };

  // Requirement 2 & 3: Master Switch API
  const handleToggleAgent = async () => {
    if (!adminToken) return;
    setActionLoading(true);
    const targetState = !agentStatus.agentEnabled;
    try {
      const res = await fetch(`${API_BASE}/agent/toggle`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`,
          'x-admin-token': adminToken
        },
        body: JSON.stringify({ enabled: targetState })
      });
      if (res.ok) {
        const updatedStatus: AgentStatus = await res.json();
        setAgentStatus(updatedStatus);
        fetchAdminData(adminToken);
      }
    } catch {
      // Fallback update
      setAgentStatus((prev) => ({ ...prev, agentEnabled: targetState }));
    } finally {
      setActionLoading(false);
    }
  };

  const handleRunNow = async () => {
    if (!adminToken) return;
    setActionLoading(true);
    try {
      const res = await fetch(`${API_BASE}/agent/run-now`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${adminToken}`,
          'x-admin-token': adminToken
        }
      });
      if (res.ok) {
        const updatedStatus: AgentStatus = await res.json();
        setAgentStatus(updatedStatus);
        fetchAdminData(adminToken);
      }
    } catch {
      // Silent error
    } finally {
      setActionLoading(false);
    }
  };

  const handleAddApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminToken) return;
    setFormError('');
    if (!newCompany.trim() || !newRole.trim() || !newJobUrl.trim()) {
      setFormError('Company, role, and exact original jobUrl are required.');
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/record-application`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`,
          'x-admin-token': adminToken
        },
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
        fetchAdminData(adminToken);
      } else {
        const err = await res.json();
        setFormError(err.detail || 'Failed to record application.');
      }
    } catch {
      setFormError('Backend API error. Please verify backend status.');
    }
  };

  // If unauthenticated -> show login
  if (!adminToken) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 font-sans">
      
      {/* Control Center Header & Admin Profile */}
      <div className="p-6 rounded-3xl bg-[#0A0A1A] border border-slate-800 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 p-0.5 shadow-lg">
            <div className="w-full h-full bg-[#0A0A1A] rounded-[14px] flex items-center justify-center text-purple-400">
              <UserCheck className="w-7 h-7" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-white font-heading">
                {adminProfile?.fullName || 'Abhishek Ainapure'}
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-950 text-purple-300 border border-purple-800">
                {adminProfile?.role || 'Administrator'}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ● AUTHENTICATED
              </span>
              <span>•</span>
              <span className="text-slate-500">{adminProfile?.email || 'ainapureabhi0821@gmail.com'}</span>
            </div>
          </div>
        </div>

        {/* Master Controls & Logout */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
          <button
            onClick={() => adminToken && fetchAdminData(adminToken)}
            title="Refresh Admin Data"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-cyan-400' : ''}`} />
          </button>

          {/* Master Agent Toggle */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-950 border border-slate-800">
            <div className="px-3 py-1 rounded-lg bg-slate-900 text-xs font-mono flex items-center gap-2">
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

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-red-500/40 text-slate-400 hover:text-red-400 font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>LOG OUT</span>
          </button>
        </div>
      </div>

      {/* Control Center Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2 font-mono text-xs">
        <button
          onClick={() => setActiveTab('control')}
          className={`px-4 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
            activeTab === 'control'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
              : 'text-slate-400 hover:text-white bg-[#0A0A1A] border border-slate-800'
          }`}
        >
          JOB AGENT CONTROL
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`px-4 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
            activeTab === 'history'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
              : 'text-slate-400 hover:text-white bg-[#0A0A1A] border border-slate-800'
          }`}
        >
          APPLICATION HISTORY ({applications.length})
        </button>

        <button
          onClick={() => setActiveTab('reports')}
          className={`px-4 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
            activeTab === 'reports'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
              : 'text-slate-400 hover:text-white bg-[#0A0A1A] border border-slate-800'
          }`}
        >
          SYSTEM LOGS & EMAIL
        </button>
      </div>

      {/* Tab 1: Job Agent Control & IST Daily Limit Metrics */}
      {activeTab === 'control' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800 space-y-1 shadow-xl">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Applications Today (IST)</span>
              <div className="text-3xl font-extrabold text-white font-mono">
                {agentStatus.applicationsToday} <span className="text-slate-500 text-lg">/ {agentStatus.dailyLimit}</span>
              </div>
              <p className="text-[11px] font-mono text-emerald-400">Asia/Kolkata timezone limit</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800 space-y-1 shadow-xl">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Remaining Capacity</span>
              <div className="text-3xl font-extrabold text-cyan-300 font-mono">
                {agentStatus.remainingCapacity} <span className="text-slate-500 text-lg">Submissions</span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">Resets at 00:00 IST daily</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800 space-y-1 shadow-xl">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Master Agent Switch</span>
              <div className={`text-xl font-bold font-mono ${agentStatus.agentEnabled ? 'text-emerald-400' : 'text-amber-400'}`}>
                {agentStatus.agentEnabled ? 'AUTONOMOUS ACTIVE' : 'AGENT DISABLED (OFF)'}
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                {agentStatus.agentEnabled ? 'Persistent daily automation ON' : 'All submissions paused'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800 space-y-1 shadow-xl">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Daily Email Report</span>
              <div className="text-xl font-bold font-mono text-purple-400">
                {agentStatus.lastEmailStatus || 'NOT SENT'}
              </div>
              <p className="text-[11px] font-mono text-slate-400">SMTP summary status</p>
            </div>

          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-[#0A0A1A] border border-slate-800">
            <div className="flex items-center gap-3">
              <button
                onClick={handleRunNow}
                disabled={!agentStatus.agentEnabled || actionLoading}
                className="px-4 py-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600 border border-purple-500/40 text-purple-300 hover:text-white font-mono text-xs font-semibold flex items-center gap-1.5 disabled:opacity-40 cursor-pointer transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>RUN DISCOVERY WORKFLOW NOW</span>
              </button>
            </div>

            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-lg shadow-blue-500/20"
            >
              <Plus className="w-4 h-4" />
              <span>RECORD VERIFIED APPLICATION</span>
            </button>
          </div>

          {/* Form Modal to Add Verified Record */}
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
        </div>
      )}

      {/* Tab 2: Application History (Protected Admin Only) */}
      {(activeTab === 'history' || activeTab === 'control') && (
        <div className="p-6 rounded-3xl bg-[#0A0A1A] border border-slate-800 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
              <Activity className="w-4 h-4 text-purple-400" />
              <span>Real Application History (Protected Admin Data)</span>
            </h3>
            <span className="text-[10px] font-mono text-slate-500">{applications.length} Records</span>
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
                        {/* Requirement 11 & 7: Clickable original job posting link */}
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
      )}

      {/* Tab 3: System Logs & Email Reports */}
      {activeTab === 'reports' && (
        <div className="p-6 rounded-3xl bg-[#0A0A1A] border border-slate-800 space-y-6 shadow-xl font-mono text-xs">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Daily Email Dispatch Audit & Settings</span>
            </h3>
            <span className="text-emerald-400 font-semibold">SMTP Engine Active</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Environment Configuration Status</span>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center justify-between">
                  <span>EMAIL_HOST:</span>
                  <span className="text-cyan-300">Configured via .env</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>EMAIL_PORT:</span>
                  <span className="text-cyan-300">587 (TLS)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>RECIPIENT_EMAIL:</span>
                  <span className="text-purple-300">ainapureabhi0821@gmail.com</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>LAST DISPATCH RESULT:</span>
                  <span className="text-emerald-400 font-bold">{agentStatus.lastEmailStatus || 'NOT SENT'}</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Security & Enforcement Audit</span>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center justify-between">
                  <span>BACKEND AUTH:</span>
                  <span className="text-emerald-400 font-bold">PBKDF2 Hashed</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>API AUTHORIZATION:</span>
                  <span className="text-emerald-400 font-bold">401/403 Guarded</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>AGENT PERSISTENCE:</span>
                  <span className="text-cyan-300">SQLite Database</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>DAILY IST LIMIT:</span>
                  <span className="text-amber-300 font-bold">10 / Day Ceiling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
