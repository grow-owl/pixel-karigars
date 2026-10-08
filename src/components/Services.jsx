import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../data/content';
import { Video, Share2, Camera, Compass, Palette, CheckCircle2, ChevronDown } from 'lucide-react';

export default function Services() {
  const [expandedId, setExpandedId] = useState(null);

  const iconMap = {
    "01": Video,
    "02": Share2,
    "03": Camera,
    "04": Compass,
    "05": Palette
  };

  const toggleExpand = (id) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-[#F8F9FC] relative overflow-hidden">
      {/* Soft Ambient Background Glow Orbs */}
      <div className="hidden md:block absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#FF6B4A]/[0.04] rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-left max-w-4xl mb-12">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3.5 sm:gap-5"
          >
            <span className="w-10 sm:w-14 h-[4px] sm:h-[5px] bg-[#FF6B4A] rounded-full shrink-0"></span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A] font-display uppercase">
              OUR <span className="text-[#FF6B4A]">SERVICES</span>
            </h2>
          </motion.div>
        </div>

        {/* Services Grid (Compact Expandable Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {SERVICES.map((service, idx) => {
            const IconComponent = iconMap[service.num] || Video;
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => toggleExpand(service.id)}
                className={`bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#FF6B4A]/40 flex flex-col justify-between group relative overflow-hidden cursor-pointer transition-all duration-300 ${
                  isExpanded ? 'border-[#FF6B4A] shadow-xl shadow-[#FF6B4A]/10 ring-1 ring-[#FF6B4A]/20' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Card Number & Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                      isExpanded ? 'bg-[#FF6B4A] text-white scale-105' : 'bg-[#FF6B4A]/10 text-[#FF6B4A] group-hover:bg-[#FF6B4A] group-hover:text-white'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 tracking-wider border border-slate-200">
                        {service.num}
                      </span>
                      <div className={`p-1.5 rounded-full bg-slate-100 text-[#FF6B4A] transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 bg-[#FF6B4A]/15' : 'group-hover:translate-y-0.5'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Title Heading */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] group-hover:text-[#FF6B4A] transition-colors font-display">
                    {service.title}
                  </h3>

                  {/* Expandable Content on Click */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden space-y-4 pt-3 border-t border-slate-100"
                      >
                        <p className="text-xs text-[#475569] leading-relaxed font-medium">
                          {service.shortDesc}
                        </p>

                        <ul className="space-y-2">
                          {service.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-[#1E293B] font-semibold">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B4A] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}



