import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield, CheckCircle, ChevronRight } from 'lucide-react';

export default function About() {
  const [stats, setStats] = useState({ rating: 0, distance: 0, airport: 0, spa: 0 });

  useEffect(() => {
    // Count up animation logic
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      // easeOutQuad
      const easeProgress = progress * (2 - progress);

      setStats({
        rating: +(4.7 * easeProgress).toFixed(1),
        distance: +(1.1 * easeProgress).toFixed(1),
        airport: +(3 * easeProgress).toFixed(1),
        spa: Math.floor(7 * easeProgress)
      });

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-ivory min-h-screen">
      {/* Section 1: Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-c6a4d14d8379?q=80&w=2000&auto=format&fit=crop" 
            alt="Raya Hotel Juba" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-charcoal-deep/50" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <p className="text-white/70 text-[13px] tracking-[2px] mb-4 uppercase font-dm">
            <Link to="/" className="hover:text-gold-primary transition-colors">Home</Link> <span className="text-gold-primary mx-2">&gt;</span> About
          </p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            About Raya Hotel Juba
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto"
          >
            Where South Sudanese hospitality meets modern comfort and care
          </motion.p>
        </div>
      </section>

      {/* Section 2: Our Story */}
      <section className="py-[120px] bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <p className="text-gold-primary text-[13px] font-semibold tracking-[2px] uppercase mb-4">Our Story</p>
              <h2 className="font-serif font-bold text-[38px] text-charcoal-deep mb-8 leading-tight">
                Built on Warmth, Driven by Excellence
              </h2>
              <div className="space-y-6 text-brown-warm text-[16px] leading-[1.8] font-sans">
                <p>
                  Raya Hotel Juba was born from a simple but powerful vision: to create a hospitality experience that truly reflects the warmth, resilience, and beauty of South Sudan and its people. Located in the Haimayo district of Juba — the vibrant capital of the world's youngest nation — our hotel stands as a testament to what exceptional care and attention to detail can achieve.
                </p>
                <p>
                  From our earliest days, we set out to be more than just a place to sleep. We wanted to build a home away from home — a haven where every guest, whether a business traveler, a visiting diplomat, a tourist exploring South Sudan for the first time, or a family seeking comfortable accommodation, would feel welcomed, safe, and genuinely cared for.
                </p>
                <p>
                  Today, Raya Hotel has grown into one of Juba's most trusted and beloved hospitality destinations. Our 4.7-star guest rating speaks to the experiences of travelers who have passed through our doors and discovered something special: a hotel where the staff knows your name, the rooms are always immaculate, and every need is anticipated before you even ask.
                </p>
              </div>
              <div className="mt-10 border-l-3 border-gold-primary pl-6 py-2">
                <p className="font-cormorant italic text-[20px] text-gold-primary">
                  "At Raya Hotel, you're not just a guest — you're family."
                </p>
              </div>
            </motion.div>
            
            <div className="lg:col-span-5 relative h-[600px] lg:h-auto lg:aspect-[4/5]">
              <motion.div
                initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute top-0 right-10 bottom-20 left-0 rounded-xl overflow-hidden shadow-2xl z-10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop" 
                  alt="Hotel Exterior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-0 right-0 w-2/3 aspect-square rounded-lg overflow-hidden shadow-xl z-20 border-4 border-white"
              >
                <div className="absolute inset-0 border-2 border-gold-primary m-[-2px] rounded-lg pointer-events-none" />
                <img 
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop" 
                  alt="Hotel Interior Detail" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute bottom-10 left-[-20px] z-30 bg-gold-primary text-charcoal-deep px-5 py-3 rounded shadow-lg"
              >
                <span className="font-sans font-semibold text-[12px] uppercase tracking-[1px]">Trusted Hospitality</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Mission & Vision */}
      <section className="py-[100px] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:border-r border-[#EEE] md:pr-16"
            >
              <Target className="text-gold-primary w-12 h-12 mb-6" />
              <h3 className="font-serif text-[28px] text-charcoal-deep mb-4">Our Mission</h3>
              <p className="text-brown-warm text-[16px] leading-[1.8]">
                To provide every guest with an unparalleled experience of comfort, safety, and genuine hospitality — setting the standard for accommodation excellence in Juba and South Sudan.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:pl-8"
            >
              <Eye className="text-gold-primary w-12 h-12 mb-6" />
              <h3 className="font-serif text-[28px] text-charcoal-deep mb-4">Our Vision</h3>
              <p className="text-brown-warm text-[16px] leading-[1.8]">
                To be recognized as South Sudan's premier hotel, celebrated not just for our facilities and services, but for the human connections we create and the lasting memories we help our guests build.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Core Values */}
      <section className="py-[100px] bg-[#F5EDE3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-[36px] text-charcoal-deep">What We Stand For</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-14 h-14 text-gold-primary mx-auto mb-6" strokeWidth={1.5} />,
                title: "Comfort First",
                desc: "Every room, every amenity, every service at Raya Hotel is designed with your comfort as the absolute top priority. From air-conditioned rooms with premium bedding to our relaxing spa lounge, we obsess over the details that make your stay feel effortless and rejuvenating. Your comfort isn't just a feature — it's our founding principle."
              },
              {
                icon: <div className="relative w-14 h-14 mx-auto mb-6 flex items-center justify-center text-gold-primary">
                  <Heart className="w-10 h-10 absolute" strokeWidth={1.5} />
                  <div className="absolute inset-0 border-2 border-gold-primary rounded-full opacity-50 scale-125" />
                </div>,
                title: "Genuine Hospitality",
                desc: "Our multilingual team — fluent in both English and Arabic — is available 24 hours a day, 7 days a week, with one goal: to make you feel genuinely welcomed and cared for. From your first phone call to your final checkout, every interaction is infused with warmth, respect, and a sincere desire to exceed your expectations. In South Sudan, hospitality isn't a service — it's a way of life."
              },
              {
                icon: <Shield className="w-14 h-14 text-gold-primary mx-auto mb-6" strokeWidth={1.5} />,
                title: "Safety & Security",
                desc: "Your peace of mind is non-negotiable. Raya Hotel is equipped with comprehensive security infrastructure including 24-hour on-site security personnel, CCTV surveillance of all external and common areas, fire extinguishers and smoke alarms throughout the property, a security alarm system, and in-room safety deposit boxes. You can relax knowing that every precaution has been taken for your protection."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white rounded-2xl p-10 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-gold-primary"
              >
                {value.icon}
                <h3 className="font-serif text-[24px] text-charcoal-deep mb-4">{value.title}</h3>
                <p className="text-brown-warm text-[15px] leading-[1.7]">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: By the Numbers */}
      <section className="py-[100px] bg-charcoal-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1551882547-ff40c0d589rx?q=80&w=2000&auto=format&fit=crop" 
            alt="Hotel Night" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-0 text-center divide-y sm:divide-y-0 lg:divide-x divide-gold-primary/30">
            {[
              { num: stats.rating, label: "Guest Rating", sub: "Out of 5 stars" },
              { num: stats.distance, label: "KM from City Centre", sub: "Prime central location" },
              { num: "24/7", label: "Front Desk & Security", sub: "Always available" },
              { num: stats.airport, label: "KM from Airport", sub: "Juba International" },
              { num: `${stats.spa}+`, label: "Spa Treatments", sub: "Massage & wellness" }
            ].map((stat, idx) => (
              <div key={idx} className="py-6 lg:py-0 px-4">
                <div className="font-serif font-bold text-[64px] text-gold-primary leading-none mb-2">{stat.num}</div>
                <div className="font-sans text-[16px] text-white mb-1">{stat.label}</div>
                <div className="font-sans text-[13px] text-white/50">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Why Choose Raya Hotel */}
      <section className="py-[80px] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {[
            {
              title: "Perfectly Positioned in Juba",
              desc: "Located just 1.1 km from the city centre and 3 km from Juba International Airport, Raya Hotel places you at the ideal crossroads for business and leisure. Juba Stadium, John Garang Memorial, and Juba Game Reserve are all easily accessible, and our front desk team is always ready to help you navigate the city.",
              img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop",
              reverse: false
            },
            {
              title: "A Welcome for the Whole Family",
              desc: "Raya Hotel is trusted by families visiting Juba. We provide baby safety gates, child safety socket covers, and entertainment options including books, DVDs, and music for children. Our team goes the extra mile to ensure young guests are comfortable and parents are at ease.",
              img: "https://images.unsplash.com/photo-1542038383-747d7cb91672?q=80&w=1000&auto=format&fit=crop",
              reverse: true
            },
            {
              title: "Services That Anticipate Your Needs",
              desc: "From private check-in and express check-out to currency exchange, daily housekeeping, and laundry services — we've thought of everything so you don't have to. Our barber and beauty shop keeps you looking sharp, and our minimarket ensures snacks and essentials are always at hand.",
              img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop",
              reverse: false
            },
            {
              title: "Your Personal Wellness Retreat",
              desc: "With seven distinct massage treatments, a dedicated spa lounge, a sun-drenched terrace with outdoor furniture, and a peaceful relaxation area, Raya Hotel offers ample space and services for total mind-body rejuvenation.",
              img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop",
              reverse: true
            }
          ].map((row, idx) => (
            <div key={idx} className={`flex flex-col ${row.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-16 ${idx !== 3 ? 'border-b border-[#EEE]' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: row.reverse ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2"
              >
                <div className="rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
                  <img src={row.img} alt={row.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full md:w-1/2"
              >
                <h3 className="font-serif text-[32px] text-charcoal-deep mb-6">{row.title}</h3>
                <p className="text-brown-warm text-[16px] leading-[1.8]">{row.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Guest Testimonial Band */}
      <section className="py-[60px] bg-gradient-to-r from-[#C8A96E] to-[#D4B87A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-cormorant italic text-[24px] md:text-[28px] text-charcoal-deep mb-6 leading-relaxed">
            "This hotel is really nice. The rooms are comfy and clean, and the staff is friendly. Plus, the location is convenient for exploring the city."
          </p>
          <p className="font-sans font-semibold text-charcoal-deep mb-4">— Jone Luaulay, Verified Guest</p>
          <div className="flex justify-center gap-1 text-charcoal-deep mb-8">
            {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
            <span className="ml-2 font-semibold">4.7</span>
          </div>
          <button className="border-2 border-charcoal-deep text-charcoal-deep px-8 py-3 rounded hover:bg-charcoal-deep hover:text-white transition-colors uppercase tracking-[1px] font-semibold text-[14px]">
            Share Your Experience
          </button>
        </div>
      </section>

      {/* Section 8: CTA */}
      <section className="py-24 bg-charcoal-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1542314831-c6a4d14d8379?q=80&w=2000&auto=format&fit=crop" 
            alt="Hotel Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">Come Experience Our Hospitality</h2>
          <Link 
            to="/booking" 
            className="inline-block bg-gold-primary text-charcoal-deep font-semibold px-10 py-4 rounded hover:bg-gold-light transition-colors uppercase tracking-[2px]"
          >
            Book Your Stay
          </Link>
        </div>
      </section>
    </div>
  );
}
