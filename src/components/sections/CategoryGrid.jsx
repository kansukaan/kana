import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout, Briefcase, Ruler } from 'lucide-react';

const CategoryGrid = () => {
  const categories = [
    {
      title: 'Zarif Mutfak',
      desc: 'İşlevselliğin asaletle buluştuğu, özel tasarım mutfak ve dolap çözümleri.',
      icon: Layout,
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80',
      path: '/products'
    },
    {
      title: 'Yönetici Ofisi',
      desc: 'Prestijinizi yansıtan, konfor ve otoritenin simgesi ofis mobilyaları.',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      path: '/products'
    },
    {
      title: 'Özel Koleksiyon',
      desc: 'Size özel, sınırlı sayıda üretilen eşsiz mobilya tasarımları.',
      icon: Ruler,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      path: '/products'
    }
  ];

  return (
    <section className="py-40 bg-secondary-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 border-b border-primary/10 pb-16">
           <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-serif font-black text-white uppercase tracking-tighter mb-8 leading-tight">
                Zanaatın <span className="text-primary italic">Zirvesi</span>
              </h2>
              <p className="text-white/40 text-xl font-medium">
                Her mekan için ayrı bir ruh, her detay için üstün bir ustalık.
              </p>
           </div>
           <Link to="/products" className="group flex items-center gap-4 text-primary font-black uppercase tracking-[0.2em] text-xs pb-4">
              TÜM KOLEKSİYON <div className="w-12 h-[1px] bg-primary group-hover:w-24 transition-all duration-500" />
           </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-[600px] mb-10 overflow-hidden rounded-[2rem]">
                <img 
                  src={cat.image} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.5] group-hover:grayscale-0" 
                  alt={cat.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark via-transparent to-transparent opacity-80" />
                <div className="absolute top-8 right-8 w-16 h-16 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-45 group-hover:rotate-0">
                  <cat.icon size={24} />
                </div>
              </div>
              
              <h3 className="text-3xl font-serif font-black text-white mb-4 uppercase tracking-tighter group-hover:text-primary transition-colors">{cat.title}</h3>
              <p className="text-white/40 font-medium mb-8 leading-relaxed line-clamp-2">{cat.desc}</p>
              <Link to={cat.path} className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-white/60 hover:text-primary transition-colors">
                 KEŞFETMEK İÇİN TIKLAYIN
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
