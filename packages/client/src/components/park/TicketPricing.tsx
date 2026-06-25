import SectionHeading from './SectionHeading';
import { tickets, ticketFootnote, parkingNote } from '../../data/wonderworld';
import { palette } from './theme';

const TicketPricing = () => {
  return (
    <section id="tickets" className="py-14">
      <SectionHeading eyebrow="Tickets & Pricing" title="Pick your pass" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tickets.map((ticket) => (
          <div
            key={ticket.name}
            className="relative rounded-2xl border bg-white p-5 shadow-sm"
            style={{ borderColor: `${palette.ink}1A` }}
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-semibold" style={{ color: palette.ink }}>
                {ticket.name}
              </h3>
              <span className="text-xl font-bold" style={{ color: palette.gold }}>
                {ticket.price}
              </span>
            </div>
            <div
              className="my-3 border-t border-dashed"
              style={{ borderColor: `${palette.ink}33` }}
            />
            <p className="text-sm" style={{ color: `${palette.ink}99` }}>
              {ticket.note}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm" style={{ color: `${palette.ink}80` }}>
        {ticketFootnote} {parkingNote}.
      </p>
    </section>
  );
};

export default TicketPricing;
