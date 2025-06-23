import { useState } from 'react';
export default function useNotification(timeout = 3000) {
  const [notification, setNotification] = useState(null);
  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => {setNotification(null);}, timeout);
  };
  return { notification, showNotification };
}