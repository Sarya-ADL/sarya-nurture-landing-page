
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sarya-purple-dark text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/6467cd1e-eb13-448e-b6c1-ca2fea7f0888.png" 
                alt="Sarya Logo" 
                className="w-10 h-10 object-contain bg-white rounded-full p-1" 
              />
              <span className="text-xl font-bold">Sarya</span>
              <span className="text-lg font-devanagari">(सार्या)</span>
            </div>
            <p className="text-sm text-white/80">
              Nurturing every child with care across India through culturally sensitive support for families of children with special needs.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">App</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#languages" className="hover:text-white transition-colors">Languages</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Download</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 bg-black/30 hover:bg-black/50 transition-colors rounded-xl px-4 py-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple"><path d="M12 20.94c1.5 0 2.75 -.75 4 -2.25c-1.25 -.5 -2.5 -0.75 -4 -0.75s-2.75 0.25 -4 0.75c1.25 1.5 2.5 2.25 4 2.25z" /><path d="M12 14c1.5 0 2.75 -.25 4 -0.75v-2.25c0 -1 -0.75 -2 -2 -2h-4c-1.25 0 -2 1 -2 2v2.25c1.25 .5 2.5 0.75 4 0.75z" /><path d="M12 14c1.5 0 2.75 -.25 4 -0.75v-2.25c0 -1 -0.75 -2 -2 -2h-4c-1.25 0 -2 1 -2 2v2.25c1.25 .5 2.5 0.75 4 0.75z" /></svg>
                App Store
              </a>
              <a href="#" className="flex items-center gap-2 bg-black/30 hover:bg-black/50 transition-colors rounded-xl px-4 py-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-store"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 7v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /></svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 mb-2">Made with ❤️ for every child</p>
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Sarya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
