"use client";

import { IoIosArrowForward } from "react-icons/io";
import { SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";
import { LinkdIn } from "../constants";
import styles from "./Dashboard.module.scss";

export default function Dashboard() {
  const openResume = () => {
    window.open("/Mohith_Resume.pdf", "_blank");
  };

  return (
    <main className={styles.main}>
      <div className={styles.profileContainer}>
        <div>
          <p className={styles.skillHeader}>REACT DEVELOPER</p>
          <p className={styles.greeting}>{"Hello, I'm"}</p>
          <p className={styles.name}>Mohith</p>
          <p className={styles.description}>
            Front-End Developer specializing in React.js, with proficiency in
            Next.js and foundational knowledge of backend development using
            NestJS.
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.LinkdIn}
              onClick={() => window.open(LinkdIn, "_blank")}
            >
              <p>Visit me on LinkdIn</p> <IoIosArrowForward />
            </button>
            <button className={styles.viewResume} onClick={openResume}>
              <p>View Resume</p> <IoIosArrowForward />
            </button>
          </div>
          <div className={styles.skillIcons}>
            <SiTypescript title="TypeScript" color="#94a3b8" size={48} />
            <SiReact
              title="React"
              color="#94a3b8"
              size={48}
              className={styles.spin}
            />
            <SiNextdotjs title="Next.js" color="#94a3b8" size={48} />
          </div>
        </div>
        <div>
          <img
            src="/profileImage.svg"
            alt="profile"
            className={styles.profileImage}
          />
        </div>
      </div>
    </main>
  );
}
