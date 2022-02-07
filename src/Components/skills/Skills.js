import React from "react";
import "./style.scss";
import Border from "../BorderComponent/Border";

function Skills({ skill }) {
  return (
    <div className="skill-wrapper">
      <div>{skill.name}</div>
      <div className="skill">
      {
        skill.skills.map(el=>(
         
          <Border> {el} </Border>
         
        ))
      }
      </div>
    </div>
  );
}

export default Skills;
