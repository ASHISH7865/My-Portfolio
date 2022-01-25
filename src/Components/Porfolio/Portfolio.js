import React from "react";
import "./portfolio.scss";
import "../../assets/Styles/darkTheme.scss";
import "../../assets/Styles/lightTheme.scss";
import Line from "../line/Line";

function Portfolio(props) {
  return (
    <>
      <div className="upper-container f-25">
        <Line />
        <span style={{ margin: "0 20px" }}>Software</span>
        <Line />
      </div>
      <div className="middle-container">
        <span className="frontend f-25">Frontend</span>
        <span className="Name">Ashish</span>
        <span className="backend f-25">Backend</span>
      </div>
      <div className="bottom-container f-25">
        <Line />
        <span style={{ margin: "0 20px" }}>Developer</span>
        <Line />
      </div>
    </>
  );
}

export default Portfolio;
