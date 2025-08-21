import React from 'react';
import { cn } from '../../utils/helpers';

const Pill = ({ children }) => (
  <span className="px-2 py-1 rounded-full text-xs bg-white/5 ring-1 ring-white/10">{children}</span>
);

export default Pill;  
