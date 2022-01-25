import React from "react";
import "./style.scss";
import skills from "../../constant";
import Border from "../BorderComponent/Border";

function Skills(props) {
  return (
    <div className="skill-wrapper">
      <div>Programming Language</div>
      <div className="skill">
        <Border>Python</Border>
        <Border>Python</Border>
        <Border>Python</Border>
      </div>
    </div>
  );
}

export default Skills;
