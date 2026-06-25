import { PartyPopper } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { shows } from '../../data/wonderworld';
import { palette } from './theme';

const ShowsEvents = () => (
  <section className="py-14">
    <SectionHeading eyebrow="Shows & Events" title="Don't miss the show" />
    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      {shows.map((show) => (
        <div
          key={show.name}
          className="rounded-2xl p-5 text-center"
          style={{ backgroundColor: `${palette.ink}05`, border: `1px solid ${palette.ink}1A` }}
        >
          <PartyPopper className="mx-auto h-6 w-6" style={{ color: palette.rose }} />
          <h3 className="mt-3 font-semibold" style={{ color: palette.ink }}>
            {show.name}
          </h3>
          <p className="mt-1 text-sm" style={{ color: `${palette.ink}99` }}>
            {show.time}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default ShowsEvents;
