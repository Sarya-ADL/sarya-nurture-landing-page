import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Menu, X, Download, ChevronRight } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['hero', 'features', 'faq', 'pricing'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-background/80 backdrop-blur-lg shadow-sm'
          : 'py-4 bg-gradient-soft bg-gradient-soft-dark'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#aca1d6]/40 to-[#8a81ab]/40 rounded-full transform group-hover:scale-110 transition-all duration-300"></div>
            <img 
              src="/lovable-uploads/6467cd1e-eb13-448e-b6c1-ca2fea7f0888.png" 
              alt="Sarya Logo" 
              className="w-12 h-12 object-contain relative z-10 drop-shadow-md"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8a81ab] to-[#aca1d6] dark:from-[#ece9f5] dark:to-[#aca1d6]">Sarya</span>
            <span className="hidden sm:inline-block text-xs bg-gradient-to-r from-[#aca1d6]/20 to-[#8a81ab]/20 dark:from-[#aca1d6]/10 dark:to-[#8a81ab]/10 px-2 py-0.5 rounded-full text-foreground/80">
              Made in India with ❤️
            </span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { id: 'features', label: 'Features' },
            { id: 'faq', label: 'FAQ' },
            { id: 'pricing', label: 'Pricing' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-foreground/80 hover:text-foreground font-medium transition-colors group ${
                activeSection === item.id ? 'text-foreground' : ''
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#aca1d6] to-[#8a81ab] transition-all duration-300 ${
                activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          ))}
        </nav>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a 
            href="mailto:support@thesarya.com" 
            className="hidden md:flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
          >
            <Mail size={18} />
            <span>Support</span>
          </a>
          <Button 
            className="bg-gradient-button text-white shadow-lg shadow-[#aca1d6]/20 hover:shadow-[#8a81ab]/30 transition-all duration-300"
          >
            <Download size={18} className="mr-2" />
            Download App
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="container-custom pt-20">
          <nav className="flex flex-col items-center gap-8">
            {[
              { id: 'features', label: 'Features' },
              { id: 'faq', label: 'FAQ' },
              { id: 'pricing', label: 'Pricing' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group flex items-center gap-2 text-xl font-medium text-sarya-purple-dark hover:text-sarya-purple transition-colors"
              >
                {item.label}
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
            <a 
              href="mailto:support@thesarya.com" 
              className="flex items-center gap-2 text-xl font-medium text-sarya-purple-dark hover:text-sarya-purple transition-colors"
            >
              <Mail size={20} />
              <span>Contact Support</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
