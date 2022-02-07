import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Navbar(props) {
  return (
    <div className="nav-bar">
      <Link to="/skills">
        <span>Skills</span>
      </Link>
      <Link to="/projects">
        <span>Projects</span>
      </Link>
      <span>Experience</span>
      <span>About</span>
      <span>Contact</span>
    </div>
  );
}

export default Navbar;
