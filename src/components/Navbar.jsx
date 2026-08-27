import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import InstagramIcon from './InstagramIcon';
import { BRAND_INFO } from '../data/content';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Works', href: '#work' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    if (e && e.preventDefault) e.preventDefault();
    setMobileMenuOpen(false);
    
    setTimeout(() => {
      if (href === '#' || href === '#hero' || href === '#about') {
        const aboutEl = document.querySelector('#about');
        if (aboutEl) {
          const navOffset = 80;
          const elementPosition = aboutEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      const targetElement = document.querySelector(href);
      if (targetElement) {
        const navOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F0E17]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo */}
          <a href="#" onClick={(e) => handleNavClick(e, '#about')} className="flex items-center">
            <Logo animated={true} />
          </a>

          {/* Desktop Nav Links in Floating Glass Pill */}
          <nav className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#161524]/80 border border-white/10 backdrop-blur-md shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-bold text-slate-300 hover:text-[#FF6B35] px-3.5 py-1.5 rounded-full transition-all hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA & Instagram Handle */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 border border-white/15 text-[#FF6B35] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-md group cursor-pointer"
              title="Visit Instagram"
            >
              <InstagramIcon className="w-4 h-4 text-[#FF6B35] group-hover:text-white transition-colors" />
            </a>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#E85A24] text-white font-bold tracking-wide text-xs shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 group cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-white focus:outline-none cursor-pointer active:scale-95 transition-transform"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF6B35]" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#161524]/98 backdrop-blur-2xl border-b border-white/15 px-5 pt-5 pb-7 space-y-4 shadow-2xl relative z-50"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 rounded-xl font-bold text-sm text-slate-200 hover:text-[#FF6B35] hover:bg-white/10 active:bg-white/15 transition-colors block cursor-pointer text-left"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/15 flex flex-col gap-3">
              <button
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#E85A24] text-white font-bold tracking-wide text-sm text-center flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer active:scale-98"
              >
                <span>Book Strategy Call</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}




