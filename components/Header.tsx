import React from 'react';
import { PhoneIcon, UserIcon, FacebookIcon, InstagramIcon, LinkedInIcon, MailIcon } from './icons/SocialIcons';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-custom-orange text-white">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-2">
              <PhoneIcon />
              <span>Whatsapp: 11 3902 2821</span>
            </div>
            <a href="#" className="flex items-center space-x-2 hover:text-gray-200">
              <UserIcon />
              <span>Area Alumnos</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/marcelo.peralta.925/about/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><FacebookIcon /></a>
            <a href="https://www.instagram.com/elprofesormarcelo/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><InstagramIcon /></a>
            <a href="https://www.linkedin.com/in/elprofemarcelo/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><LinkedInIcon /></a>
            <a href="mailto:elprofesormarcelo@gmail.com" className="hover:text-gray-200"><MailIcon /></a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="bg-custom-dark text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <a href="#">Marcelo Peralta</a>
          </div>
          <div className="hidden md:flex space-x-8 font-bold">
            <a href="#" className="hover:text-custom-orange transition duration-300">Inicio</a>
            <a href="#" className="hover:text-custom-orange transition duration-300">Módulos</a>
            <a href="#" className="hover:text-custom-orange transition duration-300">Contacto</a>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button can be added here */}
            <button>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;