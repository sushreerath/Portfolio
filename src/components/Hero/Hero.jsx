
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Sushree Suman Rath</h1>
        <p className={styles.description}>
        Third-year BTech IT student
        Skilled in Python, C, C++, web development, 
        functional analysis, Power BI, and Microsoft Excel.
         Eager to contribute and learn continuously in the field of IT.
        </p>
        <a href="https://drive.google.com/file/d/1CeKnE6noDX-tFtEmrQQZMzkI7rSi69BF/view?usp=drive_link" className={styles.contactBtn} download>
  Download CV
</a>


      </div>
      <img
        src="/assets/hero/heroimage.jpg"
        alt=""
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
