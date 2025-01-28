import { ComponentType } from 'react';

import { Home } from '@/pages/home';
import { NotFound } from '@/pages/not-found';

import { ROUTE_PATHS } from './constants';

type RouteItem = {
  path: string;
  enabled: boolean;
  Component: ComponentType;
  Layout?: ComponentType;
};

export const routes: RouteItem[] = [
  {
    path: ROUTE_PATHS.HOME,
    enabled: true,
    Component: Home,
  },
  {
    path: ROUTE_PATHS.NOT_FOUND,
    enabled: true,
    Component: NotFound,
  },
];
