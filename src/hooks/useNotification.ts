import { useEffect, useState } from 'react';

export const useNotification = (): {
  notification: string | null;
  showNotification: (message: string, duration?: number) => void;
} => {
  const [notification, setNotification] = useState<string | null>(null);
  let timer: ReturnType<typeof setTimeout>;

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const showNotification = (message: string, duration = 3000): void => {
    setNotification(message);

    clearTimeout(timer);
    timer = setTimeout(() => {
      setNotification(null);
    }, duration);
  };

  return { notification, showNotification };
};
