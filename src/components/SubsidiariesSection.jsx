import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Fuel, Ship, Wheat, Mountain, Factory, ArrowUpRight, X } from 'lucide-react';

const subsidiaries = [
  {
    id: 1,
    icon: Fuel,
    href: '/subsidiaries/petroleum',
    number: '01',
    name: 'Casa Chanan Petroleum Development Company Limited',
    fullName: 'Casa Chanan Petroleum Development Company Limited',
    desc: 'Full-spectrum oil & gas operations across West Africa — from exploration and upstream production to downstream distribution, pipeline maintenance, and maritime logistics.',
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/1305a5be0_generated_image.png',
    services: ['Exploration & Production', 'Upstream Operations', 'Downstream Distribution', 'Pipeline Maintenance', 'Maritime Logistics', 'Reservoir Engineering'],
    color: 'from-amber-900/80 to-navy',
  },
  {
    id: 2,
    icon: Ship,
    href: '/subsidiaries/logistics',
    number: '02',
    name: 'Casa Chanan Logistics Ltd',
    fullName: 'Casa Chanan Logistics Ltd',
    desc: 'Infrastructure and logistics solutions including maritime operations, dredging, shore protection, electrification projects, green energy, construction, and real estate development.',
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/3d4716eb6_generated_image.png',
    services: ['Maritime Operations', 'Dredging & Shore Protection', 'Electrification Projects', 'Green Energy Solutions', 'Civil Construction', 'Real Estate'],
    color: 'from-blue-900/80 to-navy',
  },
  {
    id: 3,
    icon: Wheat,
    href: '/subsidiaries/farms',
    number: '03',
    name: 'Casa Chanan Farms Ltd',
    fullName: 'Casa Chanan Farms Ltd',
    desc: 'Large-scale mechanized agriculture covering commercial crop production, aquaculture, livestock, and dairy for both domestic consumption and international export.',
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/cc483acdc_generated_image.png',
    services: ['Commercial Crop Production', 'Aquaculture', 'Livestock & Dairy', 'Export Markets', 'Mechanized Farming', 'Food Processing'],
    color: 'from-green-900/80 to-navy',
  },
  {
    id: 4,
    icon: Mountain,
    href: '/subsidiaries/mining',
    number: '04',
    name: 'Casa Chanan Mining Ltd',
    fullName: 'Casa Chanan Mining Ltd',
    desc: 'Mechanized mineral extraction across West Africa. Focused on high-value strategic resources with environmentally responsible and sustainable operations.',
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/ce2e5869a_generated_image.png',
    services: ['Gold & Precious Metals', 'Lithium & Rare Earths', 'Bauxite & Iron Ore', 'Coltan', 'Mineral Processing', 'Environmental Compliance'],
    color: 'from-stone-800/80 to-navy',
  },
  {
    id: 5,
    icon: Factory,
    href: '/subsidiaries/products',
    number: '05',
    name: 'Casa Chanan Products Ltd',
    fullName: 'Casa Chanan Products Ltd',
    desc: 'Manufacturing of food products, pharmaceuticals, cosmetics, and non-alcoholic beverages for local and global consumer markets.',
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/58c799957_generated_image.png',
    services: ['Food Manufacturing', 'Pharmaceutical Production', 'Cosmetics & Personal Care', 'Non-Alcoholic Beverages', 'Quality Assurance', 'Export Distribution'],
    color: 'from-indigo-900/80 to-navy',
  },
];

function SubsidiaryCard({ sub, index, isInView }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden cursor-pointer bg-navy-mid rounded-sm"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(sub.href)}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={sub.image}
          alt={sub.name}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${sub.color} opacity-40`} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-mid/90 via-navy-mid/20 to-transparent" />

        {/* Number + Icon */}
        <div className="absolute top-0 left-0 right-0 p-5 flex items-start justify-between">
          <span className="font-montserrat font-black text-white/15 text-5xl leading-none select-none">
            {sub.number}
          </span>
          <div className="w-10 h-10 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm flex items-center justify-center">
            <sub.icon className="w-5 h-5 text-gold" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="w-6 h-0.5 bg-gold mb-3" />
        <h3 className="font-montserrat font-bold text-white text-lg mb-2 group-hover:text-gold-light transition-colors duration-300">
          {sub.name}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-5 line-clamp-2">
          {sub.desc}
        </p>

        {/* Service Tags — high contrast, always visible */}
        <div className="flex flex-wrap gap-2 mb-5">
          {sub.services.slice(0, 4).map((s) => (
            <span
              key={s}
              className="inline-block px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase bg-gold/20 text-gold-light border border-gold/25 rounded-sm"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-gold text-xs font-bold tracking-widest uppercase group-hover:gap-3 transition-all duration-300">
          View Subsidiary
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.div>
  );
}

export default function SubsidiariesSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="subsidiaries" className="relative py-24 lg:py-36 bg-navy overflow-hidden" ref={ref}>
      {/* Decorative vertical line */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-gold/15 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">Our Companies</span>
            </div>
            <h2 className="font-montserrat font-black text-white leading-none"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
              Five Subsidiaries.<br />
              <span className="text-gold font-light">One Vision.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 max-w-sm text-sm leading-relaxed lg:text-right"
          >
            Each subsidiary operates with sectoral depth and institutional agility, united by shared infrastructure and a singular commitment to African excellence.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {subsidiaries.map((sub, i) => (
            <SubsidiaryCard key={sub.id} sub={sub} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}