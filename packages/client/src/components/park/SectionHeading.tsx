import { palette } from './theme';

type Props = { eyebrow: string; title: string; description?: string };

const SectionHeading = ({ eyebrow, title, description }: Props) => (
  <div>
    <span
      className="text-xs font-semibold uppercase tracking-widest"
      style={{ color: palette.gold }}
    >
      {eyebrow}
    </span>
    <h2 className="mt-1 text-2xl sm:text-3xl font-bold" style={{ color: palette.ink }}>
      {title}
    </h2>
    {description && (
      <p className="mt-2 max-w-xl text-sm" style={{ color: `${palette.ink}99` }}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
