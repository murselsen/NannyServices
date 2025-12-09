import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Redux
import { Provider } from "react-redux";
// Redux Persist
import { PersistGate } from "redux-persist/integration/react";
// Redux Persist - Store
import store, { persistor } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
