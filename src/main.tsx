import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="bg-red-500">Hello World!</div>
  </StrictMode>,
);
