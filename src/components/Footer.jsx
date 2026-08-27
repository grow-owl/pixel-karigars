import React from 'react';
import { ArrowUpRight, Heart, MapPin, Mail, Phone } from 'lucide-react';
import Logo from './Logo';
import InstagramIcon from './InstagramIcon';
import { BRAND_INFO } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090B] text-white pt-16 pb-12 relative overflow-hidden border-t border-white/10">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <Logo animated={true} />
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-medium">
              {BRAND_INFO.aboutText}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#C084FC] hover:border-[#8B5CF6] transition-all"
                title="Follow on Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-[#C084FC]" />
              </a>
              <span className="text-xs font-bold text-slate-400">
                Follow {BRAND_INFO.handle} on Instagram
              </span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider font-display">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-semibold">
              <li>
                <a href="#services" className="hover:text-[#C084FC] transition-colors">Services & Offerings</a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#C084FC] transition-colors">Featured Client Reels</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#C084FC] transition-colors">Why Choose Pixel Karigars</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#C084FC] transition-colors">Pricing & Packages</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C084FC] transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Contact Direct Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider font-display">
              Studio Location
            </h4>
            
            <div className="space-y-3 text-xs text-slate-400 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C084FC] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C084FC] shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-[#C084FC]">
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>

            {/* Back to Top */}
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-extrabold text-slate-300 hover:text-white hover:border-violet-500 transition-all cursor-pointer"
              >
                <span>Back to Top ↑</span>
              </button>
            </div>
          </div>

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
              className="text-slate-400 hover:text-white font-medium hover:underline"
            >
              GrowOwl Pvt. Ltd.
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
