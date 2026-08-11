import React from 'react';

interface SectionTransitionProps {
  fromColor?: string;
  toColor?: string;
  className?: string;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  fromColor = 'from-[#050505]',
  toColor = 'to-[#050505]',
  className = ''
}) => {
  return (
    <div className={`h-20 sm:h-24 w-full bg-gradient-to-b ${fromColor} ${toColor} relative overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.06),transparent_70%)]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-slate-800/80 to-transparent" />
    </div>
  );
};
