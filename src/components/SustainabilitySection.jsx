import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Users, HeartHandshake, Accessibility, Home, Heart } from 'lucide-react';

const focusAreas = [
  { icon: GraduationCap, label: 'Girl Child Education', desc: 'Supporting education and holistic wellbeing for young girls across communities' },
  { icon: Users, label: 'Women & Children Empowerment', desc: 'Transformative programs for lasting socio-economic upliftment' },
  { icon: HeartHandshake, label: 'Rehabilitation Support', desc: 'Dedicated rehabilitation pathways for abused and vulnerable individuals' },
  { icon: Accessibility, label: 'Disability Assistance', desc: 'Comprehensive assistance and support infrastructure for disabled persons' },
  { icon: Home, label: 'Displaced Communities', desc: 'Housing and welfare support for displaced and less-privileged communities' },
  { icon: Heart, label: 'Welfare Programs', desc: 'Ongoing welfare programs for widows, widowers, and orphaned children' },
];

const impactStats = [
  { value: '10,000+', label: 'Lives Impacted' },
  { value: '50+', label: 'Communities Served' },
  { value: '6', label: 'Focus Areas' },
];

export default function SustainabilitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="sustainability" className="relative py-24 lg:py-36 bg-navy overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">Social Impact</span>
          </div>
          <h2 className="font-montserrat font-black text-white leading-none"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Sustainability &amp;<br />
            <span className="text-white/25">Social Responsibility.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 xl:gap-12 items-start">
          {/* Image + Stats Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-sm overflow-hidden aspect-[3/4] shadow-2xl mb-6">
              <img
                src="https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/5c8e1f2e3_generated_image.png"
                alt="Foundation impact"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-6 h-0.5 bg-gold mb-3" />
                <p className="text-white font-montserrat font-bold text-lg">Casa Chanan Foundation</p>
                <p className="text-white/60 text-sm">Transforming lives across Africa</p>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-3">
              {impactStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="text-center p-4 bg-white/5 rounded-sm border border-white/8"
                >
                  <p className="font-montserrat font-black text-gold text-lg leading-none">{s.value}</p>
                  <p className="text-white/40 text-[9px] tracking-wide uppercase mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Focus Areas Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <p className="text-white/45 text-sm leading-relaxed mb-8">
              Through Casa Chanan Foundation, the Group is committed to creating sustainable social value — matching business success with meaningful impact in the communities where we operate.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
                  className="group flex items-start gap-4 p-5 bg-white/4 border border-white/6 rounded-sm hover:bg-white/7 hover:border-gold/20 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-sm bg-gold/12 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <area.icon className="w-4.5 h-4.5 text-gold" />
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-white text-sm">{area.label}</p>
                    <p className="text-white/35 text-xs mt-1 leading-relaxed">{area.desc}</p>
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