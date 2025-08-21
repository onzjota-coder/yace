  import React from 'react';
import { cn } from '../../utils/helpers';

const NavItem = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition",
      active ? "bg-white/10" : "hover:bg-white/5"
    )}
  >
    <Icon size={18} />
    <span>{label}</span>
  </button>
);

export default NavItem;
