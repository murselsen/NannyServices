// Modules
import { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Css
import "./App.css";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "./redux/auth/thunks.js";

// Pages
const Home = lazy(() => import("./pages/Home/Home"));
const Nannies = lazy(() => import("./pages/Nannies/Nannies"));

const App = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode, dispatch, auth]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nannies" element={<Nannies />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Toaster position="top-right" reverseOrder={true} />
    </Suspense>
  );
};

export default App;
