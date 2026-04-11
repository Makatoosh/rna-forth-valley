import React from 'react';
import HeroSection from '../components/HeroSection';
import CoreValues from '../components/CoreValues';
import Gallery from '../components/Gallery';
import NewsEvents from '../components/NewsEvents';
import ContactForm from '../components/ContactForm';
import SocialSection from '../components/SocialSection';

const HomePage = () => (
  <>
    <HeroSection />
    <CoreValues />
    <Gallery />
    <NewsEvents />
    <ContactForm />
    <SocialSection />
  </>
);

export default HomePage;
