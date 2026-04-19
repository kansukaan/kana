import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = ({ phone }) => {
  if (!phone) return null;
  const waLink = `https://wa.me/${phone.replace(/\D/g, '')}`;

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 border-4 border-white animate-pulse"
    >
      <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.258-.041.405.311.159.383.541 1.32.589 1.417.048.096.08.208.016.332-.064.125-.096.218-.191.332s-.193.228-.276.33c-.09.113-.185.236-.08.415.106.179.47.774.108 1.442.235.215.433.379.657.496.166.087.262.063.361-.051.099-.114.423-.491.536-.659.113-.167.227-.14.383-.081.156.059.988.466 1.159.551.171.085.285.127.328.201.044.074.044.429-.1.834z" />
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
