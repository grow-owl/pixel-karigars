import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Process({ onOpenContact }) {
  return (
    <section id="process" className="py-24 bg-[#0d0e16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-bold uppercase tracking-wider">
            Simple & Transparent Workflow
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
            HOW WE <span className="text-gradient-amber">WORK WITH YOU</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            From initial business call to viral content launch — 4 straightforward steps.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((stepItem, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-slate-800/80 glass-panel-hover flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                    {stepItem.step}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 text-xs font-bold group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    →
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {stepItem.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {stepItem.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-amber-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Step {stepItem.step} Execution</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenContact}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/20 hover:scale-[1.03] transition-all inline-flex items-center gap-3"
          >
            <span>Start Step 01 Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
