import { useState, useCallback } from 'react';

import useEventListener from './useEventListener';

export default function useLocalStorage(key, initialValue) {
  const [currentState, updateCurrentState] = useState(() => {
    try {
      const item = localStorage[key];
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setCurrentState = useCallback(
    (value) => {
      localStorage[key] = JSON.stringify(value);
      updateCurrentState(value);
    },
    [key],
  );

  const localStorageChanged = useCallback(
    (e) => {
      if (e.key === key) {
        updateCurrentState(e.newValue ? JSON.parse(e.newValue) : initialValue);
      }
    },
    [key, initialValue],
  );

  useEventListener('storage', localStorageChanged);

  return [currentState, setCurrentState];
}
