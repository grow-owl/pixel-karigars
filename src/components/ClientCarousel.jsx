import React from 'react';
import { motion } from 'framer-motion';
import { CLIENT_LOGOS } from '../data/content';

export default function ClientCarousel() {
  // Loop list multiple times for an ultra-smooth infinite marquee
  const items = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="relative py-8 sm:py-12 bg-[#141414] border-y border-white/10 overflow-hidden select-none">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-[#FF6B4A]/[0.03] blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 sm:mb-7 text-center relative z-10">
        {/* Header Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1c1c] border border-white/12 shadow-md hover:border-[#FF6B4A]/30 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF6B4A] animate-pulse"></span>
          <span className="text-[10px] sm:text-xs font-black tracking-widest text-[#D1CEC7] uppercase font-display">
            TRUSTED BY GROWING LOCAL BUSINESSES & BRANDS
          </span>
        </motion.div>
      </div>

      {/* Marquee Carousel Track */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge blur masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#141414] via-[#141414]/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#141414] via-[#141414]/80 to-transparent z-20 pointer-events-none"></div>

        {/* Scrolling Inner Container */}
        <div className="animate-ticker flex items-center gap-4 sm:gap-6 py-2">
          {items.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="inline-flex items-center gap-3.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl sm:rounded-full bg-[#1b1b1b] border border-white/10 hover:border-[#FF6B4A]/40 hover:bg-[#222222] transition-all duration-300 shadow-lg shadow-black/30 shrink-0 group cursor-default"
              style={{
                boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.4)"
              }}
            >
              {/* Logo Avatar Icon */}
              <div 
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center p-1 shrink-0 overflow-hidden border border-white/15 group-hover:scale-105 transition-transform duration-300 shadow-inner"
                style={{ backgroundColor: client.badgeBg }}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-full h-full object-contain filter drop-shadow-sm"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to PNG if webp is not supported
                    if (e.target.src !== client.logoPng) {
                      e.target.src = client.logoPng;
                    }
                  }}
                />
              </div>

              {/* Text Information */}
              <div className="flex flex-col text-left pr-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-extrabold font-display text-[#F5F3EE] tracking-tight group-hover:text-[#FF6B4A] transition-colors whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold text-[#A6A39D] tracking-wider uppercase whitespace-nowrap">
                  {client.subtext}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
