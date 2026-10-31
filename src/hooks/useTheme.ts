import { useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = localStorage.getItem('nexus-theme') as Theme | null;
    if (saved === 'dark') return 'dark';
    // User specifically prefers the dark theme: initialize & persist dark
    try {
      localStorage.setItem('nexus-theme', 'dark');
    } catch {
      // Ignore storage errors in private browsing
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
    root.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('nexus-theme', next);
      return next;
    });
  };

  return { theme, toggleTheme };
}

