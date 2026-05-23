import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-cream font-montserrat">
      <Navbar />
      <section className="relative pt-32 pb-16 bg-navy">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-gold text-sm mb-8 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-[11px] font-bold tracking-[0.35em] uppercase">Legal</span>
          </div>
          <h1 className="font-montserrat font-black text-white text-4xl lg:text-5xl">Terms of Service</h1>
          <p className="text-white/40 text-sm mt-3">Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-8">
            {[
              { title: '1. Acceptance of Terms', body: 'By accessing and using the Casa Chanan Group website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.' },
              { title: '2. Use of Website', body: 'This website is provided for informational purposes about Casa Chanan Group and its subsidiaries. You may not use this website for any unlawful purpose or in any manner inconsistent with these Terms.' },
              { title: '3. Intellectual Property', body: 'All content on this website, including text, graphics, logos, images, and software, is the property of Casa Chanan Group and is protected by applicable intellectual property laws. You may not reproduce or distribute content without our written permission.' },
              { title: '4. Disclaimer of Warranties', body: 'This website is provided on an "as is" basis without warranties of any kind. Casa Chanan Group does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.' },
              { title: '5. Limitation of Liability', body: 'Casa Chanan Group shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or reliance on any information provided herein.' },
              { title: '6. Governing Law', body: 'These Terms of Service shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of Nigerian courts.' },
              { title: '7. Contact', body: 'For questions about these terms, contact us at ccpdcl@gmail.com or call +234 703 933 9862.' },
            ].map(s => (
              <div key={s.title}>
                <h2 className="font-montserrat font-black text-navy text-lg mb-3">{s.title}</h2>
                <p className="text-charcoal/65 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}