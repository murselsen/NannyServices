import Css from "./NavList.module.css";

const NavList = () => {
  return (
    <ul className={Css.NavList}>
      <li className={Css.NavItem}>Home</li>
      <li className={Css.NavItem}>Nannies</li>
    </ul>
  );
};

export default NavList;
