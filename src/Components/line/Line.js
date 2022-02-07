import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

function Line(props) {
  const theme = localStorage.getItem('theme')
  return (
    <div
      className="line"
      style={{ background: `${theme === 'light' ? "black" : "white"}` }}
    />
  );
}

export default Line;
