import React from 'react';
import SkillCard from './SkillCard';
import { skills } from '../data/skills.data';
import { useIsVisible } from '../hooks/useIsVisible';
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { isVisible, elementRef } = useIsVisible({ once: true, threshold: 0.25 });

  const [t] = useTranslation('global');
  
  return (
    <>
      <section id='skills' className='my-services-landing'>
        <h2>
          {t("skills.title")} <span>{t("skills.title2")}</span>
        </h2>
        <p>
          {t("skills.description")}
        </p>
        <div className='underline-services'></div>
      </section>
      <section ref={elementRef} className='services-box-container'>
        {skills.map((skill, index) => (
          <SkillCard key={skill.id} isVisible={isVisible} skill={skill} index={index}  />
        ))}
      </section>
    </>
  );
}
