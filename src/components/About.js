import { motion, useAnimationControls } from 'framer-motion';
import { about, spanishCv } from '../assets';
import { useIsVisible } from '../hooks/useIsVisible';
import '../styles/About.css';

export function About() {
  const { isVisible, elementRef } = useIsVisible({ once: true, threshold: 0.2 });

  const aboutControl = useAnimationControls();
  const aboutImgControl = useAnimationControls();

  if (isVisible) {
    aboutControl.start({
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    });

    aboutImgControl.start({
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    });
  }

  return (
    <section
      ref={elementRef}
      id='about'
      className='about-container'
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={aboutControl}
        className='about-img-container'
      >
        <img src={about} alt='landing' />
      </motion.div>
      <motion.div
        className='about-description'
        initial={{ x: 100, opacity: 0 }}
        animate={aboutImgControl}
      >
        <h2>Hola, Soy Eduardo Alejandro </h2>
        <p className='about-main-description'>
          Hola!! Soy Eduardo, desarrollador web especializado en React.js. soy un apasionado de la
          tecnologia con una increible capacidad del autoaprendizaje, tengo 22 años y soy de
          Monterrey, Nuevo Leon la ciudad de las montañas, me encantaria ser parte de tu equipo, si
          tienes alguna duda o quieres saber más de mi, puedes contactarme a través de mis redes
          sociales o por un mensaje a travez del formulario de contacto.
        </p>
        <div className='personal-container'>
          <div className='personal-info-container'>
            <div className='info-mini-containers'>
              <p className='bold'>Nombre :</p>
              <p className='name'> Eduardo Alejandro</p>
            </div>
            <div className='info-mini-containers'>
              <p className='bold'>Edad :</p>
              <p className='p'>22</p>
            </div>
            <div className='info-mini-containers'>
              <p className='bold tel'>Telefono :</p>
              <p className='p-2'> +52 828 173 2200</p>
            </div>
            <div className='info-mini-containers'>
              <p className='bold '>Email :</p>
              <p className='mail'> ebotellopenacontact@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='download-buttons-container'>
          <div>
            <a className='cv-buttons' download rel='noopener noreferrer' href={spanishCv}>
              {' '}
              Descargar Cv
            </a>
          </div>
          <div>
            <a className='cv-buttons' download rel='noopener noreferrer' href={spanishCv}>
              {' '}
              Download Cv
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
