import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Users, HeartHandshake, Accessibility, Home, Heart, ChevronLeft, Leaf, Sun, Droplets, ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const focusAreas = [
  { icon: GraduationCap, label: 'Girl Child Education', desc: 'Supporting education and holistic wellbeing for young girls across communities.' },
  { icon: Users, label: 'Women & Children Empowerment', desc: 'Transformative programs for lasting socio-economic upliftment.' },
  { icon: HeartHandshake, label: 'Rehabilitation Support', desc: 'Dedicated rehabilitation pathways for abused and vulnerable individuals.' },
  { icon: Accessibility, label: 'Disability Assistance', desc: 'Comprehensive assistance and support infrastructure for disabled persons.' },
  { icon: Home, label: 'Displaced Communities', desc: 'Housing and welfare support for displaced and less-privileged communities.' },
  { icon: Heart, label: 'Welfare Programs', desc: 'Ongoing welfare programs for widows, widowers, and orphaned children.' },
];

const envPillars = [
  { icon: Leaf, label: 'Responsible Extraction', desc: 'Environmental compliance in all mining and petroleum operations.' },
  { icon: Sun, label: 'Green Energy', desc: 'Investing in renewable and green energy solutions across West Africa.' },
  { icon: Droplets, label: 'Water Conservation', desc: 'Sustainable water management in agricultural and industrial operations.' },
];

const impactStats = [
  { value: '10,000+', label: 'Lives Impacted' },
  { value: '50+', label: 'Communities Served' },
  { value: '6', label: 'Focus Areas' },
  { value: '100%', label: 'Env. Compliance' },
];

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-36 pb-20 bg-navy overflow-hidden">
        <div className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
        <div className="absolute right-0 top-16 font-montserrat font-black text-[clamp(80px,15vw,200px)] leading-none text-white/[0.025] select-none pointer-events-none hidden xl:block pr-8">05</div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/35 hover:text-gold text-sm mb-8 sm:mb-10 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">Social Impact</span>
            </div>
            <h1 className="font-montserrat font-black text-white leading-[0.9] tracking-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
              Sustainability &<br />
              <span className="text-gold font-light">Social Impact.</span>
            </h1>
            <p className="text-white/55 max-w-2xl leading-relaxed text-sm sm:text-base">
              Through Casa Chanan Foundation, we are committed to creating sustainable social value — matching business success with meaningful community impact.
            </p>
          </motion.div>
        </div>

        {/* Impact stats strip */}
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 border border-white/8 divide-x divide-white/8">
            {impactStats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }} className="py-6 text-center px-2">
                <p className="font-montserrat font-black text-gold text-2xl sm:text-3xl leading-none mb-1">{s.value}</p>
                <p className="text-white/35 text-[10px] tracking-[0.2em] uppercase">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation + image — white background so text is visible */}
      <section className="py-0 bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-72 sm:h-80 lg:h-auto overflow-hidden">
            <img
              src="https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/5c8e1f2e3_generated_image.png"
              alt="Foundation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/60" />
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8">
              <div className="w-6 h-0.5 bg-gold mb-3" />
              <p className="text-white font-montserrat font-black text-lg sm:text-xl">Casa Chanan Foundation</p>
              <p className="text-white/60 text-sm mt-1">Transforming lives across Africa</p>
            </div>
          </div>
          <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">Our Foundation</span>
            </div>
            <p className="text-charcoal/70 text-sm leading-relaxed mb-8">
              Casa Chanan Foundation is the Group's dedicated vehicle for transforming business success into lasting community impact. Through targeted programmes across education, empowerment, and welfare, we are building a more equitable Africa.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {focusAreas.map((area, i) => (
                <motion.div key={area.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="group flex items-start gap-3 p-4 border border-smoke bg-smoke/40 hover:border-gold/30 hover:bg-smoke/80 rounded-sm transition-all">
                  <div className="w-8 h-8 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <area.icon className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-navy text-xs mb-0.5">{area.label}</h3>
                    <p className="text-charcoal/55 text-[11px] leading-relaxed">{area.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Environmental */}
      <section className="py-16 sm:py-20 bg-navy border-t border-white/6">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">Environment</span>
          </div>
          <h2 className="font-montserrat font-black text-white leading-none mb-10 sm:mb-12" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}>
            Environmental<br /><span className="text-gold font-light">Responsibility.</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {envPillars.map((p, i) => (
              <motion.div key={p.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative p-7 sm:p-8 border border-white/8 bg-white/3 hover:border-gold/25 rounded-sm overflow-hidden transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <p.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-montserrat font-bold text-white text-base mb-3">{p.label}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gold">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-montserrat font-black text-white text-xl sm:text-2xl">Support our community programmes.</p>
            <p className="text-white/70 text-sm mt-1">Join us in building a more equitable Africa.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-navy text-white font-bold text-[12px] sm:text-[13px] tracking-widest uppercase hover:bg-navy-mid transition-colors rounded-sm flex-shrink-0">
            Get Involved <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}