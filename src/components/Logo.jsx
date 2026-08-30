import React from 'react';

export default function Logo({ size = 'medium', animated = false, showText = true }) {
  const sizeClass = {
    small: 'h-8 w-8 sm:h-9 sm:w-9',
    medium: 'h-10 w-10 sm:h-11 sm:w-11',
    large: 'h-14 w-14 sm:h-16 sm:w-16',
  }[size] || 'h-10 w-10 sm:h-11 sm:w-11';

  const textSizeClass = {
    small: 'text-base sm:text-lg',
    medium: 'text-xl sm:text-2xl',
    large: 'text-3xl sm:text-4xl',
  }[size] || 'text-xl sm:text-2xl';

  const subTextSizeClass = {
    small: 'text-[11px] sm:text-[12px]',
    medium: 'text-[13px] sm:text-[15px]',
    large: 'text-[18px] sm:text-[21px]',
  }[size] || 'text-[13px] sm:text-[15px]';

  return (
    <div className={`inline-flex items-center gap-2.5 group select-none cursor-pointer ${animated ? 'hover:scale-105 transition-transform duration-300' : ''}`}>
      <img 
        src="/images/logo.png" 
        alt="Pixel Karigars Logo" 
        className={`${sizeClass} object-cover rounded-full shadow-sm border border-[#FF6B4A]/30 shrink-0`} 
      />
      {showText && (
        <div className="flex flex-col justify-center leading-none font-display tracking-tight">
          <span className={`${textSizeClass} font-normal text-[#F5F3EE] lowercase`}>
            pixel
          </span>
          <span className={`${subTextSizeClass} font-normal text-[#FF6B4A] lowercase self-end -mt-0.5 sm:-mt-1 pl-3`}>
            karigars
          </span>
        </div>
      )}
    </div>
  );
}




