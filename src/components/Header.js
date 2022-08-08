import React from "react";

const Header = ({ handleToggleDarkMode, darkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        {darkMode ? "Light 💡" : "Dark 🌙 "}
      </button>
    </div>
  );
};

export default Header;
