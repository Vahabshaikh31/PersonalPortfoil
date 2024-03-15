import React from 'react'
import './Footer.css'

const Footer = () => {

  const handleClick = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth' // Optional: Smooth scrolling animation
    });
  };
  return (
   <div className="footer">
    <div className="f-content">
        <span><h6>svahab33@gmail.com</h6></span>
        <p>MADE WITH LOVE BY ME,MYSELF AND I❤️</p>
    </div>
   </div>
  )
}

export default Footer