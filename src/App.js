import "./App.css";
import { Routes, Route } from "react-router-dom";

import "./assets/Styles/common.scss";
import WelcomePage from "./Pages/Welcome Page/WelcomePage";
import Homepage from "./Pages/HomePage/Homepage";
import SkillPage from "./Pages/SkillPage/SkillPage";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/dashboard" element={<Homepage />} />
      <Route path="/skills" element={<SkillPage />} />
      <Route path="/projects" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
