import React, { useState, useEffect } from 'react';
import { LayoutDashboard, MessageSquare, Settings, FileText, BarChart3, LogOut, Save, Trash2 } from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState(null);
  const [messages, setMessages] = useState([]);
  const [settings, setSettings] = useState(null);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [statsRes, msgRes, dataRes] = await Promise.all([
        fetch('/api/admin_get_stats.php').then(r => r.json()),
        fetch('/api/admin_get_messages.php').then(r => r.json()),
        fetch('/api/get_site_data.php').then(r => r.json())
      ]);

      if (statsRes.status === 'success') setStats(statsRes.data);
      if (msgRes.status === 'success') setMessages(msgRes.data);
      if (dataRes.status === 'success') {
        setSettings(dataRes.data.settings);
        setContent(dataRes.data.content);
      }
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin_update_settings.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ settings, content })
      });
      const result = await res.json();
      alert(result.message);
    } catch (err) {
      alert('Güncelleme hatası');
    }
  };

  if (loading) return <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Yükleniyor...</div>;

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-200">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-8 h-8 bg-primary rounded shadow-lg shadow-primary/20" />
          <span className="font-bold text-xl tracking-tight text-white">DECOOR PANEL</span>
        </div>
        
        <nav className="flex-1 space-y-2">
          {[
            { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
            { id: 'messages', icon: MessageSquare, label: 'Gelen Kutusu' },
            { id: 'settings', icon: Settings, label: 'Site Yönetimi' },
            { id: 'blog', icon: FileText, label: 'Blog Yönetimi' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === tab.id ? 'bg-primary text-secondary-dark font-bold' : 'hover:bg-slate-800'}`}
            >
              <tab.icon size={20} />
              {tab.label}
            </button>
          ))}
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all">
          <LogOut size={20} />
          Çıkış Yap
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-white">Genel Bakış</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <p className="text-slate-400 text-sm mb-2 uppercase tracking-widest">Toplam Mesaj</p>
                <h3 className="text-4xl font-bold text-white">{stats?.total_messages || 0}</h3>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <p className="text-slate-400 text-sm mb-2 uppercase tracking-widest">Site Ziyareti</p>
                <h3 className="text-4xl font-bold text-white">{stats?.analytics?.find(a => a.event_type === 'total_visits')?.event_count || 1250}</h3>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <p className="text-slate-400 text-sm mb-2 uppercase tracking-widest">Aktif Blog</p>
                <h3 className="text-4xl font-bold text-white">{stats?.total_blogs || 0}</h3>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-white">Gelen Mesajlar</h1>
            <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden text-sm">
              <table className="w-full border-collapse">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="px-6 py-4 text-left">İsim</th>
                    <th className="px-6 py-4 text-left">E-Posta</th>
                    <th className="px-6 py-4 text-left">Konu</th>
                    <th className="px-6 py-4 text-left">Tarih</th>
                    <th className="px-6 py-4 text-center">İşlem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {messages.map(msg => (
                    <tr key={msg.id} className="hover:bg-slate-800/30">
                      <td className="px-6 py-4 font-medium text-white">{msg.name}</td>
                      <td className="px-6 py-4 text-slate-400">{msg.email}</td>
                      <td className="px-6 py-4">{msg.subject}</td>
                      <td className="px-6 py-4 text-slate-500">{new Date(msg.created_at).toLocaleDateString()}</td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-primary hover:underline">Detay</button>
                      </td>
                    </tr>
                  ))}
                  {messages.length === 0 && (
                    <tr><td colSpan="5" className="px-6 py-10 text-center text-slate-500">Henüz mesaj bulunmuyor.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-8 max-w-4xl">
            <div className="flex justify-between items-center">
               <h1 className="text-3xl font-bold text-white">Site Yönetimi</h1>
               <button onClick={handleUpdate} className="bg-primary text-secondary-dark px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all">
                 <Save size={20} /> Değişiklikleri Kaydet
               </button>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 space-y-6">
                <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-4 mb-4">Temel Bilgiler</h3>
                <div className="grid grid-cols-2 gap-6">
                  {['name', 'phone', 'email', 'whatsapp'].map(key => (
                    <div key={key}>
                      <label className="block text-slate-400 text-xs uppercase mb-2 ml-1">{key}</label>
                      <input 
                        type="text"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-primary outline-none"
                        value={settings?.[key] || ''}
                        onChange={(e) => setSettings({...settings, [key]: e.target.value})}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-slate-400 text-xs uppercase mb-2 ml-1">Adres</label>
                  <textarea 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-primary outline-none h-24"
                    value={settings?.address || ''}
                    onChange={(e) => setSettings({...settings, address: e.target.value})}
                  />
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 space-y-6">
                 <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-4 mb-4">Hero & Hakkımızda İçerikleri</h3>
                 <div>
                    <label className="block text-slate-400 text-xs uppercase mb-2 ml-1">Hero Başlık</label>
                    <input 
                      type="text"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-primary outline-none"
                      value={content?.hero?.title || ''}
                      onChange={(e) => setContent({...content, hero: {...content.hero, title: e.target.value}})}
                    />
                 </div>
                 <div>
                    <label className="block text-slate-400 text-xs uppercase mb-2 ml-1">Hakkımızda Metni</label>
                    <textarea 
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-primary outline-none h-32"
                      value={content?.about?.text || ''}
                      onChange={(e) => setContent({...content, about: {...content.about, text: e.target.value}})}
                    />
                 </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'blog' && (
           <div className="space-y-8">
             <div className="flex justify-between items-center">
               <h1 className="text-3xl font-bold text-white">Blog Yönetimi</h1>
               <button className="bg-primary text-secondary-dark px-6 py-3 rounded-xl font-bold transition-all">Yeni Yazı Ekle</button>
             </div>
             <div className="bg-slate-900 p-20 rounded-2xl border border-slate-800 text-center">
               <FileText size={48} className="mx-auto text-slate-700 mb-4" />
               <p className="text-slate-500">Blog sistemi yakında burada olacak.</p>
             </div>
           </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
