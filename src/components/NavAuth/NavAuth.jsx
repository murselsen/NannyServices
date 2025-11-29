import Css from "./NavAuth.module.css";

// Component for selecting theme (light/dark)
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";

// Modules
import { useState } from "react";

const NavAuth = ({ flex = 1 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModelContentType, setIsModelContentType] = useState(false); // 'login' or 'registration'

  const handleOpenModal = (type) => {
    setIsModalOpen(true);
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
          className={Css.SignupButton}
          onClick={() => handleOpenModal("registration")}
        >
          Registration
        </button>
        <ThemeSelector />
      </div>

      <Modal show={isModalOpen} toggleModal={setIsModalOpen}>
        {/* Login form content goes here */}
        {isModelContentType === "registration" && <h2>Registration</h2>}
        {isModelContentType === "login" && <Login />}
      </Modal>
    </>
  );
};

export default NavAuth;
