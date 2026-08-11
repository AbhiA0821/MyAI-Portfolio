import React, { useEffect, useState } from 'react';
import type { GitHubStats } from '../../types/portfolio';
import { GitBranch, Star, Code2, ExternalLink } from 'lucide-react';

interface GitHubSectionProps {
  stats: GitHubStats;
}

interface FetchedStats {
  reposCount: number;
  starsCount: number;
}

export const GitHubSection: React.FC<GitHubSectionProps> = ({ stats }) => {
  const [liveStats, setLiveStats] = useState<FetchedStats>({
    reposCount: stats.publicRepos,
    starsCount: stats.starsCount
  });

  useEffect(() => {
    let isMounted = true;
    async function fetchGitHubData() {
      try {
        const userRes = await fetch('https://api.github.com/users/AbhiA0821');
        if (userRes.ok) {
          const userData = await userRes.json();
          if (isMounted && userData.public_repos !== undefined) {
            setLiveStats((prev) => ({
              ...prev,
              reposCount: userData.public_repos
            }));
          }
        }

        const reposRes = await fetch('https://api.github.com/users/AbhiA0821/repos?per_page=100');
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (isMounted && Array.isArray(reposData)) {
            const totalStars = reposData.reduce((acc: number, r: { stargazers_count?: number }) => acc + (r.stargazers_count || 0), 0);
            setLiveStats((prev) => ({
              ...prev,
              starsCount: totalStars
            }));
          }
        }
      } catch {
        // Use static verified numbers from GitHub profile if API is offline
      }
    }

    fetchGitHubData();
    return () => { isMounted = false; };
  }, [stats]);

  return (
    <section id="github" className="py-24 bg-[#050505] relative border-b border-slate-800/80">
      {/* Background Orbs */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono mb-3">
              <GitBranch className="w-3.5 h-3.5 text-blue-400" /> OPEN SOURCE & REPOSITORIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              GitHub Engineering <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Activity</span>
            </h2>
          </div>
          <a
            href="https://github.com/AbhiA0821"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-blue-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer"
          >
            <span>github.com/AbhiA0821</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Verified Stats Cards Grid (NO fake 142+ commits or fake 35 stars) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800 flex items-center gap-5 backdrop-blur-xl shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800 flex items-center justify-center text-blue-400 shrink-0">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-3xl font-extrabold text-white font-mono block">{liveStats.reposCount}</span>
              <span className="text-xs text-slate-400 font-mono">Public GitHub Repositories</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800 flex items-center gap-5 backdrop-blur-xl shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-800 flex items-center justify-center text-amber-400 shrink-0">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <span className="text-3xl font-extrabold text-white font-mono block">{liveStats.starsCount}</span>
              <span className="text-xs text-slate-400 font-mono">Profile Repository Stars</span>
            </div>
          </div>
        </div>

        {/* Verified Repository Language Breakdown */}
        <div className="p-6 rounded-2xl bg-[#0A0A1A] border border-slate-800 space-y-3 max-w-4xl mx-auto shadow-xl">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>VERIFIED REPOSITORY LANGUAGES</span>
            <span>GITHUB CODEBASE BREAKDOWN</span>
          </div>

          {/* Progress Bar */}
          <div className="h-3 w-full bg-slate-950 rounded-full overflow-hidden flex">
            {stats.topLanguages.map((lang) => (
              <div
                key={lang.name}
                style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                className="h-full transition-all"
                title={`${lang.name}: ${lang.percentage}%`}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-mono">
            {stats.topLanguages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                <span className="text-slate-300 font-semibold">{lang.name}:</span>
                <span className="text-slate-400">{lang.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.featuredRepos.map((repo) => (
            <div
              key={repo.name}
              className="p-5 rounded-2xl bg-[#0A0A1A] border border-slate-800 hover:border-cyan-500/50 space-y-3 flex flex-col justify-between transition-all backdrop-blur-xl shadow-xl"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white font-mono flex items-center gap-1.5">
                    <GitBranch className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="truncate">{repo.name}</span>
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-slate-900 border border-slate-800 text-emerald-400">
                    {repo.updatedAt}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">{repo.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 font-semibold">{repo.language}</span>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>View Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
