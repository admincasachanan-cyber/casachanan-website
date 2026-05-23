import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SubsidiariesSection from '../components/SubsidiariesSection';
import IndustriesSection from '../components/IndustriesSection';
import PartnersSection from '../components/PartnersSection';
import OperationsSection from '../components/OperationsSection';
import SustainabilitySection from '../components/SustainabilitySection';
import GlobalPresenceSection from '../components/GlobalPresenceSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-montserrat antialiased">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SubsidiariesSection />
      <IndustriesSection />
      <PartnersSection />
      <OperationsSection />
      <SustainabilitySection />
      <GlobalPresenceSection />
      <ContactSection />
      <Footer />
      <Chatbot />
    </div>
  );
}