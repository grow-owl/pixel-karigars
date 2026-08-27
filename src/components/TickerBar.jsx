import React from 'react';
import { Film, Sparkles, Video, Zap } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function TickerBar() {
  const items = [
    { text: "CONTENT CREATION", icon: Film },
    { text: "INSTAGRAM REELS", icon: Video },
    { text: "SOCIAL MEDIA MANAGEMENT", icon: InstagramIcon },
    { text: "CREATIVE VISUALS", icon: Sparkles },
    { text: "GOOD BUSINESSES DESERVE GREAT CONTENT", icon: Zap },
    { text: "SILIGURI & PAN-INDIA", icon: Film },
  ];

  return (
    <div className="w-full bg-[#0F172A] py-3.5 overflow-hidden shadow-md border-y border-slate-800 select-none">
      <div className="animate-ticker flex items-center whitespace-nowrap">
        {/* Render twice for seamless infinite loop */}
        {[...items, ...items, ...items, ...items].map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-4 mx-6 text-white font-bold text-sm sm:text-base tracking-wider uppercase">
              <Icon className="w-4 h-4 text-[#E11D48] shrink-0" />
              <span>{item.text}</span>
              <span className="text-slate-600 text-lg font-bold">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
