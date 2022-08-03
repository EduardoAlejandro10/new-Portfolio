
import React from 'react';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import landing from "../assets/landing.png";

const InterfaceTitle = () => {
  
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

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  
  

  
  return (
    <div>
      
<section className="landing-interface">
 
<div className="landing-description"> 
<h1>Soy <span ref={el}></span></h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
    error veniam voluptates. Debitis adipisci iure doloremque unde
    incidunt velit, fugiat totam similique autem, voluptates architecto
  </p>
  <div className="social-media-container">
    <a rel="noopener noreferrer" target='_blank' className="i-container">
      <i className="fa-brands fa-linkedin-in"></i>
    </a>
    <a rel="noopener noreferrer" target='_blank' className="i-container">
      {" "}
      <i className="fa-brands fa-github"></i>
    </a>
    <a rel="noopener noreferrer" target='_blank' className="i-container">
      <i className="fa-brands fa-twitter"></i>
    </a>
    <a rel="noopener noreferrer" target='_blank' className="i-container">
      <i className="fa-brands fa-facebook-f"></i>
    </a>
    <a rel="noopener noreferrer" target='_blank' className="i-container">
      <i className="fa-brands fa-instagram"></i>
    </a>
  </div>
</div>
<div className="landing-img-container">
  <img src={landing} alt="landing" className="landing-img" />
</div>
</section>
    </div>
  );
};

export default InterfaceTitle;