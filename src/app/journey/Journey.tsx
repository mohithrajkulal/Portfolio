'use client';
import styles from './projects.module.scss'

export default function Journey() {
  const Journey = [
    {
      title: "React Developer",
      description: "Building modern UIs with React, TypeScript, NestJS and NextJS. Key contributor to IGoalZero and Monte-Fiero platforms.",
      year: '2022-present'
    },
    {
      title: "Tech Support Engineer - Diya Systems",
      description: "Worked with Linux, cPanel, DNS & email troubleshooting. Built foundational problem-solving and scripting skills.",
      year: '2012-2022'
    },
    {
      title: "B.E - Computer Science Engineering",
      description: "Graduated from KIT, Mangalore. Started self-learning frontend tech.",
      year: '2016-2020'
    }
  ]

  const journey = 'My journey began in tech support, where I honed my problem-solving skills working with Linux systems, cPanel, and DNS management. Driven by a passion for building, I transitioned into frontend development—diving deep into React, TypeScript, and modern web technologies. Today, I craft clean, scalable user interfaces and contribute to full-stack projects using NestJS, GraphQL, and more. From support engineer to full-fledged React developer, my path reflects continuous learning, adaptability, and a love for building meaningful digital experiences'
  return (
    <div className={styles.journeyContainer}>
      <div className={styles.aboutContainer}>
      <h3>About My Short Journey</h3>
      <p>{journey}</p>
      </div>
       <div className={styles.journeyTimeline}>
      <div className={styles.journeyLine}></div>
      {
        Journey.map((experience, index) => (
          <div key={index} className={styles.experienceCard}>
            <div className={styles.experienceDot}></div>
            <div className={styles.experienceContent}>
              <span className={styles.experienceYear}>{experience?.year || ''}</span>
              <h3>{experience?.title}</h3>
              <p>{experience?.description}</p>
            </div>
          </div>
        ))
      }
    </div>
    </div>
   
  );
}