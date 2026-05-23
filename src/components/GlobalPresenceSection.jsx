import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const offices = [
  {
    city: 'Abuja',
    country: 'Nigeria',
    flag: '🇳🇬',
    address: '1 Niagara Close, Maitama, FCT',
    role: 'Global Headquarters',
    primary: true,
  },
  {
    city: 'Lagos',
    country: 'Nigeria',
    flag: '🇳🇬',
    address: '13 Lugard Avenue, Ikoyi',
    role: 'West Africa Operations Hub',
    primary: false,
  },
  {
    city: 'Sugarland, Texas',
    country: 'United States',
    flag: '🇺🇸',
    address: '32 Miramar Heights Circle',
    role: 'International Office',
    primary: false,
  },
];

export default function GlobalPresenceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">Where We Operate</span>
            </div>
            <h2 className="font-montserrat font-black text-navy leading-none"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
              Global<br />
              <span className="text-navy/25">Presence.</span>
            </h2>
          </div>
          <p className="text-grey text-sm leading-relaxed max-w-sm lg:text-right">
            Strategic offices connecting African operations to global markets and capital.
          </p>
        </motion.div>

        {/* Office Cards */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
          {offices.map((office, i) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative p-8 rounded-sm border transition-all duration-500 ${
                office.primary
                  ? 'bg-navy border-gold/30 text-white'
                  : 'bg-white border-smoke hover:border-navy/20 hover:shadow-lg'
              }`}
            >
              {office.primary && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold rounded-t-sm" />
              )}

              <div className="text-3xl mb-5">{office.flag}</div>

              <span className={`text-[10px] font-bold tracking-[0.3em] uppercase ${office.primary ? 'text-gold/80' : 'text-gold'}`}>
                {office.role}
              </span>

              <h3 className={`font-montserrat font-black text-xl mt-1 mb-1 ${office.primary ? 'text-white' : 'text-navy'}`}>
                {office.city}
              </h3>
              <p className={`text-sm mb-4 ${office.primary ? 'text-white/40' : 'text-grey'}`}>
                {office.country}
              </p>

              <div className={`flex items-start gap-2 text-xs ${office.primary ? 'text-white/50' : 'text-grey'}`}>
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span>{office.address}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 p-6 bg-white border border-smoke rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="font-montserrat font-bold text-navy text-sm">Direct Line — Reach Our Team</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <a href="tel:+13475794464" className="flex items-center gap-2 text-sm text-grey hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold" />
              +1 347 579 4464
            </a>
            <a href="tel:+2347039339862" className="flex items-center gap-2 text-sm text-grey hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold" />
              +234 703 933 9862
            </a>
            <a href="mailto:ccpdcl@gmail.com" className="flex items-center gap-2 text-sm text-grey hover:text-gold transition-colors">
              <Mail className="w-3.5 h-3.5 text-gold" />
              ccpdcl@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}