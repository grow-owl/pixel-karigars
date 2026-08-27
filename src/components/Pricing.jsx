import React from 'react';
import { PRICING_PLANS } from '../data/content';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing({ onSelectPlan }) {
  return (
    <section id="pricing" className="py-24 bg-[#0C0C0E] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-violet-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            💎 Simple & Transparent Pricing
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
            AFFORDABLE PACKAGES FOR <br className="hidden sm:inline" />
            <span className="text-gradient-coral">EVERY STAGE OF GROWTH</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-medium">
            No hidden costs. Choose a plan or reach out for a tailored custom monthly quote.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? 'bg-[#18181B] text-white shadow-2xl shadow-violet-500/20 scale-[1.03] border-2 border-violet-500'
                  : 'bg-[#141417] text-white border border-white/10 shadow-md hover:border-violet-500/40 hover:shadow-xl'
              }`}
            >
              {/* Most Popular Highlight Badge (Icon removed as requested) */}
              {plan.badge && (
                <div className="mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold tracking-wide ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md' 
                      : 'bg-white/10 text-slate-300 border border-white/10'
                  }`}>
                    <span>{plan.badge}</span>
                  </span>
                </div>
              )}

              <div className="space-y-6">
                {/* Plan Header */}
                <div>
                  <h3 className="text-2xl font-black font-display text-white">
                    {plan.name}
                  </h3>
                </div>

                {/* Price Display with Strikethrough Original Price */}
                <div className="py-4 border-y border-white/10 mb-6">
                  <div className="flex items-baseline gap-2.5">
                    <div className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                      {plan.price}
                    </div>
                    {plan.originalPrice && (
                      <div className="text-base sm:text-lg font-bold line-through text-slate-500">
                        {plan.originalPrice}
                      </div>
                    )}
                  </div>
                  <div className="text-xs mt-1.5 text-slate-400">
                    {plan.priceNote}
                  </div>
                </div>

                {/* Feature List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                      <div className={`p-1 rounded-full shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-violet-600 text-white' : 'bg-white/10 text-violet-400'
                      }`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-300">
                          {feature.name}:
                        </span>{' '}
                        <strong className="text-white">
                          {feature.value}
                        </strong>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="pt-8 mt-6 border-t border-white/10">
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-4 px-6 rounded-2xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 group cursor-pointer ${
                    plan.popular
                      ? 'bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white shadow-xl shadow-violet-500/25 hover:scale-[1.02]'
                      : 'bg-white/10 hover:bg-violet-600 text-white shadow-md'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
