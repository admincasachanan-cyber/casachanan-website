import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ArrowUpRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const quickReplies = [
  'What industries do you operate in?',
  'How can I partner with the Group?',
  'Where are your offices?',
  'Tell me about the Foundation',
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Welcome to Casa Chanan Group. How may I assist you today — whether about our subsidiaries, partnerships, or operations?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return;
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setInput('');
    setLoading(true);

    const response = await base44.integrations.Core.InvokeLLM({
      prompt: `You are the official digital assistant for Casa Chanan Group, a premier pan-African diversified conglomerate. Respond professionally, authoritatively, and concisely (max 3 sentences).

Key facts:
- Subsidiaries: Petroleum Development, Logistics, Farms, Mining, Products, Foundation
- Industries: Energy, Infrastructure, Logistics, Agriculture, Mining, Manufacturing
- Offices: Abuja HQ (1 Niagara Close, Maitama), Lagos (13 Lugard Avenue, Ikoyi), Texas USA (32 Miramar Heights Circle, Sugarland)
- Partners: NNPC, Shell, TotalEnergies, Chevron, ExxonMobil, Eni, Seplat Energy
- Contact: +1 347 579 4464 | +234 703 933 9862 | ccpdcl@gmail.com
- Foundation focuses on girl-child education, women empowerment, disabled persons, displaced communities, widows/widowers welfare

User enquiry: ${text}`,
    });

    setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
    setLoading(false);
  };

  return (
    <>
      {/* FAB */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gold text-white shadow-2xl flex items-center justify-center hover:bg-gold-light transition-colors"
        style={{ boxShadow: '0 8px 32px rgba(200,155,60,0.35)' }}
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X className="w-5 h-5" /></motion.div>
            : <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><MessageCircle className="w-5 h-5" /></motion.div>
          }
        </AnimatePresence>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-white border border-gray-200 rounded-sm shadow-2xl flex flex-col overflow-hidden"
            style={{ height: '480px' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-200 bg-white">
              <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img src="https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/9d3f1b3a8_Asset3.png" alt="CC" className="w-6 h-6 object-contain" />
              </div>
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-400 border border-navy" />
              </div>
              <div>
                <p className="text-charcoal font-montserrat font-bold text-xs tracking-wide">Casa Chanan Assistant</p>
                <p className="text-green-600 text-[10px]">Online — Available 24/7</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-white">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'assistant' && (
                    <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mr-2 mt-1 flex-shrink-0 overflow-hidden">
                      <img src="https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/9d3f1b3a8_Asset3.png" alt="CC" className="w-4 h-4 object-contain" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] text-[13px] leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-accent text-white font-medium px-3.5 py-2 rounded-2xl rounded-tr-sm'
                        : 'text-charcoal px-1 py-1'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start items-center gap-2 pl-7">
                  <div className="flex gap-1.5 py-2">
                    {[0, 150, 300].map((d) => (
                      <span key={d} className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-bounce" style={{ animationDelay: `${d}ms` }} />
                    ))}
                  </div>
                </div>
              )}
              {messages.length === 1 && !loading && (
                <div className="flex flex-wrap gap-2 pt-3 pl-7">
                  {quickReplies.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="text-left px-3 py-1.5 text-[11px] bg-transparent border border-accent/25 rounded-full text-accent/70 hover:text-accent hover:border-accent/60 transition-all"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
              className="flex gap-2 px-4 py-3 border-t border-gray-200 bg-white"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our operations..."
                disabled={loading}
                className="flex-1 bg-gray-50 border border-gray-200 rounded-sm px-3 py-2.5 text-charcoal text-[13px] placeholder:text-gray-400 outline-none focus:border-accent/40 transition-colors"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="w-10 h-10 rounded-sm bg-accent text-white flex items-center justify-center hover:bg-accent/80 transition-colors disabled:opacity-40"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}