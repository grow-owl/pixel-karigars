import React from 'react';
import { motion } from 'framer-motion';
import { PRICING_PLANS } from '../data/content';
import { Check, ArrowRight, Sparkles, Zap } from 'lucide-react';

export default function Pricing({ onSelectPlan }) {
  return (
    <section id="pricing" className="py-24 bg-[#0F0E17] relative overflow-hidden bg-mesh-grid">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-[#FF6B35]/10 rounded-full blur-[160px] pointer-events-none animate-soft-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6B35]/15 border border-[#FF6B35]/30 text-[#FF6B35] text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-[#FF6B35]" />
            <span>Simple & Transparent Pricing</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white"
          >
            AFFORDABLE PACKAGES FOR <br className="hidden sm:inline" />
            <span className="text-gradient-coral">EVERY STAGE OF GROWTH</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 font-medium max-w-lg mx-auto"
          >
            No hidden costs. Choose a plan or reach out for a tailored custom monthly quote.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {PRICING_PLANS.map((plan, idx) => {
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: isPopular ? -10 : -6 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className={`relative flex flex-col ${
                  isPopular 
                    ? 'md:-translate-y-2 z-20' 
                    : 'z-10'
                }`}
              >
                {/* Outer Card Container */}
                <div 
                  className={`w-full h-full flex flex-col justify-between rounded-3xl p-7 transition-all duration-300 cursor-pointer ${
                    isPopular
                      ? 'bg-gradient-to-b from-[#24213B] via-[#161524] to-[#161524] border-2 border-[#FF6B35] shadow-[0_0_40px_rgba(255,107,53,0.4)] hover:shadow-[0_0_55px_rgba(255,107,53,0.55)]'
                      : 'bg-[#161524]/90 backdrop-blur-xl border-2 border-white/20 hover:border-[#FF6B35] shadow-xl hover:shadow-[0_0_30px_rgba(255,107,53,0.3)]'
                  }`}
                >

                  {/* Badge */}
                  {plan.badge && (
                    <div className="mb-4 flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-black tracking-wider uppercase ${
                        isPopular 
                          ? 'bg-gradient-to-r from-[#FF6B35] to-[#E85A24] text-white shadow-lg shadow-[#FF6B35]/30 animate-pulse' 
                          : 'bg-white/10 text-slate-300 border border-white/15'
                      }`}>
                        {isPopular && <Zap className="w-3.5 h-3.5 text-white" />}
                        <span>{plan.badge}</span>
                      </span>
                    </div>
                  )}

                  <div className="space-y-5">
                    {/* Plan Header */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                        {plan.name}
                      </h3>
                    </div>

                    {/* Price Display */}
                    <div className="py-3 border-y border-white/12 mb-5">
                      <div className="flex items-baseline gap-2.5">
                        <div className={`text-3xl sm:text-4xl font-black font-display ${
                          isPopular ? 'text-white text-gradient-coral' : 'text-white'
                        }`}>
                          {plan.price}
                        </div>
                        {plan.originalPrice && (
                          <div className="text-xs sm:text-sm font-bold line-through text-slate-400">
                            {plan.originalPrice}
                          </div>
                        )}
                      </div>
                      <div className="text-xs mt-1.5 text-slate-300 font-medium">
                        {plan.priceNote}
                      </div>
                    </div>

                    {/* Feature List */}
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                          <div className={`p-1 rounded-full shrink-0 mt-0.5 ${
                            isPopular ? 'bg-[#FF6B35] text-white shadow-md shadow-[#FF6B35]/40' : 'bg-[#6C4CF1]/20 text-[#6C4CF1]'
                          }`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="font-semibold text-slate-300">
                              {feature.name}:
                            </span>{' '}
                            <strong className="text-white font-extrabold">
                              {feature.value}
                            </strong>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-7 mt-6 border-t border-white/12">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onSelectPlan(plan.name)}
                      className={`w-full py-3.5 px-6 rounded-2xl font-bold tracking-wide text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group cursor-pointer ${
                        isPopular
                          ? 'bg-gradient-to-r from-[#FF6B35] via-[#FF8C54] to-[#E85A24] text-white shadow-xl shadow-[#FF6B35]/40 hover:shadow-[#FF6B35]/60'
                          : 'bg-white/10 border border-white/15 hover:bg-[#FF6B35] hover:border-[#FF6B35] text-white shadow-sm'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}



