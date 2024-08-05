// imports react
import { useEffect, useState } from "react";

const toggleMode = () => {
  return localStorage.getItem("darkMode") || "light";
};

const Navbar = () => {
  const [theme, setTheme] = useState(toggleMode());

  // toggle dark mode
  const toggleTheme = () => {
    const newTheme = theme === "dark-mode" ? "light" : "dark-mode";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.classList = "";
    document.body.classList.add(theme);
    localStorage.setItem("darkMode", theme);
  }, [theme]);

  return (
    <header className="header">
      <div className="header-container container">
        <div></div>
        <div>
          <div className="dark-btn" onClick={toggleTheme}>
            <input
              type="checkbox"
              checked={theme === "dark-mode"}
              onChange={toggleTheme} // Add onChange handler
            />
            <span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
