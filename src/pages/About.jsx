import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Globe, Building2, Handshake, ArrowUpRight, ChevronLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const pillars = [
  { icon: Building2, label: 'Multi-Sector Depth', desc: '7+ critical industries across Africa' },
  { icon: Globe, label: 'Pan-African Reach', desc: 'Nigeria, West Africa & USA' },
  { icon: Handshake, label: 'Elite Partnerships', desc: 'Global energy supermajors' },
  { icon: Shield, label: 'Institutional Scale', desc: 'Shared infrastructure & capital' },
];

const milestones = [
  { year: '2003', event: 'Casa Chanan Group founded in Abuja, Nigeria' },
  { year: '2007', event: 'Petroleum Development Company established' },
  { year: '2010', event: 'Logistics & Maritime arm launched' },
  { year: '2013', event: 'Mechanized agriculture operations begin' },
  { year: '2016', event: 'Mining division enters West African mineral belt' },
  { year: '2018', event: 'Casa Chanan Foundation inaugurated' },
  { year: '2020', event: 'International office opens in Sugarland, Texas' },
  { year: '2024', event: 'Manufacturing & consumer goods division expands' },
];

const stats = [
  { value: '20+', label: 'Years of Excellence' },
  { value: '7+', label: 'Sectors' },
  { value: '5', label: 'Subsidiaries' },
  { value: '3', label: 'Countries' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-36 pb-20 sm:pb-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-mid" />
        <div className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
        <div className="absolute right-0 top-16 font-montserrat font-black text-[clamp(80px,15vw,200px)] leading-none text-white/[0.025] select-none pointer-events-none hidden xl:block pr-8">01</div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/35 hover:text-gold text-sm mb-10 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">Who We Are</span>
            </div>
            <h1 className="font-montserrat font-black text-white leading-[0.9] tracking-tight mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
              About<br />
              <span className="text-gold font-light">Casa Chanan.</span>
            </h1>
            <p className="text-white/55 max-w-2xl leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)' }}>
              A pan-African diversified conglomerate with a strong and growing presence across energy, maritime logistics, mechanized agriculture, mineral extraction, manufacturing, and social development.
            </p>
          </motion.div>
        </div>

        {/* Stats strip */}
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 mt-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 border border-white/8 divide-x divide-white/8">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }} className="py-6 text-center">
                <p className="font-montserrat font-black text-gold text-3xl leading-none mb-1">{s.value}</p>
                <p className="text-white/35 text-[10px] tracking-[0.2em] uppercase">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision — dark */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-6 mb-20">
            {[
              { label: 'Our Mission', text: 'To build enduring, scalable enterprises that create measurable value for governments, businesses, and communities across Nigeria and West Africa — through elite partnerships with global energy leaders and regulatory institutions.' },
              { label: 'Our Vision', text: "To be the foremost pan-African conglomerate — a beacon of institutional excellence, responsible development, and transformative impact that defines Africa's economic renaissance on the global stage." },
            ].map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative p-10 border border-smoke bg-smoke/40 rounded-sm overflow-hidden group hover:border-gold/25 transition-all duration-400">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="w-8 h-px bg-gold mb-5" />
                <h2 className="font-montserrat font-black text-navy text-2xl mb-4">{item.label}</h2>
                <p className="text-charcoal/65 leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Pillars */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">Core Pillars</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pillars.map((p, i) => (
                <motion.div key={p.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-7 border border-smoke bg-white hover:border-gold/30 hover:shadow-md rounded-sm transition-all duration-300">
                  <div className="w-11 h-11 rounded-sm bg-gold/15 flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-colors">
                    <p.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-montserrat font-bold text-navy text-sm mb-1">{p.label}</h3>
                  <p className="text-grey text-xs">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">Our Journey</span>
            </div>
            <div className="relative">
              <div className="absolute left-[4.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/15 to-transparent hidden sm:block" />
              <div className="space-y-5">
                {milestones.map((m, i) => (
                  <motion.div key={m.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="flex items-center gap-8">
                    <div className="w-16 flex-shrink-0 text-right">
                      <span className="font-montserrat font-black text-gold text-sm">{m.year}</span>
                    </div>
                    <div className="hidden sm:block w-3 h-3 rounded-full border-2 border-gold bg-white flex-shrink-0 relative z-10" />
                    <p className="text-charcoal/65 text-sm">{m.event}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-16 bg-gold">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-montserrat font-black text-white text-2xl">Ready to partner with us?</p>
            <p className="text-white/70 text-sm mt-1">Join our network of global investors and industry leaders.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white font-bold text-[13px] tracking-widest uppercase hover:bg-navy-mid transition-colors rounded-sm flex-shrink-0">
            Get In Touch <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}