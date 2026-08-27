import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle2, MessageSquare, Sparkles, Zap, ArrowRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { BRAND_INFO, SERVICES, PRICING_PLANS } from '../data/content';

export default function Contact({ preselectedService, preselectedPlan }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    service: preselectedService || '',
    plan: preselectedPlan || '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService, plan: '' }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedPlan) {
      setFormData((prev) => ({ ...prev, plan: preselectedPlan, service: '' }));
    }
  }, [preselectedPlan]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        businessName: '',
        service: '',
        plan: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0F0E17] relative overflow-hidden bg-mesh-grid">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-[#FF6B35]/10 rounded-full blur-[160px] pointer-events-none animate-soft-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6B35]/15 border border-[#FF6B35]/30 text-[#FF6B35] text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-[#FF6B35]" />
            <span>Start Your Project Today</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white"
          >
            LET'S MAKE YOUR BRAND <span className="text-gradient-coral">GO VIRAL</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm text-slate-300 font-medium"
          >
            Fill out the quick form below or reach out directly to schedule a strategy call.
          </motion.p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6 bg-[#161524] border border-white/10 shadow-xl">
              <h3 className="text-xl font-extrabold text-white font-display">
                Studio Contact Info
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/15 text-[#FF6B35] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Email Studio</span>
                    <a href={`mailto:${BRAND_INFO.email}`} className="text-xs font-extrabold text-white hover:text-[#FF6B35] transition-colors">
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#6C4CF1]/15 text-[#6C4CF1] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Studio Location</span>
                    <span className="text-xs font-extrabold text-white">{BRAND_INFO.location}</span>
                  </div>
                </div>

                <a 
                  href={BRAND_INFO.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-transparent transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/15 text-[#FF6B35] group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#dc2743] group-hover:to-[#bc1888] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-md flex items-center justify-center shrink-0 transition-all duration-300">
                    <InstagramIcon className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Official Handle</span>
                    <span className="text-xs font-extrabold text-white group-hover:text-[#FF6B35] transition-colors">
                      {BRAND_INFO.handle}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Response Banner */}
            <div className="p-5 rounded-3xl glass-panel bg-[#161524] text-white space-y-2 border border-white/10 shadow-xl">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#FF6B35] animate-pulse" />
                <span className="text-xs font-black text-white">Guaranteed 2-Hour Strategy Response</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Our team reviews inquiries daily. You will receive a custom quote & strategy roadmap within 2 hours.
              </p>
            </div>
          </motion.div>

          {/* Right Lead Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 bg-[#161524] shadow-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FF6B35]/15 text-[#FF6B35] flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white font-display">
                    Inquiry Received!
                  </h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    We have received your business details. A Pixel Karigars content strategist will reach out to you within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Pre-selection Notice Badge if user clicked a service or plan button */}
                  {(formData.service || formData.plan) && (
                    <div className="p-3 rounded-2xl bg-[#FF6B35]/15 border border-[#FF6B35]/30 text-[#FF6B35] text-xs font-extrabold flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#FF6B35] shrink-0" />
                      <span>
                        Selected Target: {formData.service ? `Service — ${formData.service}` : `Package — ${formData.plan}`}
                      </span>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-white mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#0F0E17]/80 backdrop-blur-md border border-white/15 text-xs font-bold text-white focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 shadow-inner transition-all placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-white mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98000 00000"
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#0F0E17]/80 backdrop-blur-md border border-white/15 text-xs font-bold text-white focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 shadow-inner transition-all placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-white mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@business.com"
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#0F0E17]/80 backdrop-blur-md border border-white/15 text-xs font-bold text-white focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 shadow-inner transition-all placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-white mb-1.5">
                        Business / Brand Name
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Store / Restaurant Name"
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#0F0E17]/80 backdrop-blur-md border border-white/15 text-xs font-bold text-white focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 shadow-inner transition-all placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  {/* Select Service / Plan with Glassmorphism Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-white mb-1.5">
                        Select Service
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#0F0E17]/90 backdrop-blur-md border border-white/15 text-xs font-bold text-white focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 shadow-inner transition-all cursor-pointer appearance-none pr-10"
                        >
                          <option value="" className="bg-[#161524] text-white">-- Choose Service --</option>
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.title} className="bg-[#161524] text-white">{s.title}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#FF6B35]">
                          ▼
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-white mb-1.5">
                        Select Package
                      </label>
                      <div className="relative">
                        <select
                          name="plan"
                          value={formData.plan}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#0F0E17]/90 backdrop-blur-md border border-white/15 text-xs font-bold text-white focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 shadow-inner transition-all cursor-pointer appearance-none pr-10"
                        >
                          <option value="" className="bg-[#161524] text-white">-- Choose Package --</option>
                          {PRICING_PLANS.map((p) => (
                            <option key={p.id} value={p.name} className="bg-[#161524] text-white">{p.name} Plan ({p.price})</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#FF6B35]">
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-white mb-1.5">
                      Project Goals / Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business goals and expectations..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#0F0E17]/80 backdrop-blur-md border border-white/15 text-xs font-bold text-white focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 shadow-inner transition-all resize-none placeholder:text-slate-500"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF6B35] to-[#E85A24] text-white font-bold tracking-wide text-sm shadow-xl shadow-[#FF6B35]/30 hover:shadow-[#FF6B35]/50 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Send Inquiry Now</span>
                    <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                  </motion.button>

                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}



