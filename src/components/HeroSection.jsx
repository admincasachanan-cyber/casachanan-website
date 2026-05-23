import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

const slides = [
  {
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/2120eeeec_WhatsAppImage2026-05-05at94538AM.jpg',
    label: 'Infrastructure & Construction',
    headline: ['Powering', 'Industries.'],
    accent: 'Building Nations.',
  },
  {
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/671d714f3_WhatsAppImage2026-05-05at94542AM3.jpg',
    label: 'Energy & Petroleum',
    headline: ['Engineering', "Africa's"],
    accent: 'Future.',
  },
  {
    image: 'https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/f4c38ac83_WhatsAppImage2026-05-05at94543AM.jpg',
    label: 'Operations On Ground',
    headline: ['Feeding a', 'Growing'],
    accent: 'Continent.',
  },
];

const stats = [
  { value: 6, suffix: '', label: 'Subsidiaries' },
  { value: 7, suffix: '+', label: 'Sectors' },
  { value: 3, suffix: '', label: 'Countries' },
  { value: 20, suffix: '+', label: 'Years Legacy' },
];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const triggered = useRef(false);

  useEffect(() => {
    if (triggered.current) return;
    triggered.current = true;
    let current = 0;
    const increment = Math.ceil(target / 50);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 35);
    return () => clearInterval(timer);
  }, [target]);

  return <>{count}{suffix}</>;
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 700], [0, 100]);
  const contentOpacity = useTransform(scrollY, [0, 350], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex flex-col bg-navy overflow-hidden"
      style={{ minHeight: '100dvh' }}
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: parallaxY }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current].image}
            alt={slides[current].label}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="w-full h-full object-cover absolute inset-0"
          />
        </AnimatePresence>
      </motion.div>

      {/* Consistent overlay — dark enough for text clarity, light enough to see image */}
      <div className="absolute inset-0 bg-navy/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
      <div className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-transparent via-gold/50 to-transparent" />

      {/* Main content — padded top for navbar (80px), flex-1 to fill space */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 flex-1 flex flex-col justify-center pt-24 pb-4"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 w-full">

          {/* Slide indicator + label */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`label-${current}`}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-4 mb-6 lg:mb-8"
            >
              <div className="flex items-center gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-500 rounded-full ${
                      i === current ? 'w-8 h-[5px] bg-gold' : 'w-2 h-[5px] bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gold/90 text-[11px] font-semibold tracking-[0.3em] uppercase hidden sm:block">
                {slides[current].label}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Headline */}
          <div className="mb-5 lg:mb-7">
            <AnimatePresence mode="wait">
              <motion.div key={`headline-${current}`}>
                {slides[current].headline.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <span
                      className="block font-montserrat font-black text-white tracking-tight leading-[0.88]"
                      style={{ fontSize: 'clamp(2.6rem, 7vw, 6.5rem)' }}
                    >
                      {line}
                    </span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.65, delay: slides[current].headline.length * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <span
                    className="block font-montserrat font-light tracking-tight leading-[0.88] text-gold"
                    style={{ fontSize: 'clamp(2.6rem, 7vw, 6.5rem)' }}
                  >
                    {slides[current].accent}
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: mounted ? 0.55 : 0, y: mounted ? 0 : 16 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-white font-light leading-relaxed mb-7 lg:mb-9 max-w-lg"
            style={{ fontSize: 'clamp(0.88rem, 1.6vw, 1.05rem)' }}
          >
            A pan-African conglomerate delivering excellence across energy, infrastructure, agriculture, mining, manufacturing, and social development.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 16 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
          >
            <a
              href="#subsidiaries"
              className="group inline-flex items-center gap-3 px-6 py-3.5 bg-gold text-white font-bold text-[12px] tracking-widest uppercase hover:bg-gold-light transition-all duration-300 rounded-sm"
            >
              Explore Our Companies
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-white/70 font-semibold text-[12px] tracking-widest uppercase hover:text-gold transition-colors duration-300"
            >
              Partner With Us
              <span className="w-8 h-px bg-white/30 group-hover:w-12 group-hover:bg-gold transition-all duration-300" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Strip — fixed at bottom, never overlaps content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative z-10 w-full mt-auto"
      >
        <div className="border-t border-white/10 bg-navy/50 backdrop-blur-md">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-4 sm:py-6 text-center ${i < 3 ? 'border-r border-white/10' : ''}`}
                >
                  <p className="font-montserrat font-black text-gold leading-none mb-1"
                    style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
                    {mounted ? <AnimatedCounter target={stat.value} suffix={stat.suffix} /> : `0${stat.suffix}`}
                  </p>
                  <p className="text-white/50 text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue — sits above stats, aligned right */}
      <motion.a
        href="#about"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute right-6 sm:right-10 lg:right-14 bottom-28 sm:bottom-32 z-20 flex flex-col items-center gap-1.5 text-white/30 hover:text-gold transition-colors"
      >
        <span className="text-[8px] tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <ChevronDown className="w-4 h-4 mt-1" />
      </motion.a>
    </section>
  );
}