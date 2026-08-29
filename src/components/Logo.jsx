import React from 'react';

export default function Logo({ size = 'medium', animated = false }) {
  const heightClass = {
    small: 'h-8 sm:h-9',
    medium: 'h-10 sm:h-12',
    large: 'h-14 sm:h-16',
  }[size] || 'h-10 sm:h-12';

  return (
    <div className={`inline-flex items-center group select-none cursor-pointer ${animated ? 'hover:scale-105 transition-transform duration-300' : ''}`}>
      <img 
        src="/images/logo.png" 
        alt="Pixel Karigars Logo" 
        className={`${heightClass} w-auto object-contain rounded-xl mix-blend-screen`} 
      />
    </div>
  );
}




