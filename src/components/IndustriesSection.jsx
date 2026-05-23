import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Flame, HardHat, Ship, Wheat, Mountain, Factory, Heart, ArrowUpRight } from 'lucide-react';

const industries = [
  {
    icon: Flame,
    num: '01',
    title: 'Energy & Petroleum',
    tag: 'Energy',
    tagColor: 'bg-orange-100 text-orange-700 border-orange-200',
    desc: 'Exploration, refining, upstream/downstream operations, pipeline services, and energy logistics across West Africa.',
    capabilities: ['Upstream Production', 'Downstream Refining', 'Pipeline Services', 'Energy Logistics'],
  },
  {
    icon: HardHat,
    num: '02',
    title: 'Infrastructure & Construction',
    tag: 'Infrastructure',
    tagColor: 'bg-blue-100 text-blue-700 border-blue-200',
    desc: 'Civil engineering, dredging, shore protection, smart city development, and large-scale construction projects.',
    capabilities: ['Civil Engineering', 'Dredging', 'Shore Protection', 'Smart Cities'],
  },
  {
    icon: Ship,
    num: '03',
    title: 'Logistics & Maritime',
    tag: 'Maritime',
    tagColor: 'bg-cyan-100 text-cyan-700 border-cyan-200',
    desc: 'Marine transport, supply chain management, and operational logistics for industrial and government projects.',
    capabilities: ['Marine Transport', 'Supply Chain', 'Port Operations', 'Fleet Management'],
  },
  {
    icon: Wheat,
    num: '04',
    title: 'Agriculture & Food Systems',
    tag: 'Agriculture',
    tagColor: 'bg-green-100 text-green-700 border-green-200',
    desc: 'Commercial farming, aquaculture, livestock, dairy, and large-scale food production for domestic and export markets.',
    capabilities: ['Commercial Farming', 'Aquaculture', 'Livestock & Dairy', 'Food Export'],
  },
  {
    icon: Mountain,
    num: '05',
    title: 'Mining & Natural Resources',
    tag: 'Mining',
    tagColor: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    desc: 'Extraction of gold, lithium, bauxite, coltan, iron ore, and other high-value strategic minerals.',
    capabilities: ['Gold & Precious Metals', 'Lithium & Rare Earths', 'Bauxite & Iron Ore', 'Mineral Processing'],
  },
  {
    icon: Factory,
    num: '06',
    title: 'Manufacturing & Consumer Goods',
    tag: 'Manufacturing',
    tagColor: 'bg-purple-100 text-purple-700 border-purple-200',
    desc: 'Production of food products, pharmaceuticals, cosmetics, and non-alcoholic beverages.',
    capabilities: ['Food Manufacturing', 'Pharmaceuticals', 'Cosmetics', 'Beverages'],
  },
  {
    icon: Heart,
    num: '07',
    title: 'Social Development & Foundation',
    tag: 'Foundation',
    tagColor: 'bg-rose-100 text-rose-700 border-rose-200',
    desc: 'Education, empowerment, rehabilitation, disability support, and community welfare programs across Africa.',
    capabilities: ['Girl-Child Education', 'Women Empowerment', 'Disability Support', 'Community Welfare'],
  },
];

function IndustryCard({ item, index, isInView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col p-7 bg-white border border-smoke rounded-sm cursor-pointer overflow-hidden transition-all duration-400 hover:border-gold/40 hover:shadow-xl"
    >
      {/* Animated top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gold transition-all duration-500"
        style={{ transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left' }}
      />

      {/* Subtle glow on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* Header row */}
      <div className="relative flex items-start justify-between mb-5">
        <div className={`w-12 h-12 rounded-sm flex items-center justify-center transition-all duration-300 ${hovered ? 'bg-gold/15' : 'bg-smoke'}`}>
          <item.icon className={`w-5 h-5 transition-colors duration-300 ${hovered ? 'text-gold' : 'text-grey'}`} />
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase border rounded-sm ${item.tagColor}`}>
            {item.tag}
          </span>
          <span className="font-montserrat font-black text-navy/8 text-3xl leading-none select-none group-hover:text-navy/15 transition-colors">
            {item.num}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className={`font-montserrat font-bold text-base mb-2.5 transition-colors duration-300 ${hovered ? 'text-gold' : 'text-navy'}`}>
        {item.title}
      </h3>

      {/* Description */}
      <p className={`text-sm leading-relaxed mb-5 transition-colors duration-300 flex-1 ${hovered ? 'text-charcoal/70' : 'text-grey'}`}>
        {item.desc}
      </p>

      {/* Capability chips — appear on hover */}
      <div className={`flex flex-wrap gap-1.5 mb-4 transition-all duration-400 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        {item.capabilities.map((cap) => (
          <span
            key={cap}
            className="px-2 py-0.5 text-[9px] font-semibold tracking-wider uppercase bg-gold/10 text-gold border border-gold/25 rounded-sm"
          >
            {cap}
          </span>
        ))}
      </div>

      {/* Footer CTA */}
      <div className={`flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${hovered ? 'text-gold gap-2.5' : 'text-gold/50'}`}>
        Explore Sector <ArrowUpRight className="w-3 h-3" />
      </div>
    </motion.div>
  );
}

export default function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="industries" className="relative py-24 lg:py-32 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">What We Do</span>
            </div>
            <h2 className="font-montserrat font-black text-navy leading-none"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
              Seven Sectors.<br />
              <span className="text-navy/30">One Conglomerate.</span>
            </h2>
          </div>
          <p className="text-grey max-w-sm text-sm leading-relaxed lg:text-right">
            Operating across the most critical industries driving economic growth, employment, and sustainable development across Africa.
          </p>
        </motion.div>

        {/* 7-card grid: 3 + 3 + 1 centered */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.slice(0, 6).map((item, i) => (
            <IndustryCard key={item.title} item={item} index={i} isInView={isInView} />
          ))}
        </div>
        {/* 7th card — centered */}
        <div className="mt-4 flex justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <IndustryCard item={industries[6]} index={6} isInView={isInView} />
          </div>
        </div>
      </div>
    </section>
  );
}