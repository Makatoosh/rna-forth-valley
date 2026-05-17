import React, { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import PageHero from '../components/PageHero';
import { galleryData } from '../data/gallery-data';
import './GalleryPage.css';

const categoryNames = Array.from(new Set(galleryData.map((img) => img.caption)));
const categories = ['All', ...categoryNames];

const GalleryPage = () => {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [selected]);

  const renderGrid = (images) => (
    <div className="gp-grid">
      {images.map((image) => (
        <div key={image.id} className="gp-cell" onClick={() => setSelected(image)}>
          <img src={image.url} alt={image.alt} className="gp-img" />
          <div className="gp-overlay"><ZoomIn size={24} /></div>
        </div>
      ))}
    </div>
  );

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

          {activeCategory === 'All' ? (
            categoryNames.map((cat) => {
              const images = galleryData.filter((img) => img.caption === cat);
              return (
                <div key={cat} className="gp-category">
                  <h3 className="gp-category-title">{cat}</h3>
                  {renderGrid(images)}
                </div>
              );
            })
          ) : (
            (() => {
              const images = galleryData.filter((img) => img.caption === activeCategory);
              return images.length === 0
                ? <p className="gp-empty">Photos coming soon.</p>
                : renderGrid(images);
            })()
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
