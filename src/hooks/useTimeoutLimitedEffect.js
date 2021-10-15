import { useEffect, useRef } from 'react';

export function useTimeoutLimitedEffect(reactCallback, timeout = 200) {
  const limiter = useRef();

  useEffect(() => {
    clearTimeout(limiter.current);

    limiter.current = setTimeout(reactCallback, timeout);
  }, [reactCallback, timeout]);
}
