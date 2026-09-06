import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  X, 
  ChevronDown, 
  HelpCircle, 
  MessageSquare, 
  ArrowLeft, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2,
  Video,
  Clock,
  Layers,
  DollarSign,
  Compass
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FAQS, FAQ_CATEGORIES, BRAND_INFO } from '../data/content';

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIdx, setOpenIdx] = useState(0);

  // Filter FAQS based on category and search query
  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
      const matchesSearch = 
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Shoots & Production':
        return <Video className="w-3.5 h-3.5 text-[#FF6B4A]" />;
      case 'Turnaround & Delivery':
        return <Clock className="w-3.5 h-3.5 text-[#C7F36B]" />;
      case 'Pricing & Packages':
        return <DollarSign className="w-3.5 h-3.5 text-[#FF6B4A]" />;
      case 'Content Strategy':
        return <Layers className="w-3.5 h-3.5 text-[#C7F36B]" />;
      default:
        return <Compass className="w-3.5 h-3.5 text-[#A6A39D]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#F5F3EE] font-sans selection:bg-[#FF6B4A] selection:text-white flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      <main className="pt-28 pb-20 relative overflow-hidden bg-mesh-grid flex-grow">
        {/* Soft Ambient Background Glow Orbs */}
        <div className="hidden md:block absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#FF6B4A]/[0.04] rounded-full blur-[190px] pointer-events-none animate-soft-pulse"></div>
        <div className="hidden md:block absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#C7F36B]/[0.03] rounded-full blur-[180px] pointer-events-none animate-soft-pulse"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb / Back to Home Button */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-[#A6A39D] hover:text-[#FF6B4A] transition-all group cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-300 text-[#FF6B4A]" />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          {/* Page Header */}
          <div className="text-center space-y-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B4A]/10 border border-[#FF6B4A]/30 text-[#FF6B4A] text-xs font-black tracking-wider uppercase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pixel Karigars Knowledge Base</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F3EE] font-display"
            >
              FREQUENTLY ASKED <span className="text-[#FF6B4A]">QUESTIONS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-[#A6A39D] max-w-2xl mx-auto font-medium"
            >
              Have queries about our video shoots, pricing, viral scripts, turnaround times, or Instagram strategy? Find everything answered below.
            </motion.p>
          </div>

          {/* Search Input Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-8"
          >
            <div className="relative glass-panel rounded-2xl border border-white/15 bg-[#181818]/90 backdrop-blur-xl shadow-xl overflow-hidden focus-within:border-[#FF6B4A]/60 transition-colors">
              <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none text-[#A6A39D]">
                <Search className="w-5 h-5 text-[#FF6B4A]" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. reels shoot, pricing, equipment, delivery)..."
                className="w-full pl-12 pr-10 py-4 text-sm sm:text-base bg-transparent text-[#F5F3EE] placeholder-[#A6A39D]/60 focus:outline-none font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#A6A39D] hover:text-white cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none"
          >
            {FAQ_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#FF6B4A] text-white border-[#FF6B4A] shadow-lg shadow-[#FF6B4A]/25 scale-105'
                      : 'bg-[#181818] text-[#A6A39D] border-white/10 hover:border-white/25 hover:text-[#F5F3EE]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>

          {/* Search Result Count (if filtering active) */}
          {(searchQuery || selectedCategory !== 'All') && (
            <div className="mb-4 text-xs font-semibold text-[#A6A39D] flex items-center justify-between">
              <span>
                Found <span className="text-[#C7F36B] font-bold">{filteredFaqs.length}</span> questions
                {selectedCategory !== 'All' ? ` in "${selectedCategory}"` : ''}
                {searchQuery ? ` matching "${searchQuery}"` : ''}
              </span>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="text-[#FF6B4A] hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Accordion Questions List */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <motion.div
                    key={faq.id || idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className={`glass-panel rounded-2xl border transition-all duration-200 overflow-hidden shadow-lg ${
                      isOpen ? 'border-[#FF6B4A]/40 bg-[#1e1e1e]' : 'border-white/10 bg-[#181818]'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#F5F3EE] hover:text-[#FF6B4A] transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-3.5">
                        <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${isOpen ? 'text-[#FF6B4A]' : 'text-[#FF6B4A]/70'}`} />
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#A6A39D]">
                              {getCategoryIcon(faq.category)}
                              <span>{faq.category}</span>
                            </span>
                          </div>
                          <span className="leading-snug">{faq.q}</span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#A6A39D] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#FF6B4A]' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6 pt-1 text-sm text-[#A6A39D] leading-relaxed font-normal border-t border-white/10 space-y-3"
                        >
                          <p>{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            /* No Results Empty State */
            <div className="glass-panel rounded-3xl p-10 text-center border border-white/10 bg-[#181818] space-y-4">
              <HelpCircle className="w-10 h-10 text-[#FF6B4A] mx-auto opacity-70" />
              <h3 className="text-lg font-bold text-[#F5F3EE]">No matching questions found</h3>
              <p className="text-xs text-[#A6A39D] max-w-sm mx-auto">
                We couldn't find an answer matching "{searchQuery}". Ask our team directly on WhatsApp for an immediate response.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-xs font-bold text-white transition-colors cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* WhatsApp Direct Prompt Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 p-6 sm:p-8 rounded-3xl glass-panel bg-[#181818] border border-white/12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden"
          >
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C7F36B]/15 text-[#C7F36B] text-[10px] font-extrabold uppercase tracking-wider">
                <CheckCircle2 className="w-3 h-3" />
                <span>Instant Response</span>
              </div>
              <h3 className="text-lg font-bold text-[#F5F3EE] font-display">
                Have a specific question not covered here?
              </h3>
              <p className="text-xs sm:text-sm text-[#A6A39D] font-medium max-w-md">
                Chat directly with our creative video director on WhatsApp for instant guidance and custom quotes.
              </p>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hi%20Pixel%20Karigars,%20I%20have%20a%20question%20regarding%20video%20shoots%20and%20packages.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#C7F36B] hover:bg-[#A3D936] text-[#111111] font-black text-xs sm:text-sm transition-all flex items-center gap-2 shrink-0 shadow-lg shadow-[#C7F36B]/20 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#111111]" />
              <span>Ask on WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Quick Action CTA to Book Discovery Call */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-center p-8 rounded-3xl bg-gradient-to-r from-[#FF6B4A]/15 via-[#181818] to-[#C7F36B]/15 border border-white/12 shadow-2xl"
          >
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#F5F3EE] font-display mb-2">
              Ready to create viral reels that generate real revenue?
            </h3>
            <p className="text-xs sm:text-sm text-[#A6A39D] max-w-lg mx-auto mb-6">
              Let our team handle everything from scriptwriting, on-location video shooting, trending edits, and Instagram growth management.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/#contact"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#E85536] to-[#D84526] hover:from-[#FF6B4A] hover:to-[#E85536] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-[#E85536]/25 hover:shadow-[#FF6B4A]/40 transition-all btn-shimmer cursor-pointer"
              >
                <span>Get Started / Contact Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/#services"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-[#F5F3EE] font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
