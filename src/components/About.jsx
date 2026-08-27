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
      cardBg: 'bg-white border-slate-200 hover:border-[#E11D48]',
      iconBg: 'bg-[#0F172A] text-[#E11D48] shadow-md',
      badgeBg: 'bg-rose-500/10 text-[#E11D48] border-rose-500/30'
    },
    {
      icon: Users,
      title: 'Social Media Content',
      description: 'Consistent, aesthetic, and professional-looking daily content that builds real audience trust.',
      badge: 'Brand Authority',
      cardBg: 'bg-white border-slate-200 hover:border-[#E11D48]',
      iconBg: 'bg-[#0F172A] text-[#E11D48] shadow-md',
      badgeBg: 'bg-indigo-500/10 text-indigo-900 border-indigo-500/30'
    },
    {
      icon: Sparkles,
      title: 'Brand Storytelling',
      description: 'Presenting your business personality, products, and core value proposition through compelling visual media.',
      badge: 'Revenue Focused',
      cardBg: 'bg-white border-slate-200 hover:border-[#E11D48]',
      iconBg: 'bg-[#0F172A] text-[#E11D48] shadow-md',
      badgeBg: 'bg-rose-500/10 text-[#E11D48] border-rose-500/30'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#F1F5F9] relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-300 text-[#0F172A] text-xs font-bold uppercase tracking-wider shadow-sm">
            About Pixel Karigars
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#0F172A] leading-tight">
            GOOD BUSINESSES DESERVE <br className="hidden sm:inline" />
            <span className="text-gradient-coral">GREAT CONTENT.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
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
                className={`glass-panel p-8 rounded-3xl border ${pillar.cardBg} glass-panel-hover relative group flex flex-col justify-between`}
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

                  <h3 className="text-xl font-extrabold text-[#0F172A] mb-3 group-hover:text-[#E11D48] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-600 group-hover:text-[#E11D48] transition-colors">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Agency Highlights Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#0F172A] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl text-white">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">Ready to upgrade your social media presence?</h4>
            <p className="text-sm text-slate-300">Siliguri businesses get custom shoot schedules and dedicated account strategists.</p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-7 py-3.5 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white font-extrabold text-sm shadow-lg hover:scale-105 transition-all shrink-0"
          >
            Get Free Content Audit →
          </button>
        </div>

      </div>
    </section>
  );
}
