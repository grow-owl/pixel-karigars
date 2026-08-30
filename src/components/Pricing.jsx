import React from 'react';
import { motion } from 'framer-motion';
import { PRICING_PLANS } from '../data/content';
import { Check, ArrowRight, Sparkles, Zap } from 'lucide-react';

export default function Pricing({ onSelectPlan }) {
  return (
    <section id="pricing" className="py-24 bg-[#111111] relative overflow-hidden bg-mesh-grid">
      {/* Soft Ambient Background Glow Orbs */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-[#FF6B4A]/[0.03] rounded-full blur-[180px] pointer-events-none animate-soft-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6B4A]/15 border border-[#FF6B4A]/30 text-[#FF6B4A] text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-[#FF6B4A]" />
            <span>Simple & Transparent Pricing</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F5F3EE]"
          >
            AFFORDABLE PACKAGES FOR <br className="hidden sm:inline" />
            <span className="text-gradient-coral">EVERY STAGE OF GROWTH</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-[#A6A39D] font-medium max-w-lg mx-auto"
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
                      ? 'bg-gradient-to-b from-[#22251a] via-[#181818] to-[#181818] border-2 border-[#C7F36B] shadow-[0_0_40px_rgba(199,243,107,0.35)] hover:shadow-[0_0_55px_rgba(199,243,107,0.5)]'
                      : 'bg-[#181818]/90 backdrop-blur-xl border-2 border-white/20 hover:border-[#FF6B4A] shadow-xl hover:shadow-[0_0_30px_rgba(255,107,74,0.3)]'
                  }`}
                >

                  {/* Badge */}
                  {plan.badge && (
                    <div className="mb-4 flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-black tracking-wider uppercase ${
                        isPopular 
                          ? 'bg-gradient-to-r from-[#C7F36B] to-[#A3D936] text-[#111111] shadow-lg shadow-[#C7F36B]/30 animate-pulse' 
                          : 'bg-white/10 text-[#A6A39D] border border-white/15'
                      }`}>
                        {isPopular && <Zap className="w-3.5 h-3.5 text-[#111111]" />}
                        <span>{plan.badge}</span>
                      </span>
                    </div>
                  )}

                  <div className="space-y-5">
                    {/* Plan Header */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#F5F3EE]">
                        {plan.name}
                      </h3>
                    </div>

                    {/* Price Display */}
                    <div className="py-3 border-y border-white/12 mb-5">
                      <div className="flex items-baseline gap-2.5">
                        <div className={`text-3xl sm:text-4xl font-black font-display ${
                          isPopular ? 'text-[#C7F36B]' : 'text-[#F5F3EE]'
                        }`}>
                          {plan.price}
                        </div>
                        {plan.originalPrice && (
                          <div className="text-xs sm:text-sm font-bold line-through text-[#A6A39D]">
                            {plan.originalPrice}
                          </div>
                        )}
                      </div>
                      <div className="text-xs mt-1.5 text-[#A6A39D] font-medium">
                        {plan.priceNote}
                      </div>
                    </div>

                    {/* Feature List */}
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                          <div className={`p-1 rounded-full shrink-0 mt-0.5 ${
                            isPopular ? 'bg-[#C7F36B] text-[#111111] shadow-md shadow-[#C7F36B]/40' : 'bg-[#FF6B4A]/20 text-[#FF6B4A]'
                          }`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="font-semibold text-[#A6A39D]">
                              {feature.name}:
                            </span>{' '}
                            <strong className="text-[#F5F3EE] font-extrabold">
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
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => onSelectPlan(plan.name)}
                      className={`w-full py-3.5 px-6 rounded-2xl font-bold tracking-wide text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group cursor-pointer btn-shimmer ${
                        isPopular
                          ? 'bg-gradient-to-r from-[#C7F36B] via-[#D8FA85] to-[#A3D936] text-[#111111] font-black shadow-xl shadow-[#C7F36B]/25 hover:shadow-2xl hover:shadow-[#C7F36B]/45 btn-glow-lime'
                          : 'bg-[#E85536] border border-[#E85536] hover:bg-[#FF6B4A] hover:border-[#FF6B4A] text-white shadow-md hover:shadow-xl hover:shadow-[#FF6B4A]/35 transition-all duration-300'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className={`w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 ${isPopular ? 'text-[#111111]' : 'text-white'}`} />
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



