import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AppShowcase from '@/components/AppShowcase';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';

const Index = () => {
  useEffect(() => {
    // Add intersection observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sarya-purple/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sarya-peach/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-sarya-green/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <main className="relative pt-20">
        {/* Hero Section */}
        <section id="hero" className="min-h-[calc(100vh-5rem)] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-sarya-purple/5 to-sarya-peach/5 pointer-events-none" />
          <div className="relative w-full animate-on-scroll">
            <Hero />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-sarya-purple/5" />
          <div className="relative animate-on-scroll">
            <Features />
          </div>
        </section>

        {/* App Showcase */}
        <section id="showcase" className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-sarya-peach/5 to-sarya-green/5" />
          <div className="relative animate-on-scroll">
            <AppShowcase />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-sarya-purple/5" />
          <div className="relative animate-on-scroll">
            <FAQ />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-sarya-peach/5 to-sarya-purple/5" />
          <div className="relative animate-on-scroll">
            <Pricing />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
