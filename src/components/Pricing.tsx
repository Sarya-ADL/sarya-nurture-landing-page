
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark mb-4">Simple, Affordable Plans</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access all of Sarya's features with plans designed to be accessible for Indian families.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Monthly Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-sarya-purple-dark mb-2">Monthly</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-3xl font-bold">₹899</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-6">Flexible month-to-month access</p>
                <Button className="w-full bg-sarya-purple hover:bg-sarya-purple-dark">Start 7-day Free Trial</Button>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-3">
                  {["200+ Daily Living Activities", "5 Indian Languages", "Basic Progress Tracking", "Parent Community Access"].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-sarya-purple-dark mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Yearly Plan (Highlighted) */}
            <div className="bg-gradient-to-br from-sarya-purple/30 to-sarya-peach/30 rounded-3xl p-1">
              <div className="bg-white rounded-3xl p-8 shadow-lg h-full relative overflow-hidden">
                <div className="absolute -right-10 top-6 bg-sarya-purple-dark text-white px-12 py-1 rotate-45 text-sm font-medium">
                  Best Value
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-sarya-purple-dark">Yearly</h3>
                    <Star className="h-5 w-5 fill-sarya-yellow stroke-sarya-yellow" />
                  </div>
                  
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-3xl font-bold">₹9,999</span>
                    <span className="text-gray-600">/year</span>
                  </div>
                  <p className="text-sarya-purple-dark font-medium mb-1">Save ₹799 compared to monthly</p>
                  <p className="text-gray-600 mb-6">Full access to premium features</p>
                  <Button className="w-full bg-sarya-purple-dark hover:bg-sarya-purple text-lg">Start 7-day Free Trial</Button>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="space-y-3">
                    {[
                      "Everything in monthly plan",
                      "Advanced AI personalization",
                      "Create custom routines", 
                      "Detailed progress analytics",
                      "Priority customer support",
                      "Early access to new features"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-sarya-purple-dark mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 font-medium">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-sarya-purple/10 rounded-xl p-5 mt-10">
            <p className="text-center text-gray-700">
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
