  import React from 'react';
import { Settings } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import PrimaryButton from '../components/ui/PrimaryButton';
import GhostButton from '../components/ui/GhostButton';

const SettingsPage = () => (
  <div className="space-y-4">
    <SectionTitle icon={Settings} title="Configurações" subtitle="Preferências, tokens e privacidade" />
    <div className="grid md:grid-cols-2 gap-3">
      <div className="p-4 rounded-2xl ring-1 ring-white/10 bg-white/5">
        <div className="text-sm font-medium mb-2">Conta</div>
        <div className="text-xs opacity-80">E-mail, senha, verificação em duas etapas.</div>
      </div>
      <div className="p-4 rounded-2xl ring-1 ring-white/10 bg-white/5">
        <div className="text-sm font-medium mb-2">Tokens</div>
        <div className="text-xs opacity-80 mb-2">Pague apenas pelo uso. Compre créditos quando precisar.</div>
        <div className="flex gap-2">
          <PrimaryButton>Adicionar 500</PrimaryButton>
          <GhostButton>Histórico</GhostButton>
        </div>
      </div>
      <div className="p-4 rounded-2xl ring-1 ring-white/10 bg-white/5">
        <div className="text-sm font-medium mb-2">Privacidade</div>
        <div className="text-xs opacity-80">Controle total sobre seus dados. Exporte, delete, audite.</div>
      </div>
      <div className="p-4 rounded-2xl ring-1 ring-white/10 bg-white/5">
        <div className="text-sm font-medium mb-2">Integrações</div>
        <div className="text-xs opacity-80">GitHub, Vercel, Google Drive, Notion, DocuSign e mais.</div>
      </div>
    </div>
  </div>
);

export default SettingsPage;
