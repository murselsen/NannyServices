import React, { useEffect, useState } from "react";
// Css
import Css from "./Nannies.module.css";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchNannies } from "../../redux/nannies/thunks.js";

// Components
import NavList from "../../components/NavList/NavList";
import NavAuth from "../../components/NavAuth/NavAuth";
import NavLogo from "../../components/NavLogo/NavLogo";
import NannyList from "../../components/NannyList/NannyList";
import { useMediaQuery } from "react-responsive";
import ThemeSelector from "../../components/ThemeSelector/ThemeSelector.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import Filters from "../../components/Filters/Filters.jsx";

const Nannies = () => {
  const isTabletOrMobile = useMediaQuery({
    maxWidth: 1024,
  });
  const [isTabletOrMobileMenuShow, setIsTabletOrMobileMenuShow] =
    useState(false);
  const nanniesData = useSelector((state) => state.nannies.items);
  const [nannies, setNannies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNannies());
  }, [dispatch]);

  useEffect(() => {
    setNannies(nanniesData);
  }, [nanniesData]);

  return (
    <div className={Css.NanniesPage}>
      <div className={Css.Navbar}>
        {isTabletOrMobile ? (
          <div className={Css.NavbarTM}>
            <div className={Css.NavbarTop}>
              <NavLogo flex={1} />
              <div className={Css.NavbarAction}>
                <ThemeSelector />
                <GiHamburgerMenu
                  className={Css.MenuToggle}
                  onClick={() =>
                    setIsTabletOrMobileMenuShow(!isTabletOrMobileMenuShow)
                  }
                />
              </div>
            </div>
            {isTabletOrMobileMenuShow && (
              <div className={Css.NavbarBody}>
                <NavList /> <NavAuth />
              </div>
            )}
          </div>
        ) : (
          <>
            <NavLogo flex={1} />
            <NavList />
            <NavAuth />
          </>
        )}
      </div>
      <div className={Css.Content}>
        <Filters />
        <NannyList data={nannies} />
      </div>
    </div>
  );
};

export default Nannies;
