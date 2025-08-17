import React, { useEffect, useState } from 'react';
import { MdOutlineLightMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
import { MdSunny } from "react-icons/md";
import { PiMoonFill } from "react-icons/pi";
const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle fixed bottom-2 right-2"
      aria-label="Toggle color theme"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <MdSunny /> : <PiMoonFill />}
    </button>
  );
};

export default ThemeToggle;
