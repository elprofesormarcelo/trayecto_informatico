import React, { useState, useRef } from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import { HardwareIcon, SoftwareIcon, OSIcon, NetworkIcon, SimpleCheckIcon, ArrowLeftIcon } from './icons/SocialIcons';

const topics = [
  {
    icon: <HardwareIcon />,
    title: "Arquitectura de Hardware",
    description: "Explora los componentes físicos de una computadora, como CPU, memoria RAM, y dispositivos de almacenamiento, para entender cómo funcionan en conjunto."
  },
  {
    icon: <SoftwareIcon />,
    title: "Software de Base",
    description: "Diferencia entre el software que gestiona el sistema y las aplicaciones que usan los usuarios, y aprende cómo interactúan con el hardware."
  },
  {
    icon: <OSIcon />,
    title: "Sistemas Operativos",
    description: "Profundiza en los sistemas operativos más importantes (Windows, macOS, Linux), su gestión de procesos, memoria y sistemas de archivos."
  },
  {
    icon: <NetworkIcon />,
    title: "Fundamentos de Redes",
    description: "Introduce los conceptos básicos de redes de computadoras, incluyendo topologías, protocolos y el modelo OSI para la comunicación de datos."
  }
];

const otherModules = [
  { title: "Herramienta de Indagación", href: "#/herramienta-indagacion" },
  { title: "Relaciones Laborales", href: "#/relaciones-laborales" },
  { title: "Administración y Gestión de Documentos", href: "#/administracion-gestion-documentos" },
  { title: "Procesamiento de Datos", href: "#/procesamiento-datos" },
];

const SistemasInformaticos: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section 
      ref={sectionRef}
      className={`py-20 md:py-32 bg-white transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-lg font-bold text-custom-orange uppercase tracking-wider">Módulo 1</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-custom-dark leading-tight mt-2">
            Sistemas Informáticos
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
            Este módulo fundamental te proporcionará una comprensión sólida de los pilares que sostienen toda la tecnología digital moderna.
          </p>
        </div>

        <div className="text-center mb-16">
          <a href="/#modules" className="inline-flex items-center text-custom-orange hover:text-orange-700 transition-colors duration-300 font-semibold">
            <ArrowLeftIcon />
            Volver a todos los módulos
          </a>
        </div>
        
        {/* Tab Navigation */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-3xl font-extrabold text-custom-dark text-center mb-8">Temas Clave del Módulo</h3>
          <div className="flex flex-wrap justify-center border-b border-gray-200">
            {topics.map((topic, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-3 px-4 md:py-4 md:px-6 font-semibold text-base md:text-lg transition-colors duration-300 focus:outline-none ${
                  activeTab === index
                    ? 'border-b-4 border-custom-orange text-custom-orange'
                    : 'text-gray-500 hover:text-custom-dark'
                }`}
              >
                {topic.title}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="mt-8 p-6 md:p-10 bg-gray-50 rounded-xl shadow-inner min-h-[150px]">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left">
              <div className="w-16 h-16 md:w-20 md:h-20 text-custom-orange mr-0 md:mr-8 mb-4 md:mb-0 flex-shrink-0">
                {topics[activeTab].icon}
              </div>
              <div>
                <h4 className="text-2xl font-bold text-custom-dark mb-2">{topics[activeTab].title}</h4>
                <p className="text-gray-700 text-lg">{topics[activeTab].description}</p>
              </div>
            </div>
          </div>
        </div>


        <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-extrabold text-custom-dark text-center mb-8">¿Qué aprenderás en este módulo?</h3>
            <ul className="space-y-4">
              <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                <SimpleCheckIcon />
                <span className="text-gray-700 flex-1">Identificar y describir la función de los principales componentes de hardware de un sistema informático.</span>
              </li>
              <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                <SimpleCheckIcon />
                <span className="text-gray-700 flex-1">Comprender las funciones esenciales de un sistema operativo y compararlos entre sí.</span>
              </li>
               <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                <SimpleCheckIcon />
                <span className="text-gray-700 flex-1">Explicar los conceptos básicos de redes y cómo los dispositivos se comunican a través de internet.</span>
              </li>
              <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                <SimpleCheckIcon />
                <span className="text-gray-700 flex-1">Instalar y configurar software de aplicación, resolviendo problemas comunes de compatibilidad.</span>
              </li>
            </ul>
        </div>

        <div className="mt-20 md:mt-24 text-center">
          <h3 className="text-3xl font-extrabold text-custom-dark mb-8">
            Explora otros módulos
          </h3>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherModules.map((module, index) => (
              <a
                key={index}
                href={module.href}
                className="block bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl hover:border-custom-orange transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                <h4 className="text-xl font-bold text-custom-dark">
                  {module.title}
                </h4>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SistemasInformaticos;