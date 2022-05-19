import { useEffect, useRef } from 'react';

export function useDebounce(reactCallback: VoidFunction, timeout = 200) {
  const limiter = useRef() as React.MutableRefObject<NodeJS.Timeout>;

  useEffect(() => {
    clearTimeout(limiter.current);

    limiter.current = setTimeout(reactCallback, timeout);
  }, [reactCallback, timeout]);
}
