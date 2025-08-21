import React from 'react';
import { cn } from '../../utils/helpers';

const GhostButton = ({ icon: Icon, children, onClick }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/5 active:scale-[.98] transition border border-white/10"
  >
    {Icon ? <Icon size={16} /> : null}
    <span className="text-sm">{children}</span>
  </button>
);

export default GhostButton;  
