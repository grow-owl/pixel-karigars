import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Sparkles, MessageSquare, ExternalLink, ArrowUpRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { BRAND_INFO } from '../data/content';
import growOwlLogoImg from '../assets/growowl-logo.png';

export default function Contact() {
  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsapp}?text=Hi%20Pixel%20Karigars!%20I%20want%20to%20know%20more%20about%20video%20shoots%20for%20my%20business.`;
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(BRAND_INFO.location)}`;

  const contactChannels = [
    {
      id: 'instagram',
      name: 'Instagram',
      handle: BRAND_INFO.handle,
      subtext: 'Follow our daily shoots, behind-the-scenes & latest reels showcase.',
      href: BRAND_INFO.instagramUrl,
      badgeText: 'Follow Us',
      icon: ({ className }) => <InstagramIcon className={className} />,
      accentColor: 'from-[#FF6B4A] to-[#E85536]',
      borderColor: 'group-hover:border-[#FF6B4A]/50',
      glowColor: 'group-hover:shadow-[#FF6B4A]/20',
      iconBg: 'bg-[#FF6B4A]/15 text-[#FF6B4A]',
      buttonBg: 'bg-gradient-to-r from-[#E85536] to-[#D84526] hover:from-[#FF6B4A] hover:to-[#E85536] text-white transition-all duration-300'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      handle: BRAND_INFO.phone,
      subtext: 'Instant strategy chats & quick project inquiries directly with our team.',
      href: whatsappUrl,
      badgeText: 'Chat Now',
      icon: ({ className }) => <MessageSquare className={className} />,
      accentColor: 'from-[#C7F36B] to-[#A3D936]',
      borderColor: 'group-hover:border-[#C7F36B]/50',
      glowColor: 'group-hover:shadow-[#C7F36B]/20',
      iconBg: 'bg-[#C7F36B]/15 text-[#C7F36B]',
      buttonBg: 'bg-[#C7F36B] text-[#111111]'
    },
    {
      id: 'email',
      name: 'Email Direct',
      handle: BRAND_INFO.email,
      subtext: 'Send us your campaign briefs or request custom package proposals.',
      href: `mailto:${BRAND_INFO.email}`,
      badgeText: 'Send Email',
      icon: ({ className }) => <Mail className={className} />,
      accentColor: 'from-[#FF6B4A] to-[#E85536]',
      borderColor: 'group-hover:border-[#FF6B4A]/50',
      glowColor: 'group-hover:shadow-[#FF6B4A]/20',
      iconBg: 'bg-[#FF6B4A]/15 text-[#FF6B4A]',
      buttonBg: 'bg-gradient-to-r from-[#E85536] to-[#D84526] hover:from-[#FF6B4A] hover:to-[#E85536] text-white transition-all duration-300'
    },
    {
      id: 'address',
      name: 'Studio Location',
      handle: BRAND_INFO.location,
      subtext: 'Visit our dedicated creative content & video studio in Siliguri.',
      href: mapsUrl,
      badgeText: 'Get Directions',
      icon: ({ className }) => <MapPin className={className} />,
      accentColor: 'from-[#C7F36B] to-[#A3D936]',
      borderColor: 'group-hover:border-[#C7F36B]/50',
      glowColor: 'group-hover:shadow-[#C7F36B]/20',
      iconBg: 'bg-[#C7F36B]/15 text-[#C7F36B]',
      buttonBg: 'bg-[#C7F36B] text-[#111111]'
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#111111] relative overflow-hidden bg-mesh-grid">
      {/* Soft Ambient Background Glow Orbs */}
      <div className="hidden md:block absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#FF6B4A]/[0.03] rounded-full blur-[190px] pointer-events-none animate-soft-pulse"></div>
      <div className="hidden md:block absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-[#C7F36B]/[0.03] rounded-full blur-[190px] pointer-events-none animate-soft-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F3EE] font-display"
          >
            GET IN <span className="text-[#FF6B4A]">TOUCH</span>
          </motion.h2>
        </div>

        {/* 4 Direct Contact Cards Grid in Exact Order: Instagram -> WhatsApp -> Email -> Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactChannels.map((channel, idx) => {
            const IconComponent = channel.icon;

            return (
              <motion.a
                key={channel.id}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-white/12 bg-[#181818]/90 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group shadow-xl ${channel.borderColor} ${channel.glowColor} cursor-pointer`}
              >
                <div className="space-y-3 sm:space-y-5">
                  {/* Top Header Icon */}
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${channel.iconBg}`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  {/* Channel Name & Details */}
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-xl font-extrabold text-[#F5F3EE] group-hover:text-[#FF6B4A] transition-colors font-display flex items-center gap-1.5">
                      <span>{channel.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#FF6B4A]" />
                    </h3>
                    <p className="text-xs sm:text-sm font-black text-[#FF6B4A] truncate tracking-wide">
                      {channel.handle}
                    </p>
                    <p className="text-[11px] sm:text-xs text-[#A6A39D] leading-relaxed font-medium pt-0.5">
                      {channel.subtext}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-3.5 border-t border-white/10 mt-3.5 sm:pt-6 sm:mt-6">
                  <div className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl sm:rounded-2xl font-bold tracking-wide text-xs flex items-center justify-center gap-1.5 shadow-md transition-all group-hover:shadow-xl btn-shimmer ${channel.buttonBg}`}>
                    <span>{channel.badgeText}</span>
                    <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* In Collaboration With: GrowOwl Partner Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center justify-center text-center"
        >
          {/* Header Divider */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-white/20"></div>
            <span className="text-xs sm:text-sm italic font-serif text-[#A6A39D] tracking-wider select-none">
              In Collaboration With
            </span>
            <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-white/20"></div>
          </div>

          {/* GrowOwl Partner Card */}
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.growowl.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-5 sm:px-6 py-3.5 rounded-2xl sm:rounded-3xl bg-[#161616]/95 border border-white/12 hover:border-[#FF6B4A]/50 hover:shadow-2xl hover:shadow-[#FF6B4A]/15 hover:bg-[#1a1a1a] transition-all duration-300 shadow-xl shadow-black/50 group cursor-pointer"
            title="Visit GrowOwl - Strategic Digital Growth Partner (www.growowl.online)"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 border border-white/15 bg-black/60 flex items-center justify-center p-2 group-hover:border-[#FF6B4A]/50 transition-colors duration-300">
              <img 
                src={growOwlLogoImg} 
                alt="GrowOwl Logo" 
                className="w-full h-full object-contain brightness-100 group-hover:brightness-110 transition-all"
              />
            </div>
            <div className="min-w-0 text-left">
              <span className="inline-block text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#FF6B4A] bg-[#FF6B4A]/15 border border-[#FF6B4A]/30 px-2.5 py-0.5 rounded mb-1">
                PARTNER AGENCY
              </span>
              <h4 className="text-base sm:text-lg font-extrabold text-[#F5F3EE] group-hover:text-[#FF6B4A] transition-colors duration-300 truncate leading-tight font-display">
                GrowOwl
              </h4>
              <p className="text-xs sm:text-[13px] text-[#A6A39D] group-hover:text-[#F5F3EE]/90 transition-colors duration-300 truncate leading-tight font-medium mt-0.5">
                Strategic Digital Growth Partner
              </p>
            </div>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}




