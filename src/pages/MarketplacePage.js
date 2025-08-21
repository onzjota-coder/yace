  import React from 'react';
import { Store } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import PrimaryButton from '../components/ui/PrimaryButton';
import GhostButton from '../components/ui/GhostButton';
import { market } from '../data/sampleData';

const MarketplacePage = () => (
  <div className="space-y-4">
    <SectionTitle icon={Store} title="Marketplace de Módulos" subtitle="Instale skills criadas pela comunidade" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {market.map((m) => (
        <div key={m.id} className="p-4 rounded-2xl ring-1 ring-white/10 bg-white/5">
          <div className="flex items-center gap-2 mb-1">
            <m.icon size={16} />
            <div className="font-medium">{m.title}</div>
          </div>
          <div className="text-xs opacity-70 mb-3">{m.desc}</div>
          <div className="flex gap-2">
            <PrimaryButton>Instalar</PrimaryButton>
            <GhostButton>Detalhes</GhostButton>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MarketplacePage;
