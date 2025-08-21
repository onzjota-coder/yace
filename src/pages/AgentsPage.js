// src/pages/AgentsPage.js - VERSÃO CORRIGIDA
import React from 'react';
import { Bot, Play, FileText, FileSignature, Coins, Boxes, Globe2 } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import PrimaryButton from '../components/ui/PrimaryButton';
import GhostButton from '../components/ui/GhostButton';
import { market } from '../data/sampleData';

// Mapeamento de ícones
const iconComponents = {
  'FileText': FileText,
  'FileSignature': FileSignature, 
  'Coins': Coins,
  'Boxes': Boxes,
  'Globe2': Globe2
};

const AgentsPage = () => (
  <div className="space-y-4">
    <SectionTitle icon={Bot} title="Agentes Pessoais" subtitle="Seu colega de trabalho que age por você" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {market.slice(0, 3).map((m) => {
        const IconComponent = iconComponents[m.icon.name];
        
        return (
          <div key={m.id} className="p-4 rounded-2xl ring-1 ring-white/10 bg-white/5">
            <div className="flex items-center gap-2 mb-1">
              <IconComponent size={16} />
              <div className="font-medium">{m.title}</div>
            </div>
            <div className="text-xs opacity-70 mb-3">{m.desc}</div>
            <div className="flex gap-2">
              <PrimaryButton>
                <span className="inline-flex items-center gap-2">
                  <Play size={16} /> Ativar
                </span>
              </PrimaryButton>
              <GhostButton>Configurar</GhostButton>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default AgentsPage;