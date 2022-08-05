import React from 'react';
import { ecommerce, morty, doc, crud } from '../assets';
import { useState } from 'react';
const MyProjects = () => {

  const [toggle, setToggle] = useState(0);


  return (
    <div>
       <section id='proyects' className='my-services-landing'>
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
    </div>
  );
};

export default MyProjects;