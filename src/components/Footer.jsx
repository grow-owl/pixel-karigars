import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, ArrowUp, MessageSquare, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import InstagramIcon from './InstagramIcon';
import growOwlLogoImg from '../assets/growowl-logo.png';
import { BRAND_INFO } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsapp}?text=Hi%20Pixel%20Karigars!`;

  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
      
      {/* Compressed Compact Glass Card Container */}
      <div className="glass-panel rounded-3xl p-6 sm:p-7 relative overflow-hidden border border-white/12 shadow-xl bg-mesh-grid">
        
        {/* Soft Ambient Background Glow Orbs */}
        <div className="hidden md:block absolute top-0 right-10 w-[300px] h-[300px] bg-[#FF6B4A]/[0.02] rounded-full blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 space-y-6">

          {/* Balanced Layout: Left Logo & Socials, Middle Nav, Right Location/Top */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* LEFT: Logo & Social Icons (Instagram, WhatsApp, Email) */}
            <div className="md:col-span-4 flex items-center gap-3.5 justify-between md:justify-start">
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
                <Logo size="small" animated={true} />
              </a>

              <div className="flex items-center gap-2">
                {/* Instagram Icon */}
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 border border-white/15 text-[#FF6B4A] hover:bg-[#FF6B4A] hover:text-white hover:border-[#FF6B4A] hover:scale-110 transition-all shadow-md cursor-pointer"
                  title="Follow on Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                {/* WhatsApp Icon */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 border border-white/15 text-[#C7F36B] hover:bg-[#C7F36B] hover:text-[#111111] hover:scale-110 transition-all shadow-md cursor-pointer"
                  title="Chat on WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>

                {/* Email Icon */}
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="p-2 rounded-full bg-white/10 border border-white/15 text-[#FF6B4A] hover:bg-[#FF6B4A] hover:text-white hover:scale-110 transition-all shadow-md cursor-pointer"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* CENTER: Compact Nav Links */}
            <div className="md:col-span-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-[#A6A39D]">
              {[
                { name: 'About Us', href: '#' },
                { name: 'Services', href: '#services' },
                { name: 'Client Reels', href: '#work' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Contact', href: '#contact' },
              ].map((link, i) => (
                <a 
                  key={i}
                  href={link.href} 
                  className="hover:text-[#FF6B4A] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* RIGHT: Location & Back to Top */}
            <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-3">
              <div className="text-[11px] text-[#A6A39D] font-medium">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6B4A] shrink-0" />
                  <span className="truncate">{BRAND_INFO.location}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="p-2.5 rounded-full bg-white/10 border border-white/15 text-white hover:bg-[#FF6B4A] hover:border-[#FF6B4A] transition-all cursor-pointer shadow-md hover:shadow-xl hover:shadow-[#FF6B4A]/40 flex items-center justify-center shrink-0 group btn-glow-coral"
                title="Back to top"
              >
                <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform duration-300" />
              </motion.button>
            </div>

          </div>

          {/* Bottom Copyright & Credit Bar */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#A6A39D] font-medium text-center sm:text-left">
            <p>
              © 2026 Pixel Karigars. All rights reserved.
            </p>
            <p className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
              <span>Strategic Digital Growth Partner:</span>
              <a
                href="https://www.growowl.online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:opacity-80 transition-opacity"
                title="GrowOwl"
              >
                <img 
                  src={growOwlLogoImg} 
                  alt="GrowOwl" 
                  className="h-4 sm:h-4.5 w-auto object-contain inline-block" 
                />
              </a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}




