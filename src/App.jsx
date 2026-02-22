import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CoreValues from './components/CoreValues';
import Gallery from './components/Gallery';
import NewsEvents from './components/NewsEvents';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <HeroSection />
        <CoreValues />
        <Gallery />
        <NewsEvents />
      </main>
      <Footer />
    </div>
  );
}

export default App;
