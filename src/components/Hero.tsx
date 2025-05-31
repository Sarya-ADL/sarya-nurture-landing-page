import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [platform, setPlatform] = useState<'ios' | 'android' | 'desktop'>('desktop');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const taglines = [
    { text: "Essential life skills for every Indian child.", language: "" },
    { text: "हर भारतीय बच्चे के लिए जरूरी जीवन कौशल।", language: "" },
    { text: "ప్రతి భారతీయ పిల్లకు అవసరమైన జీవిత నైపుణ్యాలు.", language: "" },
    { text: "ಪ್ರತಿ ಭಾರತೀಯ ಮಗುವಿಗೆ ಅವಶ್ಯಕ ಜೀವನ ಕೌಶಲ್ಯಗಳು.", language: "" },
    { text: "ஒவ்வொரு இந்திய குழந்தைக்கும் அத்தியாவசிய வாழ்க்கை திறன்கள்.", language: "" },
    { text: "દરેક ભારતીય બાળક માટે જરૂરી જીવન કૌશલ્યો.", language: "" },
    { text: "প্রতিটি ভারতীয় শিশুর জন্য প্রয়োজনীয় জীবন দক্ষতা।", language: "" },
    { text: "എല്ലാ ഇന്ത്യൻ കുട്ടികൾക്കും ആവശ്യമായ ജീവിത വൈദഗ്ധ്യം.", language: "" },
  ];

  const showcaseImages = [
    "/lovable-uploads/home rainy.png",
    "/lovable-uploads/home rainy-1.png",
    "/lovable-uploads/onboarding.png",
    "/lovable-uploads/onboarding-1.png",
    "/lovable-uploads/onboarding-2.png",
    "/lovable-uploads/onboarding-3.png"
  ];

  useEffect(() => {
    const taglineInterval = setInterval(() => {
      setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(taglineInterval);
  }, [taglines.length]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % showcaseImages.length);
    }, 2000);

    return () => clearInterval(imageInterval);
  }, [showcaseImages.length]);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor;
    if (/android/i.test(ua)) {
      setPlatform('android');
    } else if (/iPad|iPhone|iPod/.test(ua)) {
      setPlatform('ios');
    } else {
      setPlatform('desktop');
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-sarya-purple/5 to-sarya-peach/10 dark:from-gray-950 dark:via-sarya-purple/10 dark:to-sarya-peach/5">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sarya-purple/40 to-sarya-peach/40 rounded-full animate-pulse"></div>
              <img 
                src="/lovable-uploads/home rainy.png"
                alt="Autism ADHD ADL app for Indian children - Sarya" 
                className="h-16 md:h-20 relative z-10 drop-shadow-lg transition-opacity duration-500"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sarya-purple-dark dark:text-white">
                Sarya
              </h1>
              <div className="inline-block bg-sarya-purple/20 dark:bg-sarya-purple/30 px-3 py-1 rounded-full text-sm text-sarya-purple-dark dark:text-white">
                 India's App for Autism, ADHD & Daily Living Skills              
            </div>
            </div>
          </div>
          
          <div className="h-24 relative">
            <div 
              className="absolute w-full transition-all duration-700 ease-in-out"
              style={{ 
                opacity: 1,
                transform: 'translateY(0)'
              }}
            >
              <p className="text-xl md:text-2xl font-medium text-sarya-purple-dark dark:text-white">
                {taglines[currentTaglineIndex].text}
              </p>
              <span className="text-sm text-sarya-purple dark:text-sarya-purple/80 opacity-75">
                {taglines[currentTaglineIndex].language}
              </span>
            </div>
          </div>
          
          <div className="space-y-3 mt-4">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A specially designed app for Indian children with autism, ADHD, Down syndrome, and special needs to master 
              essential daily life skills through culturally relevant activities and step-by-step video guides.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-sarya-purple/20 dark:bg-sarya-purple/30 px-3 py-1 rounded-full text-sm text-sarya-purple-dark dark:text-white">Self-Care Skills</span>
              <span className="bg-sarya-peach/30 dark:bg-sarya-peach/40 px-3 py-1 rounded-full text-sm text-sarya-purple-dark dark:text-white">Home Skills</span>
              <span className="bg-sarya-green/30 dark:bg-sarya-green/40 px-3 py-1 rounded-full text-sm text-sarya-purple-dark dark:text-white">School Readiness</span>
              <span className="bg-sarya-blue/30 dark:bg-sarya-blue/40 px-3 py-1 rounded-full text-sm text-sarya-purple-dark dark:text-white">Social Behavior</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            {platform === 'ios' && (
              <Button className="btn-download bg-sarya-purple hover:bg-sarya-purple-dark font-bold animate-float" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple"><path d="M12 20.94c1.5 0 2.75 -.75 4 -2.25c-1.25 -.5 -2.5 -0.75 -4 -0.75s-2.75 0.25 -4 0.75c1.25 1.5 2.5 2.25 4 2.25z" /><path d="M12 14c1.5 0 2.75 -.25 4 -0.75v-2.25c0 -1 -0.75 -2 -2 -2h-4c-1.25 0 -2 1 -2 2v2.25c1.25 .5 2.5 0.75 4 0.75z" /><path d="M12 14c1.5 0 2.75 -.25 4 -0.75v-2.25c0 -1 -0.75 -2 -2 -2h-4c-1.25 0 -2 1 -2 2v2.25c1.25 .5 2.5 0.75 4 0.75z" /></svg>
                iOS App – Coming Soon! 🚀
              </Button>
            )}
            {platform === 'android' && (
              <Button className="btn-download bg-sarya-green hover:bg-sarya-purple-dark font-bold animate-float" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-store"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 7v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /></svg>
                Android App – Coming Soon! 🚀
              </Button>
            )}
            {platform === 'desktop' && (
              <Button className="btn-download bg-sarya-purple hover:bg-sarya-purple-dark font-bold animate-float" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple"><path d="M12 20.94c1.5 0 2.75 -.75 4 -2.25c-1.25 -.5 -2.5 -0.75 -4 -0.75s-2.75 0.25 -4 0.75c1.25 1.5 2.5 2.25 4 2.25z" /><path d="M12 14c1.5 0 2.75 -.25 4 -0.75v-2.25c0 -1 -0.75 -2 -2 -2h-4c-1.25 0 -2 1 -2 2v2.25c1.25 .5 2.5 0.75 4 0.75z" /><path d="M12 14c1.5 0 2.75 -.25 4 -0.75v-2.25c0 -1 -0.75 -2 -2 -2h-4c-1.25 0 -2 1 -2 2v2.25c1.25 .5 2.5 0.75 4 0.75z" /></svg>
                iOS App – Coming Soon!
              </Button>
            )}
            {platform === 'desktop' && (
              <Button className="btn-download bg-sarya-green hover:bg-sarya-purple-dark font-bold animate-float" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-store"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 7v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /></svg>
                Android App – Coming Soon!
              </Button>
            )}
            <Button className="btn-download bg-sarya-green hover:bg-sarya-purple-dark font-bold" style={{ minWidth: 180 }}>
              <a href="https://forms.gle/BcXzk5t1ZYTMXjSX7" target="_blank" rel="noopener noreferrer">Join our beta program</a>
            </Button>
          </div>
          <div className="mt-2">
            <p className="text-sarya-purple-dark dark:text-white font-semibold">Starting at ₹899/month - Get 40% OFF with our yearly plan!</p>
            <div className="mt-2 inline-block bg-sarya-purple/10 dark:bg-sarya-purple/30 px-4 py-2 rounded-lg">
              <span className="text-sm text-sarya-purple-dark dark:text-white">Join <b>500+</b> Indian families already using Sarya</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative w-full max-w-md animate-float">
            <div className="relative mx-auto bg-black rounded-[3rem] overflow-hidden border-[14px] border-black w-[270px] h-[540px] shadow-2xl dark:shadow-sarya-purple/20">
              <div className="absolute top-0 w-[40%] h-[30px] bg-black left-[30%] rounded-b-xl z-10"></div>
              {showcaseImages.map((img, index) => (
                <img 
                  key={img}
                  src={img}
                  alt={`Sarya App Feature ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover rounded-[2rem] transition-opacity duration-500 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <div className="absolute -bottom-10 -right-8 bg-sarya-purple/20 dark:bg-sarya-purple/30 rounded-full px-5 py-3 shadow-md">
              <p className="text-sarya-purple-dark dark:text-white font-medium text-sm">Video Guides</p>
            </div>
            <div className="absolute -top-6 -left-4 bg-sarya-peach/30 dark:bg-sarya-peach/40 rounded-full px-5 py-3 shadow-md animate-float-delay-2">
              <p className="text-sarya-purple-dark dark:text-white font-medium text-sm">Daily Activities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
