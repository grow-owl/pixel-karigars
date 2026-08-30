import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp, X, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function FloatingWhatsApp() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsapp}?text=Hi%20Pixel%20Karigars!%20I'm%20interested%20in%20reels%20and%20content%20creation%20for%20my%20business.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-[#181818]/90 border border-white/15 text-[#F5F3EE] hover:text-[#FF6B4A] hover:border-[#FF6B4A]/50 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Button with Tooltip */}
      <div className="relative flex items-center">
        
        {/* Tooltip Chat Bubble */}
        {showTooltip && (
          <div className="absolute right-16 bottom-1 bg-[#181818] border border-[#FF6B4A]/30 text-[#F5F3EE] text-xs font-semibold px-3.5 py-2 rounded-2xl shadow-2xl whitespace-nowrap flex items-center gap-2 animate-in fade-in slide-in-from-right duration-300">
            <span className="w-2 h-2 rounded-full bg-[#C7F36B] animate-ping"></span>
            <span>Chat on WhatsApp</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#A6A39D] hover:text-white ml-1 cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* WhatsApp Icon Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group p-4 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#E85536] text-white shadow-2xl shadow-[#FF6B4A]/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-[#FF6B4A] opacity-40 animate-ping"></span>
          
          <MessageSquare className="w-6 h-6 fill-white text-white relative z-10" />

          {/* Badge */}
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C7F36B] text-[#111111] font-black text-[9px] flex items-center justify-center shadow-md">
            1
          </span>
        </a>

      </div>

    </div>
  );
}
