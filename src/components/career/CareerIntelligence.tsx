import React from 'react';
import type { TargetRole, SkillCategory } from '../../types/portfolio';
import { Sparkles, Target, CheckCircle2, TrendingUp, Compass } from 'lucide-react';

interface CareerIntelligenceProps {
  selectedRole: TargetRole;
  skillCategories: SkillCategory[];
}

export const CareerIntelligence: React.FC<CareerIntelligenceProps> = ({ selectedRole }) => {
  const roleBreakdowns: Record<TargetRole, {
    alignmentScore: number;
    summary: string;
    keyStrengths: string[];
    growthAreas: string[];
    recommendedLearning: string[];
  }> = {
    'AI Engineer': {
      alignmentScore: 94,
      summary: "Exceptional alignment with Multi-Agent Systems, RAG vector retrieval, local LLM orchestration (Ollama/Qwen), FastAPI, and LangChain/LangGraph.",
      keyStrengths: ["Multi-Agent Architecture", "RAG Vector Databases (ChromaDB)", "FastAPI Microservices", "Local LLM Fine-Tuning/Prompting"],
      growthAreas: ["LangGraph Advanced State Machine Patterns", "Enterprise Gateway Authentication"],
      recommendedLearning: ["Production Agent Tracing", "Async Streaming Gateways"]
    },
    'ML Engineer': {
      alignmentScore: 88,
      summary: "Strong foundation in PyTorch, Scikit-learn, XGBoost, model evaluation, and NLP processing.",
      keyStrengths: ["PyTorch Model Architectures", "NLP Text Classification", "Scikit-Learn Modeling", "FastAPI Serving"],
      growthAreas: ["MLOps Pipeline Automation (MLflow)", "Triton Inference Server Deployment"],
      recommendedLearning: ["Quantization Techniques (GGUF/AWQ)", "Distributed PyTorch Training"]
    },
    'Data Engineer': {
      alignmentScore: 91,
      summary: "High capability in PySpark distributed processing, DuckDB analytical warehousing, SQL, ETL pipeline design, and PostgreSQL.",
      keyStrengths: ["PySpark Distributed ETL", "DuckDB In-Memory Analytics", "SQL Data Warehousing", "PostgreSQL Administration"],
      growthAreas: ["Apache Airflow Complex DAG Scheduling", "Apache Iceberg Data Lake Format"],
      recommendedLearning: ["Streaming Kafka Partition Tuning", "dbt Data Transformations"]
    },
    'Data Scientist': {
      alignmentScore: 86,
      summary: "Solid competency in statistical modeling, NLP, data analysis, PyTorch, and predictive analytics.",
      keyStrengths: ["Statistical Inference", "NLP Text Analytics", "Predictive ML Models", "Data Visualization"],
      growthAreas: ["Advanced A/B Testing Frameworks", "Causal Inference Analysis"],
      recommendedLearning: ["Time-Series Forecasting", "Bayesian Statistics"]
    }
  };

  const currentRoleInfo = roleBreakdowns[selectedRole];

  return (
    <section id="career" className="py-20 bg-slate-950/60 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/80 text-amber-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" /> AI CAREER INTELLIGENCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Role Alignment & <span className="gradient-text">Career Directions</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Transparent reasoning analyzing profile alignment, key strengths, growth areas, and recommended learning pathways for <span className="text-blue-400 font-semibold">{selectedRole}</span>.
          </p>
        </div>

        {/* Breakdown Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Alignment Summary Score Panel */}
          <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-slate-400">ROLE ALIGNMENT SCORE:</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  TRANSPARENT REASONING
                </span>
              </div>

              <div className="text-center py-4 space-y-2">
                <span className="text-5xl font-extrabold text-white font-mono block gradient-text">
                  {currentRoleInfo.alignmentScore}%
                </span>
                <span className="text-xs font-mono text-blue-400 block uppercase font-semibold">
                  {selectedRole} Alignment
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed p-3 rounded-xl bg-slate-900 border border-slate-800">
                {currentRoleInfo.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-400">
              <Compass className="w-4 h-4 text-purple-400" />
              <span>Grounded Profile Analysis</span>
            </div>
          </div>

          {/* Detailed Strengths & Growth Pathways */}
          <div className="lg:col-span-8 glass-panel p-6 rounded-2xl border border-slate-800 space-y-6">
            
            {/* Key Strengths */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white font-heading uppercase tracking-wider flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> Demonstrated Key Strengths
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentRoleInfo.keyStrengths.map((strength) => (
                  <div key={strength} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Areas & Recommendations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-800">
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-300 font-heading uppercase tracking-wider flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-amber-400" /> Skills to Expand:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
                  {currentRoleInfo.growthAreas.map((area) => (
                    <li key={area} className="flex items-center gap-1.5 p-2 rounded bg-slate-950 border border-slate-800">
                      <span className="text-amber-400">▸</span> {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-300 font-heading uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-blue-400" /> Learning Direction:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
                  {currentRoleInfo.recommendedLearning.map((item) => (
                    <li key={item} className="flex items-center gap-1.5 p-2 rounded bg-slate-950 border border-slate-800">
                      <span className="text-blue-400">▸</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
