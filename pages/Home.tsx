import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import StatsGrid from '../components/StatsGrid';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <StatsGrid />
      <ServicesSection />
      <ContactSection />
    </>
  );
};

export default Home;