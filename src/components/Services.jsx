import React from 'react';
import { SERVICES } from '../data/content';
import { Check, ArrowRight } from 'lucide-react';

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-300 text-[#0F172A] text-xs font-bold uppercase tracking-wider shadow-sm">
            Our Core Services
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#0F172A]">
            SERVICES THAT <span className="text-gradient-coral">DRIVE REAL RESULTS</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-medium">
            Every service is tailored with clear client benefits — from scroll-stopping reels to full profile management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-panel p-8 rounded-3xl border border-slate-200 glass-panel-hover flex flex-col justify-between relative group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-display text-slate-400 group-hover:text-[#E11D48] transition-colors">
                    {service.num}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full text-white bg-[#E11D48] shadow-sm">
                    {service.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-extrabold text-[#0F172A] mb-3 group-hover:text-[#E11D48] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 pt-4 border-t border-slate-200 mb-8">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800">
                      <div className="w-4 h-4 rounded-full bg-rose-500/10 text-[#E11D48] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#0F172A] hover:bg-[#E11D48] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>Enquire For This Service</span>
                <ArrowRight className="w-4 h-4 text-[#E11D48] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}

          {/* Custom Project Box */}
          <div className="glass-panel p-8 rounded-3xl border border-dashed border-[#E11D48]/50 bg-gradient-to-br from-rose-500/10 via-[#F8FAFC] to-[#F1F5F9] flex flex-col justify-between relative group shadow-md">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-black font-display text-[#E11D48]">⚡</span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full text-white bg-[#0F172A] shadow-sm">
                  Custom Request
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#0F172A] mb-3">
                Have a Custom Campaign?
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Need a full video ad campaign, product shoot marathon, or hybrid social management? We build bespoke packages tailored to your goals.
              </p>
            </div>

            <button
              onClick={() => onSelectService('Custom Project')}
              className="w-full py-3.5 px-4 rounded-2xl bg-[#E11D48] hover:bg-[#BE123C] hover:scale-[1.02] text-white font-black text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Discuss Custom Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
