import { UtensilsCrossed } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { dining, diningNote } from '../../data/wonderworld';
import { palette } from './theme';

const Dining = () => (
  <section className="py-14">
    <SectionHeading eyebrow="Dining" title="Eat like royalty (or a space pilot)" />
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {dining.map((venue) => (
        <div
          key={venue.name}
          className="flex items-start gap-3 rounded-2xl border bg-white p-5"
          style={{ borderColor: `${palette.ink}1A` }}
        >
          <UtensilsCrossed
            className="mt-0.5 h-5 w-5 shrink-0"
            style={{ color: palette.rose }}
          />
          <div>
            <h3 className="font-semibold" style={{ color: palette.ink }}>
              {venue.name}
            </h3>
            <p className="mt-1 text-sm" style={{ color: `${palette.ink}99` }}>
              {venue.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    <p className="mt-4 text-sm" style={{ color: `${palette.ink}80` }}>
      {diningNote}
    </p>
  </section>
);

export default Dining;
