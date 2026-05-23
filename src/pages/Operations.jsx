import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, MapPin, ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const projects = [
  { title: 'Niger Delta Petroleum Operations', region: 'South-South Nigeria', focus: 'Energy', image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/1305a5be0_generated_image.png', stats: [{ label: 'Barrels/Day', value: 'Multi-field' }, { label: 'Pipeline KM', value: '200+' }, { label: 'Staff', value: '500+' }], desc: 'Core petroleum operations zone covering upstream oil exploration, production, pipeline maintenance, and maritime logistics support across the Niger Delta region.' },
  { title: 'West African Maritime Corridor', region: 'Gulf of Guinea', focus: 'Logistics', image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/3d4716eb6_generated_image.png', stats: [{ label: 'Ports Served', value: '8+' }, { label: 'Vessels', value: 'Fleet' }, { label: 'Regions', value: '3' }], desc: 'Strategic maritime logistics corridor connecting West African ports. Dredging, shore protection, marine transport, and offshore logistics across the Gulf of Guinea.' },
  { title: 'Northern Nigeria Agricultural Belt', region: 'Northern Nigeria', focus: 'Agriculture', image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/cc483acdc_generated_image.png', stats: [{ label: 'Hectares', value: 'Large-scale' }, { label: 'Crop Types', value: '10+' }, { label: 'Communities', value: '20+' }], desc: 'Large-scale mechanized farming operations across Northern Nigeria. Commercial crop production, aquaculture, livestock, and dairy with export-grade quality standards.' },
  { title: 'West African Mineral Belt', region: 'West Africa', focus: 'Mining', image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/ce2e5869a_generated_image.png', stats: [{ label: 'Minerals', value: '6+' }, { label: 'Sites', value: 'Active' }, { label: 'Compliance', value: '100%' }], desc: 'Strategic mineral extraction operations across the West African mineral belt. Gold, lithium, bauxite, coltan, and iron ore with full environmental compliance.' },
];

export default function Operations() {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-navy overflow-hidden">
        <div className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
        <div className="absolute right-0 top-16 font-montserrat font-black text-[200px] leading-none text-white/[0.025] select-none pointer-events-none hidden xl:block pr-8">04</div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/35 hover:text-gold text-sm mb-10 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">On the Ground</span>
            </div>
            <h1 className="font-montserrat font-black text-white leading-[0.9] tracking-tight mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
              Our Operations<br />
              <span className="text-gold font-light">Across Africa.</span>
            </h1>
            <p className="text-white/55 max-w-2xl leading-relaxed">
              Active projects and operational zones across Nigeria, West Africa and beyond — delivering results at institutional scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects — alternating full-bleed layout */}
      <section className="bg-smoke">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`grid lg:grid-cols-2 border-b border-white/6 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Image */}
            <div className={`relative h-72 lg:h-auto overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-navy/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-mid via-transparent to-transparent lg:hidden" />
              {/* Region badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-sm border border-white/10">
                <MapPin className="w-3 h-3 text-gold" />
                <span className="text-white/80 text-[11px] font-semibold">{project.region}</span>
              </div>
            </div>

            {/* Content */}
            <div className={`p-10 lg:p-14 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-gold/15 text-gold border border-gold/25 rounded-sm mb-6 w-fit">
                {project.focus}
              </span>
              <h2 className="font-montserrat font-black text-white text-2xl lg:text-3xl mb-4 leading-tight">{project.title}</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8">{project.desc}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/8">
                {project.stats.map(s => (
                  <div key={s.label}>
                    <p className="font-montserrat font-black text-gold text-xl leading-none mb-1">{s.value}</p>
                    <p className="text-white/30 text-[10px] tracking-wider uppercase">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-montserrat font-black text-white text-2xl">Want to collaborate on an active project?</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white font-bold text-[13px] tracking-widest uppercase hover:bg-navy-mid transition-colors rounded-sm">
            Get In Touch <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}