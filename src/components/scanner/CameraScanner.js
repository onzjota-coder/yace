  import React, { useEffect, useRef, useState } from 'react';
import { Camera, ScanLine } from 'lucide-react';
import GhostButton from '../ui/GhostButton';
import Pill from '../ui/Pill';

const CameraScanner = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [snapUrl, setSnapUrl] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
          setReady(true);
        }
      } catch (e) {
        setReady(false);
      }
    })();
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((t) => t.stop());
      }
    };
  }, []);

  const snap = () => {
    const v = videoRef.current;
    const c = canvasRef.current;
    if (!v || !c) return;
    c.width = v.videoWidth;
    c.height = v.videoHeight;
    const ctx = c.getContext("2d");
    ctx.drawImage(v, 0, 0);
    setSnapUrl(c.toDataURL("image/png"));
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black/50 aspect-video">
        {!ready ? (
          <div className="w-full h-full flex items-center justify-center text-sm opacity-70">Permita a câmera para escanear</div>
        ) : (
          <video ref={videoRef} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="rounded-2xl p-3 ring-1 ring-white/10">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-medium flex items-center gap-2"><Camera size={16} /> Scanner Inteligente</div>
          <GhostButton icon={ScanLine} onClick={snap}>Capturar</GhostButton>
        </div>
        <canvas ref={canvasRef} className="hidden" />
        {snapUrl ? (
          <div className="space-y-3">
            <img src={snapUrl} alt="captura" className="rounded-xl ring-1 ring-white/10" />
            <div className="text-xs opacity-80">Sugerir ações: <Pill>OCR</Pill> <Pill>Validar QR</Pill> <Pill>Assinar</Pill> <Pill>Converter em PDF</Pill></div>
          </div>
        ) : (
          <div className="text-xs opacity-70">Nenhuma captura ainda.</div>
        )}
      </div>
    </div>
  );
};

export default CameraScanner;
