import Css from "./Modal.module.css";
import { FaTimes } from "react-icons/fa";

const Modal = ({ show, toggleModal, children }) => {
  return (
    <div
      className={Css.ModalOverlay}
      style={{ display: show ? "flex" : "none" }}
      onClick={() => toggleModal(false)}
    >
      <div className={Css.ModalContainer}>
        <button className={Css.ModalExit} onClick={() => toggleModal(false)}>
          <FaTimes size={16} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
