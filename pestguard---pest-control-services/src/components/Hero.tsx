import React from 'react';
import { ShieldCheck, PhoneCall, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-primary text-white overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop" 
          alt="Professional pest control technician spraying treatment" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
        <div className="max-w-2xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-up">
            <ShieldCheck className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium tracking-wide uppercase">#1 Rated Pest Control Service</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-100">
            Prevent, Protect & <span className="text-secondary">Eliminate</span> Pests
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed animate-fade-in-up animation-delay-200">
            Keep your family safe and your home pest-free with our eco-friendly, guaranteed extermination services. We handle the pests so you don't have to.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center animate-fade-in-up animation-delay-300">
            <a href="#contact" className="w-full sm:w-auto bg-secondary hover:bg-secondary-dark text-primary px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transform hover:-translate-y-1 hover:scale-110 flex items-center justify-center gap-2">
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </a>
            
            <div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 w-full sm:w-auto">
              <div className="bg-primary-light p-3 rounded-full">
                <PhoneCall className="h-6 w-6 text-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 font-medium">24/7 Emergency Service</span>
                <a href="tel:+18005550199" className="font-heading font-bold text-xl hover:text-secondary transition-colors">
                  1-800-555-0199
                </a>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center gap-4 animate-fade-in-up animation-delay-400">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                  alt={`Customer ${i}`} 
                  className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex text-yellow-400 text-sm">
                {'★★★★★'}
              </div>
              <span className="text-sm text-gray-300 font-medium">Trusted by 5,000+ homeowners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
