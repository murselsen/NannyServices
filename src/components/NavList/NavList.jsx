import Css from "./NavList.module.css";

const NavList = ({ flex = 1 }) => {
  return (
    <ul className={Css.NavList} style={{ flex: flex }}>
      <li className={Css.NavItem}>
        <a href="/" className={Css.NavLink}>Home</a>
      </li>
      <li className={Css.NavItem}>
        <a href="/nannies" className={Css.NavLink}>Nannies</a>
      </li>
    </ul>
  );
};

export default NavList;
