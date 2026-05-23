import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const images = [
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/e4563d571_WhatsAppImage2026-05-05at94536AM.jpg', caption: 'Apollo Asphalt Plant — Storage Tanks, Delta State' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/90f9cb68c_WhatsAppImage2026-05-05at94537AM1.jpg', caption: 'Industrial Bitumen Storage Tanks' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/1883463c9_WhatsAppImage2026-05-05at94537AM2.jpg', caption: 'Aggregate Crusher & Site Equipment' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/8fe134224_WhatsAppImage2026-05-05at94537AM3.jpg', caption: 'Rotary Drum Dryer — Close-Up Installation' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/466f2b4b6_WhatsAppImage2026-05-05at94537AM.jpg', caption: 'Drum Dryer & Apollo Plant — Full View' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/1821da959_WhatsAppImage2026-05-05at94538AM1.jpg', caption: 'Bitumen Boiler & Tank Farm Setup' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/593f881d5_WhatsAppImage2026-05-05at94538AM2.jpg', caption: 'Apollo Asphalt Tower — Full Structure' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/d48612e17_WhatsAppImage2026-05-05at94538AM3.jpg', caption: 'Large-Scale Bitumen Storage Array' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/2996c39e6_WhatsAppImage2026-05-05at94538AM4.jpg', caption: 'Rotary Drum Installation — Wide Angle' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/2120eeeec_WhatsAppImage2026-05-05at94538AM.jpg', caption: 'Apollo Plant & Drum Dryer Commissioning' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/3c29ce70e_WhatsAppImage2026-05-05at94539AM1.jpg', caption: 'Site Engineers Inspecting Conveyor Systems' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/329846e19_WhatsAppImage2026-05-05at94539AM2.jpg', caption: 'Tank Farm — Bitumen & Fuel Storage' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/4264dc5df_WhatsAppImage2026-05-05at94539AM3.jpg', caption: 'Full Plant Overview — Delta State Facility' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/09ae5f689_WhatsAppImage2026-05-05at94539AM4.jpg', caption: 'Apollo Asphalt Mixer — Commissioning Phase' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/71d6de1e7_WhatsAppImage2026-05-05at94539AM.jpg', caption: 'Drum Dryer Detail — Structural Frame' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/af40d4023_WhatsAppImage2026-05-05at94540AM1.jpg', caption: 'Site Personnel — Equipment Walkthrough' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/81f96a995_WhatsAppImage2026-05-05at94540AM2.jpg', caption: 'Aggregate Storage & Conveyor System' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/123813ab5_WhatsAppImage2026-05-05at94540AM3.jpg', caption: 'Asphalt Plant Night Commissioning' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/b183eab15_WhatsAppImage2026-05-05at94540AM.jpg', caption: 'Tank Installation — Concrete Plinths' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/d22525f45_WhatsAppImage2026-05-05at94541AM1.jpg', caption: 'Drum Dryer & Baghouse System' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/28e9f4064_WhatsAppImage2026-05-05at94541AM2.jpg', caption: 'Industrial Conveyor — Feed System' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/ea495fce8_WhatsAppImage2026-05-05at94541AM3.jpg', caption: 'Apollo Plant — Side View During Build' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/7609b6ee0_WhatsAppImage2026-05-05at94541AM.jpg', caption: 'Operations Team — Site Inspection' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/411fe5eca_WhatsAppImage2026-05-05at94542AM1.jpg', caption: 'Rotary Drum — Mechanical Detail' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/f0b5be4ac_WhatsAppImage2026-05-05at94542AM2.jpg', caption: 'Tank Farm — Elevated Storage Units' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/671d714f3_WhatsAppImage2026-05-05at94542AM3.jpg', caption: 'Full Aerial View — Asphalt Facility' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/1732a2631_WhatsAppImage2026-05-05at94542AM4.jpg', caption: 'Apollo Plant & Conveyor Complex' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/aca7c5926_WhatsAppImage2026-05-05at94542AM.jpg', caption: 'Bitumen Boiler Unit — Close-Up' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/c16fdec05_WhatsAppImage2026-05-05at94543AM1.jpg', caption: 'Site Overview — Infrastructure Development' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/d6ed22377_WhatsAppImage2026-05-05at94543AM2.jpg', caption: 'Drum Dryer — Commissioning Day' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/29f1a9385_WhatsAppImage2026-05-05at94543AM3.jpg', caption: 'Storage Tanks — Overhead View' },
  { src: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/f4c38ac83_WhatsAppImage2026-05-05at94543AM.jpg', caption: 'Complete Asphalt Plant — Full Facility' },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selected = selectedIndex !== null ? images[selectedIndex] : null;

  const goPrev = useCallback(() => setSelectedIndex((i) => (i - 1 + images.length) % images.length), []);
  const goNext = useCallback(() => setSelectedIndex((i) => (i + 1) % images.length), []);

  useEffect(() => {
    if (selected === null) return;
    const handler = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selected, goPrev, goNext]);

  return (
    <div className="min-h-screen bg-white font-montserrat antialiased">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-mid/50 to-navy" />
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-gold text-xs tracking-widest uppercase mb-8 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">Our Work</span>
          </div>
          <h1 className="font-montserrat font-black text-white leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Project <span className="text-gold font-light">Gallery</span>
          </h1>
          <p className="text-white/50 mt-4 max-w-lg text-sm leading-relaxed">
            A visual record of our infrastructure development, industrial installations, and operational sites across Africa.
          </p>
        </div>
      </section>

      {/* Gold divider */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
                onClick={() => setSelectedIndex(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-navy cursor-zoom-in"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/55 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-navy/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-[10px] font-medium leading-tight">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            {/* Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-gold/80 text-white flex items-center justify-center transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-gold/80 text-white flex items-center justify-center transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-10 right-0 text-white/60 hover:text-gold transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selected.src}
                alt={selected.caption}
                className="w-full rounded-sm shadow-2xl"
              />
              <p className="mt-3 text-white/60 text-sm text-center">
                {selected.caption} <span className="text-white/30 ml-2">{selectedIndex + 1} / {images.length}</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}