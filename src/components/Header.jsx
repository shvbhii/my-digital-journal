import React from 'react';
import './Header.css';

function Header({ setTheme }) {
  return (
    <header>
      <h1>My Aesthetic Digital Journal</h1>
      <div className="theme-switcher">
        <button onClick={() => setTheme('light')}>☀️ Light</button>
        <button onClick={() => setTheme('dark')}>🌙 Dark</button>
        <button onClick={() => setTheme('serene')}>🍃 Serene</button>
      </div>
    </header>
  );
}

export default Header;