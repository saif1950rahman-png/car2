/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { About } from './components/About';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { LegalModal, LegalModalType } from './components/LegalModal';
import { ServiceType, VehicleSize } from './types';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<ServiceType>('Full Valet');
  const [preselectedSize, setPreselectedSize] = useState<VehicleSize>('Medium');
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceType) => {
    setPreselectedService(service);
    scrollToContact();
  };

  const handleQuoteClick = (size?: VehicleSize) => {
    if (size) setPreselectedSize(size);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#080909] text-[#F5F3EE] selection:bg-[#C9A66B]/30 selection:text-[#F5F3EE] flex flex-col font-sans">
      {/* Sticky Navigation */}
      <Navbar onBookClick={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Cinematic Luxury Hero */}
        <Hero
          onBookClick={scrollToContact}
          onExploreServices={scrollToServices}
        />

        {/* 4 Value Propositions Trust Strip */}
        <TrustStrip />

        {/* Editorial Split About Section */}
        <About onDiscoverServices={scrollToServices} />

        {/* 4 Core Services Showcase */}
        <Services onSelectService={handleSelectService} />

        {/* Straightforward Pricing & Vehicle Size Selector */}
        <Pricing onQuoteClick={handleQuoteClick} />

        {/* Why Choose Us 2-Column Section */}
        <WhyChooseUs />

        {/* 4-Step Process Section */}
        <Process />

        {/* Interactive Before & After 50/50 Transformations */}
        <BeforeAfterSection onEnquire={scrollToContact} />

        {/* Authentic Detailing Portfolio Gallery & Lightbox */}
        <Gallery />

        {/* Transparent Customer Feedback Placeholder */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Primary Booking Enquiry Form & Verified Confirmation */}
        <BookingSection
          preselectedService={preselectedService}
          preselectedSize={preselectedSize}
        />
      </main>

      {/* Luxury Dark Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onSelectService={handleSelectService}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onQuoteClick={scrollToContact} />

      {/* Legal Modals (Privacy, Terms, Cookies) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
