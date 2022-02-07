import React ,{ useState }  from "react";
import "./style.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function WelcomePage(props) {
 

  const lightTheme = () => {
   localStorage.setItem('theme','light')
  };
  const darkTheme = () => {
    localStorage.setItem('theme','dark')
  };
  return (
    <>
      <div className="white">
        <motion.span
          className="span"
          initial={{ opacity: 0 }}
          animate={{ opacity: [1, 0] }}
          transition={{ delay: 1, duration: 1 }}
        >
          Hi
        </motion.span>
        <motion.span
          className="span"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 2, duration: 2 }}
        >
          Welcome to my portfolio
        </motion.span>
        <motion.span
          className="span"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 4 }}
        >
          Choose the theme to continue
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 4 }}
          className="button"
        >
          <div className="light-button">
            <Link to="/dashboard">
              <button onClick={lightTheme}>Light</button>
            </Link>
          </div>
          <div className="dark-button">
            <Link to="/dashboard">
              <button onClick={darkTheme}>Dark</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default WelcomePage;
