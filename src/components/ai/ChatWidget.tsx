import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, User, RefreshCw, Sparkles, Database } from 'lucide-react';
import type { TargetRole } from '../../types/portfolio';
import { projectsData } from '../../data/portfolioData';
import { verifiedCertifications } from '../../data/certificationsData';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  agentName?: string;
  timestamp: string;
}

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRole?: TargetRole;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'assistant',
      text: `Hello! I am Abhishek's AI Portfolio Assistant. Ask me anything about his verified projects (MedIntel [ONGOING], Resume-Matcher, Art-Generation, Data-Engineering), Oracle & industry certifications, technical skills, or GitHub repositories!`,
      agentName: 'Portfolio Assistant Agent',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "What projects has Abhishek built?",
    "What technologies does he use?",
    "What certifications does Abhishek have?",
    "Tell me about MedIntel.",
    "What is his GitHub profile?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    // Simulate RAG status steps
    setActiveStep('RETRIEVING');
    setTimeout(() => setActiveStep('KNOWLEDGE'), 400);
    setTimeout(() => setActiveStep('GENERATING'), 800);

    try {
      const res = await fetch('http://localhost:8000/api/v1/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query })
      });

      if (res.ok && res.body) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let assistantText = '';
        let agentName = 'AI Orchestrator';

        const assistantMsgId = (Date.now() + 1).toString();

        setMessages((prev) => [
          ...prev,
          {
            id: assistantMsgId,
            sender: 'assistant',
            text: '',
            agentName,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          assistantText += chunk;

          if (assistantText.startsWith('[Agent: ') && assistantText.includes(']')) {
            const endIdx = assistantText.indexOf(']');
            agentName = assistantText.substring(8, endIdx);
          }

          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMsgId
                ? { ...msg, text: assistantText.replace(/\[Agent: .*?\]\s*/, ''), agentName }
                : msg
            )
          );
        }
      } else {
        throw new Error('API Unavailable');
      }
    } catch {
      // Grounded Fallback Engine using exact portfolioData / certificationsData source of truth
      let fallbackText = "I don't have verified information about that question.";
      const qLower = query.toLowerCase();

      if (qLower.includes("interviewai") || qLower.includes("interview ai")) {
        fallbackText = "InterviewAI is not currently verified or featured as a flagship project in Abhishek's canonical portfolio showcase.";
      } else {
        const matchedProj = projectsData.find(
          (p) => qLower.includes(p.slug.toLowerCase()) || qLower.includes(p.title.toLowerCase()) || (p.slug === 'medintel' && qLower.includes('medintel'))
        );

        if (matchedProj) {
          fallbackText = `${matchedProj.title}: ${matchedProj.description} Technologies: ${matchedProj.technologies.join(', ')}. GitHub: ${matchedProj.githubUrl}`;
        } else if (qLower.includes("project") || qLower.includes("built") || qLower.includes("work")) {
          const realProjectsList = projectsData.map((p, idx) => `${idx + 1}. ${p.title} (${p.githubUrl})`).join('\n');
          fallbackText = `Abhishek's verified GitHub projects (https://github.com/AbhiA0821) are:\n${realProjectsList}`;
        } else if (qLower.includes("certif")) {
          const realCertsList = verifiedCertifications.map((c, idx) => `${idx + 1}. ${c.title} — ${c.issuer} (${c.issueDate})`).join('\n');
          fallbackText = `Abhishek's verified certifications are:\n${realCertsList}`;
        } else if (qLower.includes("skill") || qLower.includes("technolog")) {
          fallbackText = `Abhishek's verified skills include Python, SQL, PySpark, DuckDB, PyTorch, Scikit-Learn, Streamlit, Flask, and Apache Airflow.`;
        } else if (qLower.includes("github")) {
          fallbackText = `Abhishek's verified GitHub profile is https://github.com/AbhiA0821 containing 9 public repositories.`;
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'assistant',
          text: fallbackText,
          agentName: 'Portfolio Assistant Agent',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setLoading(false);
      setActiveStep(null);
    }
  };

  return (
    <>
      {/* Floating Bottom-Right Chat Activation Orb Button */}
      {!isOpen && (
        <motion.button
          onClick={() => {
            // Trigger parent open state
            const event = new CustomEvent('open-chat-widget');
            window.dispatchEvent(event);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          data-ai-element="true"
          className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-2xl shadow-cyan-500/30 border border-cyan-400/40 backdrop-blur-md cursor-pointer group"
        >
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <Sparkles className="relative w-3.5 h-3.5 text-cyan-200" />
          </div>
          <span>✦ Ask MyAI</span>
        </motion.button>
      )}

      {/* Chatbot Panel Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-md h-[580px] bg-[#050505]/95 backdrop-blur-2xl rounded-3xl border border-slate-700 shadow-2xl shadow-black flex flex-col overflow-hidden"
          >
            
            {/* Header */}
            <div className="px-4 py-3 bg-[#0A0A1A] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white font-heading flex items-center gap-1.5">
                    MyAI Portfolio Assistant
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </h3>
                  <p className="text-[10px] text-slate-400 font-mono">Grounded RAG Knowledge Base</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Visual Execution Status Bar */}
            {activeStep && (
              <div className="px-4 py-1.5 bg-slate-950 border-b border-slate-900 flex items-center justify-between text-[9px] font-mono text-cyan-400">
                <span className="flex items-center gap-1">
                  <Database className="w-3 h-3 text-cyan-400 animate-spin" />
                  <span>STEP: {activeStep}</span>
                </span>
                <span>VERIFIED SOURCES ONLY</span>
              </div>
            )}

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 ${
                    msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-[#0A0A1A] text-cyan-400 border border-slate-800'
                  }`}>
                    {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>

                  <div className={`max-w-[80%] space-y-1 ${msg.sender === 'user' ? 'text-right' : ''}`}>
                    {msg.agentName && msg.sender === 'assistant' && (
                      <span className="text-[9px] font-mono text-purple-400 bg-purple-950/60 px-1.5 py-0.5 rounded border border-purple-800/60 inline-block mb-1">
                        Agent: {msg.agentName}
                      </span>
                    )}

                    <div className={`p-3 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-[#0A0A1A] border border-slate-800 text-slate-200 rounded-tl-none whitespace-pre-wrap'
                    }`}>
                      {msg.text}
                    </div>

                    <span className="text-[9px] font-mono text-slate-500 block px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-[#0A0A1A] p-2.5 rounded-xl border border-slate-800 w-fit">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                  <span>Agent Retrieval & Synthesis...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Quick Questions */}
            <div className="px-3 py-2 bg-slate-950 border-t border-slate-800/80 overflow-x-auto whitespace-nowrap flex gap-1.5 text-[10px]">
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="px-2.5 py-1 rounded-full bg-[#0A0A1A] text-slate-300 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-colors shrink-0 cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <div className="p-3 bg-[#0A0A1A] border-t border-slate-800 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Abhishek's verified profile..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || loading}
                className="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 disabled:opacity-50 text-white transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
