import React from "react";
import "./border.scss";

function Border(props) {
  return <span className="border">{props.children}</span>;
}

export default Border;
