  import React, { useState } from 'react';
import { cn } from './utils/helpers';
import { themes } from './data/themes';
import Landing from './pages/Landing';
import AuthCard from './components/auth/AuthCard';
import Dashboard from './pages/Dashboard';

export default function YACEApp() {
  const [route, setRoute] = useState("landing");
  const [authMode, setAuthMode] = useState("login");
  const [theme, setTheme] = useState("dark");
  const [tab, setTab] = useState("documents");

  const t = themes[theme];

  return (
    <div className={cn("min-h-screen font-[ui-sans-serif]", t.bg, t.text)}>
      <div className={cn("fixed inset-0 -z-10 bg-gradient-to-br", t.grad)} />
      <div className="max-w-[1200px] mx-auto">
        {route === "landing" && (
          <div className="p-4">
            <Landing 
              onGetStarted={() => setRoute("auth")} 
              onOpenFeature={(featureTab) => { setRoute("dashboard"); setTab(featureTab); }}
            />
            <div className="pt-4 flex items-center justify-center">
              <button onClick={() => setRoute("auth")} className="text-sm opacity-80 hover:opacity-100">Já tem conta? Entrar</button>
            </div>
          </div>
        )}

        {route === "auth" && (
          <div className="p-4 min-h-screen grid place-items-center">
            <AuthCard
              mode={authMode}
              onSwitch={() => setAuthMode((m) => (m === "login" ? "register" : "login"))}
              onContinue={() => setRoute("dashboard")}
            />
          </div>
        )}

        {route === "dashboard" && (
          <Dashboard theme={theme} setTheme={setTheme} setRoute={setRoute} tab={tab} setTab={setTab} />
        )}
      </div>

      {/* Footer */}
      {route !== "dashboard" && (
        <footer className="px-4 pb-6 text-xs opacity-70 text-center">
          © 2025 YACE • Plataforma Universal de Agentes IA — Modelo aberto e justo • Segurança de dados
        </footer>
      )}
    </div>
  );
}
