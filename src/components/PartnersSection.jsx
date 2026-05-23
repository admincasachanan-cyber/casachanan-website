import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const partners = [
  { name: 'NNPC', img: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/fa7a786a9_Nigerian_National_Petroleum_Company_logosvg.png' },
  { name: 'Shell', img: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/adcd79ef5_shell-logo-png-transparent.png' },
  { name: 'TotalEnergies', img: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/bdc9f8069_TotalEnergies_logosvg.png' },
  { name: 'Chevron', img: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/d01204ee0_Chevron_Logosvg.png' },
  { name: 'ExxonMobil', img: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/6043b8fb7_Exxon_Mobil_Logosvg.png' },
  { name: 'Seplat Energy', img: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/208aae33d_SeplatLogopng.png' },
  { name: 'ANPG', img: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/941d4e221_ANPG_Logo_Preto-1024x625-1.png' },
  { name: 'Magnific', img: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/d5214f856_magnific_2902577457.png' },
  { name: 'Eni', img: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/1e5ec9a80_eni-logo.png' },
  { name: 'HYPREP', img: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/f2d3fb665_generated_image.png', scale: '120%' },
  { name: 'NOCAL', img: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/53c551fca_generated_image.png' },
  { name: 'NEPN', img: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/0a5dad619_generated_image.png' },
];

export default function PartnersSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="partners" className="relative py-24 lg:py-32 bg-white overflow-hidden" ref={ref}>
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
              <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">Strategic Alliances</span>
            </div>
            <h2 className="font-montserrat font-black text-navy leading-none"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
              World-Class<br />
              <span className="text-grey/40">Partnerships.</span>
            </h2>
          </div>
          <p className="text-grey text-sm leading-relaxed max-w-sm lg:text-right">
            We collaborate with global energy supermajors and regional leaders to deliver technically complex, high-value projects.
          </p>
        </motion.div>

        {/* Partner Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[3/2] flex items-center justify-center p-5 rounded-sm bg-white border border-smoke hover:border-gold/30 hover:shadow-lg transition-all duration-400 overflow-hidden"
            >
              <img
                src={partner.img}
                alt={partner.name}
                style={{ width: partner.scale || '85%', height: partner.scale || '85%' }}
                className="object-contain filter grayscale group-hover:grayscale-0 opacity-55 group-hover:opacity-100 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-grey/40 text-xs text-center mt-8 tracking-wide"
        >
          Strategic partnerships with global energy supermajors and Nigerian independents
        </motion.p>
      </div>
    </section>
  );
}