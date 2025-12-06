// Modules
import { useSelector } from "react-redux";

// Css
import Css from "./NannyList.module.css";

// Commponents
import Filters from "../Filters/Filters";
import NannyItem from "../NannyItem/NannyItem";

const NannyList = () => {
  const { items, isLoading } = useSelector((state) => state.nannies);
  console.log("Nannies data in NannyList:", items);
  return (
    <div className={Css.Container}>
      <Filters />

      {isLoading ? (
        <p>Loading nannies...</p>
      ) : (
        <ul className={Css.List}>
          {items.map((nanny, index) => (
            <li key={index} className={Css.Item}>
              <NannyItem data={nanny} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NannyList;
