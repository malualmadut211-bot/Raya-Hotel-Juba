import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight, Play, Instagram } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'rooms', label: 'Rooms' },
  { id: 'exterior', label: 'Exterior' },
  { id: 'terrace', label: 'Terrace & Outdoors' },
  { id: 'spa', label: 'Spa & Wellness' },
  { id: 'lounge', label: 'Lounge' },
  { id: 'views', label: 'Views' },
  { id: 'details', label: 'Details' }
];

const galleryItems = [
  { id: 1, category: 'rooms', title: 'Room Wide Shot', src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop', span: 'row' },
  { id: 2, category: 'rooms', title: 'Room Detail — Bed', src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop', span: 'normal' },
  { id: 3, category: 'rooms', title: 'Room Detail — Desk', src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000&auto=format&fit=crop', span: 'normal' },
  { id: 4, category: 'rooms', title: 'Room Bathroom', src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop', span: 'normal' },
  { id: 5, category: 'exterior', title: 'Hotel Exterior Day', src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop', span: 'col' },
  { id: 6, category: 'exterior', title: 'Hotel Exterior Night', src: 'https://images.unsplash.com/photo-1551882547-ff40c0d589rx?q=80&w=1000&auto=format&fit=crop', span: 'row' },
  { id: 7, category: 'exterior', title: 'Hotel Entrance', src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop', span: 'normal' },
  { id: 8, category: 'terrace', title: 'Sun Terrace Wide', src: 'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=1000&auto=format&fit=crop', span: 'row' },
  { id: 9, category: 'terrace', title: 'Terrace Detail', src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop', span: 'normal' },
  { id: 10, category: 'terrace', title: 'Terrace Sunset', src: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1000&auto=format&fit=crop', span: 'col' },
  { id: 11, category: 'spa', title: 'Spa Setup', src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop', span: 'row' },
  { id: 12, category: 'spa', title: 'Spa Detail', src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop', span: 'normal' },
  { id: 13, category: 'lounge', title: 'Lounge Area', src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop', span: 'normal' },
  { id: 14, category: 'lounge', title: 'Minimarket', src: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=1000&auto=format&fit=crop', span: 'normal' },
  { id: 15, category: 'views', title: 'City View from Room', src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop', span: 'col' },
  { id: 16, category: 'views', title: 'Courtyard View', src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop', span: 'normal' },
  { id: 17, category: 'details', title: 'Towel Arrangement', src: 'https://images.unsplash.com/photo-1584132905271-512c958d674a?q=80&w=1000&auto=format&fit=crop', span: 'normal' },
  { id: 18, category: 'details', title: 'Welcome Amenities', src: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop', span: 'normal' },
  { id: 19, category: 'details', title: 'Hallway/Corridor', src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop', span: 'normal' },
  { id: 20, category: 'details', title: 'Front Desk', src: 'https://images.unsplash.com/photo-1562790351-d273a961e0e9?q=80&w=1000&auto=format&fit=crop', span: 'normal' }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, filteredItems.length]);

  return (
    <div className="bg-ivory min-h-screen">
      {/* Section 1: Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 grid grid-cols-3 grid-rows-2 gap-2 opacity-80 scale-110">
          <img src={galleryItems[0].src} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
          <img src={galleryItems[4].src} className="w-full h-full object-cover row-span-2" alt="" referrerPolicy="no-referrer" />
          <img src={galleryItems[7].src} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
          <img src={galleryItems[10].src} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
          <img src={galleryItems[12].src} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute inset-0 bg-charcoal-deep/40 z-10" />
        
        <div className="relative z-20 text-center px-6 mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif font-bold text-4xl md:text-[56px] text-white mb-4"
          >
            Our Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/80 font-sans max-w-2xl mx-auto"
          >
            A visual journey through Raya Hotel Juba — see what awaits you
          </motion.p>
        </div>
      </section>

      {/* Section 2: Filter Bar */}
      <section className="sticky top-[80px] z-40 bg-white border-b border-[#EEE] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 md:justify-center pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`whitespace-nowrap px-5 py-2 rounded-full font-sans text-[14px] uppercase tracking-[1px] font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gold-primary text-charcoal-deep shadow-sm'
                    : 'bg-transparent text-[#888] hover:bg-[#F5EDE3] hover:text-[#555]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Photo Gallery Grid */}
      <section className="bg-[#FAF6F0] pt-12 pb-[120px]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className={`relative rounded-lg overflow-hidden cursor-pointer group ${
                    item.span === 'row' ? 'row-span-2' : item.span === 'col' ? 'md:col-span-2' : ''
                  }`}
                >
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.08]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-charcoal-deep/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center">
                    <ZoomIn className="text-white w-8 h-8 scale-50 group-hover:scale-100 transition-transform duration-400" />
                    <span className="absolute bottom-6 font-sans font-semibold text-[11px] text-white uppercase tracking-[2px]">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform duration-300 z-50"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            
            <button 
              className="absolute left-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-50"
              onClick={prevImage}
            >
              <ChevronLeft size={48} />
            </button>
            
            <button 
              className="absolute right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-50"
              onClick={nextImage}
            >
              <ChevronRight size={48} />
            </button>

            <div className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={filteredItems[currentIndex].src}
                alt={filteredItems[currentIndex].title}
                className="max-w-full max-h-[80vh] object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="mt-4 text-center">
                <p className="font-sans font-medium text-[13px] text-gold-primary uppercase tracking-[1px]">
                  {filteredItems[currentIndex].category}
                </p>
              </div>
            </div>
            
            <div className="absolute bottom-6 font-sans text-[14px] text-white/70">
              {currentIndex + 1} of {filteredItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section 4: Video Tour */}
      <section className="py-[100px] bg-charcoal-deep text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-sans text-[13px] text-gold-primary uppercase tracking-[2px] font-semibold mb-4">Virtual Experience</p>
          <h2 className="font-serif text-[36px] md:text-[42px] text-white mb-4">Take a Virtual Tour</h2>
          <p className="font-sans text-[16px] text-white/70 max-w-2xl mx-auto mb-10">
            Experience the warmth, comfort, and elegance of Raya Hotel Juba from wherever you are in the world
          </p>
          
          <div className="max-w-[900px] mx-auto aspect-video rounded-xl overflow-hidden relative border-2 border-gold-primary/30">
            {!isVideoPlaying ? (
              <div className="absolute inset-0 group cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                <img 
                  src="https://images.unsplash.com/photo-1542314831-c6a4d14d8379?q=80&w=1600&auto=format&fit=crop" 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gold-primary rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(200,169,110,0.6)] transition-all duration-300">
                    <Play className="text-white ml-2 w-8 h-8" fill="currentColor" />
                  </div>
                </div>
              </div>
            ) : (
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Raya Hotel Juba Virtual Tour" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            )}
          </div>
        </div>
      </section>

      {/* Section 5: Social Media CTA */}
      <section className="py-[80px] bg-ivory text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-[32px] text-charcoal-deep mb-4">Follow Our Journey</h2>
          <p className="font-sans text-[16px] text-brown-warm max-w-2xl mx-auto mb-10">
            Stay inspired — follow us on social media for the latest photos, updates, and special offers
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[1, 2, 3, 4, 5].map((i) => (
              <a key={i} href="#" className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded overflow-hidden group block">
                <img 
                  src={`https://images.unsplash.com/photo-15${i}2719478250-c89cae4dc85b?q=80&w=400&auto=format&fit=crop`} 
                  alt={`Instagram post ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <Instagram className="text-white w-8 h-8 mb-2" />
                  <span className="text-white text-[12px] font-sans font-medium">View on Instagram</span>
                </div>
              </a>
            ))}
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <span className="font-sans font-semibold text-[16px] text-gold-primary">@rayahoteljuba</span>
            <button className="border-2 border-gold-primary text-gold-primary px-8 py-3 rounded hover:bg-gold-primary hover:text-white transition-colors uppercase tracking-[1px] font-semibold text-[14px] flex items-center gap-2">
              <Instagram size={18} />
              Follow Us on Instagram
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
