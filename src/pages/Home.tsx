import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle2, Wifi, Car, Clock, Shield, Wind, Droplets, Sparkles, MapPin, Phone, ArrowRight, Tv, Bed, Eye } from 'lucide-react';

const rooms = [
  { 
    id: 'standard', 
    name: 'Standard Double Room', 
    badge: 'STANDARD', 
    price: '120', 
    desc: 'A comfortable retreat with all the essentials for a restful stay, featuring a plush double bed and private bathroom.', 
    img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop',
    rating: '4.7'
  },
  { 
    id: 'deluxe', 
    name: 'Deluxe Double Room', 
    badge: 'DELUXE', 
    price: '150', 
    desc: 'Enhanced comfort with stunning city views, premium furnishings, and a spacious layout for the discerning traveler.', 
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop',
    rating: '4.8'
  },
  { 
    id: 'premium', 
    name: 'Premium Double Suite', 
    badge: 'PREMIUM', 
    price: '200', 
    desc: 'Our finest accommodation featuring a separate seating area, panoramic city views, and upgraded amenities for an exceptional stay.', 
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop', 
    popular: true,
    rating: '5.0'
  }
];

const amenities = [
  { icon: Wifi, label: 'Free WiFi' },
  { icon: Car, label: 'Free Parking' },
  { icon: Droplets, label: 'Private Bathroom' },
  { icon: Wind, label: 'Air Conditioning' },
  { icon: MapPin, label: 'City Views' },
  { icon: Sparkles, label: 'Spa & Massage' },
  { icon: Sparkles, label: 'Daily Housekeeping' },
  { icon: Shield, label: '24-Hour Security' },
];

const spaTreatments = [
  'Full Body Massage', 'Couples Massage', 'Back Massage', 'Neck Massage', 
  'Head Massage', 'Hand Massage', 'Foot Massage', 'Spa Lounge Access'
];

const attractions = [
  { icon: '🏟️', name: 'Juba Stadium', dist: '1.9 km' },
  { icon: '🏛️', name: 'John Garang Memorial', dist: '3.5 km' },
  { icon: '🦁', name: 'Juba Game Reserve', dist: '11 km' },
  { icon: '✈️', name: 'Juba International Airport', dist: '3 km' },
  { icon: '📍', name: 'Juba City Centre', dist: '1.1 km' },
];

export default function Home() {
  return (
    <div className="w-full bg-ivory">
      {/* Section 1: Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-charcoal-deep">
        <motion.div 
          className="absolute inset-0"
          animate={{ scale: [1, 1.1] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1542314831-c6a4d1409e1f?q=80&w=2828&auto=format&fit=crop" 
            alt="Raya Hotel Exterior" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/20 via-charcoal-deep/50 to-charcoal-deep/85" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto pt-20">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gold-primary font-medium text-sm tracking-[4px] uppercase mb-4"
          >
            WELCOME TO
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-serif text-[42px] md:text-[80px] text-white tracking-[6px] leading-tight mb-6"
          >
            RAYA HOTEL JUBA
          </motion.h1>

          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="w-20 h-[2px] bg-gold-primary mb-6 origin-center"
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="text-white/90 text-[15px] md:text-[18px] max-w-2xl mb-8 font-light"
          >
            Your Premier Destination for Comfort & Elegance in South Sudan's Capital
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 mb-10"
          >
            <div className="flex text-gold-primary">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" className="opacity-70" />
            </div>
            <span className="font-poppins font-semibold text-gold-primary">4.7</span>
            <span className="text-white/70 text-sm">(6 reviews)</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto max-w-[300px] sm:max-w-none mx-auto"
          >
            <Link 
              to="/rooms" 
              className="bg-gold-primary text-charcoal-deep font-semibold text-sm tracking-[2px] uppercase px-9 py-4 rounded hover:bg-charcoal-deep hover:text-gold-primary border-2 border-transparent hover:border-gold-primary transition-all duration-400"
            >
              Explore Our Rooms
            </Link>
            <Link 
              to="/booking" 
              className="bg-transparent text-white font-semibold text-sm tracking-[2px] uppercase px-9 py-4 rounded border-2 border-white hover:bg-white hover:text-charcoal-deep transition-all duration-400"
            >
              Book Your Stay
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Welcome / Introduction */}
      <section className="py-[80px] md:py-[120px] px-6 max-w-7xl mx-auto bg-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="h-[1px] w-10 bg-gold-primary" />
              <div className="w-2 h-2 rotate-45 bg-gold-primary" />
              <div className="h-[1px] w-10 bg-gold-primary" />
            </div>
            
            <span className="text-gold-primary font-medium text-[13px] tracking-[3px] uppercase block mb-3 text-center lg:text-left">
              DISCOVER RAYA HOTEL
            </span>
            
            <h2 className="font-serif text-[28px] md:text-[42px] leading-[1.2] text-espresso mb-6 text-center lg:text-left">
              A Haven of Comfort in the Heart of Juba
            </h2>
            
            <p className="text-brown-warm text-[16px] leading-[1.75] mb-4 text-center lg:text-left">
              Nestled in the vibrant Haimayo district of Juba, Raya Hotel offers an exceptional blend of modern comfort and warm South Sudanese hospitality. With meticulously designed rooms featuring air conditioning, private bathrooms, and stunning city views, every detail is crafted for your ultimate relaxation.
            </p>
            
            <p className="text-brown-warm text-[16px] leading-[1.75] mb-8 text-center lg:text-left">
              Whether you're visiting for business or leisure, our dedicated team provides round-the-clock service including a 24-hour front desk, daily housekeeping, and personalized check-in experiences. At Raya Hotel, you're not just a guest — you're family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center lg:justify-start">
              {['Free WiFi & Parking', '24/7 Front Desk', 'Spa & Wellness'].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-gold-primary" />
                  <span className="font-medium text-[14px] text-espresso">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center lg:text-left">
              <Link to="/about" className="inline-flex items-center gap-2 text-gold-primary font-semibold text-[15px] hover:gap-4 transition-all group">
                Learn More About Us <ArrowRight size={18} />
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="relative order-1 lg:order-2 aspect-[4/5]"
          >
            <div className="absolute inset-0 border-2 border-gold-primary rounded-lg translate-x-4 translate-y-4 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop" 
              alt="Hotel Lobby" 
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute -bottom-2 -left-2 w-20 h-1 bg-gold-primary" />
          </motion.div>
        </div>
      </section>

      {/* Section 3: Room Showcase Preview */}
      <section className="py-[120px] bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-primary font-medium text-[13px] tracking-[3px] uppercase block mb-4">
              ACCOMMODATIONS
            </span>
            <h2 className="font-serif text-[42px] text-espresso mb-4">
              Elegantly Appointed Rooms
            </h2>
            <p className="text-brown-warm text-[17px] max-w-[640px] mx-auto mb-6">
              Each room is a sanctuary of comfort, designed with modern amenities and thoughtful touches to make your stay truly memorable.
            </p>
            <div className="w-[60px] h-[2px] bg-gold-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, i) => (
              <motion.div 
                key={room.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-400 group relative"
              >
                {room.popular && (
                  <div className="absolute top-4 right-4 z-20 bg-gold-primary text-charcoal-deep text-[10px] font-bold tracking-[1px] uppercase px-3 py-1 rounded-sm rotate-12 shadow-md">
                    Most Popular
                  </div>
                )}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={room.img} alt={room.name} className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-charcoal-deep/0 group-hover:bg-charcoal-deep/30 transition-colors duration-400" />
                  <div className="absolute top-4 left-4 bg-charcoal-deep/70 backdrop-blur-sm text-white text-[11px] font-semibold tracking-[1px] uppercase px-3 py-1.5 rounded-full z-10">
                    {room.badge}
                  </div>
                  {!room.popular && (
                    <div className="absolute top-4 right-4 bg-gold-primary text-charcoal-deep text-[11px] font-semibold tracking-[1px] uppercase px-3 py-1.5 rounded-full z-10">
                      From ${room.price}
                    </div>
                  )}
                </div>
                <div className="p-7">
                  <h3 className="font-serif font-semibold text-[22px] text-espresso mb-2">{room.name}</h3>
                  <p className="text-[14px] text-brown-warm line-clamp-2 mb-4 leading-[1.6]">{room.desc}</p>
                  
                  <div className="flex gap-4 mb-4">
                    <div className="w-9 h-9 rounded-full border border-gold-primary/30 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-white transition-colors"><Wifi size={18} /></div>
                    <div className="w-9 h-9 rounded-full border border-gold-primary/30 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-white transition-colors"><Wind size={18} /></div>
                    <div className="w-9 h-9 rounded-full border border-gold-primary/30 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-white transition-colors"><Tv size={18} /></div>
                    <div className="w-9 h-9 rounded-full border border-gold-primary/30 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-white transition-colors"><Droplets size={18} /></div>
                    <div className="w-9 h-9 rounded-full border border-gold-primary/30 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-white transition-colors"><Bed size={18} /></div>
                    <div className="w-9 h-9 rounded-full border border-gold-primary/30 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-white transition-colors"><Eye size={18} /></div>
                  </div>

                  <div className="h-[1px] bg-[#EEE] my-4" />
                  <div className="flex justify-between items-center">
                    <Link to={`/rooms#${room.id}`} className="text-[14px] font-semibold text-gold-primary hover:underline">View Details →</Link>
                    <div className="flex items-center gap-1 text-gold-primary text-[14px] font-poppins font-semibold">
                      <Star size={14} fill="currentColor" /> {room.rating}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/rooms" className="inline-block bg-gold-primary text-charcoal-deep font-semibold text-[14px] tracking-[2px] uppercase px-9 py-4 rounded hover:bg-charcoal-deep hover:text-gold-primary transition-colors shadow-gold">
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Amenities Highlights */}
      <section className="relative py-[120px] px-6 bg-charcoal-deep bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2940&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-charcoal-deep/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-white font-medium text-[13px] tracking-[3px] uppercase block mb-4">WHAT WE OFFER</span>
            <h2 className="font-serif text-[42px] text-white mb-4">World-Class Amenities</h2>
            <p className="text-white/80 text-[17px] max-w-[560px] mx-auto mb-8">
              From complimentary WiFi and parking to our spa lounge and 24-hour security, every convenience is at your fingertips.
            </p>
            <div className="w-[60px] h-[2px] bg-gold-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center hover:bg-gold-primary/10 hover:border-gold-primary transition-all duration-300 group"
              >
                <item.icon size={48} className="text-gold-primary mx-auto mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h3 className="text-white font-semibold text-[15px] tracking-[0.5px]">{item.label}</h3>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/amenities" className="inline-block bg-transparent text-white border-2 border-white font-semibold text-[14px] tracking-[2px] uppercase px-9 py-4 rounded hover:bg-white hover:text-charcoal-deep transition-colors">
              Explore All Amenities
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Spa & Wellness Teaser */}
      <section className="py-[120px] px-6 max-w-7xl mx-auto bg-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2940&auto=format&fit=crop" 
              alt="Spa & Wellness" 
              className="w-full h-full object-cover aspect-[4/5]"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gold-primary/30 to-transparent" />
            <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md text-gold-primary text-[13px] px-4 py-2 rounded-md font-medium">
              7+ Treatments Available
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold-primary font-medium text-[13px] tracking-[3px] uppercase block mb-4">SPA & WELLNESS</span>
            <h2 className="font-serif text-[38px] text-espresso mb-6 leading-[1.2]">Rejuvenate Your Body & Soul</h2>
            <p className="text-brown-warm text-[16px] leading-[1.75] mb-6">
              Indulge in our comprehensive spa menu at the Raya Hotel Spa Lounge, your personal retreat from the world. Our skilled therapists offer an array of treatments designed to melt away stress, ease tension, and restore your natural balance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-6">
              {spaTreatments.map((treatment, i) => (
                <motion.div 
                  key={treatment}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.08) }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
                  <span className="text-[15px] text-espresso">{treatment}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-[#999] italic text-[13px] mb-6">Additional charges may apply for spa services.</p>
            
            <Link to="/spa" className="inline-flex items-center gap-2 text-gold-primary font-semibold text-[15px] hover:gap-4 transition-all group">
              Discover Our Spa <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Guest Testimonial */}
      <section className="py-[100px] px-6 bg-ivory relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <span className="text-gold-primary font-medium text-[13px] tracking-[3px] uppercase block mb-4">GUEST EXPERIENCES</span>
          
          <div className="flex justify-center gap-1 mb-6 text-gold-primary">
            {[1,2,3,4,5].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring' }}
              >
                <Star size={20} fill="currentColor" />
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <span className="absolute -top-10 -left-5 font-serif text-[200px] text-gold-primary/15 leading-none select-none">"</span>
            <p className="font-cormorant italic text-[22px] md:text-[28px] text-espresso leading-[1.6] mb-8 relative z-10">
              This hotel is really nice. The rooms are comfy and clean, and the staff is friendly. Plus, the location is convenient for exploring the city.
            </p>
          </div>

          <div className="w-[40px] h-[1px] bg-gold-primary mx-auto mb-4" />
          <h4 className="font-semibold text-[16px] text-espresso tracking-[1px]">Jone Luaulay</h4>
          <p className="text-[13px] text-[#999] mb-6">Verified Guest</p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 border border-gold-primary rounded-lg px-6 py-3 mb-6"
          >
            <span className="text-[14px] text-[#666]">Overall Rating:</span>
            <span className="font-poppins font-semibold text-[20px] text-gold-primary">4.7 / 5</span>
            <Star size={16} fill="#C8A96E" className="text-gold-primary" />
          </motion.div>

          <div>
            <Link to="/reviews" className="inline-flex items-center gap-2 text-gold-primary font-semibold text-[14px] hover:gap-4 transition-all">
              Read More Reviews <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Location & Nearby Attractions */}
      <section className="py-[120px] px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold-primary font-medium text-[13px] tracking-[3px] uppercase block mb-4">OUR LOCATION</span>
            <h2 className="font-serif text-[38px] text-espresso mb-6 leading-[1.2]">Perfectly Located in the Heart of Juba</h2>
            <p className="text-brown-warm text-[16px] leading-[1.75] mb-8">
              Situated in the Haimayo district, just 1.1 km from the city centre, Raya Hotel Juba places you at the crossroads of convenience and comfort. Whether you're here for business meetings, sightseeing, or simply enjoying the vibrant culture of South Sudan's capital, everything you need is within easy reach.
            </p>

            <div className="space-y-3 mb-8">
              {attractions.map((attr, i) => (
                <motion.div 
                  key={attr.name}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex items-center justify-between bg-white border border-[#EEE] rounded-lg p-4 hover:border-gold-primary hover:shadow-sm hover:translate-x-1 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-primary flex items-center justify-center text-xl">
                      {attr.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[16px] text-espresso">{attr.name}</h4>
                      <p className="text-[14px] text-[#999]">{attr.dist}</p>
                    </div>
                  </div>
                  <span className="font-poppins font-semibold text-[20px] text-gold-primary">{attr.dist}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-2 text-espresso font-medium text-[15px] mb-1">
                <MapPin size={16} className="text-gold-primary" /> Haimayo, Juba, South Sudan
              </div>
              <p className="text-[#999] text-[13px] ml-6 mb-4">RHRW+8J Juba, South Sudan</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gold-primary font-semibold text-[14px] hover:gap-4 transition-all ml-6">
                Get Directions <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-xl overflow-hidden border-2 border-gold-primary shadow-md"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3983.333333333333!2d31.5833333!3d4.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTEnMDAuMCJOIDMxwrAzNScwMC4wIkU!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) sepia(0.3) hue-rotate(-10deg)' }} 
              allowFullScreen 
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 8: Call-to-Action Banner */}
      <section className="py-[80px] px-6 relative overflow-hidden bg-gradient-to-br from-gold-primary via-gold-light to-gold-deep">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-[28px] md:text-[42px] text-charcoal-deep mb-4 font-bold">Ready to Experience Raya Hotel?</h2>
          <p className="text-charcoal-deep/80 text-[18px] mb-8">
            Book your stay today and discover the finest hospitality Juba has to offer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link 
              to="/booking" 
              className="bg-charcoal-deep text-gold-primary font-semibold text-[14px] tracking-[2px] uppercase px-10 py-4 rounded-md hover:bg-black hover:-translate-y-1 transition-all shadow-lg"
            >
              Book Now
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent text-charcoal-deep border-2 border-charcoal-deep font-semibold text-[14px] tracking-[2px] uppercase px-10 py-4 rounded-md hover:bg-charcoal-deep hover:text-gold-primary transition-all"
            >
              Contact Us
            </Link>
          </div>
          
          <p className="text-charcoal-deep/70 text-[15px]">
            Or call us: <a href="tel:+211925754459" className="font-semibold hover:text-charcoal-deep">+211 925 754 459</a>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
