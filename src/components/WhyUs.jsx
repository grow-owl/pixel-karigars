import React from 'react';
import { WHY_US } from '../data/content';
import { Sparkles, Target, TrendingUp, MapPin } from 'lucide-react';

export default function WhyUs() {
  const iconMap = {
    Sparkles,
    Target,
    TrendingUp,
    MapPin
  };

  return (
    <section id="why-us" className="py-24 bg-[#09090B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-violet-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            🔥 Why Local Businesses Choose Us
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
            WE DON'T JUST MAKE REELS, <br className="hidden sm:inline" />
            <span className="text-gradient-coral">WE BUILD BRANDS.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-medium">
            Here's how Pixel Karigars stands out from generic agencies and freelancer templates.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHY_US.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;

            return (
              <div
                key={idx}
                className="glass-panel rounded-3xl p-8 glass-panel-hover flex gap-6 items-start group"
              >
                <div className="w-14 h-14 rounded-2xl bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0 group-hover:bg-violet-600 group-hover:text-white transition-colors shadow-sm">
                  <IconComponent className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white group-hover:text-violet-300 transition-colors font-display">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
