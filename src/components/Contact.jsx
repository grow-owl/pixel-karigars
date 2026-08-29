import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Sparkles, MessageSquare, ExternalLink, ArrowUpRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { BRAND_INFO } from '../data/content';

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
      accentColor: 'from-[#f09433] via-[#dc2743] to-[#bc1888]',
      borderColor: 'group-hover:border-[#dc2743]/50',
      glowColor: 'group-hover:shadow-[#dc2743]/20',
      iconBg: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white',
      buttonBg: 'bg-gradient-to-r from-[#f09433] to-[#dc2743] text-white'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      handle: BRAND_INFO.phone,
      subtext: 'Instant strategy chats & quick project inquiries directly with our team.',
      href: whatsappUrl,
      badgeText: 'Chat Now',
      icon: ({ className }) => <MessageSquare className={className} />,
      accentColor: 'from-[#25D366] to-[#128C7E]',
      borderColor: 'group-hover:border-[#25D366]/50',
      glowColor: 'group-hover:shadow-[#25D366]/20',
      iconBg: 'bg-[#25D366]/15 text-[#25D366]',
      buttonBg: 'bg-[#25D366] text-white'
    },
    {
      id: 'email',
      name: 'Email Us',
      handle: BRAND_INFO.email,
      subtext: 'Send us your campaign requirements, briefs or proposal details.',
      href: `mailto:${BRAND_INFO.email}`,
      badgeText: 'Send Email',
      icon: ({ className }) => <Mail className={className} />,
      accentColor: 'from-[#FF6B35] to-[#E85A24]',
      borderColor: 'group-hover:border-[#FF6B35]/50',
      glowColor: 'group-hover:shadow-[#FF6B35]/20',
      iconBg: 'bg-[#FF6B35]/15 text-[#FF6B35]',
      buttonBg: 'bg-gradient-to-r from-[#FF6B35] to-[#E85A24] text-white'
    },
    {
      id: 'address',
      name: 'Studio Location',
      handle: BRAND_INFO.location,
      subtext: 'Visit our dedicated creative content & video studio in Siliguri.',
      href: mapsUrl,
      badgeText: 'Get Directions',
      icon: ({ className }) => <MapPin className={className} />,
      accentColor: 'from-[#6C4CF1] to-[#4F2FD4]',
      borderColor: 'group-hover:border-[#6C4CF1]/50',
      glowColor: 'group-hover:shadow-[#6C4CF1]/20',
      iconBg: 'bg-[#6C4CF1]/15 text-[#6C4CF1]',
      buttonBg: 'bg-[#6C4CF1] text-white'
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0F0E17] relative overflow-hidden bg-mesh-grid">
      {/* Background Soft Mesh Glow Orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#FF6B35]/10 rounded-full blur-[170px] pointer-events-none animate-soft-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-[#6C4CF1]/10 rounded-full blur-[170px] pointer-events-none animate-soft-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display"
          >
            GET IN <span className="text-[#FF6B35]">TOUCH</span>
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
                className={`glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-white/12 bg-[#161524]/90 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group shadow-xl ${channel.borderColor} ${channel.glowColor} cursor-pointer`}
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
                    <h3 className="text-base sm:text-xl font-extrabold text-white group-hover:text-[#FF6B35] transition-colors font-display flex items-center gap-1.5">
                      <span>{channel.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#FF6B35]" />
                    </h3>
                    <p className="text-xs sm:text-sm font-black text-[#FF6B35] truncate tracking-wide">
                      {channel.handle}
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-medium pt-0.5">
                      {channel.subtext}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-3.5 border-t border-white/10 mt-3.5 sm:pt-6 sm:mt-6">
                  <div className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl sm:rounded-2xl font-bold tracking-wide text-xs flex items-center justify-center gap-1.5 shadow-md transition-all group-hover:shadow-lg ${channel.buttonBg}`}>
                    <span>{channel.badgeText}</span>
                    <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}




