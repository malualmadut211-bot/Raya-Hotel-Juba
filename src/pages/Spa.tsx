import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Phone, MessageCircle, Bell, Flower2, Scissors, Sparkles, Droplets, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const treatments = [
  {
    id: 1,
    name: "Full Body Massage",
    desc: "Our signature full body massage is a comprehensive head-to-toe experience that targets every major muscle group. Using long, flowing strokes combined with deep tissue techniques, our therapists work to release stored tension, improve circulation, and promote a profound sense of well-being. This treatment is ideal for those seeking total relaxation and physical relief from the stresses of daily life or travel fatigue. Surrender to the experience and emerge feeling completely renewed.",
    duration: "60 / 90 min",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop",
    tag: "Most Popular",
    tagColor: "bg-gold-primary text-charcoal-deep"
  },
  {
    id: 2,
    name: "Couples Massage",
    desc: "Share the gift of relaxation with someone special. Our couples massage takes place in our dedicated dual treatment space, where you and your partner, friend, or family member can enjoy simultaneous massages side by side. The experience is tailored to each individual's preferences, so each person receives the perfect pressure and focus areas. It's an unforgettable bonding experience wrapped in tranquility and care.",
    duration: "60 / 90 min",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop",
    tag: "Perfect for Two",
    tagColor: "bg-[#E8C3C3] text-charcoal-deep"
  },
  {
    id: 3,
    name: "Back Massage",
    desc: "Focused, targeted relief for one of the body's most tension-prone areas. Our back massage concentrates on the muscles of the upper and lower back, shoulders, and spine, using a combination of kneading, pressure point work, and long strokes to release deep-seated knots and stiffness. Whether your tension comes from desk work, travel, or daily stress, this treatment provides immediate and lasting relief.",
    duration: "30 / 45 min",
    image: "https://images.unsplash.com/photo-1600334129128-685054110de4?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Neck Massage",
    desc: "The neck carries an extraordinary amount of tension, especially for travelers and professionals. This specialized treatment focuses exclusively on the neck, upper shoulders, and base of the skull, using precise pressure techniques to release stiffness, improve range of motion, and alleviate headache-causing tension. Feel the weight of the world lift from your shoulders.",
    duration: "20 / 30 min",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Head Massage",
    desc: "An ancient practice with modern benefits. Our head massage incorporates gentle yet effective techniques applied to the scalp, temples, and forehead. This deeply relaxing treatment stimulates blood flow to the head, relieves headaches and mental fatigue, and induces a meditative state of calm. Many guests report this as their most unexpectedly transformative experience.",
    duration: "20 / 30 min",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Hand Massage",
    desc: "Our hands work tirelessly every day yet rarely receive the care they deserve. This nurturing treatment focuses on the hands, wrists, and forearms, using targeted pressure and gentle stretching to relieve tension from typing, gripping, and daily activities. The treatment includes moisturizing elements that leave your hands feeling soft, supple, and deeply relaxed.",
    duration: "15 / 20 min",
    image: "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Foot Massage",
    desc: "Inspired by reflexology principles, our foot massage targets key pressure points in the feet that correspond to various organs and systems throughout the body. Beyond the immediate pleasure of tension release in tired, aching feet, this treatment promotes improved circulation, reduced swelling, and a surprising sense of full-body relaxation. Perfect after a long day of meetings or exploring Juba.",
    duration: "20 / 30 min",
    image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=1000&auto=format&fit=crop"
  }
];

const SplitText = ({ text, className }: { text: string, className?: string }) => {
  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

export default function Spa() {
  const scrollToTreatments = () => {
    document.getElementById('treatments')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-ivory min-h-screen font-sans">
      {/* Section 1: Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop" 
            alt="Serene Spa" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Espresso-tinted gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#3b2f2f]/40 to-[#1a1a1a]/75" />
        
        {/* Bokeh particles */}
        <div className="absolute inset-0 z-15 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gold-primary/20 blur-xl"
              style={{
                width: Math.random() * 100 + 50 + 'px',
                height: Math.random() * 100 + 50 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -1000],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
          >
            <Flower2 size={400} className="text-gold-primary" strokeWidth={0.5} />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#7A8B6F] font-medium text-[13px] tracking-[3px] uppercase mb-6"
          >
            Wellness & Relaxation
          </motion.p>
          
          <h1 className="font-serif font-bold text-4xl md:text-[64px] text-white mb-6 leading-tight">
            <SplitText text="Nurture Your Body," />
            <br />
            <SplitText text="Calm Your Mind" />
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[19px] text-white/85 font-light max-w-[560px] mx-auto mb-10 leading-relaxed"
          >
            Discover our curated collection of spa treatments designed for complete rejuvenation and inner peace
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            onClick={scrollToTreatments}
            className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-charcoal-deep transition-colors uppercase tracking-[2px] font-semibold text-[13px]"
          >
            Explore Treatments ↓
          </motion.button>
        </div>
      </section>

      {/* Section 2: Spa Philosophy */}
      <section className="py-[100px] bg-[#F5EDE3]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold-primary">
              <motion.path
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M2 12h20"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="font-cormorant text-[21px] text-[#3b2f2f] leading-[1.8] mb-16"
          >
            The Raya Hotel Spa Lounge is your personal sanctuary of tranquility in the heart of Juba. Step through our doors and leave the outside world behind. In our thoughtfully designed relaxation space, soft lighting, warm tones, and calming aromas create an atmosphere of total serenity. Our skilled therapists bring years of experience and genuine care to every treatment, using expert techniques to dissolve tension, restore balance, and guide you toward deep, lasting relaxation. Whether you're seeking relief from travel fatigue, recovery from a demanding day, or simply a moment of pure indulgence — your wellness journey begins here.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Wind className="w-8 h-8" />, title: "Relaxation", desc: "Release tension and find your calm" },
              { icon: <Droplets className="w-8 h-8" />, title: "Restoration", desc: "Recover and rejuvenate body and mind" },
              { icon: <Sparkles className="w-8 h-8" />, title: "Renewal", desc: "Emerge refreshed and revitalized" }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="text-gold-primary mb-4">{pillar.icon}</div>
                <h3 className="font-semibold text-[16px] text-charcoal-deep mb-2">{pillar.title}</h3>
                <p className="text-[14px] text-gray-500">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Treatment Menu */}
      <section id="treatments" className="py-[120px] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold-primary text-[13px] font-semibold tracking-[2px] uppercase mb-4">Our Treatments</p>
            <h2 className="font-serif text-[36px] md:text-[42px] text-charcoal-deep mb-4">Curated Spa Experiences</h2>
            <p className="text-brown-warm text-[16px] max-w-2xl mx-auto mb-8">
              Each treatment is performed by skilled therapists in our tranquil spa lounge
            </p>
            <div className="w-24 h-[2px] bg-gold-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, idx) => (
              <motion.div 
                key={treatment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 2) * 0.2 }}
                className="bg-[#FAF6F0] rounded-[16px] overflow-hidden group hover:-translate-y-[6px] hover:shadow-xl transition-all duration-400 border-t-0 hover:border-t-[3px] border-gold-primary flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={treatment.name} 
                    className="w-full h-full object-cover saturate-90 brightness-105 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {treatment.tag && (
                    <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-[1px] uppercase ${treatment.tagColor}`}>
                      {treatment.tag}
                    </div>
                  )}
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-serif font-semibold text-[24px] text-[#3b2f2f]">{treatment.name}</h3>
                  <div className="w-10 h-[2px] bg-gold-primary my-3" />
                  <p className="text-brown-warm text-[15px] leading-[1.7] mb-6 flex-grow">
                    {treatment.desc}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#E8E0D5]">
                    <div>
                      <div className="flex items-center gap-2 text-[#888] font-medium text-[13px] mb-1">
                        <Clock size={16} />
                        <span>{treatment.duration}</span>
                      </div>
                      <p className="text-[#AAA] italic text-[13px]">Additional charges apply</p>
                    </div>
                    <button className="bg-gold-primary text-charcoal-deep font-semibold text-[12px] uppercase tracking-[1px] px-6 py-2.5 rounded-full hover:bg-gold-light transition-colors">
                      Book Treatment
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Spa Lounge Visual Showcase */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center px-6">
          <h2 className="font-serif text-[36px] md:text-[48px] text-white mb-4 drop-shadow-lg">
            The Spa Lounge — Your Personal Retreat
          </h2>
          <p className="font-sans text-[16px] md:text-[18px] text-white/90 max-w-2xl mx-auto drop-shadow-md">
            A dedicated relaxation area where you can unwind before and after your treatments
          </p>
        </div>
      </section>

      {/* Section 5: Beauty & Grooming Services */}
      <section className="py-[80px] bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden shadow-lg aspect-[4/3] lg:aspect-auto lg:h-[600px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop" 
                alt="Beauty & Grooming" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pl-8"
            >
              <p className="text-gold-primary text-[13px] font-semibold tracking-[2px] uppercase mb-4">Beauty & Grooming</p>
              <h2 className="font-serif text-[36px] text-charcoal-deep mb-6">Look Your Best, Feel Your Best</h2>
              <p className="text-brown-warm text-[16px] leading-[1.8] mb-8">
                Our on-site barber and beauty shop offers a full range of grooming and styling services to keep you looking polished and confident throughout your stay. Whether you need a fresh haircut, a professional shave, or beauty treatments for a special occasion, our skilled beauticians and barbers are at your service.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  { icon: "✂️", text: "Professional haircuts and styling" },
                  { icon: "💇", text: "Beard grooming and shaving" },
                  { icon: "💄", text: "Beauty treatments" },
                  { icon: "💅", text: "Personal grooming services" }
                ].map((service, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-charcoal-deep font-medium">
                    <span className="text-xl">{service.icon}</span>
                    <span>{service.text}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-[14px] text-gray-500 italic mb-8">
                Note: Available during salon hours. Ask at the front desk for scheduling.
              </p>
              
              <button className="border-2 border-charcoal-deep text-charcoal-deep px-8 py-3 rounded hover:bg-charcoal-deep hover:text-white transition-colors uppercase tracking-[1px] font-semibold text-[13px]">
                Inquire at Front Desk
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: Spa Booking CTA */}
      <section className="relative py-[100px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop" 
            alt="Spa Atmosphere" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-charcoal-deep/80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif font-bold text-[42px] text-white mb-4">Ready to Unwind?</h2>
          <p className="font-sans text-[17px] text-white/80 mb-12 max-w-2xl mx-auto">
            Contact our 24-hour front desk to schedule your personalized spa experience
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <a href="tel:+211925754459" className="flex items-center gap-3 text-white hover:text-gold-primary transition-colors">
              <Phone className="text-gold-primary" size={24} />
              <span className="font-medium text-[16px]">+211 925 754 459</span>
            </a>
            <a href="https://wa.me/211925754459" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-[#25D366] transition-colors">
              <MessageCircle className="text-gold-primary" size={24} />
              <span className="font-medium text-[16px]">Chat with us</span>
            </a>
            <div className="flex items-center gap-3 text-white">
              <Bell className="text-gold-primary" size={24} />
              <span className="font-medium text-[16px]">Available 24/7</span>
            </div>
          </div>
          
          <button className="bg-gold-primary text-charcoal-deep font-semibold px-10 py-4 rounded hover:bg-gold-light transition-colors uppercase tracking-[2px] mb-6">
            Book a Treatment
          </button>
          
          <p className="text-white/50 text-[13px] italic">
            Additional charges apply for all spa and massage services. Advance booking recommended.
          </p>
        </div>
      </section>
    </div>
  );
}
