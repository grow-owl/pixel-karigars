import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO } from '../data/content';
import { Play, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Portfolio({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const sliderRef = useRef(null);

  const categories = [
    'All',
    ...Array.from(new Set(PORTFOLIO.map(p => p.category)))
  ];

  const filteredProjects = activeFilter === 'All'
    ? PORTFOLIO
    : PORTFOLIO.filter(p => p.category === activeFilter);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-16 md:py-24 bg-[#F8F9FC] relative overflow-hidden">
      {/* Soft Ambient Background Glow */}
      <div className="hidden md:block absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-[#FF6B4A]/[0.03] rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-7">

        {/* Section Header */}
        <div className="text-left space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3.5 sm:gap-5"
          >
            <span className="w-10 sm:w-14 h-[4px] sm:h-[5px] bg-[#FF6B4A] rounded-full shrink-0"></span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A] font-display uppercase">
              FEATURED <span className="text-[#FF6B4A]">CLIENT REELS</span>
            </h2>
          </motion.div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start gap-2.5 overflow-x-auto scrollbar-none pb-2 px-1">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4.5 py-2 rounded-full text-xs font-bold tracking-wide whitespace-nowrap transition-all cursor-pointer shrink-0 ${isActive
                  ? 'bg-gradient-to-r from-[#FF6B4A] to-[#E85536] text-white shadow-lg shadow-[#FF6B4A]/25 border border-[#FF6B4A]'
                  : 'bg-white text-slate-600 hover:text-[#0F172A] hover:bg-slate-100 border border-slate-200/90 shadow-xs'
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Horizontal Side-Scrollable Video Reels Carousel */}
        <div
          ref={sliderRef}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 px-1 sm:px-0"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="w-[210px] sm:w-[230px] shrink-0 snap-start bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 overflow-hidden flex flex-col justify-between group shadow-md hover:shadow-xl hover:border-[#FF6B4A]/40 cursor-pointer transform-gpu transition-all duration-300"
              >
                {/* Real 9:16 Video Reel Card Preview (Plays on Tap/Click) */}
                <div
                  onClick={() => onOpenModal(project)}
                  className="relative w-full aspect-[9/16] overflow-hidden cursor-pointer group/img bg-black"
                >
                  <img
                    src={project.videoPoster}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 pointer-events-none"
                  />

                  {/* Top Reel Badges */}
                  <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-20 pointer-events-none">
                    <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-white bg-black/80 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-white/15 flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] animate-ping"></span>
                      REEL
                    </span>
                    <span className="text-[8px] sm:text-[9px] font-bold text-white/90 bg-black/70 backdrop-blur-md px-1.5 sm:px-2 py-0.5 rounded-full border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Dark Overlay Gradient on Hover with Play Icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center opacity-70 group-hover/img:opacity-100 transition-opacity">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FF6B4A] text-white flex items-center justify-center shadow-xl pl-0.5 group-hover/img:scale-110 transition-transform backdrop-blur-sm">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                    </div>
                  </div>
                </div>

                {/* Card Details Below Video */}
                <div className="p-3 sm:p-3.5 space-y-1.5 bg-white">
                  <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A] group-hover:text-[#FF6B4A] transition-colors truncate font-display">
                    {project.title}
                  </h3>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onOpenModal(project)}
                      className="text-[11px] sm:text-xs font-bold text-[#FF6B4A] hover:text-[#E85536] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Watch Reel</span>
                      <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </button>

                    <a
                      href={project.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] sm:text-xs font-bold text-slate-500 hover:text-[#FF6B4A] flex items-center gap-1"
                    >
                      <InstagramIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF6B4A]" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Carousel Arrow Controls placed BELOW the reels for both Mobile & Desktop */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={scrollLeft}
            className="p-3 rounded-full bg-white border border-slate-200 text-slate-800 hover:bg-[#FF6B4A] hover:text-white hover:border-[#FF6B4A] transition-all shadow-sm active:scale-95 cursor-pointer flex items-center justify-center group"
            title="Scroll Left"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={scrollRight}
            className="p-3 rounded-full bg-white border border-slate-200 text-slate-800 hover:bg-[#FF6B4A] hover:text-white hover:border-[#FF6B4A] transition-all shadow-sm active:scale-95 cursor-pointer flex items-center justify-center group"
            title="Scroll Right"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}



