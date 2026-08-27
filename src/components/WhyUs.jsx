import React from 'react';
import { motion } from 'framer-motion';
import { WHY_US } from '../data/content';
import { Sparkles, Target, TrendingUp, MapPin, Flame } from 'lucide-react';

export default function WhyUs() {
  const iconMap = {
    Sparkles,
    Target,
    TrendingUp,
    MapPin
  };

  return (
    <section id="why-us" className="py-24 bg-[#0F0E17] relative overflow-hidden bg-mesh-grid">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-[#6C4CF1]/15 rounded-full blur-[160px] pointer-events-none animate-soft-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6C4CF1]/15 border border-[#6C4CF1]/30 text-white text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md"
          >
            <Flame className="w-4 h-4 text-[#FF6B35]" />
            <span>Why Brands Choose Us</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white"
          >
            WE DON'T JUST MAKE REELS, <br className="hidden sm:inline" />
            <span className="text-gradient-coral">WE BUILD BRANDS.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 font-medium"
          >
            Here's how Pixel Karigars stands out from generic agencies and freelancer templates.
          </motion.p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHY_US.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.02 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel rounded-3xl p-7 glass-panel-hover flex gap-5 items-start group relative overflow-hidden shadow-xl cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#6C4CF1]/15 text-[#6C4CF1] flex items-center justify-center shrink-0 group-hover:bg-[#6C4CF1] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-extrabold text-white group-hover:text-[#FF6B35] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}



