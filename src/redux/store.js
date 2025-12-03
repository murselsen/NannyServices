import { configureStore } from "@reduxjs/toolkit";
import nanniesReducer from "./nannies/slice.js";
import authReducer from "./auth/slice.js";
const rootReducer = configureStore({
  reducer: {
    auth: authReducer,
    nannies: nanniesReducer,
  },
});

export default rootReducer;
