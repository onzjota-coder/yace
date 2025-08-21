  import React from 'react';
import { Boxes, Wand2, FileText, FileDigit } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import GhostButton from '../components/ui/GhostButton';
import PrimaryButton from '../components/ui/PrimaryButton';
import Pill from '../components/ui/Pill';
import { sampleTemplates } from '../data/sampleData';

const TemplatesPage = () => {
  return (
    <div className="space-y-4">
      <SectionTitle icon={Boxes} title="Templates" subtitle="Crie e compartilhe modelos prontos" />
      <div className="flex flex-wrap gap-2">
        <GhostButton icon={Wand2}>Criar Template</GhostButton>
        <GhostButton icon={FileText}>Gerar Currículo Inteligente</GhostButton>
        <GhostButton icon={FileDigit}>Gerar Boleto</GhostButton>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {sampleTemplates.map((t) => (
          <div key={t.id} className="p-4 rounded-2xl ring-1 ring-white/10 bg-white/5">
            <div className="flex items-center justify-between mb-2">
              <div className="font-medium">{t.title}</div>
              <Pill>{t.tag}</Pill>
            </div>
            <div className="text-xs opacity-70">Construtor tipo Canva/Elementor com IA.</div>
            <div className="mt-3">
              <PrimaryButton>
                <span className="inline-flex items-center gap-2"><Wand2 size={16} /> Usar</span>
              </PrimaryButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplatesPage;
