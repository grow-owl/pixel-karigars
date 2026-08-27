import React from 'react';

export default function Logo({ size = 'medium', showText = true, animated = false, lightText = false }) {
  const dimensions = {
    small: { icon: 32, text: 'text-lg', subtext: 'text-[9px]' },
    medium: { icon: 42, text: 'text-xl', subtext: 'text-[10px]' },
    large: { icon: 56, text: 'text-2xl', subtext: 'text-[11px]' },
  }[size] || { icon: 42, text: 'text-xl', subtext: 'text-[10px]' };

  return (
    <div className="inline-flex items-center gap-3 group select-none cursor-pointer">
      {/* Outer Gradient Badge Container */}
      <div 
        className={`relative flex items-center justify-center rounded-full p-[2.5px] bg-gradient-to-tr from-[#E4A576] via-[#698EA2] to-[#152935] ${
          animated ? 'hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#E4A576]/25' : ''
        }`}
        style={{ width: dimensions.icon + 6, height: dimensions.icon + 6 }}
      >
        {/* Inner Backdrop */}
        <div className={`w-full h-full rounded-full flex items-center justify-center p-1.5 overflow-hidden relative bg-[#0F0E17]`}>
          
          {/* Logo SVG */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* P Chat-Bubble Body */}
            <path
              d="M30 20 H60 C75 20 85 30 85 45 C85 60 75 70 60 70 H48 V85 C48 89 44 92 40 88 L30 78 H30 C20 78 12 70 12 60 V38 C12 28 20 20 30 20 Z"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Inner Primary Terracotta Pac-Man character in the head of P */}
            <path
              d="M48 45 A 16 16 0 1 1 54 31 L 48 45 Z"
              fill="#FF6B35"
            />
            {/* Eye */}
            <circle cx="46" cy="36" r="2.5" fill="#0F0E17" />

            {/* Top Right Slate Blue Record Dot */}
            <circle cx="82" cy="18" r="6.5" fill="#6C4CF1" className={animated ? "animate-pulse" : ""} />
            <circle cx="82" cy="18" r="9" stroke="#6C4CF1" strokeWidth="1.5" strokeOpacity="0.4" className={animated ? "animate-ping" : ""} />
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`font-black tracking-tight text-white ${dimensions.text} font-display`}>
              PIXEL<span className="text-[#FF6B35]">KARIGARS</span>
            </span>
          </div>
          <span className={`font-bold tracking-widest text-[#A0A0B2] uppercase ${dimensions.subtext} mt-0.5`}>
            Content Studio • Siliguri
          </span>
        </div>
      )}
    </div>
  );
}




