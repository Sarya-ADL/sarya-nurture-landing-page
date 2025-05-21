
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AppShowcase from '@/components/AppShowcase';
import Languages from '@/components/Languages';
import Testimonials from '@/components/Testimonials';
import WhySarya from '@/components/WhySarya';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AppShowcase />
        <Languages />
        <WhySarya />
        <Testimonials />
        <FAQ />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
