import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Spa & Wellness', path: '/spa' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-brown-warm bg-ivory">
      {/* Navigation */}
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-400',
          isScrolled
            ? 'bg-charcoal-deep/95 backdrop-blur-md border-b border-gold-primary/15 py-4'
            : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border border-gold-primary flex items-center justify-center rotate-45 group-hover:bg-gold-primary/10 transition-colors">
              <span className="font-serif text-gold-primary -rotate-45 text-lg">R</span>
            </div>
            <span className="font-serif text-gold-primary tracking-[4px] text-lg uppercase hidden sm:block">
              Raya Hotel
            </span>
          </Link>

          {/* Desktop Nav & Contact */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-[13px] font-medium tracking-[1.5px] uppercase relative group',
                  isScrolled ? 'text-white' : 'text-white'
                )}
              >
                {link.name}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 w-full h-[2px] bg-gold-primary origin-center transition-transform duration-300',
                    location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  )}
                />
              </Link>
            ))}
            
            <div className="w-[1px] h-4 bg-gold-primary/40 ml-2 mr-2" />
            
            <a href="tel:+211925754459" className="flex items-center gap-2 text-white hover:text-gold-primary transition-colors">
              <Phone size={16} />
              <span className="text-[13px]">+211 925 754 459</span>
            </a>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/booking"
              className="bg-gold-primary text-charcoal-deep text-[13px] font-semibold tracking-[2px] uppercase px-7 py-3 rounded hover:bg-gold-light transition-colors shadow-gold"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-gold-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-charcoal-deep flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="font-serif text-3xl text-white hover:text-gold-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 flex flex-col items-center gap-6"
              >
                <a href="tel:+211925754459" className="text-gold-primary text-lg">+211 925 754 459</a>
                <Link
                  to="/booking"
                  className="bg-gold-primary text-charcoal-deep text-sm font-semibold tracking-[2px] uppercase px-8 py-4 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal-deep pt-20 pb-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gold-primary/30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-gold-primary rotate-45 bg-charcoal-deep" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 border border-white flex items-center justify-center rotate-45">
                  <span className="font-serif text-white -rotate-45">R</span>
                </div>
                <span className="font-serif text-white tracking-[4px] uppercase">Raya Hotel</span>
              </div>
              <p className="font-cormorant italic text-gold-primary text-lg mb-6">
                Your Haven of Comfort in the Heart of Juba
              </p>
              <div className="flex gap-3">
                {['IG', 'FB', 'TW', 'TA'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full border border-gold-primary/50 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-white transition-all duration-300 hover:shadow-gold">
                    <span className="text-xs">{social}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[13px] font-semibold tracking-[2px] uppercase text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-[#A0A0A0] hover:text-gold-primary transition-colors flex items-center gap-2 group">
                      <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold-primary">›</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[13px] font-semibold tracking-[2px] uppercase text-white mb-6">Contact Us</h4>
              <ul className="space-y-4 text-[#A0A0A0] text-[15px]">
                <li className="flex items-start gap-3">
                  <span className="text-gold-primary mt-1">📍</span>
                  <span>Haimayo, Juba, South Sudan<br/><span className="text-[13px]">RHRW+8J Juba</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold-primary">📞</span>
                  <a href="tel:+211925754459" className="hover:text-gold-primary transition-colors">+211 925 754 459</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold-primary">✉️</span>
                  <a href="mailto:info@rayahoteljuba.com" className="hover:text-gold-primary transition-colors">info@rayahoteljuba.com</a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-[13px] font-semibold tracking-[2px] uppercase text-white mb-6">Stay Updated</h4>
              <p className="text-[#808080] text-sm mb-4">Subscribe for exclusive offers and hotel news</p>
              <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-charcoal-soft border border-[#444] rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-primary transition-colors"
                />
                <button className="bg-gold-primary text-charcoal-deep font-semibold text-[13px] tracking-[2px] uppercase py-3 rounded hover:bg-gold-light transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-[#333] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-[#666]">
            <p>© {new Date().getFullYear()} Raya Hotel Juba. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gold-primary transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-gold-primary transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Actions */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-gold-primary rounded-full flex items-center justify-center text-white shadow-lg hover:bg-gold-deep transition-colors"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/211925754459" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </a>
    </div>
  );
}
