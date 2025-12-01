import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Navbar from "../../components/Navbar/Navbar";
import Css from "./Home.module.css";

// Icons
import { FaCheck } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";

// Components
import NavLogo from "../../components/NavLogo/NavLogo";
import NavList from "../../components/NavList/NavList";
import NavAuth from "../../components/NavAuth/NavAuth";
import ThemeSelector from "../../components/ThemeSelector/ThemeSelector";

const Home = () => {
  const isTabletOrMobile = useMediaQuery({
    maxWidth: 1024,
  });
  const [isTabletOrMobileMenuShow, setIsTabletOrMobileMenuShow] =
    useState(false);
  return (
    <div className={Css.HomePage}>
      <Navbar>
        {isTabletOrMobile ? (
          <div className={Css.NavbarTM}>
            <div className={Css.NavbarTop}>
              <NavLogo flex={2} />
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
            <NavLogo flex={2} />
            <NavList />
            <NavAuth />
          </>
        )}
      </Navbar>
      <div className={Css.Content}>
        <div className={Css.HeaderSection}>
          <h1 className={Css.Title}>Make Life Easier for the Family:</h1>
          <h3 className={Css.SubTitle}>
            Find Babysitters Online for All Occasions
          </h3>
          <a
            href="/nannies"
            className={Css.FindNannyButton}
            title="Get Started"
          >
            Get Started <GoArrowUpRight size={24} />
          </a>
        </div>
        <div className={Css.InfoSection}>
          <div className={Css.Block}>
            <div className={Css.IconPlaceholder}>
              <FaCheck size={20} />
            </div>
            <div className={Css.TextContent}>
              <span className={Css.BlockSubtitle}>Experienced nannies</span>
              <span className={Css.BlockTitle}>15,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
