import Css from "./Modal.module.css";
import { FaTimes } from "react-icons/fa";

const Modal = ({ closeModal, children }) => {
  return (
    <div className={Css.ModalOverlay}>
      <div className={Css.ModalContainer}>
        <button className={Css.ModalExit} onClick={() => closeModal(false)}>
          <FaTimes size={16} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
