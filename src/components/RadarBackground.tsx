import React from 'react';

interface RadarBackgroundProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const RadarBackground: React.FC<RadarBackgroundProps> = ({ 
  className = '',
  size = 'md' 
}) => {
  const sizeMap = {
    sm: 'w-64 h-64 -top-12 -right-12',
    md: 'w-96 h-96 -top-20 -right-20 md:w-[500px] md:h-[500px]',
    lg: 'w-[500px] h-[500px] -top-24 -right-24 md:w-[700px] md:h-[700px]'
  };

  return (
    <div className={`pointer-events-none absolute overflow-hidden select-none opacity-40 ${className}`}>
      <div className={`relative ${sizeMap[size]}`}>
        {/* Ring 1 */}
        <div className="absolute inset-0 rounded-full border border-[#20D77A]/20" />
        {/* Ring 2 */}
        <div className="absolute inset-8 rounded-full border border-[#20D77A]/30" />
        {/* Ring 3 */}
        <div className="absolute inset-16 rounded-full border border-[#20D77A]/40" />
        {/* Ring 4 */}
        <div className="absolute inset-28 rounded-full border border-[#20D77A]/50 animate-radar-1" />
        {/* Ring 5 */}
        <div className="absolute inset-40 rounded-full border border-[#20D77A]/30 animate-radar-2" />
        {/* Center glowing core */}
        <div className="absolute inset-[42%] rounded-full bg-[#20D77A]/15 blur-xl" />
      </div>
    </div>
  );
};
