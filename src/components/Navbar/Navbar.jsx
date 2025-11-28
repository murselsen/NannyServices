import Css from "./Navbar.module.css";

const Navbar = ({ children }) => {
  return <nav className={Css.Navbar}>{children}</nav>;
};

export default Navbar;
