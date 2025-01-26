import { StateCreator } from 'zustand';

import { CounterSlice } from './slices/counter-slice';

export type Store = {
  counter: CounterSlice;
};

export type StoreSlice<TSlice> = StateCreator<
  Store,
  [['zustand/devtools', never], ['zustand/immer', never]],
  [],
  TSlice
>;
