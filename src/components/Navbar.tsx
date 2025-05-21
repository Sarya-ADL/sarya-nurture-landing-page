
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="w-full py-4">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sarya-purple/20 to-sarya-peach/20 rounded-full"></div>
            <img 
              src="/lovable-uploads/6467cd1e-eb13-448e-b6c1-ca2fea7f0888.png" 
              alt="Sarya Logo" 
              className="w-12 h-12 object-contain relative z-10 drop-shadow-md"
            />
          </div>
          <span className="text-2xl font-bold text-sarya-purple-dark">Sarya</span>
          <span className="text-xl font-devanagari text-sarya-purple-dark">(सार्या)</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sarya-purple-dark hover:text-sarya-purple font-medium">Features</a>
          <a href="#languages" className="text-sarya-purple-dark hover:text-sarya-purple font-medium">Languages</a>
          <a href="#testimonials" className="text-sarya-purple-dark hover:text-sarya-purple font-medium">Testimonials</a>
          <a href="#pricing" className="text-sarya-purple-dark hover:text-sarya-purple font-medium">Pricing</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button className="bg-sarya-purple hover:bg-sarya-purple-dark">Download</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
