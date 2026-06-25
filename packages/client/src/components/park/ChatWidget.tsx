import { Sparkles, X } from 'lucide-react';
import ChatBot from '../chat/ChatBot';
import { palette } from './theme';

type Props = {
  open: boolean;
  /** Bump this whenever a fresh conversation should start (e.g. a new suggested topic). */
  sessionKey: number;
  initialPrompt?: string;
  onOpenChange: (open: boolean) => void;
};

const ChatWidget = ({ open, sessionKey, initialPrompt, onOpenChange }: Props) => {
  return (
    <>
      <button
        onClick={() => onOpenChange(true)}
        aria-label="Open WonderWorld Concierge chat"
        className="fixed right-6 bottom-6 z-40 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-lg transition-transform hover:scale-105"
        style={{ backgroundColor: palette.gold, color: palette.ink }}
      >
        <Sparkles className="h-4 w-4" />
        Ask the Concierge
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <button
            aria-label="Close chat"
            className="absolute inset-0 bg-black/30"
            onClick={() => onOpenChange(false)}
          />
          <div
            className="relative flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
            role="dialog"
            aria-label="WonderWorld Concierge"
          >
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ backgroundColor: palette.ink, color: '#FBF6EC' }}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" style={{ color: palette.gold }} />
                <span className="font-semibold">WonderWorld Concierge</span>
              </div>
              <button onClick={() => onOpenChange(false)} aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden p-4">
              <ChatBot key={sessionKey} initialPrompt={initialPrompt} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
