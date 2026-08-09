import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CheckCircle2, X, ZoomIn, ZoomOut, Calendar, Key, ShieldCheck, Award } from 'lucide-react';
import { verifiedCertifications, type VerifiedCertification } from '../../data/certificationsData';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<VerifiedCertification | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Reset zoom on modal close or change
  useEffect(() => {
    setIsZoomed(false);
  }, [selectedCert]);

  // ESC key handler for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="certifications" className="py-24 bg-[#050505] relative overflow-hidden border-b border-slate-800/80">
      {/* Ambient background light leaks */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-purple-600/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-heading">
            CERTIFICATIONS &{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              CREDENTIALS
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Verified certifications from Oracle, Infosys, Tata, and industry programs.
          </p>
        </div>

        {/* Decorative AI Credential Network Graph */}
        <div className="hidden lg:flex items-center justify-center gap-8 py-2 border-y border-slate-900 font-mono text-xs text-slate-400 select-none">
          <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Generative AI
          </span>
          <span className="text-slate-700">───◆───</span>
          <span className="flex items-center gap-1.5 text-purple-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Data Science & ML
          </span>
          <span className="text-slate-700">───◆───</span>
          <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Artificial Intelligence
          </span>
          <span className="text-slate-700">───◆───</span>
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Databases & SQL
          </span>
        </div>

        {/* Real Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verifiedCertifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              onClick={() => setSelectedCert(cert)}
              data-card="true"
              className="group rounded-2xl bg-[#0A0A1A] border border-slate-800/90 hover:border-emerald-500/50 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/60 flex flex-col justify-between transition-all duration-300 cursor-pointer relative"
            >
              <div>
                {/* Document Thumbnail Preview (Or Clean Fallback) */}
                <div className="h-52 bg-slate-950 p-4 relative flex items-center justify-center overflow-hidden border-b border-slate-800/80 group-hover:bg-slate-900/60 transition-colors">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="max-h-full max-w-full object-contain rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center space-y-2 text-slate-500 group-hover:text-emerald-400/80 transition-colors">
                      <Award className="w-10 h-10 stroke-[1.5]" />
                      <span className="text-xs font-mono text-slate-400">Certificate image coming soon</span>
                    </div>
                  )}
                  
                  {/* Hover Overlay Badge */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-xl shadow-emerald-600/30">
                      <ZoomIn className="w-4 h-4" /> View Details
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/80 border border-emerald-800 text-emerald-300 font-semibold">
                      {cert.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {cert.issueDate}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white font-heading group-hover:text-emerald-300 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-mono text-purple-400">
                    {cert.issuer}
                  </p>

                  {cert.credentialId && (
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 pt-1">
                      <Key className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span className="truncate">Credential ID: {cert.credentialId}</span>
                    </div>
                  )}

                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 pt-1">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-3.5 border-t border-slate-800/80 bg-slate-950/40 flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED
                </span>
                <span className="text-slate-400 group-hover:text-white flex items-center gap-1 transition-colors">
                  <span>DETAILS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* High-Resolution Certificate Lightbox Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/90 backdrop-blur-md"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl max-h-[90vh] rounded-3xl bg-[#0A0A1A] border border-slate-700 p-6 sm:p-8 shadow-2xl shadow-black relative overflow-y-auto space-y-6"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close Certificate Viewer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="space-y-2 pr-10">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-mono font-semibold">
                      {selectedCert.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                      VERIFIED CREDENTIAL DOCUMENT
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    {selectedCert.title}
                  </h3>
                  <p className="text-sm font-mono text-purple-400">
                    Issued by {selectedCert.issuer}
                  </p>
                </div>

                {/* High-Resolution Document Display or Fallback */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center min-h-[300px] max-h-[520px] overflow-auto relative">
                  {selectedCert.image ? (
                    <>
                      <div className="absolute top-3 right-3 z-10">
                        <button
                          onClick={() => setIsZoomed(!isZoomed)}
                          className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 backdrop-blur-md cursor-pointer"
                        >
                          {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                          <span>{isZoomed ? 'Reset Zoom' : 'Zoom In'}</span>
                        </button>
                      </div>
                      <img
                        src={selectedCert.image}
                        alt={selectedCert.title}
                        className={`transition-all duration-300 object-contain rounded-xl shadow-2xl ${
                          isZoomed ? 'max-w-none scale-125 cursor-zoom-out' : 'max-h-[460px] max-w-full cursor-zoom-in'
                        }`}
                        onClick={() => setIsZoomed(!isZoomed)}
                      />
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center p-12 text-center space-y-3 text-slate-500">
                      <Award className="w-16 h-16 text-emerald-400/60 stroke-[1.5]" />
                      <span className="text-base font-mono text-slate-300 font-semibold">Certificate image coming soon</span>
                      <p className="text-xs text-slate-400 max-w-md">
                        Original certificate file is pending upload to public/certificates/. All credential metadata is verified.
                      </p>
                    </div>
                  )}
                </div>

                {/* Metadata Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Issue Date & Validity</span>
                    <div className="flex items-center gap-2 text-white font-semibold text-sm">
                      <Calendar className="w-4 h-4 text-emerald-400" />
                      <span>{selectedCert.issueDate}</span>
                    </div>
                    {selectedCert.validUntil && (
                      <span className="text-slate-400 text-[11px] block pt-1">
                        Valid until {selectedCert.validUntil}
                      </span>
                    )}
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Credential Identifier</span>
                    <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm">
                      <Key className="w-4 h-4 text-cyan-400" />
                      <span>{selectedCert.credentialId || selectedCert.verificationCode || 'Verified Certificate'}</span>
                    </div>
                  </div>
                </div>

                {/* Description & Skills */}
                <div className="space-y-3 pt-2 border-t border-slate-800/80 text-xs">
                  <p className="text-slate-300 leading-relaxed">
                    {selectedCert.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skills.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white text-xs font-mono cursor-pointer"
                  >
                    CLOSE VIEWER
                  </button>

                  {selectedCert.credentialUrl && (
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold font-mono flex items-center gap-2 shadow-lg shadow-emerald-600/30"
                    >
                      <span>VERIFY CREDENTIAL ONLINE</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

