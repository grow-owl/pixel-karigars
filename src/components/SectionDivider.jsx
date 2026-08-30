import React from 'react';

export default function SectionDivider({ accent = 'coral' }) {
  const isCoral = accent === 'coral';

  return (
    <div className="relative w-full py-2 bg-[#111111] flex items-center justify-center overflow-hidden z-20">
      {/* Subtle Base Line Across Page */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>

      {/* Center Neon Glowing Gradient Pulse */}
      <div 
        className={`absolute inset-x-1/4 sm:inset-x-1/3 h-[2px] bg-gradient-to-r from-transparent ${
          isCoral 
            ? 'via-[#FF6B4A] to-transparent shadow-[0_0_15px_#FF6B4A]' 
            : 'via-[#C7F36B] to-transparent shadow-[0_0_15px_#C7F36B]'
        }`}
      />

      {/* Central Diamond Accent */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
        <div 
          className={`w-3.5 h-3.5 rotate-45 rounded-[2px] border border-white/40 backdrop-blur-md transition-transform hover:scale-125 ${
            isCoral 
              ? 'bg-[#FF6B4A] shadow-[0_0_18px_#FF6B4A]' 
              : 'bg-[#C7F36B] shadow-[0_0_18px_#C7F36B]'
          }`}
        />
      </div>
    </div>
  );
}
