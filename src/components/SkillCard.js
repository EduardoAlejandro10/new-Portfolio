import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';

export default function SkillCard({ isVisible, skill }) {
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
      <i className='fa-brands fa-html5'></i>
      <h3>{skill.technology}</h3>
      <p>{skill.description}</p>
    </motion.div>
  );
}
