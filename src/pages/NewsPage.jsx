import React, { useEffect } from 'react';
import { Rss } from 'lucide-react';
import PageHero from '../components/PageHero';
import { newsData } from '../data/news-data';
import './NewsPage.css';

const NewsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <PageHero
        title="Branch News"
        subtitle="The latest updates from the RNA Forth Valley community."
      />
      <section className="news-page-section">
        <div className="container">
          {newsData.length === 0 ? (
            <p className="news-page-empty">No news items yet — check back soon.</p>
          ) : (
            <div className="news-page-grid">
              {newsData.map((item) => (
                <article className="news-page-card" key={item.id}>
                  <div className="news-page-card-header">
                    <span className="news-page-category">{item.category}</span>
                    {item.date && <span className="news-page-date">{item.date}</span>}
                  </div>
                  <h2 className="news-page-title">{item.title}</h2>
                  {item.body ? (
                    item.body.split('\n\n').map((paragraph, i) => (
                      <p className="news-page-excerpt" key={i}>{paragraph}</p>
                    ))
                  ) : (
                    <p className="news-page-excerpt">{item.excerpt}</p>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default NewsPage;
