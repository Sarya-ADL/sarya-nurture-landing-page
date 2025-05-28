import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-sarya-purple/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark mb-2">Plans Made for Indian Families</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose a plan that fits your family—get all of Sarya’s features for one simple price.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Monthly Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-sarya-purple/10 flex flex-col items-center hover:shadow-2xl transition-all">
              <div className="mb-4 flex flex-col items-center">
                <span className="inline-block bg-sarya-purple/20 rounded-full px-4 py-2 text-sarya-purple-dark font-bold text-lg mb-2">Monthly</span>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-3xl font-bold text-sarya-purple-dark">₹899</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-4 text-center">Flexible month-to-month access</p>
                <Button className="w-full bg-sarya-purple hover:bg-sarya-purple-dark font-bold">Start 7-day Free Trial</Button>
              </div>
              <ul className="w-full mt-6 space-y-3">
                {["200+ Daily Living Activities", "5 Indian Languages", "Basic Progress Tracking", "Parent Community Access"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-sarya-purple-dark flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Yearly Plan (Highlighted) */}
            <div className="bg-gradient-to-br from-sarya-purple/30 to-sarya-peach/30 rounded-3xl p-1 shadow-2xl hover:scale-105 transition-transform">
              <div className="bg-white rounded-3xl p-8 h-full relative flex flex-col items-center overflow-hidden">
                <div className="absolute -right-10 top-6 bg-sarya-purple-dark text-white px-12 py-1 rotate-45 text-sm font-medium shadow-lg">
                  Best Value
                </div>
                <div className="mb-4 flex flex-col items-center">
                  <span className="inline-block bg-sarya-peach/30 rounded-full px-4 py-2 text-sarya-purple-dark font-bold text-lg mb-2 flex items-center gap-2">Yearly <Star className="h-5 w-5 fill-sarya-yellow stroke-sarya-yellow ml-1" /></span>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-3xl font-bold text-sarya-purple-dark">₹9,999</span>
                    <span className="text-gray-600">/year</span>
                  </div>
                  <p className="text-sarya-purple-dark font-medium mb-1">Save ₹799 compared to monthly</p>
                  <p className="text-gray-600 mb-4 text-center">Full access to premium features</p>
                  <Button className="w-full bg-sarya-purple-dark hover:bg-sarya-purple text-lg font-bold">Start 7-day Free Trial</Button>
                </div>
                <ul className="w-full mt-6 space-y-3">
                  {[
                    "Everything in monthly plan",
                    "Advanced AI personalization",
                    "Create custom routines", 
                    "Detailed progress analytics",
                    "Priority customer support",
                    "Early access to new features"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-sarya-purple-dark flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <div className="bg-sarya-purple/10 rounded-xl p-5 w-full max-w-xl">
              <p className="text-center text-sarya-purple-dark font-semibold text-lg">
                All plans include access for your whole family. Cancel anytime. No hidden fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
