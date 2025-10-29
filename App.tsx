import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import SistemasInformaticosPage from './pages/SistemasInformaticosPage';
import HerramientaIndagacionPage from './pages/HerramientaIndagacionPage';
import RelacionesLaboralesPage from './pages/RelacionesLaboralesPage';
import AdministracionGestionDocumentosPage from './pages/AdministracionGestionDocumentosPage';
import ProcesamientoDatosPage from './pages/ProcesamientoDatosPage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0); // Asegura que la vista suba al cambiar de página
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#/sistemas-informaticos':
        return <SistemasInformaticosPage />;
      case '#/herramienta-indagacion':
        return <HerramientaIndagacionPage />;
      case '#/relaciones-laborales':
        return <RelacionesLaboralesPage />;
      case '#/administracion-gestion-documentos':
        return <AdministracionGestionDocumentosPage />;
      case '#/procesamiento-datos':
        return <ProcesamientoDatosPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;