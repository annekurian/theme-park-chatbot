import type { RideCategory } from '../components/park/theme';

export type TicketTier = {
  name: string;
  price: string;
  note: string;
};

export const tickets: TicketTier[] = [
  { name: 'General Admission', price: '$129', note: 'Ages 12+ · all rides & attractions' },
  { name: 'Child Admission', price: '$109', note: 'Ages 3–11 · under 3 enters free' },
  { name: 'Senior Admission', price: '$99', note: 'Ages 65+ · valid ID required' },
  { name: 'Multi-Day Pass', price: '$299', note: '3 days · park-hopping included' },
  { name: 'FastLane Pass', price: '+$59', note: 'Add-on · skip the line on select attractions' },
  { name: 'Annual Pass', price: '$899', note: 'Includes parking & special discounts' },
];

export const parkingNote = 'Parking $35/day · preferred parking $50/day';
export const ticketFootnote =
  'Every ticket includes daytime shows, parades, and fireworks.';

export type ParkHour = { area: string; opening: string; closing: string };

export const hours: ParkHour[] = [
  { area: 'Main Park', opening: '9:00 AM', closing: '10:00 PM' },
  { area: 'WonderWorld Hotel', opening: '24', closing: 'hours' },
  { area: 'Magic Dining Court', opening: '10:30 AM', closing: '9:30 PM' },
  { area: 'Wonder Waterpark', opening: '10:00 AM', closing: '6:00 PM' },
  { area: 'Night Spectacle Parade', opening: '8:30 PM', closing: '9:00 PM' },
];

export type Ride = { name: string; description: string; category: RideCategory };

export const rides: Ride[] = [
  { name: 'Pixie Meadow Carousel', description: 'Gentle ride through fairyland animals', category: 'kids' },
  { name: 'Bubbles & Giggles Lagoon', description: 'Splash pad with playful animations', category: 'kids' },
  { name: 'Treetop Tots Adventure', description: 'Mini obstacle course for little ones', category: 'kids' },
  { name: 'Snuggle Safari Train', description: 'Jungle-themed scenic ride with animatronics', category: 'kids' },

  { name: 'Quest of the Crystal Guardians', description: 'Indoor 4D interactive light-blaster ride', category: 'family' },
  { name: 'Dreamlight Express', description: 'Scenic storytelling train ride', category: 'family' },
  { name: 'Wonder SkyRide', description: 'Flying gondola with panoramic views', category: 'family' },
  { name: 'Legends on Ice', description: 'Live skating show with magical themes', category: 'family' },

  { name: 'Phantom Vale Coaster', description: 'Haunted high-speed coaster', category: 'thrill' },
  { name: 'AetherStorm: Flight of Fury', description: 'Suspended inverted coaster with loops', category: 'thrill' },
  { name: 'Doom Mine Plunge', description: 'Water-coaster with backward drops', category: 'thrill' },
  { name: 'Galactic Warp Simulator', description: 'VR space battle motion simulator', category: 'thrill' },

  { name: 'Mystic Gardens Walkthrough', description: 'Tranquil botanical trail', category: 'calm' },
  { name: 'Royal Theater', description: 'Broadway-style live musicals', category: 'calm' },
  { name: 'Twilight River Cruise', description: 'Serene evening boat ride', category: 'calm' },
  { name: 'Vintage Time Machine', description: 'Nostalgic ride through dreamy eras', category: 'calm' },
];

export type DiningVenue = { name: string; description: string };

export const dining: DiningVenue[] = [
  { name: 'Royal Banquet Hall', description: 'Castle-themed fine dining with character visits' },
  { name: 'Galaxy Grub Hub', description: 'Sci-fi quick service with plant-based options' },
  { name: 'Jungle Munch Café', description: 'Family-friendly classic favorites' },
  { name: 'Meadow Market', description: 'Snacks, smoothies, and coffee' },
];

export const diningNote = 'Most locations accommodate allergies & dietary needs.';

export type RoomOption = { label: string; price: string };

export type Stay = {
  name: string;
  tagline: string;
  rooms: RoomOption[];
  features: string[];
};

export const stays: Stay[] = [
  {
    name: 'WonderWorld Hotel',
    tagline: 'On-site luxury',
    rooms: [
      { label: 'Standard Room (sleeps 4)', price: '$299/night' },
      { label: 'Suite (sleeps 6)', price: '$499/night' },
    ],
    features: [
      'Early park access (8 AM)',
      'Free breakfast',
      'Character dining',
      'Free shuttle to park',
    ],
  },
  {
    name: 'Magic Grove Inn',
    tagline: 'Budget · 5-min walk',
    rooms: [{ label: 'Rooms from', price: '$139/night' }],
    features: ['Park shuttle every 20 mins', 'Discounted park ticket bundles'],
  },
];

export type ShowEvent = { name: string; time: string };

export const shows: ShowEvent[] = [
  { name: 'Royal Parade of Lights', time: '7:00 PM nightly' },
  { name: 'Dragon Awakening Show', time: '3:00 & 5:00 PM daily' },
  { name: 'Nightfall Spectacular Fireworks', time: '9:30 PM nightly' },
];

export const accessibilityServices: string[] = [
  'Wheelchair & ECV rentals ($25–$50/day)',
  'Hearing-assist devices for theaters',
  'Clearly marked ride accessibility info',
  'Sensory quiet zones',
  'Service animals welcome',
];

export const childServices: string[] = [
  'Baby Care Centers across all zones',
  'Stroller rentals ($20/day)',
  'Complimentary child locator wristbands',
];

export const askTheConciergeTopics: string[] = [
  'What are the best rides for toddlers?',
  'Recommend a thrill ride lineup for teens',
  'What time is the fireworks show tonight?',
  'Help me plan dinner reservations',
  'Is the WonderWorld Hotel worth booking?',
  'What should I know about accessibility services?',
];
