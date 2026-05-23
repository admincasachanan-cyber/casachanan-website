import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wheat, ChevronLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const services = [
  'Cash Crops: Cocoa, Palm Oil, Rubber',
  'Horticulture: Fruits & Vegetables',
  'Aquaculture: Fish & Aquatic Animals',
  'Livestock (Poultry, Cattle, Piggery)',
  'Dairy: Milk, Cheese & Yoghurt',
  'Staple Foods: Rice, Yams, Plantain',
  'Green Houses',
  'Heliculture (Snail Farming)',
];

const stats = [
  { value: '8', suffix: '+', label: 'Farming Verticals' },
  { value: 'Local', suffix: ' & Export', label: 'Market Reach' },
  { value: 'Modern', suffix: '', label: 'Agri-Technology' },
  { value: 'Large', suffix: '-Scale', label: 'Mechanized Farming' },
];

export default function Farms() {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/cc483acdc_generated_image.png"
            alt="Farms"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-navy/80 to-navy/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
        <div className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-transparent via-gold/60 to-transparent" />

        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 pb-16 pt-36">
          <Link to="/subsidiaries" className="inline-flex items-center gap-2 text-white/40 hover:text-gold text-sm mb-10 transition-colors">
            <ChevronLeft className="w-4 h-4" /> All Subsidiaries
          </Link>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full border border-gold/40 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                <Wheat className="w-5 h-5 text-gold" />
              </div>
              <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">Subsidiary 03</span>
            </div>
            <h1 className="font-montserrat font-black text-white leading-tight mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 5rem)' }}>
              Casa Chanan<br />
              <span className="text-gold font-light">Farms Ltd</span>
            </h1>
            <p className="text-white/70 text-lg lg:text-xl font-light italic mb-8">
              Feeding the Continent, Sustainably.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-white font-bold text-[12px] tracking-widest uppercase hover:bg-gold-light transition-colors rounded-sm"
            >
              Partner With Us <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
        <div className="absolute right-6 bottom-8 font-montserrat font-black text-white/[0.04] select-none pointer-events-none hidden lg:block" style={{ fontSize: '20rem', lineHeight: 1 }}>03</div>
      </section>

      {/* Stats */}
      <section className="bg-navy border-b border-white/8">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/8">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="py-8 px-6 text-center">
                <p className="font-montserrat font-black text-gold text-2xl lg:text-3xl mb-1">{s.value}<span className="text-gold/70">{s.suffix}</span></p>
                <p className="text-white/45 text-[10px] font-semibold tracking-[0.2em] uppercase">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">Who We Are</span>
              </div>
              <h2 className="font-montserrat font-black text-navy mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
                Large-Scale<br />
                <span className="text-gold font-light">Mechanized Farming</span><br />
                Enterprise
              </h2>
              <p className="text-charcoal/70 leading-relaxed text-base mb-6">
                Casa Chanan Farms Ltd is a large-scale, profit-driven mechanized farming enterprise built to supply both domestic markets and international export demand.
              </p>
              <p className="text-charcoal/70 leading-relaxed text-base mb-8">
                Deploying modern agricultural technology across multiple farming verticals, the company maximizes yield, minimizes waste, and delivers premium produce — from high-value cash crops and staple foods to aquaculture, dairy, and snail farming.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-gold font-bold text-sm tracking-widest uppercase hover:gap-3 transition-all group">
                Get In Touch <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
              <img
                src="https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/f4c38ac83_WhatsAppImage2026-05-05at94543AM.jpg"
                alt="Farm Operations"
                className="w-full h-80 lg:h-[440px] object-cover rounded-sm shadow-xl"
              />
              <div className="absolute -bottom-5 -left-5 bg-gold text-white p-5 rounded-sm shadow-lg hidden lg:block">
                <p className="font-montserrat font-black text-2xl">8+</p>
                <p className="text-white/80 text-xs tracking-wide uppercase">Farming Verticals</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-smoke/40">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">What We Produce</span>
            </div>
            <h2 className="font-montserrat font-black text-navy" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>Agricultural Verticals</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <motion.div key={s} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-start gap-3 p-5 bg-white border border-smoke hover:border-gold/30 rounded-sm shadow-sm hover:shadow-md transition-all duration-300">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-charcoal/80 text-sm font-medium leading-snug">{s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-montserrat font-black text-white text-2xl mb-1">Interested in agricultural partnerships?</p>
            <p className="text-white/50 text-sm">Let's grow Africa's food future together.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-white font-bold text-[13px] tracking-widest uppercase hover:bg-gold-light transition-colors rounded-sm">
              Contact Us <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link to="/subsidiaries" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-bold text-[13px] tracking-widest uppercase hover:border-gold/50 hover:text-gold transition-colors rounded-sm">
              All Subsidiaries
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}