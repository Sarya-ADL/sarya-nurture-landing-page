import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Zap } from 'lucide-react';

const PricingCard = ({ plan, price, period, isRecommended = false, savings = "" }) => {
  return (
    <div className={
      `${isRecommended ? 'bg-gradient-to-br from-sarya-purple/30 to-sarya-peach/30 dark:from-sarya-purple-dark/60 dark:to-sarya-peach/30 p-1' : ''} 
      rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300`
    }>
      <div className="bg-white dark:bg-[#2a2535] dark:border dark:border-sarya-purple/20 rounded-3xl p-8 h-full relative flex flex-col transition-colors duration-300">
        {isRecommended && (
          <div className="absolute -right-10 top-6 bg-sarya-purple-dark text-white px-12 py-1 rotate-45 text-sm font-medium shadow-lg">
            ⭐️ Recommended ⭐️
          </div>
        )}
        <div className="mb-6 flex flex-col items-center">
          <span className={`inline-block ${isRecommended ? 'bg-sarya-peach/30 dark:bg-sarya-peach/40' : 'bg-sarya-purple/20 dark:bg-sarya-purple/40'} rounded-full px-4 py-2 text-sarya-purple-dark dark:text-white font-bold text-lg mb-3 transition-colors duration-300`}>
            {plan}
          </span>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-4xl font-bold text-sarya-purple-dark dark:text-white transition-colors duration-300">₹{price}</span>
            <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300"></span>
          </div>
          {savings && (
            <p className="text-sarya-purple-dark dark:text-sarya-peach font-medium mb-2 transition-colors duration-300">{savings}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-sarya-purple/10 dark:from-[#18132a] dark:to-[#2a2535] transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block bg-sarya-purple/10 dark:bg-sarya-purple/30 text-sarya-purple-dark dark:text-white px-4 py-1 rounded-full text-sm font-medium mb-4 transition-colors duration-300">
            Flexible Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark dark:text-white mb-4 transition-colors duration-300">
            Choose the Perfect Plan for Your Family
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Simple, transparent pricing that grows with your needs. Subscribe monthly or save more with our longer plans.
          </p>
        </div>

        {/* Subscription Benefits */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="bg-white dark:bg-[#23203a] rounded-2xl p-6 shadow-lg border border-sarya-purple/10 dark:border-sarya-purple/30 transition-colors duration-300">
            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <Check className="text-sarya-purple-dark dark:text-sarya-peach" />
                <p className="text-gray-700 dark:text-gray-200 transition-colors duration-300">Pause or cancel your subscription anytime</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-sarya-purple-dark dark:text-sarya-peach" />
                <p className="text-gray-700 dark:text-gray-200 transition-colors duration-300">Access to all current and future features</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-sarya-purple-dark dark:text-sarya-peach" />
                <p className="text-gray-700 dark:text-gray-200 transition-colors duration-300">Full support in English, Hindi, and more languages</p>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="text-sarya-purple-dark dark:text-sarya-peach" />
                <p className="text-gray-700 dark:text-gray-200 transition-colors duration-300">Early access to new features with yearly plans</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <PricingCard 
            plan="Monthly"
            price="899"
            period=""
          />
          <PricingCard 
            plan="Quarterly"
            price="2,699"
            period=""
            savings="Get 15 days free"
          />
          <PricingCard 
            plan="Half Yearly"
            price="4,500"
            period=""
            savings="Save ₹894 and get 1 month free"
          />
          <PricingCard 
            plan="Yearly"
            price="9,000"
            period=""
            isRecommended={true}
            savings="Save ₹1788 and get 2 month free"
          />
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-sarya-purple/10 dark:bg-sarya-purple/30 px-6 py-3 rounded-full transition-colors duration-300">
            <Zap className="text-sarya-purple-dark dark:text-sarya-peach" />
            <p className="text-sarya-purple-dark dark:text-white font-medium transition-colors duration-300">
              Yearly subscribers get priority access to new features and updates!
            </p>
          </div>
        </div>

        {/* FAQ Snippet */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-white dark:bg-[#23203a] rounded-2xl p-6 shadow-lg border border-sarya-purple/10 dark:border-sarya-purple/30 transition-colors duration-300">
            <h3 className="text-xl font-bold text-sarya-purple-dark dark:text-white mb-4 transition-colors duration-300">Common Questions</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-sarya-purple-dark dark:text-sarya-peach mb-2 transition-colors duration-300">When will I be charged?</p>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Your subscription starts immediately. You'll be billed at the beginning of each period based on your chosen plan.</p>
              </div>
              <div>
                <p className="font-medium text-sarya-purple-dark dark:text-sarya-peach mb-2 transition-colors duration-300">Can I switch plans?</p>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Yes! You can upgrade, downgrade, or change your plan at any time. The new rate will be prorated from your next billing date.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
