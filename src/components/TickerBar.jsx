import React from 'react';
import { Sparkles, Flame, Star, Video, Zap } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function TickerBar() {
  const items = [
    { text: BRAND_INFO.tagline, icon: Flame },
    { text: "SILIGURI'S PREMIER CONTENT STUDIO", icon: Sparkles },
    { text: "HIGH CONVERSION REELS & SHORTS", icon: Video },
    { text: "50K+ ORGANIC VIEWS GENERATED", icon: Star },
    { text: "GOOD BUSINESSES DESERVE GREAT CONTENT", icon: Zap },
  ];

  return (
    <div className="bg-[#141417] text-white py-4 overflow-hidden shadow-inner border-y border-white/10">
      <div className="animate-ticker flex items-center whitespace-nowrap">
        {/* Repeat list for seamless marquee loop */}
        {[...items, ...items, ...items].map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={idx} className="inline-flex items-center gap-4 mx-6">
              <IconComponent className="w-4 h-4 text-[#C084FC] shrink-0 animate-pulse" />
              <span className="text-xs sm:text-sm font-black tracking-widest font-display text-slate-200">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
