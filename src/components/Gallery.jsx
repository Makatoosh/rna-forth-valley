import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryData } from '../data/gallery-data';
import './Gallery.css';

const PREVIEW_COUNT = 6;

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const preview = galleryData.slice(0, PREVIEW_COUNT);
  const selectedIndex = selected ? preview.findIndex((img) => img.id === selected.id) : -1;
  const touchStartX = useRef(null);

  const navigate = (dir) => {
    if (selectedIndex === -1) return;
    const next = selectedIndex + dir;
    if (next >= 0 && next < preview.length) setSelected(preview[next]);
  };

  useEffect(() => {
    if (!selected) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') navigate(1);
      else if (e.key === 'ArrowLeft') navigate(-1);
      else if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selected, selectedIndex]);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1);
    touchStartX.current = null;
  };

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
        <div
          className="gallery-lightbox"
          onClick={() => setSelected(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button className="gallery-lightbox-close" onClick={() => setSelected(null)} aria-label="Close">
            <X size={28} />
          </button>

          {selectedIndex > 0 && (
            <button className="gallery-lightbox-nav gallery-lightbox-prev" onClick={(e) => { e.stopPropagation(); navigate(-1); }} aria-label="Previous">
              <ChevronLeft size={36} />
            </button>
          )}
          {selectedIndex < preview.length - 1 && (
            <button className="gallery-lightbox-nav gallery-lightbox-next" onClick={(e) => { e.stopPropagation(); navigate(1); }} aria-label="Next">
              <ChevronRight size={36} />
            </button>
          )}

          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selected.url} alt={selected.alt} className="gallery-lightbox-img" />
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
