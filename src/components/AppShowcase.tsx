import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AppShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: "🪥",
      title: "Personalized Routines",
      description: "Fun daily routines for brushing, bathing, eating, and more—made visual and easy for every child!",
      image: "/lovable-uploads/image.png",
      bgClass: "bg-gradient-to-br from-sarya-peach/30 to-sarya-purple/10",
      borderColor: "border-sarya-peach/40"
    },
    {
      icon: "🎲",
      title: "3D Product Overview",
      description: "Explore Sarya's world—see activities, rewards, and progress in a playful, interactive way!",
      image: "/lovable-uploads/image-3d.png",
      bgClass: "bg-gradient-to-br from-sarya-purple/10 to-sarya-green/20",
      borderColor: "border-sarya-purple/30"
    },
    {
      icon: "🧑‍🎓",
      title: "Adult-Specific Activities",
      description: "For older kids & adults: learn skills for independence, social fun, and real-life success!",
      image: "/lovable-uploads/image7.png",
      bgClass: "bg-gradient-to-br from-sarya-green/20 to-sarya-peach/20",
      borderColor: "border-sarya-green/40"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-white via-sarya-purple/5 to-sarya-peach/10 dark:from-gray-950 dark:via-sarya-purple/10 dark:to-sarya-peach/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sarya-purple-dark dark:text-white mb-4">How Sarya Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Take a closer look at how Sarya helps parents create structured routines and learning experiences for children with special needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-8 items-start">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`${feature.bgClass} rounded-3xl p-8 border-none shadow-xl transition-all duration-500 cursor-pointer group ${
                activeFeature === index ? 'scale-105 shadow-2xl' : 'hover:scale-102'
              }`}
              onClick={() => setActiveFeature(index)}
            >
              <div className="flex flex-col items-center">
                <span className={`text-4xl mb-2 ${
                  activeFeature === index ? 'animate-bounce' : 'animate-float'
                }`}>
                  {feature.icon}
                </span>
                <h3 className="text-2xl font-bold text-sarya-purple-dark dark:text-white mb-2 group-hover:text-sarya-peach-dark transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-center text-base">
                  {feature.description}
                </p>
                <div className="relative rounded-2xl overflow-hidden group-hover:shadow-lg transition-shadow">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className={`w-full h-48 object-cover shadow-md border-4 ${feature.borderColor} transition-all duration-500 ${
                      activeFeature === index ? 'scale-110' : 'group-hover:scale-105'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button className="btn-download bg-sarya-green hover:bg-sarya-purple-dark dark:bg-sarya-green/80 dark:hover:bg-sarya-purple text-sarya-purple-dark dark:text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all animate-float">
            <a href="https://forms.gle/BcXzk5t1ZYTMXjSX7" target="_blank" rel="noopener noreferrer">
              Join Beta Access
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
