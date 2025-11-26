import Css from "./Navbar.module.css";

// Component for selecting theme (light/dark)
import ThemeSelector from "../ThemeSelector/ThemeSelector";

const Navbar = () => {
  return (
    <nav className={Css.Navbar}>
      <div className={Css.Logo}>Nanny.Services</div>
      
      <div className={Css.AuthButtons}>
        <button className={Css.LoginButton}>Login</button>
        <button className={Css.SignupButton}>Registration</button>
        <ThemeSelector />
      </div>
    </nav>
  );
};

export default Navbar;
