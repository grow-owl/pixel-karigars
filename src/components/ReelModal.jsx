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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/95 animate-in fade-in duration-300">
      
      {/* Backdrop Click to Close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full max-w-4xl bg-[#181818] border border-white/15 rounded-3xl overflow-hidden shadow-2xl shadow-[#FF6B4A]/20 grid grid-cols-1 md:grid-cols-12 max-h-[92vh]"
      >
        
        {/* Top-Right Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 z-40 p-2.5 rounded-full bg-black/80 hover:bg-[#FF6B4A] text-[#A6A39D] hover:text-white transition-all border border-white/15 cursor-pointer shadow-lg group"
          title="Close modal (Esc)"
        >
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
        </button>

        {/* Left Side: Reel Video Player */}
        <div 
          className="md:col-span-6 bg-black flex items-center justify-center relative min-h-[420px] md:min-h-[520px] ios-video-container group/video select-none overflow-hidden"
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
            className="w-full h-full object-cover max-h-[560px] cursor-pointer"
            onClick={togglePlay}
          />

          {/* Top Audio Toggle Button */}
          <div className="absolute top-3.5 left-3.5 z-30">
            <button
              onClick={toggleMute}
              className={`p-2 rounded-full backdrop-blur-md transition-all cursor-pointer flex items-center gap-1.5 shadow-lg ${
                isMuted ? 'bg-black/80 text-[#FF6B4A] border border-[#FF6B4A]/40' : 'bg-black/80 text-[#C7F36B] border border-[#C7F36B]/40'
              }`}
              title={isMuted ? "Tap to Unmute Audio" : "Tap to Mute Audio"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-wider pr-1">Muted</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-wider pr-1">Sound On</span>
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
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#E85536] text-white flex items-center justify-center shadow-2xl pl-1 hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-white" />
              </div>
            </motion.div>
          )}
        </div>

        {/* Right Side: Project Details & Instagram Action */}
        <div className="md:col-span-6 p-5 sm:p-7 flex flex-col justify-between space-y-6 overflow-y-auto max-h-[560px] bg-[#181818] text-[#F5F3EE] border-t md:border-t-0 md:border-l border-white/10">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div className="inline-block px-3 py-1 rounded-full bg-[#FF6B4A]/15 border border-[#FF6B4A]/30 text-[#FF6B4A] text-xs font-bold uppercase tracking-wider">
                {project.businessType}
              </div>
              <span className="text-[11px] font-semibold text-[#A6A39D] bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                {project.category}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#F5F3EE] font-display leading-tight">
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

            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full bg-white/10 text-[#F5F3EE] font-semibold border border-white/15">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={project.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#E85536] to-[#D84526] hover:from-[#FF6B4A] hover:to-[#E85536] text-white font-bold tracking-wide text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-[#E85536]/25 hover:shadow-2xl hover:shadow-[#FF6B4A]/45 transition-all duration-300 group cursor-pointer btn-shimmer"
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
