import React from 'react';
import { Sparkles, Flame, Star, Video, Zap } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function TickerBar() {
  const items = [
    { text: BRAND_INFO.tagline, icon: Flame, color: "text-[#FF6B4A]" },
    { text: "SILIGURI'S PREMIER CONTENT STUDIO", icon: Sparkles, color: "text-[#C7F36B]" },
    { text: "HIGH CONVERSION REELS & SHORTS", icon: Video, color: "text-[#FF6B4A]" },
    { text: "ORGANIC REACH & ENGAGEMENT GENERATED", icon: Star, color: "text-[#C7F36B]" },
    { text: "GOOD BUSINESSES DESERVE GREAT CONTENT", icon: Zap, color: "text-[#FF6B4A]" },
  ];

  return (
    <div className="bg-white text-[#0F172A] py-5 overflow-hidden border-y border-slate-200/80 relative z-20 shadow-sm">
      {/* Sleek edge masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

      <div className="animate-ticker flex items-center whitespace-nowrap gap-4">
        {[...items, ...items, ...items, ...items].map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={idx} 
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200/80 hover:bg-slate-100 hover:border-[#FF6B4A]/50 transition-all shadow-xs shrink-0"
            >
              <div className="p-1 rounded-full bg-white border border-slate-200 shadow-xs">
                <IconComponent className={`w-3.5 h-3.5 text-[#FF6B4A] shrink-0`} />
              </div>
              <span className="text-xs font-black tracking-widest font-display text-[#0F172A] uppercase">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}





