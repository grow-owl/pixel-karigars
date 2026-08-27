import React from 'react';

export default function SectionDivider({ accent = 'coral' }) {
  const isCoral = accent === 'coral';

  return (
    <div className="relative w-full py-2 bg-[#0F0E17] flex items-center justify-center overflow-hidden z-20">
      {/* Subtle Base Line Across Page */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>

      {/* Center Neon Glowing Gradient Pulse */}
      <div 
        className={`absolute inset-x-1/4 sm:inset-x-1/3 h-[2px] bg-gradient-to-r from-transparent ${
          isCoral 
            ? 'via-[#FF6B35] to-transparent shadow-[0_0_15px_#FF6B35]' 
            : 'via-[#6C4CF1] to-transparent shadow-[0_0_15px_#6C4CF1]'
        }`}
      />

      {/* Central Diamond Accent */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
        <div 
          className={`w-3.5 h-3.5 rotate-45 rounded-[2px] border border-white/40 backdrop-blur-md transition-transform hover:scale-125 ${
            isCoral 
              ? 'bg-[#FF6B35] shadow-[0_0_18px_#FF6B35]' 
              : 'bg-[#6C4CF1] shadow-[0_0_18px_#6C4CF1]'
          }`}
        />
      </div>
    </div>
  );
}
