import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'
import { useContext } from "react";
import { themeContext } from "../../Context";
import Email from '@iconscout/react-unicons/icons/uil-google-hangouts'

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {

    e.preventDefault();
    emailjs.sendForm('service_y5ebqab', 'template_yri4gdu', form.current, {
      publicKey: 'InFStyZKSTeWjbkfB',
    })
      .then(
        () => {
          Swal.fire({
            title: "Thank you!",
            width: 800,
            padding: "3em",
            color: "#89CFF0",
            background: "#fff url(src\Component\Contact\annie-spratt-cnEzFsV4Y-k-unsplash.jpg)",
            backdrop: `
              rgba(0,0,123,0.4)
              url(src\Component\Contact\Vanilla-1s-280px.gif)
              left top
              no-repeat
            `
          });
          setDone(true);
        },
        (error) => {
          Swal.fire({
            title: "Ohoo, pls fill the information",
            width: 800,
            padding: "3em",
            color: "#89CFF0",
            background: "#fff url(annie-spratt-cnEzFsV4Y-k-unsplash.jpg)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://tenor.com/view/point-poin-new-post-dog-doggo-gif-16707161")
              left top
              no-repeat
            `
          });
        },
      );
  };


  const [inputText, setInputText] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
    setError('');
  };

  const handleSubmit = () => {
    if (inputText.trim() === '') {
      setError('Please enter some text.');
    } else {
      setError('');
    }
  };



  const onclick = () => {
    console.log("hii")
  }

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div>
      <div className="contact-form" id='contact'>
        <div className="w-left">
          <div className="awesome">
            <span
              style={{
                background: darkMode ? 'black' : "",
                color: darkMode ? "white" : ""
              }}
            >Get in touch</span>
            <span>Contact me</span>
            <div className="blur s-blur1"
              style={{ background: "ABF1FF94" }}
            ></div>
          </div>
        </div>
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input action="text" name='user_name' className='user ' value={inputText}
              onChange={handleChange} placeholder='Name' />
            <input action="email" name='user_email' className='user gap' placeholder='Email' value={inputText}
              onChange={handleChange} />
            <textarea name="message" rows="10" cols="30" className='user gap' placeholder='Message'
              onChange={handleChange} />
            <input type="submit" value="Send" className='button' onclick={handleSubmit} />

            {/* <input type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Enter some text"/>
      
      {error && <div style={{ color: 'red' }}>{error}</div>} */}


            <div
              className='blur  c-blur1'
              style={{ backgroundColor: "var(--purple)" }}
            ></div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact
