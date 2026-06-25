import type { KeyboardEvent } from 'react';
import { Button } from '../ui/button';
import { FaArrowUp } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

export type ChatFormData = {
  prompt: string;
};

type Props = {
  onSubmit: (data: ChatFormData) => void;
};

const ChatInput = ({ onSubmit }: Props) => {
  const { register, handleSubmit, reset, formState } = useForm<ChatFormData>();

  const submit = handleSubmit((data) => {
    reset({ prompt: '' });
    onSubmit(data);
  });

  const handleKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div>
      <form
        onSubmit={submit}
        onKeyDown={handleKeyDown}
        className="flex flex-col gap-2 items-end border-2 p-4 rounded-3xl"
      >
        <textarea
          {...register('prompt', {
            validate: (data) => data.trim().length > 0,
            required: true,
          })}
          autoFocus
          placeholder="Ask anything"
          className="w-full focus:outline-0 resize-none"
          maxLength={1000}
        />
        <Button
          disabled={!formState.isValid}
          className="rounded-full w-9 h-9"
          type="submit"
        >
          <FaArrowUp />
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
