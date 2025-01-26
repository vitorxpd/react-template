import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { env } from '@/config/env';

import { createCounterSlice } from './slices/counterSlice';
import { Store } from './Store';

export const useStore = create<Store>()(
  devtools(
    immer((...params) => ({
      counter: createCounterSlice(...params),
    })),
    {
      name: 'Global Store',
      store: 'global',
      enabled: env.DEV,
    },
  ),
);
