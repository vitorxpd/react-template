import { env } from './env';

export const rawStorageKeys = {
  theme: 'vite-ui-theme',
};

const processedStorageKeys = Object.fromEntries(
  Object.entries(rawStorageKeys).map(([key, value]) => [
    key,
    `${env.APP_NAME}:${value}`,
  ]),
);

export const storageKeys = env.DEV ? processedStorageKeys : rawStorageKeys;
