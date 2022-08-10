import React from "react";
import { useIsVisible } from '../hooks/useIsVisible';
import { useAnimationControls } from 'framer-motion';
import { motion } from 'framer-motion';
import '../styles/Freelance.css';

const Freelance = () => {
  const { isVisible, elementRef } = useIsVisible({
    once: true,
    threshold: 0.5,
  });

  const freelanceTransition = useAnimationControls();

  if (isVisible) {
    freelanceTransition.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    });
  }

  return (
    <div>
      <section ref={elementRef} className="freelance-container">
        <motion.div
          className="hire-container"
          initial={{ y: -200, opacity: 0 }}
          animate={freelanceTransition}
        >
          <h3  className="h2-freelance">Estoy Disponible Como Freelancer !!</h3>
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
    </div>
  );
};

export default Freelance;
