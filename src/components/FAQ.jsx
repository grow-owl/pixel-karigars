import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS, BRAND_INFO } from '../data/content';
import { ChevronDown, HelpCircle, MessageSquare, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#0F0E17] relative overflow-hidden bg-mesh-grid">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#6C4CF1]/15 rounded-full blur-[160px] pointer-events-none animate-soft-pulse"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-display"
          >
            FREQUENTLY ASKED <span className="text-[#FF6B35]">QUESTIONS</span>
          </motion.h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all duration-200 shadow-lg bg-[#161524]"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-[#FF6B35] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#FF6B35] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#FF6B35]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed font-normal border-t border-white/10"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* WhatsApp Direct Prompt */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center p-6 rounded-3xl glass-panel bg-[#161524] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
        >
          <div className="text-left text-sm space-y-1">
            <div className="font-extrabold text-white">Have a specific question not listed here?</div>
            <div className="text-slate-300 font-medium text-xs">Chat directly with our creative team on WhatsApp for instant answers.</div>
          </div>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hi%20Pixel%20Karigars,%20I%20have%20a%20question%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-black text-xs transition-all flex items-center gap-2 shrink-0 shadow-md shadow-[#25D366]/20"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>Ask on WhatsApp</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}



