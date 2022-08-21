import { motion, useAnimationControls } from 'framer-motion';
import { about, EnglishPortfolio, spanishCv } from '../assets';
import { useIsVisible } from '../hooks/useIsVisible';
import '../styles/About.css';
import {useTranslation} from 'react-i18next';

export function About() {

  const { isVisible, elementRef } = useIsVisible({ once: true, threshold: 0.2 });

  const aboutControl = useAnimationControls();
  const aboutImgControl = useAnimationControls();

  const [t] = useTranslation('global');

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
        <h2>{t("about.title")}</h2>
        <p className='about-main-description'>
          {t("about.description")}
        </p>
        <div className='personal-container'>
          <div className='personal-info-container'>
            <div className='info-mini-containers'>
              <p className='bold'>{t("info.name")}</p>
              <p className='name'> Eduardo Alejandro</p>
            </div>
            <div className='info-mini-containers'>
              <p className='bold'>{t("info.age")}</p>
              <p className='p'>22</p>
            </div>
            <div className='info-mini-containers'>
              <p className='bold tel'>{t("info.Phone")}</p>
              <p className='p-2'> +52 828 173 2200</p>
            </div>
            <div className='info-mini-containers'>
              <p className='bold '>{t("info.email")}</p>
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
            <a className='cv-buttons' download rel='noopener noreferrer' href={EnglishPortfolio}>
              {' '}
              Download Cv
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
