import React, { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import PageHero from '../components/PageHero';
import { galleryData } from '../data/gallery-data';
import './GalleryPage.css';

const categories = ['All', ...Array.from(new Set(galleryData.map((img) => img.caption)))];

const GalleryPage = () => {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? galleryData
      : galleryData.filter((img) => img.caption === activeCategory);

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

      <section className="gp-section">
        <div className="container">

          <div className="gp-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`gp-filter-btn${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="gp-empty">Photos coming soon.</p>
          ) : (
            <div className="gp-grid">
              {filtered.map((image) => (
                <div
                  key={image.id}
                  className="gp-cell"
                  onClick={() => setSelected(image)}
                >
                  <img src={image.url} alt={image.alt} className="gp-img" />
                  <div className="gp-overlay">
                    <ZoomIn size={24} />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {selected && (
        <div className="gp-lightbox" onClick={() => setSelected(null)}>
          <button
            className="gp-lightbox-close"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <div
            className="gp-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.url}
              alt={selected.alt}
              className="gp-lightbox-img"
            />
            {selected.caption && (
              <p className="gp-lightbox-caption">{selected.caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
