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
    id: 2,
    title: 'Stirling Armed Forces Day 2026',
    date: '13 Jun 2026',
    time: '10:00 - 14:00',
    location: 'Stirling Castle, Victoria Square, Stirling',
    description: 'Join us at Stirling Castle for Armed Forces Day 2026, celebrating and honouring the service of our Armed Forces community.',
    type: 'social',
  },
  {
    id: 3,
    title: 'Armed Forces Day Falkirk 2026',
    date: '4 Jul 2026',
    time: '12:00 - 17:00',
    location: 'Callendar Road, Falkirk, Scotland, FK1 1YR',
    description: 'Armed Forces Day in Falkirk, celebrating and honouring the service of our Armed Forces community.',
    type: 'social',
  },
  {
    id: 4,
    title: 'Remembrance Sunday',
    date: '8 Nov 2026',
    time: '09:00',
    location: 'Royal British Legion Scotland, Grangemouth',
    description: 'Remembrance Sunday service to honour those who have given their lives in service.',
    type: 'remembrance',
  },
  // Add more events here...
];
