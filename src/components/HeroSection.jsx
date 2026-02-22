import React from 'react';
import './HeroSection.css';
import { ChevronRight } from 'lucide-react';
import heroBg from '../assets/images/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="hero-overlay"></div>
      {/* 
        In a real app, you'd use a high-quality nautical background image. 
        For now we use a gradient combined with a placeholder pattern if needed. 
      */}
      <div className="container hero-content">
        <div className="hero-badge fade-in-up">Est. 1950</div>
        <h1 className="hero-title fade-in-up delay-1">Once Navy, Always Navy</h1>
        <p className="hero-subtitle fade-in-up delay-2">
          Welcome to the RNA Forth Valley Branch.
          <br/>Unity. Loyalty. Patriotism. Comradeship.
        </p>
        <div className="hero-actions fade-in-up delay-3">
          <a href="https://www.royal-naval-association.co.uk/join-us" target="_blank" rel="noopener noreferrer" className="btn btn-primary hero-btn">
            Join the Branch <ChevronRight size={18} className="btn-icon" />
          </a>
          <a href="#about" className="btn btn-outline hero-btn">
            Learn More
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator fade-in-up delay-4">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default HeroSection;
