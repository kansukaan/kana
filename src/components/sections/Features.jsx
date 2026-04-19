import React from 'react';
import { motion } from 'framer-motion';
import { Layers, PenTool, Clock, Settings, Package, Headset } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:border-primary/30"
  >
    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-secondary-dark transition-all duration-500">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-white/40 leading-relaxed font-medium">
      {desc}
    </p>
  </motion.div>
);

const Features = ({ content }) => {
  const features = [
    { icon: Layers, title: content?.f1_title || 'Özel İmalat', desc: content?.f1_desc || 'Sizin ölçülerinize ve zevkinize özel butik üretim.' },
    { icon: PenTool, title: content?.f2_title || 'Ücretsiz Keşif', desc: content?.f2_desc || 'Alanında uzman ekibimizle mekanınızı ücretsiz projelendiriyoruz.' },
    { icon: Clock, title: content?.f3_title || 'Zamanında Teslim', desc: content?.f3_desc || 'Verdiğimiz sözü zamanında tutuyor, hızlı kurulum yapıyoruz.' },
    { icon: Settings, title: 'İleri Teknoloji', desc: 'Son teknoloji CNC ve boyama ünitelerimizle hatasız üretim sağlıyoruz.' },
    { icon: Package, title: 'Güvenli Paketleme', desc: 'Ürünlerimiz tüm Türkiye geneline sigortalı ve korunaklı şekilde sevk edilir.' },
    { icon: Headset, title: '7/24 Destek', desc: 'Satış sonrası tüm soru ve talepleriniz için uzman ekibimiz yanınızda.' },
  ];

  return (
    <section id="ürünler" className="py-24 bg-secondary-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Neden <span className="text-primary italic">Decoor?</span>
          </h2>
          <p className="text-white/40 text-lg">
            Sadece mobilya değil, yaşam alanlarınıza ruh katacak sanat eserleri üretiyoruz.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
