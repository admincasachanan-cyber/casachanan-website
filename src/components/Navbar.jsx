import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'About', to: '/about' },
  {
    label: 'Subsidiaries',
    to: '/subsidiaries',
    children: [
      { label: 'Petroleum Development Co.', to: '/subsidiaries/petroleum' },
      { label: 'Logistics Ltd', to: '/subsidiaries/logistics' },
      { label: 'Farms Ltd', to: '/subsidiaries/farms' },
      { label: 'Mining Ltd', to: '/subsidiaries/mining' },
      { label: 'Products Ltd', to: '/subsidiaries/products' },
    ],
  },
  { label: 'Industries', to: '/industries' },
  { label: 'Sustainability', to: '/sustainability' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy border-b border-white/8'
          : 'bg-navy/85 border-b border-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-[72px] lg:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/414e16eb6_Asset1.png"
              alt="Casa Chanan Group"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.to}
                  className="group flex items-center gap-1 px-3.5 py-2.5 text-[13px] font-medium tracking-wide text-white/65 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2 w-60 bg-navy/98 backdrop-blur-2xl border border-white/10 rounded-lg shadow-2xl overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center justify-between px-5 py-3 text-[13px] text-white/55 hover:text-gold hover:bg-white/4 transition-all border-b border-white/5 last:border-0"
                        >
                          {child.label}
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-white text-[13px] font-bold tracking-wide hover:bg-gold-light transition-colors duration-200 rounded-sm"
            >
              Partner With Us
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-navy border-t border-white/8"
          >
            <div className="px-6 pt-4 pb-8 space-y-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3.5 text-sm text-white/65 hover:text-gold border-b border-white/5 transition-colors"
                >
                  {link.label}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 mt-6 py-3.5 bg-gold text-white font-bold text-sm rounded-sm"
              >
                Partner With Us <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}