import { ThemeProvider } from './contexts/theme-context';
import { Router } from './router';

export function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
