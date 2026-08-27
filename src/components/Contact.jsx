import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
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
    <section id="contact" className="py-14 bg-[#09090B] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-violet-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            📩 Start Your Project
          </div>

          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            LET'S MAKE YOUR BRAND <span className="text-gradient-coral">GO VIRAL</span>
          </h2>

          <p className="text-sm text-slate-400 font-medium">
            Fill out the form below or reach out directly to schedule a strategy call.
          </p>
        </div>

        {/* Compact Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel rounded-2xl p-5 space-y-4">
              <h3 className="text-xl font-extrabold text-white font-display">
                Studio Contact Info
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Email Studio</span>
                    <a href={`mailto:${BRAND_INFO.email}`} className="text-xs font-bold text-white hover:text-violet-300">
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Studio Location</span>
                    <span className="text-xs font-bold text-white">{BRAND_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0">
                    <InstagramIcon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Official Handle</span>
                    <a href={BRAND_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white hover:text-violet-300">
                      {BRAND_INFO.handle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Banner */}
            <div className="p-4 rounded-2xl bg-[#141417] text-white space-y-2 border border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-fuchsia-400" />
                <span className="text-xs font-bold text-slate-100">Guaranteed 2-Hour Response Time</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                Our team reviews inquiries daily. You will receive a custom quote & strategy roadmap within 2 hours.
              </p>
            </div>
          </div>

          {/* Right Lead Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-violet-500/10 text-violet-400 flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white font-display">
                    Thank You! Inquiry Received.
                  </h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    We have received your business details. A Pixel Karigars content strategist will contact you shortly on WhatsApp / Phone.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98000 00000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@business.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Business Name
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Store / Restaurant Name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  {/* Select Service / Plan */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Select Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#141417] border border-white/10 text-xs font-semibold text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                      >
                        <option value="">-- Choose Service --</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Select Package Plan
                      </label>
                      <select
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#141417] border border-white/10 text-xs font-semibold text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                      >
                        <option value="">-- Choose Package --</option>
                        {PRICING_PLANS.map((p) => (
                          <option key={p.id} value={p.name}>{p.name} Plan ({p.price})</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Project Details / Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business goals..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none placeholder:text-slate-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-black text-sm shadow-lg shadow-violet-500/25 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Send Inquiry Now</span>
                    <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
