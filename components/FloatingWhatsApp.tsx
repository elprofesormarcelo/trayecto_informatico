
import React from 'react';
import { WhatsAppIcon } from './icons/SocialIcons';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5491139022821" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition duration-300 z-40"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
};

export default FloatingWhatsApp;
