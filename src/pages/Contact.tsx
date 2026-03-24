import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Clock, 
  ChevronDown, 
  Send, 
  Plus, 
  X, 
  Facebook, 
  Instagram, 
  Twitter, 
  Compass, 
  MessageCircle,
  Loader2
} from 'lucide-react';

const faqs = [
  {
    q: "Do you serve breakfast?",
    a: "We are continually expanding our dining offerings. Please contact us directly at +211 925 754 459 or inquire at our 24-hour front desk for the latest information about breakfast options and meal services. Our on-site minimarket also offers a selection of snacks and beverages for your convenience."
  },
  {
    q: "Is parking available?",
    a: "Yes, we offer complimentary public parking directly on the hotel premises. No advance reservation is required — simply drive in and park at your convenience. The parking area is monitored by our CCTV security system and 24-hour security personnel for your peace of mind."
  },
  {
    q: "Is there a restaurant on-site?",
    a: "Raya Hotel features an on-site minimarket stocked with snacks, beverages, and daily essentials. For full dining experiences, our knowledgeable front desk team is happy to recommend highly-rated nearby restaurants catering to a variety of cuisines and dietary preferences."
  },
  {
    q: "Do you offer airport shuttle service?",
    a: "Juba International Airport is conveniently located just 3 kilometres from Raya Hotel. While we do not currently operate a dedicated shuttle service, our 24-hour front desk team can readily assist you with arranging reliable and safe transportation to and from the airport. Please contact us in advance to make arrangements."
  },
  {
    q: "Is there a swimming pool?",
    a: "Raya Hotel does not currently have a swimming pool facility. However, we invite you to relax and unwind on our beautiful sun terrace with comfortable outdoor furniture, enjoy our spa lounge and relaxation area, or indulge in one of our many rejuvenating massage treatments."
  },
  {
    q: "What restaurants, attractions, and transport options are nearby?",
    a: "Raya Hotel enjoys a prime central location just 1.1 km from the heart of Juba. Notable nearby attractions include:\n• Juba Stadium — 1.9 km\n• John Garang Memorial — 3.5 km\n• Juba Game Reserve — 11 km\n• Juba International Airport — 3 km\nOur front desk team maintains an updated list of recommended restaurants, cultural sites, and can assist with local transportation arrangements."
  },
  {
    q: "What are check-in and check-out times?",
    a: "Check-in is available from 00:00 (midnight), offering maximum flexibility for guests arriving on late flights or at unconventional hours. Check-out is until 11:00. We also offer private check-in/check-out and express check-in/check-out services for your added convenience and privacy. Please contact us if you require special arrangements."
  },
  {
    q: "Is there a spa?",
    a: "Absolutely! Our dedicated spa lounge and relaxation area offers an extensive menu of professional massage treatments, including:\n• Full Body Massage\n• Couples Massage\n• Back Massage\n• Neck Massage\n• Head Massage\n• Hand Massage\n• Foot Massage\nAdditional charges apply for spa services. We recommend booking your preferred treatment through our front desk to ensure availability."
  },
  {
    q: "Do rooms have private bathrooms?",
    a: "Yes, every room at Raya Hotel features a fully private bathroom equipped with a shower, toilet, complimentary toiletries, fresh towels, comfortable slippers, and toilet paper. Additional towels and bed sheets are available for a nominal extra fee upon request."
  },
  {
    q: "What is the Wi-Fi policy?",
    a: "High-speed WiFi internet access is available throughout the entire hotel — in all guest rooms, common areas, the lounge, and outdoor spaces — completely free of charge for all registered guests. No passwords or special registration required; simply connect and enjoy."
  },
  {
    q: "What types of rooms are available?",
    a: "Raya Hotel offers elegantly appointed Double rooms designed for both comfort and functionality. Room views include stunning city panoramas and peaceful inner courtyard vistas. Each room is equipped with air conditioning, a flat-screen TV, work desk, refrigerator, wardrobe, and private bathroom."
  },
  {
    q: "Is the hotel family-friendly?",
    a: "Very much so! Raya Hotel is a popular choice for families. We provide baby safety gates, child safety socket covers, and a selection of books, DVDs, and music for children's entertainment. Our staff is experienced in accommodating families and ensuring a comfortable stay for guests of all ages."
  },
  {
    q: "How far is the hotel from Juba city centre?",
    a: "Raya Hotel is located just 1.1 kilometres from the centre of Juba, making it exceptionally convenient for both business travelers needing access to city offices and leisure travelers wanting to explore Juba's attractions, markets, and cultural sites."
  },
  {
    q: "What activities and services are available at the hotel?",
    a: "Beyond our comprehensive spa and massage services, Raya Hotel offers:\n• Live sport event broadcasts in our shared lounge/TV area\n• A comfortable sun terrace with outdoor seating\n• On-site minimarket for snacks and essentials\n• Barber and beauty shop services\n• Daily housekeeping\n• Laundry and ironing services (additional charges apply)\n• Currency exchange at the front desk\n• 24-hour security and front desk assistance"
  }
];

const SplitText = ({ text, className }: { text: string, className?: string }) => {
  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.03, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [messageLength, setMessageLength] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [newsletterState, setNewsletterState] = useState<'idle' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("RHRW+8J Juba, South Sudan");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterState('success');
    setTimeout(() => setNewsletterState('idle'), 3000);
  };

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-ivory min-h-screen font-sans">
      {/* Section 1: Hero Banner */}
      <section className="relative h-[50vh] md:h-[70vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562790351-d273a961e0e9?q=80&w=2000&auto=format&fit=crop" 
            alt="Hotel Reception" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-[#1a1a1a]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3b2f2f]/80 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl mt-16">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center mb-6"
          >
            <p className="text-white/60 text-[13px] tracking-[2px] uppercase font-sans mb-4">
              <Link to="/" className="hover:text-gold-primary relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-primary transition-all duration-300 group-hover:w-full" />
              </Link> 
              <span className="text-gold-primary mx-2">&gt;</span> 
              Contact Us
            </p>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              className="h-[1px] bg-gold-primary mb-2"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="text-gold-primary text-[10px]"
            >
              ◆
            </motion.div>
          </motion.div>

          <h1 className="font-serif font-bold text-[36px] md:text-[48px] lg:text-[72px] text-white tracking-[-1px] mb-6">
            <SplitText text="Get in Touch" />
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-[16px] md:text-[18px] text-white/85 max-w-[600px] leading-[1.7] mb-10"
          >
            We're here to help craft your perfect stay. Reach out anytime — our team is available around the clock.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="tel:+211925754459"
              className="group flex items-center justify-center gap-3 bg-gold-primary text-charcoal-deep px-9 py-4 rounded font-semibold text-[15px] tracking-[1px] uppercase transition-all duration-400 hover:bg-gold-light hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(200,169,110,0.4)]"
            >
              <Phone size={18} className="transition-transform duration-300 group-hover:rotate-15" />
              Call Us Now
            </a>
            <button 
              onClick={scrollToForm}
              className="group relative overflow-hidden border-2 border-gold-primary text-white px-9 py-4 rounded font-semibold text-[15px] tracking-[1px] uppercase transition-all duration-400 hover:text-charcoal-deep"
            >
              <span className="absolute inset-0 bg-gold-primary w-0 group-hover:w-full transition-all duration-400 ease-out" />
              <span className="relative z-10">Send a Message</span>
            </button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ opacity: scrolled ? 0 : 1 }}
          className="absolute bottom-8 flex flex-col items-center z-10"
        >
          <div className="w-[1px] h-[40px] bg-gold-primary/30 relative mb-3">
            <motion.div 
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-[2.5px] top-0 w-[6px] h-[6px] rounded-full bg-gold-primary"
            />
          </div>
          <span className="text-[11px] uppercase tracking-[3px] text-white/50 font-sans">Scroll Down</span>
        </motion.div>
      </section>

      {/* Section 2: Contact Information Cards */}
      <section className="py-[60px] md:py-[120px] bg-[#FAF6F0] relative">
        <div className="absolute inset-0 opacity-3 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-primary text-[12px] font-semibold tracking-[4px] uppercase mb-4"
            >
              Reach Out To Us
            </motion.p>
            <h2 className="font-serif text-[32px] md:text-[44px] text-charcoal-deep mb-6">
              <SplitText text="Multiple Ways to Connect" />
            </h2>
            <div className="flex flex-col items-center mb-6">
              <div className="h-[1px] w-[40px] bg-gold-primary mb-1" />
              <div className="text-gold-primary text-[8px]">◆</div>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[#666] text-[16px] max-w-[550px] mx-auto"
            >
              Whether you prefer a phone call, email, or visiting us in person, our dedicated team is always ready to assist you.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-[1200px] mx-auto">
            {/* Card 1: Visit Us */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white border border-gold-primary/15 border-t-4 border-t-gold-primary rounded-lg p-9 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-[6px] hover:border-t-[#D4B87A] transition-all duration-400 group"
            >
              <div className="w-[80px] h-[80px] rounded-full bg-gold-primary/10 flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-gold-primary w-12 h-12 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
              <h3 className="font-serif text-[24px] text-charcoal-deep text-center mb-4">Visit Us</h3>
              <div className="text-center">
                <p className="text-[16px] text-[#333] leading-[1.6] mb-2">Haimayo, Juba, South Sudan</p>
                <div className="flex items-center justify-center gap-2 text-[14px] text-[#888] mb-4">
                  <span>RHRW+8J Juba, South Sudan</span>
                  <button onClick={handleCopy} className="hover:text-gold-primary transition-colors relative" title="Copy Plus Code">
                    {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                    <AnimatePresence>
                      {copied && (
                        <motion.span 
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: -25 }}
                          exit={{ opacity: 0 }}
                          className="absolute -top-6 left-1/2 -translate-x-1/2 bg-charcoal-deep text-white text-[10px] px-2 py-1 rounded whitespace-nowrap"
                        >
                          Copied!
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  <span className="bg-gold-primary/10 px-3.5 py-1.5 rounded-full text-[13px] text-[#666]">📍 1.1 km from City Centre</span>
                  <span className="bg-gold-primary/10 px-3.5 py-1.5 rounded-full text-[13px] text-[#666]">✈️ 3 km from Juba Airport</span>
                </div>
                <a href="https://maps.google.com/?q=Raya+Hotel+Juba" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[14px] text-gold-primary uppercase tracking-[1px] font-medium group-hover:text-gold-deep transition-colors">
                  Get Directions <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>

            {/* Card 2: Call Us */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border border-gold-primary/15 border-t-4 border-t-gold-primary rounded-lg p-9 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-[6px] hover:border-t-[#D4B87A] transition-all duration-400 group"
            >
              <div className="w-[80px] h-[80px] rounded-full bg-gold-primary/10 flex items-center justify-center mx-auto mb-6">
                <Phone className="text-gold-primary w-12 h-12 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
              <h3 className="font-serif text-[24px] text-charcoal-deep text-center mb-4">Call Us</h3>
              <div className="text-center">
                <a href="tel:+211925754459" className="block font-sans font-semibold text-[22px] text-charcoal-deep hover:text-gold-primary transition-colors mb-2">
                  +211 925 754 459
                </a>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-[#4CAF50]"
                  />
                  <span className="text-[14px] text-[#4CAF50]">Available 24/7</span>
                </div>
                <p className="text-[14px] text-[#888] italic mb-4">Our reception team speaks English and Arabic</p>
                <ul className="text-left text-[13px] text-[#666] space-y-1 mb-8 inline-block">
                  <li className="flex items-center gap-2"><Check size={12} className="text-gold-primary" /> Room reservations</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-gold-primary" /> Spa treatment booking</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-gold-primary" /> Airport transfers</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-gold-primary" /> General inquiries</li>
                </ul>
                <div className="text-center">
                  <a href="tel:+211925754459" className="inline-flex items-center text-[14px] text-gold-primary uppercase tracking-[1px] font-medium group-hover:text-gold-deep transition-colors">
                    Call Now <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Email Us */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="bg-white border border-gold-primary/15 border-t-4 border-t-gold-primary rounded-lg p-9 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-[6px] hover:border-t-[#D4B87A] transition-all duration-400 group lg:col-span-1 md:col-span-2 md:w-1/2 md:mx-auto lg:w-full"
            >
              <div className="w-[80px] h-[80px] rounded-full bg-gold-primary/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="text-gold-primary w-12 h-12 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
              <h3 className="font-serif text-[24px] text-charcoal-deep text-center mb-4">Email Us</h3>
              <div className="text-center">
                <a href="mailto:info@rayahoteljuba.com" className="inline-block font-sans font-medium text-[18px] text-charcoal-deep hover:text-gold-primary transition-colors mb-2 relative group-hover:after:w-full after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-gold-primary after:transition-all after:duration-300">
                  info@rayahoteljuba.com
                </a>
                <div className="flex items-center justify-center gap-2 text-[14px] text-[#888] mb-4 mt-2">
                  <Clock size={14} />
                  <span>We respond within 24 hours</span>
                </div>
                <ul className="text-left text-[13px] text-[#666] space-y-1 mb-8 inline-block">
                  <li className="flex items-center gap-2"><Check size={12} className="text-gold-primary" /> Group booking inquiries</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-gold-primary" /> Special event requests</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-gold-primary" /> Corporate partnerships</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-gold-primary" /> Feedback & suggestions</li>
                </ul>
                <div className="text-center">
                  <a href="mailto:info@rayahoteljuba.com" className="inline-flex items-center text-[14px] text-gold-primary uppercase tracking-[1px] font-medium group-hover:text-gold-deep transition-colors">
                    Send Email <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Contact Form */}
      <section id="contact-form" className="py-[120px] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <p className="text-gold-primary text-[12px] font-semibold tracking-[2px] uppercase mb-4">Send Us A Message</p>
              <h2 className="font-serif text-[40px] text-charcoal-deep mb-4">We'd Love to Hear From You</h2>
              <p className="text-[#666] text-[16px] mb-10 max-w-[600px]">
                Fill out the form below and our team will get back to you promptly. Whether it's a booking inquiry, special request, or just a question — we're all ears.
              </p>

              <form onSubmit={handleFormSubmit} className="max-w-[600px] space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Full Name */}
                  <div className="relative">
                    <input 
                      type="text" 
                      id="fullName" 
                      required 
                      placeholder=" "
                      className="peer w-full border-b-2 border-[#E0E0E0] focus:border-gold-primary bg-transparent pt-5 pb-2 text-[16px] text-charcoal-deep outline-none transition-colors"
                    />
                    <label 
                      htmlFor="fullName" 
                      className="absolute left-0 top-4 text-[#888] text-[16px] transition-all duration-300 peer-focus:-top-2 peer-focus:text-[12px] peer-focus:text-gold-primary peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[12px]"
                    >
                      Full Name *
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      placeholder=" "
                      className="peer w-full border-b-2 border-[#E0E0E0] focus:border-gold-primary bg-transparent pt-5 pb-2 text-[16px] text-charcoal-deep outline-none transition-colors"
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute left-0 top-4 text-[#888] text-[16px] transition-all duration-300 peer-focus:-top-2 peer-focus:text-[12px] peer-focus:text-gold-primary peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[12px]"
                    >
                      Email Address *
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Phone */}
                  <div className="relative">
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder=" "
                      className="peer w-full border-b-2 border-[#E0E0E0] focus:border-gold-primary bg-transparent pt-5 pb-2 text-[16px] text-charcoal-deep outline-none transition-colors"
                    />
                    <label 
                      htmlFor="phone" 
                      className="absolute left-0 top-4 text-[#888] text-[16px] transition-all duration-300 peer-focus:-top-2 peer-focus:text-[12px] peer-focus:text-gold-primary peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[12px]"
                    >
                      Phone Number
                    </label>
                  </div>

                  {/* Subject */}
                  <div className="relative">
                    <select 
                      id="subject" 
                      required 
                      className="peer w-full border-b-2 border-[#E0E0E0] focus:border-gold-primary bg-transparent pt-5 pb-2 text-[16px] text-charcoal-deep outline-none transition-colors appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled hidden></option>
                      <option value="room">Room Reservation</option>
                      <option value="spa">Spa & Massage Booking</option>
                      <option value="group">Group Booking Inquiry</option>
                      <option value="transfer">Airport Transfer Request</option>
                      <option value="event">Event & Conference Inquiry</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-5 text-gold-primary pointer-events-none" size={20} />
                    <label 
                      htmlFor="subject" 
                      className="absolute left-0 top-4 text-[#888] text-[16px] transition-all duration-300 peer-focus:-top-2 peer-focus:text-[12px] peer-focus:text-gold-primary peer-valid:-top-2 peer-valid:text-[12px]"
                    >
                      Subject *
                    </label>
                  </div>
                </div>

                {/* Check-in Date */}
                <div className="relative">
                  <input 
                    type="date" 
                    id="checkin" 
                    min={new Date().toISOString().split('T')[0]}
                    className="peer w-full border-b-2 border-[#E0E0E0] focus:border-gold-primary bg-transparent pt-5 pb-2 text-[16px] text-charcoal-deep outline-none transition-colors"
                  />
                  <label 
                    htmlFor="checkin" 
                    className="absolute left-0 -top-2 text-[#888] text-[12px] transition-all duration-300 peer-focus:text-gold-primary"
                  >
                    Preferred Check-in Date
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea 
                    id="message" 
                    rows={5} 
                    required 
                    placeholder=" "
                    onChange={(e) => setMessageLength(e.target.value.length)}
                    maxLength={500}
                    className="peer w-full border-2 border-[#E0E0E0] rounded-md focus:border-gold-primary bg-transparent p-4 pt-6 text-[16px] text-charcoal-deep outline-none transition-colors resize-y min-h-[150px]"
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-4 top-5 text-[#888] text-[16px] transition-all duration-300 peer-focus:top-2 peer-focus:text-[12px] peer-focus:text-gold-primary peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-[12px]"
                  >
                    Your Message *
                  </label>
                  <div className={`absolute bottom-3 right-4 text-[12px] ${messageLength > 450 ? 'text-red-500' : messageLength > 400 ? 'text-orange-500' : 'text-[#888]'}`}>
                    {messageLength} / 500
                  </div>
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <div className="relative flex items-center justify-center mt-1">
                    <input type="checkbox" id="consent" required className="peer appearance-none w-5 h-5 border-2 border-gold-primary rounded-sm checked:bg-gold-primary cursor-pointer transition-colors" />
                    <Check size={14} className="absolute text-white pointer-events-none opacity-0 peer-checked:opacity-100" />
                  </div>
                  <label htmlFor="consent" className="text-[13px] text-[#888] leading-relaxed cursor-pointer">
                    I agree to the <a href="#" className="text-gold-primary hover:underline">Privacy Policy</a> and consent to Raya Hotel Juba processing my personal data to respond to my inquiry.
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={formState === 'loading' || formState === 'success'}
                  className={`w-full md:w-auto min-w-[220px] flex items-center justify-center gap-2 px-12 py-[18px] rounded font-bold text-[15px] uppercase tracking-[2px] transition-all duration-300
                    ${formState === 'success' 
                      ? 'bg-[#4CAF50] text-white' 
                      : 'bg-gold-primary text-charcoal-deep hover:bg-[#D4B87A] hover:shadow-[0_8px_30px_rgba(200,169,110,0.35)] active:scale-95'
                    }
                    ${formState === 'loading' ? 'opacity-80 cursor-not-allowed' : ''}
                  `}
                >
                  {formState === 'idle' && (
                    <>
                      Send Message <Send size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                  {formState === 'loading' && (
                    <>
                      Sending... <Loader2 size={18} className="animate-spin ml-1" />
                    </>
                  )}
                  {formState === 'success' && (
                    <>
                      Message Sent! <Check size={18} className="ml-1" />
                    </>
                  )}
                </button>

                {/* Success Message Panel */}
                <AnimatePresence>
                  {formState === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      className="border border-[#4CAF50] bg-[#4CAF50]/10 rounded-lg p-6 flex items-start gap-4"
                    >
                      <div className="bg-[#4CAF50] text-white p-1 rounded-full shrink-0">
                        <Check size={16} />
                      </div>
                      <div>
                        <h4 className="font-serif font-semibold text-[18px] text-charcoal-deep mb-1">Thank You!</h4>
                        <p className="text-[14px] text-[#666] leading-relaxed">
                          Your message has been received. Our team will respond within 24 hours. For urgent matters, please call us at +211 925 754 459.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* Right Column: Decorative */}
            <div className="lg:col-span-5 mt-12 lg:mt-0">
              <div className="relative p-[15px] mb-10">
                {/* Gold Frame Offset */}
                <div className="absolute inset-0 border-2 border-gold-primary rounded-lg translate-x-[15px] translate-y-[15px] z-0" />
                
                <motion.div 
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  whileInView={{ clipPath: 'inset(0 0 0 0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative z-10 rounded-lg overflow-hidden aspect-[3/4]"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop" 
                    alt="Hotel Interior" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>

              <div className="bg-[#FAF6F0] p-8 rounded-lg mt-12">
                <h3 className="font-serif text-[20px] text-charcoal-deep mb-6">Quick Contact</h3>
                <div className="space-y-4 text-[15px]">
                  <a href="tel:+211925754459" className="flex items-center gap-3 text-charcoal-deep hover:text-gold-primary transition-colors">
                    <Phone size={18} className="text-gold-primary" /> +211 925 754 459
                  </a>
                  <a href="mailto:info@rayahoteljuba.com" className="flex items-center gap-3 text-charcoal-deep hover:text-gold-primary transition-colors">
                    <Mail size={18} className="text-gold-primary" /> info@rayahoteljuba.com
                  </a>
                  <div className="flex items-center gap-3 text-[#666]">
                    <Clock size={18} className="text-gold-primary" /> Front Desk: Open 24/7
                  </div>
                  <div className="flex items-center gap-3 text-[#666] pt-2">
                    <span className="text-gold-primary font-medium">Languages:</span> 🇬🇧 English, 🇸🇦 Arabic
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Interactive Google Map */}
      <section className="w-full h-[350px] md:h-[500px] relative bg-[#E5E3DF]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.068335962071!2d31.5999!3d4.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1712810000000001%3A0x0!2zNMKwNTEnMDAuMCJOIDMxwrAzNSc1OS42IkU!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1) opacity(0.9)' }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Raya Hotel Juba Location"
        ></iframe>
        
        {/* Overlay Banner */}
        <div className="absolute top-0 left-0 w-full bg-[#1a1a1a]/85 backdrop-blur-md py-4 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-white font-sans text-[14px]">
            <div className="flex items-center gap-2">
              <span>📍</span> Haimayo, Juba, South Sudan
            </div>
            <div className="hidden md:block text-white/70">
              Just 3 km from Juba International Airport
            </div>
            <a href="https://maps.google.com/?q=Raya+Hotel+Juba" target="_blank" rel="noopener noreferrer" className="text-gold-primary hover:text-white transition-colors font-medium flex items-center gap-1">
              Get Directions <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: Comprehensive FAQ Section */}
      <section className="py-[120px] bg-[#FAF6F0]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold-primary text-[12px] font-semibold tracking-[2px] uppercase mb-4">Frequently Asked Questions</p>
            <h2 className="font-serif text-[36px] md:text-[42px] text-charcoal-deep mb-4">Everything You Need to Know</h2>
            <p className="text-[#666] text-[16px] max-w-[600px] mx-auto">
              Find answers to the most common questions about Raya Hotel Juba. Can't find what you're looking for? Don't hesitate to contact us directly.
            </p>
          </div>

          <div className="space-y-2 mb-16">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border-b border-gold-primary/20 py-6"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <div className="flex items-center gap-4 pr-8">
                    <span className="font-sans font-semibold text-[14px] text-gold-primary">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className={`font-sans font-medium text-[17px] transition-all duration-300 ${openFaq === index ? 'text-gold-primary translate-x-1' : 'text-charcoal-deep group-hover:text-gold-primary group-hover:translate-x-1'}`}>
                      {faq.q}
                    </span>
                  </div>
                  <div className={`text-gold-primary transition-transform duration-300 shrink-0 ${openFaq === index ? 'rotate-45' : ''}`}>
                    <Plus size={24} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 text-[15px] text-[#666] leading-[1.8] font-sans whitespace-pre-line pl-9">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="text-center bg-white p-10 rounded-xl shadow-sm border border-gold-primary/10">
            <h3 className="font-serif text-[24px] text-charcoal-deep mb-2">Still Have Questions?</h3>
            <p className="text-[#666] text-[15px] mb-8">Our friendly team is just a call or message away.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+211925754459" className="bg-gold-primary text-charcoal-deep px-8 py-3 rounded font-semibold text-[14px] uppercase tracking-[1px] hover:bg-gold-light transition-colors">
                Call Us
              </a>
              <button onClick={scrollToForm} className="border-2 border-gold-primary text-gold-primary px-8 py-3 rounded font-semibold text-[14px] uppercase tracking-[1px] hover:bg-gold-primary hover:text-white transition-colors">
                Send a Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Social Media & Connect */}
      <section className="py-[80px] bg-[#1A1A1A] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gold-primary text-[12px] font-semibold tracking-[2px] uppercase mb-4">Stay Connected</p>
          <h2 className="font-serif text-[36px] text-white mb-4">Follow Our Journey</h2>
          <p className="text-white/70 text-[16px] mb-12 max-w-[500px] mx-auto">
            Stay updated with the latest news, offers, and glimpses of life at Raya Hotel Juba.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mb-12">
            {[
              { icon: <Facebook size={24} />, color: 'hover:bg-[#1877F2] hover:border-[#1877F2]' },
              { icon: <Instagram size={24} />, color: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent' },
              { icon: <Twitter size={24} />, color: 'hover:bg-[#000000] hover:border-[#000000]' },
              { icon: <Compass size={24} />, color: 'hover:bg-[#34E0A1] hover:border-[#34E0A1]' },
              { icon: <MessageCircle size={24} />, color: 'hover:bg-[#25D366] hover:border-[#25D366]' }
            ].map((social, idx) => (
              <motion.a 
                key={idx}
                href="#"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: idx * 0.1 }}
                className={`w-[60px] h-[60px] rounded-full border-2 border-gold-primary flex items-center justify-center text-gold-primary transition-all duration-300 hover:text-white hover:scale-110 ${social.color}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 text-white/80 text-[15px]">
            <span>Or message us directly on WhatsApp:</span>
            <a href="https://wa.me/211925754459" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#25D366] hover:text-white transition-colors font-medium">
              <MessageCircle size={18} /> +211 925 754 459
            </a>
          </div>
        </div>
      </section>

      {/* Section 7: Newsletter Signup Strip */}
      <section className="bg-[#3B2F2F] py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="font-serif text-[24px] text-white mb-2">Subscribe to Our Newsletter</h2>
              <p className="text-white/70 text-[14px] font-sans">Receive exclusive offers, travel tips, and updates from Raya Hotel Juba.</p>
            </div>
            
            <div className="w-full md:w-auto min-w-[300px] lg:min-w-[400px]">
              <AnimatePresence mode="wait">
                {newsletterState === 'idle' ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleNewsletterSubmit} 
                    className="flex w-full"
                  >
                    <input 
                      type="email" 
                      required
                      placeholder="Enter your email address" 
                      className="flex-grow bg-white/10 border border-gold-primary/40 text-white placeholder:text-white/50 px-5 py-[14px] rounded-l-md outline-none focus:border-gold-primary transition-colors text-[14px]"
                    />
                    <button 
                      type="submit"
                      className="bg-gold-primary text-charcoal-deep px-6 py-[14px] rounded-r-md font-semibold text-[14px] hover:bg-gold-light transition-colors"
                    >
                      Subscribe
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-2 text-[#4CAF50] bg-[#4CAF50]/10 border border-[#4CAF50]/30 px-5 py-[14px] rounded-md w-full"
                  >
                    <Check size={18} />
                    <span className="font-medium text-[14px]">Thank you for subscribing!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper component for the map overlay chevron
const ChevronRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);
