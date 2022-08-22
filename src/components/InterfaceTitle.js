import React from "react";
import Typed from "typed.js";
import { useRef, useEffect, } from "react";
import { useState } from "react";
import { photo1 } from "../assets";
import '../styles/Landing.css';
import {useTranslation} from "react-i18next"

const InterfaceTitle = () => {


const [t] = useTranslation('global'); 



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
    });
  };

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Eduardo", "Web Developer"], // Strings to display
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


  const closeNav = () => {
    document.getElementById("menu").classList.toggle("true");
    document.getElementById("menu-scroll").classList.toggle("scroll-menu-show");
  }

  return (
    <div>  
    <section id="scroll" className="landing-interface">
      <div id="menu" className='menu'>
        <ul id="menu-scroll" className="scroll-menu">
          <li>
            <a onClick={closeNav} href="#skills">{t("nav.link1")}</a>
          </li>
          <li>
            <a onClick={closeNav} href="#proyects">{t("nav.link2")}</a>
          </li>
          <li>
            <a onClick={closeNav} href="#contact">{t("nav.link3")}</a>
          </li>
        </ul>
      </div>
        <div className="landing-description">
          <h1>
            {t('interface.title')} <span ref={el}></span>
          </h1>
          <p>
            {t('interface.description')}
          </p>
          <div className="social-media-container">
            <a
              href="https://www.linkedin.com/in/eduardo-alejandro-botello-peña-a37557234"
              rel=" noreferrer noopener"
              target="_blank"
              className="i-container"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/EduardoAlejandro10"
              className="i-container"
            >
              {" "}
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/eduardo-alejandro-botello-peña-a37557234"
              className="i-container"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/eduardo-alejandro-botello-peña-a37557234"
              className="i-container"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/eduardo-alejandro-botello-peña-a37557234"
              className="i-container"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="landing-img-container">
          <img src={photo1} alt="landing" className="landing-img" />
        </div>
      </section>

      <a href="#scroll">
        <i
          className={`${
            value
              ? "fa-solid fa-angle-up up-button"
              : "fa-solid fa-angle-up up-button-hide"
          }`}
        ></i>
      </a>
    </div>
  );
};

export default InterfaceTitle;
