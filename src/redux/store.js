import { configureStore } from "@reduxjs/toolkit";
import nanniesReducer from "./nannies/slice.js";

const rootReducer = configureStore({
  reducer: {
    nannies: nanniesReducer,
  },
});

export default rootReducer;
