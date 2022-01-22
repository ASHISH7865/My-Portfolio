import Portfolio from "./Pages/HomePage/Portfolio";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import "./assets/Styles/common.scss";
import WelcomePage from "./Pages/Welcome Page/WelcomePage";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/portfolio" element={<Portfolio theme={theme} />} />
    </Routes>
  );
}

export default App;
