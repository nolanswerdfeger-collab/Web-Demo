import React from 'react';
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <span className="font-heading font-bold text-2xl">PestGuard</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in pest control. We provide safe, effective, and eco-friendly solutions for your home and business.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 hover:bg-secondary hover:text-primary p-3 rounded-full transition-colors text-gray-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/5 hover:bg-secondary hover:text-primary p-3 rounded-full transition-colors text-gray-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/5 hover:bg-secondary hover:text-primary p-3 rounded-full transition-colors text-gray-400">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-secondary transition-colors">Our Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-secondary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#contact" className="text-gray-400 hover:text-secondary transition-colors">Termite Control</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-secondary transition-colors">Rodent Removal</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-secondary transition-colors">Bed Bug Treatment</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-secondary transition-colors">Mosquito Control</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-secondary transition-colors">Commercial Pest Control</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-secondary flex-shrink-0" />
                <span className="text-gray-400">123 Pest Control Ave, Suite 100<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-secondary flex-shrink-0" />
                <a href="tel:+18005550199" className="text-gray-400 hover:text-secondary transition-colors">1-800-555-0199</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-secondary flex-shrink-0" />
                <a href="mailto:info@pestguard.com" className="text-gray-400 hover:text-secondary transition-colors">info@pestguard.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PestGuard. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
