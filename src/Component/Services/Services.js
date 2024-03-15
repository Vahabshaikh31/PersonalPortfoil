import React from 'react'
import './Services.css'
import HearEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from 'framer-motion'

export default function () {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 1, type: 'spring' }

    return (
        <div className="services" id='services'>
            {/* left side */}
            <div className="awesome">
                <span style={{
                    background: darkMode ? 'black' : "",
                    color: darkMode ? "white" : ""
                }}
                >
                    My Awsome
                </span>
                <span>Services </span>
                <span >
                    Welcome to Abdulvahab's corner of the digital realm,
                    where innovation <br />meets excellence. With a mastery of programming languages such as <br />
                    HTML, CSS, JavaScript, Java,DSA and more, <br />I possess the skills to
                    transform your vision into reality.
                    <br />
                </span>
                <a href="Abdulvahab shaikh.pdf" className="resumeLink" download={"Abdulvahab shaikh.pdf"}>
                    <button className='button s-button' >
                        Download CV</button>
                </a>
                <div className='blur s-blur' style={{ background: "#AVF1FF94" }}></div>
            </div>

            {/* right */}
            <div className="cards">
                <motion.div
                    initial={{ left: '10rem' }}
                    whileInView={{ left: '16rem' }}
                    transition={transition}
                    style={{ left: '12rem' }}>
                    <Card image={HearEmoji}
                        heading={' Programming L.'}
                        txt={" Core Java, Java 8 DSA, C/C++, Python"}
                    />
                </motion.div>
                {/* <div

                    style={{ top: '12rem', left: '-4rem' }}>
                    <Card image={Glasses}
                        
                    />
                </div> */}

                <motion.div
                    initial={{ left: '19rem' }}
                    whileInView={{ left: '12rem' }}
                    transition={transition}

                    style={{ left: '12rem', top: '19rem' }}>

                    <Card image={Humble}
                        heading={'Web Development'}
                        txt={" HTML, CSS, React, JavaScript ,AI Tools"}
                    />
                </motion.div>
                <div className="blur s-blur-2" style={{ backgroundColor: "black" }}></div>

            </div>
        </div>
    )
}
