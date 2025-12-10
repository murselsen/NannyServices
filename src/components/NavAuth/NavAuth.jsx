import Css from "./NavAuth.module.css";

// Component for selecting theme (light/dark)
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

// Icons
import { FaUser } from "react-icons/fa";

// Modules
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

// Redux Modules
import { useSelector, useDispatch } from "react-redux";
import { resetUser } from "../../redux/auth/slice.js";
// Redux - Auth Slice

const NavAuth = ({ flex }) => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const isTabletOrMobile = useMediaQuery({
    maxWidth: 1024,
  });
  const [isModelContentType, setIsModelContentType] = useState(false); // 'login' or 'registration'
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(resetUser());
  };

  const handleOpenModal = (type) => {
    setIsModelContentType(type);
  };

  return (
    <div className={Css.AuthButtons} style={{ flex: flex }}>
      {isLoggedIn && user ? (
        <>
          <div className={Css.Profile}>
            <div className={Css.Avatar}>
              <FaUser />
            </div>
            <span className={Css.Name}>
              {/* {user &&
                user.providerData.length > 0 &&
                user.providerData[0].email.split("@")[0]} */}
              {user && user.email ? user.email.split("@")[0] : "User"}
            </span>
          </div>
          <button className={Css.SignUpButton} onClick={() => handleLogout()}>
            Log out
          </button>
        </>
      ) : (
        <>
          <button
            className={Css.LoginButton}
            onClick={() => handleOpenModal("login")}
          >
            Login
          </button>
          <button
            className={Css.SignUpButton}
            onClick={() => handleOpenModal("registration")}
          >
            Registration
          </button>
          {!isTabletOrMobile && <ThemeSelector />}
          {isModelContentType === "registration" && (
            <Modal closeModal={() => setIsModelContentType(false)}>
              <Registration closeModal={() => setIsModelContentType(false)} />
            </Modal>
          )}
          {isModelContentType === "login" && (
            <Modal closeModal={() => setIsModelContentType(false)}>
              <Login closeModal={() => setIsModelContentType(false)} />
            </Modal>
          )}
        </>
      )}
    </div>
  );
};

export default NavAuth;
