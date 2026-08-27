import React, { useState } from 'react';
import { BRAND_INFO } from '../data/content';
import { CheckCircle2, MessageSquare, Mail, MapPin } from 'lucide-react';

export default function Contact({ preselectedService, preselectedPlan }) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    businessType: '',
    service: preselectedService || preselectedPlan || 'Reels & Video Content',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    'Reels & Video Content',
    'Social Media Management',
    'Content Strategy',
    'Graphic & Creative Design',
    'Custom Project',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = `Hi Pixel Karigars! 👋%0A%0AName: ${encodeURIComponent(formData.name || 'Client')}%0ABusiness: ${encodeURIComponent(formData.businessName || 'N/A')}%0APhone: ${encodeURIComponent(formData.phone || 'N/A')}%0AService Requested: ${encodeURIComponent(formData.service)}%0AProject Details: ${encodeURIComponent(formData.projectDetails || 'Interested in upgrading content.')}`;
    return `https://wa.me/${BRAND_INFO.whatsapp}?text=${text}`;
  };

  return (
    <section id="contact" className="py-14 bg-[#F1F5F9] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-slate-300 text-[#0F172A] text-xs font-bold uppercase tracking-wider shadow-sm">
              Start A Project
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight text-[#0F172A] leading-tight">
              LET'S CREATE SOMETHING <br />
              <span className="text-gradient-coral">WORTH WATCHING.</span>
            </h2>

            <p className="text-sm text-slate-700 font-medium leading-relaxed">
              Fill out the quick inquiry form. We respond within 2 hours during business schedules.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#E11D48] transition-all flex items-center gap-3 group shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 text-[#E11D48] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase">Official Email</div>
                  <div className="text-sm font-bold text-[#0F172A] group-hover:text-[#E11D48] transition-colors">
                    {BRAND_INFO.email}
                  </div>
                </div>
              </a>

              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 transition-all flex items-center gap-3 group shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase">Instant WhatsApp Chat</div>
                  <div className="text-sm font-bold text-emerald-700 group-hover:text-emerald-800 transition-colors">
                    Chat with Pixel Karigars →
                  </div>
                </div>
              </a>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 text-[#E11D48] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase">Studio Location</div>
                  <div className="text-sm font-bold text-[#0F172A]">
                    {BRAND_INFO.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form Container */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white shadow-lg relative">
              
              {submitted ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in duration-500">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-500/30 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-black text-[#0F172A] font-display">
                    Thank You, {formData.name || 'Friend'}!
                  </h3>

                  <p className="text-sm text-slate-700 max-w-md mx-auto">
                    Your inquiry has been received! Our content team will review your business details and get back to you shortly.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-[#0F172A] text-white font-bold text-xs shadow-md flex items-center gap-2 hover:scale-105 transition-all"
                    >
                      <MessageSquare className="w-4 h-4 text-[#E11D48]" />
                      <span>Send via WhatsApp Now</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-800 font-bold text-xs hover:bg-slate-200"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Your Name */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E11D48] transition-colors text-xs"
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        required
                        placeholder="e.g. MK Traders / Cafe Sage"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E11D48] transition-colors text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E11D48] transition-colors text-xs"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E11D48] transition-colors text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Business Category */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Business Type
                      </label>
                      <input
                        type="text"
                        name="businessType"
                        placeholder="e.g. Restaurant, Mobile Store"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E11D48] transition-colors text-xs"
                      />
                    </div>

                    {/* Service Dropdown */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8FAFC] border border-slate-300 text-slate-900 focus:outline-none focus:border-[#E11D48] transition-colors text-xs"
                      >
                        {serviceOptions.map((opt, i) => (
                          <option key={i} value={opt} className="bg-white text-slate-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Project Details
                    </label>
                    <textarea
                      name="projectDetails"
                      rows="2"
                      placeholder="Share your goals or video shoot expectations..."
                      value={formData.projectDetails}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2 rounded-lg bg-[#F8FAFC] border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E11D48] transition-colors text-xs resize-none"
                    ></textarea>
                  </div>

                  {/* Submit CTA Button */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#0F172A] hover:bg-[#E11D48] text-white font-black text-sm shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <span>LET'S TALK →</span>
                  </button>

                  <div className="text-center text-[10px] text-slate-500 font-medium">
                    We respect your privacy. No spam guaranteed.
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
