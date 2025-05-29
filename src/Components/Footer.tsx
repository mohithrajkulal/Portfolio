'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './Components.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className={styles.letsConnect}>Let's Connect</h2>
        <div className="flex justify-center space-x-6 my-6 text-xl">
          <a
            href="https://github.com/mohithrajkulal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/mohithraj-kulal-a12348196"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mohithrajkulal5@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>
        <hr className="border-t border-sky-500 opacity-20 mb-6" />
        <p className="text-sm text-gray-500">
          Made with 💙 using <span className="text-white font-semibold">Next.js</span>.
        </p>
        <p className="mt-2 text-xs text-gray-600">
          © {new Date().getFullYear()} Mohith. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
