import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work / Portfolio', href: '#work' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8FAFC]/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center">
          <Logo size="medium" animated={true} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-bold text-[#0F172A] hover:text-[#E11D48] transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E11D48] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hi%20Pixel%20Karigars,%20I'd%20like%20to%20discuss%20content%20for%20my%20business!`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-800 hover:text-[#E11D48] hover:border-[#E11D48] transition-all shadow-sm"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenContact}
            className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0F172A] hover:bg-[#E11D48] text-white font-bold text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Let's Work</span>
            <ArrowRight className="w-4 h-4 text-[#E11D48] group-hover:text-white" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-[#E11D48] focus:outline-none shadow-sm"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8FAFC] border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold text-[#0F172A] hover:text-[#E11D48] py-2 px-3 rounded-lg hover:bg-slate-100 transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-slate-400">→</span>
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-xl bg-[#0F172A] text-white font-extrabold text-base shadow-md flex items-center justify-center gap-2"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-5 h-5 text-[#E11D48]" />
              </button>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600/10 border border-emerald-500/30 text-emerald-800 font-semibold text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
