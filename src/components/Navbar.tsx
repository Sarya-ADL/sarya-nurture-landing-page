import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Download, ChevronRight, Instagram } from 'lucide-react';
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
            <div className="absolute inset-0 bg-gradient-to-br from-[#8a81ab]/40 to-[#6a5f96]/40 rounded-full transform group-hover:scale-110 transition-all duration-300"></div>
            <img 
              src="/lovable-uploads/6467cd1e-eb13-448e-b6c1-ca2fea7f0888.png"
              alt="ADL app India - teaching life skills to children with autism and ADHD" 
              className="w-12 h-12 object-contain relative z-10 drop-shadow-md"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#a094d8] to-[#8a81ab] dark:from-[#ece9f5] dark:to-[#a094d8]">Sarya</span>
            <span className="hidden sm:inline-block text-xs bg-gradient-to-r from-[#aca1d6]/20 to-[#8a81ab]/20 dark:from-[#aca1d6]/10 dark:to-[#8a81ab]/10 px-2 py-0.5 rounded-full text-foreground/80">
              Essential life skills — simple, fun, and truly Indian! ❤️
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
        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          {/* Instagram Button - Desktop */}
          <a 
            href="https://www.instagram.com/the_sarya_com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden dark:hidden md:flex items-center gap-2 bg-gradient-to-br from-[#6a5f96]/90 to-[#8a81ab]/90 text-white px-3 py-1.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
          >
            <Instagram size={16} />
            <span>Follow us</span>
          </a>

          {/* Instagram Icon - Mobile */}
          <a 
            href="https://www.instagram.com/the_sarya_com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="md:hidden flex items-center bg-gradient-to-br from-[#6a5f96]/90 to-[#8a81ab]/90 text-white p-1.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Instagram size={18} />
          </a>

          <Button 
            className="bg-sarya-green/90 hover:bg-[#6a5f96] hover:scale-105 text-white dark:bg-sarya-green/80 dark:hover:bg-[#6a5f96] font-bold px-3 py-1.5 h-auto text-sm md:text-base dark:text-sm rounded-full shadow-lg transition-all duration-300"
          >
            <a href="https://forms.gle/BcXzk5t1ZYTMXjSX7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Instagram size={16} className="hidden md:block" />
              Join Beta Program
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-white/95 dark:bg-background/95 backdrop-blur-lg transition-all duration-300 ${
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
                className="group flex items-center gap-2 text-xl font-medium text-sarya-purple-dark dark:text-sarya-purple hover:text-sarya-purple transition-colors"
              >
                {item.label}
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            ))}

            {/* Instagram Button in Mobile Menu */}
            <a 
              href="https://www.instagram.com/thesarya.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-br from-sarya-purple/90 to-sarya-peach/90 text-white px-4 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-base"
            >
              <Instagram size={20} />
              <span>Follow us on Instagram</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
