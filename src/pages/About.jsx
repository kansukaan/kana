import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import { useSiteData } from '../hooks/useSiteData';
import { motion } from 'framer-motion';
import { Award, Users, Rocket, ShieldCheck } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label }) => (
  <div className="text-center group p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-700">
    <div className="w-24 h-24 bg-primary text-secondary-dark rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/20 group-hover:scale-110 transition-transform duration-700">
      <Icon size={32} />
    </div>
    <div className="text-5xl font-serif font-black text-white mb-3 tracking-tighter">{value}</div>
    <div className="text-primary/60 text-[10px] font-bold uppercase tracking-[0.4em]">{label}</div>
  </div>
);

const About = () => {
  const { data, loading } = useSiteData();

  if (loading) return null;

  return (
    <div className="bg-secondary-dark min-h-screen">
      <Navbar settings={data.settings} />

      {/* Hero Section */}
      <section className="relative pt-64 pb-32 overflow-hidden bg-golden-silk">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold uppercase tracking-[1em] text-[10px] mb-8 block"
          >
            MİRAS VE VİZYON
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-7xl md:text-[10rem] font-serif font-black text-white uppercase tracking-tighter leading-[0.85] mb-12"
          >
            Sanat ve <br/><span className="text-primary italic">Asalet</span>
          </motion.h1>
          <p className="max-w-3xl mx-auto text-white/50 text-xl font-medium leading-relaxed italic">
            "Decoor Mobilya, her dokunuşta bir hikaye, her tasarımda bir miras bırakmak için kuruldu."
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 bg-[#0e0e0f]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[4rem] overflow-hidden group shadow-2xl shadow-black/50"
            >
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80" 
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                alt="Production"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/80 via-transparent to-transparent" />
            </motion.div>
            
            <div className="space-y-12">
               <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px]">GURURLUYUZ</span>
              <h2 className="text-5xl md:text-7xl font-serif font-black text-white uppercase tracking-tighter leading-tight">Zanaatın <br /> <span className="text-primary italic">Sınırlarını Aşıyoruz</span></h2>
              <p className="text-white/40 text-xl font-medium leading-relaxed">
                Modern mobilya üretimi, ustalığın teknoloji ile kusursuz uyumunu gerektirir. Fabrikamızda son teknoloji CNC üniteleri ile milimetrik hassasiyette kesimler yapıyor, en kaliteli masif ve lake kaplamalarla ürünlerimizi sonlandırıyoruz.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                 <div className="space-y-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                       <ShieldCheck size={28} />
                    </div>
                    <h4 className="text-white text-xl font-serif font-bold uppercase tracking-tight">Kusursuz Kalite</h4>
                    <p className="text-white/30 text-sm leading-relaxed">Her bir parçamız, nesiller boyu kullanılacak dayanıklılık ve estetik standartlarında üretilir.</p>
                 </div>
                 <div className="space-y-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                       <Award size={28} />
                    </div>
                    <h4 className="text-white text-xl font-serif font-bold uppercase tracking-tight">Ödüllü Tasarım</h4>
                    <p className="text-white/30 text-sm leading-relaxed">Global tasarım trendlerini, Decoor'un özgün ve klasik dokunuşlarıyla yeniden yorumluyoruz.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-40 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <StatCard icon={Award} value="25" label="Yıllık Tecrübe" />
            <StatCard icon={Users} value="500+" label="Kurumsal Proje" />
            <StatCard icon={Award} value="12" label="Ülke İhracatı" />
            <StatCard icon={Rocket} value="10k+" label="Metrekare Tesis" />
          </div>
        </div>
      </section>

      <Footer settings={data.settings} />
      <WhatsAppButton phone={data.settings.whatsapp} />
    </div>
  );
};

export default About;
