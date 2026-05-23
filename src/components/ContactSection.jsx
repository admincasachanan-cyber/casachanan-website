import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const interests = [
  'Energy & Petroleum', 'Logistics & Maritime', 'Agriculture', 
  'Mining', 'Manufacturing', 'Investment Partnership', 'CSR / Foundation', 'Other'
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', company: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.functions.invoke('submitContactForm', formData);
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', interest: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-36 bg-navy overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Diagonal accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-navy-mid/40 -skew-x-12 origin-top-right" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 xl:gap-16">

          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">Get In Touch</span>
            </div>
            <h2 className="font-montserrat font-black text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              Partner With<br />Casa Chanan Group
            </h2>
            <p className="text-white/45 text-sm leading-relaxed mb-10">
              We deliver across industries, scale across regions, and execute with precision. Tell us about your project or partnership interest.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, label: 'Phone', lines: ['+1 347 579 4464', '+234 703 933 9862'] },
                { icon: Mail, label: 'Email', lines: ['ccpdcl@gmail.com', 'casachananlog@hotmail.com'] },
                { icon: MapPin, label: 'Headquarters', lines: ['1 Niagara Close, Maitama', 'Abuja, FCT Nigeria'] },
              ].map(({ icon: Icon, label, lines }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] tracking-widest uppercase font-semibold mb-0.5">{label}</p>
                    {lines.map(l => <p key={l} className="text-white/70 text-sm">{l}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-white/4 border border-white/10 rounded-sm p-8 lg:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-gold mb-4" />
                  <h3 className="font-montserrat font-bold text-white text-xl mb-2">Message Received</h3>
                  <p className="text-white/50 text-sm">Our team will respond within 24 business hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { key: 'name', label: 'Full Name', placeholder: 'Your name', type: 'text' },
                      { key: 'email', label: 'Email Address', placeholder: 'your@company.com', type: 'email' },
                    ].map(f => (
                      <div key={f.key}>
                        <label className="block text-white/50 text-[11px] font-bold tracking-widest uppercase mb-2">{f.label}</label>
                        <input
                          type={f.type}
                          value={formData[f.key]}
                          onChange={e => setFormData({ ...formData, [f.key]: e.target.value })}
                          placeholder={f.placeholder}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-gold/50 transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-white/50 text-[11px] font-bold tracking-widest uppercase mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company or organisation"
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-[11px] font-bold tracking-widest uppercase mb-2">Area of Interest</label>
                    <div className="flex flex-wrap gap-2">
                      {interests.map(opt => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setFormData({ ...formData, interest: opt })}
                          className={`px-3 py-1.5 text-[11px] font-semibold tracking-wide rounded-sm border transition-all ${
                            formData.interest === opt
                              ? 'bg-gold text-white border-gold'
                              : 'bg-transparent text-white/40 border-white/10 hover:border-white/25 hover:text-white/70'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/50 text-[11px] font-bold tracking-widest uppercase mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, investment opportunity, or enquiry..."
                      rows={4}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-gold text-white font-bold text-[13px] tracking-widest uppercase hover:bg-gold-light transition-colors duration-200 rounded-sm disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-navy/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}