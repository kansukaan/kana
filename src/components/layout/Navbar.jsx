import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ settings }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Ürünler', path: '/products' },
    { name: 'Projeler', path: '/projects' },
    { name: 'Hakkımızda', path: '/about' },
    { name: 'İletişim', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-secondary-dark/95 backdrop-blur-2xl py-4 border-b border-primary/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]' : 'bg-transparent py-10'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-2xl shadow-primary/20"
          >
            <span className="text-secondary-dark font-serif font-black text-2xl">D</span>
          </motion.div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-serif font-black text-white uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">
              {settings?.name || 'DECOOR'}
            </span>
            <span className="text-[10px] text-primary font-bold uppercase tracking-[0.4em] ml-1 mt-1 opacity-60">Mobilya & Tasarım</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-primary relative group ${location.pathname === link.path ? 'text-primary' : 'text-white/70'}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-[1px] bg-primary transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
          <a 
            href={`tel:${settings?.phone}`}
            className="group relative overflow-hidden bg-primary px-10 py-3.5 rounded-full font-bold transition-all shadow-lg shadow-primary/10 hover:shadow-primary/30 active:scale-95"
          >
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <div className="flex items-center gap-3 relative z-10 text-secondary-dark">
              <Phone size={14} className="group-hover:rotate-12 transition-transform" />
              <span className="text-xs uppercase tracking-widest">{settings?.phone || '05327043159'}</span>
            </div>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary-dark border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)} 
                  className={`text-xl font-bold uppercase ${location.pathname === link.path ? 'text-primary' : 'text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href={`tel:${settings?.phone}`}
                className="bg-primary text-secondary-dark p-5 rounded-2xl font-bold text-center mt-6 shadow-xl shadow-primary/20"
              >
                HEMEN ARA: {settings?.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
