import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Robust background scroll locking
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
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200 select-none overscroll-contain"
      onClick={onClose}
    >
      {/* Light Theme Modal Dialog Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full h-[100dvh] h-screen sm:h-auto sm:max-h-[90vh] sm:max-w-md md:max-w-4xl bg-white border border-slate-200/90 rounded-none sm:rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/25 flex flex-col md:grid md:grid-cols-12"
      >
        {/* Left Side: Video Player */}
        <div 
          className="relative w-full flex-1 md:flex-initial md:col-span-6 bg-black flex items-center justify-center h-full sm:h-[480px] md:h-[560px] lg:h-[600px] ios-video-container select-none overflow-hidden"
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
            preload="auto"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-cover sm:object-contain cursor-pointer"
            onClick={togglePlay}
          />

          {/* Top Audio Toggle Button */}
          <div className="absolute top-4 left-4 z-40">
            <button
              onClick={toggleMute}
              className={`px-3 py-1.5 rounded-full backdrop-blur-md transition-all cursor-pointer flex items-center gap-1.5 shadow-lg ${
                isMuted ? 'bg-black/80 text-[#FF6B4A] border border-[#FF6B4A]/40' : 'bg-black/80 text-[#C7F36B] border border-[#C7F36B]/40'
              }`}
              title={isMuted ? "Tap to Unmute Audio" : "Tap to Mute Audio"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-black uppercase tracking-wider pr-0.5">Muted</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-wider pr-0.5">Sound On</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile-Only Top-Right Close Button */}
          <div className="md:hidden absolute top-4 right-4 z-40">
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-black/80 hover:bg-[#FF6B4A] text-white transition-all border border-white/20 cursor-pointer shadow-lg active:scale-90"
              title="Close (Esc)"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Big Center Play Indicator when Paused */}
          {!isPlaying && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={togglePlay}
              className="absolute inset-0 bg-black/40 flex items-center justify-center z-30 cursor-pointer backdrop-blur-[2px]"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FF5533] text-white flex items-center justify-center shadow-2xl pl-1 hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-white" />
              </div>
            </motion.div>
          )}

          {/* Mobile Bottom Floating Overlay (Instagram Reel Style) */}
          <div className="md:hidden absolute bottom-0 left-0 right-0 p-4 pb-7 bg-gradient-to-t from-black via-black/85 to-transparent z-40 space-y-2.5">
            <div className="space-y-1">
              <span className="inline-block text-[10px] font-black uppercase tracking-wider text-white bg-[#FF6B4A] px-2.5 py-0.5 rounded-full shadow-xs">
                {project.category}
              </span>
              <h3 className="text-lg font-black text-white font-display leading-tight drop-shadow-md">
                {project.title}
              </h3>
            </div>

            <motion.a
              whileTap={{ scale: 0.97 }}
              href={project.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-[#FF6B4A] hover:bg-[#FF5533] text-white font-bold tracking-wide text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B4A]/30 active:scale-98 cursor-pointer btn-shimmer"
            >
              <InstagramIcon className="w-4 h-4 text-white" />
              <span>Watch Reel on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </div>

        {/* Desktop-Only Top-Right Close Button */}
        <button
          onClick={onClose}
          className="hidden md:flex absolute top-5 right-5 z-50 p-2.5 rounded-full bg-slate-100 hover:bg-[#FF6B4A] text-slate-700 hover:text-white transition-all border border-slate-200 shadow-sm group active:scale-90 items-center justify-center cursor-pointer"
          title="Close modal (Esc)"
          aria-label="Close modal"
        >
          <X className="w-4.5 h-4.5 group-hover:rotate-90 transition-transform duration-200" />
        </button>

        {/* Desktop Right Side Panel (Clean Light Theme) */}
        <div className="hidden md:flex md:col-span-6 p-7 lg:p-8 flex-col justify-between space-y-5 bg-white text-[#0F172A] border-l border-slate-100 modal-scrollable-content overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FF6B4A]/10 border border-[#FF6B4A]/25 text-[#FF6B4A] text-xs font-bold uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-extrabold text-[#0F172A] font-display leading-tight">
              {project.title}
            </h3>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={project.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-[#FF6B4A] hover:bg-[#FF5533] text-white font-bold tracking-wide text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-[#FF6B4A]/25 hover:shadow-2xl hover:shadow-[#FF6B4A]/40 transition-all duration-300 group cursor-pointer btn-shimmer"
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
