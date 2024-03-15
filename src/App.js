import React from 'react';
import './App.css'; // Import CSS for styling
import Navbar from './Component/Navabar/Navbar';
import Intro from './Component/intros/Intro'
import Services from './Component/Services/Services';
import Works from './Component/Works/Works';
import Protofolio from './Component/Protfolios/Protofolio'
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer,';
import { useContext } from "react";
import { themeContext } from "./Context";
import { Helmet } from 'react-helmet';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (  
<div className='App'  style={{
      background: darkMode ? 'black' : "",
      color: darkMode ? "white" : ""
    }}
    >
      <Helmet>
  <link rel="stylesheet" href="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" />
        <title>Abdulvahab's Portfolio</title>
        <link rel="canonical" href="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg" />
      </Helmet>
    <Navbar/>
    <Intro/>
    <Services/>
    {/* <Experience/>   */}
    <Works/>
    <Protofolio/>
     <Contact/>
    <Footer/> 
    </div>
  );
}

export default App;
