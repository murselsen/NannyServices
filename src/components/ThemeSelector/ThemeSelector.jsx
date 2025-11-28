// Styles
import { useEffect, useState } from "react";
import Css from "./ThemeSelector.module.css";
import { BsFillPaletteFill } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";

const ThemeSelector = () => {
  const [theme, setTheme] = useState("red");
  const [mounted, setMounted] = useState(true);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };
  return (
    <>
      <div className={Css.ThemeToggle} onClick={() => setMounted(!mounted)}>
        <BsFillPaletteFill />
      </div>
      {mounted && (
        <ul className={Css.ThemeSelector}>
          {theme === "red" ? (
            <li className={Css.ThemeOptionActive}>
              <FaPaintBrush /> <span>Red</span>
            </li>
          ) : (
            <li
              className={Css.ThemeOption}
              onClick={() => handleThemeChange("red")}
            >
              <FaPaintBrush /> <span>Red</span>
            </li>
          )}
          {theme === "blue" ? (
            <li className={Css.ThemeOptionActive}>
              <FaPaintBrush /> <span>Blue</span>
            </li>
          ) : (
            <li
              className={Css.ThemeOption}
              onClick={() => handleThemeChange("blue")}
            >
              <FaPaintBrush /> <span>Blue</span>
            </li>
          )}
          {theme === "green" ? (
            <li className={Css.ThemeOptionActive}>
              <FaPaintBrush /> <span>Green</span>
            </li>
          ) : (
            <li
              className={Css.ThemeOption}
              onClick={() => handleThemeChange("green")}
            >
              <FaPaintBrush /> <span>Green</span>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default ThemeSelector;
