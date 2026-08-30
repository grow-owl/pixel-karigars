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
  Video,
  Clock,
  Flame,
  MessageSquare
} from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import Logo from './Logo';

export default function Hero({ onOpenContact }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [liked, setLiked] = useState(true);
  const [likeCount, setLikeCount] = useState(4476);

  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const userMutedManualRef = useRef(false);

  // iOS Safari compliant autoplay handler: Start MUTED initially to satisfy iOS autoplay policy
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playsInline = true;
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');
    video.muted = true;
    setIsMuted(true);

    const startAutoplay = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("Autoplay initial start:", err);
      }
    };

    startAutoplay();

    // Enable unmuted audio on first explicit touch/click if user hasn't manually muted
    const enableAudioOnGesture = () => {
      if (videoRef.current && !userMutedManualRef.current) {
        videoRef.current.muted = false;
        setIsMuted(false);
        if (videoRef.current.paused) {
          videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }
      removeGestureListeners();
    };

    const removeGestureListeners = () => {
      window.removeEventListener('pointerdown', enableAudioOnGesture, true);
      window.removeEventListener('touchstart', enableAudioOnGesture, true);
      window.removeEventListener('click', enableAudioOnGesture, true);
    };

    window.addEventListener('pointerdown', enableAudioOnGesture, { capture: true, once: true });
    window.addEventListener('touchstart', enableAudioOnGesture, { capture: true, once: true });
    window.addEventListener('click', enableAudioOnGesture, { capture: true, once: true });

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      removeGestureListeners();
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
              video.play().then(() => setIsPlaying(true)).catch(() => {});
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
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
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
        video.play().then(() => setIsPlaying(true)).catch(() => {});
      }
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

  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsapp}?text=Hi%20Pixel%20Karigars,%20I%20want%20to%20know%20more%20about%20video%20shoots%20for%20my%20business!`;

  return (
    <section ref={heroRef} id="about" className="relative pt-24 pb-16 md:pt-36 md:pb-28 overflow-hidden bg-[#111111] bg-mesh-grid">
      {/* Background Soft Mesh Glow - Hidden on Mobile for GPU Performance */}
      <div className="hidden md:block absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#FF6B4A]/[0.04] rounded-full blur-[180px] pointer-events-none animate-soft-pulse"></div>
      <div className="hidden md:block absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#C7F36B]/[0.04] rounded-full blur-[180px] pointer-events-none animate-soft-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Side: Clean, High-Impact Agency Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* High-Converting Clickable Promo Offer Badge Redirecting to Instagram */}
            <motion.a
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#181818] border border-[#C7F36B]/20 shadow-sm hover:shadow-md hover:shadow-[#C7F36B]/10 hover:border-[#C7F36B]/40 transition-all select-none group cursor-pointer btn-shimmer"
              title="Claim 10% OFF on Instagram"
            >
              <div className="relative flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C7F36B]"></span>
                <span className="absolute w-2.5 h-2.5 rounded-full bg-[#C7F36B] animate-ping opacity-75"></span>
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-[#F5F3EE] tracking-wide flex items-center gap-1.5">
                <span>LIMITED OFFER: <span className="text-[#C7F36B]">Get Extra 10% OFF!</span></span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C7F36B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </motion.a>

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
                <span className="text-xs sm:text-sm text-[#F5F3EE] font-semibold whitespace-nowrap">500K+ Organic Reach</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#FF6B4A] shrink-0" />
                <span className="text-xs sm:text-sm text-[#F5F3EE] font-semibold whitespace-nowrap">Siliguri Studio</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Clean iPhone 16 Pro Reel Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative mt-2 lg:mt-0"
          >
            {/* Optimized Ambient Background Halo */}
            <div className="absolute inset-0 bg-radial from-[#FF6B4A]/10 via-[#C7F36B]/5 to-transparent rounded-[50px] -z-10 transform scale-105 pointer-events-none"></div>

            {/* Sleek iPhone 16 Pro Frame - Hardware isolated for iOS WebKit video clipping */}
            <div className="relative w-[285px] xs:w-[325px] sm:w-[355px] lg:w-[380px] aspect-reel rounded-[44px] sm:rounded-[52px] overflow-hidden bg-black shadow-2xl border border-white/15 group hover:border-[#FF6B4A]/30 transition-all duration-300 ios-video-container">
              
              {/* Dynamic Island Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 sm:w-22 h-3.5 sm:h-4 bg-black rounded-full z-50 flex items-center justify-between px-2.5 shadow-inner border border-white/10 pointer-events-none">
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#0a0a0d]"></div>
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#101018]"></div>
              </div>

              {/* Reel Video Player */}
              <div className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center">
                
                <video
                  ref={videoRef}
                  src="https://res.cloudinary.com/xa8njngd/video/upload/q_auto,f_auto/v1788071681/pixel-karigars/hero-reel.mp4"
                  poster="https://res.cloudinary.com/xa8njngd/video/upload/q_auto,f_auto,so_1/v1788071681/pixel-karigars/hero-reel.jpg"
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
                  className="w-full h-full object-cover cursor-pointer rounded-[40px] sm:rounded-[46px]"
                  onClick={togglePlay}
                />

                {/* Header Overlay */}
                <div className="absolute top-8 left-0 right-0 px-4 flex items-center justify-between z-40 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black tracking-wider text-white bg-black/85 px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-[#FF6B4A] animate-ping"></span>
                      REEL SHOWCASE
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 pointer-events-auto">
                    <button
                      data-mute-btn="true"
                      onClick={toggleMute}
                      className="px-2.5 py-1 rounded-full bg-black/85 text-white hover:bg-black transition-all border border-white/25 shadow-md cursor-pointer flex items-center gap-1.5"
                      title={isMuted ? "Tap to Unmute Audio" : "Tap to Mute Audio"}
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5 text-[#FF6B4A]" />
                          <span className="text-[9px] font-extrabold text-[#FF6B4A]">TAP AUDIO</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-[#C7F36B] animate-pulse" />
                          <span className="text-[9px] font-extrabold text-[#C7F36B]">AUDIO ON</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Play/Pause Overlay Indicator */}
                {!isPlaying && (
                  <div 
                    onClick={togglePlay}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center z-30 cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#FF6B4A] text-white flex items-center justify-center shadow-2xl pl-1 animate-bounce">
                      <Play className="w-7 h-7 fill-white" />
                    </div>
                  </div>
                )}

                {/* Right Side Social Actions */}
                <div className="absolute bottom-12 right-3 flex flex-col items-center gap-3.5 z-40">
                  <button
                    onClick={toggleLike}
                    className="flex flex-col items-center gap-1 group/btn cursor-pointer"
                  >
                    <div className={`p-2 rounded-full bg-black/80 transition-all ${liked ? 'text-[#FF6B4A] scale-110' : 'text-white hover:text-[#FF6B4A]'}`}>
                      <Heart className={`w-5 h-5 ${liked ? 'fill-[#FF6B4A]' : ''}`} />
                    </div>
                    <span className="text-[10px] font-bold text-white shadow-sm">
                      {(likeCount / 1000).toFixed(1)}k
                    </span>
                  </button>

                  <button className="flex flex-col items-center gap-1 text-white hover:text-[#FF6B4A] cursor-pointer">
                    <div className="p-2 rounded-full bg-black/80">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-white">482</span>
                  </button>

                  <button className="flex flex-col items-center gap-1 text-white hover:text-[#FF6B4A] cursor-pointer">
                    <div className="p-2 rounded-full bg-black/80">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-white">Share</span>
                  </button>
                </div>

                {/* Instagram Profile Overlay Footer */}
                <div className="absolute bottom-3 left-3 right-12 z-40 text-left text-white space-y-1.5 bg-gradient-to-t from-black/95 via-black/65 to-transparent p-3 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#FF6B4A] flex items-center justify-center p-0.5 border border-white shrink-0">
                      <Logo size="small" showText={false} />
                    </div>
                    <span className="text-[11px] font-bold text-white tracking-wide truncate">
                      pixelkarigars
                    </span>
                    <a
                      href={BRAND_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[9px] px-2 py-0.5 rounded-full bg-[#FF6B4A] hover:bg-[#E85536] text-white font-black shrink-0 transition-colors shadow-sm"
                    >
                      Follow
                    </a>
                  </div>

                  <p className="text-[10px] text-[#F5F3EE] line-clamp-2 font-medium leading-snug">
                    Turning views into real customers for Siliguri brands. 🚀 #PixelKarigars #ReelsProduction #BrandGrowth
                  </p>

                  <div className="flex items-center gap-1.5 text-[9px] text-[#A6A39D]">
                    <Sparkles className="w-3 h-3 text-[#FF6B4A] animate-spin shrink-0" />
                    <span className="truncate">Original Production • Pixel Karigars Studio</span>
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





