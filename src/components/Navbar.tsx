
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full py-4">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-sarya-purple/30 to-sarya-peach/30 rounded-full transform group-hover:scale-110 transition-all duration-300"></div>
            <img 
              src="/lovable-uploads/6467cd1e-eb13-448e-b6c1-ca2fea7f0888.png" 
              alt="Sarya Logo" 
              className="w-12 h-12 object-contain relative z-10 drop-shadow-md"
            />
          </div>
          <span className="text-2xl font-bold text-sarya-purple-dark">Sarya</span>
          <span className="hidden sm:inline-block text-xs bg-sarya-purple/20 px-2 py-1 rounded-full text-sarya-purple-dark">Made in India</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sarya-purple-dark hover:text-sarya-purple font-medium">Features</a>
          <a href="#languages" className="text-sarya-purple-dark hover:text-sarya-purple font-medium">Languages</a>
          <a href="#testimonials" className="text-sarya-purple-dark hover:text-sarya-purple font-medium">Testimonials</a>
          <a href="#faq" className="text-sarya-purple-dark hover:text-sarya-purple font-medium">FAQ</a>
          <a href="#pricing" className="text-sarya-purple-dark hover:text-sarya-purple font-medium">Pricing</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <a href="mailto:support@thesarya.com" className="hidden md:flex items-center gap-2 text-sarya-purple-dark hover:text-sarya-purple">
            <Mail size={18} />
            <span>Contact Support</span>
          </a>
          <Button className="bg-sarya-purple hover:bg-sarya-purple-dark shadow-md hover:shadow-lg transition-all">
            Download Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
