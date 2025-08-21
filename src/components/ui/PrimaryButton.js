import React from 'react';
import { cn } from '../../utils/helpers';

const PrimaryButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="relative group px-4 py-2 rounded-2xl font-medium overflow-hidden"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-600 opacity-80 group-hover:opacity-100 transition" />
    <span className="relative z-10 text-white drop-shadow-sm">{children}</span>
  </button>
);

export default PrimaryButton;  
