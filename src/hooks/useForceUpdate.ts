import { useReducer } from 'react';

export function useForceUpdate() {
  return useReducer((count: number) => count + 1, 0)[1];
}
