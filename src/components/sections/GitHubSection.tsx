import React from 'react';
import type { GitHubStats } from '../../types/portfolio';
import { GitBranch, Star, Code2, ExternalLink, Activity } from 'lucide-react';

interface GitHubSectionProps {
  stats: GitHubStats;
}

export const GitHubSection: React.FC<GitHubSectionProps> = ({ stats }) => {
  return (
    <section id="github" className="py-20 bg-slate-950/80 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono mb-3">
              <GitBranch className="w-3.5 h-3.5 text-blue-400" /> OPEN SOURCE & REPOSITORIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              GitHub Engineering <span className="gradient-text">Activity</span>
            </h2>
          </div>
          <a
            href="https://github.com/AbhiA0821"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-blue-400 hover:underline flex items-center gap-1.5"
          >
            <span>github.com/AbhiA0821</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800 flex items-center justify-center text-blue-400">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white font-mono block">{stats.publicRepos}</span>
              <span className="text-xs text-slate-400 font-mono">Public Repositories</span>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-800 flex items-center justify-center text-amber-400">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white font-mono block">{stats.starsCount}</span>
              <span className="text-xs text-slate-400 font-mono">Total Repository Stars</span>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-800 flex items-center justify-center text-emerald-400">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white font-mono block">{stats.commitsThisYear}+</span>
              <span className="text-xs text-slate-400 font-mono">Commits Recorded</span>
            </div>
          </div>
        </div>

        {/* Language Breakdown */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>PRIMARY REPOSITORY LANGUAGES:</span>
            <span>100% CODEBASE BREAKDOWN</span>
          </div>

          {/* Progress Bar */}
          <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden flex">
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

        {/* Featured Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.featuredRepos.map((repo) => (
            <div key={repo.name} className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3 flex flex-col justify-between glass-panel-hover">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white font-mono flex items-center gap-1.5">
                    <GitBranch className="w-4 h-4 text-blue-400" /> {repo.name}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-500">{repo.updatedAt}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{repo.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 font-semibold">{repo.language}</span>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-1"
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
