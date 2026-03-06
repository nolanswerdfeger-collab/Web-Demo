import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const practices = [
    "Eco-friendly treatments safe for pets and children",
    "Targeted application to minimize environmental impact",
    "Long-term prevention strategies over quick fixes",
    "Integrated Pest Management (IPM) certified"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop" 
                alt="Technician applying sustainable pest control treatment" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary-dark/10 p-3 rounded-full">
                    <CheckCircle2 className="h-8 w-8 text-secondary-dark" />
                  </div>
                  <div>
                    <p className="font-bold text-heading text-lg">15+ Years</p>
                    <p className="text-sm text-text-light font-medium">Of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-2 rounded-full bg-amber-50 text-secondary-dark font-bold text-sm tracking-wide uppercase mb-6">
              Why Choose Us
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6 leading-tight">
              Focused on <span className="text-primary">Sustainable</span> Pest Control Practices
            </h2>
            
            <p className="text-lg text-text-light mb-8 leading-relaxed">
              We believe in protecting your home without compromising the environment. Our modern approach combines advanced technology with eco-conscious methods to deliver superior results that last.
            </p>

            <ul className="space-y-4 mb-10">
              {practices.map((practice, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary-dark flex-shrink-0 mt-0.5" />
                  <span className="text-text font-medium">{practice}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="inline-block bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
