// Shared design tokens for the WonderWorld park page.
// Keeping these in one place so every park component speaks the same visual language.

export const palette = {
  ink: '#211F33', // deep marquee-night indigo — hero background, primary headings
  paper: '#FBF6EC', // warm parchment — section backgrounds
  gold: '#E8A33D', // marquee gold — "Wonder Band" / family tier accent
  rose: '#D8607A', // neon rose — "Storm Band" / thrill tier accent
  sage: '#6F8F6B', // meadow sage — "Pixie Band" / young kids tier accent
  dusk: '#5B5A8C', // twilight dusk — "Twilight Band" / calm-paced tier accent
} as const;

export type RideCategory = 'kids' | 'family' | 'thrill' | 'calm';

export const categoryStyle: Record<
  RideCategory,
  { band: string; ageLabel: string; color: string; bg: string }
> = {
  kids: {
    band: 'Pixie Band',
    ageLabel: 'Ages 3–7',
    color: palette.sage,
    bg: 'bg-[#6F8F6B]/10',
  },
  family: {
    band: 'Wonder Band',
    ageLabel: 'All Ages',
    color: palette.gold,
    bg: 'bg-[#E8A33D]/10',
  },
  thrill: {
    band: 'Storm Band',
    ageLabel: 'Ages 10+',
    color: palette.rose,
    bg: 'bg-[#D8607A]/10',
  },
  calm: {
    band: 'Twilight Band',
    ageLabel: 'Slower-Paced',
    color: palette.dusk,
    bg: 'bg-[#5B5A8C]/10',
  },
};
