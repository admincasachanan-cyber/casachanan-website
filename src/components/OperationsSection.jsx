import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const operations = [
  {
    title: 'Oil & Gas Exploration',
    region: 'West Africa',
    desc: 'Full-spectrum petroleum operations from wellhead to terminal, across Nigeria and the Gulf of Guinea.',
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/1305a5be0_generated_image.png',
    stat: '$2B+',
    statLabel: 'Project Pipeline',
  },
  {
    title: 'Infrastructure & Dredging',
    region: 'Nigeria',
    desc: 'Large-scale shore protection, waterway development, and civil infrastructure across Nigeria\'s coastline.',
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/558c9f487_generated_image.png',
    stat: '500km+',
    statLabel: 'Coastline Projects',
  },
  {
    title: 'Mechanized Agriculture',
    region: 'West Africa',
    desc: 'Commercial-scale farming operations producing for local consumption and international export markets.',
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/cc483acdc_generated_image.png',
    stat: '10,000+',
    statLabel: 'Hectares Farmed',
  },
  {
    title: 'Mineral Extraction',
    region: 'West Africa',
    desc: 'Strategic mineral operations targeting high-value resources with environmentally responsible practices.',
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/ce2e5869a_generated_image.png',
    stat: '6+',
    statLabel: 'Mineral Types',
  },
];

export default function OperationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="operations" className="relative py-24 lg:py-36 bg-white overflow-hidden" ref={ref}>
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
            <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">Our Work</span>
          </div>
          <h2 className="font-montserrat font-black text-navy leading-none"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Operations &amp;<br />
            <span className="text-navy/25">Projects.</span>
          </h2>
        </motion.div>

        {/* Featured Card */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] lg:aspect-auto lg:h-[520px] rounded-sm overflow-hidden group cursor-pointer"
            onClick={() => setActiveIdx(activeIdx)}
          >
            <motion.img
              key={operations[activeIdx].image}
              src={operations[activeIdx].image}
              alt={operations[activeIdx].title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase">{operations[activeIdx].region}</span>
              <h3 className="font-montserrat font-black text-white text-2xl lg:text-3xl mt-1 mb-2">
                {operations[activeIdx].title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-sm">{operations[activeIdx].desc}</p>
              <div className="flex items-center gap-6">
                <div>
                  <p className="font-montserrat font-black text-gold text-2xl">{operations[activeIdx].stat}</p>
                  <p className="text-white/40 text-xs tracking-wide">{operations[activeIdx].statLabel}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right list */}
          <div className="flex flex-col gap-3">
            {operations.map((op, i) => (
              <motion.div
                key={op.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                onClick={() => setActiveIdx(i)}
                className={`group flex items-center gap-4 p-5 rounded-sm cursor-pointer transition-all duration-300 border ${
                  activeIdx === i
                    ? 'bg-navy border-gold/30 shadow-lg'
                    : 'bg-white border-smoke hover:border-navy/15 hover:shadow'
                }`}
              >
                <div className="relative w-16 h-16 rounded-sm overflow-hidden flex-shrink-0">
                  <img src={op.image} alt={op.title} className="w-full h-full object-cover" />
                  {activeIdx === i && <div className="absolute inset-0 bg-gold/20" />}
                </div>
                <div className="flex-1 min-w-0">
                  <span className={`text-[10px] font-bold tracking-[0.3em] uppercase ${activeIdx === i ? 'text-gold/80' : 'text-grey'}`}>
                    {op.region}
                  </span>
                  <h4 className={`font-montserrat font-bold text-sm mt-0.5 ${activeIdx === i ? 'text-white' : 'text-navy'}`}>
                    {op.title}
                  </h4>
                </div>
                <ArrowUpRight className={`w-4 h-4 flex-shrink-0 ${activeIdx === i ? 'text-gold' : 'text-grey/40'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}