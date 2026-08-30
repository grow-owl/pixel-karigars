import React from 'react';
import { Sparkles, Flame, Star, Video, Zap } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function TickerBar() {
  const items = [
    { text: BRAND_INFO.tagline, icon: Flame, color: "text-[#FF6B4A]" },
    { text: "SILIGURI'S PREMIER CONTENT STUDIO", icon: Sparkles, color: "text-[#C7F36B]" },
    { text: "HIGH CONVERSION REELS & SHORTS", icon: Video, color: "text-[#FF6B4A]" },
    { text: "500K+ ORGANIC VIEWS GENERATED", icon: Star, color: "text-[#C7F36B]" },
    { text: "GOOD BUSINESSES DESERVE GREAT CONTENT", icon: Zap, color: "text-[#FF6B4A]" },
  ];

  return (
    <div className="bg-[#181818]/85 backdrop-blur-md text-[#F5F3EE] py-5.5 overflow-hidden border-y border-white/10 relative z-20 shadow-2xl">
      {/* Sleek edge masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#181818] via-[#181818]/75 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#181818] via-[#181818]/75 to-transparent z-10 pointer-events-none"></div>

      <div className="animate-ticker flex items-center whitespace-nowrap gap-4 will-change-transform">
        {[...items, ...items, ...items, ...items].map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={idx} 
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#222222]/90 border border-white/12 hover:bg-[#282828] hover:border-[#FF6B4A]/50 transition-all shadow-md shrink-0"
            >
              <div className="p-1 rounded-full bg-white/10 border border-white/15">
                <IconComponent className={`w-3.5 h-3.5 ${item.color} shrink-0`} />
              </div>
              <span className="text-xs font-black tracking-widest font-display text-[#F5F3EE] uppercase">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}





