import React, { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import PageHero from '../components/PageHero';
import { galleryData } from '../data/gallery-data';
import './GalleryPage.css';

const GalleryPage = () => {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(galleryData.map((img) => img.caption)))];
  const filtered = activeCategory === 'All' ? galleryData : galleryData.filter((img) => img.caption === activeCategory);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [selected]);

  return (
    <>
      <PageHero
        title="Branch Gallery"
        subtitle="Photos and moments from the RNA Forth Valley community."
      />

      <section className="gallery-section">
        <div className="gallery-container">

          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`gallery-filter-btn${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="gallery-empty">Photos coming soon.</p>
          ) : (
            <div className="gallery-grid">
              {filtered.map((image) => (
                <div
                  key={image.id}
                  className="gallery-cell"
                  onClick={() => setSelected(image)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="gallery-img"
                  />
                  <div className="gallery-overlay">
                    <ZoomIn size={24} />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {selected && (
        <div className="gallery-lightbox" onClick={() => setSelected(null)}>
          <button
            className="gallery-lightbox-close"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
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
    </>
  );
};

export default GalleryPage;
