import React, { useRef } from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import { ArrowLeftIcon } from './icons/SocialIcons';

const HerramientaIndagacion: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <section 
      ref={sectionRef}
      className={`py-20 md:py-32 bg-white transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-lg font-bold text-custom-orange uppercase tracking-wider">Módulo 2</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-custom-dark leading-tight mt-2">
            Herramienta de Indagación
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
            Desarrolla habilidades para la búsqueda, evaluación y uso de información digital de manera crítica y eficiente para la resolución de problemas.
          </p>
        </div>

        <div className="text-center mb-16">
          <a href="/#modules" className="inline-flex items-center text-custom-orange hover:text-orange-700 transition-colors duration-300 font-semibold">
            <ArrowLeftIcon />
            Volver a todos los módulos
          </a>
        </div>

        <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-custom-dark mb-4">Contenido en Desarrollo</h3>
            <p className="text-gray-600 text-lg">
                El contenido detallado para este módulo estará disponible próximamente. Estamos trabajando para brindarte la mejor experiencia de aprendizaje.
            </p>
        </div>

      </div>
    </section>
  );
};

export default HerramientaIndagacion;