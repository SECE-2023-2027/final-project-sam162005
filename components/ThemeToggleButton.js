'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    console.log('Toggling theme from:', theme);
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded text-sm font-medium bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}
