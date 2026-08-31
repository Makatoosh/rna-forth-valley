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
    id: 4,
    title: 'Remembrance Sunday',
    date: '8 Nov 2026',
    time: '09:00',
    location: 'Royal British Legion Scotland, Grangemouth',
    description: 'Remembrance Sunday service to honour those who have given their lives in service.',
    type: 'remembrance',
  },
  {
    id: 5,
    title: 'RNA Uckers World Championships – Portsmouth',
    date: '3 Oct 2026',
    time: '09:00 - 10:00',
    location: 'Royal Maritime Hotel, Portsmouth',
    description: "Registration from 09:00, first dice at 10:00. Breakfast and refreshments available — you don't need to have qualified, you can just turn up on the day.",
    type: 'social',
  },
  // Add more events here...
];
