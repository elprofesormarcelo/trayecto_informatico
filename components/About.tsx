import React, { useRef } from 'react';
import { SimpleCheckIcon } from './icons/SocialIcons';
import useIntersectionObserver from './useIntersectionObserver';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

  return (
    <section 
      ref={sectionRef}
      className={`py-20 md:py-32 bg-white transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Original About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-custom-orange leading-tight">
              Un trayecto diseñado para tu crecimiento profesional
            </h2>
          </div>
          <div>
            <p className="text-gray-600 text-lg mb-6">
              La generación de nuevos campos del saber y el avance tecnológico en el campo de la informática llevaron a los profesionales de este ámbito a reacomodarse en función de nuevas divisiones del proceso de trabajo. Nuestro curso está diseñado para darte las herramientas más actuales y demandadas del mercado.
            </p>
            <div className="text-center md:text-left">
              <a 
                href="#" 
                className="bg-custom-orange text-white font-bold py-3 px-8 rounded-full text-md hover:bg-orange-500 transition duration-300 inline-block"
              >
                Leer Más
              </a>
            </div>
          </div>
        </div>

        {/* Instructor Subsection */}
        <div className="mt-20 md:mt-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex justify-center order-first md:order-last">
            <img 
              src="https://picsum.photos/id/1011/500/500"
              alt="Docente Marcelo Peralta" 
              className="rounded-full shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-custom-orange"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold text-custom-dark leading-tight mb-4">
              Conoce al Docente: <span className="text-custom-orange">Marcelo Peralta</span>
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Con más de 15 años de experiencia en la industria del software y la docencia, Marcelo ha diseñado este trayecto para formar a la próxima generación de profesionales IT.
            </p>
            <ul className="space-y-4 text-left">
              <li className="flex items-start">
                <SimpleCheckIcon />
                <span className="text-gray-700 flex-1"><strong>Experto en Desarrollo de Sistemas:</strong> Amplia trayectoria en la creación y mantenimiento de soluciones informáticas robustas.</span>
              </li>
              <li className="flex items-start">
                <SimpleCheckIcon />
                <span className="text-gray-700 flex-1"><strong>Especialista en Gestión de Datos:</strong> Profundo conocimiento en administración, procesamiento y análisis de grandes volúmenes de información.</span>
              </li>
              <li className="flex items-start">
                <SimpleCheckIcon />
                <span className="text-gray-700 flex-1"><strong>Docente Apasionado:</strong> Comprometido con la enseñanza y el desarrollo de habilidades prácticas en sus alumnos.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
