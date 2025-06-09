import React, { useState, useEffect, useCallback } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [platform, setPlatform] = useState<'ios' | 'android' | 'desktop'>('desktop');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const taglines = [
    { text: "Essential life skills for every Indian child.", language: "English" },
    { text: "हर भारतीय बच्चे के लिए जरूरी जीवन कौशल।", language: "हिंदी" },
    { text: "ప్రతి భారతీయ పిల్లకు అవసరమైన జీవిత నైపుణ్యాలు.", language: "తెలుగు" },
    { text: "ಪ್ರತಿ ಭಾರತೀಯ ಮಗುವಿಗೆ ಅವಶ್ಯಕ ಜೀವನ ಕೌಶಲ್ಯಗಳು.", language: "ಕನ್ನಡ" },
    { text: "ஒவ்வொரு இந்திய குழந்தைக்கும் அத்தியாவசிய வாழ்க்கை திறன்கள்.", language: "தமிழ்" },
    { text: "દરેક ભારતીય બાળક માટે જરૂરી જીવન કૌશલ્યો.", language: "ગુજરાતી" },
    { text: "প্রতিটি ভারতীয় শিশুর জন্য প্রয়োজনীয় জীবন দক্ষতা।", language: "বাংলা" },
    { text: "എല്ലാ ഇന്ത്യൻ കുട്ടികൾക്കും ആവശ്യമായ ജീവിത വൈദഗ്ധ്യം.", language: "മലയാളം" },
  ];

  const showcaseImages = [
    "/assets/images/home rainy.png",
    "/assets/images/home rainy-1.png",
    "/assets/images/onboarding.png",
    "/assets/images/onboarding-1.png",
    "/assets/images/onboarding-2.png",
    "/assets/images/onboarding-3.png",
    "/assets/images/lang.png",
  ];

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = showcaseImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoaded(true); // Continue even if some images fail to load
      }
    };

    preloadImages();
  }, []);

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

  const handleJoinBeta = useCallback(() => {
    window.open('https://forms.gle/BcXzk5t1ZYTMXjSX7', '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-sarya-purple/5 to-sarya-peach/10 dark:from-gray-950 dark:via-sarya-purple/10 dark:to-sarya-peach/5" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sarya-purple/10 dark:bg-sarya-purple/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sarya-peach/10 dark:bg-sarya-peach/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-3 md:items-start"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sarya-purple/40 to-sarya-peach/40 rounded-full animate-pulse"></div>
                <img 
                  src="/assets/images/f9e05724-c3d3-444d-97f4-19eac5386a86.png" 
                  alt="Autism ADHD ADL app for Indian children - Sarya" 
                  className="h-16 md:h-20 relative z-10 drop-shadow-lg"
                  loading="eager"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sarya-purple-dark dark:text-white">
                  Sarya
                </h1>
                <div className="inline-block bg-sarya-purple/20 dark:bg-sarya-purple/30 px-3 py-1 rounded-full text-sm text-sarya-purple-dark dark:text-white backdrop-blur-sm">
                  India's Leading App for Autism, ADHD & Special Needs              
                </div>
              </div>
            </motion.div>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentTaglineIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="h-24 relative"
              >
                <p className="text-xl md:text-2xl font-medium text-sarya-purple-dark dark:text-white">
                  {taglines[currentTaglineIndex].text}
                </p>
                <span className="text-sm text-sarya-purple dark:text-sarya-purple/80 opacity-75">
                  {taglines[currentTaglineIndex].language}
                </span>
              </motion.div>
            </AnimatePresence>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3 mt-4"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300">
                A specially designed app for Indian children with autism, ADHD, Down syndrome, and special needs to master 
                essential daily life skills through culturally relevant activities and step-by-step video guides.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                <span className="bg-sarya-purple/20 dark:bg-sarya-purple/30 px-3 py-1 rounded-full text-sm text-sarya-purple-dark dark:text-white">Self-Care Skills</span>
                <span className="bg-sarya-peach/30 dark:bg-sarya-peach/40 px-3 py-1 rounded-full text-sm text-sarya-purple-dark dark:text-white">Home Skills</span>
                <span className="bg-sarya-green/30 dark:bg-sarya-green/40 px-3 py-1 rounded-full text-sm text-sarya-purple-dark dark:text-white">School Readiness</span>
                <span className="bg-sarya-blue/30 dark:bg-sarya-blue/40 px-3 py-1 rounded-full text-sm text-sarya-purple-dark dark:text-white">Social Behavior</span>
              </div>
            </motion.div>

            {/* Platform Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-6"
            >
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
                <>
                  <Button className="btn-download bg-sarya-purple hover:bg-sarya-purple-dark font-bold animate-float" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple"><path d="M12 20.94c1.5 0 2.75 -.75 4 -2.25c-1.25 -.5 -2.5 -0.75 -4 -0.75s-2.75 0.25 -4 0.75c1.25 1.5 2.5 2.25 4 2.25z" /><path d="M12 14c1.5 0 2.75 -.25 4 -0.75v-2.25c0 -1 -0.75 -2 -2 -2h-4c-1.25 0 -2 1 -2 2v2.25c1.25 .5 2.5 0.75 4 0.75z" /><path d="M12 14c1.5 0 2.75 -.25 4 -0.75v-2.25c0 -1 -0.75 -2 -2 -2h-4c-1.25 0 -2 1 -2 2v2.25c1.25 .5 2.5 0.75 4 0.75z" /></svg>
                    iOS App – Coming Soon!
                  </Button>
                  <Button className="btn-download bg-sarya-green hover:bg-sarya-purple-dark font-bold animate-float" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-store"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 7v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /></svg>
                    Android App – Coming Soon!
                  </Button>
                </>
              )}
              <Button 
                onClick={handleJoinBeta}
                className="btn-download bg-sarya-green hover:bg-sarya-purple-dark font-bold" 
                style={{ minWidth: 180 }}
              >
                Join our beta program
              </Button>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-2"
            >
              <p className="text-sarya-purple-dark dark:text-white font-semibold">Starting at ₹899/month - Get 40% OFF with our yearly plan!</p>
              <div className="mt-2 inline-block bg-sarya-purple/10 dark:bg-sarya-purple/30 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="text-sm text-sarya-purple-dark dark:text-white">Join <b>500+</b> Indian families already using Sarya</span>
              </div>
            </motion.div>
          </div>

          {/* Phone Display Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-8 md:mt-0"
          >
            <div className="relative w-full max-w-[300px] md:max-w-md animate-float">
              <div className="relative mx-auto bg-black rounded-[3rem] overflow-hidden border-[14px] border-black w-[270px] h-[540px] shadow-2xl dark:shadow-sarya-purple/20">
                <div className="absolute top-0 w-[40%] h-[30px] bg-black left-[30%] rounded-b-xl z-10"></div>
                {showcaseImages.map((img, index) => (
                  <img 
                    key={img}
                    src={img}
                    alt={`ADL app India - teaching life skills to children with autism and ADHD ${index + 1}`}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                      img.includes('lang.png') ? 'object-contain p-4' : 'object-cover'
                    } rounded-[2rem] ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                  />
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -right-8 bg-sarya-purple/20 dark:bg-sarya-purple/30 rounded-full px-5 py-3 shadow-md backdrop-blur-sm">
                <p className="text-sarya-purple-dark dark:text-white font-medium text-sm">Made for India</p>
              </div>
              <div className="absolute -top-6 -left-4 bg-sarya-peach/30 dark:bg-sarya-peach/40 rounded-full px-5 py-3 shadow-md animate-float-delay-2 backdrop-blur-sm">
                <p className="text-sarya-purple-dark dark:text-white font-medium text-sm">Regional languages</p>
              </div>

              {/* Image Indicators */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
                {showcaseImages.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      currentImageIndex === idx 
                        ? 'w-4 bg-sarya-purple dark:bg-sarya-purple/80' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
