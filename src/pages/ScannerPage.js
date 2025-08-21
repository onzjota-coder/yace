  import React from 'react';
import { Camera } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import CameraScanner from '../components/scanner/CameraScanner';

const ScannerPage = () => (
  <div className="space-y-4">
    <SectionTitle icon={Camera} title="Scanner com IA" subtitle="Leia, entenda e aja sobre documentos em tempo real" />
    <CameraScanner />
  </div>
);

export default ScannerPage;
