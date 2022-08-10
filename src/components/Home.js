
import InterfaceTitle from "./InterfaceTitle";
import { Contact } from "./Contact";
import { About } from "./About";
import Skills from "./Skills";
import MyProjects from "./MyProjects";
import Freelance from "./Freelance";
import NavBar from "./NavBar";
import { useState } from "react";
import Footer from "./Footer";


const Home = () => {


const [theme, setTheme] = useState(true);

  const handleChangeTheme = () => {
    setTheme(!theme);
  }

  

  return (
    <div className={`main-landing ${theme ? 'light': 'dark' }`}>
      <NavBar handleChangeTheme={handleChangeTheme}  />
      <InterfaceTitle />
      <About />
      <Skills />
      <Freelance  />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
