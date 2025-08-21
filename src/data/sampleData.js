// Fake data
import { FileText, FileSignature, Coins, Boxes, Globe2 } from 'lucide-react';

export const sampleDocs = [
  { id: 1, name: "Currículo — Ana Silva.pdf", type: "PDF", status: "Assinado", updated: "20/08/2025" },
  { id: 2, name: "Contrato Prestação Serviço.docx", type: "DOCX", status: "Pendente", updated: "18/08/2025" },
  { id: 3, name: "Notas Fiscais 08-2025.zip", type: "ZIP", status: "Indexado", updated: "17/08/2025" },
  { id: 4, name: "Diploma Engenharia.png", type: "IMG", status: "Validado (QR)", updated: "16/08/2025" },
];

export const sampleTemplates = [
  { id: "cv-classico", title: "CV Clássico", tag: "Currículo" },
  { id: "cv-criativo", title: "CV Criativo", tag: "Currículo" },
  { id: "contrato-simples", title: "Contrato Simples", tag: "Contratos" },
  { id: "relatorio-executivo", title: "Relatório Executivo", tag: "Relatórios" },
  { id: "proposta-comercial", title: "Proposta Comercial", tag: "Propostas" },
];

export const market = [
  { id: "agente-cvs", title: "Agente de Currículos", desc: "Gera currículos prontos e estilizados.", icon: FileText },
  { id: "agente-contratos", title: "Agente Jurídico", desc: "Cria e revisa contratos automaticamente.", icon: FileSignature },
  { id: "agente-financas", title: "Agente Financeiro", desc: "Boletos, notas e relatórios em 1 clique.", icon: Coins },
  { id: "agente-projetos", title: "Agente de Projetos", desc: "Planeja e acompanha entregas.", icon: Boxes },
  { id: "agente-pesquisa", title: "Agente de Pesquisa", desc: "Pesquisa e negocia fornecedores.", icon: Globe2 },
];

export const reviews = [
  { user: "Marcos", rating: 5, text: "Experiência impecável. O agente realmente trabalha por mim." },
  { user: "Lia", rating: 5, text: "Scan + OCR perfeito. Templates lindos e prontos em minutos." },
  { user: "Julio", rating: 4, text: "Integrações poderosas. Falta só calendário nativo." },
];

export const landingCards = [
  {
    key: "scanner",
    image: "https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?q=80&w=1600&auto=format&fit=crop",
    tag: "Checkpoint",
    title: "Scanner + OCR + QR",
    desc: "Leia, entenda e valide documentos ao vivo com a câmera.",
    stats: { video: "Live", likes: "9.4K" },
    tab: "scanner",
  },
  {
    key: "assinaturas",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
    tag: "Fluxo",
    title: "Assinaturas e Fluxos",
    desc: "Assine em lote e registre histórico de aprovações.",
    stats: { video: "Ações", likes: "4.2K" },
    tab: "documents",
  },
  {
    key: "templates",
    image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1600&auto=format&fit=crop",
    tag: "Studio",
    title: "Templates Inteligentes",
    desc: "Construtor tipo Canva/Elementor com IA copilotando.",
    stats: { video: "Builder", likes: "6.9K" },
    tab: "templates",
  },
  {
    key: "market",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    tag: "Marketplace",
    title: "Módulos e Agentes",
    desc: "Instale skills da comunidade e expanda o YACE.",
    stats: { video: "+100", likes: "1.3K" },
    tab: "market",
  },
  {
    key: "chat",
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1600&auto=format&fit=crop",
    tag: "Agente IA",
    title: "Chat + Automação",
    desc: "Converse e execute tarefas com um clique.",
    stats: { video: "AaaS", likes: "8.1K" },
    tab: "agents",
  },
];