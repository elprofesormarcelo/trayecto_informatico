import React, { useRef } from 'react';
import { ComputerIcon, SearchIcon, UsersIcon, DocumentIcon, ChartBarIcon } from './icons/SocialIcons';
import useIntersectionObserver from './useIntersectionObserver';

const modulesData = [
  {
    icon: <ComputerIcon />,
    title: "Sistemas Informáticos",
    description: "Comprende la arquitectura de hardware, software de base y los sistemas operativos que forman la base de la tecnología moderna.",
    href: "#/sistemas-informaticos"
  },
  {
    icon: <SearchIcon />,
    title: "Herramienta de Indagación",
    description: "Desarrolla habilidades para la búsqueda, evaluación y uso de información digital de manera crítica y eficiente para la resolución de problemas.",
    href: "#/herramienta-indagacion"
  },
  {
    icon: <UsersIcon />,
    title: "Relaciones Laborales",
    description: "Explora los derechos, obligaciones y el marco legal que rigen las interacciones en el entorno profesional del sector tecnológico.",
    href: "#/relaciones-laborales"
  },
  {
    icon: <DocumentIcon />,
    title: "Administración y Gestión de Documentos",
    description: "Aprende a organizar, almacenar y gestionar documentos digitales de manera segura y eficaz, utilizando herramientas de software especializadas.",
    href: "#/administracion-gestion-documentos"
  },
  {
    icon: <ChartBarIcon />,
    title: "Procesamiento de Datos",
    description: "Introduce los conceptos fundamentales del manejo de datos, incluyendo la recolección, limpieza, análisis y visualización para la toma de decisiones.",
    href: "#/procesamiento-datos"
  }
];


const Modules: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  return (
    <section 
      ref={sectionRef}
      className={`bg-gray-50 py-20 md:py-32 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      id="modules"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-custom-dark leading-tight">
            Módulos del Curso
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
            Un trayecto informático basado en 5 módulos diseñados por el docente Marcelo Peralta para darte una formación completa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modulesData.map((module, index) => (
            <a href={module.href} key={index} className="block h-full">
              <div 
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 ease-in-out border-t-4 border-custom-orange h-full"
              >
                <div className="bg-custom-orange bg-opacity-10 rounded-full p-4 mb-6">
                  <div className="w-8 h-8 text-custom-orange">
                    {module.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-custom-dark mb-3">
                  {module.title}
                </h3>
                <p className="text-gray-600 flex-grow">
                  {module.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;