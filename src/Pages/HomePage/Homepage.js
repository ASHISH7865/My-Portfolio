import React from "react";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Navbar from "../../Components/Navbar/Navbar";

function Homepage(props) {
  const theme = localStorage.getItem("theme");
  return (
    <div
      className={`main-container ${
        theme === "light" ? "lightTheme" : " darkTheme"
      } `}
    >
      <Portfolio />
      <div style={{ margin: "30px 0" }}> </div>
      <Navbar />
    </div>
  );
}

export default Homepage;
