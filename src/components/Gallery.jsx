import React from 'react';
import { useNavigate } from 'react-router-dom';
import { galleryData } from '../data/gallery-data';
import './Gallery.css';

const categoryNames = Array.from(new Set(galleryData.map((img) => img.caption)));

const categoryThumbnails = categoryNames.map((cat) => ({
  name: cat,
  image: galleryData.find((img) => img.caption === cat),
}));

const Gallery = () => {
  const navigate = useNavigate();

  const goToCategory = (cat) => {
    navigate(`/gallery?category=${encodeURIComponent(cat)}`);
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <h2 className="section-title text-center">Branch Gallery</h2>
        <p className="section-subtitle text-center">
          Moments from the Forth Valley Royal Naval Association
        </p>

        <div className="gallery-grid">
          {categoryThumbnails.map(({ name, image }) => (
            <div
              key={name}
              className="gallery-cell"
              onClick={() => goToCategory(name)}
            >
              <img src={image.url} alt={name} className="gallery-img" />
              <div className="gallery-label">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
