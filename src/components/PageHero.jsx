import React from 'react';
import './PageHero.css';

const PageHero = ({ title, subtitle }) => {
  return (
    <div className="page-hero">
      <div className="page-hero-geo" aria-hidden="true" />
      <div className="container page-hero-content">
        <p className="page-hero-eyebrow">Royal Naval Association · Forth Valley</p>
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHero;
