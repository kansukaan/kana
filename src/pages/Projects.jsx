import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import { useSiteData } from '../hooks/useSiteData';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group cursor-pointer relative"
  >
    <div className="relative h-[700px] rounded-[3rem] overflow-hidden mb-8">
      <img 
        src={project.image} 
        alt={project.title} 
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.5] group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark via-secondary-dark/10 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-700" />
      
      <div className="absolute top-10 right-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-secondary-dark opacity-0 group-hover:opacity-100 transform translate-x-10 group-hover:translate-x-0 transition-all duration-700 shadow-2xl">
         <ArrowUpRight size={24} />
      </div>
      
      <div className="absolute bottom-12 left-12 right-12">
        <div className="text-primary font-bold text-[10px] uppercase tracking-[0.5em] mb-6 block">{project.category}</div>
        <h3 className="text-4xl md:text-5xl font-serif font-black text-white mb-6 uppercase tracking-tighter leading-none">{project.title}</h3>
        
        <div className="flex items-center gap-8 border-t border-white/10 pt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
           <div>
              <div className="text-white/20 text-[9px] uppercase tracking-widest mb-1">Mekan</div>
              <div className="text-white font-bold text-sm uppercase tracking-widest">{project.location}</div>
           </div>
           <div className="w-[1px] h-8 bg-white/10" />
           <div>
              <div className="text-white/20 text-[9px] uppercase tracking-widest mb-1">Yıl</div>
              <div className="text-white font-bold text-sm uppercase tracking-widest">{project.year}</div>
           </div>
        </div>
      </div>
      
      {/* Golden Highlight Border */}
      <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-[3rem] transition-all duration-700 pointer-events-none" />
    </div>
  </motion.div>
);

const Projects = () => {
  const { data, loading } = useSiteData();

  const projects = [
    { title: 'Majesty Ofis Kulesi', category: 'Kurumsal Proje', location: 'İstanbul', year: '2023', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Gold Palace Penthouse', category: 'Özel Rezidans', location: 'Ankara', year: '2024', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Elysium Malikanesi', category: 'Lüks Konut', location: 'Bodrum', year: '2023', image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Atölye Heritage', category: 'Showroom', location: 'İzmir', year: '2022', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80' },
  ];

  if (loading) return null;

  return (
    <div className="bg-secondary-dark min-h-screen">
      <Navbar settings={data.settings} />

      <div className="pt-56 pb-32 bg-golden-silk overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-end">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
               <span className="text-primary font-bold uppercase tracking-[1em] text-[10px] mb-8 block">REFERANSLARIMIZ</span>
               <h1 className="text-7xl md:text-9xl font-serif font-black text-white uppercase tracking-tighter leading-[0.85] mb-12">
                Sanatın <br /> <span className="text-primary italic">İzleri</span>
               </h1>
               <p className="text-white/40 text-xl font-medium max-w-lg leading-relaxed">
                Her projede bir rüya, her detayda Decoor imzasının asaletini bulacaksınız.
               </p>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               className="flex gap-20 justify-end pb-8"
            >
               <div className="text-right">
                  <div className="text-6xl font-serif font-black text-white mb-2 tracking-tighter">500+</div>
                  <div className="text-primary font-bold text-[9px] uppercase tracking-widest">İmza Müşteri</div>
               </div>
               <div className="text-right">
                  <div className="text-6xl font-serif font-black text-white mb-2 tracking-tighter">12</div>
                  <div className="text-primary font-bold text-[9px] uppercase tracking-widest">Ülke Ağı</div>
               </div>
            </motion.div>
          </div>
        </div>
        
        {/* Absolute Background Serif */}
        <div className="absolute top-20 -right-40 text-[30rem] font-serif font-black text-white/5 select-none leading-none pointer-events-none">
          D
        </div>
      </div>

      <div className="container mx-auto px-6 pb-40">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-40 p-24 rounded-[4rem] bg-secondary border border-primary/20 flex flex-col items-center text-center relative overflow-hidden"
        >
           <div className="absolute inset-0 bg-golden-silk opacity-10" />
           <h2 className="text-secondary-dark text-6xl md:text-8xl font-serif font-black uppercase tracking-tighter mb-12 max-w-4xl relative z-10">
             Sizin İçin de Bir <span className="text-primary italic">Miras</span> Yaratalım
           </h2>
           <button className="bg-secondary-dark text-white px-16 py-7 rounded-full font-black uppercase tracking-[0.3em] text-[11px] hover:scale-105 transition-all shadow-2xl relative z-10">
             PROJEYE BAŞLAYIN
           </button>
        </motion.div>
      </div>

      <Footer settings={data.settings} />
      <WhatsAppButton phone={data.settings.whatsapp} />
    </div>
  );
};

export default Projects;
