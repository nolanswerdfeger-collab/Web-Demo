import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-text-light text-lg">
            Fill out the form below and our team will get back to you within 24 hours with a customized pest control plan.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border border-white/50">
          {isSubmitted ? (
            <div className="text-center py-12 animate-fade-in-up">
              <div className="bg-amber-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-secondary-dark" />
              </div>
              <h3 className="text-2xl font-bold text-heading mb-2">Request Received!</h3>
              <p className="text-text-light">
                Thank you for reaching out. One of our experts will contact you shortly to discuss your pest control needs.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-heading mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full rounded-xl border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary px-4 py-3 border outline-none transition-shadow"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-heading mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full rounded-xl border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary px-4 py-3 border outline-none transition-shadow"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-heading mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full rounded-xl border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary px-4 py-3 border outline-none transition-shadow"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-heading mb-2">Service Needed</label>
                <select 
                  id="service"
                  className="w-full rounded-xl border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary px-4 py-3 border outline-none transition-shadow bg-white"
                >
                  <option>General Pest Control</option>
                  <option>Termite Treatment</option>
                  <option>Rodent Removal</option>
                  <option>Bed Bug Extermination</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-heading mb-2">Additional Details</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full rounded-xl border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary px-4 py-3 border outline-none transition-shadow resize-none"
                  placeholder="Tell us a bit about the pest problem you're experiencing..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Request Free Quote
                <Send className="h-5 w-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
