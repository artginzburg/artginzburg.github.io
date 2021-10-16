import { useEffect, useRef } from 'react';

export function useCooldownEffect(reactCallback, timeout = 200) {
  const limiter = useRef();

  useEffect(() => {
    clearTimeout(limiter.current);

    limiter.current = setTimeout(reactCallback, timeout);
  }, [reactCallback, timeout]);
}
