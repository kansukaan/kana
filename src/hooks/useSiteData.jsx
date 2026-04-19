import { useState, useEffect } from 'react';

export const useSiteData = () => {
  const [data, setData] = useState({
    settings: {
      name: 'Decoor Mobilya',
      business_type: 'Mobilya & İç Mimarlık',
      phone: '05327043159',
      email: 'info@decoormobilya.com',
      address: 'Mobilya Sanayi Bölgesi, Decoor Plaza No:42',
      whatsapp: '905327043159'
    },
    content: {
      hero: {
        title: 'Geleceğin Yaşam Alanlarını Bugün Tasarlıyoruz',
        subtitle: 'Modern, zarif ve fütüristik mobilya çözümleriyle yaşam alanlarınıza değer katıyoruz.'
      },
      about: {
        title: 'Hakkımızda',
        text: 'Decoor Mobilya olarak, uzman tasarım ekibimiz ve son teknoloji imalat tesisimizle, hayallerinizdeki mobilyaları gerçeğe dönüştürüyoruz.'
      }
    },
    blogs: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/get_site_data.php');
        const result = await response.json();
        if (result.status === 'success' && result.data && typeof result.data === 'object') {
          setData(result.data);
        }
      } catch (err) {
        console.error('API Fetch failed, using fallback data:', err);
        setError('API connection failed');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
