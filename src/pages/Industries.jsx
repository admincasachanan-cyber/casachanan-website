import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flame, HardHat, Ship, Wheat, Mountain, Factory, Heart, ChevronLeft, ArrowUpRight, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const industries = [
  { icon: Flame, num: '01', title: 'Energy & Petroleum', tag: 'Energy', tagColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30', desc: 'Full-spectrum oil & gas operations across West Africa — from exploration and upstream production to downstream distribution and pipeline maintenance.', capabilities: ['Upstream Exploration', 'Downstream Refining', 'Pipeline Services', 'Energy Logistics', 'Reservoir Engineering', 'Offshore Operations'], image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/1305a5be0_generated_image.png' },
  { icon: HardHat, num: '02', title: 'Infrastructure & Construction', tag: 'Infrastructure', tagColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30', desc: 'Civil engineering, dredging, shore protection, smart city development, electrification projects, and large-scale construction across the continent.', capabilities: ['Civil Engineering', 'Dredging & Shore Protection', 'Electrification', 'Smart City Development', 'Green Energy', 'Real Estate'], image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/558c9f487_generated_image.png' },
  { icon: Ship, num: '03', title: 'Logistics & Maritime', tag: 'Maritime', tagColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30', desc: 'Marine transport, supply chain management, and operational logistics for industrial, government, and commercial projects across West Africa.', capabilities: ['Marine Transport', 'Supply Chain Management', 'Port Operations', 'Fleet Management', 'Freight Forwarding', 'Customs Clearance'], image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/3d4716eb6_generated_image.png' },
  { icon: Wheat, num: '04', title: 'Agriculture & Food Systems', tag: 'Agriculture', tagColor: 'bg-green-500/20 text-green-300 border-green-500/30', desc: 'Large-scale mechanized agriculture covering commercial crop production, aquaculture, livestock, and dairy for domestic and international markets.', capabilities: ['Commercial Crop Production', 'Aquaculture', 'Livestock & Dairy', 'Export Markets', 'Mechanized Farming', 'Food Processing'], image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/cc483acdc_generated_image.png' },
  { icon: Mountain, num: '05', title: 'Mining & Natural Resources', tag: 'Mining', tagColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30', desc: 'Mechanized mineral extraction across West Africa. Focused on high-value strategic resources with environmentally responsible operations.', capabilities: ['Gold & Precious Metals', 'Lithium & Rare Earths', 'Bauxite & Iron Ore', 'Coltan', 'Mineral Processing', 'Environmental Compliance'], image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/ce2e5869a_generated_image.png' },
  { icon: Factory, num: '06', title: 'Manufacturing & Consumer Goods', tag: 'Manufacturing', tagColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30', desc: 'Manufacturing of food products, pharmaceuticals, cosmetics, and non-alcoholic beverages for local and global consumer markets.', capabilities: ['Food Manufacturing', 'Pharmaceutical Production', 'Cosmetics & Personal Care', 'Non-Alcoholic Beverages', 'Quality Assurance', 'Export Distribution'], image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/58c799957_generated_image.png' },
  { icon: Heart, num: '07', title: 'Social Development & Foundation', tag: 'Foundation', tagColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30', desc: 'Education, empowerment, rehabilitation, disability support, and community welfare programs through Casa Chanan Foundation.', capabilities: ['Girl-Child Education', 'Women Empowerment', 'Disability Support', 'Community Welfare', 'Rehabilitation Programs', 'Youth Development'], image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/5c8e1f2e3_generated_image.png' },
];

const projects = [
  {
    title: 'Niger Delta Petroleum Operations',
    region: 'South-South Nigeria',
    focus: 'Energy',
    focusColor: 'bg-orange-500/15 text-orange-400 border-orange-500/25',
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/1305a5be0_generated_image.png',
    stats: [{ label: 'Barrels/Day', value: 'Multi-field' }, { label: 'Pipeline KM', value: '200+' }, { label: 'Staff', value: '500+' }],
    desc: 'Core petroleum operations zone covering upstream oil exploration, production, pipeline maintenance, and maritime logistics support across the Niger Delta region.',
  },
  {
    title: 'West African Maritime Corridor',
    region: 'Gulf of Guinea',
    focus: 'Logistics',
    focusColor: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/25',
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/3d4716eb6_generated_image.png',
    stats: [{ label: 'Ports Served', value: '8+' }, { label: 'Vessels', value: 'Fleet' }, { label: 'Regions', value: '3' }],
    desc: 'Strategic maritime logistics corridor connecting West African ports. Dredging, shore protection, marine transport, and offshore logistics across the Gulf of Guinea.',
  },
  {
    title: 'Northern Nigeria Agricultural Belt',
    region: 'Northern Nigeria',
    focus: 'Agriculture',
    focusColor: 'bg-green-500/15 text-green-400 border-green-500/25',
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/cc483acdc_generated_image.png',
    stats: [{ label: 'Hectares', value: 'Large-scale' }, { label: 'Crop Types', value: '10+' }, { label: 'Communities', value: '20+' }],
    desc: 'Large-scale mechanized farming operations across Northern Nigeria. Commercial crop production, aquaculture, livestock, and dairy with export-grade quality standards.',
  },
  {
    title: 'West African Mineral Belt',
    region: 'West Africa',
    focus: 'Mining',
    focusColor: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25',
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/ce2e5869a_generated_image.png',
    stats: [{ label: 'Minerals', value: '6+' }, { label: 'Sites', value: 'Active' }, { label: 'Compliance', value: '100%' }],
    desc: 'Strategic mineral extraction operations across the West African mineral belt. Gold, lithium, bauxite, coltan, and iron ore with full environmental compliance.',
  },
];

export default function Industries() {
  const [active, setActive] = useState(null);
  const [tab, setTab] = useState('sectors');

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-36 pb-20 bg-navy overflow-hidden">
        <div className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
        <div className="absolute right-0 top-16 font-montserrat font-black text-[clamp(80px,15vw,200px)] leading-none text-white/[0.025] select-none pointer-events-none hidden xl:block pr-8">02</div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/35 hover:text-gold text-sm mb-8 sm:mb-10 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">What We Do</span>
            </div>
            <h1 className="font-montserrat font-black text-white leading-[0.9] tracking-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
              Seven Sectors.<br />
              <span className="text-gold font-light">One Conglomerate.</span>
            </h1>
            <p className="text-white/55 max-w-2xl leading-relaxed text-sm sm:text-base">
              Operating across the most critical industries driving economic growth, employment, and sustainable development across Africa.
            </p>
          </motion.div>
        </div>

        {/* Tab switcher */}
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 mt-12">
          <div className="flex gap-1 w-fit border border-white/10 rounded-sm p-1">
            <button
              onClick={() => setTab('sectors')}
              className={`px-5 py-2.5 text-[12px] font-bold tracking-widest uppercase rounded-sm transition-all duration-200 ${tab === 'sectors' ? 'bg-gold text-white' : 'text-white/50 hover:text-white'}`}
            >
              Sectors
            </button>
            <button
              onClick={() => setTab('operations')}
              className={`px-5 py-2.5 text-[12px] font-bold tracking-widest uppercase rounded-sm transition-all duration-200 ${tab === 'operations' ? 'bg-gold text-white' : 'text-white/50 hover:text-white'}`}
            >
              Active Operations
            </button>
          </div>
        </div>
      </section>

      {/* Sectors Tab */}
      {tab === 'sectors' && (
        <section className="py-16 sm:py-20 bg-smoke">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {industries.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  className="group relative overflow-hidden cursor-pointer rounded-sm"
                  style={{ minHeight: 280 }}
                >
                  <div className="absolute inset-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-navy/80 group-hover:bg-navy/65 transition-all duration-500" />
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="relative p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-sm bg-white/8 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                          <item.icon className="w-5 h-5 text-white/50 group-hover:text-gold transition-colors duration-300" />
                        </div>
                        <span className={`px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase border rounded-sm ${item.tagColor}`}>{item.tag}</span>
                      </div>
                      <span className="text-white/10 font-montserrat font-black text-4xl leading-none select-none">{item.num}</span>
                      <h3 className="font-montserrat font-bold text-white text-sm mt-2 mb-2 group-hover:text-gold-light transition-colors duration-300 leading-snug">{item.title}</h3>
                      <p className="text-white/45 text-xs leading-relaxed group-hover:text-white/65 transition-colors duration-300">{item.desc}</p>
                    </div>
                    <div className={`flex flex-wrap gap-1 mt-4 transition-all duration-300 ${active === i ? 'opacity-100' : 'opacity-0'}`}>
                      {item.capabilities.map(cap => (
                        <span key={cap} className="px-1.5 py-0.5 text-[9px] font-semibold tracking-wider uppercase bg-gold/15 text-gold border border-gold/20 rounded-sm">{cap}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Operations Tab */}
      {tab === 'operations' && (
        <section className="bg-smoke">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`grid lg:grid-cols-2 border-b border-charcoal/8`}
            >
              {/* Image */}
              <div className={`relative h-64 sm:h-80 lg:h-auto overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy/50" />
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-sm border border-white/10">
                  <MapPin className="w-3 h-3 text-gold flex-shrink-0" />
                  <span className="text-white/80 text-[11px] font-semibold">{project.region}</span>
                </div>
              </div>

              {/* Content */}
              <div className={`p-8 sm:p-10 lg:p-14 flex flex-col justify-center bg-navy ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className={`inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase border rounded-sm mb-5 w-fit ${project.focusColor}`}>
                  {project.focus}
                </span>
                <h2 className="font-montserrat font-black text-white text-xl sm:text-2xl lg:text-3xl mb-4 leading-tight">{project.title}</h2>
                <p className="text-white/55 text-sm leading-relaxed mb-8">{project.desc}</p>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  {project.stats.map(s => (
                    <div key={s.label}>
                      <p className="font-montserrat font-black text-gold text-lg sm:text-xl leading-none mb-1">{s.value}</p>
                      <p className="text-white/35 text-[10px] tracking-wider uppercase">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      )}

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gold">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-montserrat font-black text-white text-xl sm:text-2xl">Interested in our sector capabilities?</p>
            <p className="text-white/70 text-sm mt-1">Connect with our team to discuss opportunities.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-navy text-white font-bold text-[12px] sm:text-[13px] tracking-widest uppercase hover:bg-navy-mid transition-colors rounded-sm flex-shrink-0">
            Partner With Us <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}