import React, { useState, useEffect } from 'react';
import './ThemeToggle.css'; 

const ThemeToggle = () => {
  // Define theme and icon class names
  const darkTheme = 'dark-theme';
  const iconTheme = 'uil-moon';

  // Get saved theme and icon from localStorage or default to light theme
  const savedTheme = localStorage.getItem('selected-theme');
  const savedIcon = localStorage.getItem('selected-icon');

  // Determine initial theme and icon
  const [theme, setTheme] = useState(savedTheme || 'light');
  const [icon, setIcon] = useState(savedIcon || iconTheme);

  // Effect to apply theme on component mount
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add(darkTheme);
    } else {
      document.body.classList.remove(darkTheme);
    }

    const iconClass = theme === 'dark' ? 'uil-sun' : 'uil-moon';
    setIcon(iconClass);
    localStorage.setItem('selected-theme', theme);
    localStorage.setItem('selected-icon', iconClass);
  }, [theme]);

  // Toggle theme and icon on button click
  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <i
      className={`uil ${icon} change-theme`}
      id="theme-button"
      onClick={handleThemeToggle}
    ></i>
  );
};

export default ThemeToggle;
