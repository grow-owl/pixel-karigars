import React from 'react';
import { motion } from 'framer-motion';
import { CLIENT_LOGOS } from '../data/content';

export default function ClientCarousel() {
  // Loop list multiple times for an ultra-smooth infinite marquee
  const items = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="relative py-12 sm:py-16 bg-[#F8F9FC] border-y border-slate-200/70 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-left relative z-10">
        {/* Header Heading with Line */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3.5 sm:gap-5"
        >
          <span className="w-10 sm:w-14 h-[4px] sm:h-[5px] bg-[#FF6B4A] rounded-full shrink-0"></span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0F172A] font-display uppercase">
            TRUSTED BY <span className="text-[#FF6B4A]">GROWING BRANDS</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Carousel Track */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#F8F9FC] via-[#F8F9FC]/90 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#F8F9FC] via-[#F8F9FC]/90 to-transparent z-20 pointer-events-none"></div>

        {/* Scrolling Squarish Cards Track (Reference Style) */}
        <div className="animate-ticker flex items-center gap-4 sm:gap-5 py-2">
          {items.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="w-44 sm:w-52 h-28 sm:h-32 rounded-2xl bg-[#EEF1F6] hover:bg-white border border-slate-200/80 hover:border-[#FF6B4A]/50 hover:shadow-lg transition-all duration-300 flex items-center justify-center p-5 shrink-0 group cursor-default"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-16 max-w-[85%] object-contain filter group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                onError={(e) => {
                  if (client.logoPng && e.target.src !== client.logoPng) {
                    e.target.src = client.logoPng;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
