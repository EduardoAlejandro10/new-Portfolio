
import React from 'react';
import Typed from "typed.js";
import {  useRef, useEffect } from "react";
import landing from "../assets/landing.png";
import { useState } from 'react';


const InterfaceTitle = () => {

const [value, setValue] = useState(false);
  const goUp = () => {
    window.addEventListener("scroll", () => {
      let currentScroll = document.documentElement.scrollTop;
      if (currentScroll > 1000) {
        setValue(true);
      }
      if (currentScroll < 1000) {
        setValue(false);
      }
    })
  }


  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Eduardo", "Desarrollador Web"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 150,
      backDelay: 150,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });
    goUp();

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  
  
  return (
    <div>
      
<section id='main' className="landing-interface">
 
<div  className="landing-description"> 
<h1>Soy <span ref={el}></span></h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
    error veniam voluptates. Debitis adipisci iure doloremque unde
    incidunt velit, fugiat totam similique autem, voluptates architecto
  </p>
  <div className="social-media-container">
    <a href='https://www.linkedin.com/in/eduardo-alejandro-botello-peña-a37557234' 
    rel=" noreferrer noopener" target='_blank' className="i-container">
      <i className="fa-brands fa-linkedin-in"></i>
    </a>
    <a rel="noopener noreferrer" target='_blank' href='https://github.com/EduardoAlejandro10' className="i-container">
      {" "}
      <i className="fa-brands fa-github"></i>
    </a>
    <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/eduardo-alejandro-botello-peña-a37557234' className="i-container">
      <i className="fa-brands fa-twitter"></i>
    </a>
    <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/eduardo-alejandro-botello-peña-a37557234' className="i-container">
      <i className="fa-brands fa-facebook-f"></i>
    </a>
    <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/eduardo-alejandro-botello-peña-a37557234' className="i-container">
      <i className="fa-brands fa-instagram"></i>
    </a>
  </div>
</div>
<div className="landing-img-container">
  <img src={landing} alt="landing" className="landing-img" />
</div>
</section>

<a href="#main"><i className={`${value ? "fa-solid fa-angle-up up-button" : "fa-solid fa-angle-up up-button-hide" }`}></i></a>
    </div>
  );
};

export default InterfaceTitle;