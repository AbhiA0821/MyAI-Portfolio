import React from 'react';
import { X, Download, FileText, ExternalLink, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Code, FolderGit2 } from 'lucide-react';
import type { Profile } from '../../types/portfolio';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';

interface ResumeModalProps {
  profile: Profile;
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ profile, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in print:p-0 print:bg-white print:static">
      <div className="w-full max-w-4xl rounded-2xl bg-[#090D16] border border-slate-700/80 p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Abhishek Ainapure — Official Resume</h3>
              <p className="text-xs font-mono text-slate-400">Authoritative Document • Verified Information</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold font-mono flex items-center gap-1.5 transition-colors cursor-pointer shadow-lg shadow-blue-500/20"
            >
              <Download className="w-4 h-4" />
              <span>SAVE / PRINT PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* RESUME CONTENT BODY */}
        <div className="space-y-6 text-slate-200 print:text-black">
          
          {/* Resume Header */}
          <div className="text-center space-y-2 border-b border-slate-800/80 pb-6 print:border-black">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-black tracking-tight">
              Abhishek Ainapure
            </h1>
            <p className="text-xs sm:text-sm font-mono text-slate-300 print:text-black flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400 print:hidden" /> Ichalkaranji, Maharashtra</span>
              <span>•</span>
              <a href="mailto:ainapureabhi0821@gmail.com" className="hover:underline flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400 print:hidden" /> ainapureabhi0821@gmail.com
              </a>
              <span>•</span>
              <a href="tel:+919049424821" className="hover:underline flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400 print:hidden" /> +91 9049424821
              </a>
            </p>
            <p className="text-xs font-mono text-blue-400 print:text-black flex flex-wrap items-center justify-center gap-x-4">
              <a href="https://linkedin.com/in/abhishek-ainapure" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <LinkedinIcon className="w-3.5 h-3.5 print:hidden" /> linkedin.com/in/abhishek-ainapure
              </a>
              <span>•</span>
              <a href="https://github.com/AbhiA0821" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <GithubIcon className="w-3.5 h-3.5 print:hidden" /> github.com/AbhiA0821
              </a>
            </p>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 print:text-black flex items-center gap-1.5 border-b border-slate-800 pb-1">
              <FileText className="w-4 h-4 print:hidden" /> PROFILE SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-black leading-relaxed">
              B.Tech Artificial Intelligence and Data Science student with hands-on experience in Python, Machine Learning, Data Engineering, and AI application development. Skilled in PySpark, DuckDB, SQL, Apache Airflow, Flask, and Streamlit. Passionate about building scalable data pipelines, AI-powered applications, and intelligent data solutions.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 print:text-black flex items-center gap-1.5 border-b border-slate-800 pb-1">
              <Code className="w-4 h-4 print:hidden" /> TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-black font-mono">
              <p><strong className="text-white print:text-black">Programming Languages:</strong> Python, SQL, Java (Basic)</p>
              <p><strong className="text-white print:text-black">Data Engineering:</strong> PySpark, DuckDB, Apache Airflow, ETL Pipelines</p>
              <p><strong className="text-white print:text-black">Data Science & AI:</strong> Machine Learning, LLMs, Generative AI</p>
              <p><strong className="text-white print:text-black">Frameworks:</strong> Flask, Streamlit, REST APIs</p>
              <p><strong className="text-white print:text-black">Libraries:</strong> NumPy, Pandas, Matplotlib, Scikit-learn</p>
              <p><strong className="text-white print:text-black">Tools & Platforms:</strong> Git, GitHub</p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 print:text-black flex items-center gap-1.5 border-b border-slate-800 pb-1">
              <Briefcase className="w-4 h-4 print:hidden" /> EXPERIENCE
            </h2>

            {/* Experience item 1 */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="text-xs font-bold text-white print:text-black">
                  Infosys Springboard 7.0 — AI Virtual Internship
                </h3>
                <span className="text-[11px] font-mono text-slate-400 print:text-black">Starting August 2026</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-black space-y-0.5 pl-1">
                <li>Selected for the Infosys Springboard 7.0 AI Virtual Internship.</li>
                <li>Will work on an industry-oriented AI project involving Python and Data Engineering.</li>
                <li>Focus areas include Machine Learning, PySpark, DuckDB, and real-world AI applications.</li>
              </ul>
            </div>

            {/* Experience item 2 */}
            <div className="space-y-1 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="text-xs font-bold text-white print:text-black">
                  TecSpeak IT Solutions, Sangli — Database (SQL) Intern
                </h3>
                <span className="text-[11px] font-mono text-slate-400 print:text-black">June 2025 – July 2025</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-black space-y-0.5 pl-1">
                <li>Completed hands-on training in SQL and relational database concepts.</li>
                <li>Practiced writing SQL queries for data retrieval and manipulation.</li>
                <li>Gained practical understanding of database management and SQL fundamentals.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 print:text-black flex items-center gap-1.5 border-b border-slate-800 pb-1">
              <FolderGit2 className="w-4 h-4 print:hidden" /> PROJECTS
            </h2>

            {/* Project 1 */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-white print:text-black flex items-center gap-2">
                  <span>MedIntel – AI Healthcare Data Pipeline (Ongoing)</span>
                  <a href="https://github.com/AbhiA0821/MedIntel" target="_blank" rel="noreferrer" className="text-[10px] font-mono text-blue-400 underline print:no-underline">(GitHub)</a>
                </h3>
              </div>
              <p className="text-[11px] font-mono text-slate-400 print:text-black">Python | PySpark | DuckDB | Apache Airflow | LLM | Streamlit</p>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-black space-y-0.5 pl-1">
                <li>Developing an AI-powered healthcare data pipeline for processing and monitoring patient vital data.</li>
                <li>Building scalable ETL workflows using PySpark, DuckDB, and Apache Airflow for healthcare data processing.</li>
                <li>Developing a Streamlit dashboard and integrating LLM APIs for intelligent healthcare insights.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="space-y-1 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-white print:text-black flex items-center gap-2">
                  <span>AI Resume Analyzer & Live Job Matcher</span>
                  <a href="https://github.com/AbhiA0821/Resume-Matcher" target="_blank" rel="noreferrer" className="text-[10px] font-mono text-blue-400 underline print:no-underline">(GitHub)</a>
                </h3>
              </div>
              <p className="text-[11px] font-mono text-slate-400 print:text-black">Python | Streamlit | Scikit-learn | KNN | Random Forest | SQLite | RapidAPI</p>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-black space-y-0.5 pl-1">
                <li>Developed an AI-powered resume analyzer for skill extraction and domain classification.</li>
                <li>Developed a machine learning-based job recommendation system using KNN and Random Forest.</li>
                <li>Integrated real-time job listings using RapidAPI and deployed the application on Streamlit Cloud.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="space-y-1 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-white print:text-black flex items-center gap-2">
                  <span>Art Generation Using CycleGAN</span>
                  <a href="https://github.com/AbhiA0821/Art-Generation" target="_blank" rel="noreferrer" className="text-[10px] font-mono text-blue-400 underline print:no-underline">(GitHub)</a>
                </h3>
              </div>
              <p className="text-[11px] font-mono text-slate-400 print:text-black">Python | PyTorch | Deep Learning | CycleGAN | GANs</p>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-black space-y-0.5 pl-1">
                <li>Developed a CycleGAN-based deep learning model to convert real-world images into Ghibli-style artwork.</li>
                <li>Implemented custom Generator and Discriminator networks with image preprocessing and adversarial training.</li>
                <li>Trained the model on unpaired datasets to generate high-quality stylized images.</li>
              </ul>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 print:text-black flex items-center gap-1.5 border-b border-slate-800 pb-1">
              <Award className="w-4 h-4 print:hidden" /> CERTIFICATIONS & ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-300 print:text-black space-y-1 pl-1">
              <li>Oracle Cloud Infrastructure 2025 Certified Generative AI Professional (Sep 2025)</li>
              <li>Oracle Cloud Infrastructure 2025 Certified Data Science Professional (Oct 2025)</li>
              <li>Artificial Intelligence – Infosys Springboard (Apr 2026)</li>
            </ul>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 print:text-black flex items-center gap-1.5 border-b border-slate-800 pb-1">
              <GraduationCap className="w-4 h-4 print:hidden" /> EDUCATION
            </h2>
            <div className="space-y-1 text-xs text-slate-300 print:text-black">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-white print:text-black">
                <span>B.Tech in Artificial Intelligence & Data Science</span>
                <span className="font-mono text-slate-400 print:text-black font-normal">2023 – Present</span>
              </div>
              <p>Annasaheb Dange College of Engineering & Technology | CGPA: 8.26/10</p>
              <p className="pt-1"><span className="font-semibold text-white print:text-black">HSC (Science):</span> 81%</p>
              <p><span className="font-semibold text-white print:text-black">SSC (CBSE):</span> 89%</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

