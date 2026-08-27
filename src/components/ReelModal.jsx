import React, { useEffect, useRef, useState } from 'react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Backdrop Click to Close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white hover:bg-black transition-all"
        >
          <X className="w-6 h-6" />
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
            className="w-full h-full object-cover max-h-[550px] cursor-pointer"
            onClick={togglePlay}
          />

          {/* Controls Overlay */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="p-2.5 rounded-full bg-black/70 backdrop-blur-md text-amber-400 border border-white/20"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>
          </div>

          {!isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 bg-black/40 flex items-center justify-center z-20 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-xl pl-1 animate-bounce">
                <Play className="w-8 h-8 fill-slate-950" />
              </div>
            </div>
          )}
        </div>

        {/* Right Side Project Details */}
        <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto max-h-[550px]">
          <div className="space-y-4">
            <div className="inline-block px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              {project.businessType}
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
              {project.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {project.description}
            </p>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 shrink-0 text-amber-400" />
              <span>{project.stats}</span>
            </div>

            {project.clientQuote && (
              <blockquote className="italic text-xs text-slate-400 border-l-2 border-amber-500 pl-3 py-1">
                "{project.clientQuote}"
              </blockquote>
            )}

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-semibold border border-slate-700">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a
              href={project.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-all"
            >
              <InstagramIcon className="w-4 h-4 text-slate-950" />
              <span>Watch Reel on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
