import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Flame, HardHat, Ship, Wheat, Mountain, Factory, Heart, X } from 'lucide-react';

// Operational markers on Africa map (positions as % of SVG viewBox 0 0 800 900)
const markers = [
  {
    id: 1,
    label: 'Abuja HQ',
    country: 'Nigeria',
    sector: 'Headquarters',
    icon: Flame,
    x: 310,
    y: 410,
    color: '#C9A84C',
    operations: ['Group Headquarters', 'Petroleum Development', 'Logistics Hub', 'Foundation Office'],
    desc: 'Casa Chanan Group global headquarters. Central coordination hub for all subsidiary operations across Africa.',
  },
  {
    id: 2,
    label: 'Lagos Hub',
    country: 'Nigeria',
    sector: 'Energy & Logistics',
    icon: Ship,
    x: 295,
    y: 430,
    color: '#4FC3F7',
    operations: ['Maritime Logistics', 'Petroleum Operations', 'Port Management', 'Trading Hub'],
    desc: 'West Africa commercial hub handling maritime logistics, petroleum trading, and offshore operations.',
  },
  {
    id: 3,
    label: 'Niger Delta',
    country: 'Nigeria',
    sector: 'Petroleum',
    icon: Flame,
    x: 315,
    y: 445,
    color: '#FF8A65',
    operations: ['Oil Exploration', 'Upstream Production', 'Pipeline Maintenance', 'Community Development'],
    desc: 'Core petroleum operations zone. Upstream oil exploration, production and pipeline maintenance activities.',
  },
  {
    id: 4,
    label: 'Northern Farms',
    country: 'Nigeria',
    sector: 'Agriculture',
    icon: Wheat,
    x: 330,
    y: 375,
    color: '#81C784',
    operations: ['Commercial Crop Production', 'Mechanized Farming', 'Livestock', 'Irrigation'],
    desc: 'Large-scale mechanized agricultural operations covering commercial crop production, livestock, and aquaculture.',
  },
  {
    id: 5,
    label: 'Sahel Operations',
    country: 'West Africa',
    sector: 'Mining',
    icon: Mountain,
    x: 270,
    y: 355,
    color: '#FFD54F',
    operations: ['Gold Mining', 'Lithium Extraction', 'Mineral Processing', 'Export Logistics'],
    desc: 'Strategic mineral extraction across the Sahel region — gold, lithium, bauxite, and rare earth minerals.',
  },
  {
    id: 6,
    label: 'Coastal Infrastructure',
    country: 'West Africa',
    sector: 'Infrastructure',
    icon: HardHat,
    x: 260,
    y: 420,
    color: '#7986CB',
    operations: ['Shore Protection', 'Dredging', 'Port Development', 'Road Construction'],
    desc: 'Civil engineering and coastal infrastructure projects including dredging, shore protection, and port development.',
  },
  {
    id: 7,
    label: 'Manufacturing Zone',
    country: 'Nigeria',
    sector: 'Manufacturing',
    icon: Factory,
    x: 340,
    y: 410,
    color: '#BA68C8',
    operations: ['Food Processing', 'Pharmaceuticals', 'Cosmetics', 'Beverages'],
    desc: 'Consumer goods manufacturing — food products, pharmaceuticals, cosmetics, and non-alcoholic beverages.',
  },
  {
    id: 8,
    label: 'Foundation Centres',
    country: 'Pan-Africa',
    sector: 'Foundation',
    icon: Heart,
    x: 380,
    y: 490,
    color: '#F06292',
    operations: ['Education Programmes', 'Women Empowerment', 'Welfare Centres', 'Youth Development'],
    desc: 'Community empowerment and social development programs through Casa Chanan Foundation across multiple countries.',
  },
];

// Simplified Africa SVG path
const AFRICA_PATH = `M 400 60 L 440 55 L 480 65 L 510 80 L 540 95 L 560 120 L 575 150 L 585 185 L 590 220
  L 595 260 L 598 300 L 595 340 L 590 380 L 580 415 L 570 445 L 555 475 L 540 505 L 525 535
  L 505 560 L 480 580 L 455 595 L 430 605 L 408 615 L 390 618 L 372 612 L 350 600 L 328 582
  L 308 560 L 290 535 L 275 508 L 262 478 L 252 445 L 245 410 L 240 375 L 238 338 L 240 300
  L 245 265 L 252 232 L 262 202 L 275 175 L 292 150 L 312 128 L 335 108 L 360 88 L 382 68 Z
  M 440 55 L 455 50 L 475 52 L 495 60 L 505 72 L 498 80 L 480 78 L 460 68 Z
  M 560 120 L 575 110 L 590 115 L 598 130 L 590 140 L 572 132 Z`;

export default function AfricaMapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeMarker, setActiveMarker] = useState(null);
  const [filterSector, setFilterSector] = useState(null);

  const sectors = [...new Set(markers.map(m => m.sector))];
  const filteredMarkers = filterSector ? markers.filter(m => m.sector === filterSector) : markers;

  return (
    <section id="map" className="relative py-24 lg:py-32 bg-navy overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">Operational Footprint</span>
            </div>
            <h2 className="font-montserrat font-black text-white leading-none"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
              Africa-Wide<br />
              <span className="text-white/30">Operations.</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed lg:text-right">
            Click any marker to explore our sector operations. Filter by industry to see our footprint across the continent.
          </p>
        </motion.div>

        {/* Sector Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          <button
            onClick={() => setFilterSector(null)}
            className={`px-4 py-1.5 text-[11px] font-bold tracking-wider uppercase rounded-sm border transition-all ${
              !filterSector ? 'bg-gold text-navy border-gold' : 'bg-transparent text-white/40 border-white/10 hover:border-white/25 hover:text-white/70'
            }`}
          >
            All Sectors
          </button>
          {sectors.map(s => (
            <button
              key={s}
              onClick={() => setFilterSector(filterSector === s ? null : s)}
              className={`px-4 py-1.5 text-[11px] font-bold tracking-wider uppercase rounded-sm border transition-all ${
                filterSector === s ? 'bg-gold text-navy border-gold' : 'bg-transparent text-white/40 border-white/10 hover:border-white/25 hover:text-white/70'
              }`}
            >
              {s}
            </button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* SVG Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-2 relative bg-navy-mid/30 border border-white/8 rounded-sm overflow-hidden"
            style={{ minHeight: 420 }}
          >
            <svg
              viewBox="180 300 480 380"
              className="w-full h-full"
              style={{ minHeight: 380 }}
            >
              <defs>
                <radialGradient id="markerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(43,74%,49%)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(43,74%,49%)" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Africa shape */}
              <path
                d={AFRICA_PATH}
                fill="hsl(215,40%,18%)"
                stroke="hsl(43,74%,49%)"
                strokeWidth="1.2"
                strokeOpacity="0.25"
              />

              {/* Grid lines */}
              {[320, 360, 400, 440, 480].map(y => (
                <line key={y} x1="180" y1={y} x2="660" y2={y} stroke="white" strokeWidth="0.3" strokeOpacity="0.06" />
              ))}
              {[220, 280, 340, 400, 460, 520, 580, 640].map(x => (
                <line key={x} x1={x} y1="300" x2={x} y2="680" stroke="white" strokeWidth="0.3" strokeOpacity="0.06" />
              ))}

              {/* Markers */}
              {filteredMarkers.map((marker) => {
                const isActive = activeMarker?.id === marker.id;
                return (
                  <g
                    key={marker.id}
                    onClick={() => setActiveMarker(isActive ? null : marker)}
                    className="cursor-pointer"
                  >
                    {/* Pulse ring */}
                    <circle cx={marker.x} cy={marker.y} r={isActive ? 22 : 16} fill={marker.color} fillOpacity={isActive ? 0.15 : 0.08} className="transition-all duration-300" />
                    <circle cx={marker.x} cy={marker.y} r={isActive ? 14 : 10} fill={marker.color} fillOpacity={isActive ? 0.25 : 0.12} className="transition-all duration-300" />

                    {/* Main dot */}
                    <circle cx={marker.x} cy={marker.y} r={isActive ? 7 : 5.5} fill={marker.color} className="transition-all duration-300" />

                    {/* Label */}
                    <text
                      x={marker.x + 10}
                      y={marker.y - 8}
                      fontSize="8"
                      fill="white"
                      fillOpacity={isActive ? 1 : 0.6}
                      fontFamily="Montserrat, sans-serif"
                      fontWeight="700"
                      className="pointer-events-none transition-all duration-300"
                    >
                      {marker.label}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-navy/80 backdrop-blur-sm px-3 py-2 rounded-sm border border-white/8">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-gold" />
                <span className="text-white/50 text-[9px] tracking-wider uppercase">Operational Site</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full border border-gold/50 bg-gold/20" />
                <span className="text-white/50 text-[9px] tracking-wider uppercase">Active</span>
              </div>
            </div>
          </motion.div>

          {/* Detail Panel */}
          <div className="flex flex-col gap-3">
            <AnimatePresence mode="wait">
              {activeMarker ? (
                <motion.div
                  key={activeMarker.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-navy-mid/60 border border-white/10 rounded-sm p-6 relative"
                >
                  <button
                    onClick={() => setActiveMarker(null)}
                    className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-white/30 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: activeMarker.color }} />
                    <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: activeMarker.color }}>
                      {activeMarker.sector}
                    </span>
                  </div>

                  <h3 className="font-montserrat font-black text-white text-lg mb-1">{activeMarker.label}</h3>
                  <p className="text-white/40 text-xs mb-3">{activeMarker.country}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{activeMarker.desc}</p>

                  <div className="space-y-1.5">
                    {activeMarker.operations.map((op) => (
                      <div key={op} className="flex items-center gap-2 text-xs text-white/50">
                        <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                        {op}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-navy-mid/30 border border-white/6 rounded-sm p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-3">
                    <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
                  </div>
                  <p className="text-white/50 text-sm">Click any marker on the map to explore our operations in that region.</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Active Sites', value: '8+' },
                { label: 'Countries', value: '3+' },
                { label: 'Sectors', value: '7' },
                { label: 'Partners', value: '7' },
              ].map((s) => (
                <div key={s.label} className="bg-navy-mid/40 border border-white/6 rounded-sm p-4 text-center">
                  <p className="font-montserrat font-black text-gold text-xl leading-none mb-1">{s.value}</p>
                  <p className="text-white/35 text-[9px] tracking-widest uppercase">{s.label}</p>
                </div>
              ))}
            </div>

            {/* All markers list */}
            <div className="bg-navy-mid/30 border border-white/6 rounded-sm overflow-hidden">
              {filteredMarkers.map((marker, i) => (
                <button
                  key={marker.id}
                  onClick={() => setActiveMarker(activeMarker?.id === marker.id ? null : marker)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all border-b border-white/5 last:border-0 ${
                    activeMarker?.id === marker.id ? 'bg-white/6' : 'hover:bg-white/3'
                  }`}
                >
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: marker.color }} />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-semibold truncate">{marker.label}</p>
                    <p className="text-white/35 text-[10px]">{marker.sector}</p>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full border border-white/20 flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}