import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX, Heart, MessageCircle, Share2, Sparkles, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import Logo from './Logo';

export default function Hero({ onOpenContact }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [liked, setLiked] = useState(true);
  const [likeCount, setLikeCount] = useState(4476);
  const videoRef = useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().then(() => {
        setIsMuted(false);
      }).catch(() => {
        // Fallback for strict browser autoplay policies
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play();
          setIsMuted(true);
        }
      });
    }
  }, []);

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

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuteState = !isMuted;
      videoRef.current.muted = nextMuteState;
      setIsMuted(nextMuteState);
    }
  };

  const toggleLike = (e) => {
    e.stopPropagation();
    if (liked) {
      setLiked(false);
      setLikeCount(prev => prev - 1);
    } else {
      setLiked(true);
      setLikeCount(prev => prev + 1);
    }
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0F0E17] bg-mesh-grid">
      {/* Soft Ambient Background Orbs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#FF6B35]/20 rounded-full blur-[160px] pointer-events-none animate-soft-pulse"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#6C4CF1]/20 rounded-full blur-[160px] pointer-events-none animate-soft-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#6C4CF1]/15 border border-[#6C4CF1]/30 text-white text-xs sm:text-sm font-bold backdrop-blur-md shadow-sm">
              <Zap className="w-4 h-4 text-[#FF6B35]" />
              <span>Siliguri's #1 Creative Content Studio</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
              YOUR BUSINESS <br className="hidden sm:inline" />
              <span className="text-gradient-coral">DESERVES BETTER</span> <br />
              CONTENT.
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              {BRAND_INFO.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenContact}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#E85A24] text-white font-bold tracking-wide text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 border border-white/15 text-white font-bold text-xs sm:text-sm hover:bg-white/15 hover:border-[#FF6B35] transition-all flex items-center justify-center gap-2.5 shadow-sm backdrop-blur-md group"
              >
                <Play className="w-3.5 h-3.5 fill-[#FF6B35] text-[#FF6B35]" />
                <span>Watch Reel Showcase</span>
              </motion.a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-semibold">50+ Viral Reels Shot</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#6C4CF1] shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-semibold">50K+ Organic Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-semibold">Siliguri Studio</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side Visual: Reel Video in Zero-Bezel iPhone 16 Pro */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Soft Ambient Glow Halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B35]/20 via-[#6C4CF1]/15 to-[#FF6B35]/20 rounded-[50px] blur-3xl -z-10 transform scale-105 pointer-events-none"></div>

            <div className="relative w-[310px] sm:w-[345px] lg:w-[360px] aspect-reel rounded-[48px] overflow-hidden bg-black shadow-2xl border-[2px] border-white/20 group hover:border-[#FF6B35]/50 transition-all duration-300">
              
              {/* iPhone Dynamic Island Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-22 h-4 bg-black rounded-full z-50 flex items-center justify-between px-2.5 shadow-inner border border-white/10 pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0d]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#101018]"></div>
              </div>

              {/* Screen Player */}
              <div className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center">
                
                {/* HTML5 Reel Video Player with Preload Optimization */}
                <video
                  ref={videoRef}
                  src="/videos/hero-reel.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                  loading="lazy"
                  className="w-full h-full object-cover cursor-pointer rounded-[46px]"
                  onClick={togglePlay}
                />

                {/* Header Overlay */}
                <div className="absolute top-8 left-0 right-0 px-4 flex items-center justify-between z-40 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                      REELS
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 pointer-events-auto">
                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-black transition-all border border-white/20 shadow-md cursor-pointer flex items-center gap-1"
                      title={isMuted ? "Click to Unmute Sound" : "Click to Mute"}
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5 text-cyan-400" />
                          <span className="text-[9px] font-extrabold text-cyan-300">TAP AUDIO</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                          <span className="text-[9px] font-extrabold text-cyan-300">ON</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Pause Overlay Indicator */}
                {!isPlaying && (
                  <div 
                    onClick={togglePlay}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center z-30 cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-2xl pl-1 animate-bounce">
                      <Play className="w-7 h-7 fill-black" />
                    </div>
                  </div>
                )}

                {/* Right Side Social Actions */}
                <div className="absolute bottom-12 right-3 flex flex-col items-center gap-3.5 z-40">
                  <button
                    onClick={toggleLike}
                    className="flex flex-col items-center gap-1 group/btn cursor-pointer"
                  >
                    <div className={`p-2 rounded-full bg-black/50 backdrop-blur-md transition-all ${liked ? 'text-cyan-400 scale-110' : 'text-white hover:text-cyan-400'}`}>
                      <Heart className={`w-5 h-5 ${liked ? 'fill-cyan-400' : ''}`} />
                    </div>
                    <span className="text-[10px] font-bold text-white shadow-sm">
                      {(likeCount / 1000).toFixed(1)}k
                    </span>
                  </button>

                  <button className="flex flex-col items-center gap-1 text-white hover:text-cyan-400 cursor-pointer">
                    <div className="p-2 rounded-full bg-black/50 backdrop-blur-md">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-white">482</span>
                  </button>

                  <button className="flex flex-col items-center gap-1 text-white hover:text-cyan-400 cursor-pointer">
                    <div className="p-2 rounded-full bg-black/50 backdrop-blur-md">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-white">Share</span>
                  </button>
                </div>

                {/* Account Overlay */}
                <div className="absolute bottom-3 left-3 right-12 z-40 text-left text-white space-y-1.5 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-2.5 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center p-0.5 border border-white shrink-0">
                      <Logo size="small" showText={false} />
                    </div>
                    <span className="text-[11px] font-bold text-white tracking-wide truncate">
                      pixelkarigars
                    </span>
                    <a
                      href={BRAND_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[9px] px-2 py-0.5 rounded bg-cyan-400 hover:bg-cyan-500 text-black font-black shrink-0 transition-colors"
                    >
                      Follow
                    </a>
                  </div>

                  <p className="text-[10px] text-slate-200 line-clamp-2 font-medium leading-snug">
                    Helping local brands stand out. That's the goal. 🚀 #ContentCreation #BrandContent #SocialMedia
                  </p>

                  <div className="flex items-center gap-1.5 text-[9px] text-slate-300">
                    <Sparkles className="w-3 h-3 text-cyan-400 animate-spin shrink-0" />
                    <span className="truncate">Original Audio • Pixel Karigars Studio</span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}



