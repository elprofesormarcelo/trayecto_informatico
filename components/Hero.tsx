
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white h-[60vh] md:h-[80vh] flex items-center justify-center" 
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
          Impulsá Tu Carrera en el Mundo IT
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">
          Con un trayecto informático único, diseñado por Marcelo Peralta para llevarte al siguiente nivel profesional.
        </p>
      </div>
    </section>
  );
};

export default Hero;
