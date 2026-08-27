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
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

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
          <a href="#" className="flex items-center">
            <Logo animated={true} />
          </a>

          {/* Desktop Nav Links in Floating Glass Pill */}
          <nav className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#161524]/80 border border-white/10 backdrop-blur-md shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
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
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#E85A24] text-white font-bold tracking-wide text-xs shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all flex items-center gap-1.5 group cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-white focus:outline-none cursor-pointer"
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
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#161524]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-4 shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl font-bold text-sm text-slate-200 hover:text-[#FF6B35] hover:bg-white/10 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#E85A24] text-white font-bold tracking-wide text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B35]/30 cursor-pointer"
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




