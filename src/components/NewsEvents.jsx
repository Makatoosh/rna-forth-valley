import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Rss } from 'lucide-react';
import { eventsData } from '../data/events-data';
import { newsData } from '../data/news-data';
import './NewsEvents.css';

const getNextSecondFriday = () => {
  const now = new Date();
  const getSecondFriday = (year, month) => {
    const d = new Date(year, month, 1);
    const day = d.getDay();
    const firstFridayOffset = (5 - day + 7) % 7;
    const secondFridayDate = 1 + firstFridayOffset + 7;
    return new Date(year, month, secondFridayDate);
  };
  let candidate = getSecondFriday(now.getFullYear(), now.getMonth());
  candidate.setHours(23, 59, 59, 999);
  if (now > candidate) {
    candidate = getSecondFriday(now.getFullYear(), now.getMonth() + 1);
  }
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${candidate.getDate()} ${months[candidate.getMonth()]}`;
};

const monthlyMeeting = {
  date: getNextSecondFriday(),
  title: 'Monthly Branch Meeting',
  location: 'RBLS Grangemouth, 4 Dundas Street, Grangemouth, FK3 8BQ',
  time: '19:00 - 20:30',
};

const additionalEvents = eventsData.map((e) => ({
  ...e,
  date: e.date.split(' ').slice(0, 2).join(' '), // "DD Mon YYYY" → "DD Mon"
}));

const upcomingEvents = [monthlyMeeting, ...additionalEvents].slice(0, 3);

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
              {upcomingEvents.map((event, i) => (
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
            <Link to="/events" className="ne-link">
              View All Events <ArrowRight size={16} />
            </Link>
          </div>

          {/* News Column */}
          <div className="ne-column">
            <div className="ne-header">
              <Rss className="ne-icon" />
              <h2>Latest Branch News</h2>
            </div>
            <div className="news-list">
              {newsData.slice(0, 2).map((item) => (
                <article className="news-card" key={item.id}>
                  <span className="news-category">{item.category}</span>
                  <h4 className="news-title">{item.title}</h4>
                  <p className="news-excerpt">{item.excerpt}</p>
                </article>
              ))}
            </div>
            <a href="#" className="ne-link">
              Read More News <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
