import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: string, content: string}[]>([
    { role: 'assistant', content: 'Hi! I am Surya, your safety assistant. How can I help you today?' }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.content })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply || "Error getting response." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I couldn't connect to the server." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white rounded-lg shadow-2xl flex flex-col border border-slate-200">
          <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <span className="font-semibold">Surya AI Assistant</span>
            <button onClick={() => setIsOpen(false)} className="hover:text-slate-200 transition-colors"><X size={18} /></button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto bg-slate-50 flex flex-col gap-2">
            {messages.map((msg, i) => (
              <div key={i} className={`p-2 max-w-[85%] rounded-lg text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white self-end rounded-br-none' : 'bg-white border text-slate-800 self-start rounded-bl-none shadow-sm'}`}>
                {msg.content}
              </div>
            ))}
            {loading && <div className="text-xs text-slate-500 self-start italic flex items-center gap-1"><span className="animate-pulse">Surya is typing</span></div>}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 border-t flex gap-2 bg-white">
            <input 
              type="text" 
              value={input} 
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              className="flex-1 border border-slate-300 rounded-md px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              placeholder="Ask a question..."
            />
            <button onClick={handleSend} disabled={loading} className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors">
              <Send size={16} />
            </button>
          </div>
          <div className="bg-slate-100 text-[10px] text-center py-1 text-slate-500 rounded-b-lg border-t">
            ⚡ Powered by Groq AI
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all flex items-center justify-center gap-2 group animate-bounce hover:animate-none"
        >
          <MessageCircle size={24} />
          <span className="font-semibold">Ask AI</span>
        </button>
      )}
    </div>
  );
}
