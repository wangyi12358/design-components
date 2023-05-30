import { useState } from 'react';
import { useDidUpdateEffect } from './useDidUpdateEffect';

export function useLoading(loading?: boolean) {
  const [state, setState] = useState(loading ?? false);

  useDidUpdateEffect(() => {
    if (loading !== undefined) {
      setState(loading);
    }
  }, [loading]);

  return [state, setState] as const;
}
