import React, { useState, useRef, useEffect } from 'react';
import { Play, Volume2, VolumeX, Heart, MessageCircle, Share2, Sparkles, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import Logo from './Logo';

export default function Hero({ onOpenContact }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [needAudioPermission, setNeedAudioPermission] = useState(false);
  const [liked, setLiked] = useState(true);
  const [likeCount, setLikeCount] = useState(4476);
  const videoRef = useRef(null);

  // Auto-Unmute audio on initial touch/click/scroll
  useEffect(() => {
    const enableAudio = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        setIsMuted(false);
        setNeedAudioPermission(false);
        videoRef.current.play().catch(() => {});
      }
    };

    window.addEventListener('click', enableAudio, { once: true });
    window.addEventListener('touchstart', enableAudio, { once: true });
    window.addEventListener('scroll', enableAudio, { once: true });

    return () => {
      window.removeEventListener('click', enableAudio);
      window.removeEventListener('touchstart', enableAudio);
      window.removeEventListener('scroll', enableAudio);
    };
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
      if (!nextMuteState) {
        setNeedAudioPermission(false);
      }
    }
  };

  const enableAudioExplicitly = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      setNeedAudioPermission(false);
      videoRef.current.play().catch(() => {});
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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#09090B] via-[#0D0B14] to-[#09090B]">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-violet-600/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-fuchsia-600/15 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs sm:text-sm font-bold backdrop-blur-md shadow-lg shadow-violet-500/10">
              <Zap className="w-4 h-4 text-fuchsia-400 animate-pulse" />
              <span>Siliguri's Premier Content Studio</span>
              <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-ping"></span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-display tracking-tight text-white leading-[1.1]">
              YOUR BUSINESS <br className="hidden sm:inline" />
              <span className="text-gradient-coral">DESERVES BETTER</span> <br />
              CONTENT.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              {BRAND_INFO.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#EC4899] hover:from-[#7C3AED] hover:to-[#DB2777] text-white font-extrabold text-base shadow-xl shadow-violet-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-base hover:bg-white/10 hover:border-violet-500/40 transition-all flex items-center justify-center gap-3 shadow-md backdrop-blur-md"
              >
                <Play className="w-4 h-4 fill-fuchsia-400 text-fuchsia-400" />
                <span>Watch Our Work</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-fuchsia-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-semibold">50+ Reels Shot</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-fuchsia-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-semibold">50K+ Organic Views</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-fuchsia-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-semibold">Based in Siliguri</span>
              </div>
            </div>
          </div>

          {/* Right Side Visual: User Uploaded Reel Video in Zero-Bezel iPhone 16 Pro */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-[285px] sm:w-[310px] aspect-reel rounded-[46px] overflow-hidden bg-black shadow-2xl shadow-violet-500/20 border-[1.5px] border-white/15 group">
              
              {/* iPhone Dynamic Island Camera Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-22 h-4 bg-black rounded-full z-50 flex items-center justify-between px-2.5 shadow-inner border border-white/10 pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0d]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#101018]"></div>
              </div>

              {/* Mobile Screen Container */}
              <div className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center">
                
                {/* HTML5 Reel Video Player */}
                <video
                  ref={videoRef}
                  src="/videos/hero-reel.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover cursor-pointer rounded-[46px]"
                  onClick={togglePlay}
                />

                {/* Top Mobile Status & Instagram Header Overlay */}
                <div className="absolute top-8 left-0 right-0 px-4 flex items-center justify-between z-40 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-ping"></span>
                      REELS
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 pointer-events-auto">
                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-black transition-all border border-white/20 shadow-md cursor-pointer"
                      title={isMuted ? "Unmute Sound" : "Mute Sound"}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5 text-fuchsia-400 animate-pulse" />}
                    </button>
                  </div>
                </div>

                {/* Tap to Unmute Overlay Prompt */}
                {isMuted && needAudioPermission && (
                  <button
                    onClick={enableAudioExplicitly}
                    className="absolute top-20 left-1/2 -translate-x-1/2 z-40 px-3 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-extrabold text-[10px] shadow-2xl border border-white/30 animate-bounce flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-white" />
                    <span>🔊 TAP FOR REEL SOUND</span>
                  </button>
                )}

                {/* Pause Overlay Indicator */}
                {!isPlaying && (
                  <div 
                    onClick={togglePlay}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center z-30 cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-full bg-violet-600 text-white flex items-center justify-center shadow-2xl pl-1 animate-bounce">
                      <Play className="w-7 h-7 fill-white" />
                    </div>
                  </div>
                )}

                {/* Mobile Instagram Action Sidebar (Right Side) */}
                <div className="absolute bottom-12 right-3 flex flex-col items-center gap-3.5 z-40">
                  <button
                    onClick={toggleLike}
                    className="flex flex-col items-center gap-1 group/btn cursor-pointer"
                  >
                    <div className={`p-2 rounded-full bg-black/50 backdrop-blur-md transition-all ${liked ? 'text-pink-500 scale-110' : 'text-white hover:text-pink-500'}`}>
                      <Heart className={`w-5 h-5 ${liked ? 'fill-pink-500' : ''}`} />
                    </div>
                    <span className="text-[10px] font-bold text-white shadow-sm">
                      {(likeCount / 1000).toFixed(1)}k
                    </span>
                  </button>

                  <button className="flex flex-col items-center gap-1 text-white hover:text-pink-500 cursor-pointer">
                    <div className="p-2 rounded-full bg-black/50 backdrop-blur-md">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-white">482</span>
                  </button>

                  <button className="flex flex-col items-center gap-1 text-white hover:text-pink-500 cursor-pointer">
                    <div className="p-2 rounded-full bg-black/50 backdrop-blur-md">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-white">Share</span>
                  </button>
                </div>

                {/* Mobile Instagram Account Overlay (Bottom Left) */}
                <div className="absolute bottom-3 left-3 right-12 z-40 text-left text-white space-y-1.5 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-2.5 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center p-0.5 border border-white shrink-0">
                      <Logo size="small" showText={false} />
                    </div>
                    <span className="text-[11px] font-bold text-white tracking-wide truncate">
                      pixelkarigars
                    </span>
                    <a
                      href={BRAND_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[9px] px-2 py-0.5 rounded bg-violet-600 hover:bg-violet-700 text-white font-extrabold shrink-0 transition-colors"
                    >
                      Follow
                    </a>
                  </div>

                  <p className="text-[10px] text-slate-200 line-clamp-2 font-medium leading-snug">
                    Helping local brands stand out. That's the goal. 🚀 #ContentCreation #BrandContent #SocialMedia
                  </p>

                  <div className="flex items-center gap-1.5 text-[9px] text-slate-300">
                    <Sparkles className="w-3 h-3 text-fuchsia-400 animate-spin shrink-0" />
                    <span className="truncate">Original Audio • Pixel Karigars Studio</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
