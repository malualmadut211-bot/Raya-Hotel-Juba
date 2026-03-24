import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Wifi, Car, Clock, Tv, Snowflake, Bath, Sun, ShoppingBag, Bell, Shield, Baby, Accessibility, Building, Info, CheckCircle2 } from 'lucide-react';

const featuredAmenities = [
  {
    icon: <Wifi size={64} className="text-gold-primary mx-auto mb-6" />,
    title: 'Complimentary High-Speed WiFi',
    description: 'Stay connected throughout your stay with free wireless internet available in all areas of the hotel — rooms, lounge, terrace, and common spaces. Stream, work, or share your travel moments effortlessly.',
    badge: 'AVAILABLE EVERYWHERE'
  },
  {
    icon: <Car size={64} className="text-gold-primary mx-auto mb-6" />,
    title: 'Free On-Site Parking',
    description: 'Drive in with peace of mind. Our hotel offers free public parking on site with no reservation needed. Your vehicle is safe and accessible throughout your stay, monitored by our comprehensive CCTV security system.',
    badge: 'NO RESERVATION NEEDED'
  },
  {
    icon: <Clock size={64} className="text-gold-primary mx-auto mb-6" />,
    title: 'Round-the-Clock Service',
    description: 'Our dedicated front desk team is available 24 hours a day, 7 days a week. From check-in at any hour to local recommendations, currency exchange, or arranging transportation — we\'re always here for you.',
    badge: 'ALWAYS AVAILABLE'
  }
];

const directoryCategories = [
  {
    id: 'connectivity',
    icon: <Wifi size={48} className="text-gold-primary" />,
    title: 'Connectivity & Entertainment',
    description: 'Stay connected and entertained throughout your stay',
    items: [
      { name: 'Free WiFi in all areas', note: 'High-speed wireless internet, no password hassle' },
      { name: 'Flat-screen TV', note: 'In-room entertainment with multiple channels' },
      { name: 'Telephone', note: 'Direct dial from your room' },
      { name: 'Live sport events (broadcast)', note: 'Catch the big game in our shared lounge' },
      { name: 'Shared lounge/TV area', note: 'A communal space for relaxing and socializing' }
    ]
  },
  {
    id: 'comfort',
    icon: <Snowflake size={48} className="text-gold-primary" />,
    title: 'Comfort & Climate Control',
    description: 'Your ideal temperature, guaranteed',
    items: [
      { name: 'Air conditioning', note: 'Individual room climate control', extraCharge: true },
      { name: 'Ceiling fan', note: 'For gentle air circulation' },
      { name: 'Socket near the bed', note: 'Charge your devices conveniently' },
      { name: 'Premium linen', note: 'Crisp, comfortable bedding' },
      { name: 'Towels', note: 'Fresh towels provided daily' },
      { name: 'Additional towels/sheets', extraCharge: true }
    ]
  },
  {
    id: 'bathroom',
    icon: <Bath size={48} className="text-gold-primary" />,
    title: 'Bathroom & Personal Care',
    description: 'Your private sanctuary of cleanliness and care',
    items: [
      { name: 'Private bathroom', note: 'Every room features its own bathroom' },
      { name: 'Shower', note: 'Refreshing shower facilities' },
      { name: 'Bath or shower', note: 'Choice of bathing options' },
      { name: 'Free toiletries', note: 'Complimentary soap, shampoo, and essentials' },
      { name: 'Slippers', note: 'Soft in-room slippers provided' },
      { name: 'Towels', note: 'Clean, fluffy towels daily' },
      { name: 'Toilet paper', note: 'Always stocked' },
      { name: 'Toilet', note: 'Modern, clean facilities' }
    ]
  },
  {
    id: 'outdoor',
    icon: <Sun size={48} className="text-gold-primary" />,
    title: 'Outdoor Spaces',
    description: 'Breathe fresh air and soak in the views',
    items: [
      { name: 'Sun terrace', note: 'Bask in Juba\'s warm sunshine' },
      { name: 'Outdoor furniture', note: 'Comfortable seating for alfresco relaxation' },
      { name: 'Terrace', note: 'Private outdoor space' },
      { name: 'City view', note: 'Admire Juba\'s skyline from select rooms' },
      { name: 'Inner courtyard view', note: 'Peaceful garden perspectives' }
    ]
  },
  {
    id: 'dining',
    icon: <ShoppingBag size={48} className="text-gold-primary" />,
    title: 'Dining & Convenience',
    description: 'Daily essentials at your fingertips',
    items: [
      { name: 'Minimarket on site', note: 'Snacks, drinks, and essentials available right here' },
      { name: 'Refrigerator', note: 'In-room refrigerator for your food and beverages' },
      { name: 'Washing machine', note: 'Laundry convenience during extended stays' }
    ]
  },
  {
    id: 'parking',
    icon: <Car size={48} className="text-gold-primary" />,
    title: 'Parking & Transportation',
    description: 'Convenient access for your vehicle',
    items: [
      { name: 'Free public parking', note: 'On-site, no reservation needed' },
      { name: 'Juba Airport proximity', note: 'Just 3 km from Juba International Airport' }
    ]
  },
  {
    id: 'reception',
    icon: <Bell size={48} className="text-gold-primary" />,
    title: 'Reception & Guest Services',
    description: 'Personalized service at every step',
    items: [
      { name: '24-hour front desk', note: 'Assistance at any hour' },
      { name: 'Private check-in/check-out', note: 'Personalized arrival and departure' },
      { name: 'Express check-in/check-out', note: 'Swift and hassle-free' },
      { name: 'Currency exchange', note: 'Convert currencies conveniently' },
      { name: 'Daily housekeeping', note: 'Your room, refreshed daily' },
      { name: 'Ironing service', extraCharge: true },
      { name: 'Laundry service', extraCharge: true },
      { name: 'Barber/beauty shop', note: 'On-site grooming and styling' }
    ]
  },
  {
    id: 'safety',
    icon: <Shield size={48} className="text-gold-primary" />,
    title: 'Safety & Security',
    description: 'Your safety is our top priority',
    items: [
      { name: '24-hour security', note: 'Full-day security personnel on duty' },
      { name: 'CCTV outside property', note: 'External surveillance monitoring' },
      { name: 'CCTV in common areas', note: 'Common area surveillance for your safety' },
      { name: 'Fire extinguishers', note: 'Strategically placed throughout the hotel' },
      { name: 'Smoke alarms', note: 'Early detection fire safety' },
      { name: 'Security alarm', note: 'Comprehensive alarm system' },
      { name: 'Safety deposit box', note: 'Secure storage for your valuables' }
    ]
  },
  {
    id: 'family',
    icon: <Baby size={48} className="text-gold-primary" />,
    title: 'Family Friendly',
    description: 'We welcome families with open arms',
    badge: 'FAMILY APPROVED ♥',
    items: [
      { name: 'Baby safety gates', note: 'Childproofing for your peace of mind' },
      { name: 'Child safety socket covers', note: 'Electrical safety for curious little ones' },
      { name: 'Books, DVDs, or music for children', note: 'Entertainment for young guests' },
      { name: 'Popular with family travelers', note: 'Trusted by families visiting Juba' }
    ]
  },
  {
    id: 'accessibility',
    icon: <Accessibility size={48} className="text-gold-primary" />,
    title: 'Accessibility',
    description: 'Welcoming guests of all abilities',
    items: [
      { name: 'Entire unit wheelchair accessible', note: 'Ground-floor rooms accessible by wheelchair' },
      { name: 'Lift/Elevator', note: 'Easy access between floors' },
      { name: 'Upper floors accessible by stairs only', note: 'Please note for mobility planning' }
    ]
  },
  {
    id: 'general',
    icon: <Building size={48} className="text-gold-primary" />,
    title: 'General Property Features',
    description: 'Overall hotel features and policies',
    items: [
      { name: 'Non-smoking throughout', note: 'A completely smoke-free environment' },
      { name: 'Lift/Elevator', note: 'Convenient floor access' },
      { name: 'Air conditioning in common areas', extraCharge: true }
    ]
  }
];

export default function Amenities() {
  return (
    <div className="w-full bg-white">
      {/* Section 1: Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden bg-charcoal-deep flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2940&auto=format&fit=crop" 
            alt="Amenities Hero" 
            className="w-full h-full object-cover opacity-60"
            style={{ objectPosition: 'center 60%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/30 to-charcoal-deep/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="text-white/70 text-[13px] tracking-[2px] mb-4 font-dm uppercase">
            <Link to="/" className="hover:underline">Home</Link> <span className="text-gold-primary mx-2">&gt;</span> Amenities
          </p>
          <h1 className="font-serif text-[36px] md:text-[56px] text-white mb-4">Amenities & Facilities</h1>
          <p className="text-white/80 text-[18px] max-w-[500px] mx-auto font-dm">Everything you need for an unforgettable stay, thoughtfully provided</p>
          <div className="w-[60px] h-[2px] bg-gold-primary mx-auto mt-8" />
        </div>
      </section>

      {/* Section 2: Introduction */}
      <section className="py-[100px] bg-ivory px-6 text-center">
        <div className="max-w-[760px] mx-auto">
          <span className="text-gold-primary text-[13px] tracking-[3px] uppercase font-medium block mb-6">DESIGNED FOR YOUR COMFORT</span>
          <p className="font-cormorant text-[22px] text-espresso leading-[1.7] mb-10">
            At Raya Hotel Juba, we believe that exceptional accommodation extends far beyond the room. Our comprehensive range of amenities and services — from complimentary WiFi and free parking to our rejuvenating spa lounge and round-the-clock security — ensures that every moment of your stay is comfortable, convenient, and truly memorable. Explore everything we have to offer below.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="border border-gold-primary rounded-full px-6 py-2.5 text-[14px] font-medium uppercase tracking-[1px] text-espresso bg-white/50">
              20+ Amenities
            </div>
            <div className="border border-gold-primary rounded-full px-6 py-2.5 text-[14px] font-medium uppercase tracking-[1px] text-espresso bg-white/50">
              24/7 Service
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Amenities */}
      <section className="py-[80px] bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredAmenities.map((amenity, i) => (
            <motion.div 
              key={amenity.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-ivory rounded-2xl p-10 text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C8A96E_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative z-10">
                {amenity.icon}
                <h3 className="font-serif text-[22px] font-semibold text-espresso mb-4">{amenity.title}</h3>
                <p className="text-[15px] text-brown-warm leading-[1.7] mb-8 font-dm">{amenity.description}</p>
                <div className="inline-block bg-gold-primary text-charcoal-deep text-[11px] uppercase tracking-[2px] px-4 py-1.5 rounded-full font-semibold">
                  {amenity.badge}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4: Complete Amenities Directory */}
      <section className="pt-[80px] pb-[120px]">
        <div className="text-center mb-16 px-6">
          <span className="text-gold-primary font-medium text-[13px] tracking-[3px] uppercase block mb-4">FULL DIRECTORY</span>
          <h2 className="font-serif text-[42px] text-espresso mb-4">Explore All Our Amenities</h2>
          <p className="text-brown-warm text-[17px]">Organized by category for your convenience</p>
        </div>

        <div>
          {directoryCategories.map((category, i) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`py-16 px-6 ${i % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
            >
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-10">
                <div>
                  <div className="mb-6">{category.icon}</div>
                  <h3 className="font-serif text-[28px] font-semibold text-espresso mb-3 flex items-center gap-3">
                    {category.title}
                  </h3>
                  {category.badge && (
                    <div className="inline-block bg-sage/20 text-sage border border-sage/30 text-[11px] uppercase tracking-[2px] px-3 py-1 rounded-full font-semibold mb-4">
                      {category.badge}
                    </div>
                  )}
                  <p className="text-[15px] text-brown-warm font-dm">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-4 content-start">
                  {category.items.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.03 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={18} className="text-gold-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[15px] text-[#444] font-dm">{item.name}</span>
                          {item.extraCharge && (
                            <div className="group relative inline-flex">
                              <Info size={14} className="text-[#888] cursor-help" />
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-charcoal-deep text-white text-[11px] rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 text-center">
                                An additional charge may apply for this service
                              </div>
                            </div>
                          )}
                        </div>
                        {item.note && <p className="text-[13px] text-[#888] italic mt-0.5 font-dm">{item.note}</p>}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 5: Languages Spoken */}
      <section className="py-[60px] bg-charcoal-deep px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-[28px] text-white mb-8">We Speak Your Language</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 flex items-center gap-3">
              <span className="text-2xl">🇬🇧</span>
              <span className="text-white font-medium font-dm">English</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 flex items-center gap-3">
              <span className="text-2xl">🇸🇦</span>
              <span className="text-white font-medium font-dm">Arabic</span>
            </div>
          </div>
          <p className="text-[15px] text-white/70 font-dm">Our multilingual staff ensures clear communication and warm hospitality</p>
        </div>
      </section>

      {/* Section 6: Amenities CTA */}
      <section className="py-[80px] px-6 bg-gradient-to-br from-[#D4B87A] via-[#C8A96E] to-[#B39359] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[36px] md:text-[42px] text-charcoal-deep font-bold mb-4">Have Questions About Our Facilities?</h2>
          <p className="text-charcoal-deep/80 text-[18px] mb-8 font-dm">Our 24-hour front desk team is ready to assist you with any inquiries.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-charcoal-deep text-white font-semibold text-[14px] uppercase tracking-[2px] px-8 py-4 rounded-md hover:bg-[#111] transition-colors">
              Contact Us
            </Link>
            <a href="tel:+211925754459" className="bg-transparent border-2 border-charcoal-deep text-charcoal-deep font-semibold text-[14px] uppercase tracking-[2px] px-8 py-4 rounded-md hover:bg-charcoal-deep hover:text-white transition-colors">
              Call Now: +211 925 754 459
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
