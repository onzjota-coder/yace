import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  LogIn,
  UserPlus,
  Star
} from 'lucide-react';
import PrimaryButton from '../ui/PrimaryButton';
import Pill from '../ui/Pill';
import { reviews } from '../../data/sampleData';

const AuthCard = ({ mode = "login", onSwitch, onContinue }) => {
  return (
    <div className="max-w-md w-full mx-auto p-6 rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-cyan-600">
            <Sparkles size={18} className="text-white" />
          </div>
          <h2 className="font-semibold">YACE</h2>
        </div>
        <Pill>{mode === "login" ? "Entrar" : "Cadastrar"}</Pill>
      </div>

      <div className="grid gap-3">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-white/10 hover:bg-white/5 transition">
          <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="w-4 h-4" />
          Continuar com Google
        </button>
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-white/10 hover:bg-white/5 transition">
          <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="w-4 h-4" />
          Continuar com Apple
        </button>
      </div>

      <div className="my-4 text-center text-xs opacity-60">ou</div>

      <div className="grid gap-3">
        <div className="grid gap-1">
          <label className="text-xs opacity-70">E-mail</label>
          <input placeholder="voce@exemplo.com" className="px-3 py-2 rounded-xl bg-transparent border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div className="grid gap-1">
          <label className="text-xs opacity-70">Senha</label>
          <input type="password" placeholder="••••••••" className="px-3 py-2 rounded-xl bg-transparent border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        <PrimaryButton onClick={onContinue}>
          {mode === "login" ? (
            <span className="inline-flex items-center gap-2"><LogIn size={16} /> Entrar</span>
          ) : (
            <span className="inline-flex items-center gap-2"><UserPlus size={16} /> Cadastrar</span>
          )}
        </PrimaryButton>

        <button onClick={onSwitch} className="text-xs opacity-70 hover:opacity-100 mt-1">
          {mode === "login" ? "Não tem conta? Cadastre-se" : "Já tem conta? Entrar"}
        </button>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2 text-xs">
          <ShieldCheck size={14} />
          <span>Criptografia ponta a ponta. Você controla seus dados.</span>
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs">
          <HeartHandshake size={14} />
          <span>Plataforma colaborativa: ganhe tokens criando módulos.</span>
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-4">
        <div className="flex items-center gap-2 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-400" size={16} fill="currentColor" />
          ))}
          <span className="text-xs opacity-70">(1.248 avaliações)</span>
        </div>
        {reviews.slice(0, 2).map((r, i) => (
          <div key={i} className="text-xs opacity-80">“{r.text}” — {r.user}</div>
        ))}
      </div>
    </div>
  );
};

export default AuthCard;  
