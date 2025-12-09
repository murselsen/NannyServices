import { configureStore } from "@reduxjs/toolkit";

// Redux Slices
import nanniesReducer from "./nannies/slice.js";
import authReducer from "./auth/slice.js";
import themeReducer from "./themeSlice.js";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistReducer = persistReducer(
  {
    key: "auth",
    storage: storage,
    whitelist: ["isLoggedIn", "user"],
  },
  authReducer
);

const themePersistReducer = persistReducer(
  {
    key: "theme",
    storage: storage,
    whitelist: ["mode"],
  },
  themeReducer
);

const store = configureStore({
  reducer: {
    auth: authPersistReducer,
    nannies: nanniesReducer,
    theme: themePersistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true, serializableCheck: false }),
});

export const persistor = persistStore(store);

export default store;
