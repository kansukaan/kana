import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import { useSiteData } from '../hooks/useSiteData';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Filter, Search } from 'lucide-react';

const ProductCard = ({ product }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className="group relative"
  >
    <div className="aspect-[3/4] overflow-hidden rounded-[2.5rem] relative mb-8">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.3] group-hover:grayscale-0 shadow-2xl" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark via-transparent to-transparent opacity-60" />
      
      {/* Premium Badge */}
      <div className="absolute top-8 left-8 px-5 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
         <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">{product.category}</span>
      </div>
    </div>
    
    <div className="px-4">
      <h3 className="text-3xl font-serif font-black text-white mb-3 uppercase tracking-tighter group-hover:text-primary transition-colors">{product.name}</h3>
      <p className="text-white/40 text-base font-medium mb-8 line-clamp-2 leading-relaxed">{product.description}</p>
      
      <div className="flex items-center justify-between border-t border-white/5 pt-6">
        <span className="text-2xl font-serif font-bold text-white">{product.price}</span>
        <button className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:translate-x-2 transition-transform">
          DETAYLARI GÖR <ArrowRight size={16} />
        </button>
      </div>
    </div>
    
    {/* Elegant Hover Effect */}
    <div className="absolute -inset-6 border border-primary/0 group-hover:border-primary/20 rounded-[3.5rem] transition-all duration-700 -z-10 pointer-events-none" />
  </motion.div>
);

const Products = () => {
  const { data, loading } = useSiteData();
  const [filter, setFilter] = useState('Hepsi');

  const categories = ['Hepsi', 'Ofis', 'Mutfak', 'Oturma Grubu', 'Özel İmalat'];
  
  const allProducts = [
    { id: 1, name: 'Marquis Ofis Takımı', category: 'Ofis', price: '₺45.000', description: 'Otorite ve konforu harmanlayan, masif ceviz detaylı makam odası takımı.', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80' },
    { id: 2, name: 'Heritage Mutfak', category: 'Mutfak', price: '₺82.000', description: 'Klasik İtalyan çizgilerini taşıyan, el işçiliği lake kaplama mutfak adası.', image: 'https://images.unsplash.com/photo-1556912177-c54030639a04?auto=format&fit=crop&w=800&q=80' },
    { id: 3, name: 'Regent Koltuk', category: 'Oturma Grubu', price: '₺38.500', description: 'Kadife doku ve altın varaklı ayak detaylarıyla gerçek bir klasik.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80' },
    { id: 4, name: 'Duke Çalışma Masası', category: 'Ofis', price: '₺12.400', description: 'Özel üretim deri kaplama yüzeyli, zamansız tasarım çalışma masası.', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80' },
    { id: 5, name: 'Imperial Konsol', category: 'Oturma Grubu', price: '₺18.900', description: 'Antik bronz kulplar ve mermer üst tablayla zenginleştirilmiş konsol.', image: 'https://images.unsplash.com/photo-1593060558714-c08240459973?auto=format&fit=crop&w=800&q=80' },
    { id: 6, name: 'Oxford Kütüphane', category: 'Özel İmalat', price: '₺24.200', description: 'Zeminden tavana masif meşe, gizli aydınlatmalı kütüphane sistemi.', image: 'https://images.unsplash.com/photo-1558997519-53aa73a38ca8?auto=format&fit=crop&w=800&q=80' },
  ];

  const filteredProducts = filter === 'Hepsi' 
    ? allProducts 
    : allProducts.filter(p => p.category === filter);

  if (loading) return null;

  return (
    <div className="bg-secondary-dark min-h-screen">
      <Navbar settings={data.settings} />
      
      {/* Header */}
      <div className="pt-56 pb-24 bg-golden-silk">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
             <span className="text-primary font-bold uppercase tracking-[1em] text-[10px] mb-8 block">MİRAS KOLEKSİYONU</span>
            <h1 className="text-7xl md:text-9xl font-serif font-black text-white mb-10 uppercase tracking-tighter leading-none">
              Zamana <br /> <span className="text-primary italic">Meydan Okuyan</span>
            </h1>
            <p className="text-white/40 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Decoor mobilyaları, nesiller boyu aktarılacak bir mirasın parçasıdır. Her tasarımda asaleti ve kaliteyi hissedin.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-6 mb-24 relative z-10">
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-12 py-4 rounded-full font-black uppercase tracking-[0.2em] text-[11px] transition-all duration-500 border ${filter === cat ? 'bg-primary text-secondary-dark border-primary shadow-2xl shadow-primary/40 scale-105' : 'bg-transparent text-white/40 border-white/10 hover:border-primary/50 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 pb-40">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Footer settings={data.settings} />
      <WhatsAppButton phone={data.settings.whatsapp} />
    </div>
  );
};

export default Products;
