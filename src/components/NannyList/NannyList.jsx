// Modules
import { useSelector } from "react-redux";

// Css
import Css from "./NannyList.module.css";

// Commponents
import Filters from "../Filters/Filters";
import NannyItem from "../NannyItem/NannyItem";
import { useState } from "react";
import Modal from "../Modal/Modal";

const NannyList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMoreView, setIsMoreView] = useState(false);
  const [isAppointmentView, setIsAppointmentView] = useState(false);
  const { items, isLoading } = useSelector((state) => state.nannies);

  return (
    <div className={Css.Container}>
      <Filters />

      {isLoading ? (
        <p>Loading nannies...</p>
      ) : (
        <ul className={Css.List}>
          {items.map((nanny, index) => (
            <li key={index}>
              <NannyItem
                index={index}
                isMoreView={isMoreView}
                toggleIsMoreView={setIsMoreView}
                toggleIsAppointmentView={setIsAppointmentView}
                data={nanny}
              />
              <Modal
                show={isAppointmentView}
                toggleModal={setIsAppointmentView}
              >
                {nanny.name}
              </Modal>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NannyList;
