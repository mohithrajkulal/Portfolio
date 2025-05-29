'use client';

import MovingIcons from "@/Components/MovingIcons";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import styles from './Dashboard.module.scss';

export default function Dashboard() {
  const openResume = () => {
    window.open('/Mohith_Resume.pdf', '_blank');
  };

  return (
    <main className={styles.main}>
        <div className={styles.profileContainer}>
            <div>
    <p className={styles.skillHeader}>REACT DEVELOPER</p>
      <p className={styles.greeting}>{"Hello, I'm"}</p>
      <p className={styles.name}>Mohith</p>
      <p className={styles.description}>
        Front-End Developer specializing in React.js, with proficiency in Next.js and foundational knowledge of backend development using NestJS.
      </p>
      <div className={styles.buttonContainer}>
        <button className={styles.LinkdIn} onClick={() => window.open("https://linkedin.com/in/mohithraj-kulal-a12348196", '_blank')}>
            <p>Visit me on LinkdIn</p> <IoIosArrowForward />
        </button>
        <button className={styles.viewResume} onClick={openResume}>
            <p>View Resume</p> <IoIosArrowForward />
        </button>
      </div>
      </div>
        <div>
            <Image 
                src="/profileImage.svg" 
                alt="profile" 
                className={styles.profileImage} 
                width={380}
                height={380}
                priority
            />
        </div>
        </div>
        
      <MovingIcons />
    </main>
  );
}

