import { StoreSlice } from '../Store';

type CounterState = {
  count: number;
};

type CounterActions = {
  increment: () => void;
  decrement: () => void;
};

export type CounterSlice = CounterState & CounterActions;

export const createCounterSlice: StoreSlice<CounterSlice> = (set) => ({
  count: 0,
  increment: () =>
    set((state) => {
      state.counter.count = state.counter.count + 1;
    }),
  decrement: () =>
    set((state) => {
      state.counter.count = state.counter.count - 1;
    }),
});
