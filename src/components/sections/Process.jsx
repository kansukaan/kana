import React from 'react';
import { motion } from 'framer-motion';
import { Compass, PenTool, Settings, Truck } from 'lucide-react';

const Process = () => {
  const steps = [
    { 
      id: 'I', 
      title: 'Mekan Keşfi', 
      icon: Compass, 
      desc: 'Mekanınızın potansiyelini yerinde analiz ediyor, hayallerinizi teknik verilerle harmanlıyoruz.' 
    },
    { 
      id: 'II', 
      title: 'Kürasyon & Tasarım', 
      icon: PenTool, 
      desc: 'Size özel materyalleri seçiyoruz. Her parça, mekanın ruhuna uygun bir sanat eseri olarak kurgulanıyor.' 
    },
    { 
      id: 'III', 
      title: 'Usta Ellerde İmalat', 
      icon: Settings, 
      desc: 'Geleneksel zanaati modern teknolojiyle birleştirdiğimiz atölyemizde üretim sürecine başlıyoruz.' 
    },
    { 
      id: 'IV', 
      title: 'Kurulum & Teslimat', 
      icon: Truck, 
      desc: 'Söz verdiğimiz takvimde, titiz bir kurulumla hayalinizdeki mekanı gerçeğe dönüştürüp teslim ediyoruz.' 
    }
  ];

  return (
    <section className="py-40 bg-secondary-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
           <span className="text-primary font-bold uppercase tracking-[1em] text-[10px] mb-6 block">KUSURSUZLUĞA GİDEN YOL</span>
           <h2 className="text-5xl md:text-7xl font-serif font-black text-white uppercase tracking-tighter mb-8 italic">Mirasın <span className="text-primary not-italic">İnşası</span></h2>
           <p className="text-white/30 max-w-2xl mx-auto text-lg font-medium">Decoor imzası taşıyan her mobilya, dört aşamalı bir kusursuzluk yolculuğundan geçer.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative group pt-16 border-t border-white/5 hover:border-primary/40 transition-all duration-700"
            >
              <div className="text-5xl font-serif font-black text-white/5 absolute top-4 left-0 group-hover:text-primary transition-colors group-hover:scale-110 duration-700">
                {step.id}
              </div>
              
              <div className="w-16 h-16 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-secondary-dark transition-all duration-700 shadow-2xl">
                 <step.icon size={28} />
              </div>
              
              <h3 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tight group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-white/40 leading-relaxed font-medium text-base">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
