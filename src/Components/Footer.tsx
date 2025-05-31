"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { gitHub, LinkdIn } from "@/app/constants";
import styles from "./Components.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.centeredContainer}>
        <h2 className={styles.letsConnect}>{"Let's Connect"}</h2>
        <div className={styles.iconRow}>
          <a
            href={gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaGithub />
          </a>
          <a
            href={LinkdIn}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaLinkedin />
          </a>
          <a href="mohithrajkulal5@gmail.com" className={styles.iconLink}>
            <FaEnvelope />
          </a>
        </div>
        <hr className={styles.footerDivider} />
        <p className={styles.footerMadeWith}>
          Made with 💙 using <span className={styles.nextjsText}>Next.js</span>.
        </p>
        <p className={styles.footerCopyright}>
          © {new Date().getFullYear()} Mohith. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
