import React from "react";
import "./Loader.scss";

function Loader(props) {
  return (
    <div className="container">
      <div className="circle circle-1" />
      <div className="circle circle-2" />
      <div className="circle circle-3" />
      <div className="circle circle-4" />
      <div className="circle circle-5" />
    </div>
  );
}

export default Loader;
