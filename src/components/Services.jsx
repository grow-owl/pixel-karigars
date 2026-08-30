import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/content';
import { Video, Share2, Camera, Compass, Palette, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function Services({ onOpenContact }) {
  const iconMap = {
    "01": Video,
    "02": Share2,
    "03": Camera,
    "04": Compass,
    "05": Palette
  };

  return (
    <section id="services" className="py-24 bg-[#111111] relative overflow-hidden bg-mesh-grid">
      {/* Soft Ambient Background Glow Orbs */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#FF6B4A]/[0.03] rounded-full blur-[180px] pointer-events-none animate-soft-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F5F3EE] font-display"
          >
            OUR <span className="text-[#FF6B4A]">SERVICES</span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const IconComponent = iconMap[service.num] || Video;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-panel rounded-3xl p-7 glass-panel-hover flex flex-col justify-between group relative overflow-hidden shadow-xl cursor-pointer"
              >
                <div className="space-y-5">
                  {/* Card Number & Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF6B4A]/15 text-[#FF6B4A] flex items-center justify-center group-hover:bg-[#FF6B4A] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/10 text-[#F5F3EE] tracking-wider border border-white/15">
                      {service.num}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-[#F5F3EE] group-hover:text-[#FF6B4A] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A6A39D] leading-relaxed font-medium">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 pt-2 border-t border-white/10">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-[#F5F3EE] font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#C7F36B] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}



