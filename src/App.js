import "./App.css";
import { Routes, Route } from "react-router-dom";

import "./assets/Styles/common.scss";
import WelcomePage from "./Pages/Welcome Page/WelcomePage";
import Homepage from "./Pages/HomePage/Homepage";
import Skills from "./Components/skills/Skills";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/dashboard" element={<Homepage />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
}

export default App;
