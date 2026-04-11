/**
 * RNA Forth Valley — Events Data
 *
 * HOW TO ADD AN EVENT:
 * Copy one of the event objects below and fill in your details.
 * The monthly branch meeting date is calculated automatically (2nd Friday of each month)
 * so you only need to add EXTRA events to this list.
 *
 * FIELDS:
 *   id          — unique number, just increment the last one
 *   title       — name of the event
 *   date        — "DD Mon YYYY" format, e.g. "14 Jun 2025"
 *   time        — "HH:MM - HH:MM" format, e.g. "19:00 - 20:30"
 *   location    — venue name and address
 *   description — short paragraph about the event
 *   type        — one of: "meeting", "social", "remembrance", "fundraising"
 */

export const eventsData = [
  {
    id: 1,
    title: 'Spring Charity Dinner',
    date: '10 Apr 2026',
    time: '18:00 - 23:00',
    location: 'Royal Hotel, Stirling',
    description: 'Annual spring charity dinner in aid of the RNA Benevolent Fund. Black tie optional.',
    type: 'social',
  },
  // Add more events here...
];
