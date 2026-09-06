import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import InstagramIcon from './InstagramIcon';
import { BRAND_INFO } from '../data/content';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about', isRoute: false },
    { name: 'Services', href: '#services', isRoute: false },
    { name: 'Our Works', href: '#work', isRoute: false },
    { name: 'FAQ', href: '/faq', isRoute: true },
    { name: 'Contact Us', href: '#contact', isRoute: false },
  ];

  const handleNavClick = (e, link) => {
    if (e && e.preventDefault) e.preventDefault();
    setMobileMenuOpen(false);

    // If it is the FAQ route
    if (link.isRoute) {
      navigate(link.href);
      return;
    }

    // If we are NOT on the home page ('/'), navigate to home with hash
    if (location.pathname !== '/') {
      navigate(`/${link.href}`);
      return;
    }

    // Update URL hash dynamically so address bar reflects exact clicked section
    if (typeof window !== 'undefined' && window.history && window.history.pushState) {
      window.history.pushState(null, '', link.href);
    }

    // Perform smooth scroll to target
    if (link.href === '#' || link.href === '#hero' || link.href === '#about') {
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

    const targetElement = document.querySelector(link.href);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleContactClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/#contact');
    } else {
      if (window.history.pushState) {
        window.history.pushState(null, '', '#contact');
      }
      const contactEl = document.querySelector('#contact');
      if (contactEl) {
        const navOffset = 80;
        const elementPosition = contactEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111111]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo */}
          <Link 
            to="/" 
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }} 
            className="flex items-center"
          >
            <Logo animated={true} />
          </Link>

          {/* Desktop Nav Links in Floating Glass Pill */}
          <nav className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#181818]/80 border border-white/10 backdrop-blur-md shadow-lg">
            {navLinks.map((link) => {
              const isFaqActive = link.isRoute && location.pathname === '/faq';
              return (
                <a
                  key={link.name}
                  href={link.isRoute ? link.href : (location.pathname === '/' ? link.href : `/${link.href}`)}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                    isFaqActive
                      ? 'bg-[#FF6B4A] text-white shadow-md shadow-[#FF6B4A]/20'
                      : 'text-[#A6A39D] hover:text-[#FF6B4A] hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA & Instagram Handle */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 border border-white/15 text-[#FF6B4A] hover:bg-[#FF6B4A] hover:text-white hover:border-[#FF6B4A] hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-md group cursor-pointer"
              title="Visit Instagram"
            >
              <InstagramIcon className="w-4 h-4 text-[#FF6B4A] group-hover:text-white transition-colors" />
            </a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="px-5.5 py-2.5 rounded-full bg-gradient-to-r from-[#E85536] to-[#D84526] hover:from-[#FF6B4A] hover:to-[#E85536] text-white font-bold tracking-wide text-xs shadow-md shadow-[#E85536]/20 hover:shadow-xl hover:shadow-[#FF6B4A]/30 transition-all duration-300 flex items-center gap-1.5 group cursor-pointer btn-shimmer"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </motion.button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-white focus:outline-none cursor-pointer active:scale-95 transition-transform"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF6B4A]" /> : <Menu className="w-5 h-5 text-white" />}
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
            className="md:hidden bg-[#181818] border-b border-white/10 px-4 pt-2 pb-6 space-y-4 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => {
                const isFaqActive = link.isRoute && location.pathname === '/faq';
                return (
                  <a
                    key={link.name}
                    href={link.isRoute ? link.href : (location.pathname === '/' ? link.href : `/${link.href}`)}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`text-sm font-semibold py-2.5 px-3 rounded-lg transition-colors cursor-pointer ${
                      isFaqActive
                        ? 'bg-[#FF6B4A]/15 text-[#FF6B4A] font-bold'
                        : 'text-[#F5F3EE] hover:text-[#FF6B4A] hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/15 flex flex-col gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContactClick}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#E85536] to-[#D84526] hover:from-[#FF6B4A] hover:to-[#E85536] text-white font-bold tracking-wide text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-[#E85536]/25 hover:shadow-[#FF6B4A]/40 transition-all duration-300 cursor-pointer active:scale-98 btn-shimmer"
              >
                <span>Book Strategy Call</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}





