import { useLayoutEffect, useState } from 'react';

export function useWindowSizeThrottled() {
  const [size, setSize] = useState([0, 0]);

  function updateSize() {
    setSize((currentState) => {
      const nextState = [window.innerWidth, window.innerHeight];

      const widthDifference = Math.abs(nextState[0] - currentState[0]);
      const heightDifference = Math.abs(nextState[1] - currentState[1]);

      const difference = widthDifference + heightDifference;

      return difference > 100 ? nextState : currentState;
    });
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return size;
}
