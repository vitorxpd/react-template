import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routes } from './config/routes';

export function Router() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>
        {routes.map(({ path, enabled, Component, Layout }) => {
          if (!enabled) {
            return null;
          }

          return (
            <Route key={path} element={Layout && <Layout />}>
              <Route path={path} element={<Component />} />
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
