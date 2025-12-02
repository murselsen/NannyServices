import React, { useEffect } from "react";
// Css
import Css from "./Nannies.module.css";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchNannies } from "../../redux/nannies/thunks.js";
const Nannies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNannies());
  }, [dispatch]);

  return <div className={Css.NanniesPage}>Nannies Page</div>;
};

export default Nannies;
