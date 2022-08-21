import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { useTranslation } from 'react-i18next'
import '../styles/MySkills.css';


export default function SkillCard({ isVisible, skill, index }) {

  const [t] = useTranslation('global');

  const skillCardControl = useAnimationControls();

  if (isVisible) {
    skillCardControl.start({
      [skill.property]: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    });
  }

  return (
    <motion.div
      className='service-box'
      initial={{ [skill.property]: skill.translate, opacity: 0 }}
      animate={skillCardControl}
    >
      <i>{skill.icon}</i>
      <h3>{skill.technology}</h3>
      <p>{t(`skills.content.${index}`)}</p>
    </motion.div>
  );

}

