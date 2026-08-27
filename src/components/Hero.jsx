import React, { useState, useRef, useEffect } from 'react';
import { Play, Volume2, VolumeX, Heart, MessageCircle, Share2, Sparkles, ArrowRight, CheckCircle2, ChevronUp, ChevronDown, Zap } from 'lucide-react';
import { BRAND_INFO, PORTFOLIO } from '../data/content';
import Logo from './Logo';

export default function Hero({ onOpenContact, onSelectReel }) {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [needAudioPermission, setNeedAudioPermission] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(6485);
  const videoRef = useRef(null);

  const currentReel = PORTFOLIO[activeReelIndex];

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

  // Video Autoplay & Reel Switcher
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsMuted(false);
            setNeedAudioPermission(false);
          })
          .catch(() => {
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              setNeedAudioPermission(true);
              videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
            }
          });
      }
    }
  }, [activeReelIndex]);

  const handleNextReel = () => {
    setActiveReelIndex((prev) => (prev + 1) % PORTFOLIO.length);
  };

  const handlePrevReel = () => {
    setActiveReelIndex((prev) => (prev - 1 + PORTFOLIO.length) % PORTFOLIO.length);
  };

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

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(prev => prev - 1);
    } else {
      setLiked(true);
      setLikeCount(prev => prev + 1);
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#F8FAFC]">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-[#E11D48] text-xs sm:text-sm font-bold backdrop-blur-md shadow-sm">
              <Zap className="w-4 h-4 text-[#E11D48] animate-pulse" />
              <span>Siliguri's Premier Content Studio</span>
              <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-ping"></span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-display tracking-tight text-[#0F172A] leading-[1.1]">
              YOUR BUSINESS <br className="hidden sm:inline" />
              <span className="text-gradient-coral">DESERVES BETTER</span> <br />
              CONTENT.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              {BRAND_INFO.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0F172A] hover:bg-[#E11D48] text-white font-extrabold text-base shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-5 h-5 text-[#E11D48] group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white border border-slate-300 text-[#0F172A] font-bold text-base hover:bg-slate-50 hover:border-[#E11D48] transition-all flex items-center justify-center gap-3 shadow-md"
              >
                <Play className="w-4 h-4 fill-[#E11D48] text-[#E11D48]" />
                <span>Watch Our Work</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-slate-300 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#E11D48] shrink-0" />
                <span className="text-xs sm:text-sm text-slate-800 font-semibold">50+ Reels Shot</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#E11D48] shrink-0" />
                <span className="text-xs sm:text-sm text-slate-800 font-semibold">50K+ Organic Views</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#E11D48] shrink-0" />
                <span className="text-xs sm:text-sm text-slate-800 font-semibold">Based in Siliguri</span>
              </div>
            </div>
          </div>

          {/* Right Side Visual: Zero-Bezel Edge-to-Edge iPhone 16 Pro Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-[285px] sm:w-[305px] aspect-reel rounded-[44px] overflow-hidden bg-black shadow-2xl border-[2px] border-slate-800/80 group">
              
              {/* iPhone Dynamic Island */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-40 flex items-center justify-between px-2 shadow-inner">
                <div className="w-2 h-2 rounded-full bg-[#0a0a0d]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#101018]"></div>
              </div>

              {/* Edge-to-Edge Full-Bleed Video Screen (True Zero Bezel) */}
              <div className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center">
                
                {/* HTML5 Reel Video Player */}
                <video
                  ref={videoRef}
                  src={currentReel.videoUrl}
                  poster={currentReel.videoPoster}
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-cover cursor-pointer rounded-[44px]"
                  onClick={togglePlay}
                />

                {/* Vertical Reel Scroll Arrows (Next / Prev Reel Feed Navigation) */}
                <div className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
                  <button
                    onClick={handlePrevReel}
                    className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#E11D48] transition-all shadow-lg border border-white/20"
                    title="Previous Reel"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextReel}
                    className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#E11D48] transition-all shadow-lg border border-white/20"
                    title="Next Reel"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                {/* Top Instagram Overlay Bar */}
                <div className="absolute top-7 left-0 right-0 px-3 flex items-center justify-between z-30 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                      REELS ({activeReelIndex + 1}/{PORTFOLIO.length})
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 pointer-events-auto">
                    <button
                      onClick={toggleMute}
                      className="p-1.5 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-black transition-all border border-white/20"
                      title={isMuted ? "Unmute Sound" : "Mute Sound"}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />}
                    </button>
                  </div>
                </div>

                {/* Audio Enable Overlay Prompt */}
                {isMuted && needAudioPermission && (
                  <button
                    onClick={enableAudioExplicitly}
                    className="absolute top-16 left-1/2 -translate-x-1/2 z-40 px-3 py-1 rounded-full bg-[#E11D48] text-white font-extrabold text-[10px] shadow-2xl border border-white/30 animate-bounce flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                  >
                    <Volume2 className="w-3 h-3 text-white" />
                    <span>🔊 TAP FOR REEL SOUND</span>
                  </button>
                )}

                {/* Play/Pause Overlay Indicator on Click */}
                {!isPlaying && (
                  <div 
                    onClick={togglePlay}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center z-20 cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#E11D48] text-white flex items-center justify-center shadow-2xl pl-1 animate-bounce">
                      <Play className="w-7 h-7 fill-white" />
                    </div>
                  </div>
                )}

                {/* Bottom Right Instagram Action Buttons */}
                <div className="absolute bottom-12 right-2.5 flex flex-col items-center gap-3 z-30">
                  <button
                    onClick={toggleLike}
                    className="flex flex-col items-center gap-0.5 group/btn"
                  >
                    <div className={`p-2 rounded-full bg-black/50 backdrop-blur-md transition-all ${liked ? 'text-[#E11D48] scale-110' : 'text-white hover:text-rose-400'}`}>
                      <Heart className={`w-4.5 h-4.5 ${liked ? 'fill-[#E11D48]' : ''}`} />
                    </div>
                    <span className="text-[9px] font-bold text-white shadow-sm">
                      {(likeCount / 1000).toFixed(1)}k
                    </span>
                  </button>

                  <button className="flex flex-col items-center gap-0.5 text-white hover:text-[#E11D48]">
                    <div className="p-2 rounded-full bg-black/50 backdrop-blur-md">
                      <MessageCircle className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-[9px] font-bold text-white">482</span>
                  </button>

                  <button className="flex flex-col items-center gap-0.5 text-white hover:text-[#E11D48]">
                    <div className="p-2 rounded-full bg-black/50 backdrop-blur-md">
                      <Share2 className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-[9px] font-bold text-white">Share</span>
                  </button>
                </div>

                {/* Bottom Left Instagram Account Metadata */}
                <div className="absolute bottom-3 left-2.5 right-11 z-30 text-left text-white space-y-1 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-2 rounded-xl">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full bg-[#E11D48] flex items-center justify-center p-0.5 border border-white shrink-0">
                      <Logo size="small" showText={false} />
                    </div>
                    <span className="text-[11px] font-bold text-white tracking-wide truncate">
                      pixelkarigars
                    </span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#E11D48] text-white font-extrabold shrink-0">
                      Follow
                    </span>
                  </div>

                  <p className="text-[10px] text-slate-200 line-clamp-2 font-medium leading-snug">
                    <strong className="text-[#E11D48]">{currentReel.title}:</strong> {currentReel.description}
                  </p>

                  <div className="flex items-center gap-1 text-[9px] text-slate-300">
                    <Sparkles className="w-3 h-3 text-[#E11D48] animate-spin shrink-0" />
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
