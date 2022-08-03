import { ecommerce, morty, doc, crud } from '../assets';
import '../styles/Home.css';
import InterfaceTitle from './InterfaceTitle';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Contact } from './Contact';
import { About } from './About';
import Skills from './Skills';

const Home = () => {
  const [toggle, setToggle] = useState(0);

  return (
    <div className='main-landing'>
      <InterfaceTitle />
      <About />
      <Skills />
      <section className='freelance-container'>
        <motion.div
          className='hire-container'
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          <h3 className='h2-freelance'>Estoy Disponible Como Freelancer !!</h3>
          <a
            rel='noopener noreferrer'
            target='_blank'
            className='hire-button'
            href='https://wa.me/528281732200'
          >
            Contratame
          </a>
        </motion.div>
      </section>
      <section className='my-services-landing'>
        <h2>
          Mis <span>Proyectos</span>
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ratione vitae
          asperiores, earum tenetur optio dignissimos reiciendis aliquam eum praesentium?
        </p>
        <div className='underline-services'></div>
      </section>
      <section className='my-work'>
        <div className='work-buttons-container'>
          <button onClick={() => setToggle(0)}>Todos</button>
          <button onClick={() => setToggle(1)}>Ecommerce</button>
          <button onClick={() => setToggle(2)}>Freelance Projects</button>
          <button onClick={() => setToggle(3)}>Rick And Morty Wiki</button>
        </div>
        <div className='projects-img-container'>
          {toggle === 0 && (
            <>
              <div className='img-item'>
                <img className='ecommerce' src={ecommerce} alt='' />
                <div className='img-overlay'>
                  <div className='img-overlay-content'>
                    <p>online commerce</p>
                    <h5>
                      <i className='fa-brands fa-html5'></i> <i className='fa-brands fa-js'></i>{' '}
                      <i className='fa-brands fa-css3'></i>
                    </h5>
                    <a
                      rel='noopener noreferrer'
                      target='_blank'
                      href='https://ecommerce-eduardo.netlify.app/'
                    >
                      <i className='fa-solid fa-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className='img-item'>
                <img className='ecommerce' src={morty} alt='' />
                <div className='img-overlay'>
                  <div className='img-overlay-content'>
                    <p>Tv Show Wiki</p>
                    <h5>
                      <i className='fa-brands fa-html5'></i> <i className='fa-brands fa-js'></i>{' '}
                      <i className='fa-brands fa-css3'></i>
                    </h5>
                    <a
                      rel='noopener noreferrer'
                      target='_blank'
                      href='https://sandres-rick-and-morty-wiki.netlify.app/'
                    >
                      <i className='fa-solid fa-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className='img-item'>
                <img className='ecommerce' src={doc} alt='' />
                <div className='img-overlay'>
                  <div className='img-overlay-content'>
                    <p>Landing Page</p>
                    <h5>
                      <i className='fa-brands fa-html5'></i> <i className='fa-brands fa-js'></i>{' '}
                      <i className='fa-brands fa-css3'></i>{' '}
                      <i className='fa-brands fa-bootstrap'></i>
                    </h5>
                    <a
                      rel='noopener noreferrer'
                      target='_blank'
                      href='https://www.nutriologacherety.com/'
                    >
                      <i className='fa-solid fa-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='img-item'>
                <img className='ecommerce' src={crud} alt='' />
                <div className='img-overlay'>
                  <div className='img-overlay-content'>
                    <p>crud management</p>
                    <h5>
                      <i className='fa-brands fa-html5'></i> <i className='fa-brands fa-js'></i>{' '}
                      <i className='fa-brands fa-css3'></i>
                    </h5>
                    <a
                      rel='noopener noreferrer'
                      target='_blank'
                      href='https://users-crud-entregable.netlify.app/'
                    >
                      <i className='fa-solid fa-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}

          {toggle === 1 && (
            <>
              <div className='img-item'>
                <img className='ecommerce' src={ecommerce} alt='' />
                <div className='img-overlay'>
                  <div className='img-overlay-content'>
                    <p>online commerce</p>
                    <h5>
                      <i className='fa-brands fa-html5'></i> <i className='fa-brands fa-js'></i>{' '}
                      <i className='fa-brands fa-css3'></i>
                    </h5>
                    <a
                      rel='noopener noreferrer'
                      target='_blank'
                      href='https://ecommerce-eduardo.netlify.app/'
                    >
                      <i className='fa-solid fa-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}

          {toggle === 2 && (
            <>
              <div className='img-item'>
                <img className='ecommerce' src={doc} alt='' />
                <div className='img-overlay'>
                  <div className='img-overlay-content'>
                    <p>Landing Page</p>
                    <h5>
                      <i className='fa-brands fa-html5'></i> <i className='fa-brands fa-js'></i>{' '}
                      <i className='fa-brands fa-css3'></i>{' '}
                      <i className='fa-brands fa-bootstrap'></i>
                    </h5>
                    <a
                      rel='noopener noreferrer'
                      target='_blank'
                      href='https://www.nutriologacherety.com/'
                    >
                      <i className='fa-solid fa-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}

          {toggle === 3 && (
            <>
              <div className='img-item'>
                <img className='ecommerce' src={morty} alt='' />
                <div className='img-overlay'>
                  <div className='img-overlay-content'>
                    <p>Tv Show Wiki</p>
                    <h5>
                      <i className='fa-brands fa-html5'></i> <i className='fa-brands fa-js'></i>{' '}
                      <i className='fa-brands fa-css3'></i>
                    </h5>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://sandres-rick-and-morty-wiki.netlify.app/'
                    >
                      <i className='fa-solid fa-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Home;
