import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import CategoryGrid from '../components/sections/CategoryGrid';
import Process from '../components/sections/Process';
import StatsBanner from '../components/sections/StatsBanner';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import { useSiteData } from '../hooks/useSiteData';

const Home = () => {
  const { data, loading } = useSiteData();

  if (loading) {
    return (
      <div className="min-h-screen bg-secondary-dark flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-secondary-dark overflow-hidden">
      <Navbar settings={data.settings} />
      
      <main>
        <Hero content={data.content.hero} />
        
        <CategoryGrid />
        
        <StatsBanner />
        
        <Process />

        <div className="py-32 bg-secondary-dark border-t border-white/5">
           <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <div className="relative group">
                    <img 
                       src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                       className="rounded-[4rem] shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
                       alt="Living Room"
                    />
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-[80px]" />
                 </div>
                 <div>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
                       Kalite <span className="text-primary italic">Asla Tesadüf</span> Değildir
                    </h2>
                    <p className="text-white/40 text-lg leading-relaxed mb-10">
                       Her bir parça, yılların tecrübesine sahip ustalarımızın elinden geçer. En modern tasarım trendlerini, zamansız işçilikle harmanlıyoruz. Ofisinizden mutfağınıza kadar her alan için çözümler sunuyoruz.
                    </p>
                    <div className="space-y-6">
                       <div className="flex items-center gap-4 text-white font-bold">
                          <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">✓</div>
                          ISO 9001 Kalite Belgeli İmalat
                       </div>
                       <div className="flex items-center gap-4 text-white font-bold">
                          <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">✓</div>
                          İhracat Standartlarında Üretim
                       </div>
                       <div className="flex items-center gap-4 text-white font-bold">
                          <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">✓</div>
                          E-1 Sınıfı Anti-Kanserojen Malzemeler
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <Contact settings={data.settings} />
      </main>

      <Footer settings={data.settings} />
      <WhatsAppButton phone={data.settings.whatsapp} />
    </div>
  );
};

export default Home;
