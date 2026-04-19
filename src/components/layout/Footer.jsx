import React from 'react';

const Footer = ({ settings }) => {
  return (
    <footer className="bg-[#0a0a0b] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-secondary-dark font-black">D</span>
              </div>
              <span className="uppercase tracking-wider">{settings?.name || 'DECOOR'}</span>
            </div>
            <p className="text-white/40 max-w-sm mb-6 leading-relaxed">
              Geleceğin yaşam alanlarını, modern teknolojiler ve geleneksel el işçiliğini harmanlayarak tasarlıyoruz. Her detayda mükemmellik, her dokunuşta Decoor imzası.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Hızlı Linkler</h4>
            <ul className="space-y-4">
              {['Ana Sayfa', 'Ürünler', 'Hakkımızda', 'İletişim'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/40 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Kurumsal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/40 hover:text-primary transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" className="text-white/40 hover:text-primary transition-colors">Kullanım Şartları</a></li>
              <li><a href="#" className="text-white/40 hover:text-primary transition-colors">Teslimat ve İade</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-sm">
            © 2024 {settings?.name}. Tüm Hakları Saklıdır.
          </p>
          <div className="flex gap-4 text-xs font-bold tracking-widest text-white/20 uppercase">
             Design by <span className="text-primary/40 leading-none">Antigravity AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
