// Modules
import { useSelector } from "react-redux";
// Css
import Css from "./NannyList.module.css";

// Commponents
import { useState } from "react";
import Modal from "../Modal/Modal";
import NannyItem from "../NannyItem/NannyItem";
import Appointment from "../Appointment/Appointment";

const NannyList = () => {
  const [selectedNanny, setSelectedNanny] = useState(null);
  const { items, isLoading } = useSelector((state) => state.nannies);

  const handleOpenModal = (nanny) => {
    setSelectedNanny(nanny);
  };
  const handleCloseModal = () => {
    setSelectedNanny(null);
  };
  const renderNannies = () => {
    return items.length > 0 ? (
      items.map((nanny, index) => {
        return (
          <NannyItem
            key={nanny.itemId}
            index={index}
            data={nanny}
            onOpenAppointment={() => handleOpenModal(nanny)}
          />
        );
      })
    ) : (
      <div>No nannies available</div>
    );
  };

  return (
    <div className={Css.Container}>
      <ul className={Css.List}>
        {isLoading ? <div>Loading...</div> : renderNannies()}
      </ul>
      {selectedNanny && (
        <Modal closeModal={handleCloseModal}>
          <Appointment data={selectedNanny} />
        </Modal>
      )}
    </div>
  );
};

export default NannyList;
