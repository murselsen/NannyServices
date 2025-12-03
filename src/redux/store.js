import { configureStore } from "@reduxjs/toolkit";

// Redux Slices
import nanniesReducer from "./nannies/slice.js";
import authReducer from "./auth/slice.js";
import themeReducer from "./themeSlice.js";

const rootReducer = configureStore({
  reducer: {
    auth: authReducer,
    nannies: nanniesReducer,
    theme: themeReducer,
  },
});

export default rootReducer;
