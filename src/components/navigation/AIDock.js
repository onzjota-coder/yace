  import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Play } from 'lucide-react';
import GhostButton from '../ui/GhostButton';
import PrimaryButton from '../ui/PrimaryButton';
import { cn } from '../../utils/helpers';

const AIDock = ({ open, onClose }) => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Olá! Sou seu Agente YACE. O que vamos criar hoje?" },
  ]);
  const [input, setInput] = useState("");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: 420 }}
          animate={{ x: 0 }}
          exit={{ x: 420 }}
          transition={{ type: "spring", stiffness: 240, damping: 28 }}
          className="fixed right-4 top-20 bottom-4 w-[360px] rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden backdrop-blur-xl z-50"
        >
          <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
            <div className="text-sm font-medium flex items-center gap-2"><Bot size={16} /> Agente IA</div>
            <GhostButton onClick={onClose}>Fechar</GhostButton>
          </div>
          <div className="p-3 h-[calc(100%-120px)] overflow-y-auto space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={cn("text-sm p-2 rounded-xl max-w-[85%]", m.role === "assistant" ? "bg-white/5" : "bg-indigo-600/20")}>{m.content}</div>
            ))}
          </div>
          <div className="p-3 border-t border-white/10 grid grid-cols-[1fr_auto] gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ex.: Gere um currículo profissional" className="px-3 py-2 rounded-xl bg-transparent border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <PrimaryButton onClick={() => {
              if (!input.trim()) return;
              setMessages((prev) => [...prev, { role: "user", content: input }]);
              setInput("");
              setTimeout(() => {
                setMessages((prev) => [...prev, { role: "assistant", content: "Entendi. Vou preparar isso agora como um fluxo automatizado (AaaS)." }]);
              }, 400);
            }}>
              <span className="inline-flex items-center gap-2"><Play size={16} /> Enviar</span>
            </PrimaryButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIDock;
