import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './layouts/default-layout';
import { Home } from './pages/home';

export function Router() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
