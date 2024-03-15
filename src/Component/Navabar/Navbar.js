import React from "react";
import Toggle from '../../Darkmode/Toggle'
import "./Navbar.css";
import { Link } from "react-scroll";

const navbar = () => {
  return (
    <div className="n-wrapper" >
      {/* left */}
      <div className="n-left">
        <div className="n-name">WelCome!</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">    
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="intro" spy={true}  className="links ">
              <a href="" className="hoverProp">Home</a>   
              </Link>
            </li>
            <li>
              <Link to="services" spy={true}  className="links ">
              <a href="" className="hoverProp">Serivces </a>  
              </Link>
            </li>
            <li>
              <Link to="works" spy={true}  className="links ">
              <a href="" className="hoverProp">Skills </a>  
              </Link>
            </li>
            <li className="ul"> 
              <Link to="portfolio" spy={true}  className="links ">
               <a href="" className="hoverProp">Projects</a> 
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact"  spy={true} smooth={false} className="links">
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
