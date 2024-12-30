import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Let’s connect!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <img
  src="/assets/contact/emailIcon.png" 
  alt="Email"
  className={styles.aboutImage}
/>

          <a href="mailto:sushreerath503@gmail.com">Email/sushreerath503@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="/assets/contact/linkedinIcon.png"
            alt="LinkedIn icon"
            className={styles.linkedinIcon}
          />
         <a href="https://www.linkedin.com/in/sushree-rath-251552269" target="_blank" rel="noopener noreferrer">linkedin.com/SushreeRath</a>

        </li>
        <li className={styles.link}>
          <img
            src="/assets/contact/githubIcon.png"
            alt="GitHub icon"
            className={styles.githubIcon}
          />
          <a href="https://github.com/sushreerath" target="_blank" rel="noopener noreferrer">github.com/Sushreerath</a>
        </li>
      </ul>
    </footer>
  );
};
