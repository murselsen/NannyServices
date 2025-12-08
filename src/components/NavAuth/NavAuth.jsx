import Css from "./NavAuth.module.css";

// Component for selecting theme (light/dark)
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

// Modules
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const NavAuth = ({ flex }) => {
  const isTabletOrMobile = useMediaQuery({
    maxWidth: 1024,
  });
  const [isModelContentType, setIsModelContentType] = useState(false); // 'login' or 'registration'

  const handleOpenModal = (type) => {
    setIsModelContentType(type);
  };
  return (
    <>
      <div className={Css.AuthButtons} style={{ flex: flex }}>
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
      </div>
      {isModelContentType === "registration" && (
        <Modal closeModal={() => setIsModelContentType(false)}>
          <Registration />
        </Modal>
      )}
      {isModelContentType === "login" && (
        <Modal closeModal={() => setIsModelContentType(false)}>
          <Login />
        </Modal>
      )}
    </>
  );
};

export default NavAuth;
