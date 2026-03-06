import React, { useState } from 'react';
import { Phone, Menu, X, Shield, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="font-heading font-bold text-2xl text-primary">PestGuard</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-text hover:text-primary font-medium transition-colors">Home</a>
            <a href="#about" className="text-text hover:text-primary font-medium transition-colors">About</a>
            
            <div className="relative group">
              <button className="flex items-center gap-1 text-text hover:text-primary font-medium transition-colors py-2">
                Services <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <a href="#services" className="block px-4 py-2 text-sm text-text hover:bg-surface hover:text-primary">All Services</a>
                <a href="#contact" className="block px-4 py-2 text-sm text-text hover:bg-surface hover:text-primary">Termite Control</a>
                <a href="#contact" className="block px-4 py-2 text-sm text-text hover:bg-surface hover:text-primary">Rodent Removal</a>
                <a href="#contact" className="block px-4 py-2 text-sm text-text hover:bg-surface hover:text-primary">Bed Bug Treatment</a>
                <a href="#contact" className="block px-4 py-2 text-sm text-text hover:bg-surface hover:text-primary">Commercial Services</a>
              </div>
            </div>

            <a href="#contact" className="text-text hover:text-primary font-medium transition-colors">Contact</a>
          </div>

          {/* CTA & Phone (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-secondary-dark" />
              <div className="flex flex-col">
                <span className="text-xs text-text-light font-medium">Call Us Now</span>
                <a href="tel:+18005550199" className="font-heading font-bold text-primary hover:text-secondary-dark transition-colors">
                  1-800-555-0199
                </a>
              </div>
            </div>
            <a href="#contact" className="bg-secondary hover:bg-secondary-dark text-primary px-6 py-3 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 inline-block">
              Get a Free Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-text hover:text-primary hover:bg-surface">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-text hover:text-primary hover:bg-surface">About</a>
            
            <div>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)} 
                className="w-full flex items-center justify-between px-3 py-3 rounded-md text-base font-medium text-text hover:text-primary hover:bg-surface"
              >
                Services
                <ChevronDown className={`h-5 w-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-6 pr-3 py-2 space-y-1 bg-gray-50 rounded-md mt-1">
                  <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-sm font-medium text-text-light hover:text-primary hover:bg-surface">All Services</a>
                  <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-sm font-medium text-text-light hover:text-primary hover:bg-surface">Termite Control</a>
                  <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-sm font-medium text-text-light hover:text-primary hover:bg-surface">Rodent Removal</a>
                  <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-sm font-medium text-text-light hover:text-primary hover:bg-surface">Bed Bug Treatment</a>
                  <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-sm font-medium text-text-light hover:text-primary hover:bg-surface">Commercial Services</a>
                </div>
              )}
            </div>

            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-text hover:text-primary hover:bg-surface">Contact</a>
            
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-4 px-3">
              <a href="tel:+18005550199" className="flex items-center gap-2 text-primary font-bold text-lg">
                <Phone className="h-5 w-5 text-secondary-dark" />
                1-800-555-0199
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-full bg-secondary hover:bg-secondary-dark text-primary px-6 py-3 rounded-full font-bold transition-colors text-center inline-block">
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
