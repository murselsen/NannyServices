// React
import React, { useState } from "react";
// Css
import Css from "./NannyItem.module.css";

// Icons
import { FaLocationDot, FaStar } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";

//Redux dispatch
import { useDispatch } from "react-redux";
import { toggleFavoriteNanny } from "../../redux/nannies/thunks.js";

const NannyItem = ({ onOpenAppointment, data, index }) => {
  const dispatch = useDispatch();

  const [isMoreView, setIsMoreView] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = (value) => {
    setIsFavorite(value);
    dispatch(toggleFavoriteNanny({ nannyIndex: index, isFavorite: value }));
  };

  return (
    <li>
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
              <div className={Css.InfoArea}>
                <div className={Css.Info}>
                  <IoLocationOutline className={Css.Icon} />
                  <span className={Css.Text}>{data.location}</span>
                </div>

                <div className={Css.Info}>
                  <FaStar className={Css.Icon} color="#FFC531" />
                  <span className={Css.Text}>Rating: {data.rating}</span>
                </div>
                <div className={Css.Info}>
                  <span className={Css.Text}>
                    Price / 1 hour:
                    <span className={Css.Value}> {data.price_per_hour}$</span>
                  </span>
                </div>
                <div className={Css.Info}>
                  {isFavorite ? (
                    <FaHeart
                      color="red"
                      size={22}
                      onClick={() => handleFavorite(false)}
                    />
                  ) : (
                    <FaRegHeart
                      size={22}
                      onClick={() => handleFavorite(true)}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className={Css.Body}>
              <ul className={Css.InfoList}>
                <li className={Css.InfoItem}>
                  <strong className={Css.Key}>Age:</strong>
                  {new Date().getFullYear() -
                    new Date(data.birthday).getFullYear()}
                </li>
                <li className={Css.InfoItem}>
                  <strong className={Css.Key}>Experience:</strong>
                  {data.experience}
                </li>
                <li className={Css.InfoItem}>
                  <strong className={Css.Key}>Kids Age:</strong>
                  {data.kids_age}
                </li>
                <li className={Css.InfoItem}>
                  <strong className={Css.Key}>Characters:</strong>
                  {data.characters.map((char, index) => (
                    <b key={index} className={Css.ArrItem}>
                      {char}
                      {", "}
                    </b>
                  ))}
                </li>
                <li className={Css.InfoItem}>
                  <strong className={Css.Key}>Education:</strong>
                  {data.education}
                </li>
              </ul>
              <p className={Css.Message}>{data.about}</p>
              {!isMoreView && (
                <button
                  className={Css.Button}
                  onClick={() => setIsMoreView(true)}
                >
                  Read More
                </button>
              )}
            </div>
            {isMoreView && (
              <div className={Css.Footer}>
                <ul className={Css.Reviews}>
                  {data.reviews.map((review, index) => (
                    <li key={index} className={Css.ReviewItem}>
                      <div className={Css.ReviewContainer}>
                        <div className={Css.Header}>
                          <div className={Css.ProfileLogo}>
                            {review.reviewer.charAt(0).toUpperCase()}
                          </div>
                          <div className={Css.ProfileBody}>
                            <span className={Css.Name}>{review.reviewer}</span>
                            <span className={Css.Rating}>
                              <FaStar color="gold" />
                              {parseFloat(review.rating).toFixed(1)}
                            </span>
                          </div>
                        </div>
                        <div className={Css.Body}>{review.comment}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <button
                  className={Css.Button}
                  onClick={() => {
                    onOpenAppointment();
                  }}
                >
                  Make an appointment
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default NannyItem;
