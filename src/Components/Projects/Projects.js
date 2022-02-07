import React from "react";
import "./Style.scss";
import { projects } from "../../constant";
import { useState } from "react";

function Projects({ project }) {
  const [fold, setFold] = useState(false);
  const handleExtraContent = () => {
    setFold(!fold);
  };

  return (
    <div className="Wrapper">
      <div className="image" onClick={handleExtraContent}>
        <img className="image__img" src={project.image_link} alt="Bricks" />
        <div className="image__overlay image__overlay--primary">
          <div className="image__title">{project.name}</div>
        </div>
      </div>
      {fold ? <div className="extra-content">Hi I am extra Content</div> : null}
    </div>
  );
}

export default Projects;
