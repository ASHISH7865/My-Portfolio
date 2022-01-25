import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

function Line(props) {
  const light = useSelector((state) => state.theme.light);
  return (
    <div
      className="line"
      style={{ background: `${light ? "black" : "white"}` }}
    />
  );
}

export default Line;
