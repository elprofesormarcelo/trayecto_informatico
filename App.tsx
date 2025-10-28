
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Modules from './components/Modules';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Modules />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
