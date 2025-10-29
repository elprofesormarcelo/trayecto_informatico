import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Modules from '../components/Modules';
import ContactCTA from'../components/ContactCTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Modules />
      <ContactCTA />
    </>
  );
};

export default HomePage;