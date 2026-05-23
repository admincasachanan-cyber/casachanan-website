import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const cols = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Subsidiaries', to: '/subsidiaries' },
      { label: 'Industries', to: '/industries' },
      { label: 'Industries & Operations', to: '/industries' },
    ],
  },
  {
    title: 'Sectors',
    links: [
      { label: 'Energy & Petroleum', to: '/subsidiaries/petroleum' },
      { label: 'Logistics & Maritime', to: '/subsidiaries/logistics' },
      { label: 'Agriculture & Farms', to: '/subsidiaries/farms' },
      { label: 'Mining & Resources', to: '/subsidiaries/mining' },
      { label: 'Products & Manufacturing', to: '/subsidiaries/products' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact Us', to: '/contact' },
      { label: 'Partner With Us', to: '/contact' },
      { label: 'Sustainability', to: '/sustainability' },
      { label: 'Gallery', to: '/gallery' },
    ],
  },
];

const socialLinks = [
  { Icon: Linkedin, label: 'LinkedIn', href: '#' },
  { Icon: Twitter, label: 'Twitter / X', href: '#' },
  { Icon: Facebook, label: 'Facebook', href: '#' },
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#060d18] border-t border-white/8">
      {/* Top CTA Band */}
      <div className="border-b border-white/8">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-montserrat font-black text-white text-xl">Ready to build Africa's future together?</p>
            <p className="text-white/55 text-sm mt-1">Join our network of partners, investors, and collaborators.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-white font-bold text-[13px] tracking-widest uppercase hover:bg-gold-light transition-colors rounded-sm flex-shrink-0"
          >
            Start a Conversation <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <img
                src="https://media.base44.com/images/public/69f469a2bdfa4bb2e0735f89/414e16eb6_Asset1.png"
                alt="Casa Chanan Group"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs mb-6">
              A pan-African diversified conglomerate delivering institutional excellence across energy, infrastructure, agriculture, and manufacturing.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-sm border border-white/15 flex items-center justify-center text-white/50 hover:border-gold/50 hover:text-gold hover:bg-gold/8 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-white/70 font-montserrat font-bold text-[10px] tracking-[0.35em] uppercase mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-white/55 hover:text-gold transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Casa Chanan Group. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="text-white/40 hover:text-gold/70 transition-colors text-xs">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/40 hover:text-gold/70 transition-colors text-xs">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-white/40 hover:text-gold/70 transition-colors text-xs">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}