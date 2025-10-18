import React from "react";

function Header({ onDarkModeClick, isDarkMode }) {
  return (
    <header>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
