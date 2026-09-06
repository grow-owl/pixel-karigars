import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  Play, 
  Volume2, 
  VolumeX, 
  ExternalLink 
} from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function ReelModal({ project, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = useCallback((e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play().then(() => setIsPlaying(true)).catch(() => {});
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  }, []);

  const toggleMute = useCallback((e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      setIsMuted((prev) => {
        const next = !prev;
        video.muted = next;
        return next;
      });
    }
  }, []);

  // Robust background scroll locking for both Desktop & Mobile (iOS / Android)
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyPadding = document.body.style.paddingRight;
    const originalTouchAction = document.body.style.touchAction;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Prevent background touch scrolling on iOS / Android while allowing modal content scroll
    const preventBackgroundTouchMove = (e) => {
      const target = e.target;
      if (!target.closest('.modal-scrollable-content')) {
        e.preventDefault();
      }
    };

    window.addEventListener('touchmove', preventBackgroundTouchMove, { passive: false });

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.touchAction = originalTouchAction;
      document.body.style.paddingRight = originalBodyPadding;
      window.removeEventListener('touchmove', preventBackgroundTouchMove);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'm' || e.key === 'M') {
        toggleMute();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const video = videoRef.current;
    if (video) {
      video.playsInline = true;
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
      video.muted = isMuted;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            video.muted = true;
            setIsMuted(true);
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          });
      }
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isMuted, togglePlay, toggleMute]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-200 select-none touch-none overscroll-contain"
      onClick={onClose}
    >
      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-4xl bg-[#181818] border border-white/15 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/80 flex flex-col md:grid md:grid-cols-12 max-h-[90vh] sm:max-h-[88vh]"
      >
        {/* Top-Right Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 p-2 sm:p-2.5 rounded-full bg-black/80 hover:bg-[#FF6B4A] text-[#F5F3EE] transition-all border border-white/20 cursor-pointer shadow-lg group active:scale-90"
          title="Close modal (Esc)"
          aria-label="Close modal"
        >
          <X className="w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-90 transition-transform duration-200" />
        </button>

        {/* Left / Top Side: Reel Video Player */}
        <div 
          className="w-full md:col-span-6 bg-black flex items-center justify-center relative h-[46vh] xs:h-[50vh] sm:h-[54vh] md:h-[540px] lg:h-[580px] ios-video-container group/video select-none overflow-hidden shrink-0"
        >
          <video
            ref={videoRef}
            src={project.videoUrl}
            poster={project.videoPoster}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            webkit-playsinline="true"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-contain cursor-pointer"
            onClick={togglePlay}
          />

          {/* Top Audio Toggle Button */}
          <div className="absolute top-3 left-3 z-30">
            <button
              onClick={toggleMute}
              className={`px-2.5 py-1.5 rounded-full backdrop-blur-md transition-all cursor-pointer flex items-center gap-1.5 shadow-lg ${
                isMuted ? 'bg-black/85 text-[#FF6B4A] border border-[#FF6B4A]/40' : 'bg-black/85 text-[#C7F36B] border border-[#C7F36B]/40'
              }`}
              title={isMuted ? "Tap to Unmute Audio" : "Tap to Mute Audio"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-black uppercase tracking-wider pr-0.5">Muted</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-wider pr-0.5">Sound On</span>
                </>
              )}
            </button>
          </div>

          {/* Big Center Play Indicator when Paused */}
          {!isPlaying && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={togglePlay}
              className="absolute inset-0 bg-black/45 flex items-center justify-center z-25 cursor-pointer backdrop-blur-[2px]"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#E85536] text-white flex items-center justify-center shadow-2xl pl-1 hover:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-white" />
              </div>
            </motion.div>
          )}
        </div>

        {/* Right Side: Project Details & Instagram Action */}
        <div className="modal-scrollable-content w-full md:col-span-6 p-4 sm:p-6 md:p-7 flex flex-col justify-between space-y-4 sm:space-y-6 overflow-y-auto overscroll-contain bg-[#181818] text-[#F5F3EE] border-t md:border-t-0 md:border-l border-white/10 flex-grow touch-pan-y">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div className="inline-block px-3 py-1 rounded-full bg-[#FF6B4A]/15 border border-[#FF6B4A]/30 text-[#FF6B4A] text-xs font-bold uppercase tracking-wider">
                {project.businessType}
              </div>
              <span className="text-[11px] font-semibold text-[#A6A39D] bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                {project.category}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-[#F5F3EE] font-display leading-tight">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#A6A39D] leading-relaxed font-medium">
              {project.description}
            </p>

            {project.clientQuote && (
              <blockquote className="italic text-xs text-[#A6A39D] border-l-2 border-[#FF6B4A] pl-3 py-1 bg-white/[0.02] rounded-r-lg">
                "{project.clientQuote}"
              </blockquote>
            )}

            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-[10px] sm:text-[11px] px-2.5 py-0.5 sm:py-1 rounded-full bg-white/10 text-[#F5F3EE] font-semibold border border-white/15">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-3 sm:pt-4 border-t border-white/10 flex flex-col gap-3">
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={project.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#E85536] to-[#D84526] hover:from-[#FF6B4A] hover:to-[#E85536] text-white font-bold tracking-wide text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-[#E85536]/25 hover:shadow-2xl hover:shadow-[#FF6B4A]/45 transition-all duration-300 group cursor-pointer btn-shimmer"
            >
              <InstagramIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
              <span>Watch Reel on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </motion.a>
          </div>
        </div>

      </motion.div>

    </div>
  );
}
