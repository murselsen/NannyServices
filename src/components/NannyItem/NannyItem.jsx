// Css
import Css from "./NannyItem.module.css";

// Icons
import { FaLocationDot, FaStar } from "react-icons/fa6";

const NannyItem = ({ data }) => {
  console.log("Nanny data in NannyItem:", data);
  return (
    <div className={Css.Card}>
      <div className={Css.PhotoColumn}>
        <div className={Css.PhotoBorder}>
          <img
            src={data.avatar_url}
            alt={`${data.name}'s photo`}
            title={`${data.name}'s photo`}
            className={Css.Photo}
          />
        </div>
      </div>
      <div className={Css.ContentColumn}>
        <div className={Css.Content}>
          <div className={Css.Header}>
            <div className={Css.ProfileNameArea}>
              <span className={Css.Type}>Nanny</span>
              <h2 className={Css.Name}>{data.name}</h2>
            </div>
            <div className={Css.RatingArea}>
              <div className={Css.Info}>
                <FaLocationDot className={Css.Icon} />
                <span className={Css.Text}>{data.location}</span>
              </div>
              <div className={Css.Info}>
                <FaStar className={Css.Icon} />
                <span className={Css.Text}>Rating: {data.rating}</span>
              </div>
              <div className={Css.Info}>
                <span className={Css.Text}>
                  Price / 1 hour:
                  <span className={Css.Value}> {data.price_per_hour}</span>
                </span>
              </div>
            </div>
          </div>
          <div className={Css.Body}>
            <ul className={Css.InfoList}>
              <li className={Css.InfoItem}></li>
              <li className={Css.InfoItem}>
                <strong className={Css.Key}>Age:</strong>
                {new Date().getFullYear() - new Date(data.birthday).getFullYear()}
              </li>
              <li className={Css.InfoItem}>
                <strong className={Css.Key}>Experience:</strong>{" "}
                {data.experience}
              </li>
            </ul>
          </div>
          <div className={Css.Footer}>
            <button className={Css.Button}>View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NannyItem;
