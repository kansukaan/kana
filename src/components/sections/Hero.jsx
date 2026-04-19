import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = ({ content }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary-dark pt-20">
      {/* Golden Silk Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -right-20 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-10 backdrop-blur-md"
          >
            <Award size={16} className="text-primary" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-white font-bold">Zamana Meydan Okuyan Craftsmanship</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-9xl font-serif font-black text-white leading-[0.9] mb-10 uppercase tracking-tighter"
          >
            Yaşam Alanınıza <br />
            <span className="text-primary italic">Asalet Katın</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/50 text-xl md:text-2xl font-medium leading-relaxed mb-16 max-w-2xl mx-auto"
          >
            {content?.subtitle || 'Decoor Mobilya ile modern tasarımın en saf hali, en kaliteli malzemelerle buluşuyor. Geleceğin klasiklerini bugünden inşa ediyoruz.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <Link
              to="/products"
              className="group relative px-12 py-6 bg-primary text-secondary-dark font-black uppercase tracking-widest rounded-full overflow-hidden shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <div className="relative z-10 flex items-center gap-3">
                Koleksiyonu Keşfet <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <button className="flex items-center gap-4 text-white group hover:text-primary transition-colors">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                <Play size={20} fill="currentColor" className="ml-1" />
              </div>
              <span className="font-bold uppercase tracking-widest text-sm">Üretim Videomuz</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary-dark to-transparent z-10" />
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-10 items-center opacity-20">
         <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-primary to-transparent" />
         <span className="text-[10px] uppercase tracking-[1em] rotate-90 whitespace-nowrap text-white font-bold">EST. 1998</span>
         <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
