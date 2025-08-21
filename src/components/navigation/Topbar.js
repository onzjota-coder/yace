  import React from 'react';
import {
  Sparkles,
  Search,
  Lock,
  Sun,
  Moon,
  Coins
} from 'lucide-react';
import GhostButton from '../ui/GhostButton';
import { cn } from '../../utils/helpers';

const Topbar = ({ theme, setTheme, setRoute }) => (
  <div className="flex items-center justify-between px-4 py-3 sticky top-0 z-40 backdrop-blur-xl">
    <div className="flex items-center gap-3">
      <div className="size-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-cyan-600">
        <Sparkles size={18} className="text-white" />
      </div>
      <div>
        <div className="font-semibold leading-tight">YACE</div>
        <div className="text-xs opacity-60 leading-tight">Plataforma Universal de Agentes IA</div>
      </div>
    </div>

    <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-6">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60" size={16} />
        <input placeholder="Buscar documentos, templates ou agentes..." className="w-full pl-9 pr-3 py-2 rounded-xl bg-transparent border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>
    </div>

    <div className="flex items-center gap-2">
      <div className="px-3 py-1 rounded-xl border border-white/10 text-xs flex items-center gap-2">
        <Coins size={14} />
        <span>1.200</span>
        <span className="opacity-60">tokens</span>
      </div>
      <button
        onClick={() => setTheme((t) => (t === "dark" ? "classic" : "dark"))}
        className="p-2 rounded-xl border border-white/10 hover:bg-white/5"
        title="Alternar tema"
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </button>
      <button onClick={() => setRoute("landing")} className="p-2 rounded-xl border border-white/10 hover:bg-white/5" title="Sair">
        <Lock size={16} />
      </button>
    </div>
  </div>
);

export default Topbar;
