import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO } from '../data/content';
import { Play, Sparkles, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Portfolio({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const sliderRef = useRef(null);

  const categories = [
    'All',
    'Food & Culinary',
    'Home & Garden',
    'Music & Production',
    'Social Awareness',
    'Lifestyle Reel'
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
    <section id="work" className="py-16 md:py-20 bg-[#0F0E17] relative overflow-hidden bg-mesh-grid">
      {/* Soft Ambient Background Glow */}
      <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-[#6C4CF1]/15 rounded-full blur-[160px] pointer-events-none animate-soft-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">

        {/* Section Header */}
        <div className="text-center md:text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6C4CF1]/15 border border-[#6C4CF1]/30 text-white text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md">
            🎬 Portfolio • Real Work
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            FEATURED <span className="text-gradient-coral">CLIENT REELS</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-lg">
            Tap any reel to preview the full high-conversion edit, video stats, and client feedback.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto scrollbar-none pb-2 px-1">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF6B35] to-[#E85A24] text-white shadow-lg shadow-[#FF6B35]/25 border border-[#FF6B35]'
                    : 'bg-white/10 text-slate-300 hover:text-white hover:bg-white/15 border border-white/15'
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
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4 }}
                className="w-[245px] sm:w-[275px] shrink-0 snap-start glass-panel rounded-3xl border border-white/12 glass-panel-hover overflow-hidden flex flex-col justify-between group shadow-xl cursor-pointer"
              >
                {/* Compact Vertical Video Reel Card Thumbnail */}
                <div
                  onClick={() => onOpenModal(project)}
                  className="relative w-full h-[300px] sm:h-[340px] aspect-[9/14] overflow-hidden cursor-pointer group/img"
                >
                  <img
                    src={project.videoPoster}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Dark Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E17] via-[#0F0E17]/30 to-transparent flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#FF6B35] text-white flex items-center justify-center shadow-xl pl-0.5 group-hover/img:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white" />
                    </div>
                  </div>

                  {/* Category Overlay */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0F0E17]/90 backdrop-blur-md border border-white/15 text-white text-[10px] font-extrabold">
                    {project.businessType}
                  </div>

                  {/* Stat Overlay at Bottom of Video */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-xl bg-[#0F0E17]/90 backdrop-blur-md border border-white/15 text-white flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#FF6B35] shrink-0" />
                    <span className="text-[10px] font-bold truncate">{project.stats}</span>
                  </div>
                </div>

                {/* Card Details Below Video */}
                <div className="p-4 sm:p-5 space-y-2 bg-[#161524]">
                  <h3 className="text-base font-extrabold text-white group-hover:text-[#FF6B35] transition-colors truncate font-display">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-snug line-clamp-2 font-medium">
                    {project.description}
                  </p>

                  <div className="pt-2.5 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => onOpenModal(project)}
                      className="text-xs font-bold text-[#FF6B35] hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <span>Watch Reel</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>

                    <a
                      href={project.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-slate-300 hover:text-[#6C4CF1] flex items-center gap-1"
                    >
                      <InstagramIcon className="w-3.5 h-3.5 text-[#6C4CF1]" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Carousel Arrow Controls placed BELOW the reels for both Mobile & Desktop */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <button
            onClick={scrollLeft}
            className="p-3 rounded-full bg-white/10 border border-white/15 text-white hover:bg-[#FF6B35] hover:border-[#FF6B35] transition-all shadow-lg active:scale-95 cursor-pointer flex items-center justify-center group"
            title="Scroll Left"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={scrollRight}
            className="p-3 rounded-full bg-white/10 border border-white/15 text-white hover:bg-[#FF6B35] hover:border-[#FF6B35] transition-all shadow-lg active:scale-95 cursor-pointer flex items-center justify-center group"
            title="Scroll Right"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}



