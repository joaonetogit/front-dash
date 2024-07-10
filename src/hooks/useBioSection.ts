import { useState } from 'react';

const MAX_CHAR_COUNT = 275;

export default function useBioSection() {
  const [charCount, setCharCount] = useState(MAX_CHAR_COUNT);

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const remainingChars = MAX_CHAR_COUNT - event.target.value.length;
    setCharCount(remainingChars);
  };
  return { charCount, handleTextareaChange, MAX_CHAR_COUNT };
}
