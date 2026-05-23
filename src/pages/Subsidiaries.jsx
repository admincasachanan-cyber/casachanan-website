import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fuel, Ship, Wheat, Mountain, Factory, ChevronLeft, ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const subsidiaries = [
  {
    id: 1,
    number: '01',
    icon: Fuel,
    href: '/subsidiaries/petroleum',
    name: 'Casa Chanan Petroleum Development Company Ltd',
    shortName: 'Petroleum Dev. Co.',
    tagline: "Powering Africa's Energy Future",
    desc: 'Full-spectrum oil & gas operations across West Africa — from exploration and upstream production to downstream distribution, pipeline maintenance, and maritime logistics.',
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/1305a5be0_generated_image.png',
    accent: 'from-orange-950/80',
    tags: ['Oil & Gas', 'Upstream', 'Maritime Logistics'],
  },
  {
    id: 2,
    number: '02',
    icon: Ship,
    href: '/subsidiaries/logistics',
    name: 'Casa Chanan Logistics Ltd',
    shortName: 'Logistics Ltd',
    tagline: 'Connecting Commerce. Building Infrastructure.',
    desc: 'Maritime services, dredging, shore protection, electrification, green energy, construction, and real estate development.',
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/3d4716eb6_generated_image.png',
    accent: 'from-blue-950/80',
    tags: ['Maritime', 'Construction', 'Green Energy'],
  },
  {
    id: 3,
    number: '03',
    icon: Wheat,
    href: '/subsidiaries/farms',
    name: 'Casa Chanan Farms Ltd',
    shortName: 'Farms Ltd',
    tagline: 'Feeding the Continent, Sustainably.',
    desc: 'Large-scale mechanized agriculture covering cash crops, aquaculture, livestock, dairy, and staple food production for domestic and export markets.',
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/cc483acdc_generated_image.png',
    accent: 'from-green-950/80',
    tags: ['Crop Production', 'Aquaculture', 'Export'],
  },
  {
    id: 4,
    number: '04',
    icon: Mountain,
    href: '/subsidiaries/mining',
    name: 'Casa Chanan Mining Ltd',
    shortName: 'Mining Ltd',
    tagline: "Unlocking Africa's Mineral Wealth, Responsibly.",
    desc: 'Mechanized mineral extraction of gold, diamond, lithium, bauxite, and more across West Africa with full environmental compliance.',
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/ce2e5869a_generated_image.png',
    accent: 'from-stone-950/80',
    tags: ['Gold & Diamond', 'Lithium', 'Responsible Mining'],
  },
  {
    id: 5,
    number: '05',
    icon: Factory,
    href: '/subsidiaries/products',
    name: 'Casa Chanan Products Ltd',
    shortName: 'Products Ltd',
    tagline: 'Manufacturing Quality. Delivering Value.',
    desc: 'Food production, pharmaceuticals, cosmetics, and non-alcoholic beverages for African and international consumer markets.',
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/58c799957_generated_image.png',
    accent: 'from-purple-950/80',
    tags: ['Food Production', 'Pharmaceuticals', 'FMCG'],
  },
];

export default function Subsidiaries() {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-navy overflow-hidden">
        <div className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
        <div className="absolute right-0 top-16 font-montserrat font-black text-[200px] leading-none text-white/[0.025] select-none pointer-events-none hidden xl:block pr-8">CCG</div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/35 hover:text-gold text-sm mb-10 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">Our Companies</span>
            </div>
            <h1 className="font-montserrat font-black text-white leading-[0.9] tracking-tight mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
              Five Subsidiaries.<br />
              <span className="text-gold font-light">One Vision.</span>
            </h1>
            <p className="text-white/55 max-w-2xl leading-relaxed">
              Each subsidiary operates with sectoral depth and institutional agility, united by shared infrastructure and a singular commitment to African excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsidiaries.map((sub, i) => (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={sub.href}
                  className="group flex flex-col overflow-hidden rounded-sm border border-smoke hover:border-gold/40 transition-all duration-500 shadow-sm hover:shadow-xl bg-white"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={sub.image}
                      alt={sub.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${sub.accent} to-transparent opacity-70`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    {/* Number + Icon */}
                    <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                      <span className="font-montserrat font-black text-white/20 text-5xl leading-none select-none">{sub.number}</span>
                      <div className="w-10 h-10 rounded-full border border-gold/40 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                        <sub.icon className="w-5 h-5 text-gold" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="w-6 h-px bg-gold mb-4" />
                    <h3 className="font-montserrat font-black text-navy text-base mb-1 group-hover:text-gold transition-colors duration-300 leading-snug">{sub.name}</h3>
                    <p className="text-gold/80 text-[11px] font-medium italic mb-3">{sub.tagline}</p>
                    <p className="text-charcoal/60 text-sm leading-relaxed mb-5 flex-1">{sub.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {sub.tags.map(t => (
                        <span key={t} className="px-2 py-0.5 text-[9px] font-semibold tracking-wider uppercase bg-gold/10 text-gold border border-gold/20 rounded-sm">{t}</span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-gold text-xs font-bold tracking-widest uppercase group-hover:gap-3 transition-all duration-300">
                      View Subsidiary <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-montserrat font-black text-white text-2xl">Interested in partnering with one of our subsidiaries?</p>
            <p className="text-white/70 text-sm mt-1">Reach out to discuss investment, partnership, or collaboration opportunities.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white font-bold text-[13px] tracking-widest uppercase hover:bg-navy-mid transition-colors rounded-sm flex-shrink-0">
            Make Enquiry <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}