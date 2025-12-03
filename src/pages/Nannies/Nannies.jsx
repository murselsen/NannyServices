import React, { useEffect } from "react";
// Css
import Css from "./Nannies.module.css";

// Redux
import { useDispatch } from "react-redux";
import { fetchNannies } from "../../redux/nannies/thunks.js";

// Components
import NavList from "../../components/NavList/NavList";
import NavAuth from "../../components/NavAuth/NavAuth";
import NavLogo from "../../components/NavLogo/NavLogo";

const Nannies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNannies());
  }, [dispatch]);

  return (
    <div className={Css.NanniesPage}>
      <div className={Css.Navbar}>
        <NavLogo flex={1} />
        <NavList flex={1} />
        <NavAuth />
      </div>
    </div>
  );
};

export default Nannies;
