import React from 'react';
import { Sparkles, Flame, Star, Video, Zap } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function TickerBar() {
  const items = [
    { text: BRAND_INFO.tagline, icon: Flame, color: "text-[#FF6B35]" },
    { text: "SILIGURI'S PREMIER CONTENT STUDIO", icon: Sparkles, color: "text-[#6C4CF1]" },
    { text: "HIGH CONVERSION REELS & SHORTS", icon: Video, color: "text-[#FF6B35]" },
    { text: "50K+ ORGANIC VIEWS GENERATED", icon: Star, color: "text-[#6C4CF1]" },
    { text: "GOOD BUSINESSES DESERVE GREAT CONTENT", icon: Zap, color: "text-[#FF6B35]" },
  ];

  return (
    <div className="bg-[#161524] text-white py-6 overflow-hidden border-y border-white/10 relative z-20 shadow-xl">
      {/* Sleek edge masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#161524] via-[#161524]/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#161524] via-[#161524]/80 to-transparent z-10 pointer-events-none"></div>

      <div className="animate-ticker flex items-center whitespace-nowrap gap-4">
        {[...items, ...items, ...items, ...items].map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={idx} 
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/15 hover:border-[#FF6B35]/50 transition-all shadow-md shrink-0"
            >
              <div className="p-1 rounded-full bg-white/10 border border-white/15">
                <IconComponent className={`w-3.5 h-3.5 ${item.color} shrink-0`} />
              </div>
              <span className="text-xs font-black tracking-widest font-display text-white uppercase">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}





