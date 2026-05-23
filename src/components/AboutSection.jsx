import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Shield, Globe, Building2, Handshake } from 'lucide-react';

const pillars = [
  { icon: Building2, label: 'Multi-Sector Depth', desc: '7+ critical industries' },
  { icon: Globe, label: 'Pan-African Reach', desc: 'Nigeria, West Africa & USA' },
  { icon: Handshake, label: 'Elite Partnerships', desc: 'Global energy supermajors' },
  { icon: Shield, label: 'Institutional Scale', desc: 'Shared infrastructure & capital' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section id="about" className="relative py-24 lg:py-36 bg-white overflow-hidden" ref={ref}>
      {/* Decorative number */}
      <div className="absolute right-8 top-12 font-montserrat font-black text-[160px] leading-none text-navy/3 select-none pointer-events-none hidden xl:block">
        01
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left: Image with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm aspect-[4/5] shadow-2xl">
              <motion.img
                src="https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/558c9f487_generated_image.png"
                alt="Casa Chanan Group"
                className="w-full h-full object-cover"
                style={{ y: imgY }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            </div>

            {/* Gold badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-5 -right-5 lg:-right-8 bg-gold text-white p-6 rounded-sm shadow-2xl"
            >
              <p className="font-montserrat font-black text-3xl leading-none">20+</p>
              <p className="font-montserrat font-semibold text-xs tracking-wider uppercase mt-1">Years of Excellence</p>
            </motion.div>

            {/* Side accent line */}
            <div className="absolute -left-4 top-8 bottom-8 w-0.5 bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">About Us</span>
            </div>

            <h2 className="font-montserrat font-black text-navy leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              Building Enduring Enterprises Across Africa
            </h2>

            <p className="text-charcoal/70 leading-relaxed mb-4" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}>
              Casa Chanan Group is a pan-African diversified conglomerate with a strong and growing presence across energy, maritime logistics, mechanized agriculture, mineral extraction, manufacturing, and social development.
            </p>

            <p className="text-charcoal/60 leading-relaxed mb-10 text-sm">
              Founded on a vision to build enduring, scalable enterprises, the Group creates measurable value for governments, businesses, and communities across Nigeria and West Africa — through elite partnerships with global energy leaders and regulatory institutions.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="group flex items-start gap-3 p-4 bg-white border border-smoke hover:border-gold/30 rounded-sm transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <p.icon className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-navy text-xs">{p.label}</p>
                    <p className="text-grey text-xs mt-0.5">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}