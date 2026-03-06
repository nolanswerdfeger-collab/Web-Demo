import React from 'react';
import { ShieldCheck, Clock, Award } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-secondary-dark" />,
      title: "100% Satisfaction",
      description: "We guarantee our work. If pests return between treatments, we'll re-treat at no extra cost."
    },
    {
      icon: <Clock className="h-10 w-10 text-secondary-dark" />,
      title: "24/7 Service",
      description: "Pest emergencies don't wait for business hours. We're available around the clock for urgent needs."
    },
    {
      icon: <Award className="h-10 w-10 text-secondary-dark" />,
      title: "Certified Expert",
      description: "Our technicians are fully licensed, insured, and undergo continuous training on the latest methods."
    }
  ];

  return (
    <section id="features" className="py-20 relative -mt-16 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 border border-white/50 group"
            >
              <div className="bg-amber-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-heading mb-4">{feature.title}</h3>
              <p className="text-text-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
