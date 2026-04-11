import React, { useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import { eventsData } from '../data/events-data';
import './EventsPage.css';

const getNextSecondFriday = () => {
  const now = new Date();
  const getSecondFriday = (year, month) => {
    const d = new Date(year, month, 1);
    const day = d.getDay();
    const firstFridayOffset = (5 - day + 7) % 7;
    return new Date(year, month, 1 + firstFridayOffset + 7);
  };
  let candidate = getSecondFriday(now.getFullYear(), now.getMonth());
  candidate.setHours(23, 59, 59, 999);
  if (now > candidate) {
    candidate = getSecondFriday(now.getFullYear(), now.getMonth() + 1);
  }
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const fullMonths = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return {
    display: `${candidate.getDate()} ${months[candidate.getMonth()]}`,
    full: `${candidate.getDate()} ${fullMonths[candidate.getMonth()]} ${candidate.getFullYear()}`,
    dayNum: candidate.getDate(),
    month: months[candidate.getMonth()],
  };
};

const FILTERS = [
  { key: 'all', label: 'All Events' },
  { key: 'meeting', label: 'Meetings' },
  { key: 'social', label: 'Social' },
  { key: 'remembrance', label: 'Remembrance' },
  { key: 'fundraising', label: 'Fundraising' },
];

const EventsPage = () => {
  const [filter, setFilter] = useState('all');
  const nextMeeting = getNextSecondFriday();

  const monthlyMeeting = {
    id: 'monthly',
    title: 'Monthly Branch Meeting',
    date: nextMeeting.full,
    _display: nextMeeting.display,
    _dayNum: nextMeeting.dayNum,
    _month: nextMeeting.month,
    time: '19:00 - 20:30',
    location: 'RBLS Grangemouth, 4 Dundas Street, Grangemouth, FK3 8BQ',
    description: 'Regular monthly branch meeting. All members welcome. New members encouraged to attend.',
    type: 'meeting',
  };

  const allEvents = [monthlyMeeting, ...eventsData.map((e) => {
    const parts = e.date.split(' ');
    return { ...e, _dayNum: parts[0], _month: parts[1], _display: `${parts[0]} ${parts[1]}` };
  })];

  const filtered = filter === 'all' ? allEvents : allEvents.filter((e) => e.type === filter);

  return (
    <>
      <PageHero
        title="Upcoming Events"
        subtitle="Branch meetings, social events, and commemorations for the Forth Valley RNA."
      />
      <section className="events-page-section">
        <div className="container">
          {/* Filter bar */}
          <div className="events-filter-bar">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`events-filter-btn ${filter === f.key ? 'active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="events-empty">No events found for this category. Check back soon.</p>
          ) : (
            <div className="events-page-list">
              {filtered.map((event) => (
                <div className="events-page-card" key={event.id}>
                  <div className="events-page-date">
                    <span className="ep-day">{event._dayNum}</span>
                    <span className="ep-month">{event._month}</span>
                  </div>
                  <div className="events-page-details">
                    <span className={`events-type-badge type-${event.type}`}>{event.type}</span>
                    <h3 className="ep-title">{event.title}</h3>
                    <div className="ep-meta">
                      <span><Clock size={14} /> {event.time}</span>
                      <span><MapPin size={14} /> {event.location}</span>
                    </div>
                    {event.description && <p className="ep-desc">{event.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default EventsPage;
