import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import Contact from '../components/sections/Contact';
import { useSiteData } from '../hooks/useSiteData';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const { data, loading } = useSiteData();

  if (loading) return null;

  return (
    <div className="bg-secondary-dark min-h-screen">
      <Navbar settings={data.settings} />

      <div className="pt-64 pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-32"
          >
             <span className="text-primary font-bold uppercase tracking-[1em] text-[10px] mb-8 block">İLETİŞİM KURUN</span>
            <h1 className="text-6xl md:text-[10rem] font-serif font-black text-white uppercase tracking-tighter leading-none mb-12">
              Asaletle <br/><span className="text-primary italic">Tanışın</span>
            </h1>
            <p className="max-w-2xl mx-auto text-white/40 text-xl font-medium leading-relaxed">
              Decoor dünyasına adım atmak, projeleriniz hakkında görüşmek veya özel tasarım randevusu almak için bize ulaşın.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-12 mb-32">
             {[
               { icon: MapPin, title: 'Atölye & Genel Merkez', value: data.settings.address },
               { icon: Phone, title: 'Kişisel Danışman', value: data.settings.phone },
               { icon: Mail, title: 'Yazışma Adresi', value: data.settings.email },
               { icon: Clock, title: 'Müsaitlik', value: 'Pzt-Cmt: 09:00 - 19:00' }
             ].map((item, i) => (
               <div key={i} className="text-center group">
                  <div className="w-20 h-20 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8 group-hover:bg-primary group-hover:text-secondary-dark transition-all duration-700 shadow-2xl">
                    <item.icon size={28} />
                  </div>
                  <h4 className="text-white font-serif font-bold mb-3 uppercase text-sm tracking-[0.2em]">{item.title}</h4>
                  <p className="text-white/30 text-base font-medium leading-relaxed">{item.value}</p>
               </div>
             ))}
          </div>
          
          <div className="rounded-[4rem] overflow-hidden shadow-2xl shadow-black/50 border border-white/5">
            <Contact settings={data.settings} />
          </div>

          {/* Map Section */}
          <div className="mt-32 relative h-[600px] rounded-[4rem] overflow-hidden group">
             <div className="absolute inset-0 bg-primary/20 mix-blend-color z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-1000" />
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.79327625!2d28.871754!3d41.005321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa704027475a5%3A0xc3cf6b95c378e9b0!2s%C4%B0stanbul!5e0!3m2!1str!2str!4v1713461234567!5m2!1str!2str" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-1000"
             ></iframe>
          </div>
        </div>
      </div>

      <Footer settings={data.settings} />
      <WhatsAppButton phone={data.settings.whatsapp} />
    </div>
  );
};

export default ContactPage;
