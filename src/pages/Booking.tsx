import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Users, BedDouble, MessageSquare, CheckCircle, PhoneCall, Mail, ShieldCheck, Clock } from 'lucide-react';
import React, { useState } from 'react';

export default function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="w-full bg-cream">
      {/* Section 1: Hero Banner */}
      <section className="relative h-[30vh] md:h-[40vh] w-full overflow-hidden bg-charcoal-deep flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop" 
            alt="Booking Hero" 
            className="w-full h-full object-cover opacity-50"
            style={{ objectPosition: 'center 70%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/40 to-charcoal-deep/80" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="text-white/70 text-[13px] tracking-[2px] mb-4 font-dm uppercase">
            <Link to="/" className="hover:underline">Home</Link> <span className="text-gold-primary mx-2">&gt;</span> Reservation
          </p>
          <h1 className="font-serif text-[36px] md:text-[56px] text-white mb-4">Book Your Stay</h1>
          <div className="w-[60px] h-[2px] bg-gold-primary mx-auto mt-6" />
        </div>
      </section>

      {/* Section 2: Booking Form & Info */}
      <section className="py-[80px] px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
          
          {/* Left Column: Reservation Form */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gold-primary/10">
            <div className="mb-10">
              <h2 className="font-serif text-[32px] text-espresso mb-3">Reservation Request</h2>
              <p className="text-brown-warm text-[15px] font-dm">Fill out the form below to request a booking. Our team will contact you shortly to confirm availability and finalize your reservation.</p>
            </div>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-sage/10 border border-sage/20 rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-sage" />
                </div>
                <h3 className="font-serif text-[24px] text-espresso mb-3">Request Received</h3>
                <p className="text-brown-warm font-dm mb-6">Thank you for choosing Raya Hotel Juba. We have received your reservation request and our team will contact you via email or phone within 2 hours to confirm your booking.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-gold-primary font-medium text-[14px] uppercase tracking-[1px] hover:text-gold-light transition-colors"
                >
                  Make Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Dates & Guests */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-[13px] text-espresso uppercase tracking-[1px] font-semibold mb-3">
                      <Calendar size={16} className="text-gold-primary" /> Check-in Date *
                    </label>
                    <input 
                      type="date" 
                      required
                      className="w-full border border-[#E5E5E5] rounded-lg p-4 text-[15px] font-dm focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-all bg-[#FAFAFA]" 
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-[13px] text-espresso uppercase tracking-[1px] font-semibold mb-3">
                      <Calendar size={16} className="text-gold-primary" /> Check-out Date *
                    </label>
                    <input 
                      type="date" 
                      required
                      className="w-full border border-[#E5E5E5] rounded-lg p-4 text-[15px] font-dm focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-all bg-[#FAFAFA]" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-[13px] text-espresso uppercase tracking-[1px] font-semibold mb-3">
                      <Users size={16} className="text-gold-primary" /> Guests *
                    </label>
                    <select 
                      required
                      defaultValue=""
                      className="w-full border border-[#E5E5E5] rounded-lg p-4 text-[15px] font-dm focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-all bg-[#FAFAFA] appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23C8A96E'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                    >
                      <option value="">Select Guests</option>
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">2 Adults, 1 Child</option>
                      <option value="4">2 Adults, 2 Children</option>
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-[13px] text-espresso uppercase tracking-[1px] font-semibold mb-3">
                      <BedDouble size={16} className="text-gold-primary" /> Room Type *
                    </label>
                    <select 
                      required
                      defaultValue=""
                      className="w-full border border-[#E5E5E5] rounded-lg p-4 text-[15px] font-dm focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-all bg-[#FAFAFA] appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23C8A96E'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                    >
                      <option value="">Select Room</option>
                      <option value="standard">Standard Double Room (20 m²)</option>
                      <option value="deluxe">Deluxe Double Room (25 m²)</option>
                      <option value="premium">Premium Double Suite (35 m²)</option>
                    </select>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-[#E5E5E5] my-8" />

                {/* Personal Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] text-espresso uppercase tracking-[1px] font-semibold mb-3">First Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John"
                      className="w-full border border-[#E5E5E5] rounded-lg p-4 text-[15px] font-dm focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-all bg-[#FAFAFA]" 
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] text-espresso uppercase tracking-[1px] font-semibold mb-3">Last Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Doe"
                      className="w-full border border-[#E5E5E5] rounded-lg p-4 text-[15px] font-dm focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-all bg-[#FAFAFA]" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] text-espresso uppercase tracking-[1px] font-semibold mb-3">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@example.com"
                      className="w-full border border-[#E5E5E5] rounded-lg p-4 text-[15px] font-dm focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-all bg-[#FAFAFA]" 
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] text-espresso uppercase tracking-[1px] font-semibold mb-3">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+211 9XX XXX XXX"
                      className="w-full border border-[#E5E5E5] rounded-lg p-4 text-[15px] font-dm focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-all bg-[#FAFAFA]" 
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[13px] text-espresso uppercase tracking-[1px] font-semibold mb-3">
                    <MessageSquare size={16} className="text-gold-primary" /> Special Requests
                  </label>
                  <textarea 
                    rows={4} 
                    placeholder="E.g., Airport transfer needed, dietary requirements, late arrival..."
                    className="w-full border border-[#E5E5E5] rounded-lg p-4 text-[15px] font-dm focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary transition-all bg-[#FAFAFA] resize-none"
                  ></textarea>
                  <p className="text-[12px] text-[#888] mt-2 font-dm italic">Special requests cannot be guaranteed – but we will do our best to meet your needs.</p>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gold-primary text-charcoal-deep font-semibold text-[15px] uppercase tracking-[2px] py-5 rounded-lg hover:bg-[#B39359] transition-colors flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-charcoal-deep" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Submit Reservation Request'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Info */}
          <div className="space-y-8">
            {/* Why Book Direct */}
            <div className="bg-charcoal-deep text-white p-8 rounded-2xl">
              <h3 className="font-serif text-[24px] mb-6 flex items-center gap-3">
                <ShieldCheck className="text-gold-primary" /> Why Book Direct?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[15px] font-medium font-dm mb-1">Best Rate Guarantee</strong>
                    <p className="text-[13px] text-white/70 font-dm">You won't find a lower price anywhere else online.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[15px] font-medium font-dm mb-1">Flexible Cancellation</strong>
                    <p className="text-[13px] text-white/70 font-dm">More flexible terms when you book directly with us.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[15px] font-medium font-dm mb-1">Priority Upgrades</strong>
                    <p className="text-[13px] text-white/70 font-dm">Direct bookers are first in line for complimentary room upgrades.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div className="bg-white p-8 rounded-2xl border border-[#E5E5E5]">
              <h3 className="font-serif text-[22px] text-espresso mb-6">Need to Know</h3>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <Clock size={20} className="text-gold-primary shrink-0" />
                  <div>
                    <strong className="block text-[14px] text-espresso font-semibold mb-1">Check-in / Check-out</strong>
                    <p className="text-[13px] text-brown-warm font-dm">Check-in from 12:00 PM<br/>Check-out by 10:00 AM</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <ShieldCheck size={20} className="text-gold-primary shrink-0" />
                  <div>
                    <strong className="block text-[14px] text-espresso font-semibold mb-1">Cancellation Policy</strong>
                    <p className="text-[13px] text-brown-warm font-dm">Free cancellation up to 24 hours before arrival date.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Users size={20} className="text-gold-primary shrink-0" />
                  <div>
                    <strong className="block text-[14px] text-espresso font-semibold mb-1">Children & Extra Beds</strong>
                    <p className="text-[13px] text-brown-warm font-dm">Children of any age are welcome. Extra beds available upon request.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Section 3: Contact Alternative */}
      <section className="py-[60px] bg-white border-t border-[#E5E5E5] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-[28px] text-espresso mb-4">Prefer to Speak with Us?</h2>
          <p className="text-brown-warm text-[16px] font-dm mb-8">Our reservations team is available 24/7 to assist you with your booking.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:+211925754459" className="flex items-center justify-center gap-3 bg-ivory border border-gold-primary/30 px-8 py-4 rounded-lg hover:bg-gold-primary/10 transition-colors group">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <PhoneCall size={18} className="text-gold-primary" />
              </div>
              <div className="text-left">
                <span className="block text-[11px] uppercase tracking-[1px] text-[#888] font-semibold">Call Us</span>
                <span className="block text-[16px] text-espresso font-medium font-dm">+211 925 754 459</span>
              </div>
            </a>
            
            <a href="mailto:info@rayahoteljuba.com" className="flex items-center justify-center gap-3 bg-ivory border border-gold-primary/30 px-8 py-4 rounded-lg hover:bg-gold-primary/10 transition-colors group">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Mail size={18} className="text-gold-primary" />
              </div>
              <div className="text-left">
                <span className="block text-[11px] uppercase tracking-[1px] text-[#888] font-semibold">Email Us</span>
                <span className="block text-[16px] text-espresso font-medium font-dm">info@rayahoteljuba.com</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
