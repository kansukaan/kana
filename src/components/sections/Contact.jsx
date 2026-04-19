import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Globe, Map, Share2 } from 'lucide-react';

const Contact = ({ settings }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.status === 'success') {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ loading: false, success: false, error: result.message });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Sunucu hatası oluştu.' });
    }
  };

  return (
    <section id="iletişim" className="py-24 bg-secondary-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right blur-[80px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif font-black text-white mb-10 uppercase tracking-tighter leading-tight">
              Bize <br /><span className="text-primary italic">Ulaşın</span>
            </h2>
            <p className="text-white/40 text-xl font-medium mb-16 leading-relaxed italic">
              "Hayallerinizdeki mobilyayı, asalet ve zarafetle hayata geçirmek için bir adım atın. Uzman ekibimiz sizi bekliyor."
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary shrink-0 border border-white/10">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Adres</h4>
                  <p className="text-white/40">{settings?.address || 'Mobilya Sanayi Bölgesi, Decoor Plaza No:42'}</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary shrink-0 border border-white/10">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Telefon</h4>
                  <p className="text-white/40">{settings?.phone || '05327043159'}</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary shrink-0 border border-white/10">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">E-Posta</h4>
                  <p className="text-white/40">{settings?.email || 'info@decoormobilya.com'}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {[Globe, Map, Share2].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/60 text-sm font-medium mb-2 ml-1">İsim</label>
                  <input 
                    type="text" required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-primary outline-none transition-all"
                    placeholder="Adınız Soyadınız"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-medium mb-2 ml-1">E-Posta</label>
                  <input 
                    type="email" required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-primary outline-none transition-all"
                    placeholder="E-posta Adresiniz"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/60 text-sm font-medium mb-2 ml-1">Konu</label>
                <input 
                  type="text" required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-primary outline-none transition-all"
                  placeholder="Hangi konuda bilgi almak istersiniz?"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm font-medium mb-2 ml-1">Mesajınız</label>
                <textarea 
                  rows="4" required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-primary outline-none transition-all resize-none"
                  placeholder="Mesajınızı detaylıca yazın..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={status.loading}
                className="w-full bg-primary hover:bg-primary-dark text-secondary-dark font-black py-7 rounded-full flex items-center justify-center gap-4 transition-all transform hover:scale-[1.02] shadow-2xl shadow-primary/20 uppercase tracking-[0.3em] text-xs"
              >
                {status.loading ? 'GÖNDERİLİYOR...' : 'MESAJI İLETİN'} <Send size={18} />
              </button>

              {status.success && <p className="text-emerald-400 text-center font-medium mt-4">Mesajınız başarıyla iletildi!</p>}
              {status.error && <p className="text-rose-400 text-center font-medium mt-4">{status.error}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
