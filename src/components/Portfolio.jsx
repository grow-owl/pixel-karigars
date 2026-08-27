import React, { useRef } from 'react';
import { PORTFOLIO } from '../data/content';
import { Play, Sparkles, ExternalLink, Flame, ChevronLeft, ChevronRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Portfolio({ onOpenModal }) {
  const sliderRef = useRef(null);

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
    <section id="work" className="py-24 bg-[#F1F5F9] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Carousel Navigation Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-300 text-[#0F172A] text-xs font-bold uppercase tracking-wider shadow-sm">
              🎬 Real Work • Real Results
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#0F172A]">
              FEATURED <span className="text-gradient-coral">CLIENT REELS</span>
            </h2>

            <p className="text-base text-slate-700 font-medium max-w-xl">
              Swipe or scroll through our portfolio of scroll-stopping reels shot for local and growing businesses.
            </p>
          </div>

          {/* Carousel Left / Right Scroll Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full bg-white border border-slate-300 text-[#0F172A] hover:bg-[#E11D48] hover:text-white transition-all shadow-md active:scale-95"
              title="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full bg-white border border-slate-300 text-[#0F172A] hover:bg-[#E11D48] hover:text-white transition-all shadow-md active:scale-95"
              title="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Side-Scrollable Video Reels Carousel */}
        <div
          ref={sliderRef}
          className="flex items-stretch gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1"
        >
          {PORTFOLIO.map((project) => (
            <div
              key={project.id}
              className="w-[300px] sm:w-[320px] shrink-0 snap-start glass-panel rounded-3xl border border-slate-200 glass-panel-hover overflow-hidden flex flex-col justify-between group shadow-md"
            >
              {/* Vertical Video Reel Card Thumbnail */}
              <div
                onClick={() => onOpenModal(project)}
                className="relative w-full aspect-reel overflow-hidden cursor-pointer group/img"
              >
                {/* HTML5 Background Reel Video Preview */}
                <video
                  src={project.videoUrl}
                  poster={project.videoPoster}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                />
                
                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#E11D48] text-white flex items-center justify-center shadow-xl pl-1 group-hover/img:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white" />
                  </div>
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-rose-300 text-xs font-bold">
                  {project.businessType}
                </div>

                {/* Stat Overlay at Bottom of Video */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span className="text-[11px] font-bold truncate">{project.stats}</span>
                </div>
              </div>

              {/* Card Details Below Video */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-extrabold text-[#0F172A] group-hover:text-[#E11D48] transition-colors truncate">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => onOpenModal(project)}
                    className="text-xs font-bold text-[#E11D48] hover:text-[#BE123C] flex items-center gap-1"
                  >
                    <span>Watch Full Reel</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>

                  <a
                    href={project.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-extrabold text-slate-700 hover:text-[#E11D48] flex items-center gap-1"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
