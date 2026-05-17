import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import { galleryData } from '../data/gallery-data';
import './GalleryPage.css';

const categoryNames = Array.from(new Set(galleryData.map((img) => img.caption)));
const categories = ['All', ...categoryNames];

const GalleryPage = () => {
  const [searchParams] = useSearchParams();
  const [selected, setSelected] = useState(null);

  const initialCategory = (() => {
    const cat = searchParams.get('category');
    return cat && categoryNames.includes(cat) ? cat : 'All';
  })();

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const touchStartX = useRef(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const visibleImages = activeCategory === 'All'
    ? galleryData
    : galleryData.filter((img) => img.caption === activeCategory);

  const selectedIndex = selected ? visibleImages.findIndex((img) => img.id === selected.id) : -1;

  const navigate = (dir) => {
    if (selectedIndex === -1) return;
    const next = selectedIndex + dir;
    if (next >= 0 && next < visibleImages.length) setSelected(visibleImages[next]);
  };

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [selected]);

  useEffect(() => {
    if (!selected) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') {
        const idx = visibleImages.findIndex((img) => img.id === selected.id);
        if (idx < visibleImages.length - 1) setSelected(visibleImages[idx + 1]);
      } else if (e.key === 'ArrowLeft') {
        const idx = visibleImages.findIndex((img) => img.id === selected.id);
        if (idx > 0) setSelected(visibleImages[idx - 1]);
      } else if (e.key === 'Escape') {
        setSelected(null);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selected, visibleImages]);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1);
    touchStartX.current = null;
  };

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
        <div
          className="gp-lightbox"
          onClick={() => setSelected(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button className="gp-lightbox-close" onClick={() => setSelected(null)} aria-label="Close">
            <X size={28} />
          </button>

          {selectedIndex > 0 && (
            <button className="gp-lightbox-nav gp-lightbox-prev" onClick={(e) => { e.stopPropagation(); navigate(-1); }} aria-label="Previous">
              <ChevronLeft size={36} />
            </button>
          )}
          {selectedIndex < visibleImages.length - 1 && (
            <button className="gp-lightbox-nav gp-lightbox-next" onClick={(e) => { e.stopPropagation(); navigate(1); }} aria-label="Next">
              <ChevronRight size={36} />
            </button>
          )}

          <div className="gp-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selected.url} alt={selected.alt} className="gp-lightbox-img" />
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
