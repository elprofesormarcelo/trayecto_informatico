import React, { useRef } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const ContactCTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

  return (
    <section 
      ref={sectionRef}
      className={`py-20 md:py-32 bg-white transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-last lg:order-first">
             <img 
                src="https://picsum.photos/id/1005/600/800"
                alt="Persona usando un smartphone"
                className="rounded-lg shadow-2xl w-full max-w-md object-cover"
              />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-custom-orange leading-tight mb-4">
              ¿Deseas Contactarnos?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Accede a nuestro formulario de contacto y envíanos tus preguntas, estaremos atentos a responder cualquiera de sus dudas o inquietudes.
            </p>
            <a 
              href="#" 
              className="bg-custom-orange text-white font-bold py-3 px-8 rounded-full text-md hover:bg-orange-500 transition duration-300 inline-block"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
