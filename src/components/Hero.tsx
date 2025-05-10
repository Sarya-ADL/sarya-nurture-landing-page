
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  
  const taglines = [
    { text: "Nurturing every child with care.", language: "English" },
    { text: "हर बच्चे की देखभाल, प्यार से।", language: "Hindi" },
    { text: "ప్రతి పిల్లకు ప్రేమతో నురేపు.", language: "Telugu" },
    { text: "ஒவ்வொரு குழந்தைக்கும் அன்பும் பராமரிப்பும்.", language: "Tamil" },
    { text: "ভালবাসা ও যত্নে প্রতিটি শিশু।", language: "Bengali" },
    { text: "ഒരൊരോ കുഞ്ഞിനും സ്‌നേഹപരിചരണം.", language: "Malayalam" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sarya-purple-dark">
            Sarya <span className="font-devanagari">(सार्या)</span>
          </h1>
          
          <div className="h-24 relative">
            <div 
              className="absolute w-full transition-all duration-700 ease-in-out"
              style={{ 
                opacity: 1,
                transform: 'translateY(0)'
              }}
            >
              <p className="text-xl md:text-2xl font-medium text-sarya-purple-dark">
                {taglines[currentTaglineIndex].text}
              </p>
              <span className="text-sm text-sarya-purple opacity-75">
                {taglines[currentTaglineIndex].language}
              </span>
            </div>
          </div>
          
          <div className="space-y-3 mt-4">
            <p className="text-lg text-gray-600">
              A specialized app for parents of children with special needs, designed specifically for Indian families.
            </p>
            <p className="text-lg text-sarya-purple font-medium">
              We support Hindi, Tamil, Telugu, Bengali, Malayalam and more regional languages!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button className="btn-download bg-sarya-purple hover:bg-sarya-purple-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple"><path d="M12 20.94c1.5 0 2.75 -.75 4 -2.25c-1.25 -.5 -2.5 -0.75 -4 -0.75s-2.75 0.25 -4 0.75c1.25 1.5 2.5 2.25 4 2.25z" /><path d="M12 14c1.5 0 2.75 -.25 4 -0.75v-2.25c0 -1 -0.75 -2 -2 -2h-4c-1.25 0 -2 1 -2 2v2.25c1.25 .5 2.5 0.75 4 0.75z" /><path d="M12 14c1.5 0 2.75 -.25 4 -0.75v-2.25c0 -1 -0.75 -2 -2 -2h-4c-1.25 0 -2 1 -2 2v2.25c1.25 .5 2.5 0.75 4 0.75z" /></svg>
              App Store
            </Button>
            <Button className="btn-download bg-sarya-purple hover:bg-sarya-purple-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-store"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 7v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /></svg>
              Google Play
            </Button>
          </div>
          <div className="mt-2">
            <p className="text-sarya-purple-dark font-semibold">Only ₹899/month - Invest in your child's future today!</p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <img 
              src="/lovable-uploads/6e05ac42-50f6-4207-bdbf-d24a9f668f00.png" 
              alt="Sarya App - Girl with special needs" 
              className="rounded-3xl shadow-lg w-full object-cover animate-float"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-xl">
              <p className="text-sm text-sarya-purple-dark">
                Our AI-powered buddy suggests personalized activities for your child's unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
