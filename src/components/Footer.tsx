import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sarya-purple-dark text-white py-8">
      <div className="container-custom flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-2 mb-2">
          <img 
            src="/lovable-uploads/6467cd1e-eb13-448e-b6c1-ca2fea7f0888.png" 
            alt="Sarya Logo" 
            className="w-10 h-10 object-contain bg-white rounded-full p-1" 
          />
          <span className="text-xl font-bold">Sarya</span>
        </div>
        <p className="text-sm text-white/80 text-center max-w-md">
          Empowering every Indian child with essential life skills through culturally relevant activities and expert guidance.
        </p>
        <div className="flex gap-4 mt-2">
          <a href="mailto:support@thesarya.com" className="flex items-center gap-2 text-sarya-purple bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-2 text-sm font-medium">
            <Mail size={16} />
            Contact Support
          </a>
          <a href="https://www.linkedin.com/company/thesarya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sarya-purple bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-2 text-sm font-medium">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.04 0 3.601 2.002 3.601 4.604v5.592z"/></svg>
            LinkedIn
          </a>
          <a href="https://instagram.com/thesarya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sarya-purple bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-2 text-sm font-medium">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            Instagram
          </a>
          <a href="https://thesarya.com/newsletter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sarya-purple bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-2 text-sm font-medium">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 6.99 8-6.99V20H4z"/></svg>
            Newsletter
          </a>
        </div>
        <p className="text-xs text-white/50 mt-4 text-center">
          © {new Date().getFullYear()} Sarya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
