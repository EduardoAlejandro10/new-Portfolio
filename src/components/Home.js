import "../styles/Home.css";
import InterfaceTitle from "./InterfaceTitle";
import { Contact } from "./Contact";
import { About } from "./About";
import Skills from "./Skills";
import MyProjects from "./MyProjects";
import Freelance from "./Freelance";
import NavBar from "./NavBar";

const Home = () => {


  return (
    <div className="main-landing">
      <NavBar />
      <InterfaceTitle />
      <About />
      <Skills />
      <Freelance  />
      <MyProjects />
      <Contact />
    </div>
  );
};

export default Home;
