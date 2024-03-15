import React, { useContext } from "react";
import "./Works.css";
import Reacts from "../../img/reactjs-ar21.svg";
import Python from "../../img/python-ar21.svg";
import Java from "../../img/java-vertical.svg";
import Javascript from "../../img/javascript-ar21.svg";
import taiwan from "../../img/tailwindcss-ar21.svg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Skills
          </span>
          <span>languages </span>
          <spane>
            As a seasoned Java developer with a <br /> strong foundation in Data Structures and
            Algorithms (DSA), <br /> I bring a wealth of <br /> expertise to the table in crafting
            efficient software solutions. With a keen eye <br /> for optimization and performance,
            I thrive  <br /> in architecting scalable systems that stand the test of time.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 95 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <motion.div
            initial={{ rotate: 95 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-secCircle">
            <img src={Reacts} alt="" />
          </motion.div>
          <motion.div
            initial={{ rotate: 95 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}

            className="w-secCircle">
            <img src={Python} alt="" />
          </motion.div>
          <motion.div
            initial={{ rotate: 95 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-secCircle">
            <img src={Java} alt="" />
          </motion.div>{" "}
          <motion.div
            initial={{ rotate: 95 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-secCircle">
            <img className="" src={Javascript} alt="" />
          </motion.div>
          <motion.div
            initial={{ rotate: 95 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-secCircle">
            <img className="imgs" src={taiwan} alt="" />
          </motion.div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;