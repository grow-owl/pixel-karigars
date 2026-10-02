import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Volume2,
  VolumeX,
  Heart,
  MessageCircle,
  Share2,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import Logo from './Logo';

export default function Hero({ onOpenContact }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [liked, setLiked] = useState(true);

  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const userMutedManualRef = useRef(false);

  // Autoplay WITH AUDIO by default on load
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playsInline = true;
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');
    video.muted = false;

    const startAutoplayWithSound = async () => {
      try {
        video.muted = false;
        setIsMuted(false);
        await video.play();
        setIsPlaying(true);
      } catch {
        // Fallback for browsers that require initial user gesture before playing unmuted
        video.muted = true;
        setIsMuted(true);
        try {
          await video.play();
          setIsPlaying(true);
        } catch {
          // ignore
        }

        const autoUnmuteOnGesture = () => {
          if (!userMutedManualRef.current && videoRef.current) {
            videoRef.current.muted = false;
            setIsMuted(false);
          }
          window.removeEventListener('pointerdown', autoUnmuteOnGesture, true);
          window.removeEventListener('touchstart', autoUnmuteOnGesture, true);
          window.removeEventListener('click', autoUnmuteOnGesture, true);
          window.removeEventListener('scroll', autoUnmuteOnGesture, true);
          window.removeEventListener('keydown', autoUnmuteOnGesture, true);
        };

        window.addEventListener('pointerdown', autoUnmuteOnGesture, { capture: true, once: true });
        window.addEventListener('touchstart', autoUnmuteOnGesture, { capture: true, once: true });
        window.addEventListener('click', autoUnmuteOnGesture, { capture: true, once: true });
        window.addEventListener('scroll', autoUnmuteOnGesture, { capture: true, once: true });
        window.addEventListener('keydown', autoUnmuteOnGesture, { capture: true, once: true });
      }
    };

    startAutoplayWithSound();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play().then(() => setIsPlaying(true)).catch(() => { });
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Resume playback on scroll back into view
  useEffect(() => {
    const heroElement = heroRef.current;
    const video = videoRef.current;
    if (!heroElement || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            if (video.paused) {
              video.play().then(() => setIsPlaying(true)).catch(() => { });
            }
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: [0, 0.2, 0.5, 1.0] }
    );

    observer.observe(heroElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = (e) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => { });
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const video = videoRef.current;
    if (!video) return;

    const newMutedState = !video.muted;
    video.muted = newMutedState;
    setIsMuted(newMutedState);

    if (newMutedState) {
      userMutedManualRef.current = true;
    } else {
      userMutedManualRef.current = false;
      if (video.paused) {
        video.play().then(() => setIsPlaying(true)).catch(() => { });
      }
    }
  };

  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked(prev => !prev);
  };

  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsapp}?text=Hi%20Pixel%20Karigars,%20I%20want%20to%20know%20more%20about%20video%20shoots%20for%20my%20business!`;

  return (
    <section ref={heroRef} id="about" className="relative pt-24 pb-16 md:pt-36 md:pb-28 overflow-hidden bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Side: Clean, High-Impact Agency Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Book a Shoot Badge */}
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenContact}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#181818]/95 border border-[#C7F36B]/25 hover:border-[#C7F36B]/50 shadow-sm hover:shadow-md hover:shadow-[#C7F36B]/15 transition-all select-none group cursor-pointer backdrop-blur-md"
              title="Book Your Video Shoot"
            >
              <div className="relative flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C7F36B]"></span>
                <span className="absolute w-2.5 h-2.5 rounded-full bg-[#C7F36B] animate-ping opacity-75"></span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#F5F3EE] tracking-wide flex items-center gap-1.5">
                <span>Book a Shoot</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C7F36B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </motion.button>

            {/* Clean, Minimal Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F3EE] leading-[1.15] font-display">
              HIGH-CONVERTING REELS <br />
              FOR <span className="text-[#FF6B4A]">YOUR BRAND.</span>
            </h1>

            {/* Short Minimal Subheadline */}
            <p className="text-sm sm:text-base text-[#A6A39D] max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Premium video shoots & Instagram reels engineered for organic growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenContact}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-gradient-to-r from-[#E85536] to-[#D84526] hover:from-[#FF6B4A] hover:to-[#E85536] text-white font-bold tracking-wide text-xs sm:text-sm shadow-md shadow-[#E85536]/20 hover:shadow-lg hover:shadow-[#FF6B4A]/30 transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer btn-shimmer"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#C7F36B]/10 border border-[#C7F36B]/20 text-[#C7F36B] font-bold text-xs sm:text-sm hover:bg-[#C7F36B]/15 hover:border-[#C7F36B]/40 transition-all flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md hover:shadow-[#C7F36B]/10 group btn-shimmer"
              >
                <MessageSquare className="w-4 h-4 text-[#C7F36B] group-hover:scale-110 transition-transform duration-300" />
                <span>Chat on WhatsApp</span>
              </motion.a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 shrink-0">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#FF6B4A] shrink-0" />
                <span className="text-xs sm:text-sm text-[#F5F3EE] font-semibold whitespace-nowrap">50+ Viral Reels</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#C7F36B] shrink-0" />
                <span className="text-xs sm:text-sm text-[#F5F3EE] font-semibold whitespace-nowrap">Organic Growth</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#FF6B4A] shrink-0" />
                <span className="text-xs sm:text-sm text-[#F5F3EE] font-semibold whitespace-nowrap">Cinema Quality</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Ultra-Realistic iPhone 16 Pro Reel Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative mt-2 lg:mt-0 w-full"
          >
            {/* Ultra-Slim Razor Bezel iPhone 16 Pro Chassis */}
            <div className="relative w-full max-w-[300px] xs:max-w-[325px] sm:max-w-[350px] lg:max-w-[365px] p-[2.5px] sm:p-[3.5px] rounded-[40px] sm:rounded-[48px] bg-gradient-to-b from-[#2e2e34] via-[#1a1a1e] to-[#26262c] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95)] border border-[#40404a] group hover:border-[#FF6B4A]/40 transition-all duration-300">
              
              {/* Inner Edge-to-Edge Screen */}
              <div className="relative w-full aspect-[9/16] rounded-[37px] sm:rounded-[44px] overflow-hidden bg-black ios-video-container">

                {/* Sleek Dynamic Island Notch with Camera Lens */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-4.5 sm:h-5 bg-black rounded-full z-50 flex items-center justify-between px-2.5 shadow-md border border-white/5 pointer-events-none">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0d]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#0b1220] border border-[#1c2842] relative flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-[#2a3d68]"></div>
                  </div>
                </div>

                {/* Top-Right Circular Audio Control Button */}
                <div className="absolute top-2.5 right-2.5 z-50 pointer-events-auto">
                  <button
                    data-mute-btn="true"
                    onClick={toggleMute}
                    className="w-7.5 h-7.5 sm:w-8.5 sm:h-8.5 rounded-full bg-[#181820]/80 hover:bg-black/90 backdrop-blur-md text-white transition-all border border-white/20 shadow-lg cursor-pointer flex items-center justify-center group/audio"
                    title={isMuted ? "Unmute Audio" : "Mute Audio"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-3.5 h-3.5 text-[#FF6B4A] group-hover/audio:scale-110 transition-transform" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5 text-[#C7F36B] group-hover/audio:scale-110 transition-transform" />
                    )}
                  </button>
                </div>

                {/* Reel Video Player */}
                <div className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center">
                  <video
                    ref={videoRef}
                    src="https://res.cloudinary.com/xa8njngd/video/upload/q_auto,w_720/pixel-karigars/Helping_local_brands_stand_out_That_s_the_goal_____ContentCreation__BrandContent__SocialMediaAge.mp4"
                    poster="https://res.cloudinary.com/xa8njngd/video/upload/so_1,q_auto,w_600/pixel-karigars/Helping_local_brands_stand_out_That_s_the_goal_____ContentCreation__BrandContent__SocialMediaAge.jpg"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    webkit-playsinline="true"
                    preload="auto"
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
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    className="w-full h-full object-cover cursor-pointer rounded-[36px] sm:rounded-[43px]"
                    onClick={togglePlay}
                  />

                  {/* Large Centered Orange Circular Play Button (Reference Style) */}
                  {!isPlaying && (
                    <div
                      onClick={togglePlay}
                      className="absolute inset-0 bg-black/35 backdrop-blur-[2px] flex items-center justify-center z-40 cursor-pointer"
                    >
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gradient-to-tr from-[#FF5522] to-[#FF7733] flex items-center justify-center text-white shadow-[0_10px_30px_rgba(255,85,34,0.6)] pl-1 hover:scale-105 transition-transform"
                      >
                        <Play className="w-7 sm:w-8 h-7 sm:h-8 fill-white text-white" />
                      </motion.div>
                    </div>
                  )}

                  {/* Full-width Smooth Bottom Fade */}
                  <div className="absolute bottom-0 inset-x-0 h-44 sm:h-48 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none z-30"></div>

                  {/* Right Side Social Actions */}
                  <div className="absolute bottom-7 sm:bottom-8 right-2 sm:right-3 flex flex-col items-center gap-2.5 sm:gap-3.5 z-40">
                    <button
                      onClick={toggleLike}
                      className="flex flex-col items-center gap-0.5 group/btn cursor-pointer"
                      title="Like"
                    >
                      <div className={`p-2 rounded-full backdrop-blur-md transition-all ${liked ? 'bg-[#FF6B4A]/25 text-[#FF6B4A] scale-105 border-[#FF6B4A]/40' : 'bg-black/35 text-white hover:text-[#FF6B4A] hover:bg-black/55 border-white/15'} border shadow-lg`}>
                        <Heart className={`w-4 sm:w-5 h-4 sm:h-5 ${liked ? 'fill-[#FF6B4A]' : ''}`} />
                      </div>
                      <span className="text-[9px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">2.4k</span>
                    </button>

                    <a
                      href={BRAND_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-0.5 text-white hover:text-[#FF6B4A] cursor-pointer group"
                      title="Comment on Instagram"
                    >
                      <div className="p-2 rounded-full bg-black/35 backdrop-blur-md border border-white/15 shadow-lg group-hover:bg-black/55 group-hover:border-[#FF6B4A]/40 transition-all">
                        <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                      </div>
                      <span className="text-[9px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">184</span>
                    </a>

                    <a
                      href={BRAND_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-0.5 text-white hover:text-[#FF6B4A] cursor-pointer group"
                      title="Share on Instagram"
                    >
                      <div className="p-2 rounded-full bg-black/35 backdrop-blur-md border border-white/15 shadow-lg group-hover:bg-black/55 group-hover:border-[#FF6B4A]/40 transition-all">
                        <Share2 className="w-4 sm:w-5 h-4 sm:h-5" />
                      </div>
                      <span className="text-[9px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">Share</span>
                    </a>
                  </div>

                  {/* Seamless Instagram Profile Overlay */}
                  <div className="absolute bottom-6 sm:bottom-7 left-3 sm:left-4 right-14 sm:right-16 z-40 text-left text-white space-y-1.5 pointer-events-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#FF6B4A] to-[#C7F36B] p-0.5 shrink-0 shadow-md">
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center p-0.5">
                          <Logo size="small" showText={false} />
                        </div>
                      </div>
                      <span className="text-xs font-bold text-white tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                        pixelkarigars
                      </span>
                      <a
                        href={BRAND_INFO.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[9px] px-2.5 py-0.5 rounded-full bg-white/20 hover:bg-[#FF6B4A] text-white font-bold backdrop-blur-md border border-white/25 shrink-0 transition-all shadow-sm"
                      >
                        Follow
                      </a>
                    </div>

                    <p className="text-[10px] sm:text-[11px] text-white/95 font-medium leading-snug drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)] line-clamp-2">
                      Turning views into real customers with high-converting video shoots 🚀
                    </p>

                    <div className="flex items-center gap-1.5 text-[9px] text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                      <Sparkles className="w-3 h-3 text-[#C7F36B] animate-pulse shrink-0" />
                      <span className="truncate font-medium">Original Audio • Pixel Karigars Studio</span>
                    </div>
                  </div>

                  {/* iOS Bottom Home Indicator Bar (Reference Detail) */}
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-1 bg-white/60 rounded-full pointer-events-none z-50"></div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}





