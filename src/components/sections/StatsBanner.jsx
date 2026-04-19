import React from 'react';
import { motion } from 'framer-motion';

const StatsBanner = () => {
  const stats = [
    { value: '25+', label: 'Yıllık Miras' },
    { value: '500+', label: 'Özel Proje' },
    { value: '12', label: 'Ülkede Varız' },
    { value: '42', label: 'Tasarım Ödülü' },
  ];

  return (
    <section className="py-24 bg-[#1a1a1b] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex-1 min-w-[200px] text-center"
            >
              <div className="text-primary text-6xl md:text-7xl font-serif font-black uppercase tracking-tighter leading-none mb-3">
                {stat.value}
              </div>
              <div className="text-white/40 font-bold uppercase tracking-[0.4em] text-[10px]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
