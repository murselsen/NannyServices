import { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/Home"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default App;
