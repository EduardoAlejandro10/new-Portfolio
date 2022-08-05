import React from 'react';
import SkillCard from './SkillCard';
import { skills } from '../data/skills.data';
import { useIsVisible } from '../hooks/useIsVisible';

export default function Skills() {
  const { isVisible, elementRef } = useIsVisible({ once: true, threshold: 0.25 });

  return (
    <>
      <section id='skills' className='my-services-landing'>
        <h2>
          Mis <span>Habilidades</span>
        </h2>
        <p>
          Algunas de mis habilidades como desarollador web enfocado a cumplir tus necesidades de aplicaciones web.
        </p>
        <div className='underline-services'></div>
      </section>
      <section ref={elementRef} className='services-box-container'>
        {skills.map((skill) => (
          <SkillCard key={skill.id} isVisible={isVisible} skill={skill} />
        ))}
      </section>
    </>
  );
}
