import { useCallback, useEffect, useState } from 'react';

interface Countdown {
  minutes: string;
  seconds: string;
  isEnded: boolean;
  reset: () => void;
}

const useCountdown = (milliseconds: number): Countdown => {
  const [timeLeft, setTimeLeft] = useState(milliseconds);
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsEnded(true);
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(prevTimeLeft => Math.max(prevTimeLeft - 1000, 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const reset = useCallback(() => {
    setTimeLeft(milliseconds);
    setIsEnded(false);
  }, [milliseconds]);

  const minutes = String(Math.floor(timeLeft / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((timeLeft % 60000) / 1000)).padStart(2, '0');

  return { minutes, seconds, isEnded, reset };
};

export default useCountdown;
