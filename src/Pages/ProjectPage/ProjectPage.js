import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Projects from "../../Components/Projects/Projects";
import "./Style.scss";
import { projects } from "../../constant";

function ProjectPage() {
  return (
    <div className="project-container">
      <div style={{ margin: "0 auto" }}>
        <Navbar />
      </div>
      <div className="project-grid">
        {projects.map((item) => (
          <Projects key={item.id} project={item} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
