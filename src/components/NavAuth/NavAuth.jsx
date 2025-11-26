import Css from "./NavAuth.module.css";

// Component for selecting theme (light/dark)
import ThemeSelector from "../ThemeSelector/ThemeSelector";

const NavAuth = () => {
  return (
    <div className={Css.AuthButtons}>
      <button className={Css.LoginButton}>Login</button>
      <button className={Css.SignupButton}>Registration</button>
      <ThemeSelector />
    </div>
  );
};
