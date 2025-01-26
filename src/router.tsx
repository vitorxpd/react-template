import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './layouts/default-layout';
import { Home } from './pages/home';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
