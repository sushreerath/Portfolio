import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
       
      <img
  src="/assets/about/aboutImage.png" 
  alt=""
  className={styles.aboutImage}
/>

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src="/about/cursorIcon.png"
              alt=""
              className={styles.icon}
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
  I am actively honing my skills in frontend development focusing on creating responsive and user-friendly interfaces using React.js along with HTML, CSS, and JavaScript. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src="/about/serverIcon.png"
              alt=""
              className={styles.icon}
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I am currently honing my skills in backend development with a focus on the MERN stack (MongoDB, Express.js, React.js, Node.js). My goal is to build efficient, secure, and scalable web applications while mastering full-stack development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src="/about/cursorIcon.png"
              alt=""
              className={styles.cursorIcon}
            />
            <div className={styles.aboutItemText}>
              <h3>Data Analysis</h3>
              <p>
              I am enhancing my expertise in data analysis by working with tools like Python, Power BI, and Microsoft Excel..
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
