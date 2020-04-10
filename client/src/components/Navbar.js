import React, { useState } from 'react';
import {useDarkMode} from '../hooks/DarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Filler nav for Darkmode</h1>
      <div className="dark-mode__toggle">
        <div
          data-testid="dark-mode"
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;