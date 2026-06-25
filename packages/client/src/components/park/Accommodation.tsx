import { BedDouble, Check } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { stays } from '../../data/wonderworld';
import { palette } from './theme';

const Accommodation = () => (
  <section className="py-14">
    <SectionHeading eyebrow="Stay" title="Where to rest your crown" />
    <div className="mt-8 grid gap-5 sm:grid-cols-2">
      {stays.map((stay) => (
        <div
          key={stay.name}
          className="rounded-2xl border bg-white p-6"
          style={{ borderColor: `${palette.ink}1A` }}
        >
          <div className="flex items-center gap-2">
            <BedDouble className="h-5 w-5" style={{ color: palette.dusk }} />
            <h3 className="text-lg font-semibold" style={{ color: palette.ink }}>
              {stay.name}
            </h3>
          </div>
          <p className="text-sm" style={{ color: palette.gold }}>
            {stay.tagline}
          </p>

          <div className="mt-4 space-y-1">
            {stay.rooms.map((room) => (
              <div key={room.label} className="flex justify-between text-sm">
                <span style={{ color: `${palette.ink}99` }}>{room.label}</span>
                <span className="font-medium" style={{ color: palette.ink }}>
                  {room.price}
                </span>
              </div>
            ))}
          </div>

          <ul className="mt-4 space-y-1.5">
            {stay.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm"
                style={{ color: `${palette.ink}99` }}
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: palette.sage }} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Accommodation;
