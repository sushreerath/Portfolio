import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json"; // Import history data

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {/* Skills Section (already working with images) */}
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="/assets/skills/html.png" alt="HTML" />
            </div>
            <p>HTML</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="/assets/skills/css.png" alt="CSS" />
            </div>
            <p>CSS</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="/assets/skills/react.png" alt="React" />
            </div>
            <p>React</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="/assets/skills/mongodb.png" alt="MongoDB" />
            </div>
            <p>MongoDB</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="/assets/skills/mysql.jpeg" alt="MySQL" />
            </div>
            <p>MySQL</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="/assets/skills/js.jpeg" alt="JavaScript" />
            </div>
            <p>JavaScript</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="/assets/skills/tailwind.jpeg" alt="TailwindCSS" />
            </div>
            <p>TailwindCSS</p>
          </div>
        </div>
        
        {/* History Section */}
        <ul className={styles.history}>
          {history.map((historyItem, historyIndex) => (
            <li key={historyIndex} className={styles.historyItem}>
              {/* Directly reference images from the public folder */}
              <img
                src={`/assets/history/${historyItem.imageSrc}`} // Path from public/assets/history/
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, expIndex) => (
                    <li key={expIndex}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
