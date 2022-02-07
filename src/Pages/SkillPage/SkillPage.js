import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Skills from "../../Components/skills/Skills";
import { skills } from "../../constant";
import "./style.scss";

function SKillPage() {
  return (
    <div className="Blank">
      <div style={{ margin: "0 auto" }}>
        <Navbar />
      </div>
      {skills.map((el) => (
        <div class="content">
          <Skills skill={el} />
        </div>
      ))}
    </div>
  );
}

export default SKillPage;
