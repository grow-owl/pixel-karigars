import React from 'react';
import { PRICING_PLANS } from '../data/content';
import { Check, Flame, ArrowRight } from 'lucide-react';

export default function Pricing({ onSelectPlan }) {
  return (
    <section id="pricing" className="py-24 bg-[#F1F5F9] relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-300 text-[#0F172A] text-xs font-bold uppercase tracking-wider shadow-sm">
            Clear Deliverables & Packages
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#0F172A]">
            PACKAGES & <span className="text-gradient-coral">PRICING</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-medium">
            Transparent content deliverables designed to fit small shops, growing brands, and custom campaigns.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between relative ${
                plan.popular
                  ? 'bg-[#0F172A] text-white border-[#E11D48] scale-105 z-20 shadow-2xl'
                  : 'glass-panel border-slate-200 hover:scale-[1.02]'
              }`}
            >
              {/* Most Popular Badge Ribbon */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#E11D48] text-white font-black text-xs uppercase tracking-widest shadow-xl flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 fill-white" />
                  <span>MOST POPULAR</span>
                </div>
              )}

              <div>
                {/* Plan Title & Badge */}
                <div className="mb-6">
                  <h3 className={`text-2xl font-black font-display mb-1 ${plan.popular ? 'text-white' : 'text-[#0F172A]'}`}>
                    {plan.name}
                  </h3>
                  <span className={`text-xs font-bold ${plan.popular ? 'text-rose-400' : 'text-[#E11D48]'}`}>
                    {plan.badge}
                  </span>
                </div>

                {/* Price Display */}
                <div className={`py-4 border-y mb-6 ${plan.popular ? 'border-slate-800' : 'border-slate-200'}`}>
                  <div className="flex items-baseline gap-2.5">
                    <div className={`text-3xl sm:text-4xl font-extrabold font-display ${plan.popular ? 'text-white' : 'text-[#0F172A]'}`}>
                      {plan.price}
                    </div>
                    {plan.originalPrice && (
                      <div className="text-base sm:text-lg font-bold line-through text-slate-400">
                        {plan.originalPrice}
                      </div>
                    )}
                  </div>
                  <div className={`text-xs mt-1.5 ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                    {plan.priceNote}
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="space-y-4 mb-8">
                  <div className={`text-xs font-bold uppercase tracking-wider ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                    Included Deliverables:
                  </div>

                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start justify-between gap-3 text-xs">
                      <div className={`flex items-center gap-2 ${plan.popular ? 'text-slate-200' : 'text-slate-800'}`}>
                        <Check className="w-4 h-4 text-[#E11D48] shrink-0" />
                        <span className="font-semibold">{feat.name}:</span>
                      </div>
                      <span className={`font-bold text-right ${plan.popular ? 'text-white' : 'text-[#0F172A]'}`}>{feat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-4 px-6 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-[#E11D48] hover:bg-[#BE123C] text-white shadow-xl hover:scale-[1.02]'
                    : 'bg-[#0F172A] hover:bg-[#E11D48] text-white shadow-md'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-xs text-slate-600 font-semibold">
          * Exact package numbers & shooting location schedules confirmed during initial business discussion.
        </div>

      </div>
    </section>
  );
}
