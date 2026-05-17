import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ZoomIn } from 'lucide-react';
import { galleryData } from '../data/gallery-data';
import './Gallery.css';

const PREVIEW_COUNT = 6;

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const preview = galleryData.slice(0, PREVIEW_COUNT);

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <h2 className="section-title text-center">Branch Gallery</h2>
        <p className="section-subtitle text-center">
          Moments from the Forth Valley Royal Naval Association
        </p>

        <div className="gallery-grid">
          {preview.map((image) => (
            <div
              key={image.id}
              className="gallery-cell"
              onClick={() => setSelected(image)}
            >
              <img src={image.url} alt={image.alt} className="gallery-img" />
              <div className="gallery-overlay">
                <ZoomIn size={24} />
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <Link to="/gallery" className="btn btn-primary">
            View Full Gallery
          </Link>
        </div>
      </div>

      {selected && (
        <div className="gallery-lightbox" onClick={() => setSelected(null)}>
          <button
            className="gallery-lightbox-close"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <div
            className="gallery-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.url}
              alt={selected.alt}
              className="gallery-lightbox-img"
            />
            {selected.caption && (
              <p className="gallery-lightbox-caption">{selected.caption}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
