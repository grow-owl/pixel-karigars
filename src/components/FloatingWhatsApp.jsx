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
          className="p-3 rounded-full bg-slate-900/90 border border-slate-700 text-slate-200 hover:text-amber-400 hover:border-amber-400/50 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Button with Tooltip */}
      <div className="relative flex items-center">
        
        {/* Tooltip Chat Bubble */}
        {showTooltip && (
          <div className="absolute right-16 bottom-1 bg-slate-900 border border-emerald-500/30 text-white text-xs font-semibold px-3.5 py-2 rounded-2xl shadow-2xl whitespace-nowrap flex items-center gap-2 animate-in fade-in slide-in-from-right duration-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Chat on WhatsApp</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white ml-1"
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
          className="relative group p-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-2xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping"></span>
          
          <MessageSquare className="w-6 h-6 fill-white text-white relative z-10" />

          {/* Badge */}
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-slate-950 font-black text-[9px] flex items-center justify-center shadow-md">
            1
          </span>
        </a>

      </div>

    </div>
  );
}
