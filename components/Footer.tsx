
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-custom-orange text-white py-8">
      <div className="container mx-auto px-6 text-center text-sm">
        <p className="font-bold mb-2">
          © Copyright {new Date().getFullYear()} | Marcelo Peralta | Cursos de Informática
        </p>
        <p className="mb-2">
          WhatsApp: +54 9 11 3902-2821
        </p>
        <p>
          Diseño y desarrollo por un desarrollador web profesional.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
