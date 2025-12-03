import { Suspense, lazy, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// Pages
const Home = lazy(() => import("./pages/Home/Home"));
const Nannies = lazy(() => import("./pages/Nannies/Nannies"));

const App = () => {
  const themeMode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nannies" element={<Nannies />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Suspense>
  );
};

export default App;
