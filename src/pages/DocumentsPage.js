  import React from 'react';
import {
  FileText,
  UploadCloud,
  Camera,
  FileSignature,
  QrCode,
  Wand2
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import GhostButton from '../components/ui/GhostButton';
import Pill from '../components/ui/Pill';
import { sampleDocs } from '../data/sampleData';

const DocumentsPage = () => {
  return (
    <div className="space-y-4">
      <SectionTitle icon={FileText} title="Documentos" subtitle="OCR, assinaturas, validação por QR e mais" />

      <div className="flex flex-wrap gap-2">
        <GhostButton icon={UploadCloud}>Upload</GhostButton>
        <GhostButton icon={Camera}>Scan com Câmera</GhostButton>
        <GhostButton icon={FileSignature}>Assinar em Lote</GhostButton>
        <GhostButton icon={QrCode}>Gerar QR de Validação</GhostButton>
        <GhostButton icon={Wand2}>Gerar Relatório PDF</GhostButton>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {sampleDocs.map((d) => (
          <div key={d.id} className="p-4 rounded-2xl ring-1 ring-white/10 bg-white/5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium">{d.name}</div>
              <Pill>{d.type}</Pill>
            </div>
            <div className="text-xs opacity-70 mb-2">Status: {d.status}</div>
            <div className="text-xs opacity-70">Atualizado: {d.updated}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsPage;
