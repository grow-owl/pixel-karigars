import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Volume2, VolumeX, Sparkles, ExternalLink } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function ReelModal({ project, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    const video = videoRef.current;
    if (video) {
      video.playsInline = true;
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', 'true');

      // Attempt playback on modal open (fallback to muted if mobile blocks audio)
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            video.muted = true;
            setIsMuted(true);
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          });
      }
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      
      {/* Backdrop Click to Close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full max-w-4xl bg-[#181818] border border-white/15 rounded-3xl overflow-hidden shadow-2xl shadow-[#FF6B4A]/15 grid grid-cols-1 md:grid-cols-12 max-h-[90vh]"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 text-[#A6A39D] hover:text-white hover:bg-black transition-all border border-white/10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side Video Player */}
        <div className="md:col-span-6 bg-black flex items-center justify-center relative min-h-[380px] md:min-h-[500px]">
          <video
            ref={videoRef}
            src={project.videoUrl}
            poster={project.videoPoster}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            webkit-playsinline="true"
            onCanPlay={() => {
              if (videoRef.current && videoRef.current.paused) {
                videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
              }
            }}
            onLoadedData={() => {
              if (videoRef.current && videoRef.current.paused) {
                videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
              }
            }}
            className="w-full h-full object-cover max-h-[550px] cursor-pointer"
            onClick={togglePlay}
          />

          {/* Controls Overlay */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="p-2.5 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 hover:scale-105 transition-all cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-[#FF6B4A]" /> : <Volume2 className="w-4 h-4 text-[#FF6B4A] animate-pulse" />}
            </button>
          </div>

          {!isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 bg-black/40 flex items-center justify-center z-20 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-[#FF6B4A] text-white flex items-center justify-center shadow-xl pl-1 animate-bounce">
                <Play className="w-8 h-8 fill-white" />
              </div>
            </div>
          )}
        </div>

        {/* Right Side Project Details */}
        <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto max-h-[550px] bg-[#181818] text-[#F5F3EE] border-l border-white/10">
          <div className="space-y-4">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#FF6B4A]/15 border border-[#FF6B4A]/30 text-[#FF6B4A] text-xs font-bold uppercase tracking-wider">
              {project.businessType}
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#F5F3EE] font-display">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#A6A39D] leading-relaxed font-medium">
              {project.description}
            </p>

            <div className="p-4 rounded-2xl bg-[#FF6B4A]/15 border border-[#FF6B4A]/25 text-[#FF6B4A] text-xs font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 shrink-0 text-[#FF6B4A]" />
              <span>{project.stats}</span>
            </div>

            {project.clientQuote && (
              <blockquote className="italic text-xs text-[#A6A39D] border-l-2 border-[#FF6B4A] pl-3 py-1">
                "{project.clientQuote}"
              </blockquote>
            )}

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-[11px] px-2.5 py-1 rounded-full bg-white/10 text-[#F5F3EE] font-semibold border border-white/15">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={project.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#E85536] to-[#D84526] hover:from-[#FF6B4A] hover:to-[#E85536] text-white font-bold tracking-wide text-sm flex items-center justify-center gap-2 shadow-xl shadow-[#E85536]/25 hover:shadow-2xl hover:shadow-[#FF6B4A]/45 transition-all duration-300 group cursor-pointer btn-shimmer"
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


