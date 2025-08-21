import React from 'react';
import { cn } from '../../utils/helpers';
import Pill from './Pill';
import { Play, Star } from 'lucide-react'; // Adicionando import dos ícones

const FeatureCard = ({ image, tag = "APP", title, desc, stats, onClick }) => (
  <button onClick={onClick} className="relative group rounded-2xl overflow-hidden text-left bg-black/40 ring-1 ring-white/10 hover:ring-white/20 transition focus:outline-none focus:ring-2 focus:ring-indigo-500">
    <div className="absolute inset-0">
      <img src={image} alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
    </div>
    <div className="relative p-3 flex flex-col gap-2 min-h-44">
      <div className="flex items-center gap-2">
        <Pill>{tag}</Pill>
        {stats?.video && (
          <span className="inline-flex items-center gap-1 text-[11px] opacity-80"><Play size={14}/> {stats.video}</span>
        )}
        {stats?.likes && (
          <span className="inline-flex items-center gap-1 text-[11px] opacity-80"><Star size={14} /> {stats.likes}</span>
        )}
      </div>
      <div className="mt-auto">
        <div className="text-base font-semibold drop-shadow">{title}</div>
        <div className="text-xs opacity-90 max-w-[90%]">{desc}</div>
      </div>
    </div>
  </button>
);

export default FeatureCard;