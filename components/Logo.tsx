import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto fill-white" aria-label="PRGM Logo">
         {/* Abstract P shape based on the image provided: a block with a curve */}
         <path d="M0 0 H60 A40 40 0 0 1 60 80 H0 V0 M25 25 V55 H50 A15 15 0 0 0 50 25 H25" />
      </svg>
      <span className="font-sans font-bold text-2xl tracking-tighter text-white">
        PRGM
      </span>
    </div>
  );
};