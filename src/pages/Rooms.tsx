import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, Wifi, Wind, Tv, Droplets, Bed, Eye, Ruler, Users, Clock, Key, Zap, Calendar, ChevronDown, Sparkles, CheckCircle2 } from 'lucide-react';

const roomFeatures = [
  {
    icon: '🛁',
    title: 'Bathroom',
    items: ['Private bathroom', 'Shower', 'Bath or shower option', 'Free toiletries', 'Towels', 'Towels/sheets (extra fee available)', 'Toilet paper', 'Slippers', 'Toilet']
  },
  {
    icon: '🛏️',
    title: 'Bedroom',
    items: ['Premium linen', 'Wardrobe or closet', 'Socket near the bed', 'Comfortable double bed']
  },
  {
    icon: '🏙️',
    title: 'Views',
    items: ['Inner courtyard view', 'City view (select rooms)', 'Large windows']
  },
  {
    icon: '❄️',
    title: 'Climate & Comfort',
    items: ['Air conditioning (additional charge)', 'Ceiling fan', 'Individual climate control']
  },
  {
    icon: '📺',
    title: 'Technology & Media',
    items: ['Flat-screen TV', 'Telephone', 'Free WiFi', 'Live sport events broadcast']
  },
  {
    icon: '🍽️',
    title: 'In-Room Convenience',
    items: ['Refrigerator', 'Washing machine access', 'Work desk', 'Seating area']
  },
  {
    icon: '🧹',
    title: 'Services',
    items: ['Daily housekeeping', 'Ironing service (extra charge)', 'Laundry (extra charge)', 'Fresh linen provided']
  },
  {
    icon: '🌿',
    title: 'Outdoor Access',
    items: ['Sun terrace', 'Outdoor furniture', 'Terrace access', 'Garden/courtyard area']
  }
];

const RoomGallery = ({ images }: { images: string[] }) => {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="w-full">
      <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImg}
            src={images[activeImg]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
          />
        </AnimatePresence>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images.slice(1, 5).map((img, idx) => (
          <div 
            key={idx} 
            onClick={() => setActiveImg(idx + 1)}
            className={`aspect-square rounded-md overflow-hidden cursor-pointer border-2 transition-all ${activeImg === idx + 1 ? 'border-gold-primary' : 'border-transparent hover:border-gold-primary/50'}`}
          >
            <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Rooms() {
  return (
    <div className="w-full bg-white">
      {/* Section 1: Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden bg-charcoal-deep flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2940&auto=format&fit=crop" 
            alt="Rooms Hero" 
            className="w-full h-full object-cover opacity-60"
            style={{ objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/30 to-charcoal-deep/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="text-white/70 text-[13px] tracking-[2px] mb-4 font-dm uppercase">
            <Link to="/" className="hover:underline">Home</Link> <span className="text-gold-primary mx-2">&gt;</span> Rooms
          </p>
          <h1 className="font-serif text-[36px] md:text-[56px] text-white mb-4">Our Accommodations</h1>
          <p className="text-white/80 text-[18px] max-w-[500px] mx-auto font-dm">Thoughtfully designed spaces where comfort meets elegance</p>
          <div className="w-[60px] h-[2px] bg-gold-primary mx-auto mt-8" />
        </div>
      </section>
      
      {/* Section 2: Room Philosophy */}
      <section className="py-[100px] bg-ivory px-6 text-center">
        <div className="max-w-[780px] mx-auto">
          <span className="text-gold-primary text-[13px] tracking-[3px] uppercase font-medium block mb-6">YOUR HOME AWAY FROM HOME</span>
          <p className="font-cormorant text-[22px] text-espresso leading-[1.7] mb-10">
            At Raya Hotel Juba, every room is more than just a place to sleep — it's a carefully curated retreat. Our Double rooms offer a harmonious blend of modern amenities, cozy furnishings, and sweeping views of Juba's skyline. Whether you're joining us for a single night or an extended stay, each detail — from the crisp linen on your bed to the complimentary toiletries in your private bathroom — has been thoughtfully selected for your comfort and convenience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['🛏️ Double Beds', '🏙️ City Views', '🛁 Private Bathrooms'].map((stat, i) => (
              <motion.div 
                key={stat}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-gold-primary rounded-full px-5 py-2.5 text-[13px] font-medium uppercase tracking-[1px] text-espresso bg-white/50"
              >
                {stat}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Detailed Room Showcases */}
      <section className="pt-[80px]">
        {/* Room 1: Standard Double */}
        <div id="standard" className="py-[80px] px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <RoomGallery images={[
                'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1522771731478-44eb10e5c776?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop'
              ]} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-block bg-ivory border border-gold-primary text-gold-primary text-[11px] uppercase tracking-[2px] px-3.5 py-1.5 rounded-full mb-3 font-semibold">
                STANDARD
              </div>
              <h2 className="font-serif text-[36px] font-bold text-espresso mb-2">Standard Double Room</h2>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-gold-primary"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" className="opacity-70" /></div>
                <span className="font-poppins text-[14px] text-espresso">4.7</span>
              </div>
              <p className="text-[15px] text-brown-warm leading-[1.8] mb-6 font-dm">
                Welcome to our Standard Double Room — a comfortable and well-equipped retreat perfect for both business and leisure travelers. The room features a plush double bed dressed in premium linens, ensuring a restful night's sleep. The private bathroom comes stocked with free toiletries, fluffy towels, and slippers for your comfort. Stay connected with complimentary high-speed WiFi, catch up on work at the dedicated desk, or unwind watching your favorite programs on the flat-screen TV. The in-room refrigerator keeps your beverages and snacks chilled, while the air conditioning and fan ensure your ideal temperature year-round.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 mb-6">
                <div className="flex items-center gap-2"><Wind size={20} className="text-gold-primary" /><span className="text-[14px] text-[#555]">Air Conditioning</span></div>
                <div className="flex items-center gap-2"><Wifi size={20} className="text-gold-primary" /><span className="text-[14px] text-[#555]">Free WiFi</span></div>
                <div className="flex items-center gap-2"><Tv size={20} className="text-gold-primary" /><span className="text-[14px] text-[#555]">Flat-screen TV</span></div>
                <div className="flex items-center gap-2"><Droplets size={20} className="text-gold-primary" /><span className="text-[14px] text-[#555]">Private Bathroom</span></div>
                <div className="flex items-center gap-2"><Bed size={20} className="text-gold-primary" /><span className="text-[14px] text-[#555]">Premium Linen</span></div>
                <div className="flex items-center gap-2"><Sparkles size={20} className="text-gold-primary" /><span className="text-[14px] text-[#555]">Daily Housekeeping</span></div>
              </div>

              <div className="inline-flex items-center gap-2 text-sage font-medium text-[14px] mb-4">
                <Eye size={16} /> Inner Courtyard View
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 border border-[#EEE] rounded-full px-3 py-1.5 text-[13px] text-[#666]"><Ruler size={14} /> 25 m²</div>
                <div className="flex items-center gap-2 border border-[#EEE] rounded-full px-3 py-1.5 text-[13px] text-[#666]"><Bed size={14} /> 1 Double Bed</div>
                <div className="flex items-center gap-2 border border-[#EEE] rounded-full px-3 py-1.5 text-[13px] text-[#666]"><Users size={14} /> 2 Adults</div>
              </div>

              <div className="h-[1px] bg-[#EEE] mb-6" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[14px] text-[#999] font-dm">From </span>
                  <span className="font-poppins font-bold text-[32px] text-gold-primary">$120</span>
                  <span className="text-[14px] text-[#999] font-dm"> /night</span>
                </div>
                <Link to="/booking" className="bg-gold-primary text-charcoal-deep font-semibold text-[14px] uppercase tracking-[2px] px-8 py-3.5 rounded-md hover:bg-charcoal-deep hover:text-gold-primary transition-colors text-center">
                  Book This Room
                </Link>
              </div>
              <p className="text-[12px] text-[#AAA] italic mt-3 font-dm">Prices vary by season and availability. Best rate guaranteed on direct booking.</p>
            </motion.div>
          </div>
        </div>

        {/* Room 2: Deluxe Double */}
        <div id="deluxe" className="py-[80px] px-6 bg-cream">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
              <div className="inline-block bg-ivory border border-gold-primary text-gold-primary text-[11px] uppercase tracking-[2px] px-3.5 py-1.5 rounded-full mb-3 font-semibold">
                DELUXE
              </div>
              <h2 className="font-serif text-[36px] font-bold text-espresso mb-2">Deluxe Double Room</h2>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-gold-primary"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                <span className="font-poppins text-[14px] text-espresso">4.8</span>
              </div>
              <p className="text-[15px] text-brown-warm leading-[1.8] mb-6 font-dm">
                Elevate your stay in our Deluxe Double Room, where enhanced comfort meets stunning city views. This spacious room features upgraded furnishings, a generously sized double bed with premium bedding, and large windows that frame panoramic views of Juba's skyline. The modern private bathroom includes a rain shower, plush towels, and a curated selection of complimentary toiletries. Work comfortably at the elegant desk, stay cool with individually controlled air conditioning, and keep connected with free high-speed WiFi throughout your stay. The flat-screen TV offers entertainment at your fingertips, while the in-room refrigerator and wardrobe provide everyday convenience.
              </p>
              
              <div className="bg-gold-primary/10 border-l-4 border-gold-primary p-4 rounded-r-md mb-6">
                <p className="text-[14px] font-medium text-espresso flex items-center gap-2">
                  ✨ Upgrade Highlight: Enjoy stunning city views from your room
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 border border-[#DDD] rounded-full px-3 py-1.5 text-[13px] text-[#666]"><Ruler size={14} /> 32 m²</div>
                <div className="flex items-center gap-2 border border-[#DDD] rounded-full px-3 py-1.5 text-[13px] text-[#666]"><Bed size={14} /> 1 Large Double Bed</div>
                <div className="flex items-center gap-2 border border-[#DDD] rounded-full px-3 py-1.5 text-[13px] text-[#666]"><Users size={14} /> 2 Adults</div>
              </div>

              <div className="h-[1px] bg-[#DDD] mb-6" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[14px] text-[#999] font-dm">From </span>
                  <span className="font-poppins font-bold text-[32px] text-gold-primary">$150</span>
                  <span className="text-[14px] text-[#999] font-dm"> /night</span>
                </div>
                <Link to="/booking" className="bg-gold-primary text-charcoal-deep font-semibold text-[14px] uppercase tracking-[2px] px-8 py-3.5 rounded-md hover:bg-charcoal-deep hover:text-gold-primary transition-colors text-center">
                  Book This Room
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <RoomGallery images={[
                'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop'
              ]} />
            </motion.div>
          </div>
        </div>

        {/* Room 3: Premium Suite */}
        <div id="premium" className="py-[80px] px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -top-3 -right-3 z-20 bg-gold-primary text-charcoal-deep text-[10px] font-bold tracking-[1px] uppercase px-4 py-1.5 rounded-sm rotate-12 shadow-md">
                MOST POPULAR
              </div>
              <RoomGallery images={[
                'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1522771731478-44eb10e5c776?q=80&w=800&auto=format&fit=crop'
              ]} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-block bg-gold-primary text-charcoal-deep text-[11px] uppercase tracking-[2px] px-3.5 py-1.5 rounded-full mb-3 font-semibold">
                PREMIUM
              </div>
              <h2 className="font-serif text-[36px] font-bold text-espresso mb-2">Premium Double Suite</h2>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-gold-primary"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                <span className="font-poppins text-[14px] text-espresso">5.0</span>
              </div>
              <p className="text-[15px] text-brown-warm leading-[1.8] mb-6 font-dm">
                Our finest offering, the Premium Double Suite, provides an exceptional experience for the most discerning guests. Beyond the luxurious double bed and premium private bathroom, this suite features a dedicated seating area — perfect for morning coffee, evening relaxation, or informal meetings. Floor-to-ceiling windows reveal breathtaking panoramic views of Juba's vibrant cityscape. Every amenity is elevated: from the upgraded flat-screen TV and enhanced work desk to the spacious wardrobe and premium toiletries. Individually controlled air conditioning, a personal refrigerator, and daily housekeeping ensure a flawless stay from check-in to check-out.
              </p>
              
              <div className="border border-gold-primary rounded-lg p-5 mb-6">
                <h4 className="font-serif text-[18px] text-espresso mb-3">Premium Perks:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[14px] text-[#555]"><CheckCircle2 size={16} className="text-gold-primary" /> Dedicated seating area</li>
                  <li className="flex items-center gap-2 text-[14px] text-[#555]"><CheckCircle2 size={16} className="text-gold-primary" /> Panoramic city views</li>
                  <li className="flex items-center gap-2 text-[14px] text-[#555]"><CheckCircle2 size={16} className="text-gold-primary" /> Premium furnished</li>
                  <li className="flex items-center gap-2 text-[14px] text-[#555]"><CheckCircle2 size={16} className="text-gold-primary" /> Priority housekeeping</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 border border-[#EEE] rounded-full px-3 py-1.5 text-[13px] text-[#666]"><Ruler size={14} /> 45 m²</div>
                <div className="flex items-center gap-2 border border-[#EEE] rounded-full px-3 py-1.5 text-[13px] text-[#666]"><Bed size={14} /> 1 Extra-Large Double Bed</div>
                <div className="flex items-center gap-2 border border-[#EEE] rounded-full px-3 py-1.5 text-[13px] text-[#666]"><Users size={14} /> 2 Adults</div>
              </div>

              <div className="h-[1px] bg-[#EEE] mb-6" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[14px] text-[#999] font-dm">From </span>
                  <span className="font-poppins font-bold text-[32px] text-gold-primary">$200</span>
                  <span className="text-[14px] text-[#999] font-dm"> /night</span>
                </div>
                <Link to="/booking" className="bg-gold-primary text-charcoal-deep font-semibold text-[14px] uppercase tracking-[2px] px-8 py-3.5 rounded-md hover:bg-charcoal-deep hover:text-gold-primary transition-colors text-center">
                  Book This Room
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Complete Room Amenities Breakdown */}
      <section className="py-[120px] bg-ivory px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-primary font-medium text-[13px] tracking-[3px] uppercase block mb-4">ROOM FEATURES</span>
            <h2 className="font-serif text-[42px] text-espresso mb-4">Everything Your Room Includes</h2>
            <p className="text-brown-warm text-[17px] max-w-[640px] mx-auto">A comprehensive look at the amenities and features available in every room at Raya Hotel Juba.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomFeatures.map((category, i) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 border-t-[3px] border-gold-primary shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-[40px] text-center mb-4">{category.icon}</div>
                <h3 className="font-serif font-semibold text-[20px] text-espresso text-center mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-[14px] text-[#555] leading-[1.6]">
                      <CheckCircle2 size={16} className="text-gold-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Check-in & Check-out Information */}
      <section className="py-[80px] bg-charcoal-deep px-6">
        <div className="max-w-[900px] mx-auto relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gold-primary/30 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-charcoal-deep p-4 text-center border-l-2 md:border-l-0 md:border-t-2 border-gold-primary">
              <Clock size={32} className="text-gold-primary mx-auto mb-3" />
              <div className="text-[12px] font-semibold text-gold-primary uppercase tracking-[2px] mb-1">CHECK-IN</div>
              <div className="font-serif font-bold text-[28px] text-white mb-1">From 00:00</div>
              <div className="text-[13px] text-[#888]">Midnight</div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-charcoal-deep p-4 text-center border-l-2 md:border-l-0 md:border-t-2 border-gold-primary">
              <Clock size={32} className="text-gold-primary mx-auto mb-3" />
              <div className="text-[12px] font-semibold text-gold-primary uppercase tracking-[2px] mb-1">CHECK-OUT</div>
              <div className="font-serif font-bold text-[28px] text-white mb-1">Until 11:00</div>
              <div className="text-[13px] text-[#888]">Morning</div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-charcoal-deep p-4 text-center border-l-2 md:border-l-0 md:border-t-2 border-gold-primary">
              <Key size={32} className="text-gold-primary mx-auto mb-3" />
              <div className="text-[12px] font-semibold text-gold-primary uppercase tracking-[2px] mb-1">PRIVATE</div>
              <div className="font-serif font-bold text-[28px] text-white mb-1">Available</div>
              <div className="text-[13px] text-[#888]">Personalized service</div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-charcoal-deep p-4 text-center border-l-2 md:border-l-0 md:border-t-2 border-gold-primary">
              <Zap size={32} className="text-gold-primary mx-auto mb-3" />
              <div className="text-[12px] font-semibold text-gold-primary uppercase tracking-[2px] mb-1">EXPRESS</div>
              <div className="font-serif font-bold text-[28px] text-white mb-1">Available</div>
              <div className="text-[13px] text-[#888]">Quick & seamless</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: Room Booking CTA */}
      <section className="relative py-[100px] px-6 bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2940&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-charcoal-deep/70" />
        
        <div className="relative z-10 max-w-[800px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif font-bold text-[42px] text-white mb-3">Reserve Your Perfect Room</h2>
            <p className="text-[17px] text-white/80">Best rates guaranteed when you book directly with us</p>
          </div>

          <div className="bg-white/10 backdrop-blur-[20px] border border-white/15 rounded-2xl p-6 md:p-10">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                    <input type="date" className="w-full bg-transparent border border-white/30 rounded-md py-3 pl-10 pr-4 text-white focus:outline-none focus:border-gold-primary transition-colors [&::-webkit-calendar-picker-indicator]:filter-[invert(1)]" />
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                    <input type="date" className="w-full bg-transparent border border-white/30 rounded-md py-3 pl-10 pr-4 text-white focus:outline-none focus:border-gold-primary transition-colors [&::-webkit-calendar-picker-indicator]:filter-[invert(1)]" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                  <select defaultValue="2 Adults" className="w-full bg-transparent border border-white/30 rounded-md py-3 pl-10 pr-4 text-white focus:outline-none focus:border-gold-primary transition-colors appearance-none">
                    <option className="text-charcoal-deep" value="1 Adult">1 Adult</option>
                    <option className="text-charcoal-deep" value="2 Adults">2 Adults</option>
                    <option className="text-charcoal-deep" value="2 Adults, 1 Child">2 Adults, 1 Child</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" size={18} />
                </div>
                <div className="relative">
                  <Bed className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                  <select defaultValue="Standard Double Room" className="w-full bg-transparent border border-white/30 rounded-md py-3 pl-10 pr-4 text-white focus:outline-none focus:border-gold-primary transition-colors appearance-none">
                    <option className="text-charcoal-deep" value="Standard Double Room">Standard Double Room</option>
                    <option className="text-charcoal-deep" value="Deluxe Double Room">Deluxe Double Room</option>
                    <option className="text-charcoal-deep" value="Premium Double Suite">Premium Double Suite</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" size={18} />
                </div>
              </div>

              <div className="pt-2">
                <button type="button" className="w-full bg-gold-primary text-charcoal-deep font-semibold text-[15px] uppercase tracking-[2px] py-4 rounded-md hover:bg-gold-light transition-colors">
                  Check Availability
                </button>
              </div>
            </form>
          </div>

          <div className="text-center mt-8">
            <p className="text-white/70 text-[15px]">
              Or call us directly: <a href="tel:+211925754459" className="text-gold-primary font-semibold hover:underline">+211 925 754 459</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

