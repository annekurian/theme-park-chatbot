import { Sparkles, Ticket } from 'lucide-react';
import { Button } from '../ui/button';
import { palette } from './theme';
import { tickets } from '../../data/wonderworld';

type Props = {
  onOpenChat: () => void;
};

const heroTickets = tickets.slice(0, 3);

const ParkHero = ({ onOpenChat }: Props) => {
  return (
    <section
      className="relative overflow-hidden rounded-3xl px-6 py-14 sm:px-10 sm:py-20 text-[#FBF6EC]"
      style={{ backgroundColor: palette.ink }}
    >
      {/* marquee lights */}
      <div className="absolute inset-x-0 top-0 flex justify-between px-4 pt-3 opacity-70">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor:
                i % 3 === 0 ? palette.gold : i % 3 === 1 ? palette.rose : palette.sage,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl">
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase"
          style={{ backgroundColor: `${palette.gold}1A`, color: palette.gold }}
        >
          <Sparkles className="h-3.5 w-3.5" />
          Now open · daily fireworks at 9:30 PM
        </span>

        <h1 className="mt-5 text-4xl sm:text-6xl font-bold leading-[1.05] tracking-tight">
          Welcome to WonderWorld
        </h1>
        <p className="mt-4 text-lg text-[#FBF6EC]/80">
          Where wonder comes to life. Four lands, sixteen rides, and a concierge
          who never sleeps — ask it anything before you go.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button
            size="lg"
            className="rounded-full"
            style={{ backgroundColor: palette.gold, color: palette.ink }}
            onClick={onOpenChat}
          >
            <Sparkles className="h-4 w-4" />
            Ask the Concierge
          </Button>
          <a
            href="#tickets"
            className="inline-flex items-center gap-2 rounded-full border border-[#FBF6EC]/30 px-5 py-2.5 text-sm font-medium text-[#FBF6EC] transition-colors hover:bg-[#FBF6EC]/10"
          >
            <Ticket className="h-4 w-4" />
            See ticket prices
          </a>
        </div>

        <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
          {heroTickets.map((t) => (
            <div key={t.name}>
              <dt className="text-xs text-[#FBF6EC]/60">{t.name}</dt>
              <dd className="text-xl font-semibold" style={{ color: palette.gold }}>
                {t.price}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default ParkHero;
