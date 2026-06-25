import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import ChatMessages from './ChatMessages';
import TypingIndicator from './TypingIndicator';
import type { Message } from './ChatMessages';
import ChatInput, { type ChatFormData } from './ChatInput';
import popSound from '@/assets/sounds/pop.mp3';
import notificationSound from '@/assets/sounds/notification.mp3';

const popAudio = new Audio(popSound);
popAudio.volume = 0.2;

const notificationAudio = new Audio(notificationSound);
notificationAudio.volume = 0.2;

type ChatResponse = {
  message: string;
};

type Props = {
  /**
   * Optional prompt that's sent automatically the moment this component mounts.
   * Used by ChatWidget to launch a conversation pre-loaded with a suggested
   * question. Omit it and ChatBot behaves exactly as before.
   */
  initialPrompt?: string;
};

const ChatBot = ({ initialPrompt }: Props = {}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [error, setError] = useState('');
  const conversationId = useRef(crypto.randomUUID());

  const onSubmit = async ({ prompt }: ChatFormData) => {
    try {
      setError('');
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'user', content: prompt },
      ]);
      setIsBotTyping(true);
      popAudio.play();

      const { data } = await axios.post<ChatResponse>('/api/chat', {
        prompt,
        conversationId: conversationId.current,
      });
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'bot', content: data.message },
      ]);
      notificationAudio.play();
    } catch (error) {
      console.log(error);
      setError('Something went wrong, try again!');
    } finally {
      setIsBotTyping(false);
    }
  };

  useEffect(() => {
    if (initialPrompt) {
      onSubmit({ prompt: initialPrompt });
    }
    // Fires once per mount only. ChatWidget remounts this component (via a
    // `key` change) whenever a new suggested prompt is chosen, so this stays
    // intentionally mount-only rather than reacting to prop updates.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col content-end h-full">
      <div className="flex flex-col flex-1 gap-3 mb-10 overflow-y-auto">
        <ChatMessages messages={messages} />
        {isBotTyping && <TypingIndicator />}
        {error && <div className="text-red-500">{error}</div>}
      </div>
      <ChatInput onSubmit={onSubmit} />
    </div>
  );
};

export default ChatBot;
