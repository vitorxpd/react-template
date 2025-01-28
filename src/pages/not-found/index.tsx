import { Navigate } from 'react-router-dom';

import { ROUTE_PATHS } from '@/config/constants';

export function NotFound() {
  return <Navigate to={ROUTE_PATHS.HOME} />;
}
