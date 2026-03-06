import React from 'react';
import { Bug, Rat, BedDouble, Wind, Building2, Home, ShieldAlert, Crosshair } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Termite Control',
      description: 'Comprehensive termite inspection, treatment, and prevention to protect your property.',
      icon: <ShieldAlert className="h-8 w-8 text-secondary-dark" />
    },
    {
      title: 'Rodent Removal',
      description: 'Safe and effective removal of mice, rats, and other rodents from your home or business.',
      icon: <Rat className="h-8 w-8 text-secondary-dark" />
    },
    {
      title: 'Bed Bug Treatment',
      description: 'Advanced heat and chemical treatments to completely eliminate bed bugs at all life stages.',
      icon: <BedDouble className="h-8 w-8 text-secondary-dark" />
    },
    {
      title: 'Mosquito Control',
      description: 'Seasonal mosquito barrier treatments so you can enjoy your yard bite-free.',
      icon: <Wind className="h-8 w-8 text-secondary-dark" />
    },
    {
      title: 'Ant Extermination',
      description: 'Targeted baiting and barrier treatments to stop ant trails and destroy the colony.',
      icon: <Bug className="h-8 w-8 text-secondary-dark" />
    },
    {
      title: 'Cockroach Control',
      description: 'Fast-acting treatments to eliminate roach infestations and prevent future outbreaks.',
      icon: <Crosshair className="h-8 w-8 text-secondary-dark" />
    },
    {
      title: 'Residential Services',
      description: 'Year-round protection plans tailored for your home and family safety.',
      icon: <Home className="h-8 w-8 text-secondary-dark" />
    },
    {
      title: 'Commercial Pest Control',
      description: 'Discreet, effective pest management solutions for businesses and commercial properties.',
      icon: <Building2 className="h-8 w-8 text-secondary-dark" />
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-amber-50 text-secondary-dark font-bold text-sm tracking-wide uppercase mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">Comprehensive Pest Control Solutions</h2>
          <p className="text-lg text-text-light">
            We offer targeted, effective treatments for all types of pests. Whether you're dealing with a current infestation or looking for preventative care, we have you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 border border-white/50 group"
            >
              <div className="bg-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-heading mb-3">{service.title}</h3>
              <p className="text-text-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
