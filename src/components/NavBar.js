import React from "react";
import { uk, spain } from "../assets";
import {useTranslation}from 'react-i18next'
import "../styles/NavBar.css";

const NavBar = ({ handleChangeTheme }) => {

  const [t, i18n] = useTranslation('global');




  const toggleClass = () => {
    document.getElementById("menu").classList.toggle("true");
    document.getElementById("menu-scroll").classList.toggle("scroll-menu-show");
  };

  return (
   
      <nav className="my-navbar">
        <div className="icons-theme-container">
          <div className="icons">
            <i className="fa-solid fa-sun"></i>
            <i className="fa-solid fa-moon"></i>
          </div>
          <div>
            <div id="theme-container" className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitches"
              />
              <label
                onClick={handleChangeTheme}
                className="custom-control-label"
                htmlFor="customSwitches"
              ></label>
            </div>
          </div>
        </div>
        <div className="flags-toggle">
          <img className="uk" src={uk} alt="uk" onClick={() => i18n.changeLanguage("eng")} />
          <img className="spain" src={spain} alt="spain" onClick={() => i18n.changeLanguage("spa")} />
        </div>
        <div className="nav-list">
          <ul className="my-nav-ul">
            <li>
              <a href="#skills">{t("nav.link1")}</a>
            </li>
            <li>
              <a href="#proyects">{t("nav.link2")}</a>
            </li>
            <li>
              <a href="#contact">{t("nav.link3")}</a>
            </li>
          </ul>
        </div>
        <div className="nav-button">
          <i onClick={toggleClass} className="fa-solid fa-bars"></i>
        </div>
      </nav>
    
  );
};

export default NavBar;
