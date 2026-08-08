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
    <div className={`h-24 w-full bg-gradient-to-b ${fromColor} ${toColor} relative overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.05),transparent_70%)]" />
    </div>
  );
};
