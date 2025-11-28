import Css from "./NavAuth.module.css";

// Component for selecting theme (light/dark)
import ThemeSelector from "../ThemeSelector/ThemeSelector";

const NavAuth = ({ flex = 1 }) => {
  return (
    <div className={Css.AuthButtons} style={{ flex: flex }}>
      <button className={Css.LoginButton}>Login</button>
      <button className={Css.SignupButton}>Registration</button>
      <ThemeSelector />
    </div>
  );
};

export default NavAuth;
