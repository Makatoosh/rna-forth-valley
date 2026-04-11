import React from 'react';
import './HeroSection.css';
import { ChevronRight, Anchor } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      {/* Diagonal geometric right panel */}
      <div className="hero-geo-panel" aria-hidden="true" />

      <div className="container hero-inner">
        {/* Left: text content */}
        <div className="hero-content fade-in-up">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-rule" />
            Forth Valley Branch · Est. 1950
          </p>
          <h1 className="hero-title">
            Once Navy,
            <br />
            <em className="hero-title-em">Always Navy.</em>
          </h1>
          <p className="hero-body">
            Serving and ex-Naval personnel and their families across the Forth Valley,
            united by comradeship, loyalty, and a lifelong bond of service.
          </p>
          <div className="hero-actions">
            <a
              href="https://www.royal-naval-association.co.uk/join-us"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hero-btn"
            >
              Join the Branch <ChevronRight size={17} className="btn-icon" />
            </a>
            <a href="#about" className="hero-link">
              Learn More <ChevronRight size={15} />
            </a>
          </div>
        </div>

        {/* Right: decorative emblem */}
        <div className="hero-emblem-wrap fade-in-up delay-2" aria-hidden="true">
          <div className="hero-emblem">
            <Anchor size={108} className="hero-emblem-anchor" strokeWidth={1.2} />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero-bar">
        <div className="container hero-bar-inner">
          <div className="hero-bar-item">
            <span className="bar-value">Est. 1950</span>
            <span className="bar-label">Founded</span>
          </div>
          <span className="hero-bar-sep" aria-hidden="true" />
          <div className="hero-bar-item">
            <span className="bar-value">2nd Friday</span>
            <span className="bar-label">Monthly Meeting</span>
          </div>
          <span className="hero-bar-sep" aria-hidden="true" />
          <div className="hero-bar-item">
            <span className="bar-value">Grangemouth</span>
            <span className="bar-label">RBLS Club</span>
          </div>
          <span className="hero-bar-sep" aria-hidden="true" />
          <div className="hero-bar-item">
            <span className="bar-value">Free to Join</span>
            <span className="bar-label">All Welcome</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
