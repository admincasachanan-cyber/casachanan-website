import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CookiePolicy() {
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
          <h1 className="font-montserrat font-black text-white text-4xl lg:text-5xl">Cookie Policy</h1>
          <p className="text-white/40 text-sm mt-3">Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-8">
            {[
              { title: 'What Are Cookies?', body: 'Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience by remembering your preferences and understanding how you use our site.' },
              { title: 'How We Use Cookies', body: 'We use cookies for essential website functionality, analytics to understand site usage patterns, and to remember your preferences across sessions. We do not use cookies for advertising or tracking across other websites.' },
              { title: 'Types of Cookies We Use', body: 'Essential cookies: Required for the website to function properly. Analytics cookies: Help us understand how visitors interact with our site. Preference cookies: Remember your settings and preferences.' },
              { title: 'Managing Cookies', body: 'You can control and delete cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website. Each browser has different settings — consult your browser\'s help documentation for instructions.' },
              { title: 'Third-Party Cookies', body: 'Our website may include content or links from third-party services that may also set cookies. We do not control these cookies and they are subject to the third parties\' own cookie policies.' },
              { title: 'Contact Us', body: 'If you have questions about our use of cookies, please contact us at ccpdcl@gmail.com.' },
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