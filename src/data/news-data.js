/**
 * RNA Forth Valley — News Data
 *
 * HOW TO ADD NEWS ITEMS:
 * Copy one of the objects below and fill in your details.
 * Items are displayed newest-first on the home page (first 2 shown).
 *
 * FIELDS:
 *   id       — unique number, just increment the last one
 *   category — short label, e.g. "Welfare", "Community", "Events"
 *   title    — headline for the news item
 *   excerpt  — short 1–2 sentence summary
 *   date     — "DD Mon YYYY" format (optional, not currently displayed)
 */

export const newsData = [
  {
    id: 1,
    category: 'Welfare',
    title: 'New Support Initiatives for Local Veterans',
    excerpt: 'The RNA Forth Valley branch has partnered with local organisations to bring expanded welfare support to members and their families.',
    date: '01 Mar 2025',
  },
  {
    id: 2,
    category: 'Community',
    title: 'Remembrance Day Parade in Grangemouth',
    excerpt: 'An opportunity to remember the service and sacrifice of all those that have defended our freedoms and protected our way of life.',
    date: '11 Nov 2024',
  },
  // Add more news items here...
];
