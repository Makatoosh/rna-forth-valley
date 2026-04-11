import React, { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { galleryData } from '../data/gallery-data';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedImage]);

  return (
    <section className="gallery section bg-light" id="gallery">
      <div className="container">
        <h2 className="section-title text-center">Branch Gallery</h2>
        <p className="section-subtitle text-center">Moments from the Forth Valley Royal Naval Association</p>

        <div className="gallery-grid">
          {galleryData.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.url} alt={image.alt} className="gallery-image" />
              <div className="gallery-overlay">
                <ZoomIn size={32} className="gallery-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close image">
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.url} alt={selectedImage.alt} className="lightbox-image" />
            <p className="lightbox-caption">
              {selectedImage.caption || selectedImage.alt}
              {selectedImage.date && <span className="lightbox-date"> &mdash; {selectedImage.date}</span>}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
