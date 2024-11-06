import React from 'react';
import './App.css'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CampaignSection from './components/CampaignSection';
import InstagramSection from './components/InstagramSection';
import ServicesSection from './components/ServiceSection';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <HeroSection />
      <AboutSection />
      <CampaignSection />
      <InstagramSection />
      <ServicesSection />
    </div>
  );
};

export default App;