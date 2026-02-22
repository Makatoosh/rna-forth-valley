import React from 'react';
import { Calendar, ArrowRight, Rss } from 'lucide-react';
import './NewsEvents.css';
import { news } from './news';

const getNextSecondFriday = () => {
  const now = new Date();
  
  const getSecondFriday = (year, month) => {
    const d = new Date(year, month, 1);
    const day = d.getDay();
    // 0=Sun, 1=Mon, ..., 5=Fri, 6=Sat
    const firstFridayOffset = (5 - day + 7) % 7;
    const secondFridayDate = 1 + firstFridayOffset + 7;
    return new Date(year, month, secondFridayDate);
  };

  let candidate = getSecondFriday(now.getFullYear(), now.getMonth());
  // Set candidate to end of the day so it shows ON that day until midnight
  candidate.setHours(23, 59, 59, 999);

  if (now > candidate) {
    candidate = getSecondFriday(now.getFullYear(), now.getMonth() + 1);
  }

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${candidate.getDate()} ${months[candidate.getMonth()]}`;
};

const events = [
  {
    date: getNextSecondFriday(),
    title: 'Monthly Branch Meeting',
    location: 'RBLS Grangemouth, 4 Dundas Street, Grangemouth, FK3 8BQ',
    time: '19:00 - 20:30'
  },
  {
    date: '10 Apr',
    title: 'Spring Charity Dinner',
    location: 'Royal Hotel, Stirling',
    time: '18:00 - 23:00'
  }
];

const NewsEvents = () => {
  return (
    <section className="news-events" id="events">
      <div className="container">
        <div className="ne-grid">
          {/* Events Column */}
          <div className="ne-column">
            <div className="ne-header">
              <Calendar className="ne-icon" />
              <h2>Upcoming Events</h2>
            </div>
            <div className="events-list">
              {events.map((event, i) => (
                <div className="event-card" key={i}>
                  <div className="event-date">
                    <span className="date-day">{event.date.split(' ')[0]}</span>
                    <span className="date-month">{event.date.split(' ')[1]}</span>
                  </div>
                  <div className="event-details">
                    <h4 className="event-title">{event.title}</h4>
                    <p className="event-meta">{event.time} | {event.location}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#all-events" className="ne-link">
              View All Events <ArrowRight size={16} />
            </a>
          </div>

          {/* News Column */}
          <div className="ne-column">
            <div className="ne-header">
              <Rss className="ne-icon" />
              <h2>Latest Branch News</h2>
            </div>
            <div className="news-list">
              {news.map((item, i) => (
                <article className="news-card" key={i}>
                  <span className="news-category">{item.category}</span>
                  <h4 className="news-title">{item.title}</h4>
                  <p className="news-excerpt">{item.excerpt}</p>
                </article>
              ))}
            </div>
            <a href="#all-news" className="ne-link">
              Read More News <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
