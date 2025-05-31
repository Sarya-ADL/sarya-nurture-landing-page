import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Zap } from 'lucide-react';

const PricingCard = ({ plan, price, period, isRecommended = false, savings = "" }) => {
  return (
    <div className={`${isRecommended ? 'bg-gradient-to-br from-sarya-purple/30 to-sarya-peach/30 p-1' : ''} rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300`}>
      <div className="bg-white rounded-3xl p-8 h-full relative flex flex-col">
        {isRecommended && (
          <div className="absolute -right-10 top-6 bg-sarya-purple-dark text-white px-12 py-1 rotate-45 text-sm font-medium shadow-lg">
            ⭐️ Recommended ⭐️
          </div>
        )}
        <div className="mb-6 flex flex-col items-center">
          <span className={`inline-block ${isRecommended ? 'bg-sarya-peach/30' : 'bg-sarya-purple/20'} rounded-full px-4 py-2 text-sarya-purple-dark font-bold text-lg mb-3`}>
            {plan}
          </span>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-4xl font-bold text-sarya-purple-dark">₹{price}</span>
            <span className="text-gray-600">/{period}</span>
          </div>
          {savings && (
            <p className="text-sarya-purple-dark font-medium mb-2">{savings}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-sarya-purple/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block bg-sarya-purple/10 text-sarya-purple-dark px-4 py-1 rounded-full text-sm font-medium mb-4">
            Flexible Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark mb-4">
            Choose the Perfect Plan for Your Family
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, transparent pricing that grows with your needs. Subscribe monthly or save more with our longer plans.
          </p>
        </div>

        {/* Subscription Benefits */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-sarya-purple/10">
            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <Check className="text-sarya-purple-dark" />
                <p className="text-gray-700">Pause or cancel your subscription anytime</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-sarya-purple-dark" />
                <p className="text-gray-700">Access to all current and future features</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-sarya-purple-dark" />
                <p className="text-gray-700">Full support in English, Hindi, and more languages</p>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="text-sarya-purple-dark" />
                <p className="text-gray-700">Early access to new features with yearly plans</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <PricingCard 
            plan="Monthly"
            price="899"
            period="month"
          />
          <PricingCard 
            plan="Quarterly"
            price="2,699"
            period="quarter"
            savings="Get 15 days free"
          />
          <PricingCard 
            plan="Half Yearly"
            price="4,500"
            period="6 months"
            savings="Save ₹894 and get 1 month free"
          />
          <PricingCard 
            plan="Yearly"
            price="9,000"
            period="year"
            isRecommended={true}
            savings="Save ₹1788 and get 2 month free"
          />
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-sarya-purple/10 px-6 py-3 rounded-full">
            <Zap className="text-sarya-purple-dark" />
            <p className="text-sarya-purple-dark font-medium">
              Yearly subscribers get priority access to new features and updates!
            </p>
          </div>
        </div>

        {/* FAQ Snippet */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-sarya-purple/10">
            <h3 className="text-xl font-bold text-sarya-purple-dark mb-4">Common Questions</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-sarya-purple-dark mb-2">When will I be charged?</p>
                <p className="text-gray-600">Your subscription starts immediately. You'll be billed at the beginning of each period based on your chosen plan.</p>
              </div>
              <div>
                <p className="font-medium text-sarya-purple-dark mb-2">Can I switch plans?</p>
                <p className="text-gray-600">Yes! You can upgrade, downgrade, or change your plan at any time. The new rate will be prorated from your next billing date.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
