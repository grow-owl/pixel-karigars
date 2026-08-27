import React, { useState } from 'react';
import { FAQS, BRAND_INFO } from '../data/content';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-300 text-[#0F172A] text-xs font-bold uppercase tracking-wider shadow-sm">
            Got Questions?
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#0F172A]">
            FREQUENTLY ASKED <span className="text-gradient-coral">QUESTIONS</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-medium">
            Everything you need to know about working with Pixel Karigars.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-base sm:text-lg text-[#0F172A] hover:text-[#E11D48] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#E11D48] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#E11D48]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-700 leading-relaxed font-normal border-t border-slate-200 animate-in fade-in duration-300">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="text-left text-sm">
            <div className="font-extrabold text-[#0F172A]">Have a specific question not listed here?</div>
            <div className="text-slate-600 font-medium">Chat directly with our team on WhatsApp for quick answers.</div>
          </div>
          <a
            href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hi%20Pixel%20Karigars,%20I%20have%20a%20question%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-all flex items-center gap-2 shrink-0 shadow"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
