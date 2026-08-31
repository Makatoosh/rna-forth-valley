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
    id: 3,
    category: 'Community',
    title: 'RNA Forth Valley Branch at Grangemouth Armed Forces Day 2026',
    excerpt: "RNA Forth Valley Branch was proud to be represented at this year's Grangemouth Armed Forces Day, marching through the town before rounding off the day at Grangemouth Royal British Legion.",
    body: "RNA Forth Valley Branch was proud to be represented at this year's Grangemouth Armed Forces Day. Our branch turned out in good order with Chairman Ali Barber, Vice Chairman Kenny MacIntosh, Secretary Andy McDonald MBE, Treasurer James Mann and Shipmate Ray Wyatt on parade, with Standard Bearer David Lewis carrying the branch standard through the town. We were also joined by two visitors from Rosyth Branch, Shipmates Mike Firth and his son, Scottish Area Standard Bearer Mark Firth, who paraded the Area standard alongside our own. It was a fine show of support for the Armed Forces community, and a pleasure to march alongside the fellow veterans and cadet units who came out on the day.\n\nFollowing a march through the town, the parade made its way to the Grangemouth Royal British Legion, where we were made very welcome with refreshments and entertainment. It rounded off the day nicely. Our thanks go to the organisers of Grangemouth Armed Forces Day and to the Royal British Legion Scotland for their hospitality, and to our shipmates from Rosyth for making the trip across to join us.",
    date: '30 Aug 2026',
  },
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
