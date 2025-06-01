import React, { useEffect } from 'react';
import { Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Legal = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash-based navigation
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen pt-20 pb-20 bg-gradient-to-br from-white via-sarya-purple/5 to-sarya-peach/5">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Privacy Policy */}
          <section id="privacy">
            <h1 className="text-3xl font-bold text-sarya-purple-dark mb-6">Privacy Policy</h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                At Sarya, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our app.
              </p>
              <h2 className="text-xl font-semibold text-sarya-purple-dark mt-6 mb-3">Information We Collect</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Basic profile information for account creation</li>
                <li>Usage data to improve our services</li>
                <li>Child's progress data to personalize learning experience</li>
              </ul>
              <h2 className="text-xl font-semibold text-sarya-purple-dark mt-6 mb-3">How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>To provide and improve our services</li>
                <li>To personalize learning experiences</li>
                <li>To communicate important updates</li>
              </ul>
            </div>
          </section>

          {/* Terms of Service */}
          <section id="terms">
            <h1 className="text-3xl font-bold text-sarya-purple-dark mb-6">Terms of Service</h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                By using Sarya, you agree to these terms. Our service is designed to support children's learning and development.
              </p>
              <h2 className="text-xl font-semibold text-sarya-purple-dark mt-6 mb-3">User Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate account information</li>
                <li>Maintain account security</li>
                <li>Use the service appropriately</li>
              </ul>
              <h2 className="text-xl font-semibold text-sarya-purple-dark mt-6 mb-3">Content Usage</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Content is for personal, non-commercial use</li>
                <li>Do not redistribute or modify content</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </div>
          </section>

          {/* Refund Policy */}
          <section id="refund">
            <h1 className="text-3xl font-bold text-sarya-purple-dark mb-6">Refund Policy</h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                We want you to be fully satisfied with your Sarya subscription. Here's our refund policy:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Refund requests can be submitted within 15 days of purchase</li>
                <li>Processing time may vary based on payment method</li>
                <li>Refunds will be issued to the original payment method</li>
              </ul>
              <div className="mt-6 p-4 bg-sarya-purple/10 rounded-lg">
                <p className="text-gray-700">
                  To request a refund or discuss any concerns, please email us at{' '}
                  <a 
                    href="mailto:support@thesarya.com" 
                    className="text-sarya-purple hover:text-sarya-purple-dark underline"
                  >
                    support@thesarya.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;
