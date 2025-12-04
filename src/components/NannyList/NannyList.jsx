// Modules
import { useSelector } from "react-redux";

// Css
import Css from "./NannyList.module.css";

// Commponents
import Filters from "../Filters/Filters";

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
          <li className={Css.Item}>dfasdgdf</li>
        </ul>
      )}
    </div>
  );
};

export default NannyList;
