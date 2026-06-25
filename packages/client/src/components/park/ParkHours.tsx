import { Clock3 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { hours } from '../../data/wonderworld';
import { palette } from './theme';

const ParkHours = () => (
  <section className="py-14">
    <SectionHeading
      eyebrow="Today's Hours"
      title="When the gates are open"
      description="Hours may shift on holidays or special event days — ask the concierge for today's exact schedule."
    />
    <div
      className="mt-8 divide-y rounded-2xl border bg-white"
      style={{ borderColor: `${palette.ink}1A` }}
    >
      {hours.map((h) => (
        <div key={h.area} className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-3">
            <Clock3 className="h-4 w-4" style={{ color: palette.dusk }} />
            <span className="font-medium" style={{ color: palette.ink }}>
              {h.area}
            </span>
          </div>
          <span className="text-sm" style={{ color: `${palette.ink}99` }}>
            {h.opening === '24' ? 'Open 24 hours' : `${h.opening} – ${h.closing}`}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default ParkHours;
