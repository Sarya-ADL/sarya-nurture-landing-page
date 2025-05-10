
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sarya-purple-dark">
            Sarya <span className="font-devanagari">(सार्या)</span>
          </h1>
          
          <div className="space-y-3">
            <p className="text-xl md:text-2xl font-medium">
              Nurturing every child with care.
            </p>
            <p className="font-devanagari text-lg text-sarya-purple-dark">
              हर बच्चे की देखभाल, प्यार से।
            </p>
            <p className="text-lg text-sarya-purple-dark">
              ప్రతి పిల్లకు ప్రేమతో నురేపు.
            </p>
            <p className="text-lg text-sarya-purple-dark">
              ஒவ்வொரு குழந்தைக்கும் அன்பும் பராமரிப்பும்.
            </p>
            <p className="text-lg text-sarya-purple-dark">
              ভালবাসা ও যত্নে প্রতিটি শিশু।
            </p>
            <p className="text-lg text-sarya-purple-dark">
              ഒരൊരോ കുഞ്ഞിനും സ്‌നേഹപരിചരണം.
            </p>
          </div>
          
          <p className="text-lg text-gray-600">
            A specially designed app for parents of children with autism, ADHD, Down syndrome, and special needs, 
            tailored for Indian families and their unique cultural context.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button className="btn-download bg-sarya-purple hover:bg-sarya-purple-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-apple"><path d="M12 20.94c1.5 0 2.75 -.75 4 -2.25c-1.25 -.5 -2.5 -0.75 -4 -0.75s-2.75 0.25 -4 0.75c1.25 1.5 2.5 2.25 4 2.25z" /><path d="M12 14c1.5 0 2.75 -.25 4 -0.75v-2.25c0 -1 -0.75 -2 -2 -2h-4c-1.25 0 -2 1 -2 2v2.25c1.25 .5 2.5 0.75 4 0.75z" /><path d="M12 14c1.5 0 2.75 -.25 4 -0.75v-2.25c0 -1 -0.75 -2 -2 -2h-4c-1.25 0 -2 1 -2 2v2.25c1.25 .5 2.5 0.75 4 0.75z" /></svg>
              App Store
            </Button>
            <Button className="btn-download bg-sarya-purple hover:bg-sarya-purple-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-store"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 7v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /></svg>
              Google Play
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-6 animate-float">
            <img 
              src="/lovable-uploads/6e05ac42-50f6-4207-bdbf-d24a9f668f00.png" 
              alt="Parent helping child brush teeth" 
              className="rounded-3xl shadow-lg w-full object-cover"
            />
            <img 
              src="/lovable-uploads/5b5cc5c7-5c4f-42a3-a273-426cc7c35604.png" 
              alt="Happy child" 
              className="rounded-3xl shadow-lg w-full object-cover"
            />
            <img 
              src="/lovable-uploads/b8706160-a3aa-4ac1-8dae-449f2d6e6a4f.png" 
              alt="Child with hygiene tools" 
              className="rounded-3xl shadow-lg w-full object-cover transform translate-y-6"
            />
            <img 
              src="/lovable-uploads/663d1380-54ca-45e2-a26e-e3ae9985db2c.png" 
              alt="Child daily activities" 
              className="rounded-3xl shadow-lg w-full object-cover transform translate-y-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
