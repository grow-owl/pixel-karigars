import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Eye, Star, ArrowUpRight, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function ClientGrowth() {
  const caseStudies = [
    {
      client: "Gourmet Momo Cafe, Siliguri",
      category: "Food & Culinary",
      beforeViews: "800 avg views",
      afterViews: "24.5K views",
      growth: "+2,900%",
      metricLabel: "Footfall Increase",
      metricValue: "35%",
      testimonial: "Pixel Karigars turned our weekend rush into a daily queue with just 3 reels!",
      avatar: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=150&q=80"
    },
    {
      client: "Evergreen Plant Nursery",
      category: "Home & Lifestyle",
      beforeViews: "350 avg views",
      afterViews: "14.2K views",
      growth: "+3,900%",
      metricLabel: "Direct DMs Received",
      metricValue: "180+",
      testimonial: "Their script hooks made exotic plants trending in Siliguri!",
      avatar: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=150&q=80"
    },
    {
      client: "Musicvillia Sound Studio",
      category: "Audio & Entertainment",
      beforeViews: "1.2K avg views",
      afterViews: "42.8K views",
      growth: "+3,400%",
      metricLabel: "Artist Inquiries",
      metricValue: "3x Growth",
      testimonial: "Crisp audio mix and fast-cut editing gave us viral organic reach.",
      avatar: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden border-t border-white/5">
      {/* Soft Ambient Background Glow Orbs */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C7F36B]/[0.03] rounded-full blur-[200px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C7F36B]/10 border border-[#C7F36B]/30 text-[#C7F36B] text-xs font-bold uppercase tracking-wider shadow-sm"
          >
            <TrendingUp className="w-4 h-4 text-[#C7F36B]" />
            <span>Proven Business Impact</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#F5F3EE]"
          >
            NOT JUST VIEWS. <br className="hidden sm:inline" />
            <span className="text-gradient-coral">MEASURABLE CLIENT GROWTH.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#A6A39D] font-medium"
          >
            We optimize every video reel for retention, brand awareness, and local customer conversion.
          </motion.p>
        </div>

        {/* 4 Big Impact Stat Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {BRAND_INFO.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel rounded-3xl p-6 sm:p-8 text-center space-y-2 border border-white/10 glass-panel-hover"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-gradient-sunset">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#A6A39D]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before vs After Case Studies Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#F5F3EE] font-display flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#C7F36B]" />
              <span>Real Client Transformations</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-panel rounded-3xl p-6 flex flex-col justify-between border border-white/10 glass-panel-hover relative overflow-hidden group"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#FF6B4A]/10 text-[#FF6B4A] border border-[#FF6B4A]/20">
                    {item.category}
                  </span>
                  <span className="text-xs font-black text-[#C7F36B] bg-[#C7F36B]/10 px-2.5 py-1 rounded-md border border-[#C7F36B]/20 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {item.growth}
                  </span>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-black text-[#F5F3EE] font-display group-hover:text-[#C7F36B] transition-colors">
                    {item.client}
                  </h4>

                  {/* Before vs After Visual Pill Box */}
                  <div className="grid grid-cols-2 gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#A6A39D] block">Before Reels</span>
                      <span className="text-xs font-bold text-[#A6A39D]/70 line-through">{item.beforeViews}</span>
                    </div>
                    <div className="border-l border-white/10 pl-2">
                      <span className="text-[10px] uppercase font-bold text-[#C7F36B] block">With Pixel Karigars</span>
                      <span className="text-xs font-black text-[#F5F3EE]">{item.afterViews}</span>
                    </div>
                  </div>

                  {/* Client Testimonial */}
                  <blockquote className="text-xs text-[#A6A39D] leading-relaxed italic border-l-2 border-[#FF6B4A] pl-3 py-1">
                    "{item.testimonial}"
                  </blockquote>
                </div>

                {/* Bottom Metric Footer */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#A6A39D]">{item.metricLabel}:</span>
                  <span className="font-extrabold text-[#F5F3EE] bg-white/10 px-2.5 py-0.5 rounded-full">{item.metricValue}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
