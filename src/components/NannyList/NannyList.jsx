// Modules
import { useSelector } from "react-redux";
// Css
import Css from "./NannyList.module.css";

// Commponents
import { useState } from "react";
import Modal from "../Modal/Modal";
import NannyItem from "../NannyItem/NannyItem";
import Appointment from "../Appointment/Appointment";

const NannyList = ({ data }) => {
  const [perPage, setPerPage] = useState(4);
  const [selectedNanny, setSelectedNanny] = useState(null);
  const { isLoading } = useSelector((state) => state.nannies);

  const handleOpenModal = (nanny) => {
    setSelectedNanny(nanny);
  };
  const handleCloseModal = () => {
    setSelectedNanny(null);
  };
  const renderNannies = () => {
    return data && data.length > 0 ? (
      data.slice(0, perPage).map((nanny, index) => {
        return (
          <NannyItem
            key={index}
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
      {data && data.length > 0 ? (
        perPage >= data.length ? null : (
          <button
            style={{
              width: "max-content",
              margin: "auto",
              color: "var(--primary-color)",
              background: "white",
              border: "1px solid var(--secondary-color)",
            }}
            onClick={() => setPerPage(perPage + 3)}
          >
            Load More
          </button>
        )
      ) : null}

      {selectedNanny && (
        <Modal closeModal={handleCloseModal}>
          <Appointment data={selectedNanny} />
        </Modal>
      )}
    </div>
  );
};

export default NannyList;
