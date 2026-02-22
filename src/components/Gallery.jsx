import React, { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import './Gallery.css';

const galleryImages = [
  { id: 2, url: 'https://images.unsplash.com/photo-1542382156909-9ae382ebfec8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Rememberance Day' },
  { id: 3, url: 'https://images.unsplash.com/photo-1559863481-645396b1b5e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Branch Gatherings' },
  { id: 4, url: 'https://images.unsplash.com/photo-1577413470719-74e2dadd7d96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Branch meeting' },
  { id: 5, url: 'https://images.unsplash.com/photo-1502083896352-259ab9e342d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Remembrance day wreaths' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery section bg-light" id="gallery">
      <div className="container">
        <h2 className="section-title text-center">Branch Gallery</h2>
        <p className="section-subtitle text-center">Moments from the Forth Valley Royal Naval Association</p>
        
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openLightbox(image)}
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
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close image">
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.url} alt={selectedImage.alt} className="lightbox-image" />
            <p className="lightbox-caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
