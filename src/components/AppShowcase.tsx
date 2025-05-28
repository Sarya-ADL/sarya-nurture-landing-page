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
        
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-8 items-center">
          <Card className="bg-gradient-to-br from-sarya-peach/30 to-sarya-purple/10 rounded-3xl p-8 border-none shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2 animate-float">🪥</span>
              <h3 className="text-2xl font-bold text-sarya-purple-dark mb-2 group-hover:text-sarya-peach-dark transition-colors">Personalized Routines</h3>
              <p className="text-gray-700 mb-4 text-center text-base">Fun daily routines for brushing, bathing, eating, and more—made visual and easy for every child!</p>
              <img 
                src="/lovable-uploads/e39c5970-b0ea-4a93-9801-7e9394465bb5.png" 
                alt="Brushing teeth routine" 
                className="rounded-2xl w-32 h-32 object-cover shadow-md border-4 border-sarya-peach/40 group-hover:scale-110 transition-transform" 
              />
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-sarya-purple/10 to-sarya-green/20 rounded-3xl p-8 border-none shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2 animate-float-delay-2">🎲</span>
              <h3 className="text-2xl font-bold text-sarya-purple-dark mb-2 group-hover:text-sarya-green transition-colors">3D Product Overview</h3>
              <p className="text-gray-700 mb-4 text-center text-base">Explore Sarya’s world—see activities, rewards, and progress in a playful, interactive way!</p>
              <img 
                src="/lovable-uploads/6467cd1e-eb13-448e-b6c1-ca2fea7f0888.png" 
                alt="Sarya Logo" 
                className="w-32 h-32 object-contain mb-2 rounded-full shadow-lg border-4 border-sarya-purple/30 group-hover:scale-110 transition-transform" 
              />
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-sarya-green/20 to-sarya-peach/20 rounded-3xl p-8 border-none shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2 animate-float-delay-3">🧑‍🎓</span>
              <h3 className="text-2xl font-bold text-sarya-purple-dark mb-2 group-hover:text-sarya-green transition-colors">Adult-Specific Activities</h3>
              <p className="text-gray-700 mb-4 text-center text-base">For older kids & adults: learn skills for independence, social fun, and real-life success!</p>
              <img 
                src="/lovable-uploads/b8706160-a3aa-4ac1-8dae-449f2d6e6a4f.png" 
                alt="Adult activities" 
                className="rounded-2xl w-32 h-32 object-cover shadow-md border-4 border-sarya-green/40 group-hover:scale-110 transition-transform" 
              />
            </div>
          </Card>
        </div>
        <div className="flex justify-center mt-10">
          <button className="btn-download bg-sarya-green hover:bg-sarya-purple-dark text-sarya-purple-dark font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all animate-float">
            Join Beta Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
