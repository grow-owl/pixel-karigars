import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Process({ onOpenContact }) {
  return (
    <section id="process" className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181818] border border-white/15 text-[#C7F36B] text-xs font-bold uppercase tracking-wider">
            Simple & Transparent Workflow
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#F5F3EE]">
            HOW WE <span className="text-gradient-coral">WORK WITH YOU</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A6A39D]">
            From initial business call to viral content launch — 4 straightforward steps.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((stepItem, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-white/10 glass-panel-hover flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B4A] to-[#C7F36B]">
                    {stepItem.step}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#181818] border border-white/15 flex items-center justify-center text-[#A6A39D] text-xs font-bold group-hover:bg-[#C7F36B] group-hover:text-[#111111] transition-all">
                    →
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#F5F3EE] mb-3 group-hover:text-[#FF6B4A] transition-colors">
                  {stepItem.title}
                </h3>

                <p className="text-sm text-[#A6A39D] leading-relaxed font-normal">
                  {stepItem.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#C7F36B]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Step {stepItem.step} Execution</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenContact}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#E85536] text-white font-extrabold text-base shadow-xl shadow-[#FF6B4A]/25 hover:shadow-2xl hover:shadow-[#FF6B4A]/45 transition-all inline-flex items-center gap-3 cursor-pointer group btn-shimmer btn-glow-coral"
          >
            <span>Start Step 01 Today</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1.5 transition-transform duration-300" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
