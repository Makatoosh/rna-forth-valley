/**
 * RNA Forth Valley — Gallery Data
 *
 * HOW TO ADD PHOTOS:
 * 1. Copy your photo file into: src/assets/images/gallery/
 *    (create this folder if it does not exist)
 * 2. Add a new entry to the array below.
 *
 * For local photos use:
 *   url: new URL('../assets/images/gallery/your-photo.jpg', import.meta.url).href
 *
 * For web/external photos use:
 *   url: 'https://example.com/photo.jpg'
 *
 * FIELDS:
 *   id      — unique number
 *   url     — file path or web URL (see instructions above)
 *   alt     — short description (important for accessibility)
 *   caption — text shown below the photo in the lightbox
 *   date    — "Mon YYYY" format shown in lightbox (optional)
 */

export const galleryData = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1542382156909-9ae382ebfec8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Remembrance Day Parade',
    caption: 'Remembrance Day Parade, Grangemouth',
    date: 'Nov 2024',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1559863481-645396b1b5e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Branch Social Evening',
    caption: 'Branch Social Evening',
    date: 'Oct 2024',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1577413470719-74e2dadd7d96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Monthly Branch Meeting',
    caption: 'Monthly Branch Meeting at RBLS Grangemouth',
    date: 'Sep 2024',
  },
];
