import React from "react";
import { useSelector } from "react-redux";
import Portfolio from "../../Components/Porfolio/Portfolio";
import Navbar from "../../Components/Navbar/Navbar";

function Homepage(props) {
  const light = useSelector((state) => state.theme.light);
  return (
    <div className={`main-container ${light ? "lightTheme" : " darkTheme"} `}>
      <Portfolio />
      <Navbar />
    </div>
  );
}

export default Homepage;
