import React from 'react';
import { BRAND_INFO } from '../data/content';
import { Film, Users, Sparkles, ArrowUpRight } from 'lucide-react';

export default function About({ onOpenContact }) {
  const pillars = [
    {
      icon: Film,
      title: 'Creative Reels',
      description: 'Attention-grabbing short-form videos engineered with viral hooks and polished motion editing.',
      badge: 'High Engagement',
      cardBg: 'glass-panel border-white/10 glass-panel-hover',
      iconBg: 'bg-[#FF6B4A]/15 text-[#FF6B4A] shadow-md',
      badgeBg: 'bg-[#C7F36B]/15 text-[#C7F36B] border-[#C7F36B]/30'
    },
    {
      icon: Users,
      title: 'Social Media Content',
      description: 'Consistent, aesthetic, and professional-looking daily content that builds real audience trust.',
      badge: 'Brand Authority',
      cardBg: 'glass-panel border-white/10 glass-panel-hover',
      iconBg: 'bg-[#FF6B4A]/15 text-[#FF6B4A] shadow-md',
      badgeBg: 'bg-[#FF6B4A]/15 text-[#FF6B4A] border-[#FF6B4A]/30'
    },
    {
      icon: Sparkles,
      title: 'Brand Storytelling',
      description: 'Presenting your business personality, products, and core value proposition through compelling visual media.',
      badge: 'Revenue Focused',
      cardBg: 'glass-panel border-white/10 glass-panel-hover',
      iconBg: 'bg-[#FF6B4A]/15 text-[#FF6B4A] shadow-md',
      badgeBg: 'bg-[#C7F36B]/15 text-[#C7F36B] border-[#C7F36B]/30'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="hidden md:block absolute top-1/2 left-0 w-96 h-96 bg-[#FF6B4A]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181818] border border-white/15 text-[#FF6B4A] text-xs font-bold uppercase tracking-wider shadow-sm">
            About Pixel Karigars
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#F5F3EE] leading-tight">
            GOOD BUSINESSES DESERVE <br className="hidden sm:inline" />
            <span className="text-gradient-coral">GREAT CONTENT.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A6A39D] font-normal leading-relaxed">
            {BRAND_INFO.aboutText}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`p-8 rounded-3xl ${pillar.cardBg} relative group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${pillar.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${pillar.badgeBg}`}>
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#F5F3EE] mb-3 group-hover:text-[#FF6B4A] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#A6A39D] leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#A6A39D] group-hover:text-[#FF6B4A] transition-colors">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Agency Highlights Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#181818] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl text-[#F5F3EE]">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-[#F5F3EE]">Ready to upgrade your social media presence?</h4>
            <p className="text-sm text-[#A6A39D]">Siliguri businesses get custom shoot schedules and dedicated account strategists.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenContact}
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#E85536] text-white font-extrabold text-sm shadow-xl shadow-[#FF6B4A]/25 hover:shadow-2xl hover:shadow-[#FF6B4A]/45 transition-all shrink-0 cursor-pointer btn-shimmer btn-glow-coral"
          >
            Get Free Content Audit →
          </motion.button>
        </div>

      </div>
    </section>
  );
}
