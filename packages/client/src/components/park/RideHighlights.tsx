import { useState } from 'react';
import SectionHeading from './SectionHeading';
import { rides } from '../../data/wonderworld';
import { categoryStyle, type RideCategory } from './theme';

const categories: RideCategory[] = ['kids', 'family', 'thrill', 'calm'];

const RideHighlights = () => {
  const [active, setActive] = useState<RideCategory>('family');
  const visible = rides.filter((r) => r.category === active);

  return (
    <section className="py-14">
      <SectionHeading
        eyebrow="Rides & Attractions"
        title="Find your wristband"
        description="Every ride is color-coded by who it's built for — match the band to your crew and go."
      />

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => {
          const style = categoryStyle[c];
          const isActive = c === active;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className="rounded-full border px-4 py-1.5 text-sm font-medium transition-colors"
              style={{
                borderColor: style.color,
                backgroundColor: isActive ? style.color : 'transparent',
                color: isActive ? '#fff' : style.color,
              }}
            >
              {style.band}
              <span className="ml-1.5 opacity-70">· {style.ageLabel}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((ride) => {
          const style = categoryStyle[ride.category];
          return (
            <div
              key={ride.name}
              className={`rounded-xl border-l-4 bg-white p-4 shadow-sm ${style.bg}`}
              style={{ borderLeftColor: style.color }}
            >
              <h3 className="text-sm font-semibold text-[#211F33]">{ride.name}</h3>
              <p className="mt-1 text-sm text-[#211F33]/70">{ride.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RideHighlights;
