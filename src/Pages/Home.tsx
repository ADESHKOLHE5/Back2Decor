import React from 'react';
import Features from '../Components/Features/Features';
import HeroSection from '../Components/HeroSection/HeroSection';

const Home: React.FC = () => {
  return (
    <section >
    <HeroSection />
      <Features />
    </section>
  );
};

export default Home;
