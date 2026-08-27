import React from 'react';
import { WHY_US } from '../data/content';
import { Sparkles, Target, TrendingUp, MapPin, CheckCircle2 } from 'lucide-react';

export default function WhyUs() {
  const iconMap = {
    Sparkles: Sparkles,
    Target: Target,
    TrendingUp: TrendingUp,
    MapPin: MapPin,
  };

  return (
    <section id="why-us" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-300 text-[#0F172A] text-xs font-bold uppercase tracking-wider shadow-sm">
            Why Work With Us
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#0F172A]">
            WHY CHOOSE <span className="text-gradient-coral">PIXEL KARIGARS?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-medium">
            We don't just edit videos. We engineer social content that makes your brand the go-to choice in your market.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHY_US.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-3xl border border-slate-200 glass-panel-hover flex gap-6 items-start group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0F172A] text-[#E11D48] flex items-center justify-center shrink-0 shadow-lg group-hover:bg-[#E11D48] group-hover:text-white transition-all">
                  <IconComponent className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-[#0F172A] group-hover:text-[#E11D48] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center bg-white p-6 rounded-2xl border border-slate-300 max-w-2xl mx-auto flex items-center justify-center gap-3 text-slate-800 text-sm font-bold shadow-md">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>No generic stock videos or copy-paste templates. 100% custom content.</span>
        </div>

      </div>
    </section>
  );
}
