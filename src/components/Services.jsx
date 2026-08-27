import React from 'react';
import { SERVICES } from '../data/content';
import { Video, Share2, Camera, Compass, Palette, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services({ onSelectService }) {
  const iconMap = {
    "01": Video,
    "02": Share2,
    "03": Camera,
    "04": Compass,
    "05": Palette
  };

  return (
    <section id="services" className="py-24 bg-[#09090B] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-violet-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            ✨ What We Craft For You
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
            SERVICES THAT DRIVE <span className="text-gradient-coral">REAL GROWTH</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-medium">
            From high-impact Reels to full social media management, we build content designed to capture attention and convert viewers into loyal customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.num] || Video;

            return (
              <div
                key={service.id}
                className="glass-panel rounded-3xl p-8 glass-panel-hover flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Accent Top Border Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="space-y-6">
                  {/* Card Number & Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-violet-500/10 text-violet-400 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-colors shadow-sm">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-white/10 text-slate-300 tracking-widest">
                      {service.num}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white group-hover:text-violet-300 transition-colors font-display">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 pt-2 border-t border-white/10">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#C084FC] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer CTA */}
                <div className="pt-8">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-3.5 px-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-violet-600 hover:border-violet-600 transition-all flex items-center justify-center gap-2 shadow-sm group/btn cursor-pointer"
                  >
                    <span>Choose {service.title.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4 text-[#C084FC] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
