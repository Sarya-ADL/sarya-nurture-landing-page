
import React from 'react';
import { Card } from "@/components/ui/card";

const AppShowcase = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark mb-4">How Sarya Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a closer look at how Sarya helps parents create structured routines and learning experiences for children with special needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-8 items-center">
          <Card className="bg-sarya-peach/20 rounded-3xl p-8 border-none shadow-lg">
            <h3 className="text-2xl font-bold text-sarya-purple-dark mb-4">Personalized Routines</h3>
            <p className="text-gray-700 mb-6">
              Create customized daily routines for brushing teeth, bathing, eating, and other activities with visual supports.
            </p>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/6e05ac42-50f6-4207-bdbf-d24a9f668f00.png" 
                alt="Brushing teeth routine" 
                className="rounded-2xl w-48 h-48 object-cover shadow-md" 
              />
            </div>
          </Card>
          
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/6467cd1e-eb13-448e-b6c1-ca2fea7f0888.png" 
              alt="Sarya Logo" 
              className="w-72 h-72 object-contain mb-6" 
            />
            <div className="bg-white p-6 rounded-3xl shadow-lg w-full">
              <h3 className="text-2xl font-bold text-sarya-purple-dark text-center mb-4">3D Product Overview</h3>
              <p className="text-gray-700 text-center">
                Sarya offers a complete care system with over 200+ activities for children with autism, ADHD, and special needs, specifically designed for Indian families.
              </p>
            </div>
          </div>
          
          <Card className="bg-sarya-green/20 rounded-3xl p-8 border-none shadow-lg">
            <h3 className="text-2xl font-bold text-sarya-purple-dark mb-4">Adult-Specific Activities</h3>
            <p className="text-gray-700 mb-6">
              For older children and adults with special needs, Sarya provides vocational skills, social interactions, and independent living activities.
            </p>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/b8706160-a3aa-4ac1-8dae-449f2d6e6a4f.png" 
                alt="Adult activities" 
                className="rounded-2xl w-48 h-48 object-cover shadow-md" 
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
