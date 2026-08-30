import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../data/content';
import { Video, Share2, Camera, Compass, Palette, CheckCircle2, ChevronDown } from 'lucide-react';

export default function Services({ onOpenContact }) {
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
    <section id="services" className="py-24 bg-[#111111] relative overflow-hidden bg-mesh-grid">
      {/* Soft Ambient Background Glow Orbs */}
      <div className="hidden md:block absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#FF6B4A]/[0.03] rounded-full blur-[180px] pointer-events-none animate-soft-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F5F3EE] font-display"
          >
            OUR <span className="text-[#FF6B4A]">SERVICES</span>
          </motion.h2>
          <p className="text-xs sm:text-sm text-[#A6A39D] font-medium">
            Tap any service card to view full scope of work & details.
          </p>
        </div>

        {/* Services Grid */}
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
                className={`glass-panel rounded-3xl p-6 glass-panel-hover flex flex-col justify-between group relative overflow-hidden shadow-xl cursor-pointer transition-all duration-300 ${
                  isExpanded ? 'border-[#FF6B4A]/50 bg-[#1e1e1e]/95 shadow-2xl shadow-[#FF6B4A]/10' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Card Number & Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                      isExpanded ? 'bg-[#FF6B4A] text-white scale-105' : 'bg-[#FF6B4A]/15 text-[#FF6B4A] group-hover:bg-[#FF6B4A] group-hover:text-white'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/10 text-[#F5F3EE] tracking-wider border border-white/15">
                        {service.num}
                      </span>
                      <div className={`p-1.5 rounded-full bg-white/10 text-[#FF6B4A] transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 bg-[#FF6B4A]/20' : 'group-hover:translate-y-0.5'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Title Heading & Expand Prompt */}
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#F5F3EE] group-hover:text-[#FF6B4A] transition-colors font-display">
                      {service.title}
                    </h3>
                    <span className="text-[10px] font-semibold text-[#FF6B4A] tracking-wide block">
                      {isExpanded ? '▲ Tap to collapse' : '▼ Tap to view scope & details'}
                    </span>
                  </div>

                  {/* Expandable Content (Description & Points) */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden space-y-4 pt-3 border-t border-white/10"
                      >
                        <p className="text-xs text-[#A6A39D] leading-relaxed font-medium">
                          {service.shortDesc}
                        </p>

                        <ul className="space-y-2">
                          {service.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-[#F5F3EE] font-semibold">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C7F36B] shrink-0" />
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



