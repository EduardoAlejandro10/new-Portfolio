import { about, spanishCv, ecommerce, morty, doc, crud } from "../assets";
import "../styles/Home.css";
import InterfaceTitle from "./InterfaceTitle";
import { motion } from "framer-motion";
import { useState } from "react";

const Home = () => {
  const [toggle, setToggle] = useState(0);

  return (
    <div className="main-landing">
      <InterfaceTitle />
      <section id="about" className="about-container">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
          className="about-img-container"
        >
          <img src={about} alt="landing" />
        </motion.div>
        <motion.div
          className="about-description"
          initial={{ x: 100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          <h2>Hola, Soy Eduardo Alejandro </h2>
          <p className="about-main-description">
            Hola!! Soy Eduardo, desarrollador web especializado en React.js.
             soy un apasionado de la tecnologia con una increible capacidad del autoaprendizaje, 
             tengo 22 años y soy de Monterrey, Nuevo Leon la ciudad de las montañas,  me encantaria ser parte de tu
            equipo, si tienes alguna duda o quieres saber más de mi, puedes
            contactarme a través de mis redes sociales o por un mensaje a travez
            del formulario de contacto.
          </p>
          <div className="personal-container">
            <div className="personal-info-container">
              <div className="info-mini-containers">
                <p className="bold">Name</p>
                <p>: Eduardo Alejandro</p>
              </div>
              <div className="info-mini-containers">
                <p className="bold">Age</p>
                <p className="p">: 22</p>
              </div>
              <div className="info-mini-containers">
                <p className="bold tel"> Telefono </p>
                <p className="p-2">: +52 828 173 2200</p>
              </div>
              <div className="info-mini-containers">
                <p className="bold ">Email</p>
                <p className="mail">: ebotellopenacontact@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="download-buttons-container">
            <div>
              <a className="cv-buttons" download rel="noopener noreferrer" href={spanishCv}>
                {" "}
                Descargar Cv
              </a>
            </div>
            <div>
              <a className="cv-buttons" download rel="noopener noreferrer" href={spanishCv}>
                {" "}
                Download Cv
              </a>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="my-services-landing">
        <h2>
          Mis <span>Habilidades</span>
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          ratione vitae asperiores, earum tenetur optio dignissimos reiciendis
          aliquam eum praesentium?
        </p>
        <div className="underline-services"></div>
      </section>
      <section className="services-box-container">
        <motion.div
          className="service-box"
          initial={{ x: -500, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          <i className="fa-brands fa-html5"></i>
          <h3>HTML</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            corrupti, ut atque amet eos quo fugit autem repudiandae ab ad.
          </p>
        </motion.div>
        <motion.div
          className="service-box"
          initial={{ y: -300, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          <i className="fa-brands fa-css3-alt"></i>
          <h3>CSS</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            corrupti, ut atque amet eos quo fugit autem repudiandae ab ad.
          </p>
        </motion.div>
        <motion.div
          className="service-box"
          initial={{ x: 500, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          <i className="fa-brands fa-react"></i>
          <h3>REACT JS</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            corrupti, ut atque amet eos quo fugit autem repudiandae ab ad.
          </p>
        </motion.div>
        <motion.div
          className="service-box"
          initial={{ x: -500, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          <i className="fa-brands fa-square-js"></i>
          <h3>javascript</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            corrupti, ut atque amet eos quo fugit autem repudiandae ab ad.
          </p>
        </motion.div>
        <motion.div
          className="service-box"
          initial={{ y: 300, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          <i className="fa-brands fa-node-js"></i>
          <h3>Node Js</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            corrupti, ut atque amet eos quo fugit autem repudiandae ab ad.
          </p>
        </motion.div>
        <motion.div
          className="service-box"
          initial={{ x: 500, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          <i className="fa-brands fa-bootstrap"></i>
          <h3>BOOTSTRAP</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            corrupti, ut atque amet eos quo fugit autem repudiandae ab ad.
          </p>
        </motion.div>
      </section>
      <section className="freelance-container">
        <motion.div
          className="hire-container"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          <h3 className="h2-freelance">Estoy Disponible Como Freelancer !!</h3>
          <a
          rel="noopener noreferrer"
            target="_blank"
            className="hire-button"
            href="https://wa.me/528281732200"
          >
            Contratame
          </a>
        </motion.div>
      </section>
      <section className="my-services-landing">
        <h2>
          Mis <span>Proyectos</span>
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          ratione vitae asperiores, earum tenetur optio dignissimos reiciendis
          aliquam eum praesentium?
        </p>
        <div className="underline-services"></div>
      </section>
      <section className="my-work">
        <div className="work-buttons-container">
          <button onClick={() => setToggle(0)}>Todos</button>
          <button onClick={() => setToggle(1)}>Ecommerce</button>
          <button onClick={() => setToggle(2)}>Freelance Projects</button>
          <button onClick={() => setToggle(3)}>Rick And Morty Wiki</button>
        </div>
        <div className="projects-img-container">
          {toggle === 0 && (
            <>
              <div className="img-item">
                <img className="ecommerce" src={ecommerce} alt="" />
                <div className="img-overlay">
                  <div className="img-overlay-content">
                    <p>online commerce</p>
                    <h5>
                      <i className="fa-brands fa-html5"></i>{" "}
                      <i className="fa-brands fa-js"></i>{" "}
                      <i className="fa-brands fa-css3"></i>
                    </h5>
                    <a
                    rel="noopener noreferrer"
                      target="_blank"
                      href="https://ecommerce-eduardo.netlify.app/"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="img-item">
                <img className="ecommerce" src={morty} alt="" />
                <div className="img-overlay">
                  <div className="img-overlay-content">
                    <p>Tv Show Wiki</p>
                    <h5>
                      <i className="fa-brands fa-html5"></i>{" "}
                      <i className="fa-brands fa-js"></i>{" "}
                      <i className="fa-brands fa-css3"></i>
                    </h5>
                    <a
                    rel="noopener noreferrer"
                      target="_blank"
                      href="https://sandres-rick-and-morty-wiki.netlify.app/"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="img-item">
                <img className="ecommerce" src={doc} alt="" />
                <div className="img-overlay">
                  <div className="img-overlay-content">
                    <p>Landing Page</p>
                    <h5>
                      <i className="fa-brands fa-html5"></i>{" "}
                      <i className="fa-brands fa-js"></i>{" "}
                      <i className="fa-brands fa-css3"></i>{" "}
                      <i className="fa-brands fa-bootstrap"></i>
                    </h5>
                    <a
                    rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.nutriologacherety.com/"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="img-item">
                <img className="ecommerce" src={crud} alt="" />
                <div className="img-overlay">
                  <div className="img-overlay-content">
                    <p>crud management</p>
                    <h5>
                      <i className="fa-brands fa-html5"></i>{" "}
                      <i className="fa-brands fa-js"></i>{" "}
                      <i className="fa-brands fa-css3"></i>
                    </h5>
                    <a
                    rel="noopener noreferrer"
                      target="_blank"
                      href="https://users-crud-entregable.netlify.app/"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}

          {toggle === 1 && (
            <>
              <div className="img-item">
                <img className="ecommerce" src={ecommerce} alt="" />
                <div className="img-overlay">
                  <div className="img-overlay-content">
                    <p>online commerce</p>
                    <h5>
                      <i className="fa-brands fa-html5"></i>{" "}
                      <i className="fa-brands fa-js"></i>{" "}
                      <i className="fa-brands fa-css3"></i>
                    </h5>
                    <a
                    rel="noopener noreferrer"
                      target="_blank"
                      href="https://ecommerce-eduardo.netlify.app/"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}

          {toggle === 2 && (
            <>
              <div className="img-item">
                <img className="ecommerce" src={doc} alt="" />
                <div className="img-overlay">
                  <div className="img-overlay-content">
                    <p>Landing Page</p>
                    <h5>
                      <i className="fa-brands fa-html5"></i>{" "}
                      <i className="fa-brands fa-js"></i>{" "}
                      <i className="fa-brands fa-css3"></i>{" "}
                      <i className="fa-brands fa-bootstrap"></i>
                    </h5>
                    <a
                    rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.nutriologacherety.com/"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}

          {toggle === 3 && (
            <>
              <div className="img-item">
                <img className="ecommerce" src={morty} alt="" />
                <div className="img-overlay">
                  <div className="img-overlay-content">
                    <p>Tv Show Wiki</p>
                    <h5>
                      <i className="fa-brands fa-html5"></i>{" "}
                      <i className="fa-brands fa-js"></i>{" "}
                      <i className="fa-brands fa-css3"></i>
                    </h5>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://sandres-rick-and-morty-wiki.netlify.app/"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <section className="form-section">
        <div className="form-title">
          <h2>me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            molestias reiciendis assumenda quos enim magni sit nihil aliquam
            porro voluptatibus?
          </p>
        </div>
        <div className="form-container">
          <form className="form-item" action="">
            <div className="inputs-container">
              <input type="text" placeholder="Nombre" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Asunto" />
            </div>
            <div className="message-input">
              <textarea
                placeholder="Mensaje"
                name=""
                id=""
                cols="100"
                rows="5"
              ></textarea>
            </div>
            <button className="form-button">Enviar</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
