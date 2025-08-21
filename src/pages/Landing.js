import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Boxes,
  Coins,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import PrimaryButton from '../components/ui/PrimaryButton';
import GhostButton from '../components/ui/GhostButton';
import FeatureCard from '../components/ui/FeatureCard';
import { landingCards } from '../data/sampleData';

const Landing = ({ onGetStarted, onOpenFeature }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl bg-gradient-to-br from-indigo-600/30 via-fuchsia-600/20 to-cyan-600/30"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl bg-gradient-to-tr from-cyan-600/20 via-fuchsia-600/20 to-indigo-600/20"></div>
      </div>

      <div className="text-center py-16 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 backdrop-blur">
          <Sparkles size={14} />
          <span className="text-xs">Agora: documentos + agentes + automação</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
          YACE — Plataforma Universal de Agentes IA
        </h1>
        <p className="max-w-2xl mx-auto opacity-80">
          Um super app que une <b>scan, OCR, assinatura, templates, currículos, boletos</b> e agentes autônomos.
          Design dark clássico, minimalista, e IA que realmente <b>age por você</b>.
        </p>
        <div className="flex items-center justify-center gap-3">
          <PrimaryButton onClick={onGetStarted}>Começar agora</PrimaryButton>
          <GhostButton icon={MessageSquare}>Falar com o Agente</GhostButton>
        </div>
        <div className="flex items-center justify-center gap-6 text-sm opacity-80">
          <div className="flex items-center gap-2"><ShieldCheck size={16} /> Segurança de ponta</div>
          <div className="flex items-center gap-2"><Boxes size={16} /> Marketplace aberto</div>
          <div className="flex items-center gap-2"><Coins size={16} /> Pague só pelo uso</div>
        </div>
      </div>

      {/* Grid de cards no estilo do print */}
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto p-4">
        {landingCards.map((c) => (
          <FeatureCard
            key={c.key}
            image={c.image}
            tag={c.tag}
            title={c.title}
            desc={c.desc}
            stats={c.stats}
            onClick={() => onOpenFeature?.(c.tab)}
          />
        ))}
      </div>

      <div className="text-center py-10">
        <div className="inline-flex items-center gap-2 text-sm opacity-80">
          <CheckCircle2 size={16} /> Já em uso por criadores, empresas e estudantes
        </div>
      </div>
    </div>
  );
};

export default Landing;