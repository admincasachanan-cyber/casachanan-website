import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Phone, Mail, MapPin, ArrowUpRight, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { base44 } from '@/api/base44Client';

const offices = [
  { city: 'Abuja', flag: '🇳🇬', role: 'Global Headquarters', address: '1 Niagara Close, Maitama, FCT, Nigeria', primary: true },
  { city: 'Lagos', flag: '🇳🇬', role: 'West Africa Operations Hub', address: '13 Lugard Avenue, Ikoyi, Lagos', primary: false },
  { city: 'Sugarland, Texas', flag: '🇺🇸', role: 'International Office', address: '32 Miramar Heights Circle, Texas, USA', primary: false },
];

const interests = ['Energy & Petroleum', 'Logistics', 'Agriculture', 'Mining', 'Manufacturing', 'Foundation', 'Investment', 'Partnership', 'Other'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.functions.invoke('submitContactForm', form);
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />

      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-gold text-sm mb-8 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">Get In Touch</span>
          </div>
          <h1 className="font-montserrat font-black text-white leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Contact<br /><span className="text-gold font-light">Casa Chanan</span>
          </h1>
          <p className="text-white/60 max-w-xl leading-relaxed">
            Whether you're a partner, investor, or community stakeholder — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-montserrat font-black text-navy text-2xl mb-6">Our Offices</h2>
                {offices.map(o => (
                  <div key={o.city} className={`p-5 rounded-sm mb-4 ${o.primary ? 'bg-navy text-white' : 'bg-white border border-smoke'}`}>
                    {o.primary && <div className="w-full h-0.5 bg-gold rounded-t-sm -mt-5 mb-4 -mx-5 w-[calc(100%+2.5rem)]" />}
                    <div className="text-2xl mb-3">{o.flag}</div>
                    <span className={`text-[10px] font-bold tracking-[0.3em] uppercase ${o.primary ? 'text-gold/80' : 'text-gold'}`}>{o.role}</span>
                    <h3 className={`font-montserrat font-black text-lg mt-1 mb-2 ${o.primary ? 'text-white' : 'text-navy'}`}>{o.city}</h3>
                    <div className={`flex items-start gap-2 text-xs ${o.primary ? 'text-white/50' : 'text-grey'}`}>
                      <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />{o.address}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-white border border-smoke rounded-sm space-y-4">
                <h3 className="font-montserrat font-bold text-navy text-sm">Direct Contact</h3>
                <a href="tel:+13475794464" className="flex items-center gap-3 text-charcoal/70 hover:text-gold transition-colors text-sm">
                  <Phone className="w-4 h-4 text-gold" /> +1 347 579 4464
                </a>
                <a href="tel:+2347039339862" className="flex items-center gap-3 text-charcoal/70 hover:text-gold transition-colors text-sm">
                  <Phone className="w-4 h-4 text-gold" /> +234 703 933 9862
                </a>
                <a href="mailto:ccpdcl@gmail.com" className="flex items-center gap-3 text-charcoal/70 hover:text-gold transition-colors text-sm">
                  <Mail className="w-4 h-4 text-gold" /> ccpdcl@gmail.com
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20 bg-white border border-smoke rounded-sm"
                >
                  <CheckCircle className="w-14 h-14 text-gold mb-5" />
                  <h3 className="font-montserrat font-black text-navy text-2xl mb-3">Message Received</h3>
                  <p className="text-charcoal/60 max-w-sm text-sm leading-relaxed">
                    Thank you for reaching out. A member of our team will respond within 2 business days.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-smoke rounded-sm p-8 space-y-5">
                  <h2 className="font-montserrat font-black text-navy text-xl mb-2">Send an Enquiry</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold tracking-wider text-navy/50 uppercase mb-2">Full Name *</label>
                      <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 border border-smoke rounded-sm text-sm text-charcoal placeholder:text-grey/50 focus:outline-none focus:border-gold/40 transition-colors bg-cream/30"
                        placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold tracking-wider text-navy/50 uppercase mb-2">Email *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 border border-smoke rounded-sm text-sm text-charcoal placeholder:text-grey/50 focus:outline-none focus:border-gold/40 transition-colors bg-cream/30"
                        placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-navy/50 uppercase mb-2">Company / Organisation</label>
                    <input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 border border-smoke rounded-sm text-sm text-charcoal placeholder:text-grey/50 focus:outline-none focus:border-gold/40 transition-colors bg-cream/30"
                      placeholder="Your company name" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-navy/50 uppercase mb-2">Area of Interest</label>
                    <div className="flex flex-wrap gap-2">
                      {interests.map(interest => (
                        <button key={interest} type="button"
                          onClick={() => setForm({ ...form, interest })}
                          className={`px-3 py-1.5 text-[11px] font-semibold tracking-wide rounded-sm border transition-all ${form.interest === interest ? 'bg-gold text-white border-gold' : 'bg-transparent text-charcoal/50 border-smoke hover:border-gold/30'}`}>
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-navy/50 uppercase mb-2">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 border border-smoke rounded-sm text-sm text-charcoal placeholder:text-grey/50 focus:outline-none focus:border-gold/40 transition-colors bg-cream/30 resize-none"
                      placeholder="Tell us about your enquiry..." />
                  </div>
                  <button type="submit" disabled={loading}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-white font-bold text-[13px] tracking-widest uppercase hover:bg-gold-light transition-colors rounded-sm disabled:opacity-60">
                    {loading ? 'Sending...' : 'Send Message'}
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}