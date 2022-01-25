import React from "react";
import "./style.scss";

function Navbar(props) {
  return (
    <div className="nav-bar">
      <span>Skills</span>
      <span>Projects</span>
      <span>Experience</span>
      <span>About</span>
      <span>Contact</span>
    </div>
  );
}

export default Navbar;
