import Css from "./NavList.module.css";

import { useSelector } from "react-redux";

const NavList = ({ flex = 1 }) => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  return (
    <ul className={Css.NavList} style={{ flex: flex }}>
      <li className={Css.NavItem}>
        <a href="/" className={Css.NavLink}>
          Home
        </a>
      </li>
      <li className={Css.NavItem}>
        <a href="/nannies" className={Css.NavLink}>
          Nannies
        </a>
      </li>
      {isLoggedIn && user ? (
        <li className={Css.NavItem}>
          <a href="/nannies/favorites" className={Css.NavLink}>
            Favorites
          </a>
        </li>
      ) : null}
    </ul>
  );
};

export default NavList;
