import React from 'react';
import Logo from './Logo';
import { BRAND_INFO } from '../data/content';
import { Mail, MapPin, ArrowUp } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F1F5F9] text-slate-700 pt-16 pb-12 border-t border-slate-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-300">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="medium" animated={true} />
            <p className="text-sm text-slate-700 max-w-sm leading-relaxed pt-2 font-medium">
              {BRAND_INFO.subheadline}
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0F172A]">
              <MapPin className="w-4 h-4 text-[#E11D48] shrink-0" />
              <span>{BRAND_INFO.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Navigation
            </div>
            <ul className="space-y-2 text-sm font-semibold">
              <li><a href="#services" className="hover:text-[#E11D48] transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-[#E11D48] transition-colors">Featured Work</a></li>
              <li><a href="#why-us" className="hover:text-[#E11D48] transition-colors">Why Pixel Karigars</a></li>
              <li><a href="#pricing" className="hover:text-[#E11D48] transition-colors">Pricing Packages</a></li>
              <li><a href="#faq" className="hover:text-[#E11D48] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Connect With Us
            </div>
            
            <div className="space-y-2.5 text-sm font-semibold">
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center gap-2.5 hover:text-[#E11D48] transition-colors text-slate-800"
              >
                <Mail className="w-4 h-4 text-[#E11D48]" />
                <span>{BRAND_INFO.email}</span>
              </a>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#E11D48] transition-colors text-slate-800"
              >
                <InstagramIcon className="w-4 h-4 text-[#E11D48]" />
                <span>{BRAND_INFO.handle}</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full bg-white border border-slate-300 text-[#0F172A] hover:bg-slate-50 hover:text-[#E11D48] transition-all shadow-sm"
              >
                <span>Book Content Audit</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold">
          <div className="flex flex-col gap-1 leading-relaxed">
            <div>© {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved. Good businesses deserve great content.</div>
            <div className="flex items-center gap-1">
              <span>Designed & Developed by</span>
              <a
                href="https://www.growowl.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold text-[#E11D48] hover:text-[#BE123C] underline decoration-[#E11D48] transition-colors"
                title="GrowOwl"
              >
                GrowOwl Pvt. Ltd.
              </a>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white border border-slate-300 text-slate-800 hover:text-[#E11D48] transition-all flex items-center gap-1.5 shadow-sm shrink-0"
            title="Scroll to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
