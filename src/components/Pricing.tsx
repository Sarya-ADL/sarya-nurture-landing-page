
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark mb-4">Simple, Affordable Pricing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access all of Sarya's features for one transparent price designed to be accessible for Indian families.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-sarya-purple/30 to-sarya-peach/30 rounded-3xl p-1">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-sarya-purple-dark mb-2">₹899 <span className="text-lg font-normal text-gray-600">/month</span></h3>
                  <p className="text-gray-600 mb-6">Cancel anytime • 7-day free trial</p>
                </div>
                
                <div>
                  <Button className="bg-sarya-purple hover:bg-sarya-purple-dark text-lg px-8 py-6">Start Free Trial</Button>
                </div>
              </div>
              
              <div className="border-t border-gray-200 my-8"></div>
              
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sarya-purple-dark mt-0.5 flex-shrink-0" />
                  <p>Full access to 200+ activities for children with special needs</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sarya-purple-dark mt-0.5 flex-shrink-0" />
                  <p>Personalized routines and schedules</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sarya-purple-dark mt-0.5 flex-shrink-0" />
                  <p>Support for 5 Indian languages</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sarya-purple-dark mt-0.5 flex-shrink-0" />
                  <p>Activity tracking and progress reports</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sarya-purple-dark mt-0.5 flex-shrink-0" />
                  <p>Access to parent community and forums</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-sarya-purple-dark mt-0.5 flex-shrink-0" />
                  <p>Ongoing updates with new activities and features</p>
                </div>
              </div>
              
              <div className="bg-sarya-purple/10 rounded-xl p-4 mt-8">
                <p className="text-sm text-gray-700 text-center">
                  <strong>Why ₹899/month works for you:</strong> Equivalent to just ₹30 per day for comprehensive support tailored specifically for your child's unique needs with regular updates and culturally appropriate content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
