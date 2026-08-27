import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import InstagramIcon from './InstagramIcon';
import { BRAND_INFO } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
      
      {/* Wider Symmetrical Card Container */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden border border-white/12 shadow-2xl bg-mesh-grid">
        
        {/* Soft Ambient Background Glow Orbs */}
        <div className="absolute top-0 right-10 w-[450px] h-[450px] bg-[#FF6B35]/[0.10] rounded-full blur-[160px] pointer-events-none animate-soft-pulse"></div>
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#6C4CF1]/[0.10] rounded-full blur-[160px] pointer-events-none animate-soft-pulse"></div>

        <div className="relative z-10 space-y-10">

          {/* 3-Column Balanced Layout: Left, Center, Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Brand Info & Logo & Instagram Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 space-y-4 text-left"
          >
            <a href="#" className="inline-block">
              <Logo animated={true} lightText={true} />
            </a>

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed font-medium">
              {BRAND_INFO.aboutText}
            </p>

            {/* Instagram Icon with Vibrant Gradient Hover Effect */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 rounded-full bg-white/10 border border-white/15 text-[#FF6B35] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-md cursor-pointer"
                title="Follow on Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-[#FF6B35] group-hover:text-white transition-colors" />
              </a>
              <span className="text-xs font-bold text-slate-300">
                Follow <span className="text-[#FF6B35]">{BRAND_INFO.handle}</span> on Instagram
              </span>
            </div>
          </motion.div>

          {/* CENTER: Quick Navigation Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3 space-y-4 md:text-center text-left"
          >
            <h4 className="text-xs font-black text-white uppercase tracking-wider font-display">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-semibold inline-block text-left">
              {[
                { name: 'About Us', href: '#' },
                { name: 'Services & Offerings', href: '#services' },
                { name: 'Featured Client Reels', href: '#work' },
                { name: 'Frequently Asked Questions', href: '#faq' },
                { name: 'Contact Us', href: '#contact' },
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="hover:text-[#FF6B35] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT: Studio Location & Back to Top */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 space-y-4 text-left md:text-right flex flex-col md:items-end"
          >
            <h4 className="text-xs font-black text-white uppercase tracking-wider font-display">
              Studio Location
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300 font-medium">
              <div className="flex items-start gap-2.5 md:justify-end">
                <MapPin className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2.5 md:justify-end">
                <Mail className="w-4 h-4 text-[#FF6B35] shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-[#FF6B35] transition-colors font-semibold text-white">
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>

            {/* Back to Top */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="px-4 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#E85A24] text-xs font-extrabold text-white transition-all cursor-pointer flex items-center gap-2 shadow-md hover:shadow-lg group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-white group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar Copyright & GrowOwl Credit */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium text-center md:text-left">
          <p>
            © 2026 Pixel Karigars. All rights reserved. Good businesses deserve great content.
          </p>
          <p>
            Designed & Developed by{' '}
            <a
              href="https://www.growowl.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF6B35] font-bold hover:underline transition-colors"
            >
              GrowOwl Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
  );
}




