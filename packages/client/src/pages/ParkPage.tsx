import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import ParkHero from '../components/park/ParkHero';
import TicketPricing from '../components/park/TicketPricing';
import ParkHours from '../components/park/ParkHours';
import RideHighlights from '../components/park/RideHighlights';
import Dining from '../components/park/Dining';
import Accommodation from '../components/park/Accommodation';
import ShowsEvents from '../components/park/ShowsEvents';
import AccessibilityServices from '../components/park/AccessibilityServices';
import ChatWidget from '../components/park/ChatWidget';
import { askTheConciergeTopics } from '../data/wonderworld';
import { palette } from '../components/park/theme';

const ParkPage = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatSession, setChatSession] = useState(0);
  const [chatPrompt, setChatPrompt] = useState<string | undefined>();

  // Starts (or restarts) a concierge conversation. Pass a topic to have it
  // auto-send as the first message; omit it to just reopen the chat panel.
  const askConcierge = (prompt?: string) => {
    setChatPrompt(prompt);
    setChatSession((k) => k + 1);
    setChatOpen(true);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24" style={{ color: palette.ink }}>
      <ParkHero onOpenChat={() => askConcierge()} />
      <TicketPricing />
      <ParkHours />
      <RideHighlights />
      <Dining />
      <Accommodation />
      <ShowsEvents />
      <AccessibilityServices />

      <section className="py-14">
        <h2 className="text-2xl font-bold" style={{ color: palette.ink }}>
          Ask the concierge about…
        </h2>
        <p className="mt-2 text-sm" style={{ color: `${palette.ink}99` }}>
          Tap a question to start chatting right away.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {askTheConciergeTopics.map((topic) => (
            <button
              key={topic}
              onClick={() => askConcierge(topic)}
              className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:bg-[#211F33]/5"
              style={{ borderColor: `${palette.ink}26`, color: palette.ink }}
            >
              <Sparkles className="h-3.5 w-3.5" style={{ color: palette.gold }} />
              {topic}
            </button>
          ))}
        </div>
      </section>

      <ChatWidget
        open={chatOpen}
        sessionKey={chatSession}
        initialPrompt={chatPrompt}
        onOpenChange={setChatOpen}
      />
    </div>
  );
};

export default ParkPage;
