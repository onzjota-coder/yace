import React, { useState } from 'react';
import {
  FileText,
  Boxes,
  Camera,
  Bot,
  Store,
  Star,
  Settings,
  Wand2,
  MessageSquare,
  Play
} from 'lucide-react';
import Topbar from '../components/navigation/Topbar';
import AIDock from '../components/navigation/AIDock';
import NavItem from '../components/navigation/NavItem';
import PrimaryButton from '../components/ui/PrimaryButton';
import Pill from '../components/ui/Pill';
import DocumentsPage from './DocumentsPage';
import TemplatesPage from './TemplatesPage';
import ScannerPage from './ScannerPage';
import AgentsPage from './AgentsPage';
import MarketplacePage from './MarketplacePage';
import ReviewsPage from './ReviewsPage';
import SettingsPage from './SettingsPage';

const Dashboard = ({ theme, setTheme, setRoute, tab, setTab }) => {
  const [dockOpen, setDockOpen] = useState(true);
  
  return (
    <div className="min-h-screen">
      <Topbar theme={theme} setTheme={setTheme} setRoute={setRoute} />
      <div className="grid grid-cols-12 gap-3 p-4">
        <aside className="col-span-12 md:col-span-2 lg:col-span-2 xl:col-span-2 space-y-2">
          <NavItem icon={FileText} label="Documentos" active={tab === "documents"} onClick={() => setTab("documents")} />
          <NavItem icon={Boxes} label="Templates" active={tab === "templates"} onClick={() => setTab("templates")} />
          <NavItem icon={Camera} label="Scanner" active={tab === "scanner"} onClick={() => setTab("scanner")} />
          <NavItem icon={Bot} label="Agentes" active={tab === "agents"} onClick={() => setTab("agents")} />
          <NavItem icon={Store} label="Marketplace" active={tab === "market"} onClick={() => setTab("market")} />
          <NavItem icon={Star} label="Avaliações" active={tab === "reviews"} onClick={() => setTab("reviews")} />
          <NavItem icon={Settings} label="Configurações" active={tab === "settings"} onClick={() => setTab("settings")} />
        </aside>
        <main className="col-span-12 md:col-span-7 lg:col-span-7 xl:col-span-8">
          <div className="p-4 rounded-3xl ring-1 ring-white/10 bg-white/5 backdrop-blur-xl">
            {tab === "documents" && <DocumentsPage />}
            {tab === "templates" && <TemplatesPage />}
            {tab === "scanner" && <ScannerPage />}
            {tab === "agents" && <AgentsPage />}
            {tab === "market" && <MarketplacePage />}
            {tab === "reviews" && <ReviewsPage />}
            {tab === "settings" && <SettingsPage />}
          </div>
        </main>
        <section className="col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-2 space-y-3">
          <div className="p-4 rounded-3xl ring-1 ring-white/10 bg-white/5">
            <div className="text-sm font-medium mb-2">Insights do Agente</div>
            <div className="text-xs opacity-80 space-y-2">
              <div>• 2 contratos pendentes de assinatura</div>
              <div>• 1 currículo pronto para revisão</div>
              <div>• Sugestão: instalar Agente Financeiro</div>
            </div>
            <div className="mt-3">
              <PrimaryButton>
                <span className="inline-flex items-center gap-2"><Wand2 size={16} /> Executar tudo</span>
              </PrimaryButton>
            </div>
          </div>
          <div className="p-4 rounded-3xl ring-1 ring-white/10 bg-white/5">
            <div className="text-sm font-medium mb-2">Atalhos</div>
            <div className="flex flex-wrap gap-2">
              <Pill>Gerar Contrato</Pill>
              <Pill>Assinar em Lote</Pill>
              <Pill>Validar QR</Pill>
              <Pill>CV Inteligente</Pill>
            </div>
          </div>
          <div className="p-4 rounded-3xl ring-1 ring-white/10 bg-white/5">
            <div className="text-sm font-medium mb-2">Status</div>
            <div className="text-xs opacity-80">Uptime: 99,98% • Latência média IA: 320ms</div>
          </div>
        </section>
      </div>

      <AIDock open={dockOpen} onClose={() => setDockOpen(false)} />
      {!dockOpen && (
        <button onClick={() => setDockOpen(true)} className="fixed right-4 bottom-4 p-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <MessageSquare size={18} />
        </button>
      )}
    </div>
  );
};

export default Dashboard;