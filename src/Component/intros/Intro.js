import React from 'react'
import './Intro.css'
import Github from '../../img/linkedin.png'
import Insta from '../../img/leetcode (1).png'
import Hacker from '../../img/hackerrank.png'

import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glassesioji from '../../img/glassesimoji.png'
import Floating from './Floating'
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export default function Intro() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = { duration: 2, type: 'spring' }
  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: document.documentElement.scrollHeight - window.innerHeight + 500,
      behavior: 'smooth' // Optional: Smooth scrolling animation
    });
  };

  return (
    <div className='intro' id='intro'>
      <div className="i-left">
        <div className="i-name">
          <span style={{
            background: darkMode ? 'black' : "",
            color: darkMode ? "white" : ""
          }} >Hy! I Am</span>
          <span>Abdulvahab shaikh</span>
          <span>As a seasoned Java developer with a strong foundation in Data Structures and
            Algorithms (DSA), I bring a wealth of expertise to the table in crafting
            efficient software solutions. With a keen eye for optimization and performance,
            I thrive in architecting scalable systems that stand the test of time.
          </span>
        </div>
        <Link to="contact" spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className='i-icons'>
          <a href="https://www.linkedin.com/in/vahab-shaikh-5618542a1/" target='_main'><img src={Github} alt="" /></a>
          <a href="https://www.hackerrank.com/profile/svahab33" target='_main'>
            <img src={Insta} alt="" />
          </a>
          <a href="https://leetcode.com/svahab33/" target='_main'>
            <img src={Hacker} alt="" /></a>

        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />

        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-25%' }}
          transition={transition}
          src={Glassesioji}
          alt="" />

        <motion.div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          style={{ top: '-4%', left: '68%' }}
          className='floating-div'
        >
          <Floating image={Crown} txt1='Full' txt2='Stack Devloper' />
        </motion.div >

        <motion.div
          className='floating-div'
          initial={{ top: '18rem', left: '9rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          style={{ top: '18rem', left: '2rem' }}>
          <Floating image={Thumbup} txt1='DSA' txt2='' className="floating" />
        </motion.div>

        <div className='Blur' style={{ background: "rgb(238 210 255 )" }}></div>
        <div className='Blur' style={{
          background: '#C1F5FF',
          top: '17rem',
          width: '21rem',
          height: '11rem',
          left: '-9rem'
        }}></div>
      </div>
    </div>
  )
}
