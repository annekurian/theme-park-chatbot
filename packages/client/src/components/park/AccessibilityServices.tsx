import type { ReactNode } from 'react';
import { Accessibility, Baby } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { accessibilityServices, childServices } from '../../data/wonderworld';
import { palette } from './theme';

type BlockProps = { icon: ReactNode; title: string; items: string[] };

const Block = ({ icon, title, items }: BlockProps) => (
  <div className="rounded-2xl border bg-white p-6" style={{ borderColor: `${palette.ink}1A` }}>
    <div className="flex items-center gap-2">
      {icon}
      <h3 className="font-semibold" style={{ color: palette.ink }}>
        {title}
      </h3>
    </div>
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="text-sm" style={{ color: `${palette.ink}99` }}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const AccessibilityServices = () => (
  <section className="py-14">
    <SectionHeading eyebrow="Good to Know" title="Accessibility & family services" />
    <div className="mt-8 grid gap-5 sm:grid-cols-2">
      <Block
        icon={<Accessibility className="h-5 w-5" style={{ color: palette.dusk }} />}
        title="Accessibility services"
        items={accessibilityServices}
      />
      <Block
        icon={<Baby className="h-5 w-5" style={{ color: palette.sage }} />}
        title="Child services"
        items={childServices}
      />
    </div>
  </section>
);

export default AccessibilityServices;
