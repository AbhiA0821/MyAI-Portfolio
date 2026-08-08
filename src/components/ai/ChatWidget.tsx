import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, User, RefreshCw } from 'lucide-react';
import type { TargetRole } from '../../types/portfolio';

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
  selectedRole: TargetRole;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onClose, selectedRole }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'assistant',
      text: `Hello! I am Abhishek's Multi-Agent AI Career Assistant. Ask me anything about his projects, skills, PySpark/RAG experience, or target ${selectedRole} fit!`,
      agentName: 'Profile Agent',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "What AI & RAG projects has Abhishek built?",
    "What is his experience with PySpark and Data Pipelines?",
    "Explain the MedIntel project architecture.",
    "Which roles is he targeting?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  if (!isOpen) return null;

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

    try {
      // Streamed or Direct Local Assistant Engine API call
      const res = await fetch('http://localhost:8000/api/v1/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query, role_context: selectedRole })
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

          // Parse Agent Badge if present
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
    } catch (err) {
      // Deterministic RAG Fallback Response
      let fallbackText = "I don't have that information in the portfolio knowledge base.";
      const qLower = query.toLowerCase();

      if (qLower.includes("project") || qLower.includes("medintel") || qLower.includes("pyspark")) {
        fallbackText = `Abhishek has built 3 flagship projects: 
1. MyAI Portfolio: A production multi-agent system with RAG and job matching.
2. MedIntel: Clinical knowledge RAG search with citation guards (92.1% precision).
3. PySpark Real-Time Engine: Streaming pipeline processing 120,000 events/sec.`;
      } else if (qLower.includes("skill") || qLower.includes("pyspark") || qLower.includes("rag")) {
        fallbackText = `Abhishek specializes in Multi-Agent Systems, RAG vector search (ChromaDB), PySpark data engineering, PyTorch, FastAPI, and local LLMs (Ollama/Qwen).`;
      } else if (qLower.includes("role") || qLower.includes("target")) {
        fallbackText = `Abhishek is targeting roles as an AI Engineer, ML Engineer, Data Engineer, and Data Scientist.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'assistant',
          text: fallbackText,
          agentName: 'RAG Retriever Guard',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-md h-[550px] bg-[#0B0F17]/95 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden animate-slide-up">
      
      {/* Widget Header */}
      <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/30">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-white font-heading flex items-center gap-1.5">
              MyAI Assistant <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-1.5 py-0.2 rounded">RAG Active</span>
            </h3>
            <p className="text-[10px] text-slate-400 font-mono">Mode: {selectedRole}</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 ${
              msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-blue-400 border border-slate-700'
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
                  : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none whitespace-pre-wrap'
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
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 bg-slate-900/60 p-2 rounded-xl border border-slate-800 w-fit">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>Agent Orchestrator Reasoning...</span>
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
            className="px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800 hover:border-blue-500 hover:text-blue-400 transition-colors shrink-0"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder={`Ask about Abhishek's ${selectedRole} background...`}
          className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={() => handleSend()}
          disabled={!input.trim() || loading}
          className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white transition-colors"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
