import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
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
          <h1 className="font-montserrat font-black text-white text-4xl lg:text-5xl">Privacy Policy</h1>
          <p className="text-white/40 text-sm mt-3">Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl prose prose-sm text-charcoal/70 space-y-8">
            {[
              { title: '1. Information We Collect', body: 'We collect information you provide directly to us, including name, email address, company name, and any other information you choose to provide when filling out forms or contacting us. We also automatically collect certain information when you visit our website, including IP address, browser type, and pages visited.' },
              { title: '2. How We Use Your Information', body: 'We use the information we collect to respond to your enquiries, provide information about our services, communicate with you about our operations, improve our website and services, and comply with legal obligations. We do not sell or share your personal data with third parties for marketing purposes.' },
              { title: '3. Data Security', body: 'We implement appropriate technical and organisational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.' },
              { title: '4. Cookies', body: 'Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser. Please see our Cookie Policy for more details.' },
              { title: '5. Your Rights', body: 'You have the right to access, correct, or delete your personal information. You may also object to or restrict the processing of your data. To exercise these rights, please contact us at ccpdcl@gmail.com.' },
              { title: '6. Contact Us', body: 'If you have questions about this Privacy Policy, please contact us at: Casa Chanan Group, 1 Niagara Close, Maitama, Abuja, FCT Nigeria. Email: ccpdcl@gmail.com | Tel: +234 703 933 9862' },
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