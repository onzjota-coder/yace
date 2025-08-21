import React from 'react';
import { cn } from '../../utils/helpers';

const SectionTitle = ({ icon: Icon, title, subtitle }) => (
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-3">
      {Icon ? (
        <span className="p-2 rounded-xl bg-white/5 ring-1 ring-white/10"><Icon size={18} /></span>
      ) : null}
      <div>
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        {subtitle ? <p className="text-xs opacity-70">{subtitle}</p> : null}
      </div>
    </div>
  </div>
);

export default SectionTitle;  
