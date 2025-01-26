import { Outlet } from 'react-router-dom';

import { Header } from '@/components/header';

export function DefaultLayout() {
  return (
    <div>
      <Header />

      <main className="overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
